import json
import re
import time
from dataclasses import dataclass, asdict
from pathlib import Path
from typing import Dict, List, Optional, Tuple

import requests


ROOT = "https://www.constitutionofindia.net"
LISTING_URL = f"{ROOT}/the-constitution-framers/"
SITEMAP_INDEX_PROXY = "https://r.jina.ai/http://https://www.constitutionofindia.net/sitemap.xml"

OUT_JSON = Path(__file__).resolve().parents[1] / "src" / "data" / "framers.json"


@dataclass(frozen=True)
class Framer:
    Name: str
    Party: str
    Constituency: str
    Education: str
    Life_span: str  # stored as "YYYY–YYYY" or "DoB–DoD" when available


def normalize_name(name: str) -> str:
    # Normalize to dedupe common variants safely.
    name = name.strip()
    name = re.sub(r"\s+", " ", name)
    name = name.replace("’", "'")
    # Remove common honorifics that appear in some records.
    name = re.sub(r"^(dr|shri|sardar)\.?\s+", "", name, flags=re.I)
    # Keep only alphanumerics for key.
    return re.sub(r"[^a-z0-9]", "", name.lower())


def fetch(url: str, session: requests.Session, *, sleep_s: float = 0.15) -> str:
    resp = session.get(
        url,
        timeout=35,
        headers={
            "User-Agent": "SamvidhaanPlus/1.0 (educational; data extraction for local app)",
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        },
    )
    resp.raise_for_status()
    if sleep_s:
        time.sleep(sleep_s)
    return resp.text


def extract_links(html: str, path_prefix: str) -> List[str]:
    # Extract absolute links for a given prefix like "/members/" or "/party/".
    abs_links = set(
        re.findall(
            r'href="(' + re.escape(ROOT) + re.escape(path_prefix) + r'[^"#\s]+/)"',
            html,
            flags=re.I,
        )
    )
    if not abs_links:
        abs_links = set(
            re.findall(
                r"(" + re.escape(ROOT) + re.escape(path_prefix) + r'[^"#\s]+/)',
                html,
                flags=re.I,
            )
        )
    return sorted(abs_links)


def extract_member_links(html: str) -> List[str]:
    return extract_links(html, "/members/")


def extract_discovery_links(html: str) -> List[str]:
    # Crawl category pages that may expose additional members.
    discovery = set()
    for prefix in ["/party/", "/constituency/", "/religion/", "/assembly-committees/", "/committees/"]:
        for u in extract_links(html, prefix):
            discovery.add(u)
    return sorted(discovery)


def extract_field(label: str, text: str) -> Optional[str]:
    # Try "Party:" / "Constituency:" fields in page text.
    m = re.search(rf"{re.escape(label)}\s*:\s*([^\n]+)", text, flags=re.I)
    if m:
        return m.group(1).strip()
    return None


def extract_name_years(text: str) -> Tuple[Optional[str], str]:
    # Many pages have "Name YYYY - YYYY"
    # Also sometimes "13 May 1894 - 11 December 1963".
    m = re.search(
        r"^\s*([A-Z][A-Za-z\.\-’'\s]+?)\s+((?:\d{1,2}\s+[A-Za-z]+\s+)?\d{4}|-)\s*-\s*((?:\d{1,2}\s+[A-Za-z]+\s+)?\d{4}|-)",
        text,
        flags=re.M,
    )
    if not m:
        return None, "—"
    name = re.sub(r"\s+", " ", m.group(1)).strip()
    start = m.group(2).strip()
    end = m.group(3).strip()
    # Convert "YYYY - YYYY" to "YYYY–YYYY"
    life = f"{start}–{end}".replace(" - ", "–")
    life = life.replace("--", "—")
    return name, life


def scrape() -> List[Framer]:
    session = requests.Session()

    # Use the site's members sitemap (via proxy) to get the full list reliably.
    index_txt = fetch(SITEMAP_INDEX_PROXY, session, sleep_s=0.0)
    m = re.search(r"(https://www\.constitutionofindia\.net/members-sitemap\.xml)", index_txt)
    if not m:
        raise SystemExit("Could not locate members-sitemap.xml in sitemap index.")
    members_sitemap = m.group(1)

    members_txt = fetch(f"https://r.jina.ai/http://{members_sitemap}", session, sleep_s=0.0)
    # r.jina.ai may render XML as markdown; stop before "]" if present.
    member_links = sorted(
        set(re.findall(r"https://www\.constitutionofindia\.net/members/[^\]\s<]+", members_txt))
    )
    if not member_links:
        raise SystemExit("No member URLs found in members sitemap.")
    print(f"Found {len(member_links)} member links from sitemap", flush=True)

    framers_by_key: Dict[str, Framer] = {}

    for i, link in enumerate(member_links, start=1):
        try:
            html = fetch(link, session)
        except Exception as e:
            print(f"WARN: failed fetch {link} ({e})", flush=True)
            continue
        # Convert HTML to plainish text for regex extraction.
        text = re.sub(r"<[^>]+>", "\n", html)
        text = re.sub(r"\n{2,}", "\n", text)

        name, life = extract_name_years(text)
        if not name:
            # fallback: slug -> title case
            slug = link.rstrip("/").split("/")[-1]
            name = slug.replace("-", " ").title()

        party = extract_field("Party", text) or "—"
        constituency = extract_field("Constituency", text) or "—"
        # Education is not consistently available on the site listing; keep placeholder.
        education = "—"

        framer = Framer(
            Name=name,
            Party=party,
            Constituency=constituency,
            Education=education,
            Life_span=life if life else "—",
        )

        key = normalize_name(framer.Name)
        if not key:
            continue

        # Prefer a record that has more filled fields.
        existing = framers_by_key.get(key)
        if existing is None:
            framers_by_key[key] = framer
        else:
            def score(x: Framer) -> int:
                return sum(1 for v in [x.Party, x.Constituency, x.Education, x.Life_span] if v and v != "—")
            if score(framer) > score(existing):
                framers_by_key[key] = framer

        if i % 25 == 0:
            print(f"Scraped {i}/{len(member_links)}...", flush=True)

    framers = list(framers_by_key.values())
    framers.sort(key=lambda f: f.Name.lower())
    return framers


def main() -> None:
    framers = scrape()
    OUT_JSON.parent.mkdir(parents=True, exist_ok=True)
    OUT_JSON.write_text(
        json.dumps(
            [
                {
                    "Name": f.Name,
                    "Party": f.Party,
                    "Constituency": f.Constituency,
                    "Education": f.Education,
                    "Life span": f.Life_span,
                }
                for f in framers
            ],
            ensure_ascii=False,
            indent=2,
        ),
        encoding="utf-8",
    )
    print(f"Wrote {len(framers)} framers to {OUT_JSON}")


if __name__ == "__main__":
    main()


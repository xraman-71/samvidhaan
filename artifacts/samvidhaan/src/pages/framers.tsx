import { useMemo } from "react";
import { motion } from "framer-motion";
import framersDirectory from "@/data/framers.json";

type FramerDirectoryRow = {
  id: number;
  name: string;
  party: string;
  constituency: string;
  education: string;
  lifespan: string;
  dob?: string;
  dod?: string;
  link?: string;
};

type FramerRecord = {
  id: number;
  Name: string;
  Party: string;
  Constituency: string;
  Education: string;
  "Life span": string;
  Link?: string;
};

const toSafe = (value: unknown) => {
  if (typeof value !== "string") return "—";
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : "—";
};

const toSafeEducation = (value: unknown) => {
  const v = toSafe(value);
  if (v.toLowerCase() === "not specified") return "—";
  if (v.toLowerCase() === "not recorded") return "—";
  return v;
};

const normalizeName = (name: string) =>
  name
    .toLowerCase()
    .replace(/constituent assembly members/gi, "")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/[^a-z0-9]/g, "");

const cleanDisplayName = (name: string) => {
  const cleaned = name
    .replace(/constituent assembly members/gi, "")
    .replace(/\s+/g, " ")
    .trim();
  return cleaned.length ? cleaned : "Unknown Member";
};

const EDUCATION_OVERRIDES: Record<string, string> = {};

const completenessScore = (f: FramerRecord) =>
  [f.Party, f.Constituency, f.Education, f["Life span"]].reduce(
    (acc, v) => (v && v !== "—" ? acc + 1 : acc),
    0
  );

export default function Framers() {
  const framers = useMemo(() => {
    const raw = (framersDirectory as FramerDirectoryRow[]) ?? [];

    const byName = new Map<string, FramerRecord>();

    for (const row of raw) {
      const candidate: FramerRecord = {
        id: typeof row.id === "number" ? row.id : 0,
        Name: cleanDisplayName(toSafe(row.name)),
        Party: toSafe(row.party),
        Constituency: toSafe(row.constituency),
        Education: toSafeEducation(row.education),
        "Life span": toSafe(row.lifespan),
        Link: typeof row.link === "string" ? row.link : undefined,
      };

      const key = normalizeName(candidate.Name);
      if (!key) continue;

      if (candidate.Education === "—" && EDUCATION_OVERRIDES[key]) {
        candidate.Education = EDUCATION_OVERRIDES[key];
      }

      const existing = byName.get(key);
      if (!existing || completenessScore(candidate) > completenessScore(existing)) {
        byName.set(key, candidate);
      }
    }

    return Array.from(byName.values()).sort((a, b) => {
      const aId = Number.isFinite(a.id) && a.id > 0 ? a.id : Number.MAX_SAFE_INTEGER;
      const bId = Number.isFinite(b.id) && b.id > 0 ? b.id : Number.MAX_SAFE_INTEGER;
      if (aId !== bId) return aId - bId;
      return a.Name.localeCompare(b.Name, undefined, { sensitivity: "base" });
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-primary text-primary-foreground py-16 px-4 md:px-8 border-b border-primary-border/20">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">The Constitution Framers</h1>
          <p className="text-primary-foreground/80 text-lg max-w-3xl mx-auto">
            Directory of Constituent Assembly members with party, constituency, education, and lifespan details.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="rounded-3xl border border-border bg-card shadow-sm overflow-hidden"
          >
            <div className="px-4 md:px-6 py-4 border-b border-border bg-muted/40">
              <p className="text-sm text-muted-foreground">
                Framers directory (deduplicated merged list): {framers.length} entries
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs md:text-sm">
                <thead className="bg-muted/30">
                  <tr className="border-b border-border">
                    <th className="text-left font-semibold p-2 md:p-3 w-[70px]">ID</th>
                    <th className="text-left font-semibold p-2 md:p-3 min-w-[220px]">Name</th>
                    <th className="text-left font-semibold p-2 md:p-3 min-w-[180px]">Party</th>
                    <th className="text-left font-semibold p-2 md:p-3 min-w-[180px]">Constituency</th>
                    <th className="text-left font-semibold p-2 md:p-3 min-w-[180px]">Education</th>
                    <th className="text-left font-semibold p-2 md:p-3 min-w-[140px]">Life span (DoB-DoD)</th>
                    <th className="text-left font-semibold p-2 md:p-3 min-w-[140px]">Source</th>
                  </tr>
                </thead>
                <tbody>
                  {framers.map((framer, idx) => (
                    <tr key={`${framer.Name}-${idx}`} className="border-b border-border/60 last:border-b-0">
                      <td className="p-2 md:p-3 text-muted-foreground align-top">{framer.id || "—"}</td>
                      <td className="p-2 md:p-3 font-medium align-top">{framer.Name}</td>
                      <td className="p-2 md:p-3 text-muted-foreground align-top">{framer.Party}</td>
                      <td className="p-2 md:p-3 text-muted-foreground align-top">{framer.Constituency}</td>
                      <td className="p-2 md:p-3 text-muted-foreground align-top">{framer.Education}</td>
                      <td className="p-2 md:p-3 text-muted-foreground align-top">{framer["Life span"]}</td>
                      <td className="p-2 md:p-3 text-muted-foreground align-top">
                        {framer.Link ? (
                          <a
                            href={framer.Link}
                            target="_blank"
                            rel="noreferrer"
                            className="underline underline-offset-2 hover:text-foreground"
                          >
                            Open
                          </a>
                        ) : (
                          "—"
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="px-4 md:px-6 py-4 border-t border-border bg-muted/20">
              <p className="text-sm text-muted-foreground leading-relaxed">
                * Data note:
                <br />
                Some members have no reliably recorded birth/death dates.
                <br />
                Some members have no publicly documented education details.
                <br />
                These are historical documentation gaps, not errors in this application.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}


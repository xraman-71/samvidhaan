import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CalendarDays, Files, Landmark, PenSquare, ScrollText, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const milestones = [
  {
    date: "1934",
    title: "Idea of a Constituent Assembly",
    detail:
      "M. N. Roy first articulated the idea of a Constituent Assembly elected by Indians to frame their own Constitution.",
  },
  {
    date: "1940",
    title: "August Offer",
    detail:
      "The British government accepted, in principle, that Indians would frame their own Constitution after the war.",
  },
  {
    date: "1946",
    title: "Cabinet Mission Plan",
    detail:
      "The plan proposed the structure for electing a Constituent Assembly, creating the formal path for constitution-making.",
  },
  {
    date: "9 Dec 1946",
    title: "First Meeting of the Assembly",
    detail:
      "The Constituent Assembly met for the first time in New Delhi; Dr. Sachchidananda Sinha served as temporary Chairman.",
  },
  {
    date: "13 Dec 1946",
    title: "Objective Resolution Introduced",
    detail:
      "Jawaharlal Nehru moved the Objective Resolution, which later shaped the philosophical foundation of the Preamble.",
  },
  {
    date: "22 Jan 1947",
    title: "Objective Resolution Adopted",
    detail:
      "The Assembly adopted the Resolution, defining sovereignty, democracy, justice, and rights as core constitutional goals.",
  },
  {
    date: "15 Aug 1947",
    title: "India Becomes Independent",
    detail:
      "After independence and partition, the Assembly became a sovereign body and continued as constitution-maker for India.",
  },
  {
    date: "29 Aug 1947",
    title: "Drafting Committee Formed",
    detail:
      "A seven-member Drafting Committee was appointed under Dr. B. R. Ambedkar to prepare the draft Constitution.",
  },
  {
    date: "4 Nov 1948",
    title: "Draft Constitution Introduced",
    detail:
      "Dr. Ambedkar introduced the Draft Constitution in the Assembly for detailed debate, clause by clause.",
  },
  {
    date: "26 Nov 1949",
    title: "Constitution Adopted",
    detail:
      "The Constituent Assembly adopted, enacted, and gave to the people the Constitution of India.",
  },
  {
    date: "24 Jan 1950",
    title: "Final Signing",
    detail:
      "Members signed the Constitution in English and Hindi calligraphy; Dr. Rajendra Prasad signed as President of the Assembly.",
  },
  {
    date: "26 Jan 1950",
    title: "Constitution Comes Into Force",
    detail:
      "India became a Republic and the Constitution formally came into effect, marking constitutional democracy in action.",
  },
];

const committees = [
  {
    name: "Drafting Committee",
    lead: "Dr. B. R. Ambedkar",
    work: "Prepared the legal text and structure of the Constitution.",
  },
  {
    name: "Union Powers Committee",
    lead: "Jawaharlal Nehru",
    work: "Defined legislative and executive powers of the Union.",
  },
  {
    name: "Provincial Constitution Committee",
    lead: "Sardar Vallabhbhai Patel",
    work: "Designed constitutional framework for provinces (states).",
  },
  {
    name: "Advisory Committee on Fundamental Rights, Minorities and Tribal Areas",
    lead: "Sardar Vallabhbhai Patel",
    work: "Shaped rights protections and minority safeguards.",
  },
  {
    name: "Rules of Procedure Committee",
    lead: "Dr. Rajendra Prasad",
    work: "Set rules for Assembly functioning and debates.",
  },
  {
    name: "Steering Committee",
    lead: "Dr. Rajendra Prasad",
    work: "Coordinated agenda, scheduling, and progress of deliberations.",
  },
];

const assemblyLeaders = [
  {
    role: "Temporary Chairman (First Sitting)",
    name: "Dr. Sachchidananda Sinha",
    detail: "Presided over the inaugural sitting on 9 December 1946.",
  },
  {
    role: "President of the Assembly",
    name: "Dr. Rajendra Prasad",
    detail: "Elected permanent President and guided final adoption and signing.",
  },
  {
    role: "Vice-President of the Assembly",
    name: "H. C. Mookerjee",
    detail: "Supported proceedings and chaired deliberations when required.",
  },
  {
    role: "Constitutional Adviser",
    name: "B. N. Rau",
    detail: "Prepared the initial constitutional draft note and comparative inputs.",
  },
];

const keyDebates = [
  {
    title: "Fundamental Rights & Remedies",
    detail:
      "Members debated enforceable rights, limitations, and judicial remedies, leading to robust rights architecture with constitutional writs.",
    focus: "Part III and Articles 32/226 framework",
  },
  {
    title: "Union-State Balance",
    detail:
      "The Assembly designed a federal system with a strong Union while preserving state-level governance and legislative domains.",
    focus: "Legislative lists and emergency structure",
  },
  {
    title: "Minority Safeguards & Social Justice",
    detail:
      "Representation, non-discrimination, abolition of untouchability, and affirmative safeguards were discussed at length.",
    focus: "Equality code, reservations, and protections",
  },
  {
    title: "Parliamentary Democracy",
    detail:
      "After comparing constitutional systems, the Assembly adopted cabinet responsibility to the legislature.",
    focus: "Parliamentary executive model",
  },
  {
    title: "Language, Citizenship, and Integration",
    detail:
      "Complex issues of national language, transitional citizenship, and unity after partition were negotiated carefully.",
    focus: "National integration with pluralism",
  },
];

const assemblyOutcomes = [
  "A written Constitution with a detailed institutional framework.",
  "Preamble values rooted in sovereignty, justice, liberty, equality, and fraternity.",
  "Fundamental Rights, Directive Principles, and Fundamental Duties architecture.",
  "Independent judiciary with judicial review and constitutional remedies.",
  "Universal adult franchise-based democratic republic framework.",
];

export default function Making() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden bg-primary text-primary-foreground py-20 md:py-28 px-4 md:px-8">
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <p className="inline-flex items-center gap-2 text-primary-foreground/75 text-xs font-semibold tracking-widest uppercase mb-5">
              <Sparkles className="h-4 w-4" /> Constitution Making Journey
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif leading-tight mb-6">
              How the Indian Constitution
              <br className="hidden md:block" /> was made
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/85 leading-relaxed max-w-3xl">
              A professional, step-by-step narrative from first idea to enforcement:
              debates, committees, drafting, amendments, and the final signing that shaped modern India.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
          >
            {[
              { icon: CalendarDays, label: "Time Taken", value: "2 years, 11 months, 18 days" },
              { icon: Users, label: "Final Members", value: "299" },
              { icon: Files, label: "Sessions", value: "11" },
              { icon: ScrollText, label: "Adopted On", value: "26 Nov 1949" },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm p-4 md:p-5">
                <s.icon className="h-5 w-5 text-secondary mb-2" />
                <p className="text-xs uppercase tracking-wider text-primary-foreground/70">{s.label}</p>
                <p className="text-sm md:text-base font-semibold mt-1">{s.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary mb-4">Timeline: Start to Finish</h2>
            <p className="text-muted-foreground text-lg">
              The constitution-making process was iterative, public-facing, and deeply debated. Each step below built toward adoption.
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute left-[120px] top-0 bottom-0 w-px bg-border" />
            <div className="space-y-5">
              {milestones.map((m, i) => (
                <motion.div
                  key={`${m.date}-${i}`}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{ duration: 0.45, delay: i * 0.03 }}
                  className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-4 md:gap-6 items-start"
                >
                  <div className="md:text-right">
                    <span className="inline-flex md:inline text-xs font-semibold tracking-wide uppercase px-2 py-1 md:px-0 md:py-0 rounded-full md:rounded-none bg-secondary/10 md:bg-transparent text-secondary">
                      {m.date}
                    </span>
                  </div>
                  <div className="relative rounded-2xl border border-border bg-card p-5 md:p-6 shadow-sm">
                    <div className="hidden md:block absolute -left-[26px] top-7 h-3 w-3 rounded-full bg-secondary border-4 border-background" />
                    <h3 className="text-lg font-bold text-foreground mb-2">{m.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{m.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 bg-muted/30 border-y border-border/50">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary mb-4">Major Committees</h2>
            <p className="text-muted-foreground text-lg">
              The Assembly worked through specialized committees to translate political vision into institutional design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {committees.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-lg font-bold text-foreground leading-snug">{c.name}</h3>
                  <Landmark className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                </div>
                <p className="text-sm text-secondary font-medium mb-2">Lead: {c.lead}</p>
                <p className="text-muted-foreground leading-relaxed">{c.work}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <PenSquare className="h-6 w-6 text-secondary" />
              <h2 className="text-2xl md:text-3xl font-bold font-serif text-primary">Legacy of the Making Process</h2>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              The Indian Constitution was not drafted in haste. It was debated in detail, revised through committees,
              and refined through constitutional morality, comparative study, and social realities.
              Its making itself became a democratic lesson: institutions must be designed to protect both majority will and minority rights.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/explore">
                <Button size="lg" className="h-12 px-8">
                  Explore Articles <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="h-12 px-8">
                  Read About Ambedkar
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 px-4 md:px-8">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-border bg-muted/30 p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-5">
              <Users className="h-6 w-6 text-secondary" />
              <h2 className="text-2xl md:text-3xl font-bold font-serif text-primary">Constituent Assembly</h2>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed mb-7">
              The Constituent Assembly was the body that debated, drafted, and adopted the Constitution of India.
              It worked through committees, open deliberations, and clause-by-clause scrutiny to balance liberty,
              equality, federalism, minority safeguards, and democratic accountability.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: "First Meeting", value: "9 Dec 1946" },
                { label: "Final Strength", value: "299 Members" },
                { label: "Total Sessions", value: "11 Sessions" },
                { label: "Adoption", value: "26 Nov 1949" },
              ].map((fact) => (
                <div key={fact.label} className="rounded-2xl border border-border bg-card p-4 shadow-sm">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{fact.label}</p>
                  <p className="text-base font-semibold text-foreground mt-1">{fact.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { label: "Original Strength (Planned)", value: "389 Members" },
                { label: "Provincial Seats", value: "292" },
                { label: "Princely State Seats", value: "93" },
                { label: "Chief Commissioner Areas", value: "4" },
              ].map((fact) => (
                <div key={fact.label} className="rounded-2xl border border-border bg-card p-4 shadow-sm">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{fact.label}</p>
                  <p className="text-base font-semibold text-foreground mt-1">{fact.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="rounded-3xl border border-border bg-card p-8 md:p-10 mt-8 shadow-sm"
          >
            <h3 className="text-2xl md:text-3xl font-bold font-serif text-primary mb-4">
              Structure, Representation, and Working Method
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Members were largely elected indirectly by Provincial Legislative Assemblies through proportional
              representation by single transferable vote, while princely states sent nominees. The Assembly
              sat across 11 sessions between 1946 and 1949, holding extensive debates before final adoption.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Indirect election by Provincial Legislatures (PR-STV).",
                "Community-wise representation under the then-existing framework.",
                "Committee-led drafting followed by open floor debate.",
                "Multiple readings and amendment discussions before final text.",
              ].map((point) => (
                <div key={point} className="rounded-2xl border border-border bg-muted/30 p-4">
                  <p className="text-sm md:text-base text-foreground/90 leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="rounded-3xl border border-border bg-card p-8 md:p-10 mt-8 shadow-sm"
          >
            <h3 className="text-2xl md:text-3xl font-bold font-serif text-primary mb-6">Key Office Bearers</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {assemblyLeaders.map((leader) => (
                <div key={leader.role} className="rounded-2xl border border-border bg-background p-5">
                  <p className="text-xs uppercase tracking-wider text-secondary font-semibold mb-1">{leader.role}</p>
                  <p className="text-lg font-bold text-foreground">{leader.name}</p>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{leader.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-3xl border border-border bg-card p-8 md:p-10 mt-8 shadow-sm"
          >
            <h3 className="text-2xl md:text-3xl font-bold font-serif text-primary mb-6">Major Debates in the Assembly</h3>
            <div className="space-y-4">
              {keyDebates.map((debate) => (
                <div key={debate.title} className="rounded-2xl border border-border bg-muted/30 p-5">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-2">
                    <h4 className="text-lg font-bold text-foreground">{debate.title}</h4>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-card border border-border text-muted-foreground">
                      {debate.focus}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{debate.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="rounded-3xl border border-border bg-primary text-primary-foreground p-8 md:p-10 mt-8"
          >
            <h3 className="text-2xl md:text-3xl font-bold font-serif mb-4">What the Assembly Delivered</h3>
            <p className="text-primary-foreground/85 leading-relaxed mb-5">
              The Constituent Assembly did not merely produce legal text; it built a democratic operating system for a
              diverse and newly independent nation.
            </p>
            <ul className="space-y-3">
              {assemblyOutcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-secondary mt-2 shrink-0" />
                  <span className="text-primary-foreground/90">{outcome}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

import React from "react";
import { motion } from "framer-motion";
import { constitutionFacts } from "@/data/constitution";
import { Calendar, Clock, BookOpen, ScrollText, ShieldCheck, Scale, Award, Zap, Globe, PenTool, Palette } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Modern Hero & Introduction */}
      <section className="relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24 px-4 md:px-8 bg-linear-to-b from-primary to-primary/90 text-primary-foreground">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.2)_0%,transparent_50%)]" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-secondary/30 blur-3xl" />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-3/5 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold tracking-widest uppercase mb-6">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                  The Supreme Law of India
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-serif mb-8 leading-[1.1]">
                  A Living Soul of <br className="hidden md:block" />
                  <span className="text-secondary-foreground/90 italic">Modern Democracy</span>
                </h1>
                <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-10 max-w-3xl">
                  The Constitution of India is the bedrock of our republic. Far more than a mere collection of articles, it is a revolutionary document that transformed a diverse civilization into a unified democratic nation, securing justice, liberty, and equality for all its citizens.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                  <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-3 rounded-2xl">
                    <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5 text-secondary-foreground" />
                    </div>
                    <div className="text-left">
                      <p className="text-[10px] font-black uppercase tracking-wider text-white/40">Guaranteed</p>
                      <p className="text-sm font-bold">Fundamental Rights</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-3 rounded-2xl">
                    <div className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                      <Scale className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <p className="text-[10px] font-black uppercase tracking-wider text-white/40">Structure</p>
                      <p className="text-sm font-bold">Democratic Republic</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="lg:w-2/5"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-10 shadow-2xl relative">
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center shadow-lg transform -rotate-12">
                  <Award className="w-6 h-6 text-primary" />
                </div>

                <h3 className="text-xl font-bold mb-6 border-b border-white/10 pb-4">Key Constitutional Milestones</h3>
                <div className="space-y-6">
                  {[
                    { label: "Drafted Over", val: constitutionFacts.timeTaken, icon: Clock },
                    { label: "Words Count", val: "~1,45,000", icon: PenTool },
                    { label: "Original Script", val: "Handwritten in Hindi & English", icon: ScrollText },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-10 h-10 shrink-0 rounded-full bg-white/10 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-secondary-foreground" />
                      </div>
                      <div>
                        <p className="text-xs text-white/50 font-medium uppercase tracking-wider">{item.label}</p>
                        <p className="text-base font-bold text-white mt-0.5">{item.val}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modern Stats Grid */}
      <section className="relative -mt-12 z-20 px-4 md:px-8 mb-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { label: "Total Articles", val: constitutionFacts.totalArticles, desc: "Detailed provisions", color: "blue" },
              { label: "Parts", val: constitutionFacts.totalParts, desc: "Thematic chapters", color: "amber" },
              { label: "Schedules", val: constitutionFacts.totalSchedules, desc: "Supplementary lists", color: "emerald" },
              { label: "Amendments", val: constitutionFacts.totalAmendments, desc: "Adapting over time", color: "rose" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="bg-card border border-border/50 p-6 md:p-8 rounded-3xl shadow-sm hover:shadow-md transition-all group"
              >
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-2 group-hover:text-primary transition-colors">
                  {stat.label}
                </p>
                <p className="text-2xl md:text-3xl font-bold text-foreground mb-1 font-serif">{stat.val}</p>
                <p className="text-xs text-muted-foreground">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Narrative Section - The Soul of Governance */}
      <section className="py-20 px-4 md:px-8 bg-background overflow-hidden">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-primary mb-6">The Philosophy of Our Nation</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-8 rounded-full" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed italic">
              "The Constitution is not a mere lawyer's document, it is a vehicle of Life, and its spirit is always the spirit of Age."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-muted/30 p-8 rounded-3xl border border-border/40">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Supreme Law</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                As the supreme law of the land, every other law in India must conform to the Constitution. It establishes the rule of law over the rule of men, ensuring that no individual or institution is above the basic code of the nation.
              </p>
            </div>
            <div className="bg-muted/30 p-8 rounded-3xl border border-border/40">
              <div className="w-12 h-12 bg-secondary/20 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Living Document</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The Constitution is designed to evolve. Through the amendment process (Article 368), it has adapted to changing social, economic, and technological realities over seven decades, remaining relevant to every new generation.
              </p>
            </div>
            <div className="bg-muted/30 p-8 rounded-3xl border border-border/40">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Global Heritage</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                While uniquely Indian, the Constitution is a 'beautiful patchwork' of global wisdom, blending elements from the British, American, Irish, Canadian, and Australian systems into a cohesive framework suited for India.
              </p>
            </div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
            <div className="bg-card border-l-4 border-primary p-8 rounded-r-3xl shadow-sm">
              <h3 className="text-2xl font-bold font-serif text-primary mt-0">The Social Contract</h3>
              <p className="text-foreground/80 leading-relaxed">
                The Indian Constitution is fundamentally a social contract between the people of India. It represents a collective promise to build a society where the dignity of the individual is preserved while the unity of the nation is strengthened. Unlike many constitutions that only focus on the structure of government, the Indian document goes further to define the social and economic goals of the state through the Directive Principles.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-8">
              <div>
                <h3 className="text-2xl font-bold font-serif text-primary mb-4">A Balanced Architecture</h3>
                <p className="text-foreground/80 leading-relaxed">
                  The framework is built on the principle of 'Checks and Balances'. It carefully distributes power among three independent branches: the Legislature (to make laws), the Executive (to implement laws), and the Judiciary (to interpret laws). This separation ensures that no single branch becomes overly dominant, protecting the democratic essence of the nation.
                </p>
                <p className="text-foreground/80 leading-relaxed mt-4">
                  Furthermore, it balances the rights of the individual with the collective interests of the state, ensuring that freedom is not just an abstract concept but a lived reality protected by the power of the law.
                </p>
              </div>
              <div className="bg-muted/40 rounded-3xl p-8 border border-border/50">
                <h4 className="font-bold text-secondary mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5" /> Comprehensive Detail
                </h4>
                <p className="text-sm text-muted-foreground italic mb-0">
                  With over 1,45,000 words in its English version, the Indian Constitution is the longest written constitution of any sovereign country. This level of detail was a conscious choice by the framers to provide clarity in a highly diverse society and to prevent future ambiguity in governance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Craftsmanship & Historical Journey - LONG SECTION */}
      <section className="py-24 px-4 md:px-8 bg-muted/20 border-y border-border/50 overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
            <div className="md:w-1/2">
              <p className="text-xs font-black tracking-[0.4em] uppercase text-secondary mb-4">The Artistic Heritage</p>
              <h2 className="text-3xl md:text-5xl font-bold font-serif text-primary mb-8 leading-tight">Beyond the Articles: <br />A Masterpiece of Art</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Most people see the Constitution as a legal code, but the original document is a stunning work of artistic craftsmanship. It was neither typed nor printed; it was entirely <strong>handwritten and illuminated</strong> by the finest calligraphers and artists of the era.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4 p-4 rounded-2xl bg-background border border-border/60 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                    <PenTool className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">The Calligraphy</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      <strong>Prem Behari Narain Raizada</strong> spent 6 months writing the entire Constitution in a beautiful flowing italic style. He used 432 pen nibs (No. 303) and notably charged no fee, asking only to sign every page.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-2xl bg-background border border-border/60 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Palette className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">The Illuminations</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Each page was decorated by artists from <strong>Shantiniketan</strong>, led by <strong>Nandalal Bose</strong>. The illustrations represent India's 5,000-year history, from the Indus Valley Civilization to the Freedom Struggle.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="absolute inset-0 bg-primary/5 rounded-[3rem] -rotate-3 transform -z-10" />
              <div className="bg-card border border-border p-8 rounded-[3rem] shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-bl-full" />
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-1.5 h-6 bg-secondary rounded-full" />
                  <h3 className="text-xl font-bold font-serif">Physical Preservation</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  The original handwritten copies (English and Hindi) are preserved in the <strong>Parliament Library</strong> in special conditions that defy the passage of time.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-muted/50 border border-border/40">
                    <p className="text-[10px] font-black uppercase text-muted-foreground mb-1">Method</p>
                    <p className="text-sm font-bold">Helium-Filled Cases</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-muted/50 border border-border/40">
                    <p className="text-[10px] font-black uppercase text-muted-foreground mb-1">Signed By</p>
                    <p className="text-sm font-bold">284 Members</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-muted/50 border border-border/40">
                    <p className="text-[10px] font-black uppercase text-muted-foreground mb-1">Location</p>
                    <p className="text-sm font-bold">Library of Parliament</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-muted/50 border border-border/40">
                    <p className="text-[10px] font-black uppercase text-muted-foreground mb-1">Production</p>
                    <p className="text-sm font-bold">Photolithographed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Borrowed Wisdom Grid - The Global Tapestry */}
          <div className="mt-24 pt-20 border-t border-border/50">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary mb-4">A Global Tapestry of Wisdom</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                While deeply rooted in Indian ethos, our Constitution is a masterful synthesis of the world's greatest democratic experiments.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  country: "United Kingdom",
                  icon: "🇬🇧",
                  features: ["Parliamentary government", "Rule of Law", "Single citizenship", "Cabinet system", "Bicameralism"]
                },
                {
                  country: "United States",
                  icon: "🇺🇸",
                  features: ["Fundamental Rights", "Judicial Review", "Impeachment of President", "Independence of Judiciary"]
                },
                {
                  country: "Ireland",
                  icon: "🇮🇪",
                  features: ["Directive Principles of State Policy", "Nomination of members to Rajya Sabha"]
                },
                {
                  country: "Canada",
                  icon: "🇨🇦",
                  features: ["Federation with a strong Centre", "Residuary powers with Centre", "Appointment of state governors"]
                },
                {
                  country: "Australia",
                  icon: "🇦🇺",
                  features: ["Concurrent List", "Freedom of trade, commerce and intercourse", "Joint sitting of Parliament"]
                },
                {
                  country: "Germany (Weimar)",
                  icon: "🇩🇪",
                  features: ["Suspension of Fundamental Rights during Emergency"]
                },
                {
                  country: "Soviet Union (USSR)",
                  icon: "🇷🇺",
                  features: ["Fundamental Duties", "Ideals of justice (social, economic, political) in Preamble"]
                },
                {
                  country: "France",
                  icon: "🇫🇷",
                  features: ["Republic", "Ideals of Liberty, Equality and Fraternity in Preamble"]
                },
                {
                  country: "South Africa",
                  icon: "🇿🇦",
                  features: ["Procedure for amendment of the Constitution", "Election of members of Rajya Sabha"]
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="p-6 rounded-3xl bg-background border border-border shadow-sm hover:shadow-md transition-all group overflow-hidden relative"
                >
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-muted rounded-full opacity-20 group-hover:scale-150 transition-transform duration-500" />
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{item.icon}</span>
                    <h3 className="font-bold text-primary">{item.country}</h3>
                  </div>
                  <ul className="space-y-2">
                    {item.features.map((feat, idx) => (
                      <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-secondary mt-1.5 shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Timeline of Framing - Detailed Form */}
          <div className="mt-32">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="md:w-1/3 sticky top-32">
                <h3 className="text-4xl font-bold font-serif text-primary leading-tight">The Journey <br />of Framing</h3>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  The drafting of the Constitution was a meticulous process spanning nearly three years, involving intense debate and collaboration.
                </p>
                <div className="mt-8 p-6 bg-primary/5 rounded-3xl border border-primary/10">
                  <div className="flex items-center gap-3 mb-2 text-primary font-bold">
                    <Clock className="w-5 h-5" />
                    <span>Total Duration</span>
                  </div>
                  <p className="text-2xl font-black text-primary">11 Sessions</p>
                  <p className="text-sm text-primary/70">Across 165 days of discussion</p>
                </div>
              </div>
              <div className="md:w-2/3 space-y-4">
                {[
                  { date: "9 Dec 1946", event: "First Meeting", desc: "The Constituent Assembly met for the first time in the Constitution Hall (now Central Hall of Parliament). Dr. Sachchidananda Sinha was elected temporary President." },
                  { date: "11 Dec 1946", event: "Election of President", desc: "Dr. Rajendra Prasad was elected as the permanent President of the Constituent Assembly." },
                  { date: "13 Dec 1946", event: "Objective Resolution", desc: "Jawaharlal Nehru moved the historic 'Objective Resolution', which laid down the fundamentals and philosophy of the constitutional structure." },
                  { date: "22 Jan 1947", event: "Resolution Adopted", desc: "The Assembly unanimously adopted the Objective Resolution, which later became the inspiration for the Preamble." },
                  { date: "22 Jul 1947", event: "National Flag Adopted", desc: "The Constituent Assembly adopted the National Flag (Tiranga) in its current form." },
                  { date: "29 Aug 1947", event: "Drafting Committee Set Up", desc: "The Assembly appointed a Drafting Committee under the Chairmanship of Dr. B.R. Ambedkar to prepare a Draft Constitution." },
                  { date: "21 Feb 1948", event: "First Draft Published", desc: "The first draft of the Constitution was published for the citizens to read and suggest amendments." },
                  { date: "26 Nov 1949", event: "Adoption & Signing", desc: "The final draft was adopted. Members of the Assembly signed the handwritten document. This day is now celebrated as Constitution Day." },
                  { date: "24 Jan 1950", event: "Final Signatures", desc: "The 284 members present signed two handwritten copies (Hindi & English). 'Jana Gana Mana' was adopted as the National Anthem." },
                  { date: "26 Jan 1950", event: "Commencement", desc: "The Constitution came into full force. India officially became a Republic. This date was chosen to honor the Purna Swaraj declaration of 1930." }
                ].map((item, i) => (
                  <div key={i} className="group flex gap-6 p-6 rounded-3xl bg-card border border-border/50 hover:border-primary/20 transition-all hover:shadow-sm">
                    <div className="shrink-0 text-sm font-black text-secondary uppercase tracking-wider w-24 pt-1">
                      {item.date}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{item.event}</h4>
                      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary mb-6">Dr. B. R. Ambedkar</h2>
              <h3 className="text-xl text-secondary font-medium mb-6">The Chief Architect</h3>

              <div className="prose prose-lg dark:prose-invert">
                <p>
                  Dr. Bhimrao Ramji Ambedkar, respectfully known as Babasaheb, stands as one of the most influential minds behind modern India. A jurist, economist, scholar, and social reformer, he served as the Chairman of the Drafting Committee of the Constituent Assembly, playing a central role in shaping the Constitution of India. His life journey, marked by struggle against deep-rooted social discrimination, became the foundation of his unwavering commitment to justice, equality, and human dignity. For Ambedkar, democracy was not just a political system; it was a moral and social ideal that had to transform everyday life.                </p>
                <p>
                  Born into a society structured by rigid caste hierarchies, Ambedkar personally experienced exclusion and injustice from an early age. These lived realities did not deter him; instead, they fueled his pursuit of knowledge. He went on to study at some of the world’s leading institutions, gaining expertise in law, economics, and political science. This rare combination of personal experience and intellectual depth shaped his belief that rights must be real, enforceable, and accessible to all citizens—not just promises written on paper.                </p>
                <p>
                  Ambedkar’s vision of the Constitution was deeply practical. He understood that without mechanisms for enforcement, rights would remain hollow. This is why the Constitution not only guarantees fundamental rights but also provides remedies through the judiciary, allowing citizens to seek justice when those rights are violated. His emphasis on constitutional morality ensured that institutions would function within a framework of accountability, fairness, and respect for the rule of law.                </p>
                <p>
                  His legacy continues to shape India’s understanding of justice and democracy. From the idea of equal citizenship to the protection of civil liberties, from the role of an independent judiciary to the everyday meaning of freedom in a diverse society, Ambedkar’s influence remains deeply embedded in the nation’s institutions. His work reminds us that democracy is not a finished project but an ongoing effort—one that demands vigilance, empathy, and a constant commitment to fairness.                </p>
                <p>
                  In the end, Ambedkar’s life and work stand as a powerful testament to the idea that dignity is not inherited by birth but secured through rights, law, and collective responsibility. His vision challenges every generation to not only preserve the Constitution but to live by its values, ensuring that justice reaches every corner of society.
                </p>
              </div>
            </motion.div>

            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="rounded-2xl overflow-hidden shadow-xl border border-border bg-card lg:-mt-8"
              >
                <div className="aspect-4/5 relative">
                  <img
                    src="/images/ambedkar-about.png"
                    alt="Dr B R Ambedkar drafting the Constitution"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6 text-center border-t border-border">
                  <p className="italic text-muted-foreground font-serif">
                    "Life should be great rather than long."
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-6"
              >
                <div className="bg-card/70 backdrop-blur-sm border border-border rounded-3xl p-5 md:p-6 shadow-sm">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                        Academic island
                      </p>
                      <p className="text-lg font-bold text-foreground mt-1">
                        32 degrees & honors
                      </p>
                    </div>
                    <div className="shrink-0 text-xs font-semibold px-3 py-1 rounded-full bg-muted border border-border text-muted-foreground">
                      Individual cards
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      ["BA", "University of Bombay"],
                      ["BA", "University of Bombay"],
                      ["MA", "University of Bombay"],
                      ["MA", "University of Columbia"],
                      ["MA", "Columbia University"],
                      ["MSc", "London School of Economics"],
                      ["LLD", "University of Nagpur"],
                      ["LLD", "University of Kerala"],
                      ["LLD", "University of Baroda"],
                      ["LLD", "University of Mysore"],
                      ["LLD", "University of Punjab"],
                      ["LLD", "University of Karnataka"],
                      ["LLD", "Columbia University"],
                      ["LLD", "Osmania University"],
                      ["LLD", "University of London"],
                      ["LLD", "Nagpur University"],
                      ["LLD", "University of Sagar"],
                      ["LLD", "University of Rangoon"],
                      ["LLD", "University of Bombay"],
                      ["LLD", "University of Osmania"],
                      ["DSc", "University of London"],
                      ["DSc", "University of Bombay"],
                      ["DSc", "University of Nagpur"],
                      ["DSc", "University of Punjab"],
                      ["DSc", "London School of Economics"],
                      ["D.Litt.", "Osmania University"],
                      ["D.Litt.", "Banaras Hindu University"],
                      ["D.Litt.", "Aligarh Muslim University"],
                      ["D.Litt.", "Columbia University"],
                      ["D.Litt.", "Nagpur University"],
                      ["PhD", "Columbia University"],
                      ["Barrister-at-Law", "Gray’s Inn, London"],
                    ].map(([degree, inst], idx) => (
                      <div
                        key={`${degree}-${inst}-${idx}`}
                        className="rounded-2xl border border-border bg-background/60 px-3.5 py-3 flex items-start justify-between gap-3"
                      >
                        <span className="text-xs font-bold tracking-wide text-primary whitespace-nowrap">
                          {String(idx + 1).padStart(2, "0")} · {degree}
                        </span>
                        <span className="text-xs text-muted-foreground text-right leading-snug line-clamp-2">
                          {inst}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Preamble Section */}
      <section className="relative py-24 md:py-32 px-4 md:px-8 bg-linear-to-b from-primary/4 via-background to-muted/30 border-t border-border/50 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Animated Ashok Chakra Background */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10"
            animate={{ rotate: 360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          >
            <svg width="800" height="800" viewBox="0 0 100 100" className="text-primary">
              <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="4" fill="currentColor" />
              {[...Array(24)].map((_, i) => (
                <line
                  key={i}
                  x1="50"
                  y1="50"
                  x2={50 + 48 * Math.cos((i * 15 * Math.PI) / 180)}
                  y2={50 + 48 * Math.sin((i * 15 * Math.PI) / 180)}
                  stroke="currentColor"
                  strokeWidth="0.2"
                />
              ))}
            </svg>
          </motion.div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-radial from-primary/6 to-transparent blur-3xl" />
          <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary/20 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-secondary/20 to-transparent" />
        </div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-14"
          >
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-secondary mb-4">
              Soul of the Constitution
            </p>
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-primary">
              The Preamble
            </h2>
            <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-linear-to-r from-primary via-secondary to-primary" />
          </motion.div>

          {/* Preamble card */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative group"
          >
            {/* Outer glow ring */}
            <div className="absolute -inset-px rounded-4xl bg-linear-to-br from-primary/30 via-secondary/20 to-primary/30 opacity-60 group-hover:opacity-100 transition-opacity duration-700 blur-[1px]" />

            <div className="relative bg-card/90 backdrop-blur-md p-8 md:p-14 lg:p-16 rounded-4xl shadow-xl border border-border/60">
              {/* Decorative corner ornaments */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary/25 rounded-tl-lg" />
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/25 rounded-tr-lg" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-primary/25 rounded-bl-lg" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-primary/25 rounded-br-lg" />

              {/* Preamble content with highlighted key words */}
              <div className="font-serif text-lg md:text-xl lg:text-[1.35rem] leading-[2.2] md:leading-[2.4] text-foreground/90">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <span className="font-bold text-primary tracking-wide">WE, THE PEOPLE OF INDIA</span>, having solemnly resolved to constitute India into a{" "}
                  <span className="font-bold text-primary tracking-wide">SOVEREIGN SOCIALIST SECULAR DEMOCRATIC REPUBLIC</span>{" "}
                  and to secure to all its citizens:
                </motion.p>

                <div className="my-8 md:my-10 space-y-4 md:space-y-5">
                  {[
                    { word: "JUSTICE", desc: "social, economic and political" },
                    { word: "LIBERTY", desc: "of thought, expression, belief, faith and worship" },
                    { word: "EQUALITY", desc: "of status and of opportunity" },
                  ].map((item, i) => (
                    <motion.div
                      key={item.word}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 + i * 0.12 }}
                      className="flex items-baseline gap-3 justify-center"
                    >
                      <span className="text-xl md:text-2xl font-bold text-secondary tracking-wider">{item.word}</span>
                      <span className="text-base md:text-lg text-foreground/70">{item.desc};</span>
                    </motion.div>
                  ))}
                </div>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-foreground/70"
                >
                  and to promote among them all
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="my-6 md:my-8"
                >
                  <span className="text-xl md:text-2xl font-bold text-secondary tracking-wider">FRATERNITY</span>{" "}
                  <span className="text-base md:text-lg text-foreground/70">
                    assuring the dignity of the individual and the unity and integrity of the Nation;
                  </span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                >
                  <div className="w-12 h-px mx-auto bg-linear-to-r from-transparent via-border to-transparent mb-6" />
                  <p className="text-base md:text-lg text-foreground/70 italic">
                    IN OUR CONSTITUENT ASSEMBLY this twenty-sixth day of November, 1949, do{" "}
                    <span className="font-bold text-primary not-italic tracking-wide">
                      HEREBY ADOPT, ENACT AND GIVE TO OURSELVES THIS CONSTITUTION
                    </span>.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

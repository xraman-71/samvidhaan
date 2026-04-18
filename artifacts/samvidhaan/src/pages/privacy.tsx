import { motion } from "framer-motion";
import { Shield, Lock, Eye, Database, UserCheck, Mail, Info, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const PAGE_GUTTER = "px-6 sm:px-10 lg:px-16 xl:px-24";
const PAGE_CONTAINER = "mx-auto w-full max-w-5xl";

export default function Privacy() {
  const sections = [
    {
      icon: Eye,
      title: "Information Collection",
      content: "Samvidhaan+ is designed to be used without mandatory account creation. We do not collect personally identifiable information unless voluntarily provided via our contact channels. Anonymous usage data is utilized solely for experience optimization."
    },
    {
      icon: Database,
      title: "Data Utilization",
      content: "Any information collected is used strictly to improve platform functionality. We do not sell, trade, or transfer data to third parties. Usage metrics are processed in aggregate form to protect individual identity."
    },
    {
      icon: Lock,
      title: "Security Infrastructure",
      content: "As a primarily client-side application, your interactions remain on your local device. We do not store sensitive personal data on central servers, and all transmissions are secured with industry-standard encryption."
    },
    {
      icon: UserCheck,
      title: "User Rights",
      content: "You maintain full rights to access, rectify, or request deletion of any personal data. Since we prioritize anonymity, most users will have zero data stored with us. Contact-based data can be purged upon request."
    },
    {
      icon: Shield,
      title: "Local Storage & Cookies",
      content: "We use local browser storage to persist your preferences (bookmarks, quiz progress). This data stays on your device and can be cleared at any time via your browser's standard security settings."
    },
    {
      icon: Mail,
      title: "Third-Party Integrity",
      content: "Our platform may reference external scholarly sources. While we vet our links, we are not responsible for the privacy practices of external domains and recommend reviewing their independent policies."
    }
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#0a0a0a] pb-24">
      {/* Hero Header */}
      <div className={`pt-24 pb-16 md:pt-32 md:pb-20 ${PAGE_GUTTER} border-b border-border/40 relative overflow-hidden`}>
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-[400px] bg-gradient-radial from-primary/4 to-transparent blur-3xl opacity-60" />
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[32px_32px]" />
        </div>

        <div className={`${PAGE_CONTAINER} relative z-10 text-center`}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/2 px-3 py-1 text-[10px] font-black tracking-widest uppercase text-primary mb-6">
              <Shield className="mr-2 h-3 w-3" />
              <span>Trust & Transparency</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground text-base max-w-xl mx-auto font-medium">
              We believe constitutional rights extend to digital privacy. This policy outlines our commitment to your data security.
            </p>
            <div className="flex items-center justify-center gap-4 mt-8">
               <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest px-3 py-1 rounded bg-muted/50 border border-border/40">Version 1.2</span>
               <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Effective: Jan 2025</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Policy Content */}
      <div className={`${PAGE_CONTAINER} ${PAGE_GUTTER} py-20`}>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white dark:bg-black/20 p-8 rounded-2xl border border-border/40 hover:border-primary/20 hover:shadow-sm transition-all group"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-10 h-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <section.icon className="w-5 h-5" />
                </div>
                <h2 className="text-base font-bold text-foreground">{section.title}</h2>
              </div>
              <p className="text-[13px] text-muted-foreground leading-relaxed font-medium">
                {section.content}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-[2.5rem] bg-muted/20 border border-border/40 text-center relative overflow-hidden group"
        >
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all" />
          <Info className="h-8 w-8 text-primary/20 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-foreground mb-2">Policy Inquiries</h3>
          <p className="text-sm text-muted-foreground max-w-lg mx-auto mb-8 font-medium">
            We are committed to addressing your concerns promptly and transparently. If you have questions regarding our data practices, please reach out.
          </p>
          <Link href="/contact">
            <Button size="sm" className="h-10 px-6 rounded-lg font-bold text-xs gap-2">
              Contact Privacy Team <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

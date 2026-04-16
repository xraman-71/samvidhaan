import { motion } from "framer-motion";
import { Shield, Lock, Eye, Database, UserCheck, Mail } from "lucide-react";

export default function Privacy() {
  const sections = [
    {
      icon: Eye,
      title: "Information We Collect",
      content: "Samvidhaan+ is designed to be used without creating an account. We do not collect personally identifiable information such as your name, email address, or phone number unless you voluntarily provide it via our contact form. We may collect anonymous usage data (such as which articles are viewed most) to improve the app experience."
    },
    {
      icon: Database,
      title: "How We Use Information",
      content: "Any information collected is used solely to improve the functionality and content of Samvidhaan+. We do not sell, trade, or otherwise transfer your information to third parties. Usage data is used in aggregate form only, meaning it cannot be used to identify individual users."
    },
    {
      icon: Lock,
      title: "Data Security",
      content: "We take the security of your information seriously. Samvidhaan+ operates primarily as a client-side application, meaning most of your interactions remain on your own device. We do not store sensitive personal data on our servers. Any data transmitted to our servers is protected using industry-standard encryption."
    },
    {
      icon: UserCheck,
      title: "Your Rights",
      content: "You have the right to access, correct, or request deletion of any personal information we may hold about you. As Samvidhaan+ does not require registration, most users will have no personal data stored with us. If you have submitted a contact form, you may request deletion of that data at any time by emailing us."
    },
    {
      icon: Shield,
      title: "Cookies",
      content: "Samvidhaan+ may use cookies or local browser storage to remember your preferences (such as bookmarked articles or quiz progress). These are stored only on your device and are not transmitted to our servers. You can clear these at any time through your browser settings."
    },
    {
      icon: Mail,
      title: "Third-Party Links",
      content: "Our app may contain links to external websites for reference purposes. We are not responsible for the privacy practices of those sites. We encourage you to review the privacy policies of any external sites you visit."
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Hero */}
      <div className="bg-primary text-primary-foreground py-16 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="container mx-auto max-w-3xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-foreground/10 mb-6">
              <Shield className="w-7 h-7 text-secondary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">Privacy Policy</h1>
            <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto">
              Your privacy matters to us. This policy explains how Samvidhaan+ handles your information.
            </p>
            <p className="text-primary-foreground/50 text-sm mt-4">Last updated: January 26, 2025</p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-3xl px-4 py-16">
        <motion.p
          className="text-muted-foreground text-lg leading-relaxed mb-12 border-l-4 border-secondary pl-6"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Samvidhaan+ is committed to protecting your privacy. We built this platform to empower citizens 
          with knowledge of their constitutional rights — and we believe that commitment to rights extends 
          to how we handle your personal data.
        </motion.p>

        <div className="space-y-10">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="flex gap-5"
            >
              <div className="shrink-0 mt-1">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <section.icon className="w-5 h-5 text-secondary" />
                </div>
              </div>
              <div>
                <h2 className="text-xl font-bold text-primary font-serif mb-3">{section.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{section.content}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 p-6 rounded-2xl bg-muted/50 border border-border text-center"
        >
          <p className="text-muted-foreground text-sm">
            If you have questions about this Privacy Policy, please{" "}
            <a href="/contact" className="text-secondary font-medium hover:underline">
              contact us
            </a>
            . We are committed to addressing your concerns promptly and transparently.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

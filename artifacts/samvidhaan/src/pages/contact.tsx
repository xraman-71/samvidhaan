import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Send, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
              <MessageSquare className="w-7 h-7 text-secondary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">Contact Us</h1>
            <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto">
              Have a question, suggestion, or found an error? We would love to hear from you.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto max-w-5xl px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Info sidebar */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h2 className="text-2xl font-bold font-serif text-primary mb-4">Get in Touch</h2>
              <p className="text-muted-foreground leading-relaxed">
                Samvidhaan+ is a civic education project. We welcome feedback, corrections, 
                and suggestions from citizens who are passionate about constitutional literacy.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-0.5">Email</p>
                  <p className="text-muted-foreground text-sm">hello@samvidhaan.in</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-0.5">Response Time</p>
                  <p className="text-muted-foreground text-sm">We typically respond within 2–3 business days.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-0.5">Project Origin</p>
                  <p className="text-muted-foreground text-sm">India — built for every citizen of the Republic.</p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-secondary/10 border border-secondary/20">
              <p className="text-sm text-foreground font-medium mb-1">Report a Content Error</p>
              <p className="text-sm text-muted-foreground">
                If you find an inaccuracy in our constitutional content, please let us know. 
                Accuracy is our highest priority.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-16 px-8 bg-card rounded-2xl border border-border shadow-sm"
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-9 h-9 text-accent" />
                </div>
                <h3 className="text-2xl font-bold font-serif text-primary mb-3">Message Sent</h3>
                <p className="text-muted-foreground max-w-sm leading-relaxed">
                  Thank you for reaching out. We have received your message and will get back to you within 2–3 business days.
                </p>
                <Button
                  variant="outline"
                  className="mt-8"
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                >
                  Send Another Message
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card rounded-2xl border border-border shadow-sm p-8 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">Your Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Rahul Sharma"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="h-11"
                      data-testid="input-name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="rahul@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="h-11"
                      data-testid="input-email"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-sm font-medium">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="e.g. Content correction, Feature suggestion, General query"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className="h-11"
                    data-testid="input-subject"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Write your message here..."
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="resize-none"
                    data-testid="textarea-message"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 text-base gap-2"
                  data-testid="button-submit"
                >
                  <Send className="w-4 h-4" /> Send Message
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

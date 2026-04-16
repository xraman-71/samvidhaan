import React from "react";
import { Link } from "wouter";
import { AshokaChakra } from "./AshokaChakra";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 md:py-16 border-t border-primary-border/20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <AshokaChakra className="h-6 w-6 text-secondary" />
              <span className="text-xl font-bold font-serif">Samvidhaan+</span>
            </div>
            <p className="text-primary-foreground/70 max-w-md">
              An educational platform dedicated to making the Indian Constitution simple, 
              accessible, and engaging for every citizen. Know your rights, understand your duties.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-secondary">Explore</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-primary-foreground/80 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/explore" className="text-primary-foreground/80 hover:text-white transition-colors">Constitution</Link></li>
              <li><Link href="/quiz" className="text-primary-foreground/80 hover:text-white transition-colors">Knowledge Quiz</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-secondary">Project</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-primary-foreground/80 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/privacy" className="text-primary-foreground/80 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/contact" className="text-primary-foreground/80 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
          <p>Built with respect for the Constitution of India.</p>
          <p>© {new Date().getFullYear()} Samvidhaan+. Open educational initiative.</p>
        </div>
      </div>
    </footer>
  );
}

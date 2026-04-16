import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-background text-foreground selection:bg-secondary/30 selection:text-foreground">
      <Header />
      <main className="flex-1 w-full pb-16 md:pb-0">
        {children}
      </main>
      <Footer />
    </div>
  );
}

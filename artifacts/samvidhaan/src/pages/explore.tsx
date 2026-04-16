import React, { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Book, Shield, Scale, History, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { fundamentalRights } from "@/data/fundamentalRights";
import { articles } from "@/data/articles";
import { keyAmendments } from "@/data/constitution";

export default function Explore() {
  const [searchQuery, setSearchQuery] = useState("");

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };

  // Filter articles based on search
  const filteredRights = fundamentalRights.filter(right => 
    right.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    right.summary.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredArticles = articles.filter(article => 
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    article.number.includes(searchQuery) ||
    article.simplified.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header Section */}
      <div className="bg-primary text-primary-foreground py-16 px-4 md:px-8 border-b border-primary-border/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="container mx-auto max-w-4xl relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4 text-center">Explore the Constitution</h1>
          <p className="text-primary-foreground/80 text-center mb-8 text-lg max-w-2xl mx-auto">
            Browse through the fundamental rights, duties, and key articles that form the backbone of the Indian Republic.
          </p>
          
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-primary-foreground/50" />
            <Input 
              type="text" 
              placeholder="Search articles, rights, or topics..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-14 text-lg bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus-visible:ring-secondary rounded-full"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-12 max-w-6xl">
        <Tabs defaultValue="rights" className="w-full">
          <TabsList className="flex flex-wrap justify-start h-auto bg-muted/50 p-1 rounded-xl mb-8 gap-1">
            <TabsTrigger value="rights" className="rounded-lg py-2.5 px-4 data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-sm">
              <Shield className="w-4 h-4 mr-2" /> Fundamental Rights
            </TabsTrigger>
            <TabsTrigger value="articles" className="rounded-lg py-2.5 px-4 data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-sm">
              <Book className="w-4 h-4 mr-2" /> Key Articles
            </TabsTrigger>
            <TabsTrigger value="amendments" className="rounded-lg py-2.5 px-4 data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-sm">
              <History className="w-4 h-4 mr-2" /> Amendments
            </TabsTrigger>
          </TabsList>

          <AnimatePresence mode="wait">
            <TabsContent value="rights" className="mt-0 outline-none">
              <motion.div 
                variants={container}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {filteredRights.length > 0 ? filteredRights.map((right) => (
                  <motion.div key={right.id} variants={item}>
                    <Link href={`/article/${right.id}`}>
                      <div className="group bg-card h-full p-6 rounded-2xl border border-border shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col">
                        <div className="flex justify-between items-start mb-4">
                          <Badge className="bg-secondary/10 text-secondary hover:bg-secondary/20 border-0">{right.articles}</Badge>
                          <div className="h-8 w-8 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                            <ChevronRight className="h-4 w-4 text-primary" />
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-primary mb-2 font-serif group-hover:text-secondary transition-colors">{right.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                          {right.summary}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                )) : (
                  <div className="col-span-full py-12 text-center text-muted-foreground">
                    No fundamental rights found matching "{searchQuery}"
                  </div>
                )}
              </motion.div>
            </TabsContent>

            <TabsContent value="articles" className="mt-0 outline-none">
              <motion.div 
                variants={container}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {filteredArticles.length > 0 ? filteredArticles.map((article) => (
                  <motion.div key={article.id} variants={item}>
                    <Link href={`/article/${article.id}`}>
                      <div className="group bg-card h-full p-6 rounded-2xl border border-border shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex gap-2">
                            <Badge variant="outline" className="bg-primary/5 border-primary/20 text-primary">Article {article.number}</Badge>
                            <Badge variant="outline" className={
                              article.category === 'Fundamental Rights' ? 'bg-secondary/5 border-secondary/20 text-secondary' :
                              article.category === 'Directive Principles' ? 'bg-accent/5 border-accent/20 text-accent' :
                              'bg-muted border-border text-muted-foreground'
                            }>
                              {article.category}
                            </Badge>
                          </div>
                        </div>
                        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{article.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                          {article.simplified.substring(0, 120)}...
                        </p>
                        <div className="mt-4 text-primary text-sm font-medium flex items-center group-hover:text-secondary transition-colors">
                          Read Full Article <ChevronRight className="h-4 w-4 ml-1" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                )) : (
                  <div className="col-span-full py-12 text-center text-muted-foreground">
                    No articles found matching "{searchQuery}"
                  </div>
                )}
              </motion.div>
            </TabsContent>

            <TabsContent value="amendments" className="mt-0 outline-none">
              <motion.div 
                variants={container}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="space-y-6"
              >
                {keyAmendments.map((amendment, index) => (
                  <motion.div key={index} variants={item} className="bg-card p-6 rounded-2xl border border-border shadow-sm flex flex-col md:flex-row gap-6 items-start">
                    <div className="shrink-0 text-center bg-primary/5 rounded-xl p-4 min-w-[120px]">
                      <span className="block text-2xl font-bold text-primary">{amendment.year}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{amendment.number}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {amendment.summary}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </AnimatePresence>
        </Tabs>
      </div>
    </div>
  );
}

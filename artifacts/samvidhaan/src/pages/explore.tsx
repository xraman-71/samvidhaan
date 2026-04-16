import React, { useState, useMemo } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Search, Book, Shield, History, ChevronRight, BookOpen, Filter, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { fundamentalRights } from "@/data/fundamentalRights";
import { allArticles, constitutionParts, ConstitutionArticle } from "@/data/allArticles";
import { keyAmendments } from "@/data/constitution";

const categoryColor = (cat: string) => {
  if (cat === "Fundamental Rights") return "bg-orange-100 text-orange-700 border-orange-200";
  if (cat === "Directive Principles") return "bg-green-100 text-green-700 border-green-200";
  if (cat === "Fundamental Duties") return "bg-teal-100 text-teal-700 border-teal-200";
  if (cat === "The Union") return "bg-indigo-100 text-indigo-700 border-indigo-200";
  if (cat === "The States") return "bg-violet-100 text-violet-700 border-violet-200";
  if (cat === "Elections") return "bg-amber-100 text-amber-700 border-amber-200";
  if (cat === "Emergency Provisions") return "bg-red-100 text-red-700 border-red-200";
  return "bg-slate-100 text-slate-700 border-slate-200";
};

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.04 } }
};

const itemAnim = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } }
};

function ArticleCard({ article }: { article: ConstitutionArticle }) {
  return (
    <Link href={`/article/${article.id}`}>
      <div className="group bg-card h-full p-5 rounded-2xl border border-border shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer flex flex-col">
        <div className="flex justify-between items-start mb-3">
          <div className="flex flex-wrap gap-1.5">
            <Badge variant="outline" className="bg-primary/5 border-primary/20 text-primary text-xs font-semibold">
              Art. {article.number}
            </Badge>
            <Badge variant="outline" className={`text-xs border ${categoryColor(article.category)}`}>
              {article.category}
            </Badge>
            {article.status === "repealed" && (
              <Badge variant="outline" className="text-xs bg-gray-100 text-gray-500 border-gray-200">Repealed</Badge>
            )}
            {article.status === "abrogated" && (
              <Badge variant="outline" className="text-xs bg-red-100 text-red-500 border-red-200">Abrogated</Badge>
            )}
          </div>
          <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-0.5" />
        </div>
        <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
          {article.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed flex-1 line-clamp-2">
          {article.simplified}
        </p>
      </div>
    </Link>
  );
}

export default function Explore() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPart, setSelectedPart] = useState<string | null>(null);
  const [showPartFilter, setShowPartFilter] = useState(false);

  const filteredRights = useMemo(() => fundamentalRights.filter(right =>
    right.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    right.summary.toLowerCase().includes(searchQuery.toLowerCase())
  ), [searchQuery]);

  const filteredAllArticles = useMemo(() => {
    let result = allArticles;
    if (selectedPart) {
      result = result.filter(a => a.part === selectedPart);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(a =>
        a.title.toLowerCase().includes(q) ||
        a.number.toLowerCase().includes(q) ||
        a.simplified.toLowerCase().includes(q) ||
        a.part.toLowerCase().includes(q) ||
        a.partTitle.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q)
      );
    }
    return result;
  }, [searchQuery, selectedPart]);

  const groupedByPart = useMemo(() => {
    if (searchQuery.trim() || selectedPart) return null;
    const groups: Record<string, ConstitutionArticle[]> = {};
    allArticles.forEach(a => {
      if (!groups[a.part]) groups[a.part] = [];
      groups[a.part].push(a);
    });
    return groups;
  }, [searchQuery, selectedPart]);

  const uniqueParts = useMemo(() =>
    constitutionParts.filter(p => allArticles.some(a => a.part === p.label)),
    []
  );

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-16 px-4 md:px-8 border-b border-primary-border/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="container mx-auto max-w-4xl relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4 text-center">Explore the Constitution</h1>
          <p className="text-primary-foreground/80 text-center mb-8 text-lg max-w-2xl mx-auto">
            All {allArticles.length}+ articles across 25 Parts of the Indian Constitution — explained in plain language.
          </p>
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-primary-foreground/50" />
            <Input
              type="text"
              placeholder="Search articles, rights, topics, or article numbers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-14 text-lg bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus-visible:ring-secondary rounded-full"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery("")} className="absolute right-4 top-1/2 -translate-y-1/2 text-primary-foreground/50 hover:text-primary-foreground">
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-12 max-w-7xl">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="flex flex-wrap justify-start h-auto bg-muted/50 p-1 rounded-xl mb-8 gap-1">
            <TabsTrigger value="all" className="rounded-lg py-2.5 px-4 data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-sm">
              <BookOpen className="w-4 h-4 mr-2" /> All Articles
              <span className="ml-2 text-xs bg-primary/10 text-primary px-1.5 py-0.5 rounded-full">{allArticles.length}</span>
            </TabsTrigger>
            <TabsTrigger value="rights" className="rounded-lg py-2.5 px-4 data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-sm">
              <Shield className="w-4 h-4 mr-2" /> Fundamental Rights
            </TabsTrigger>
            <TabsTrigger value="amendments" className="rounded-lg py-2.5 px-4 data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-sm">
              <History className="w-4 h-4 mr-2" /> Key Amendments
            </TabsTrigger>
          </TabsList>

          {/* ALL ARTICLES TAB */}
          <TabsContent value="all" className="mt-0 outline-none">
            {/* Part Filter Bar */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                <button
                  onClick={() => setShowPartFilter(!showPartFilter)}
                  className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors border border-border rounded-lg px-3 py-1.5"
                >
                  <Filter className="h-4 w-4" />
                  Filter by Part
                  {selectedPart && <span className="ml-1 w-2 h-2 rounded-full bg-secondary inline-block" />}
                </button>
                {selectedPart && (
                  <button
                    onClick={() => setSelectedPart(null)}
                    className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1 transition-colors"
                  >
                    <X className="h-3.5 w-3.5" />
                    Clear filter
                  </button>
                )}
                {selectedPart && (
                  <Badge variant="outline" className="bg-primary/5 border-primary/20 text-primary text-xs">
                    {selectedPart}: {constitutionParts.find(p => p.label === selectedPart)?.title}
                  </Badge>
                )}
              </div>

              {showPartFilter && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-4 bg-muted/30 rounded-xl border border-border"
                >
                  {uniqueParts.map(part => (
                    <button
                      key={part.id}
                      onClick={() => {
                        setSelectedPart(selectedPart === part.label ? null : part.label);
                        setShowPartFilter(false);
                      }}
                      className={`text-left p-2.5 rounded-lg border transition-all text-xs ${
                        selectedPart === part.label
                          ? 'bg-primary text-primary-foreground border-primary'
                          : 'bg-card border-border hover:border-primary/30 hover:bg-primary/5'
                      }`}
                    >
                      <span className="font-semibold block">{part.label}</span>
                      <span className={`${selectedPart === part.label ? 'text-primary-foreground/80' : 'text-muted-foreground'} line-clamp-1`}>
                        {part.title}
                      </span>
                    </button>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Search Results or Part-grouped View */}
            {(searchQuery.trim() || selectedPart) ? (
              <div>
                <p className="text-sm text-muted-foreground mb-4">
                  {filteredAllArticles.length} article{filteredAllArticles.length !== 1 ? 's' : ''} found
                  {searchQuery && ` for "${searchQuery}"`}
                  {selectedPart && ` in ${selectedPart}`}
                </p>
                {filteredAllArticles.length > 0 ? (
                  <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredAllArticles.map(article => (
                      <motion.div key={article.id} variants={itemAnim}>
                        <ArticleCard article={article} />
                      </motion.div>
                    ))}
                  </motion.div>
                ) : (
                  <div className="py-16 text-center text-muted-foreground">
                    <BookOpen className="h-10 w-10 mx-auto mb-3 opacity-30" />
                    <p>No articles found matching "{searchQuery}"</p>
                  </div>
                )}
              </div>
            ) : (
              /* Part-grouped view */
              <div className="space-y-10">
                {constitutionParts.map(part => {
                  const partArticles = groupedByPart?.[part.label] || [];
                  if (partArticles.length === 0) return null;
                  return (
                    <section key={part.id}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`px-3 py-1 rounded-lg text-sm font-bold ${part.color}`}>
                          {part.label}
                        </div>
                        <div>
                          <h2 className="text-lg font-bold text-foreground">{part.title}</h2>
                          <p className="text-xs text-muted-foreground">Articles {part.articles}</p>
                        </div>
                        <span className="ml-auto text-xs text-muted-foreground">{partArticles.length} articles</span>
                      </div>
                      <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-50px" }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                      >
                        {partArticles.map(article => (
                          <motion.div key={article.id} variants={itemAnim}>
                            <ArticleCard article={article} />
                          </motion.div>
                        ))}
                      </motion.div>
                    </section>
                  );
                })}
              </div>
            )}
          </TabsContent>

          {/* FUNDAMENTAL RIGHTS TAB */}
          <TabsContent value="rights" className="mt-0 outline-none">
            <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredRights.length > 0 ? filteredRights.map((right) => (
                <motion.div key={right.id} variants={itemAnim}>
                  <Link href={`/article/${right.id}`}>
                    <div className="group bg-card h-full p-6 rounded-2xl border border-border shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col">
                      <div className="flex justify-between items-start mb-4">
                        <Badge className="bg-secondary/10 text-secondary hover:bg-secondary/20 border-0">{right.articles}</Badge>
                        <div className="h-8 w-8 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                          <ChevronRight className="h-4 w-4 text-primary" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-2 font-serif group-hover:text-secondary transition-colors">{right.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed flex-1">{right.summary}</p>
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

          {/* AMENDMENTS TAB */}
          <TabsContent value="amendments" className="mt-0 outline-none">
            <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
              {keyAmendments.map((amendment, index) => (
                <motion.div key={index} variants={itemAnim} className="bg-card p-6 rounded-2xl border border-border shadow-sm flex flex-col md:flex-row gap-6 items-start">
                  <div className="shrink-0 text-center bg-primary/5 rounded-xl p-4 min-w-[120px]">
                    <span className="block text-2xl font-bold text-primary">{amendment.year}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{amendment.number}</h3>
                    <p className="text-muted-foreground leading-relaxed">{amendment.summary}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

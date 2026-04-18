import React, { useEffect, useRef } from "react";
import { useRoute, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Share2, Bookmark, CheckCircle2, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { fundamentalRights } from "@/data/fundamentalRights";
import { allArticles } from "@/data/allArticles";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useToast } from "@/hooks/use-toast";
import { useUserData } from "@/hooks/use-user-data";
import NotFound from "./not-found";

export default function ArticleDetail() {
  const [match, params] = useRoute("/article/:id");
  const { toast } = useToast();
  const { user, fbUser, updateProfile } = useUserData();
  const id = params?.id;
  const trackedRef = useRef<string | null>(null);

  // Find if it's a fundamental right or an article
  const isRight = fundamentalRights.find(r => r.id === id);
  const isArticle = allArticles.find(a => a.id === id);

  const data = isRight || isArticle;

  useEffect(() => {
    if (!fbUser || !data || trackedRef.current === data.id) return;

    const trackActivity = async () => {
      trackedRef.current = data.id;

      const newActivity = {
        icon: "BookOpen",
        text: `Read ${data.title}`,
        time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
        color: "text-primary",
        bg: "bg-primary/5",
        link: `/article/${data.id}`
      };

      const currentActivity = user?.activity || [];
      // Remove duplicate entries of the same article to keep history clean
      const filteredActivity = currentActivity.filter(a => a.link !== `/article/${data.id}`);
      // Prepend the new activity and keep only the latest 15
      const newActivityList = [newActivity, ...filteredActivity].slice(0, 15);
      
      const isNewArticle = !currentActivity.some(a => a.link === `/article/${data.id}`);

      try {
        await updateProfile({
          activity: newActivityList,
          ...(isNewArticle ? { articlesRead: (user?.articlesRead || 0) + 1 } : {})
        });
      } catch (error) {
        console.error("Failed to track activity", error);
      }
    };

    // Wait 2 seconds before tracking to ensure they are actually reading it
    const timer = setTimeout(() => {
      trackActivity();
    }, 2000);

    return () => clearTimeout(timer);
  }, [data, fbUser]); // We don't include user?.activity to avoid infinite loops during update

  if (!data) {
    return <NotFound />;
  }

  const isFundamentalRightType = 'summary' in data;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied!",
      description: "Article link has been copied to your clipboard.",
    });
  };

  const handleBookmark = async () => {
    if (!fbUser) {
      toast({
        title: "Sign in required",
        description: "Please sign in to save articles.",
        variant: "destructive",
      });
      return;
    }

    const isAlreadySaved = user?.saved?.some(s => s.id === data.id);
    
    if (isAlreadySaved) {
      toast({
        title: "Already saved",
        description: "This article is already in your bookmarks.",
      });
      return;
    }

    const newBookmark = {
      id: data.id,
      title: data.title,
      part: isFundamentalRightType ? "Part III" : (data as typeof allArticles[0]).part || "Constitution",
      icon: "BookMarked"
    };

    try {
      await updateProfile({
        saved: [...(user?.saved || []), newBookmark],
        bookmarks: (user?.bookmarks || 0) + 1
      });

      toast({
        title: "Saved to bookmarks",
        description: "You can find this in your Account page.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save bookmark. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <Link href="/explore">
          <Button variant="ghost" className="mb-8 pl-0 hover:bg-transparent hover:text-primary text-muted-foreground">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Explore
          </Button>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-wrap items-center gap-3 mb-6">
            {isFundamentalRightType ? (
              <Badge className="bg-secondary/10 text-secondary hover:bg-secondary/20 border-0">
                {(data as typeof fundamentalRights[0]).articles}
              </Badge>
            ) : (
              <>
                <Badge variant="outline" className="border-primary/20 bg-primary/5 text-primary font-semibold">
                  Article {(data as typeof allArticles[0]).number}
                </Badge>
                <Badge variant="outline" className="border-border text-muted-foreground text-xs">
                  {(data as typeof allArticles[0]).part} — {(data as typeof allArticles[0]).partTitle}
                </Badge>
                <Badge className={
                  data.category === 'Fundamental Rights' ? 'bg-secondary/10 text-secondary border-0' :
                  data.category === 'Directive Principles' ? 'bg-accent/10 text-accent border-0' :
                  data.category === 'Fundamental Duties' ? 'bg-teal-100 text-teal-700 border-0' :
                  'bg-primary/10 text-primary border-0'
                }>
                  {data.category}
                </Badge>
              </>
            )}
          </div>

          <h1 className="text-3xl md:text-5xl font-bold font-serif text-primary mb-6 leading-tight">
            {data.title}
          </h1>

          <div className="flex gap-3 mb-10 border-b border-border pb-8">
            <Button variant="outline" size="sm" onClick={handleBookmark} className="gap-2">
              <Bookmark className="h-4 w-4" /> Save
            </Button>
            <Button variant="outline" size="sm" onClick={handleShare} className="gap-2">
              <Share2 className="h-4 w-4" /> Share
            </Button>
          </div>

          {/* Simplified Explanation Box */}
          <div className="bg-secondary/10 border border-secondary/20 rounded-2xl p-6 md:p-8 mb-10 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <BookOpen className="w-24 h-24 text-secondary" />
            </div>
            <h3 className="text-lg font-bold text-secondary mb-3 flex items-center gap-2 relative z-10">
              <BookOpen className="w-5 h-5" /> The Simple Meaning
            </h3>
            <p className="text-lg text-foreground leading-relaxed relative z-10">
              {isFundamentalRightType ? data.summary : data.simplified}
            </p>
          </div>

          {/* Description / Detailed content */}
          {isFundamentalRightType && (
            <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
              <p className="text-muted-foreground leading-relaxed">
                {data.description}
              </p>
            </div>
          )}

          {/* Real world examples */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold font-serif text-primary mb-6">In Real Life</h3>
            <div className="grid gap-4">
              {data.examples.map((example, idx) => (
                <div key={idx} className="flex gap-4 bg-card p-5 rounded-xl border border-border shadow-sm">
                  <div className="mt-0.5">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                  </div>
                  <p className="text-foreground leading-relaxed">{example}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Original Text Collapsible */}
          <Collapsible className="bg-muted/50 rounded-xl border border-border overflow-hidden mb-12">
            <CollapsibleTrigger className="flex w-full items-center justify-between p-5 font-semibold text-left hover:bg-muted transition-colors">
              <span className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" /> 
                Read Original Constitutional Text
              </span>
              <ChevronRight className="w-5 h-5 transition-transform duration-200" />
            </CollapsibleTrigger>
            <CollapsibleContent className="p-5 pt-0 border-t border-border/50">
              <div className="pt-4 text-muted-foreground font-serif italic leading-relaxed text-lg border-l-4 border-primary/20 pl-4 mt-2">
                {isFundamentalRightType 
                  ? "The original text for these articles spans multiple sections. Please refer to specific articles for exact wording." 
                  : data.originalText}
              </div>
            </CollapsibleContent>
          </Collapsible>

          {/* Related Articles */}
          {!isFundamentalRightType && data.relatedArticles && data.relatedArticles.length > 0 && (
            <div>
              <h3 className="text-xl font-bold font-serif text-primary mb-4">Related Articles</h3>
              <div className="flex flex-wrap gap-3">
                {data.relatedArticles.map((relId) => {
                  const relData = allArticles.find(a => a.id === relId);
                  if (!relData) return null;
                  return (
                    <Link key={relId} href={`/article/${relId}`}>
                      <Button variant="outline" className="gap-2">
                        Article {relData.number} <ChevronRight className="w-4 h-4 opacity-50" />
                      </Button>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

        </motion.div>
      </div>
    </div>
  );
}

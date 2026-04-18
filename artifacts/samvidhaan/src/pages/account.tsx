import { motion, Variants } from "framer-motion";
import { Link } from "wouter";
import {
  User, BookOpen, Gavel, Star, Clock, Settings, ChevronRight,
  Shield, Scale, Landmark, Trophy, BookMarked, ArrowRight, TrendingUp,
  MapPin, Calendar, Award, Share2, Target, Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AshokaChakra } from "@/components/layout/AshokaChakra";
import { useUserData } from "@/hooks/use-user-data";
import { useTranslation } from "react-i18next";

const PAGE_GUTTER = "px-6 sm:px-10 lg:px-16 xl:px-24";
const PAGE_CONTAINER = "mx-auto w-full max-w-7xl";

const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const ICON_MAP: Record<string, any> = {
  BookOpen, Gavel, BookMarked, Shield, Scale, Landmark
};

const recentActivity = [
  { icon: "BookOpen", text: "Read Article 21 — Right to Life & Personal Liberty", time: "2 hours ago", color: "text-primary", bg: "bg-primary/5", link: "/article/article-21" },
  { icon: "Gavel", text: "Completed Quiz: Landmark Cases of India", time: "Yesterday", color: "text-secondary", bg: "bg-secondary/5", link: "/quiz" },
  { icon: "BookMarked", text: "Bookmarked: Article 32 — Constitutional Remedies", time: "2 days ago", color: "text-accent", bg: "bg-accent/5", link: "/article/article-32" },
  { icon: "BookOpen", text: "Read Article 14 — Right to Equality", time: "3 days ago", color: "text-primary", bg: "bg-primary/5", link: "/article/article-14" },
];

const bookmarksList = [
  { id: "article-21", title: "Article 21 — Right to Life", part: "Part III", icon: "Shield" },
  { id: "article-14", title: "Article 14 — Right to Equality", part: "Part III", icon: "Scale" },
  { id: "article-44", title: "Article 44 — Uniform Civil Code", part: "Part IV", icon: "Landmark" },
  { id: "article-51a", title: "Article 51A — Fundamental Duties", part: "Part IVA", icon: "BookMarked" },
];

export default function Account() {
  const { user, fbUser, loading, signInWithGoogle } = useUserData();
  const { t } = useTranslation();

  const displayActivity = user?.activity?.length ? user.activity : recentActivity;
  const displayBookmarks = user?.saved?.length ? user.saved : bookmarksList;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="relative w-16 h-16">
          <AshokaChakra className="w-full h-full text-primary/20 animate-pulse" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        </div>
      </div>
    );
  }

  if (!fbUser) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#fafafa] dark:bg-[#080808] px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full text-center space-y-8 p-10 bg-white dark:bg-black/30 border border-border/40 rounded-[2.5rem] shadow-2xl shadow-primary/5"
        >
          <div className="mx-auto w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center text-primary mb-6">
            <User className="h-10 w-10" />
          </div>
          <div>
            <h1 className="text-3xl font-black font-serif text-foreground tracking-tight mb-3">Begin Your Journey</h1>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Sign in to track your constitutional scholarship, save articles, and compete with other scholars across India.
            </p>
          </div>
          <Button 
            onClick={signInWithGoogle}
            className="w-full h-14 rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-base gap-3 shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <div className="w-6 h-6 bg-white rounded-lg flex items-center justify-center">
              <svg viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                  <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z" />
                  <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z" />
                  <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z" />
                  <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 45.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z" />
                </g>
              </svg>
            </div>
            Sign in with Google
          </Button>
          <div className="pt-4">
            <Link href="/" className="text-xs font-bold text-primary hover:underline">
              Return to Home
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  const stats = [
    { icon: BookOpen, label: t('account.articles_read'), value: user.articlesRead, color: "text-primary", bg: "bg-primary/5" },
    { icon: Trophy, label: t('account.quiz_accuracy'), value: `${user.quizScore}%`, color: "text-secondary", bg: "bg-secondary/5" },
    { icon: Zap, label: t('account.day_streak'), value: user.streak, color: "text-accent", bg: "bg-accent/5" },
    { icon: BookMarked, label: t('account.saved_items'), value: user.bookmarks, color: "text-primary", bg: "bg-primary/5" },
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#080808]">
      {/* Refined Profile Header */}
      <section className={`pt-12 pb-8 ${PAGE_GUTTER} border-b border-border/40 bg-white dark:bg-black/20 backdrop-blur-xl relative overflow-hidden`}>
        {/* Subtle Background Element */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
          <AshokaChakra className="w-full h-full scale-150 translate-x-1/2 -translate-y-1/4" />
        </div>

        <div className={`${PAGE_CONTAINER} relative z-10`}>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              {/* Profile Picture */}
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative">
                <div className="w-24 h-24 rounded-2xl bg-linear-to-br from-primary via-primary/80 to-secondary/80 flex items-center justify-center text-primary-foreground text-3xl font-black shadow-lg shadow-primary/10">
                  {user.avatar}
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-background border-2 border-border/50 rounded-xl flex items-center justify-center shadow-sm">
                  <Award className="h-4 w-4 text-secondary fill-secondary/10" />
                </div>
              </motion.div>

              {/* Identity */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-secondary bg-secondary/10 border border-secondary/20 px-2 py-0.5 rounded-md">
                    {t('account.profile_tag', { level: user.level })}
                  </span>
                  <div className="flex items-center gap-1 text-[10px] font-bold text-muted-foreground/60 px-2 py-0.5 bg-muted/50 rounded-md border border-border/40">
                    <MapPin className="h-3 w-3" /> {user.location}
                  </div>
                </div>
                <h1 className="text-3xl font-bold text-foreground tracking-tight mb-1">{user.name}</h1>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-medium text-muted-foreground">
                  <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5 opacity-50" /> {t('account.joined_tag', { date: user.joined })}</span>
                  <span className="w-1 h-1 rounded-full bg-border" />
                  <span>{user.email}</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2.5">
              <Button variant="outline" size="sm" className="h-9 px-4 rounded-xl text-[11px] font-black uppercase tracking-wider border-border/60 bg-white/50 dark:bg-black/40 hover:bg-muted/50 gap-2">
                <Share2 className="h-3.5 w-3.5" /> {t('account.share_profile')}
              </Button>
              <Link href="/settings">
                <Button size="sm" className="h-9 px-5 rounded-xl bg-primary text-primary-foreground text-[11px] font-black uppercase tracking-wider gap-2 shadow-lg shadow-primary/20 hover:-translate-y-px transition-all">
                  <Settings className="h-3.5 w-3.5" /> {t('account.edit_settings')}
                </Button>
              </Link>
            </div>
          </div>

          {/* KPI Stats - Highly Compact */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10" 
            variants={container} 
            initial="hidden" 
            animate="show"
          >
            {stats.map((s, i) => (
              <motion.div key={i} variants={item} className="bg-white/50 dark:bg-black/30 border border-border/40 rounded-2xl p-4 flex flex-col gap-3 hover:border-primary/30 transition-all group">
                <div className={`w-9 h-9 rounded-xl ${s.bg} ${s.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                  <s.icon className="h-4.5 w-4.5" />
                </div>
                <div>
                  <p className="text-2xl font-black text-foreground tracking-tight">{s.value}</p>
                  <p className="text-[10px] font-black text-muted-foreground/60 uppercase tracking-widest mt-0.5">{s.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Modern Grid Layout */}
      <section className={`py-12 ${PAGE_GUTTER}`}>
        <div className={`${PAGE_CONTAINER} grid grid-cols-1 lg:grid-cols-12 gap-10 items-start`}>
          
          {/* Main Activity Feed (Left) */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Activity List */}
            <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <div className="flex items-center justify-between mb-6 px-1">
                <div>
                  <h2 className="text-xl font-bold text-foreground tracking-tight flex items-center gap-2">
                    {t('account.engagement_title')}
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  </h2>
                  <p className="text-xs text-muted-foreground font-medium mt-1">{t('account.engagement_desc')}</p>
                </div>
                <button className="text-[10px] font-black uppercase tracking-widest text-primary bg-primary/10 px-3 py-1.5 rounded-lg hover:bg-primary/20 transition-colors">
                  {t('account.view_history')}
                </button>
              </div>

              <div className="space-y-3">
                {displayActivity.map((a, i) => {
                  const Icon = typeof a.icon === 'string' ? (ICON_MAP[a.icon] || BookOpen) : a.icon;
                  return (
                    <Link key={i} href={a.link}>
                      <motion.div variants={item} className="bg-white dark:bg-black/30 border border-border/40 rounded-2xl p-5 flex items-center gap-5 hover:border-primary/40 hover:bg-muted/30 transition-all group cursor-pointer shadow-sm shadow-black/2">
                        <div className={`w-11 h-11 rounded-xl ${a.bg} ${a.color} flex items-center justify-center shrink-0 shadow-inner`}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="grow min-w-0">
                          <p className="text-sm font-bold text-foreground leading-snug group-hover:text-primary transition-colors">{a.text}</p>
                          <div className="flex items-center gap-3 mt-1.5">
                            <span className="text-[10px] font-bold text-muted-foreground/60 flex items-center gap-1"><Clock className="h-3 w-3" /> {a.time}</span>
                            <span className="w-1 h-1 rounded-full bg-border" />
                            <span className="text-[10px] font-black text-primary/60 uppercase tracking-widest">Completed</span>
                          </div>
                        </div>
                        <div className="w-8 h-8 rounded-lg border border-border/60 flex items-center justify-center group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                          <ChevronRight className="h-4 w-4" />
                        </div>
                      </motion.div>
                    </Link>
                  );
                })}
              </div>
            </motion.div>

            {/* Bookmarks Grid */}
            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center justify-between mb-6 px-1">
                <div>
                  <h2 className="text-xl font-bold text-foreground tracking-tight">{t('account.bookmarks_title')}</h2>
                  <p className="text-xs text-muted-foreground font-medium mt-1">{t('account.bookmarks_desc')}</p>
                </div>
                <Link href="/explore">
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary flex items-center gap-2 group/link cursor-pointer hover:opacity-80 transition-opacity">
                    {t('account.bookmarks_explore')} <ArrowRight className="h-3 w-3 group-hover/link:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {displayBookmarks.map((b, i) => {
                  const Icon = typeof b.icon === 'string' ? (ICON_MAP[b.icon] || BookMarked) : b.icon;
                  return (
                    <Link key={i} href={`/article/${b.id}`}>
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.98 }} 
                        whileInView={{ opacity: 1, scale: 1 }} 
                        viewport={{ once: true }} 
                        transition={{ delay: i * 0.05 }}
                        className="bg-white dark:bg-black/30 border border-border/40 rounded-2xl p-6 hover:border-primary/40 transition-all group cursor-pointer relative overflow-hidden h-full"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all shadow-inner">
                            <Icon className="h-5 w-5" />
                          </div>
                          <span className="text-[9px] font-black uppercase tracking-[0.2em] text-muted-foreground/40">{b.part}</span>
                        </div>
                        <h3 className="text-base font-bold text-foreground leading-tight group-hover:text-primary transition-colors mb-2">{b.title}</h3>
                        <p className="text-[10px] font-medium text-muted-foreground leading-relaxed line-clamp-2">Fundamental framework defining the rights and guarantees of Indian citizens.</p>
                        
                        <div className="absolute top-0 right-0 w-16 h-16 bg-linear-to-bl from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.div>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Master Progress Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              className="bg-white dark:bg-black/40 border border-border/40 rounded-3xl p-7 shadow-sm relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                  <Trophy className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground leading-none">{t('account.mastery_title')}</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-primary mt-1.5 flex items-center gap-1.5">
                    {t('account.mastery_level', { level: user.level })} <Star className="h-2.5 w-2.5 fill-primary" />
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                {[
                  { label: "Fundamental Rights", pct: 85, color: "bg-primary" },
                  { label: "DPSP & Duties", pct: 60, color: "bg-secondary" },
                  { label: "Judicial History", pct: 45, color: "bg-accent" },
                  { label: "State Policy", pct: 30, color: "bg-amber-500" },
                ].map((p, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-[11px] font-bold text-foreground/80">{p.label}</span>
                      <span className="text-[10px] font-black text-primary bg-primary/10 px-1.5 py-0.5 rounded-md">{p.pct}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden border border-border/20">
                      <motion.div 
                        initial={{ width: 0 }} 
                        whileInView={{ width: `${p.pct}%` }} 
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "circOut", delay: i * 0.1 }} 
                        className={`h-full ${p.color} rounded-full shadow-lg shadow-black/5`} 
                      />
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/quiz">
                <Button className="w-full h-11 rounded-2xl bg-primary text-primary-foreground text-[11px] font-black uppercase tracking-wider mt-10 shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all">
                  {t('account.launch_quest')}
                </Button>
              </Link>
            </motion.div>

            {/* Achievement Targets */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <div className="flex items-center justify-between mb-5 px-1">
                <h3 className="text-[11px] font-black uppercase tracking-widest text-muted-foreground/60">{t('account.targets_title')}</h3>
                <Target className="h-4 w-4 text-muted-foreground/40" />
              </div>
              
              <div className="space-y-3">
                {[
                  { title: "Article Architect", desc: "Read 50 unique articles", progress: 78, color: "from-blue-500/20 to-blue-600/20" },
                  { title: "Quiz Grandmaster", desc: "Maintain 95% accuracy", progress: 92, color: "from-amber-500/20 to-amber-600/20" },
                ].map((goal, i) => (
                  <div key={i} className={`bg-linear-to-br ${goal.color} border border-white/10 dark:border-white/5 rounded-2xl p-5 relative overflow-hidden`}>
                    <div className="flex justify-between items-start mb-3 relative z-10">
                      <div>
                        <p className="font-bold text-xs text-foreground mb-1">{goal.title}</p>
                        <p className="text-[10px] text-muted-foreground font-medium">{goal.desc}</p>
                      </div>
                      <span className="text-[10px] font-black text-foreground">{goal.progress}%</span>
                    </div>
                    <div className="h-1.5 bg-background/40 rounded-full overflow-hidden relative z-10">
                      <motion.div 
                        initial={{ width: 0 }} 
                        whileInView={{ width: `${goal.progress}%` }} 
                        viewport={{ once: true }}
                        className="h-full bg-foreground/80 rounded-full" 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}


import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import { Layout } from "@/components/layout/Layout";
import Home from "@/pages/home";
import Explore from "@/pages/explore";
import ArticleDetail from "@/pages/article";
import Quiz from "@/pages/quiz";
import About from "@/pages/about";
import Privacy from "@/pages/privacy";
import Contact from "@/pages/contact";
import Making from "@/pages/making";
import Framers from "@/pages/framers";
import Account from "@/pages/account";
import SettingsPage from "@/pages/settings";
import { AuthProvider } from "@/contexts/AuthContext";
import { useAuth } from "@/contexts/AuthContext";

const queryClient = new QueryClient();

function ProtectedRoute({ component: Component, path }: { component: any; path: string }) {
  const { fbUser, loading } = useAuth();
  const [, setLocation] = useLocation();

  useEffect(() => {
    if (!loading && !fbUser) {
      setLocation("/");
    }
  }, [fbUser, loading, setLocation]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return fbUser ? <Route path={path} component={Component} /> : null;
}

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/explore" component={Explore} />
        <Route path="/article/:id" component={ArticleDetail} />
        <Route path="/quiz" component={Quiz} />
        <Route path="/about" component={About} />
        <Route path="/framers" component={Framers} />
        <Route path="/making" component={Making} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/contact" component={Contact} />
        <ProtectedRoute path="/account" component={Account} />
        <ProtectedRoute path="/settings" component={SettingsPage} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;

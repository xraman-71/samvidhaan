import { Switch, Route, Router as WouterRouter } from "wouter";
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

const queryClient = new QueryClient();

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
        <Route path="/account" component={Account} />
        <Route path="/settings" component={SettingsPage} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;


import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center py-12">
        <div className="container max-w-md text-center">
          <h1 className="text-6xl font-bold text-primary mb-6">404</h1>
          <p className="text-xl mb-8">Cette page n'existe pas.</p>
          <p className="text-muted-foreground mb-8">
            La page que vous recherchez a peut-être été déplacée, supprimée ou n'a jamais existé.
          </p>
          <Button asChild>
            <Link to="/">Retour à l'accueil</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;

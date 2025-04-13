
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Newspaper, TrendingUp, Building, Landmark } from "lucide-react";

const Actualites = () => {
  const news = [
    {
      title: "Nouvelle loi de finances 2025",
      date: "05 avril 2025",
      category: "Législation",
      description: "Les principaux changements de la loi de finances 2025 et leur impact sur les entreprises marocaines.",
      icon: Landmark
    },
    {
      title: "Évolution du taux directeur de Bank Al-Maghrib",
      date: "28 mars 2025",
      category: "Finance",
      description: "Bank Al-Maghrib maintient son taux directeur à 3% lors de sa dernière réunion trimestrielle.",
      icon: TrendingUp
    },
    {
      title: "Digitalisation des déclarations fiscales",
      date: "15 mars 2025",
      category: "Numérique",
      description: "La DGI annonce de nouvelles fonctionnalités pour la plateforme SIMPL pour faciliter les déclarations en ligne.",
      icon: Building
    },
    {
      title: "Normes IFRS : mise à jour 2025",
      date: "02 mars 2025",
      category: "Normes Comptables",
      description: "Les changements dans les normes IFRS applicables aux sociétés cotées marocaines à partir de 2025.",
      icon: Newspaper
    },
  ];

  return (
    <>
      <Helmet>
        <title>Actualités Économiques et Financières | ComptaMaroc</title>
        <meta name="description" content="Dernières actualités économiques et financières impactant la comptabilité au Maroc." />
      </Helmet>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <section className="py-12">
            <div className="container px-4 sm:px-6">
              <div className="mb-12 text-center">
                <h1 className="text-4xl font-bold tracking-tight">Actualités Économiques et Financières</h1>
                <p className="mt-4 text-lg text-muted-foreground">
                  Restez informé des dernières actualités qui impactent la comptabilité et la finance au Maroc
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {news.map((item, index) => (
                  <Card key={index} className="overflow-hidden transition-all hover:shadow-lg">
                    <CardHeader className="bg-muted/50 flex flex-row items-center gap-4">
                      <div className="rounded-full bg-primary/10 p-3">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                        <div className="flex items-center text-sm text-muted-foreground mt-1">
                          <span>{item.date}</span>
                          <span className="mx-2">•</span>
                          <span>{item.category}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <CardDescription className="text-base">{item.description}</CardDescription>
                      <div className="mt-4">
                        <a href="#" className="text-primary hover:underline text-sm font-medium">
                          Lire la suite →
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Actualites;

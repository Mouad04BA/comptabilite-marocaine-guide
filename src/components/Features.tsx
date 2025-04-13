
import { BookOpen, Calendar, Newspaper, FileText, Landmark } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

export function Features() {
  const features = [
    {
      icon: BookOpen,
      title: "Plan Comptable Marocain",
      description: "Consultez la structure complète du plan comptable marocain, organisé par classes.",
      href: "/plan-comptable"
    },
    {
      icon: Calendar,
      title: "Échéances Fiscales",
      description: "Toutes les dates importantes pour les déclarations fiscales (IS, IR, TVA).",
      href: "/echeances"
    },
    {
      icon: Newspaper,
      title: "Actualités Économiques",
      description: "Dernières informations économiques et financières qui impactent la comptabilité au Maroc.",
      href: "/actualites"
    },
    {
      icon: FileText,
      title: "Dépôt de Bilan",
      description: "Procédures et exigences pour le dépôt de bilan et les obligations légales.",
      href: "/depot-bilan"
    },
    {
      icon: Landmark,
      title: "Ressources Utiles",
      description: "Accédez aux liens et ressources pour approfondir vos connaissances.",
      href: "/ressources"
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">
            Ressources Essentielles pour les Comptables
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Accédez à toutes les informations nécessaires pour la gestion comptable et fiscale au Maroc.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Link to={feature.href} key={index} className="no-underline">
              <Card className="h-full transition-all duration-200 card-hover-effect hover:border-primary/50">
                <CardHeader>
                  <feature.icon className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

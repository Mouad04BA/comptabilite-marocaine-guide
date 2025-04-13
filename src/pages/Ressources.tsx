
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, BookOpen, FileText, Download, Landmark, GraduationCap, BookMarked } from "lucide-react";

const Ressources = () => {
  const resources = [
    {
      category: "Documents officiels",
      items: [
        {
          title: "Code Général des Impôts",
          description: "Version actualisée du CGI avec les dernières modifications fiscales.",
          icon: FileText,
          link: "#"
        },
        {
          title: "Plan Comptable Marocain",
          description: "Document officiel du Plan Comptable Général Marocain.",
          icon: BookOpen,
          link: "#"
        },
        {
          title: "Loi de Finances 2025",
          description: "Texte intégral de la Loi de Finances avec les dispositions fiscales.",
          icon: FileText,
          link: "#"
        }
      ]
    },
    {
      category: "Institutions et organismes",
      items: [
        {
          title: "Direction Générale des Impôts",
          description: "Site officiel de la DGI pour les services fiscaux en ligne et formulaires.",
          icon: Landmark,
          link: "https://www.tax.gov.ma/"
        },
        {
          title: "Office Marocain de la Propriété Industrielle et Commerciale",
          description: "Procédures d'enregistrement des entreprises et marques.",
          icon: Landmark,
          link: "https://www.ompic.ma/"
        },
        {
          title: "Ordre des Experts Comptables",
          description: "Ressources professionnelles pour les experts comptables et auditeurs.",
          icon: GraduationCap,
          link: "https://www.oecmaroc.com/"
        }
      ]
    },
    {
      category: "Outils et modèles",
      items: [
        {
          title: "Modèles de liasse fiscale",
          description: "Modèles à télécharger pour préparer vos déclarations fiscales.",
          icon: Download,
          link: "#"
        },
        {
          title: "Guide des déclarations TVA",
          description: "Guide pratique pour compléter correctement vos déclarations de TVA.",
          icon: BookMarked,
          link: "#"
        },
        {
          title: "Calculateur d'impôts",
          description: "Outil en ligne pour estimer vos charges fiscales.",
          icon: Download,
          link: "#"
        }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Ressources Utiles | ComptaMaroc</title>
        <meta name="description" content="Ressources, guides et outils essentiels pour les professionnels de la comptabilité au Maroc." />
      </Helmet>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <section className="py-12">
            <div className="container px-4 sm:px-6">
              <div className="mb-12 text-center">
                <h1 className="text-4xl font-bold tracking-tight">Ressources Utiles</h1>
                <p className="mt-4 text-lg text-muted-foreground">
                  Guides, documents et liens essentiels pour les professionnels de la comptabilité au Maroc
                </p>
              </div>

              {resources.map((category, catIndex) => (
                <div key={catIndex} className="mb-12">
                  <h2 className="text-2xl font-bold mb-6">{category.category}</h2>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {category.items.map((item, itemIndex) => (
                      <Card key={itemIndex} className="overflow-hidden transition-all hover:shadow-md">
                        <CardHeader>
                          <div className="flex items-start gap-4">
                            <div className="rounded-full bg-primary/10 p-2">
                              <item.icon className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <CardTitle className="text-xl">{item.title}</CardTitle>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-base mb-4">
                            {item.description}
                          </CardDescription>
                          <a 
                            href={item.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-primary hover:underline text-sm font-medium"
                          >
                            Consulter <ExternalLink className="ml-1 h-3 w-3" />
                          </a>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Ressources;


import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

const PlanComptable = () => {
  const compteClasses = [
    {
      id: "classe1",
      title: "Classe 1 - Comptes de financement permanent",
      description: "Capitaux propres, emprunts, provisions durables pour risques et charges.",
      comptes: [
        { code: "11", label: "Capital et réserves" },
        { code: "12", label: "Résultats nets en instance d'affectation" },
        { code: "13", label: "Résultats nets de l'exercice" },
        { code: "14", label: "Dettes de financement" },
        { code: "15", label: "Provisions durables pour risques et charges" },
        { code: "16", label: "Comptes de liaison des établissements et succursales" },
        { code: "17", label: "Écarts de conversion - Passif" },
        { code: "18", label: "Dettes de financement diverses" },
      ]
    },
    {
      id: "classe2",
      title: "Classe 2 - Comptes d'actif immobilisé",
      description: "Immobilisations en non-valeurs, incorporelles, corporelles et financières.",
      comptes: [
        { code: "21", label: "Immobilisations en non-valeurs" },
        { code: "22", label: "Immobilisations incorporelles" },
        { code: "23", label: "Immobilisations corporelles" },
        { code: "24", label: "Immobilisations financières" },
        { code: "25", label: "Immobilisations en cours" },
        { code: "27", label: "Écarts de conversion - Actif" },
        { code: "28", label: "Amortissements des immobilisations" },
        { code: "29", label: "Provisions pour dépréciation des immobilisations" },
      ]
    },
    {
      id: "classe3",
      title: "Classe 3 - Comptes d'actif circulant (hors trésorerie)",
      description: "Stocks, créances de l'actif circulant, titres et valeurs de placement.",
      comptes: [
        { code: "31", label: "Stocks" },
        { code: "34", label: "Créances de l'actif circulant" },
        { code: "35", label: "Titres et valeurs de placement" },
        { code: "37", label: "Écarts de conversion - Actif (éléments circulants)" },
        { code: "39", label: "Provisions pour dépréciation des comptes de l'actif circulant" },
      ]
    },
    {
      id: "classe4",
      title: "Classe 4 - Comptes de passif circulant (hors trésorerie)",
      description: "Dettes du passif circulant, autres provisions pour risques et charges.",
      comptes: [
        { code: "44", label: "Dettes du passif circulant" },
        { code: "45", label: "Autres provisions pour risques et charges" },
        { code: "47", label: "Écarts de conversion - Passif (éléments circulants)" },
      ]
    },
    {
      id: "classe5",
      title: "Classe 5 - Comptes de trésorerie",
      description: "Trésorerie actif et passif.",
      comptes: [
        { code: "51", label: "Trésorerie - Actif" },
        { code: "55", label: "Trésorerie - Passif" },
        { code: "59", label: "Provisions pour dépréciation des comptes de trésorerie" },
      ]
    },
    {
      id: "classe6",
      title: "Classe 6 - Comptes de charges",
      description: "Charges d'exploitation, financières, non courantes.",
      comptes: [
        { code: "61", label: "Charges d'exploitation" },
        { code: "63", label: "Impôts, taxes et charges assimilées" },
        { code: "64", label: "Charges de personnel" },
        { code: "65", label: "Autres charges d'exploitation" },
        { code: "66", label: "Charges financières" },
        { code: "67", label: "Charges non courantes" },
        { code: "68", label: "Dotations d'exploitation" },
        { code: "69", label: "Impôts sur les résultats" },
      ]
    },
    {
      id: "classe7",
      title: "Classe 7 - Comptes de produits",
      description: "Produits d'exploitation, financiers, non courants.",
      comptes: [
        { code: "71", label: "Produits d'exploitation" },
        { code: "72", label: "Produits des activités annexes" },
        { code: "73", label: "Variations des stocks de produits" },
        { code: "74", label: "Subventions d'exploitation" },
        { code: "75", label: "Autres produits d'exploitation" },
        { code: "76", label: "Produits financiers" },
        { code: "77", label: "Produits non courants" },
        { code: "78", label: "Reprises d'exploitation" },
      ]
    },
  ];

  return (
    <>
      <Helmet>
        <title>Plan Comptable Marocain - ComptaMaroc</title>
        <meta name="description" content="Consultez le plan comptable marocain détaillé par classes et comptes." />
      </Helmet>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 py-12">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl font-bold mb-6">Plan Comptable Marocain</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Le Plan Comptable Marocain est structuré en sept classes de comptes. Consultez ci-dessous les détails de chaque classe et les comptes qui les composent.
              </p>

              <Tabs defaultValue="classe1" className="w-full">
                <ScrollArea className="w-full">
                  <TabsList className="w-full justify-start">
                    {compteClasses.map((classe) => (
                      <TabsTrigger key={classe.id} value={classe.id}>
                        {classe.id.replace("classe", "Classe ")}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </ScrollArea>

                {compteClasses.map((classe) => (
                  <TabsContent key={classe.id} value={classe.id} className="mt-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>{classe.title}</CardTitle>
                        <CardDescription>{classe.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {classe.comptes.map((compte, index) => (
                            <div key={compte.code}>
                              <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                  <span className="font-mono font-bold text-primary mr-3">{compte.code}</span>
                                  <span>{compte.label}</span>
                                </div>
                              </div>
                              {index < classe.comptes.length - 1 && <Separator className="mt-4" />}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PlanComptable;

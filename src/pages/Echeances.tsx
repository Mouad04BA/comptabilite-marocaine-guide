
import { Helmet } from "react-helmet";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const Echeances = () => {
  const echeances = {
    is: [
      {
        periode: "Mensuelle",
        actions: [
          {
            titre: "Acomptes provisionnels",
            description: "Paiement des acomptes provisionnels (20% de l'IS de l'exercice précédent)",
            dates: "Avant la fin du 3ème, 6ème et 9ème mois de l'exercice",
          },
        ],
      },
      {
        periode: "Trimestrielle",
        actions: [
          {
            titre: "IS des revenus de placements à revenu fixe",
            description: "Versement de la retenue à la source sur les revenus payés à des tiers",
            dates: "Au cours du mois qui suit chaque trimestre",
          },
        ],
      },
      {
        periode: "Annuelle",
        actions: [
          {
            titre: "Déclaration du résultat fiscal",
            description: "Déclaration du résultat fiscal (modèle 1 de l'IS)",
            dates: "Dans les 3 mois suivant la date de clôture de l'exercice",
          },
          {
            titre: "Paiement du reliquat d'IS",
            description: "Versement du complément d'IS dû après déduction des acomptes provisionnels",
            dates: "Avant l'expiration du 3ème mois suivant la date de clôture de l'exercice",
          },
        ],
      },
    ],
    ir: [
      {
        periode: "Mensuelle",
        actions: [
          {
            titre: "IR sur salaires",
            description: "Versement de l'IR retenu à la source sur les salaires",
            dates: "Avant le 1er du mois qui suit le mois de paiement",
          },
        ],
      },
      {
        periode: "Trimestrielle",
        actions: [
          {
            titre: "Acomptes provisionnels",
            description: "Paiement des acomptes provisionnels (25% de l'IR de l'année précédente)",
            dates: "Avant le 1er avril, 1er juillet, 1er octobre et 1er janvier",
          },
        ],
      },
      {
        periode: "Annuelle",
        actions: [
          {
            titre: "Déclaration annuelle de revenu global",
            description: "Dépôt de la déclaration du revenu global (modèle 1)",
            dates: "Avant le 1er mars de chaque année",
          },
          {
            titre: "Déclaration annuelle des traitements et salaires",
            description: "Déclaration des rémunérations versées (modèle 9421)",
            dates: "Avant le 1er mars de chaque année",
          },
        ],
      },
    ],
    tva: [
      {
        periode: "Mensuelle",
        actions: [
          {
            titre: "Déclaration et paiement pour CA > 1 000 000 MAD",
            description: "Pour les contribuables dont le chiffre d'affaires dépasse 1 million de dirhams",
            dates: "Avant le 20 de chaque mois",
          },
        ],
      },
      {
        periode: "Trimestrielle",
        actions: [
          {
            titre: "Déclaration et paiement pour CA < 1 000 000 MAD",
            description: "Pour les contribuables dont le chiffre d'affaires est inférieur à 1 million de dirhams",
            dates: "Avant le 20 du premier mois de chaque trimestre",
          },
        ],
      },
      {
        periode: "Annuelle",
        actions: [
          {
            titre: "Régularisation de la TVA prorata",
            description: "Calcul définitif du prorata de déduction et régularisation",
            dates: "Avec la déclaration du premier mois ou trimestre de l'année suivante",
          },
        ],
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Échéances Fiscales au Maroc - ComptaMaroc</title>
        <meta name="description" content="Calendrier des échéances fiscales au Maroc: IS, IR, TVA. Tous les délais et dates importantes pour vos déclarations fiscales." />
      </Helmet>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 py-12">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl font-bold mb-6">Échéances Fiscales au Maroc</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Retrouvez ci-dessous les principales échéances fiscales au Maroc pour l'IS, l'IR et la TVA.
              </p>

              <Alert className="mb-8">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Important</AlertTitle>
                <AlertDescription>
                  Les dates indiquées sont données à titre informatif. Vérifiez toujours auprès de la Direction Générale des Impôts pour toute modification récente.
                </AlertDescription>
              </Alert>

              <Tabs defaultValue="is" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="is">Impôt sur les Sociétés</TabsTrigger>
                  <TabsTrigger value="ir">Impôt sur le Revenu</TabsTrigger>
                  <TabsTrigger value="tva">TVA</TabsTrigger>
                </TabsList>

                {Object.entries(echeances).map(([type, periodes]) => (
                  <TabsContent key={type} value={type} className="mt-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>
                          {type === "is" ? "Impôt sur les Sociétés (IS)" : 
                           type === "ir" ? "Impôt sur le Revenu (IR)" : 
                           "Taxe sur la Valeur Ajoutée (TVA)"}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-8">
                          {periodes.map((periode, index) => (
                            <div key={index}>
                              <h3 className="font-semibold text-lg mb-4">Échéances {periode.periode}s</h3>
                              <div className="space-y-6">
                                {periode.actions.map((action, actionIndex) => (
                                  <div key={actionIndex} className="pl-4 border-l-2 border-primary space-y-2">
                                    <h4 className="font-medium">{action.titre}</h4>
                                    <p className="text-sm text-muted-foreground">{action.description}</p>
                                    <div className="flex items-center text-sm mt-2">
                                      <span className="font-semibold mr-2">Dates:</span>
                                      <span>{action.dates}</span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                              {index < periodes.length - 1 && <Separator className="my-6" />}
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

export default Echeances;

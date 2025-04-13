
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FileText, Clock, Calendar, FileCheck } from "lucide-react";

const DepotBilan = () => {
  const steps = [
    {
      title: "Préparation des états financiers",
      icon: FileText,
      description: "Établissement du bilan, compte de résultat, état des soldes de gestion, tableau de financement et ETIC.",
    },
    {
      title: "Validation par l'assemblée générale",
      icon: Calendar,
      description: "Approbation des comptes par l'assemblée générale ordinaire dans les 6 mois suivant la clôture.",
    },
    {
      title: "Dépôt au greffe du tribunal",
      icon: Clock,
      description: "Les états financiers doivent être déposés au greffe du tribunal de commerce dans le mois suivant l'approbation.",
    },
    {
      title: "Déclaration fiscale",
      icon: FileCheck,
      description: "Soumission de la liasse fiscale à l'administration fiscale au plus tard 3 mois après la clôture de l'exercice.",
    },
  ];

  const faqs = [
    {
      question: "Quels documents constituent la liasse fiscale au Maroc ?",
      answer: "La liasse fiscale comprend le bilan, le compte de produits et charges (CPC), l'état des soldes de gestion (ESG), le tableau de financement et l'état des informations complémentaires (ETIC)."
    },
    {
      question: "Quand faut-il déposer la liasse fiscale ?",
      answer: "La liasse fiscale doit être déposée dans les 3 mois suivant la date de clôture de l'exercice fiscal. Pour les sociétés clôturant au 31 décembre, la date limite est le 31 mars de l'année suivante."
    },
    {
      question: "Quelles sont les sanctions en cas de retard de dépôt ?",
      answer: "Le retard de dépôt de la liasse fiscale entraîne une majoration de 15% sur le montant de l'impôt dû. Des pénalités supplémentaires de 5% s'appliquent en cas de retard de paiement, avec un minimum de 500 dirhams."
    },
    {
      question: "Le dépôt électronique est-il obligatoire au Maroc ?",
      answer: "Oui, depuis 2017, le dépôt électronique via la plateforme SIMPL (Système Intégré de Taxation) est obligatoire pour toutes les entreprises soumises à l'IS, quelle que soit leur taille."
    },
  ];

  return (
    <>
      <Helmet>
        <title>Procédure de Dépôt de Bilan | ComptaMaroc</title>
        <meta name="description" content="Guide complet sur les procédures et exigences pour le dépôt de bilan au Maroc." />
      </Helmet>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <section className="py-12">
            <div className="container px-4 sm:px-6">
              <div className="mb-12 text-center">
                <h1 className="text-4xl font-bold tracking-tight">Procédure de Dépôt de Bilan</h1>
                <p className="mt-4 text-lg text-muted-foreground">
                  Guide pratique pour comprendre les obligations légales et les étapes du dépôt de bilan au Maroc
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {steps.map((step, index) => (
                  <Card key={index} className="overflow-hidden transition-all hover:shadow-md">
                    <CardHeader className="flex flex-col items-center pb-2">
                      <div className="rounded-full bg-primary/10 p-3 mb-4">
                        <step.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-center text-xl">
                        Étape {index + 1}: {step.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-center">
                        {step.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-16">
                <h2 className="text-2xl font-bold tracking-tight mb-6">Questions fréquentes</h2>
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left font-medium">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default DepotBilan;

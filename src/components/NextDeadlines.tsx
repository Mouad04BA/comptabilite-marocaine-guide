
import { CountdownTimer } from "./CountdownTimer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Calendar, Clock } from "lucide-react";

export function NextDeadlines() {
  // Get the next quarter's end date
  const getNextQuarterEnd = () => {
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();
    
    // Calculate next quarter end month (March, June, September, December)
    let nextQuarterMonth;
    if (currentMonth < 2) nextQuarterMonth = 2; // March
    else if (currentMonth < 5) nextQuarterMonth = 5; // June
    else if (currentMonth < 8) nextQuarterMonth = 8; // September
    else nextQuarterMonth = 11; // December
    
    return new Date(currentYear, nextQuarterMonth, 31);
  };

  const getNextTaxDeadline = () => {
    const now = new Date();
    const currentYear = now.getFullYear();
    
    // April 30th is a common tax deadline in Morocco
    const aprilDeadline = new Date(currentYear, 3, 30);
    
    // If we're past April 30, set it to next year
    if (now > aprilDeadline) {
      return new Date(currentYear + 1, 3, 30);
    }
    
    return aprilDeadline;
  };

  const nextQuarterEnd = getNextQuarterEnd();
  const nextTaxDeadline = getNextTaxDeadline();

  return (
    <section className="py-12 bg-muted/30">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight">
            Prochaines Échéances
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Ne manquez pas les dates importantes pour vos déclarations fiscales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="h-full">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                <CardTitle>Déclaration TVA Trimestrielle</CardTitle>
              </div>
              <CardDescription>
                La prochaine déclaration de TVA doit être déposée avant la fin du mois qui suit le trimestre.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <CountdownTimer 
                targetDate={nextQuarterEnd} 
                title="Temps restant avant la fin du trimestre" 
              />
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="h-4 w-4 mr-1" />
                <span>Dépôt au plus tard le 20 du mois suivant</span>
              </div>
              <Button asChild className="w-full mt-4">
                <Link to="/echeances">Voir toutes les échéances</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="h-full">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                <CardTitle>Déclaration d'Impôt sur les Sociétés</CardTitle>
              </div>
              <CardDescription>
                La déclaration annuelle pour l'impôt sur les sociétés (IS) est due 3 mois après la clôture de l'exercice.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <CountdownTimer 
                targetDate={nextTaxDeadline} 
                title="Temps restant avant la déclaration d'IS" 
              />
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="h-4 w-4 mr-1" />
                <span>Pour les exercices clôturant au 31 décembre</span>
              </div>
              <Button asChild className="w-full mt-4" variant="outline">
                <Link to="/echeances">Détails des déclarations</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

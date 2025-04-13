
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="container px-4 py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter">
              Guide de la Comptabilité Marocaine
            </h1>
            <p className="text-lg text-muted-foreground">
              Toutes les informations essentielles, les normes comptables, les échéances fiscales et les ressources pour les professionnels de la comptabilité au Maroc.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-morocco-red hover:bg-morocco-red/90">
                <Link to="/plan-comptable">
                  Consulter le Plan Comptable <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-morocco-green text-morocco-green hover:bg-morocco-green/10">
                <Link to="/echeances">
                  Échéances Fiscales
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-md animate-float">
              <svg 
                viewBox="0 0 200 200" 
                xmlns="http://www.w3.org/2000/svg" 
                className="w-full h-auto"
              >
                <path 
                  fill="currentColor" 
                  className="text-morocco-red dark:text-morocco-red/80"
                  d="M42.7,-76.4C54.9,-69.8,64.3,-57.5,71.5,-44.2C78.7,-30.8,83.6,-16.1,83.6,-0.1C83.5,16,78.4,32.7,70.3,47.5C62.2,62.3,51.1,75.3,37.3,82.1C23.5,89,7.1,89.7,-7.8,85.8C-22.6,81.9,-36,73.2,-49.2,64.1C-62.4,55,-75.4,45.4,-80.8,32.9C-86.2,20.3,-84,4.9,-80.4,-9.7C-76.8,-24.3,-71.7,-38.1,-62.3,-48.7C-52.9,-59.3,-39.1,-66.7,-25.4,-72C-11.7,-77.2,2,-80.4,15.2,-79.4C28.3,-78.5,40.5,-73.5,42.7,-76.4Z" 
                  transform="translate(100 100)" 
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center">
                  <span className="block text-5xl font-bold">PCM</span>
                  <span className="block text-sm mt-2">Plan Comptable Marocain</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

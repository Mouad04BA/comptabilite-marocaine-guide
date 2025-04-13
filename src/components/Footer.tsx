
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">ComptaMaroc</h3>
            <p className="text-sm text-muted-foreground">
              Guide complet de la comptabilité marocaine pour les professionnels et étudiants.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Liens Rapides</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-primary">Accueil</Link></li>
              <li><Link to="/plan-comptable" className="hover:text-primary">Plan Comptable</Link></li>
              <li><Link to="/echeances" className="hover:text-primary">Échéances Fiscales</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Ressources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/actualites" className="hover:text-primary">Actualités</Link></li>
              <li><Link to="/depot-bilan" className="hover:text-primary">Dépôt de Bilan</Link></li>
              <li><Link to="/ressources" className="hover:text-primary">Ressources Utiles</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Légal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/mentions-legales" className="hover:text-primary">Mentions Légales</Link></li>
              <li><Link to="/politique-confidentialite" className="hover:text-primary">Politique de Confidentialité</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ComptaMaroc. Tous droits réservés.
          </p>
          <p className="text-sm text-muted-foreground mt-4 md:mt-0">
            Conçu avec passion pour les professionnels de la comptabilité au Maroc.
          </p>
        </div>
      </div>
    </footer>
  );
}

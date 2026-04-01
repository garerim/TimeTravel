import { Clock, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-card border-t border-border py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-6 h-6 text-primary" />
              <span className="font-[family-name:var(--font-heading)] text-xl font-bold">
                <span className="text-primary">Time</span>Travel
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Votre agence de voyage temporel de luxe. Depuis 2035, nous
              transformons les rêves d&apos;exploration historique en réalité.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Destinations</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#destinations" className="hover:text-primary transition-colors">
                  Paris 1889 - Belle Époque
                </a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-primary transition-colors">
                  Crétacé - Ère des dinosaures
                </a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-primary transition-colors">
                  Florence 1504 - Renaissance
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                contact@timetravel-agency.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                +33 1 23 45 67 89
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                42 Rue du Temps, 75001 Paris
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2035 TimeTravel Agency. Tous droits réservés.</p>
          <p className="mt-1 text-xs">
            Projet pédagogique - M1/M2 Digital & IA
          </p>
        </div>
      </div>
    </footer>
  );
}

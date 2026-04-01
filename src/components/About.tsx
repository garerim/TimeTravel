"use client";

import { motion } from "framer-motion";
import { Shield, Clock, Star, Users } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Technologie Temporelle",
    description: "Notre technologie de pointe garantit un voyage sûr et précis à travers les époques.",
  },
  {
    icon: Shield,
    title: "Sécurité Maximale",
    description: "Protocoles de sécurité avancés et guides temporels expérimentés pour chaque voyage.",
  },
  {
    icon: Star,
    title: "Expérience Premium",
    description: "Un service 5 étoiles avec immersion totale dans l'époque de votre choix.",
  },
  {
    icon: Users,
    title: "Guides Experts",
    description: "Des historiens et scientifiques passionnés vous accompagnent à chaque instant.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
            Pourquoi choisir <span className="text-primary">TimeTravel</span> ?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Depuis 2035, nous offrons des expériences temporelles inégalées,
            alliant luxe, sécurité et immersion historique.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

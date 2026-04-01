"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, Euro, Clock, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { destinations, type Destination } from "@/lib/destinations";
import Image from "next/image";

function DestinationCard({
  dest,
  index,
  onSelect,
}: {
  dest: Destination;
  index: number;
  onSelect: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 cursor-pointer"
      onClick={onSelect}
    >
      <div className="relative h-64 md:h-72 overflow-hidden">
        <Image
          src={dest.image}
          alt={`Voyage temporel vers ${dest.title} — ${dest.epoch}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${dest.color} to-transparent opacity-60`} />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        <Badge className="absolute top-4 left-4 bg-primary/80 text-primary-foreground backdrop-blur-sm">
          {dest.epoch}
        </Badge>
      </div>

      <div className="p-6">
        <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-2">
          {dest.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {dest.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Euro className="w-4 h-4 text-primary" />
              {dest.price}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-primary" />
              {dest.duration}
            </span>
          </div>
          <ChevronRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
}

function DestinationModal({
  dest,
  onClose,
}: {
  dest: Destination;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-card border border-border rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative h-64 md:h-80 overflow-hidden rounded-t-2xl">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            className="w-full h-full object-cover"
          >
            <source src={dest.video} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
          <div className="absolute bottom-6 left-6">
            <Badge className="bg-primary/80 text-primary-foreground mb-2">
              {dest.epoch}
            </Badge>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold">
              {dest.title}
            </h2>
          </div>
        </div>

        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-sm">An {dest.year}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary">
              <Euro className="w-4 h-4 text-primary" />
              <span className="text-sm">{dest.price} &euro; / personne</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-sm">{dest.duration}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm">{dest.title}</span>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">
            {dest.longDescription}
          </p>

          <div className="mb-8">
            <h3 className="font-semibold text-lg mb-3">Points forts</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {dest.highlights.map((h) => (
                <div
                  key={h}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {h}
                </div>
              ))}
            </div>
          </div>

          <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full py-6 text-base font-semibold">
            Réserver ce voyage - {dest.price} &euro;
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Destinations() {
  const [selected, setSelected] = useState<Destination | null>(null);

  return (
    <section id="destinations" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4">
            Nos <span className="text-primary">Destinations</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Trois époques extraordinaires vous attendent. Choisissez votre
            aventure et laissez-vous transporter.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {destinations.map((dest, i) => (
            <DestinationCard
              key={dest.id}
              dest={dest}
              index={i}
              onSelect={() => setSelected(dest)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <DestinationModal
            dest={selected}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

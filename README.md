GROUPE : Mathéo GARERI & Karl BOUVIER & Paul RODRIGUES

# TimeTravel Agency - Webapp Interactive

Webapp interactive pour une agence de voyage temporel fictive, creee dans le cadre du projet supervise IA M1/M2 - Session 2. Le site permet de decouvrir trois destinations temporelles avec une experience immersive, un chatbot IA et un quiz de recommandation.

## Stack Technique

- **Framework** : Next.js 16 (App Router) + TypeScript
- **Styling** : Tailwind CSS v4 + ShadcnUI
- **Animations** : Framer Motion
- **Chatbot** : Mistral AI API (mistral-small-latest)
- **Icons** : Lucide React
- **Fonts** : Playfair Display (titres) + Inter (corps)

## Features

- **Landing page immersive** : Hero section avec video de fond (teaser), animations d'entree progressives
- **Section "Pourquoi nous choisir"** : 4 cartes animees au scroll presentant les atouts de l'agence
- **Galerie de 3 destinations temporelles** :
  - Paris 1889 (Belle Epoque, Tour Eiffel, Exposition Universelle)
  - Cretace -65M (dinosaures, nature prehistorique)
  - Florence 1504 (Renaissance, Michel-Ange, Medicis)
  - Cards interactives avec hover effects et modal de detail (video + infos completes)
- **Chatbot IA conversationnel** :
  - Widget flottant en bas a droite
  - Integration API Mistral pour reponses contextuelles
  - Fallback avec reponses pre-programmees si l'API n'est pas configuree
  - Personnalite definie (professionnel, passionne d'histoire)
- **Quiz de recommandation** :
  - 4 questions pour determiner la destination ideale
  - Algorithme de scoring par destination
  - Affichage du resultat avec image et description
- **Animations subtiles** :
  - Fade-in au scroll (Framer Motion `whileInView`)
  - Hover effects sur les cards
  - Transitions fluides entre les etapes du quiz
  - Scroll indicator anime sur le hero
- **Design responsive** : Mobile-first, adaptatif sur tous les ecrans
- **Theme sombre** avec accents dores (premium feel)

## IA Utilisees

- **Code** : Claude Code (Claude Opus 4.6) - Generation de la webapp complete
- **Chatbot** : Mistral AI API (mistral-small-latest) - Agent conversationnel
- **Visuels** : Assets generes en Session 1 (images + videos des 3 destinations)

## Prompts documentes

### Prompt principal (generation de la webapp)
> Creer une webapp Next.js + Tailwind + ShadcnUI pour une agence de voyage temporel de luxe avec : hero section video, galerie 3 destinations (Paris 1889, Cretace, Florence 1504), chatbot IA Mistral, quiz de recommandation, animations Framer Motion, theme sombre premium avec accents dores.

### Prompt du chatbot (system prompt Mistral)
> Tu es l'assistant virtuel de TimeTravel Agency, une agence de voyage temporel de luxe. Ton role : conseiller les clients sur les meilleures destinations temporelles. Ton ton : professionnel mais chaleureux, passionne d'histoire, enthousiaste sans etre trop familier. Tu connais Paris 1889, Cretace -65M et Florence 1504.

## Installation

```bash
# Cloner le repo
git clone <url-du-repo>
cd TimeTravel

# Installer les dependances
npm install

# Configurer l'API Mistral (optionnel - le chatbot fonctionne sans)
# Creer un compte sur https://console.mistral.ai/
# Copier la cle API dans .env.local
echo "MISTRAL_API_KEY=votre_cle_ici" > .env.local

# Lancer le serveur de dev
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000)

## Deploiement

```bash
# Build de production
npm run build

# Deploiement Vercel (recommande)
npx vercel
```

## Structure du projet

```
src/
  app/
    page.tsx          # Page principale
    layout.tsx        # Layout avec fonts et metadata
    globals.css       # Theme sombre + variables CSS
    api/chat/route.ts # API route pour Mistral
  components/
    Header.tsx        # Navigation fixe avec scroll effect
    Hero.tsx          # Hero section avec video background
    About.tsx         # Section avantages de l'agence
    Destinations.tsx  # Galerie + modal de detail
    Quiz.tsx          # Quiz de recommandation interactif
    Chatbot.tsx       # Widget chatbot IA
    Footer.tsx        # Pied de page avec contact
  lib/
    destinations.ts   # Donnees des 3 destinations
    utils.ts          # Utilitaires (cn)
public/
  images/             # Images des destinations (Session 1)
  videos/             # Videos des destinations (Session 1)
```

## Credits

- **API IA** : Mistral AI (mistral-small-latest)
- **Framework** : Next.js par Vercel
- **UI Components** : ShadcnUI
- **Animations** : Framer Motion
- **Icons** : Lucide
- **Visuels** : Generes en Session 1 du projet IA

## Licence

Projet pedagogique - M1/M2 Digital & IA - Ynov

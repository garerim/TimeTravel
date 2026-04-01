export interface Destination {
  id: string;
  title: string;
  epoch: string;
  year: string;
  description: string;
  longDescription: string;
  image: string;
  video: string;
  price: string;
  duration: string;
  highlights: string[];
  color: string;
}

export const destinations: Destination[] = [
  {
    id: "paris-1889",
    title: "Paris 1889",
    epoch: "Belle Epoque",
    year: "1889",
    description:
      "Vivez l'inauguration de la Tour Eiffel et l'Exposition Universelle dans le Paris flamboyant de la fin du XIXe siecle.",
    longDescription:
      "Plongez dans le Paris de 1889, une ville en pleine effervescence culturelle et technologique. Assistez a l'inauguration de la Tour Eiffel, chef-d'oeuvre de Gustave Eiffel, explorez les pavillons de l'Exposition Universelle et decouvrez les cafes ou se retrouvent artistes et intellectuels. Flanez sur les Grands Boulevards, admirez les premiers eclairages electriques et vivez la magie de la Belle Epoque.",
    image: "/images/paris.png",
    video: "/videos/paris.mp4",
    price: "12 500",
    duration: "3 jours",
    highlights: [
      "Inauguration de la Tour Eiffel",
      "Exposition Universelle",
      "Cafes de Montmartre",
      "Spectacles au Moulin Rouge",
    ],
    color: "from-amber-500/20 to-orange-600/20",
  },
  {
    id: "cretace",
    title: "Cretace",
    epoch: "Ere Mesozoique",
    year: "-65 000 000",
    description:
      "Explorez un monde domine par les dinosaures, ou la nature regne en maitre absolu sur une Terre meconnaissable.",
    longDescription:
      "Remontez 65 millions d'annees dans le passe pour decouvrir un monde ou les dinosaures regnent en maitres. Observez des T-Rex en chasse, des Triceratops en troupeaux et des Pteranodons planant dans un ciel sans nuages. Explorez des forets de fougeres geantes, des volcans actifs et des oceans grouillants de vie prehistorique. Une aventure unique pour les amoureux de nature et d'aventure extreme.",
    image: "/images/dino.png",
    video: "/videos/dino.mp4",
    price: "18 900",
    duration: "2 jours",
    highlights: [
      "Observation de T-Rex",
      "Survol en Pteranodon",
      "Forets prehistoriques",
      "Volcans en activite",
    ],
    color: "from-emerald-500/20 to-green-700/20",
  },
  {
    id: "florence-1504",
    title: "Florence 1504",
    epoch: "Renaissance Italienne",
    year: "1504",
    description:
      "Rencontrez les plus grands genies de la Renaissance et contemplez la creation des chefs-d'oeuvre qui ont change le monde.",
    longDescription:
      "Decouvrez Florence a l'apogee de la Renaissance italienne. Visitez l'atelier de Michel-Ange pendant la creation du David, croisez Leonard de Vinci dans les rues pavees et admirez les fresques de Botticelli. Explorez les palais des Medicis, assistez a des banquets somptueux et plongez dans l'effervescence artistique et intellectuelle qui a redessine le monde occidental.",
    image: "/images/florence.png",
    video: "/videos/florence.mp4",
    price: "14 200",
    duration: "4 jours",
    highlights: [
      "Atelier de Michel-Ange",
      "Palais des Medicis",
      "Galerie des Offices",
      "Banquets Renaissance",
    ],
    color: "from-rose-500/20 to-purple-600/20",
  },
];

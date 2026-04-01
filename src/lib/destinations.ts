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
    epoch: "Belle Époque",
    year: "1889",
    description:
      "Vivez l'inauguration de la Tour Eiffel et l'Exposition Universelle dans le Paris flamboyant de la fin du XIXe siècle.",
    longDescription:
      "Plongez dans le Paris de 1889, une ville en pleine effervescence culturelle et technologique. Assistez à l'inauguration de la Tour Eiffel, chef-d'œuvre de Gustave Eiffel, explorez les pavillons de l'Exposition Universelle et découvrez les cafés où se retrouvent artistes et intellectuels. Flânez sur les Grands Boulevards, admirez les premiers éclairages électriques et vivez la magie de la Belle Époque.",
    image: "/images/paris.png",
    video: "/videos/paris.mp4",
    price: "12 500",
    duration: "3 jours",
    highlights: [
      "Inauguration de la Tour Eiffel",
      "Exposition Universelle",
      "Cafés de Montmartre",
      "Spectacles au Moulin Rouge",
    ],
    color: "from-amber-500/20 to-orange-600/20",
  },
  {
    id: "cretace",
    title: "Crétacé",
    epoch: "Ère Mésozoïque",
    year: "-65 000 000",
    description:
      "Explorez un monde dominé par les dinosaures, où la nature règne en maître absolu sur une Terre méconnaissable.",
    longDescription:
      "Remontez 65 millions d'années dans le passé pour découvrir un monde où les dinosaures règnent en maîtres. Observez des T-Rex en chasse, des Tricératops en troupeaux et des Ptéranodons planant dans un ciel sans nuages. Explorez des forêts de fougères géantes, des volcans actifs et des océans grouillants de vie préhistorique. Une aventure unique pour les amoureux de nature et d'aventure extrême.",
    image: "/images/dino.png",
    video: "/videos/dino.mp4",
    price: "18 900",
    duration: "2 jours",
    highlights: [
      "Observation de T-Rex",
      "Survol en Ptéranodon",
      "Forêts préhistoriques",
      "Volcans en activité",
    ],
    color: "from-emerald-500/20 to-green-700/20",
  },
  {
    id: "florence-1504",
    title: "Florence 1504",
    epoch: "Renaissance Italienne",
    year: "1504",
    description:
      "Rencontrez les plus grands génies de la Renaissance et contemplez la création des chefs-d'œuvre qui ont changé le monde.",
    longDescription:
      "Découvrez Florence à l'apogée de la Renaissance italienne. Visitez l'atelier de Michel-Ange pendant la création du David, croisez Léonard de Vinci dans les rues pavées et admirez les fresques de Botticelli. Explorez les palais des Médicis, assistez à des banquets somptueux et plongez dans l'effervescence artistique et intellectuelle qui a redessiné le monde occidental.",
    image: "/images/florence.png",
    video: "/videos/florence.mp4",
    price: "14 200",
    duration: "4 jours",
    highlights: [
      "Atelier de Michel-Ange",
      "Palais des Médicis",
      "Galerie des Offices",
      "Banquets Renaissance",
    ],
    color: "from-rose-500/20 to-purple-600/20",
  },
];

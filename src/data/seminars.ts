export type SeminarOffer = {
  title: string;
  description: string;
  image: string;
  features: string[];
};

export const seminars: SeminarOffer = {
  title: "Séminaires & privatisation",
  description:
    "Repas d’entreprise, journées de travail, dîners privés. La salle peut s’adapter, la cuisine reste celle de la maison.",
  image: "/images/seminars/seminaire.jpg",
  features: [
    "Repas d’entreprise",
    "Séminaires",
    "Privatisation",
    "Événements professionnels",
  ],
};

export const aiUseCases = [
  {
    number: "01",
    sector: "Hôtellerie & accueil",
    title: "L’accueil, même quand l’équipe est occupée.",
    description:
      "Un assistant multilingue qui présente les services, répond aux questions et guide les demandes de réservation.",
    tags: ["FAQ contextualisée", "Multilingue", "Relais humain"],
    visual: "hospitality",
  },
  {
    number: "02",
    sector: "Écoles & formation",
    title: "Rendre l’information plus accessible.",
    description:
      "Élèves et familles trouvent démarches, ressources et bons interlocuteurs dans un chatbot nourri par les contenus de l’école.",
    tags: ["Ressources de l’école", "Questions fréquentes", "Réponses sourcées"],
    visual: "education",
  },
  {
    number: "03",
    sector: "Médecine esthétique",
    title: "Une présence digitale à la hauteur du lieu.",
    description:
      "Un site soigné pour présenter soins et équipe, avec un assistant qui facilite la prise de contact — sans conseil médical.",
    tags: ["Site vitrine", "Présentation des soins", "Sans conseil médical"],
    visual: "aesthetics",
  },
  {
    number: "04",
    sector: "Clubs équestres",
    title: "Faire vivre le club en ligne.",
    description:
      "Cours, activités, infrastructures : un site vivant, épaulé par un assistant pour les questions pratiques.",
    tags: ["Site de club", "Activités & cours", "Équitation"],
    visual: "equestrian",
  },
] as const;

export const aiWorkshopFormats = [
  {
    number: "A",
    title: "Découvrir l’IA",
    description: "Explorer les outils génératifs et apprendre à les utiliser avec discernement.",
  },
  {
    number: "B",
    title: "Expérimenter les LLM",
    description: "Tester le prompt design et créer un premier assistant métier.",
  },
  {
    number: "C",
    title: "Imaginer une mission",
    description: "Repérer où l’automatisation peut vraiment aider — et où elle ne le doit pas.",
  },
] as const;

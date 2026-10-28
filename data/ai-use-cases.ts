export const aiUseCases = [
  {
    number: "01",
    sector: "Hôtellerie & accueil",
    title: "L’accueil, même quand l’équipe est occupée.",
    description:
      "Un assistant conversationnel multilingue pour répondre aux questions fréquentes, présenter les services et orienter les demandes de réservation vers la bonne équipe.",
    tags: ["FAQ contextualisée", "Multilingue", "Relais humain"],
    visual: "hospitality",
  },
  {
    number: "02",
    sector: "Écoles & formation",
    title: "Rendre l’information plus accessible.",
    description:
      "Un chatbot alimenté par les informations validées de l’établissement pour guider élèves et familles vers les bonnes démarches, ressources et interlocuteurs.",
    tags: ["Ressources de l’école", "Questions fréquentes", "Réponses sourcées"],
    visual: "education",
  },
  {
    number: "03",
    sector: "Médecine esthétique",
    title: "Une présence digitale à la hauteur du lieu.",
    description:
      "Un site vitrine élégant pour présenter les soins, l’équipe et les informations pratiques, avec un assistant qui oriente les demandes et facilite la prise de contact.",
    tags: ["Site vitrine", "Présentation des soins", "Sans conseil médical"],
    visual: "aesthetics",
  },
  {
    number: "04",
    sector: "Clubs équestres",
    title: "Faire vivre le club en ligne.",
    description:
      "Un site dédié aux activités, cours et infrastructures, complété par un assistant qui répond aux questions pratiques et recueille les demandes de renseignements.",
    tags: ["Site de club", "Activités & cours", "Équitation"],
    visual: "equestrian",
  },
] as const;

export const aiWorkshopFormats = [
  {
    number: "A",
    title: "Découvrir l’IA",
    description: "Comprendre les possibilités des outils génératifs et apprendre à les utiliser avec recul.",
  },
  {
    number: "B",
    title: "Expérimenter les LLM",
    description: "Pratiquer le prompt design et prototyper des assistants adaptés à un besoin concret.",
  },
  {
    number: "C",
    title: "Imaginer une mission",
    description: "Cartographier un processus et identifier des pistes d’automatisation utiles et responsables.",
  },
] as const;

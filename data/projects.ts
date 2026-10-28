export type ProjectCategory =
  | "Produit digital"
  | "Data science"
  | "Intelligence artificielle"
  | "Développement web";

export type Project = {
  slug: string;
  number: string;
  title: string;
  eyebrow: string;
  category: ProjectCategory;
  summary: string;
  technologies: string[];
  visual: "haras" | "equisignal" | "analytics" | "vision" | "behavior" | "agents";
  context: string;
  solution: string;
  features: string[];
  role: string[];
  learning: string;
  illustrative?: boolean;
};

export const projects: Project[] = [
  {
    slug: "gestion-des-haras",
    number: "01",
    title: "Digitalisation des départements & services",
    eyebrow: "Conception de produit · Transformation digitale",
    category: "Produit digital",
    summary:
      "Une plateforme métier pour relier les services, simplifier les processus et mieux piloter les activités.",
    technologies: ["React", "TypeScript", "PostgreSQL"],
    visual: "haras",
    context:
      "Des outils dispersés compliquent les échanges, la coordination et le suivi quotidien.",
    solution:
      "Un prototype commun qui rassemble les parcours métier, avec des espaces et des vues adaptés à chaque équipe.",
    features: [
      "Centralisation des informations utiles aux différents services",
      "Digitalisation et suivi des workflows inter-départements",
      "Gestion des rôles, des accès et des étapes de validation",
      "Indicateurs partagés pour le suivi des activités",
    ],
    role: [
      "Recueil et analyse des besoins des départements et services",
      "Cartographie des processus et des échanges entre équipes",
      "Conception fonctionnelle et prototypage de la plateforme",
      "Modélisation des workflows, rôles et permissions",
      "Préparation des tests fonctionnels et de la documentation destinée au SI",
    ],
    learning:
      "Bien digitaliser, c’est d’abord comprendre le terrain et respecter les pratiques de chaque équipe.",
    illustrative: true,
  },
  {
    slug: "equisignal",
    number: "02",
    title: "EquiSignal",
    eyebrow: "Application mobile · Innovation digitale",
    category: "Produit digital",
    summary:
      "Le numérique pensé pour les métiers équins, là où les outils généralistes ne suffisent pas.",
    technologies: ["React Native", "Expo", "TypeScript", "Prisma", "PostgreSQL"],
    visual: "equisignal",
    context:
      "Les métiers équins ont leurs propres codes. EquiSignal part de ces usages, pas d’un outil passe-partout.",
    solution:
      "Une app mobile qui réunit identification, signalement graphique et saisie codifiée, jusque sur le terrain.",
    features: [
      "Identification et gestion des informations équines",
      "Signalement graphique sur planches anatomiques",
      "Outils de dessin et description codifiée",
      "Synchronisation offline/online et génération de récapitulatifs",
    ],
    role: ["Conception des parcours mobiles", "Structuration des écrans de saisie", "Réflexion sur les usages terrain et la synchronisation"],
    learning:
      "Concevoir une interface mobile où la précision de la saisie doit rester compatible avec une utilisation rapide sur le terrain.",
  },
  {
    slug: "performance-analytics",
    number: "03",
    title: "Performance Analytics",
    eyebrow: "Data analytics · Business intelligence",
    category: "Data science",
    summary:
      "Des données opérationnelles transformées en indicateurs clairs pour guider les décisions.",
    technologies: ["Data analytics", "KPI", "Dashboards"],
    visual: "analytics",
    context:
      "Un indicateur ne vaut que s’il répond à une vraie question métier.",
    solution:
      "Des KPI, comparaisons et tableaux de bord conçus pour rendre l’activité lisible.",
    features: [
      "Analyse des coûts et suivi des consommations",
      "Visualisation des KPI",
      "Comparaisons entre périodes ou activités",
      "Tableaux de bord et synthèses analytiques",
    ],
    role: ["Analyse de données opérationnelles", "Identification des besoins de pilotage", "Conception de représentations analytiques"],
    learning:
      "La bonne visualisation commence par la bonne question.",
    illustrative: true,
  },
  {
    slug: "video-detection-segmentation",
    number: "04",
    title: "Video Object Detection",
    eyebrow: "Computer vision · YOLO11 × SAM 3",
    category: "Intelligence artificielle",
    summary:
      "Repérer et segmenter les objets d’une vidéo grâce à la vision par ordinateur.",
    technologies: ["Python", "YOLO11", "SAM 3", "OpenCV", "PyTorch"],
    visual: "vision",
    context:
      "Dans une vidéo, objets et mouvements deviennent des données à explorer.",
    solution:
      "Détection, segmentation et visualisation des résultats, image après image.",
    features: [
      "Détection d’objets avec YOLO11",
      "Segmentation avec SAM 3",
      "Analyse de séquences vidéo",
      "Visualisation des objets, masques et étapes de traitement",
    ],
    role: ["Exploration de modèles de vision", "Préparation des étapes de traitement vidéo", "Conception d’une visualisation explicative"],
    learning:
      "La visualisation doit distinguer clairement la détection, la segmentation et le résultat réellement produit par les modèles.",
    illustrative: true,
  },
  {
    slug: "behavior-analysis",
    number: "05",
    title: "Behavior Analysis",
    eyebrow: "Behavioral analytics · Machine learning",
    category: "Data science",
    summary:
      "Repérer des tendances, profils et écarts pour mieux comprendre les comportements dans le temps.",
    technologies: ["Python", "Pandas", "Scikit-learn", "Anomaly detection"],
    visual: "behavior",
    context:
      "Les événements observés dans le temps révèlent parfois des tendances ou des écarts inattendus.",
    solution:
      "Préparer les données, chercher des anomalies et explorer des profils — en choisissant les méthodes selon leur contexte.",
    features: [
      "Construire des variables comportementales à partir des événements disponibles",
      "Analyser les distributions avec statistiques descriptives, quantiles et scores Z",
      "Explorer des méthodes d’anomalie comme Isolation Forest ou Local Outlier Factor",
      "Comparer des segmentations exploratoires avec K-means ou DBSCAN",
      "Interpréter et contextualiser les observations sans score de résultat inventé",
    ],
    role: ["Préparation et exploration des données", "Sélection de variables pertinentes selon le contexte", "Évaluation et interprétation prudente des pistes algorithmiques"],
    learning:
      "Une anomalie statistique n’est pas automatiquement un comportement problématique : les seuils, les faux positifs et le contexte métier doivent guider toute interprétation.",
  },
  {
    slug: "ai-agent-orchestration",
    number: "06",
    title: "AI Agent Orchestration",
    eyebrow: "Agents IA · LLM · Architecture",
    category: "Intelligence artificielle",
    summary:
      "Des agents spécialisés cherchent, agissent avec des limites claires et passent la main quand il le faut.",
    technologies: ["LLM", "RAG", "Tool calling", "FastAPI", "Vector search"],
    visual: "agents",
    context:
      "Un assistant fiable sait d’où vient sa réponse — et quand il doit s’arrêter.",
    solution:
      "Un agent routeur mobilise des spécialistes et des outils autorisés. Des garde-fous vérifient la réponse et sollicitent une personne si nécessaire.",
    features: [
      "Orchestration multi-agents avec responsabilités et outils délimités",
      "RAG : ingestion, découpage, embeddings, recherche vectorielle et citations des sources",
      "Tool calling pour interroger des services métier avec permissions minimales",
      "Garde-fous, détection des demandes sensibles et escalade humaine",
      "Traçabilité des étapes, jeux d’évaluation et tests de régression des prompts",
    ],
    role: ["Modélisation des rôles et flux entre agents", "Conception des parcours RAG et de transfert humain", "Définition des garde-fous et critères d’évaluation"],
    learning:
      "Un système agentique utile se juge autant sur la qualité de ses sources, ses limites et sa capacité à s’arrêter que sur ses réponses générées.",
    illustrative: true,
  },
];

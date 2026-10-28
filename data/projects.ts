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
      "Conception d’une plateforme métier pour digitaliser les processus des différents départements et services, fluidifier la circulation de l’information et faciliter le pilotage des activités.",
    technologies: ["React", "TypeScript", "PostgreSQL"],
    visual: "haras",
    context:
      "Lorsque chaque département s’appuie sur ses propres supports et processus, le partage d’information, la coordination des services et le suivi des activités deviennent plus complexes.",
    solution:
      "Un prototype de plateforme commune organisé par départements, services et workflows métier. Il rassemble les principaux parcours opérationnels dans des espaces cohérents, avec des rôles et des vues de pilotage adaptés.",
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
      "La digitalisation réussie commence par la compréhension des pratiques de chaque service et la conception de parcours communs qui respectent leurs réalités de terrain.",
    illustrative: true,
  },
  {
    slug: "equisignal",
    number: "02",
    title: "EquiSignal",
    eyebrow: "Application mobile · Innovation digitale",
    category: "Produit digital",
    summary:
      "Un projet dédié aux métiers équins, imaginé pour des besoins terrain rarement couverts par les outils numériques généralistes.",
    technologies: ["React Native", "Expo", "TypeScript", "Prisma", "PostgreSQL"],
    visual: "equisignal",
    context:
      "Les professionnels de la filière équine ont des pratiques et des besoins spécifiques, souvent trop singuliers pour les logiciels généralistes. EquiSignal imagine une réponse conçue autour de ces usages métier.",
    solution:
      "Une application mobile dédiée aux métiers équins, qui relie fiches d’identification, signalement graphique et saisie codifiée dans un outil pensé pour le terrain.",
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
      "Transformer des données opérationnelles en indicateurs lisibles pour mieux comprendre les activités et éclairer les décisions.",
    technologies: ["Data analytics", "KPI", "Dashboards"],
    visual: "analytics",
    context:
      "Les données sont plus utiles lorsqu’elles sont présentées dans leur contexte et reliées aux questions concrètes des équipes.",
    solution:
      "Une approche de visualisation centrée sur des indicateurs de performance, des comparaisons et des synthèses destinées au pilotage.",
    features: [
      "Analyse des coûts et suivi des consommations",
      "Visualisation des KPI",
      "Comparaisons entre périodes ou activités",
      "Tableaux de bord et synthèses analytiques",
    ],
    role: ["Analyse de données opérationnelles", "Identification des besoins de pilotage", "Conception de représentations analytiques"],
    learning:
      "Choisir les bonnes représentations demande autant de compréhension métier que de maîtrise des données.",
    illustrative: true,
  },
  {
    slug: "video-detection-segmentation",
    number: "04",
    title: "Video Object Detection",
    eyebrow: "Computer vision · YOLO11 × SAM 3",
    category: "Intelligence artificielle",
    summary:
      "Explorer la détection et la segmentation d’objets dans des séquences vidéo grâce à des approches de vision par ordinateur.",
    technologies: ["Python", "YOLO11", "SAM 3", "OpenCV", "PyTorch"],
    visual: "vision",
    context:
      "Une séquence vidéo contient des objets et des mouvements qu’il est possible d’explorer avec des techniques de vision par ordinateur.",
    solution:
      "Une exploration combinant détection d’objets, segmentation et visualisation des résultats au fil d’une séquence.",
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
      "Explorer les comportements à partir de données structurées : repérer les écarts, identifier des profils et comprendre les évolutions dans le temps.",
    technologies: ["Python", "Pandas", "Scikit-learn", "Anomaly detection"],
    visual: "behavior",
    context:
      "Des événements et indicateurs observés dans le temps peuvent révéler des tendances, des groupes de comportements ou des écarts qui méritent une analyse approfondie.",
    solution:
      "Une démarche d’analyse comportementale combinant préparation des variables, exploration statistique, détection d’anomalies et segmentation. Le choix des méthodes dépend de la nature, de la qualité et du contexte des données.",
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
      "Explorer la conception d’un système d’agents spécialisés capables de rechercher dans des contenus de référence, d’utiliser des outils métier et de transmettre les demandes sensibles à une personne.",
    technologies: ["LLM", "RAG", "Tool calling", "FastAPI", "Vector search"],
    visual: "agents",
    context:
      "Un assistant métier ne doit pas seulement générer du texte : il lui faut des sources contrôlées, des limites explicites, une orchestration compréhensible et un moyen de demander une validation humaine.",
    solution:
      "Un concept d’architecture modulaire : un agent routeur identifie l’intention, des agents spécialisés mobilisent la recherche documentaire ou des outils autorisés, puis un garde-fou vérifie la réponse et déclenche un relais humain si nécessaire.",
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

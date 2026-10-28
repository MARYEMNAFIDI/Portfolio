"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { navigation, site } from "@/data/site";
import { projects, type ProjectCategory } from "@/data/projects";
import { aiUseCases, aiWorkshopFormats } from "@/data/ai-use-cases";
import { ProjectArtwork } from "@/components/project-artwork";
import { BrandLogo } from "@/components/brand-logo";
import { CursorTrail } from "@/components/cursor-trail";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  BrainCircuit,
  Code2,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  GraduationCap,
  Hotel,
  Mail,
  Menu,
  School,
  Sparkles,
  Trophy,
  X,
} from "lucide-react";

const filters: Array<"Tout voir" | ProjectCategory> = [
  "Tout voir",
  "Produit digital",
  "Intelligence artificielle",
  "Data science",
  "Développement web",
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return diagonal ? <ArrowUpRight aria-hidden="true" /> : <ArrowRight aria-hidden="true" />;
}

const sectorIcons = {
  hospitality: Hotel,
  education: School,
  aesthetics: Sparkles,
  equestrian: Trophy,
} as const;

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.documentElement.classList.add("motion-ready");

    const sections = navigation
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => section !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(`#${visible.target.id}`);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.2, 0.5] },
    );
    sections.forEach((section) => observer.observe(section));

    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0);
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const revealGroups = new Map<Element, HTMLElement[]>();
    revealItems.forEach((item) => {
      const parent = item.parentElement;
      if (!parent) return;
      const siblings = revealGroups.get(parent) ?? [];
      siblings.push(item);
      revealGroups.set(parent, siblings);
    });
    revealGroups.forEach((siblings) => {
      siblings.forEach((item, index) => {
        item.style.setProperty("--reveal-delay", `${Math.min(index * 110, 440)}ms`);
      });
    });
    revealItems.forEach((item) => revealObserver.observe(item));

    return () => {
      observer.disconnect();
      revealObserver.disconnect();
      window.removeEventListener("scroll", updateProgress);
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);

  return (
    <>
      <div className="scroll-progress" aria-hidden="true" style={{ transform: `scaleX(${progress / 100})` }} />
      <header className="site-header">
        <BrandLogo href="#top" />
        <nav className={`desktop-nav${menuOpen ? " is-open" : ""}`} aria-label="Navigation principale">
          {navigation.map((item) => (
            <a
              href={item.href}
              key={item.href}
              className={activeSection === item.href ? "nav-active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </header>
    </>
  );
}

function SectionHeading({ index, title, lead }: { index: string; title: string; lead?: string }) {
  return (
    <div className="section-heading" data-reveal>
      <span className="eyebrow"><i>{index}</i> / {title}</span>
      {lead && <p>{lead}</p>}
    </div>
  );
}

export default function Portfolio() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("Tout voir");
  const filteredProjects = useMemo(
    () => projects.filter((project) => filter === "Tout voir" || project.category === filter),
    [filter],
  );

  return (
    <>
      <CursorTrail />
      <Header />
      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-copy">
            <div className="hero-kicker" data-reveal><span className="status-dot" /> Data · Software · AI <span className="kicker-separator">·</span> Rabat, Maroc</div>
            <h1 data-reveal>
              Je donne <em>forme</em><br className="desktop-break" /> aux idées complexes.
            </h1>
            <p className="hero-description" data-reveal>
              Data, IA, logiciel : je transforme les questions métier en outils qui servent vraiment.
            </p>
            <div className="hero-actions" data-reveal>
              <a className="button button-primary" href="#projects">Explorer mes projets <Arrow /></a>
              <a className="text-link" href="#journey">Découvrir mon parcours <Arrow diagonal /></a>
            </div>
            <div className="hero-footnote" data-reveal><span>DATA · LLM · PRODUIT</span><span>Une approche, plusieurs terrains de jeu</span></div>
          </div>
          <div className="hero-visual" aria-label="Planètes stylisées en orbite autour du logo Maryem Nafidi">
            <div className="planet-system" aria-hidden="true">
              <div className="planet-orbit planet-orbit-earth"><span className="planet planet-earth" /></div>
              <div className="planet-orbit planet-orbit-saturn"><span className="planet planet-saturn" /></div>
              <div className="planet-orbit planet-orbit-moon"><span className="planet planet-moon" /></div>
            </div>
            <div className="hero-glow" />
            <BrandLogo href="#top" variant="hero" />
            <div className="hero-orbit-label label-data"><i /> DATA SCIENCE</div>
            <div className="hero-orbit-label label-ai"><i /> AI ENGINEERING</div>
            <div className="hero-orbit-label label-creative"><i /> CREATIVE DEVELOPMENT</div>
            <span className="hero-coordinate">34°01&apos; N<br />6°50&apos; W</span>
          </div>
        </section>

        <div className="marquee-band" aria-label="Understand. Design. Build. Improve.">
          <div className="marquee-track"><span>UNDERSTAND <i>✳</i> DESIGN <i>✳</i> BUILD <i>✳</i> IMPROVE <i>✳</i>&nbsp;</span><span aria-hidden="true">UNDERSTAND <i>✳</i> DESIGN <i>✳</i> BUILD <i>✳</i> IMPROVE <i>✳</i>&nbsp;</span></div>
        </div>

        <section className="projects-section section-wrap" id="projects">
          <SectionHeading index="01" title="Projets" lead="Six projets. Six façons de transformer une idée en solution." />
          <div className="section-title-row" data-reveal><h2>Des idées devenues <em>réalité.</em></h2><span className="section-count">06 projets sélectionnés</span></div>
          <div className="project-filters" role="group" aria-label="Filtrer les projets" data-reveal>
            {filters.map((item) => (
              <button key={item} type="button" className={filter === item ? "filter-active" : ""} onClick={() => setFilter(item)} aria-pressed={filter === item}>{item}</button>
            ))}
          </div>
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <article className={`project-card project-card-${project.number}`} key={project.slug}>
                <ProjectArtwork project={project} compact />
                <div className="project-card-meta"><div><span className="project-category">{project.eyebrow}</span><h3>{project.title}</h3></div></div>
                <p className="project-summary">{project.summary}</p>
                <div className="project-tech">{project.technologies.slice(0, 4).map((technology) => <span key={technology}>{technology}</span>)}</div>
              </article>
            ))}
          </div>
          <p className="project-disclaimer">Les visuels de démonstration sont illustratifs. Aucun résultat métier ou modèle simulé n’est présenté comme réel.</p>
        </section>

        <section className="expertise-section" id="expertise">
          <div className="section-wrap">
            <SectionHeading index="02" title="Expertise" lead="Trois terrains, un même objectif : résoudre des problèmes concrets." />
            <h2 className="expertise-heading" data-reveal>Ce que je sais faire.<br /><em>Et ce que j’aime construire.</em></h2>
            <div className="expertise-grid">
              <article className="expertise-card" data-reveal><span className="expertise-index">01 / Comprendre</span><div className="expertise-symbol"><BrainCircuit aria-hidden="true" /></div><h3>Data Science<br />&amp; Intelligence artificielle</h3><p>Faire parler les données, du machine learning à la vision par ordinateur.</p><div className="expertise-tags"><span>Python</span><span>Machine learning</span><span>Deep learning</span><span>NLP</span><span>Computer vision</span><span>Data analytics</span></div></article>
              <article className="expertise-card expertise-card-featured" data-reveal><span className="expertise-index">02 / Dialoguer</span><div className="expertise-symbol"><Bot aria-hidden="true" /></div><h3>Agents IA<br />&amp; assistants LLM</h3><p>Des assistants métier qui trouvent la bonne information et savent quand passer le relais.</p><div className="expertise-tags"><span>LLM</span><span>Chatbots métiers</span><span>RAG &amp; recherche documentaire</span><span>Prompt design</span><span>Garde-fous</span><span>Intégration API</span></div></article>
              <article className="expertise-card" data-reveal><span className="expertise-index">03 / Donner forme</span><div className="expertise-symbol"><Code2 aria-hidden="true" /></div><h3>Software<br />&amp; produits digitaux</h3><p>Des sites et applications pensés pour les usages, pas seulement pour l’écran.</p><div className="expertise-tags"><span>React</span><span>Next.js</span><span>TypeScript</span><span>React Native</span><span>FastAPI</span><span>SQL</span><span>UX / UI</span><span>Prototypage</span></div></article>
            </div>
            <p className="expertise-note">Pas de jauges arbitraires. La progression se mesure aux problèmes que l’on apprend à mieux résoudre.</p>
          </div>
        </section>

        <section className="ai-services-section" id="ai-services">
          <div className="section-wrap">
            <SectionHeading index="03" title="IA & secteurs" lead="L’IA devient utile quand elle comprend le quotidien d’un métier." />
            <div className="ai-services-intro" data-reveal>
              <div><span className="eyebrow">DES USAGES CONCRETS, PAS DE L’IA POUR L’IA</span><h2>Un métier différent.<br /><em>Une IA qui lui ressemble.</em></h2></div>
              <p>Chatbot, agent LLM, site métier ou prototype : chaque idée part d’un vrai besoin et s’adapte à son secteur.</p>
            </div>
            <div className="ai-use-case-grid">
              {aiUseCases.map((useCase) => {
                const SectorIcon = sectorIcons[useCase.visual];
                return (
                  <article className={`ai-use-case ai-use-case-${useCase.visual}`} key={useCase.number} data-reveal>
                    <div className="ai-use-case-top"><span className="ai-use-case-number">{useCase.number} / CAS D’USAGE</span><span className={`sector-emblem emblem-${useCase.visual}`} aria-hidden="true"><SectorIcon /></span></div>
                    <span className="ai-sector">{useCase.sector}</span>
                    <h3>{useCase.title}</h3>
                    <p>{useCase.description}</p>
                    <div className="ai-use-case-tags">{useCase.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  </article>
                );
              })}
            </div>
            <p className="ai-use-case-note">Des pistes de projets à construire avec leurs utilisateurs, leurs contenus et leurs contraintes.</p>
            <div className="ai-workshops" data-reveal>
              <div className="workshop-intro">
                <span className="eyebrow"><i>+</i> ATELIERS · ÉCOLES · CLUBS · ENTREPRISES</span>
                <h3>Faire de l’IA quelque chose<br /><em>que l’on sait vraiment utiliser.</em></h3>
                <p>On découvre, on teste, on repart avec des idées à appliquer dès demain.</p>
                <a className="button button-primary" href="#contact">Imaginer un atelier <Arrow /></a>
              </div>
              <div className="workshop-formats">
                {aiWorkshopFormats.map((format) => (
                  <article key={format.number}>
                    <span>{format.number}</span>
                    <div><h4>{format.title}</h4><p>{format.description}</p></div>
                    <Arrow diagonal />
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="about-section section-wrap" id="about">
          <SectionHeading index="04" title="À propos" lead="Curieuse par nature. Ingénieure par choix." />
          <div className="about-layout">
            <div className="about-art portrait-art" data-reveal>
              <Image
                className="portrait-image"
                src="/maryem-nafidi-portrait.png"
                alt="Portrait de Maryem Nafidi"
                fill
                sizes="(max-width: 720px) 80vw, 36vw"
              />
              <div className="portrait-shade" />
              <div className="portrait-badge"><span className="portrait-status" /> Data · AI · Software</div>
              <span className="about-art-caption">MARYEM NAFIDI<br />INGÉNIEURE · DATA &amp; IA</span>
              <div className="portrait-index">MN <i>—</i> 2026</div>
            </div>
            <div className="about-copy" data-reveal><span className="eyebrow">UN PEU DE CONTEXTE</span><h2>La technologie m’intéresse.<br /><em>Les problèmes humains aussi.</em></h2><p>Ingénieure en informatique diplômée de SUPMTI Rabat, je me spécialise en Data Science.</p><p>Mon réflexe : comprendre le besoin, explorer les données et imaginer un outil simple, utile et bien pensé. J’aime relier technologie et réalité du terrain.</p><div className="values-row"><span>Curiosity</span><i>·</i><span>Precision</span><i>·</i><span>Creativity</span><i>·</i><span>Impact</span></div></div>
          </div>
        </section>

        <section className="journey-section" id="journey">
          <div className="section-wrap">
            <SectionHeading index="05" title="Mon parcours" lead="De la curiosité technologique à la conception de solutions intelligentes." />
            <div className="journey-layout">
              <div className="journey-intro" data-reveal><span className="eyebrow">FIL CONDUCTEUR</span><h2>De la curiosité<br /><em>à la solution.</em></h2><p>Un fil rouge : faire se rencontrer logiciel, données et besoins métier.</p></div>
              <div className="experience-timeline">
                <article className="timeline-item" data-reveal><span className="timeline-date">2021 — 2026 · FORMATION</span><div className="timeline-entry"><span className="timeline-icon"><GraduationCap aria-hidden="true" /></span><div><h3>Génie informatique — Spécialisation Data Science</h3><span className="timeline-org">SUPMTI · Rabat</span><p>Cinq ans entre développement, IA, analyse de données et conception de systèmes.</p></div></div></article>
                <article className="timeline-item" data-reveal><span className="timeline-date">2024 — 2025 · PROJETS</span><div className="timeline-entry"><span className="timeline-icon"><Code2 aria-hidden="true" /></span><div><h3>Développement logiciel · Machine Learning · Computer Vision</h3><span className="timeline-org">Exploration &amp; projets techniques</span><p>NLP, vision par ordinateur, applications web et analyse prédictive : la théorie prend forme.</p></div></div></article>
                <article className="timeline-item" data-reveal><span className="timeline-date">FÉVRIER — AOÛT 2026 · PFE</span><div className="timeline-entry"><span className="timeline-icon"><ChartNoAxesCombined aria-hidden="true" /></span><div><h3>Digitalisation &amp; ingénierie logicielle</h3><span className="timeline-org">Projet de fin d’études · SOREC</span><p>Du besoin au tableau de bord : plateformes métier, processus automatisés et données centralisées.</p></div></div></article>
                <article className="timeline-item" data-reveal><span className="timeline-date">DEPUIS AOÛT 2026 · EXPÉRIENCE</span><div className="timeline-entry"><span className="timeline-icon"><BriefcaseBusiness aria-hidden="true" /></span><div><h3>Data Performance Analyst</h3><span className="timeline-org">SOREC · Direction des Haras Nationaux</span><p>Analyser la performance, créer des outils digitaux et éclairer les décisions par la donnée.</p></div></div></article>
                <aside className="journey-today" data-reveal><span className="journey-today-icon"><Sparkles aria-hidden="true" /></span><div><span className="timeline-date">AUJOURD’HUI</span><p>Mon cap : réunir Data Science, IA et software engineering pour créer des solutions utiles et fiables.</p></div></aside>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <SectionHeading index="06" title="Contact" lead="Une idée en tête ? J’aimerais en entendre parler." />
          <div className="contact-card contact-card-centered" data-reveal>
            <span className="eyebrow"><Mail aria-hidden="true" /> ON COMMENCE PAR UNE CONVERSATION</span>
            <h2>Et si on créait<br />quelque chose <em>d’intéressant&nbsp;?</em></h2>
            <p>Data, IA ou projet inattendu : ouvrons la conversation.</p>
            <a className="button button-primary contact-email-button" href={`mailto:${site.email}`}><Mail aria-hidden="true" /> M’écrire par e-mail <Arrow diagonal /></a>
          </div>
        </section>
      </main>
      <footer className="site-footer"><BrandLogo href="#top" variant="footer" /><p>Understand. Design. Build. Improve.</p><span>© {new Date().getFullYear()} · Conçu avec intention et amour <span className="footer-heart" aria-label="amour">❤️</span></span><a className="back-top" href="#top">Retour en haut <Arrow diagonal /></a></footer>
    </>
  );
}

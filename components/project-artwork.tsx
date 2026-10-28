import type { Project } from "@/data/projects";
import { VisionDemo } from "@/components/vision-demo";
import { Activity, ArrowRight, Bot, Database, ScanLine, ShieldCheck, Wrench } from "lucide-react";

function MiniBars() {
  return (
    <div className="mini-bars" aria-hidden="true">
      {[38, 58, 46, 74, 55, 86, 66, 94, 72, 81, 60, 88].map((height, index) => (
        <i key={index} style={{ height: `${height}%` }} />
      ))}
    </div>
  );
}

export function ProjectArtwork({
  project,
  compact = false,
}: {
  project: Project;
  compact?: boolean;
}) {
  return (
    <div className={`project-artwork artwork-${project.visual}${compact ? " artwork-compact" : ""}`}>
      <div className="artwork-topline">
        <span className="artwork-brand">
          <span className="artwork-mark">M</span>
          {project.visual === "vision" ? "VISION LAB" : project.visual === "equisignal" ? "EQUISIGNAL" : project.visual === "agents" ? "AGENT STUDIO" : "FIELDNOTES"}
        </span>
        <span className="artwork-live"><i /> {project.illustrative ? "APERÇU ILLUSTRATIF" : "ÉTUDE DE PROJET"}</span>
      </div>

      {project.visual === "haras" && (
        <div className="haras-ui">
          <div className="artwork-sidebar"><b>MN</b><i /><i /><i /><i /></div>
          <div className="haras-content">
            <div className="artwork-title-row"><div><small>ESPACE DE PILOTAGE</small><strong>Coordination interservices</strong></div><span className="avatar">MN</span></div>
            <div className="stat-row"><div><small>DÉPARTEMENTS</small><b>06</b><span>scénario fictif</span></div><div><small>FLUX SUIVIS</small><b>24</b><span>exemple illustratif</span></div><div><small>À COORDONNER</small><b>08</b><span>données fictives</span></div></div>
            <div className="chart-panel"><div className="panel-heading"><b>Suivi des processus</b><span>Exemple illustratif</span></div><MiniBars /></div>
            <div className="list-panel"><span>Demandes de service <b>À suivre</b></span><span>Validations inter-équipes <b>En cours</b></span></div>
          </div>
        </div>
      )}

      {project.visual === "equisignal" && (
        <div className="phone-stage">
          <div className="phone phone-back"><div className="phone-camera" /><div className="phone-header">Fiche équidé</div><div className="phone-paper"><span>Identification</span><i /><i /><i /></div><div className="phone-tabbar"><i /><i /><i /></div></div>
          <div className="phone phone-front"><div className="phone-camera" /><div className="phone-header">Signalement <span>02 / 04</span></div><div className="horse-diagram"><ScanLine className="horse-shape" aria-hidden="true" /><i className="mark-one" /><i className="mark-two" /><i className="mark-three" /></div><div className="phone-action">Ajouter une marque <b>＋</b></div></div>
          <div className="phone-caption">Une saisie visuelle, pensée pour le terrain.</div>
        </div>
      )}

      {project.visual === "analytics" && (
        <div className="analytics-ui">
          <div className="artwork-title-row"><div><small>PERFORMANCE · EXEMPLE</small><strong>Lire les tendances.</strong></div><span className="period-pill">Vue synthétique</span></div>
          <div className="analytics-kpis"><div><small>INDICATEUR A</small><b>Suivi</b><i>Exemple</i></div><div><small>INDICATEUR B</small><b>Coûts</b><i>Illustratif</i></div><div><small>INDICATEUR C</small><b>Activité</b><i>Démo</i></div></div>
          <div className="analytics-chart"><div className="chart-y-axis"><i /><i /><i /><i /></div><div className="chart-grid"><svg viewBox="0 0 640 180" preserveAspectRatio="none" aria-hidden="true"><path className="chart-area" d="M0 148 C58 135 66 98 122 111 S204 126 260 72 S351 99 406 54 S491 91 548 32 S608 53 640 12 L640 180 L0 180Z" /><path className="chart-line" d="M0 148 C58 135 66 98 122 111 S204 126 260 72 S351 99 406 54 S491 91 548 32 S608 53 640 12" /></svg><div className="chart-x-axis"><i>SEM. 01</i><i>SEM. 02</i><i>SEM. 03</i><i>SEM. 04</i></div></div></div>
        </div>
      )}

      {project.visual === "vision" && <VisionDemo />}

      {project.visual === "behavior" && (
        <div className="behavior-ui">
          <div className="artwork-title-row"><div><small>BEHAVIORAL ANALYTICS · CONCEPT</small><strong>Observer les patterns.</strong></div><span className="behavior-icon"><Activity aria-hidden="true" /></span></div>
          <div className="behavior-metrics"><div><small>SIGNAUX</small><b>Événements</b></div><div><small>MÉTHODE</small><b>Anomalies</b></div><div><small>LECTURE</small><b>Segments</b></div></div>
          <div className="behavior-chart"><div className="behavior-chart-grid" /><svg viewBox="0 0 640 160" preserveAspectRatio="none" aria-hidden="true"><path className="behavior-line behavior-line-one" d="M0 112 C42 103 58 116 96 92 S154 109 194 75 S257 86 296 70 S356 94 396 53 S449 76 490 56 S547 68 581 35 S614 49 640 22" /><path className="behavior-line behavior-line-two" d="M0 132 C46 126 73 138 110 112 S168 124 211 108 S275 119 311 96 S369 110 405 87 S458 101 497 75 S552 91 591 65 S621 70 640 57" /><circle className="behavior-outlier" cx="490" cy="56" r="5" /><circle className="behavior-outlier" cx="581" cy="35" r="5" /></svg><div className="behavior-axis"><span>T₀</span><span>TEMPS</span><span>Tₙ</span></div></div>
          <div className="behavior-algorithms"><span>Z-score · IQR</span><span>Isolation Forest</span><span>LOF</span><span>K-means · DBSCAN</span></div>
          <div className="behavior-note">Schéma illustratif · aucune donnée ni performance réelle</div>
        </div>
      )}

      {project.visual === "agents" && (
        <div className="agent-platform">
          <div className="agent-platform-heading"><div><small>LLM SYSTEM DESIGN · CONCEPT</small><strong>Une équipe d’agents. Des réponses sous contrôle.</strong></div><span className="agent-status"><i /> ARCHITECTURE</span></div>
          <div className="agent-flow">
            <div className="agent-node agent-router"><span><Bot aria-hidden="true" /></span><small>01 · ROUTEUR</small><b>Comprendre<br />la demande</b></div>
            <div className="agent-flow-connector connector-first"><i /></div>
            <div className="agent-specialists">
              <div className="agent-node"><span><Database aria-hidden="true" /></span><small>02A · RAG</small><b>Sources<br />documentées</b></div>
              <div className="agent-node"><span><Wrench aria-hidden="true" /></span><small>02B · OUTILS</small><b>Actions<br />autorisées</b></div>
            </div>
            <div className="agent-flow-connector connector-second"><i /></div>
            <div className="agent-node agent-guard"><span><ShieldCheck aria-hidden="true" /></span><small>03 · GARDE-FOU</small><b>Vérifier<br />&amp; orienter</b></div>
            <div className="agent-flow-connector connector-third"><i /></div>
            <div className="agent-node agent-human"><span><ArrowRight aria-hidden="true" /></span><small>04 · SORTIE</small><b>Réponse<br />ou relais humain</b></div>
          </div>
          <div className="agent-platform-footer"><span>RAG + TOOL CALLING</span><span>HUMAN-IN-THE-LOOP</span><span>TRACE &amp; EVALUATION</span><small>Architecture illustrative · aucun agent n’est connecté</small></div>
        </div>
      )}
    </div>
  );
}

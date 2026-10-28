"use client";

import { useState } from "react";

type ViewMode = "original" | "detection" | "segmentation";

const modes: Array<{ id: ViewMode; label: string }> = [
  { id: "original", label: "Vidéo originale" },
  { id: "detection", label: "Détection YOLO" },
  { id: "segmentation", label: "Segmentation SAM" },
];

export function VisionDemo() {
  const [mode, setMode] = useState<ViewMode>("segmentation");

  return (
    <div className="vision-stage">
      <div className={`vision-image mode-${mode}`}>
        <span className="vision-sun" />
        <span className="vision-ridge ridge-one" />
        <span className="vision-ridge ridge-two" />
        <span className="detection-box box-one"><b>objet · 01</b></span>
        <span className="detection-box box-two"><b>objet · 02</b></span>
        <span className="segmentation-mask" />
        <span className="frame-counter">ILLUSTRATION · FRAME 024</span>
        <span className="viewfinder" aria-hidden="true" />
      </div>
      <div className="vision-controls">
        <span className="model-tag">YOLO11 × SAM 3</span>
        <div className="timeline"><i /></div>
        <span>00:04 / 00:12</span>
      </div>
      <div className="vision-modes" role="group" aria-label="Comparer les visualisations">
        {modes.map((item) => (
          <button
            type="button"
            key={item.id}
            className={mode === item.id ? "mode-active" : ""}
            aria-pressed={mode === item.id}
            onClick={() => setMode(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <p>Visualisation illustrative — aucun résultat d’inférence réel.</p>
    </div>
  );
}

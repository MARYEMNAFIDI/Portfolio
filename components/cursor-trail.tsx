"use client";

import { useEffect } from "react";

export function CursorTrail() {
  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionPreference.matches) return;

    const canvas = document.createElement("canvas");
    canvas.className = "cursor-trail";
    canvas.setAttribute("aria-hidden", "true");
    document.body.appendChild(canvas);

    const context = canvas.getContext("2d");
    if (!context) {
      canvas.remove();
      return;
    }

    const points: Array<{ x: number; y: number; age: number }> = [];
    let pointer = { x: -100, y: -100 };
    let frame = 0;
    let animationFrame = 0;

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * ratio;
      canvas.height = window.innerHeight * ratio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const move = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      pointer = { x: event.clientX, y: event.clientY };
      document.body.classList.add("cursor-trail-enabled");
      if (frame % 2 === 0) points.unshift({ ...pointer, age: 0 });
      if (points.length > 22) points.length = 22;
      frame += 1;
      if (animationFrame === 0) animationFrame = window.requestAnimationFrame(draw);
    };

    const draw = () => {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
      points.forEach((point) => { point.age += 1; });

      for (let index = points.length - 1; index > 0; index -= 1) {
        const from = points[index];
        const to = points[index - 1];
        const opacity = Math.max(0, 1 - from.age / 34) * (1 - index / points.length);
        context.beginPath();
        context.moveTo(from.x, from.y);
        context.lineTo(to.x, to.y);
        context.strokeStyle = `rgba(185, 242, 221, ${opacity * 0.65})`;
        context.lineWidth = Math.max(0.5, 4 - index * 0.15);
        context.lineCap = "round";
        context.stroke();
      }

      context.beginPath();
      context.arc(pointer.x, pointer.y, 3.2, 0, Math.PI * 2);
      context.fillStyle = "rgba(185, 242, 221, .95)";
      context.shadowColor = "rgba(185, 242, 221, .75)";
      context.shadowBlur = 12;
      context.fill();
      context.shadowBlur = 0;

      while (points.length && points[points.length - 1].age > 36) points.pop();
      animationFrame = window.requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", move, { passive: true });

    return () => {
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", move);
      document.body.classList.remove("cursor-trail-enabled");
      canvas.remove();
    };
  }, []);

  return null;
}

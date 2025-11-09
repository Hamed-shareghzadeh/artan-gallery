"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

export default function PageFR() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".velvet-bg",
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 1 }
      );

      gsap.fromTo(
        ".hero-content",
        { y: 40, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1,
          ease: "power2.out",
          delay: 0.2,
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="hero hero--light">
      <div className="velvet-bg" aria-hidden />

      <section className="hero-content">
        <h1 className="hero-title">
          Velours italien — première en Turquie par Artan Gallery.
        </h1>
        <p className="hero-tagline">L’art ne se voit pas seulement — il se ressent.</p>

        <div className="cta">
          <a className="btn" href="#">Boutique</a>
          <a className="btn" href="#">AI Room Styler</a>
          <a className="btn" href="#">Projets d’intérieur</a>
        </div>
      </section>

      <div className="scroll-cue"><span>défiler</span></div>
    </main>
  );
}

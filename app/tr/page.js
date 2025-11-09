"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

export default function PageTR() {
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
          İtalyan kadifesi, Türkiye’de ilk kez — Artan Gallery.
        </h1>
        <p className="hero-tagline">Sanat sadece görülmez — hissedilir.</p>

        <div className="cta">
          <a className="btn" href="/tr/shop">Shop</a>
<a className="btn" href="/tr/ai">AI Room Styler</a>
<a className="btn" href="/tr/projects">Interior Projects</a>
        </div>
      </section>

      <div className="scroll-cue"><span>scroll</span></div>
    </main>
  );
}

export default function PageFR() {
  return (
    <main className="hero">
      <h1>Velours italien — première en Turquie par Artan Gallery.</h1>
      <p>L’art ne se voit pas seulement — il se ressent.</p>
      <div className="cta">
        <a className="btn" href="#">Boutique</a>
        <a className="btn" href="#">AI Room Styler</a>
        <a className="btn" href="#">Projets d’intérieur</a>
      </div>
    </main>
  );
}
"use client";

export default function PageFR() {
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

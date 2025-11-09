"use client";

import CompareBlock from "../../components/CompareBlock";

export default function PageFR() {
  return (
    <main>
      <section className="hero hero--light">
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
      </section>

      <CompareBlock
        title="Sentez la différence Artan"
        leftLabel="Velours Artan Gallery"
        rightLabel="Textiles d’ameublement ordinaires"
        leftText="Sélectionnés auprès des ateliers italiens, poil doublement brossé et palette lumineuse conçue pour demeurer éclatante."
        rightText="Synthétiques produits en masse, surface plate, teintes qui s’estompent rapidement et peu de profondeur sensorielle."
      />
    </main>
  );
}

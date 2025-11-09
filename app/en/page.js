"use client";

import CompareBlock from "../../components/CompareBlock";

export default function PageEN() {
  return (
    <main>
      <section className="hero hero--light">
        <div className="velvet-bg" aria-hidden />

        <section className="hero-content">
          <h1 className="hero-title">
            Italian velvet — for the first time in Türkiye by Artan Gallery.
          </h1>
          <p className="hero-tagline">Art is not just seen — it’s felt.</p>

          <div className="cta">
            <a className="btn" href="#">Shop</a>
            <a className="btn" href="#">AI Room Styler</a>
            <a className="btn" href="#">Interior Projects</a>
          </div>
        </section>

        <div className="scroll-cue"><span>scroll</span></div>
      </section>

      <CompareBlock
        title="Feel the Artan difference"
        leftLabel="Artan Gallery velvet"
        rightLabel="Ordinary upholstery fabrics"
        leftText="Hand-selected Italian mills, rich double-combed pile and a luminous colour range engineered to stay vibrant for years."
        rightText="Mass-produced synthetics with a shallow nap, quick fading tones and little sense of depth or softness."
      />
    </main>
  );
}

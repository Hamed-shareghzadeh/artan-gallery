"use client";

import CompareBlock from "../../components/CompareBlock";

export default function PageTR() {
  return (
    <main>
      <section className="hero hero--light">
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
      </section>

      <CompareBlock
        title="Artan farkını hissedin"
        leftLabel="Artan Gallery kadifesi"
        rightLabel="Sıradan döşeme kumaşları"
        leftText="Como’daki İtalyan atölyelerinden seçilen, çift taranmış derin havlı yapı ve yıllarca canlı kalan renk mimarisi."
        rightText="Toplu üretilen sentetik karışımlar, sığ doku, hızla solan tonlar ve sınırlı yumuşaklık hissi."
      />
    </main>
  );
}

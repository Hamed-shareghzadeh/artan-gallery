export default function PageEN() {
  return (
    <main className="hero">
      <h1>Italian velvet — for the first time in Türkiye by Artan Gallery.</h1>
      <p>Art is not just seen — it’s felt.</p>
      <div className="cta">
        <a className="btn" href="#">Shop</a>
        <a className="btn" href="#">AI Room Styler</a>
        <a className="btn" href="#">Interior Projects</a>
      </div>
    </main>
  );
}
"use client";

export default function PageEN() {
  return (
    <main className="hero hero--light">
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
    </main>
  );
}

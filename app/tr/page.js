"use client";

export default function PageTR() {
  return (
    <main className="hero hero--light">
      {/* لایه پارچه مخملِ متحرک */}
      <div className="velvet-bg" aria-hidden />

      {/* تیتر و شعار */}
      <section className="hero-content">
        <h1 className="hero-title">
          İtalyan kadifesi, Türkiye’de ilk kez — Artan Gallery.
        </h1>
        <p className="hero-tagline">
          Sanat sadece görülmez — hissedilir.
        </p>

        <div className="cta">
          <a className="btn" href="#">Shop</a>
          <a className="btn" href="#">AI Room Styler</a>
          <a className="btn" href="#">Interior Projects</a>
        </div>
      </section>

      {/* علامت اسکرول */}
      <div className="scroll-cue">
        <span>scroll</span>
      </div>
    </main>
  );
}

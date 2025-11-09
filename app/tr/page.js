"use client";

export default function PageTR() {
  return (
    <main>
      <section className="hero">
        <div className="velvet" aria-hidden />
        <div className="hero-ctr">
          <h1>İtalyan kadifesi, Türkiye’de ilk kez — Artan Gallery.</h1>
          <p>Sanat sadece görülmez — hissedilir.</p>
          <div className="cta">
            <a className="btn" href="/tr/shop">Shop</a>
            <a className="btn" href="/tr/ai">AI Room Styler</a>
            <a className="btn" href="/tr/projects">Interior Projects</a>
          </div>
        </div>
      </section>

      <section className="compare">
        <h2>Velvet vs Canvas</h2>
        <div className="grid2">
          <div className="card">
            <h3>Italian Velvet (Kadife)</h3>
            <p>Doku yumuşak, ışıkta zengin; dokunsal bir deneyim. Lüks hissi ve derin renkler.</p>
          </div>
          <div className="card">
            <h3>Canvas (Kanvas)</h3>
            <p>Klasik kanvas dokusu; daha mat görünüm. Dokunma hissi sınırlı.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

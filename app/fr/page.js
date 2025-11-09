"use client";

export default function PageFR() {
  return (
    <main>
      <section className="hero">
        <div className="velvet" aria-hidden />
        <div className="hero-ctr">
          <h1>Velours italien — première en Turquie par Artan Gallery.</h1>
          <p>L’art ne se voit pas seulement — il se ressent.</p>
          <div className="cta">
            <a className="btn" href="/fr/boutique">Boutique</a>
            <a className="btn" href="/fr/ai">AI Room Styler</a>
            <a className="btn" href="/fr/projets">Projets d’intérieur</a>
          </div>
        </div>
      </section>

      <section className="compare">
        <h2>Velours vs Toile (Canvas)</h2>
        <div className="grid2">
          <div className="card">
            <h3>Velours italien</h3>
            <p>Texture douce et riche à la lumière; sensation tactile et luxueuse, couleurs profondes.</p>
          </div>
          <div className="card">
            <h3>Toile (Canvas)</h3>
            <p>Trame classique de toile; rendu plus mat. Sensation tactile limitée.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

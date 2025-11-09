"use client";

export default function PageFR() {
  return (
    <main>
      <section className="hero" aria-label="Hero">
        <div className="velvet" aria-hidden />
        <div className="hero-ctr">
          <h1>Velours italien — première en Turquie par Artan Gallery.</h1>
          <p>L’art ne se voit pas seulement — il se ressent.</p>
          <div className="cta">
            <a className="btn" href="#boutique">Boutique</a>
            <a className="btn" href="#ia">Styliste de pièce IA</a>
            <a className="btn" href="#projets">Projets d’intérieur</a>
          </div>
        </div>
      </section>

      <section id="boutique" className="section" aria-labelledby="cmp-title-fr">
        <h2 id="cmp-title-fr">Velours vs Toile (Canvas)</h2>
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

      <section id="ia" className="section" aria-label="AI Room Styler">
        <h2>Styliste de pièce IA</h2>
        <p style={{textAlign:'center',opacity:.85,maxWidth:780,margin:'8px auto 0'}}>
          Bientôt : téléchargez la photo de votre pièce et recevez des suggestions de style/cadre.
        </p>
      </section>

      <section id="projets" className="section" aria-label="Projets d’intérieur">
        <h2>Projets d’intérieur</h2>
        <p style={{textAlign:'center',opacity:.85,maxWidth:780,margin:'8px auto 0'}}>
          Bientôt : projets résidentiels/hôteliers/commerciaux et étapes de collaboration.
        </p>
      </section>
    </main>
  );
}

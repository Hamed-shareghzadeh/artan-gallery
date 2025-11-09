"use client";

export default function PageEN() {
  return (
    <main>
      <section className="hero" aria-label="Hero">
        <div className="velvet" aria-hidden />
        <div className="hero-ctr">
          <h1>Italian velvet — for the first time in Türkiye by Artan Gallery.</h1>
          <p>Art is not just seen — it’s felt.</p>
          <div className="cta">
            <a className="btn" href="#shop">Shop</a>
            <a className="btn" href="#ai">AI Room Styler</a>
            <a className="btn" href="#projects">Interior Projects</a>
          </div>
        </div>
      </section>

      <section id="shop" className="section" aria-labelledby="cmp-title-en">
        <h2 id="cmp-title-en">Velvet vs Canvas</h2>
        <div className="grid2">
          <div className="card">
            <h3>Italian Velvet</h3>
            <p>Soft, light-rich texture; truly tactile. Luxurious feel with deep color rendition.</p>
          </div>
          <div className="card">
            <h3>Canvas</h3>
            <p>Classic canvas weave; more matte look. Limited tactile impression.</p>
          </div>
        </div>
      </section>

      <section id="ai" className="section" aria-label="AI Room Styler">
        <h2>AI Room Styler</h2>
        <p style={{textAlign:'center',opacity:.85,maxWidth:780,margin:'8px auto 0'}}>
          Coming soon: upload your room photo and get style/frame suggestions.
        </p>
      </section>

      <section id="projects" className="section" aria-label="Interior Projects">
        <h2>Interior Projects</h2>
        <p style={{textAlign:'center',opacity:.85,maxWidth:780,margin:'8px auto 0'}}>
          Coming soon: residential/hotel/retail highlights and collaboration steps.
        </p>
      </section>
    </main>
  );
}

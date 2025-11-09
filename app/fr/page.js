"use client";

export default function PageEN() {
  return (
    <main>
      <section className="hero">
        <div className="velvet" aria-hidden />
        <div className="hero-ctr">
          <h1>Italian velvet — for the first time in Türkiye by Artan Gallery.</h1>
          <p>Art is not just seen — it’s felt.</p>
          <div className="cta">
            <a className="btn" href="/en/shop">Shop</a>
            <a className="btn" href="/en/ai">AI Room Styler</a>
            <a className="btn" href="/en/projects">Interior Projects</a>
          </div>
        </div>
      </section>

      <section className="compare">
        <h2>Velvet vs Canvas</h2>
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
    </main>
  );
}

const heroCtas = [
  { href: '/en/shop', label: 'Explore the shop' },
  { href: '/en/ai', label: 'AI design studio' },
  { href: '/en/projects', label: 'View projects' }
];

export default function PageEN() {
  return (
    <>
      <section className="hero" aria-labelledby="en-hero-title">
        <div className="hero-content">
          <p className="hero-eyebrow">Artan Gallery</p>
          <h1 id="en-hero-title">
            Italian velvet — for the first time in Türkiye by Artan Gallery.
          </h1>
          <p className="hero-tagline">Art is not just seen — it’s felt.</p>
          <div className="button-row" role="group" aria-label="Primary calls to action">
            {heroCtas.map((cta) => (
              <a key={cta.href} className="pill-button" href={cta.href}>
                {cta.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="compare" aria-labelledby="en-compare-title">
        <div className="compare-header">
          <h2 id="en-compare-title">Velvet vs Canvas</h2>
          <p>
            Two surfaces. Two sensations. Compare tactile Italian velvet with the classic
            matte presence of canvas.
          </p>
        </div>
        <div className="compare-grid" role="list">
          <article className="compare-card" role="listitem">
            <h3>Italian Velvet</h3>
            <p>
              Soft, light-rich texture; truly tactile. Luxurious feel with deep color rendition.
            </p>
          </article>
          <article className="compare-card" role="listitem">
            <h3>Canvas</h3>
            <p>
              Classic canvas weave; more matte look. Limited tactile impression.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}

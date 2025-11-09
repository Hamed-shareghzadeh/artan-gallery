const heroCtas = [
  { href: '/fr/boutique', label: 'Découvrir la boutique' },
  { href: '/fr/ai', label: 'Studio IA velours' },
  { href: '/fr/projets', label: 'Voir les projets' }
];

export default function PageFR() {
  return (
    <>
      <section className="hero" aria-labelledby="fr-hero-title">
        <div className="hero-content">
          <p className="hero-eyebrow">Artan Gallery</p>
          <h1 id="fr-hero-title">
            Velours italien — première en Turquie par Artan Gallery.
          </h1>
          <p className="hero-tagline">L’art ne se voit pas seulement — il se ressent.</p>
          <div className="button-row" role="group" aria-label="Appels à l’action">
            {heroCtas.map((cta) => (
              <a key={cta.href} className="pill-button" href={cta.href}>
                {cta.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="compare" aria-labelledby="fr-compare-title">
        <div className="compare-header">
          <h2 id="fr-compare-title">Velours vs Toile (Canvas)</h2>
          <p>
            Deux surfaces, deux émotions. Ressentez la profondeur tactile du velours face à
            la sobriété mate de la toile.
          </p>
        </div>
        <div className="compare-grid" role="list">
          <article className="compare-card" role="listitem">
            <h3>Velours italien</h3>
            <p>
              Texture douce et riche à la lumière; sensation tactile et luxueuse, couleurs profondes.
            </p>
          </article>
          <article className="compare-card" role="listitem">
            <h3>Toile (Canvas)</h3>
            <p>
              Trame classique de toile; rendu plus mat. Sensation tactile limitée.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}

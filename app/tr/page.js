const heroCtas = [
  { href: '/tr/shop', label: 'Koleksiyonu keşfet' },
  { href: '/tr/ai', label: 'Kadife AI deneyimi' },
  { href: '/tr/projects', label: 'Projelerimizi incele' }
];

export default function PageTR() {
  return (
    <>
      <section className="hero" aria-labelledby="tr-hero-title">
        <div className="hero-content">
          <p className="hero-eyebrow">Artan Gallery</p>
          <h1 id="tr-hero-title">
            İtalyan kadifesi, Türkiye’de ilk kez — Artan Gallery.
          </h1>
          <p className="hero-tagline">Sanat sadece görülmez — hissedilir.</p>
          <div className="button-row" role="group" aria-label="Birincil yönlendirmeler">
            {heroCtas.map((cta) => (
              <a key={cta.href} className="pill-button" href={cta.href}>
                {cta.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="compare" aria-labelledby="tr-compare-title">
        <div className="compare-header">
          <h2 id="tr-compare-title">Velvet vs Canvas</h2>
          <p>
            İki yüzey, iki deneyim. Kadifenin ışık ve dokusu ile klasik kanvasın mat
            sadeliğini karşılaştırın.
          </p>
        </div>
        <div className="compare-grid" role="list">
          <article className="compare-card" role="listitem">
            <h3>Italian Velvet (Kadife)</h3>
            <p>
              Doku yumuşak, ışıkta zengin; dokunsal bir deneyim. Lüks hissi ve derin renkler.
            </p>
          </article>
          <article className="compare-card" role="listitem">
            <h3>Canvas (Kanvas)</h3>
            <p>
              Klasik kanvas dokusu; daha mat görünüm. Dokunma hissi sınırlı.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}

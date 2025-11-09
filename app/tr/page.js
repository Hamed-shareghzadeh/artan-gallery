"use client";

export default function PageTR() {
  return (
    <main>
      <section className="hero" aria-label="Hero">
        <div className="velvet" aria-hidden />
        <div className="hero-ctr">
          <h1>İtalyan kadifesi, Türkiye’de ilk kez — Artan Gallery.</h1>
          <p>Sanat sadece görülmez — hissedilir.</p>
          <div className="cta">
            <a className="btn" href="#magaza">Mağaza</a>
            <a className="btn" href="#yapay-zeka">Yapay Zeka Oda Stilisti</a>
            <a className="btn" href="#projeler">İç Mekan Projeleri</a>
          </div>
        </div>
      </section>

      <section id="magaza" className="section" aria-labelledby="cmp-title-tr">
        <h2 id="cmp-title-tr">Velvet vs Canvas</h2>
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

      <section id="yapay-zeka" className="section" aria-label="AI Room Styler">
        <h2>Yapay Zeka Oda Stilisti</h2>
        <p style={{textAlign:'center',opacity:.85,maxWidth:780,margin:'8px auto 0'}}>
          Yakında: Odanızın fotoğrafını yükleyin, stil/çerçeve/senaryo önerileri alın.
        </p>
      </section>

      <section id="projeler" className="section" aria-label="Interior Projects">
        <h2>İç Mekan Projeleri</h2>
        <p style={{textAlign:'center',opacity:.85,maxWidth:780,margin:'8px auto 0'}}>
          Yakında: Konut/otel/mağaza referanslarımız ve iş birliği adımları.
        </p>
      </section>
    </main>
  );
}

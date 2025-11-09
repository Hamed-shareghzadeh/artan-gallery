"use client";
import Link from "next/link";

export default function PageFR() {
  const items = [
    { slug:"velvet-noir",   title:"Velvet Noir",    price:3490, tags:["Art mural","Minimal"] },
    { slug:"emerald-touch", title:"Emerald Touch",  price:2990, tags:["Affiche","Moderne"] },
    { slug:"ivory-muse",    title:"Ivory Muse",     price:2790, tags:["Art mural","Classique"] },
    { slug:"azure-drift",   title:"Azure Drift",    price:3190, tags:["Ensemble","Abstrait"] },
    { slug:"golden-frame",  title:"Golden Frame",   price:3890, tags:["Accessoire","Minimal"] },
    { slug:"velvet-duo",    title:"Velvet Duo",     price:4590, tags:["Ensemble","Moderne"] },
  ];
  const rowA = [...items, ...items];
  const rowB = [...items.slice().reverse(), ...items.slice().reverse()];

  return (
    <main>
      <section className="hero" aria-label="Hero">
        <div className="velvet" aria-hidden />
        <div className="hero-ctr">
          <h1>Velours italien — première en Turquie par Artan Gallery.</h1>
          <p>L’art ne se voit pas seulement — il se ressent.</p>
          <div className="cta">
            <Link className="btn" href="/fr/boutique">Boutique</Link>
            <Link className="btn" href="/fr/ai">AI Room Styler</Link>
            <Link className="btn" href="/fr/projets">Projets d’intérieur</Link>
          </div>
        </div>
      </section>

      <section className="marquee-wrap" aria-label="À la une">
        <h2 className="marquee-head">À la une</h2>

        <div className="marquee-row">
          {rowA.map((p, i) => (
            <Link href={`/fr/p/${p.slug}`} className="mcard" key={`a-${i}`}>
              <div className="mthumb"><span>{p.title}</span></div>
              <div className="mbody">
                <div className="mrow">
                  <div className="mtitle">{p.title}</div>
                  <div className="mprice">{p.price} ₺</div>
                </div>
                <div className="mtags">
                  {p.tags.map(t => <span className="mtag" key={t}>{t}</span>)}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="marquee-row rtl" style={{marginTop:12}}>
          {rowB.map((p, i) => (
            <Link href={`/fr/p/${p.slug}`} className="mcard" key={`b-${i}`}>
              <div className="mthumb"><span>{p.title}</span></div>
              <div className="mbody">
                <div className="mrow">
                  <div className="mtitle">{p.title}</div>
                  <div className="mprice">{p.price} ₺</div>
                </div>
                <div className="mtags">
                  {p.tags.map(t => <span className="mtag" key={t}>{t}</span>)}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="cmp-title-fr">
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
    </main>
  );
}

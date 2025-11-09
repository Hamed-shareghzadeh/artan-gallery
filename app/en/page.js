"use client";
import Link from "next/link";

export default function PageEN() {
  const items = [
    { slug:"velvet-noir",   title:"Velvet Noir",    price:3490, tags:["Wall Art","Minimal"] },
    { slug:"emerald-touch", title:"Emerald Touch",  price:2990, tags:["Poster","Modern"] },
    { slug:"ivory-muse",    title:"Ivory Muse",     price:2790, tags:["Wall Art","Classic"] },
    { slug:"azure-drift",   title:"Azure Drift",    price:3190, tags:["Set","Abstract"] },
    { slug:"golden-frame",  title:"Golden Frame",   price:3890, tags:["Accessory","Minimal"] },
    { slug:"velvet-duo",    title:"Velvet Duo",     price:4590, tags:["Set","Modern"] },
  ];
  const rowA = [...items, ...items];
  const rowB = [...items.slice().reverse(), ...items.slice().reverse()];

  return (
    <main>
      <section className="hero" aria-label="Hero">
        <div className="velvet" aria-hidden />
        <div className="hero-ctr">
          <h1>Italian velvet — for the first time in Türkiye by Artan Gallery.</h1>
          <p>Art is not just seen — it’s felt.</p>
          <div className="cta">
            <Link className="btn" href="/en/shop">Shop</Link>
            <Link className="btn" href="/en/ai">AI Room Styler</Link>
            <Link className="btn" href="/en/projects">Interior Projects</Link>
          </div>
        </div>
      </section>

      <section className="marquee-wrap" aria-label="Featured">
        <h2 className="marquee-head">Featured</h2>

        <div className="marquee-row">
          {rowA.map((p, i) => (
            <Link href={`/en/p/${p.slug}`} className="mcard" key={`a-${i}`}>
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
            <Link href={`/en/p/${p.slug}`} className="mcard" key={`b-${i}`}>
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

      <section className="section" aria-labelledby="cmp-title-en">
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
    </main>
  );
}

"use client";
import Link from "next/link";

export default function PageTR() {
  // نمونه داده برای ردیف‌ها (slug ها با صفحات محصول هم‌خوان باشند)
  const items = [
    { slug:"velvet-noir",   title:"Velvet Noir",    price:3490, tags:["Tablo","Minimal"] },
    { slug:"emerald-touch", title:"Emerald Touch",  price:2990, tags:["Poster","Modern"] },
    { slug:"ivory-muse",    title:"Ivory Muse",     price:2790, tags:["Tablo","Klasik"] },
    { slug:"azure-drift",   title:"Azure Drift",    price:3190, tags:["Set","Soyut"] },
    { slug:"golden-frame",  title:"Golden Frame",   price:3890, tags:["Aksesuar","Minimal"] },
    { slug:"velvet-duo",    title:"Velvet Duo",     price:4590, tags:["Set","Modern"] },
  ];
  // برای حلقه‌ی بی‌نهایت، آرایه را دوبار می‌چینیم
  const rowA = [...items, ...items];
  const rowB = [...items.slice().reverse(), ...items.slice().reverse()];

  return (
    <main>
      <section className="hero" aria-label="Hero">
        <div className="velvet" aria-hidden />
        <div className="hero-ctr">
          <h1>İtalyan kadifesi, Türkiye’de ilk kez — Artan Gallery.</h1>
          <p>Sanat sadece görülmez — hissedilir.</p>
          <div className="cta">
            <Link className="btn" href="/tr/shop">Mağaza</Link>
            <Link className="btn" href="/tr/ai">AI Oda Tasarımcısı</Link>
            <Link className="btn" href="/tr/projects">İç Mimari Projeler</Link>
          </div>
        </div>
      </section>

      {/* Marquee Products */}
      <section className="marquee-wrap" aria-label="Öne çıkan ürünler">
        <h2 className="marquee-head">Öne Çıkanlar</h2>

        <div className="marquee-row">
          {rowA.map((p, i) => (
            <Link href={`/tr/p/${p.slug}`} className="mcard" key={`a-${i}`}>
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
            <Link href={`/tr/p/${p.slug}`} className="mcard" key={`b-${i}`}>
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

      {/* Compare */}
      <section className="section" aria-labelledby="cmp-title-tr">
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
    </main>
  );
}

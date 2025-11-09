"use client";

export default function ProductTR({ params }) {
  const { slug } = params;

  // Mock dataset (must match slugs used in shop)
  const items = [
    { slug: "velvet-noir", title: "Velvet Noir", price: 3490, desc: "İtalyan kadifesi — derin siyah & altın vurgular.", sizes:["30x40","40x60","50x70","70x100"], frames:["Altın","Siyah","Ahşap"], orient:["Dikey","Yatay"], palette:["Siyah","Altın"] },
    { slug: "emerald-touch", title: "Emerald Touch", price: 2990, desc: "Zengin yeşil tonlarıyla modern dokunuş.", sizes:["30x40","40x60","50x70"], frames:["Altın","Siyah"], orient:["Dikey"], palette:["Yeşil","Altın"] },
    { slug: "ivory-muse", title: "Ivory Muse", price: 2790, desc: "Zarif beyaz & altın — aydınlık mekanlar için.", sizes:["30x40","40x60"], frames:["Altın","Ahşap"], orient:["Dikey","Yatay"], palette:["Beyaz","Altın"] },
    { slug: "azure-drift", title: "Azure Drift", price: 3190, desc: "Mavili soyut geçişler — sakin ve rafine.", sizes:["40x60","50x70"], frames:["Siyah","Ahşap"], orient:["Yatay"], palette:["Mavi"] },
  ];

  const p = items.find(x => x.slug === slug);

  if (!p) {
    return (
      <main className="product-wrap">
        <p>Ürün bulunamadı.</p>
      </main>
    );
  }

  return (
    <main className="product-wrap">
      <div>
        <div className="breadcrumbs">
          <a href="/tr/shop">Mağaza</a> &nbsp;/&nbsp; <span>{p.title}</span>
        </div>
        <div className="gallery">
          <div className="galleryMain"><span>{p.title}</span></div>
          <div className="galleryThumbs">
            <div className="tph" /><div className="tph" /><div className="tph" /><div className="tph" />
          </div>
        </div>
      </div>

      <div>
        <h1 className="pTitle">{p.title}</h1>
        <div className="pPrice">{p.price} ₺</div>
        <p className="spec">{p.desc}</p>

        <div className="opts">
          <div className="optRow">
            <label>Ölçü</label>
            <div className="optGrid">{p.sizes.map(s=><button key={s} className="optBtn" aria-pressed="false">{s}</button>)}</div>
          </div>
          <div className="optRow">
            <label>Çerçeve</label>
            <div className="optGrid">{p.frames.map(f=><button key={f} className="optBtn" aria-pressed="false">{f}</button>)}</div>
          </div>
          <div className="optRow">
            <label>Yön</label>
            <div className="optGrid">{p.orient.map(o=><button key={o} className="optBtn" aria-pressed="false">{o}</button>)}</div>
          </div>
          <div className="optRow">
            <label>Renk Paleti</label>
            <div className="optGrid">{p.palette.map(c=><button key={c} className="optBtn" aria-pressed="false">{c}</button>)}</div>
          </div>
        </div>

        <div className="buyRow">
          <button className="buy">Sepete ekle</button>
          <button className="buy secondary">WhatsApp</button>
        </div>

        <div className="compareBox">
          <h4>Velvet vs Canvas</h4>
          <p className="spec">
            Kadife: yumuşak, ışıkta zengin; dokunsal bir deneyim ve derin renkler. <br/>
            Kanvas: klasik doku, daha mat ve dokunma hissi sınırlı.
          </p>
        </div>
      </div>
    </main>
  );
}

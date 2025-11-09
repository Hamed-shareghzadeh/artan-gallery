"use client";

export default function ProductFR({ params }) {
  const { slug } = params;

  const items = [
    { slug: "velvet-noir", title: "Velvet Noir", price: 3490, desc: "Velours italien — noir profond avec accents dorés.", sizes:["30x40","40x60","50x70","70x100"], frames:["Or","Noir","Bois"], orient:["Portrait","Paysage"], palette:["Noir","Or"] },
    { slug: "emerald-touch", title: "Emerald Touch", price: 2990, desc: "Tons émeraude riches avec une touche moderne.", sizes:["30x40","40x60","50x70"], frames:["Or","Noir"], orient:["Portrait"], palette:["Vert","Or"] },
    { slug: "ivory-muse", title: "Ivory Muse", price: 2790, desc: "Blanc & or élégants — parfait pour les intérieurs lumineux.", sizes:["30x40","40x60"], frames:["Or","Bois"], orient:["Portrait","Paysage"], palette:["Blanc","Or"] },
    { slug: "azure-drift", title: "Azure Drift", price: 3190, desc: "Bleus abstraits apaisants au rendu raffiné.", sizes:["40x60","50x70"], frames:["Noir","Bois"], orient:["Paysage"], palette:["Bleu"] },
  ];

  const p = items.find(x => x.slug === slug);
  if (!p) return <main className="product-wrap"><p>Produit introuvable.</p></main>;

  return (
    <main className="product-wrap">
      <div>
        <div className="breadcrumbs">
          <a href="/fr/boutique">Boutique</a> &nbsp;/&nbsp; <span>{p.title}</span>
        </div>
        <div className="gallery">
          <div className="galleryMain"><span>{p.title}</span></div>
          <div className="galleryThumbs"><div className="tph"/><div className="tph"/><div className="tph"/><div className="tph"/></div>
        </div>
      </div>

      <div>
        <h1 className="pTitle">{p.title}</h1>
        <div className="pPrice">{p.price} ₺</div>
        <p className="spec">{p.desc}</p>

        <div className="opts">
          <div className="optRow">
            <label>Taille</label>
            <div className="optGrid">{p.sizes.map(s=><button key={s} className="optBtn" aria-pressed="false">{s}</button>)}</div>
          </div>
          <div className="optRow">
            <label>Cadre</label>
            <div className="optGrid">{p.frames.map(f=><button key={f} className="optBtn" aria-pressed="false">{f}</button>)}</div>
          </div>
          <div className="optRow">
            <label>Orientation</label>
            <div className="optGrid">{p.orient.map(o=><button key={o} className="optBtn" aria-pressed="false">{o}</button>)}</div>
          </div>
          <div className="optRow">
            <label>Palette</label>
            <div className="optGrid">{p.palette.map(c=><button key={c} className="optBtn" aria-pressed="false">{c}</button>)}</div>
          </div>
        </div>

        <div className="buyRow">
          <button className="buy">Ajouter au panier</button>
          <button className="buy secondary">WhatsApp</button>
        </div>

        <div className="compareBox">
          <h4>Velours vs Toile</h4>
          <p className="spec">
            Velours : texture douce et riche à la lumière, tactile et luxueuse. <br/>
            Toile : trame classique plus mate ; sensation tactile limitée.
          </p>
        </div>
      </div>
    </main>
  );
}

"use client";

export default function ProductEN({ params }) {
  const { slug } = params;

  const items = [
    { slug: "velvet-noir", title: "Velvet Noir", price: 3490, desc: "Italian velvet — deep black with golden accents.", sizes:["30x40","40x60","50x70","70x100"], frames:["Gold","Black","Wood"], orient:["Portrait","Landscape"], palette:["Black","Gold"] },
    { slug: "emerald-touch", title: "Emerald Touch", price: 2990, desc: "Rich emerald tones with a modern touch.", sizes:["30x40","40x60","50x70"], frames:["Gold","Black"], orient:["Portrait"], palette:["Green","Gold"] },
    { slug: "ivory-muse", title: "Ivory Muse", price: 2790, desc: "Elegant white & gold — perfect for bright interiors.", sizes:["30x40","40x60"], frames:["Gold","Wood"], orient:["Portrait","Landscape"], palette:["White","Gold"] },
    { slug: "azure-drift", title: "Azure Drift", price: 3190, desc: "Calming abstract blues with refined presence.", sizes:["40x60","50x70"], frames:["Black","Wood"], orient:["Landscape"], palette:["Blue"] },
  ];

  const p = items.find(x => x.slug === slug);
  if (!p) return <main className="product-wrap"><p>Product not found.</p></main>;

  return (
    <main className="product-wrap">
      <div>
        <div className="breadcrumbs">
          <a href="/en/shop">Shop</a> &nbsp;/&nbsp; <span>{p.title}</span>
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
            <label>Size</label>
            <div className="optGrid">{p.sizes.map(s=><button key={s} className="optBtn" aria-pressed="false">{s}</button>)}</div>
          </div>
          <div className="optRow">
            <label>Frame</label>
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
          <button className="buy">Add to cart</button>
          <button className="buy secondary">WhatsApp</button>
        </div>

        <div className="compareBox">
          <h4>Velvet vs Canvas</h4>
          <p className="spec">
            Velvet: soft, light-rich texture; tactile and luxurious. <br/>
            Canvas: classic weave with a more matte look; limited tactile impression.
          </p>
        </div>
      </div>
    </main>
  );
}

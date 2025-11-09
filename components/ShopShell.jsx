"use client";
import { useMemo, useState } from "react";
import Link from "next/link";

export default function ShopShell({
  heading = "Shop",
  searchPlaceholder = "Search…",
  sortLabel = "Sort",
  sortOptions = [
    { value: "pop", label: "Popular" },
    { value: "new", label: "Newest" },
    { value: "price_asc", label: "Price: Low to High" },
    { value: "price_desc", label: "Price: High to Low" }
  ],
  resetLabel = "Reset",
  addLabel = "Add to cart",
  locale = "en", // NEW: "tr" | "en" | "fr"
  filters = {
    categoriesLabel: "Categories",
    categories: [],
    stylesLabel: "Styles",
    styles: [],
    colorsLabel: "Colors",
    colors: [],
    sizesLabel: "Sizes",
    sizes: [],
    priceLabel: "Max Price"
  },
  items = [] // each item must have {id, slug, title, price, ...}
}) {
  const [q, setQ] = useState("");
  const [sort, setSort] = useState("pop");
  const [selCats, setSelCats] = useState(new Set());
  const [selStyles, setSelStyles] = useState(new Set());
  const [selColors, setSelColors] = useState(new Set());
  const [selSizes, setSelSizes] = useState(new Set());
  const [maxPrice, setMaxPrice] = useState( items.length ? Math.ceil(Math.max(...items.map(i=>i.price))) : 1000 );
  const [page, setPage] = useState(1);
  const pageSize = 6;

  const toggle = (setFn, key) => {
    setPage(1);
    setFn(prev => {
      const n = new Set(prev);
      n.has(key) ? n.delete(key) : n.add(key);
      return n;
    });
  };

  const resetAll = () => {
    setQ(""); setSort("pop");
    setSelCats(new Set()); setSelStyles(new Set()); setSelColors(new Set()); setSelSizes(new Set());
    setMaxPrice(items.length ? Math.ceil(Math.max(...items.map(i=>i.price))) : 1000);
    setPage(1);
  };

  const filtered = useMemo(() => {
    let list = items.filter(i => i.price <= maxPrice);
    if (q.trim()) {
      const qq = q.trim().toLowerCase();
      list = list.filter(i => (i.title+ " " + (i.desc||"")).toLowerCase().includes(qq));
    }
    if (selCats.size)   list = list.filter(i => i.cats?.some(c => selCats.has(c)));
    if (selStyles.size) list = list.filter(i => i.styles?.some(s => selStyles.has(s)));
    if (selColors.size) list = list.filter(i => i.colors?.some(c => selColors.has(c)));
    if (selSizes.size)  list = list.filter(i => i.sizes?.some(s => selSizes.has(s)));

    switch (sort) {
      case "price_asc":  list.sort((a,b)=>a.price-b.price); break;
      case "price_desc": list.sort((a,b)=>b.price-a.price); break;
      case "new":        list.sort((a,b)=>(b.new?-1:1)); break;
      default:           list.sort((a,b)=>(b.pop||0)-(a.pop||0));
    }
    return list;
  }, [items, q, selCats, selStyles, selColors, selSizes, sort, maxPrice]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const pageItems = filtered.slice((page-1)*pageSize, page*pageSize);

  const productHref = (slug) => {
    if (!slug) return "#";
    // /tr/p/[slug], /en/p/[slug], /fr/p/[slug]
    return `/${locale}/p/${slug}`;
  };

  return (
    <div className="shop-wrap">
      {/* Sidebar */}
      <aside className="shop-aside" aria-label="Filters">
        <div className="filter-group">
          <button className="reset-btn" onClick={resetAll}>{resetLabel}</button>
        </div>

        <div className="filter-group">
          <h4>{filters.categoriesLabel}</h4>
          <div className="checks">
            {filters.categories.map(c => (
              <label key={c}>
                <input type="checkbox" checked={selCats.has(c)} onChange={()=>toggle(setSelCats,c)} />
                <span>{c}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="filter-group">
          <h4>{filters.stylesLabel}</h4>
          <div className="checks">
            {filters.styles.map(s => (
              <label key={s}>
                <input type="checkbox" checked={selStyles.has(s)} onChange={()=>toggle(setSelStyles,s)} />
                <span>{s}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="filter-group">
          <h4>{filters.colorsLabel}</h4>
          <div className="checks">
            {filters.colors.map(c => (
              <label key={c}>
                <input type="checkbox" checked={selColors.has(c)} onChange={()=>toggle(setSelColors,c)} />
                <span>{c}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="filter-group">
          <h4>{filters.sizesLabel}</h4>
          <div className="checks">
            {filters.sizes.map(s => (
              <label key={s}>
                <input type="checkbox" checked={selSizes.has(s)} onChange={()=>toggle(setSelSizes,s)} />
                <span>{s}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="filter-group">
          <h4>{filters.priceLabel}</h4>
          <div className="range">
            <input type="range" min="50" max={items.length ? Math.ceil(Math.max(...items.map(i=>i.price))) : 1000}
                   value={maxPrice} onChange={(e)=>{setPage(1);setMaxPrice(Number(e.target.value));}} />
            <span className="price">≤ {maxPrice} ₺</span>
          </div>
        </div>
      </aside>

      {/* Main */}
      <section>
        <div className="shop-hdr">
          <h2>{heading}</h2>
          <div className="shop-controls">
            <input className="input" placeholder={searchPlaceholder} value={q} onChange={e=>{setPage(1);setQ(e.target.value)}} />
            <label>
              <select className="select" value={sort} onChange={e=>setSort(e.target.value)} aria-label={sortLabel}>
                {sortOptions.map(o=><option key={o.value} value={o.value}>{o.label}</option>)}
              </select>
            </label>
          </div>
        </div>

        <div className="grid">
          {pageItems.map(p => (
            <article className="cardP" key={p.id}>
              <Link href={productHref(p.slug)} className="thumb"><span>{p.thumb || "Artan Gallery"}</span></Link>
              <div className="cardBody">
                <div className="cardRow">
                  <Link href={productHref(p.slug)} className="title">{p.title}</Link>
                  <div className="price">{p.price} ₺</div>
                </div>
                <div className="tags">
                  {(p.cats||[]).map(t=> <span key={"c"+t} className="tag">{t}</span>)}
                  {(p.styles||[]).map(t=> <span key={"s"+t} className="tag">{t}</span>)}
                  {(p.colors||[]).map(t=> <span key={"k"+t} className="tag">{t}</span>)}
                  {(p.sizes||[]).map(t=> <span key={"z"+t} className="tag">{t}</span>)}
                </div>
                <button className="add">{addLabel}</button>
              </div>
            </article>
          ))}
        </div>

        <div className="pager">
          <button disabled={page<=1} onClick={()=>setPage(p=>p-1)}>‹ Prev</button>
          <span style={{padding:'8px 10px'}}>Page {page} / {totalPages}</span>
          <button disabled={page>=totalPages} onClick={()=>setPage(p=>p+1)}>Next ›</button>
        </div>
      </section>
    </div>
  );
}

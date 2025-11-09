const DEFAULT_FILTERS = Object.freeze([]);

export default function ShopShell({
  title,
  filterHeading,
  filterOptions = DEFAULT_FILTERS,
  productLabel,
  comingSoonLabel
}) {
  const products = Array.from({ length: 6 }, (_, index) => `${productLabel} ${index + 1}`);

  return (
    <main className="shop-shell">
      <header className="shop-shell__header">
        <h1>{title}</h1>
      </header>

      <div className="shop-shell__content">
        <aside className="shop-shell__filters">
          <h2>{filterHeading}</h2>
          <form className="shop-shell__filter-group">
            {filterOptions.map((option) => (
              <label key={option} className="shop-shell__filter-option">
                <input type="checkbox" />
                <span>{option}</span>
              </label>
            ))}
          </form>
        </aside>

        <section className="shop-shell__grid" aria-label={title}>
          {products.map((product) => (
            <article key={product} className="shop-shell__card">
              <div className="shop-shell__card-image" aria-hidden="true" />
              <h3>{product}</h3>
              <p>{comingSoonLabel}</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}

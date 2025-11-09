import React from "react";

const ShopShell = ({
  heading,
  description,
  filterHeading,
  filters,
  productLabel,
  productDescription,
}) => {
  const products = Array.from({ length: 6 }, (_, index) => ({
    id: index + 1,
    title: `${productLabel} ${index + 1}`,
  }));

  return (
    <section className="shop-shell" aria-labelledby="shop-heading">
      <header className="shop-shell__header">
        <h1 id="shop-heading">{heading}</h1>
        {description ? <p>{description}</p> : null}
      </header>

      <div className="shop-shell__content">
        <aside className="shop-shell__filters" aria-labelledby="shop-filter-heading">
          <h2 id="shop-filter-heading">{filterHeading}</h2>
          <ul>
            {filters.map((filter) => {
              const inputId = `shop-filter-${filter.id}`;
              return (
                <li key={filter.id}>
                  <input type="checkbox" id={inputId} name={filter.id} />
                  <label htmlFor={inputId}>{filter.label}</label>
                </li>
              );
            })}
          </ul>
        </aside>

        <div className="shop-shell__grid" role="list">
          {products.map((product) => (
            <article key={product.id} className="shop-shell__card" role="listitem">
              <div className="shop-shell__thumb" aria-hidden />
              <div className="shop-shell__card-body">
                <h3>{product.title}</h3>
                {productDescription ? <p>{productDescription}</p> : null}
              </div>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .shop-shell {
          padding: 48px 24px 64px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .shop-shell__header {
          margin-bottom: 32px;
        }

        .shop-shell__header h1 {
          margin: 0 0 8px;
          font-size: clamp(28px, 4vw, 42px);
          letter-spacing: 0.4px;
        }

        .shop-shell__header p {
          margin: 0;
          color: #555;
          max-width: 65ch;
          line-height: 1.5;
        }

        .shop-shell__content {
          display: grid;
          gap: 24px;
          grid-template-columns: minmax(220px, 260px) 1fr;
        }

        .shop-shell__filters {
          border: 1px solid #eee;
          border-radius: 16px;
          padding: 24px;
          background: #fafafa;
          position: sticky;
          top: 24px;
        }

        .shop-shell__filters h2 {
          margin: 0 0 16px;
          font-size: 18px;
          letter-spacing: 0.3px;
        }

        .shop-shell__filters ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 12px;
        }

        .shop-shell__filters li {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .shop-shell__filters input[type="checkbox"] {
          width: 16px;
          height: 16px;
          accent-color: #111;
        }

        .shop-shell__grid {
          display: grid;
          gap: 20px;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        }

        .shop-shell__card {
          border: 1px solid #eee;
          border-radius: 16px;
          overflow: hidden;
          background: #fff;
          display: flex;
          flex-direction: column;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .shop-shell__card:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.06);
        }

        .shop-shell__thumb {
          height: 160px;
          background: linear-gradient(135deg, #f1f1f1, #dedede);
        }

        .shop-shell__card-body {
          padding: 18px 20px 24px;
        }

        .shop-shell__card-body h3 {
          margin: 0 0 8px;
          font-size: 18px;
        }

        .shop-shell__card-body p {
          margin: 0;
          color: #666;
          line-height: 1.5;
          font-size: 14px;
        }

        @media (max-width: 960px) {
          .shop-shell {
            padding: 36px 20px 48px;
          }

          .shop-shell__content {
            grid-template-columns: 1fr;
          }

          .shop-shell__filters {
            position: static;
          }
        }
      `}</style>
    </section>
  );
};

export default ShopShell;

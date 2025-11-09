export default function ShopShell({
  title,
  description,
  ctaLabel,
  ctaHref = 'https://wa.me/905437444070',
  productLabel = 'Edition',
  comingSoonLabel = 'Coming soon',
}) {
  const placeholders = Array.from({ length: 4 }, (_, index) => index);

  return (
    <section className="shop-shell" aria-labelledby="shop-shell-title">
      <div className="shop-shell__intro">
        <h1 id="shop-shell-title">{title}</h1>
        {description ? <p className="shop-shell__description">{description}</p> : null}
        {ctaLabel ? (
          <a className="pill-button shop-shell__cta" href={ctaHref}>
            {ctaLabel}
          </a>
        ) : null}
      </div>

      <div className="shop-shell__grid" role="list">
        {placeholders.map((placeholderIndex) => (
          <article
            key={placeholderIndex}
            className="shop-shell__card"
            role="listitem"
          >
            <div className="shop-shell__swatch" aria-hidden="true" />
            <h3 className="shop-shell__card-title">
              {`${productLabel} ${placeholderIndex + 1}`}
            </h3>
            <p className="shop-shell__card-copy">{comingSoonLabel}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

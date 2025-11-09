export default function CompareBlock({
  title,
  leftLabel,
  rightLabel,
  leftText,
  rightText,
}) {
  return (
    <section className="compare">
      <div className="compare__inner">
        <h2 className="compare__title">{title}</h2>
        <div className="compare__grid">
          <article className="compare__panel">
            <h3 className="compare__label">{leftLabel}</h3>
            <p className="compare__text">{leftText}</p>
          </article>
          <article className="compare__panel">
            <h3 className="compare__label">{rightLabel}</h3>
            <p className="compare__text">{rightText}</p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default function CompareBlock({
  title,
  leftLabel,
  rightLabel,
  leftText,
  rightText,
}) {
  return (
    <section className="compare">
      <div className="compare-inner">
        <h2 className="compare-title">{title}</h2>
        <div className="compare-grid">
          <article className="compare-panel">
            <h3 className="compare-label">{leftLabel}</h3>
            <p className="compare-copy">{leftText}</p>
          </article>
          <article className="compare-panel compare-panel--muted">
            <h3 className="compare-label">{rightLabel}</h3>
            <p className="compare-copy">{rightText}</p>
          </article>
        </div>
      </div>
    </section>
  );
}

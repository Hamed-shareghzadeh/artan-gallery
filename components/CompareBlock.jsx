export default function CompareBlock({
  title,
  titleId,
  description,
  leftLabel,
  rightLabel,
  leftText,
  rightText,
}) {
  const descriptionId = description ? `${titleId}-description` : undefined;

  return (
    <section
      className="compare"
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
    >
      <div className="compare__inner">
        <div className="compare__header">
          <h2 id={titleId} className="compare__title">
            {title}
          </h2>
          {description ? (
            <p id={descriptionId} className="compare__description">
              {description}
            </p>
          ) : null}
        </div>
        <div className="compare__grid" role="list">
          <article className="compare__panel" role="listitem">
            <h3 className="compare__label">{leftLabel}</h3>
            <p className="compare__text">{leftText}</p>
          </article>
          <article className="compare__panel" role="listitem">
            <h3 className="compare__label">{rightLabel}</h3>
            <p className="compare__text">{rightText}</p>
          </article>
        </div>
      </div>
    </section>
  );
}

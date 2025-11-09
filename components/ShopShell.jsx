'use client';

const shellStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '60vh',
  padding: '4rem 1.5rem',
  background: '#f8f7f4'
};

const panelStyle = {
  maxWidth: '32rem',
  width: '100%',
  textAlign: 'center',
  backgroundColor: '#fff',
  padding: '3rem 2.5rem',
  borderRadius: '1.5rem',
  boxShadow: '0 20px 45px rgba(15, 23, 42, 0.12)'
};

const headingStyle = {
  fontSize: '2.25rem',
  fontWeight: 600,
  marginBottom: '1rem',
  color: '#0f172a'
};

const descriptionStyle = {
  fontSize: '1.05rem',
  lineHeight: 1.7,
  marginBottom: '2rem',
  color: '#475569'
};

const buttonStyle = {
  appearance: 'none',
  border: 'none',
  borderRadius: '999px',
  padding: '0.9rem 2.75rem',
  fontSize: '1rem',
  fontWeight: 600,
  background: '#0f172a',
  color: '#fff',
  cursor: 'pointer',
  transition: 'transform 150ms ease, box-shadow 150ms ease'
};

const buttonHoverStyle = {
  transform: 'translateY(-2px)',
  boxShadow: '0 10px 25px rgba(15, 23, 42, 0.25)'
};

export default function ShopShell({ title, description, ctaLabel }) {
  return (
    <section style={shellStyle}>
      <div
        style={panelStyle}
        onMouseEnter={(event) => {
          Object.assign(event.currentTarget.querySelector('button').style, buttonHoverStyle);
        }}
        onMouseLeave={(event) => {
          const button = event.currentTarget.querySelector('button');
          button.style.transform = button.style.boxShadow = '';
        }}
      >
        <h1 style={headingStyle}>{title}</h1>
        <p style={descriptionStyle}>{description}</p>
        <button
          type="button"
          style={buttonStyle}
          onFocus={(event) => Object.assign(event.currentTarget.style, buttonHoverStyle)}
          onBlur={(event) => {
            event.currentTarget.style.transform = '';
            event.currentTarget.style.boxShadow = '';
          }}
        >
          {ctaLabel}
        </button>
      </div>
    </section>
  );
}

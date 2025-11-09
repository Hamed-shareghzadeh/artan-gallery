const languages = [
  { href: '/tr', label: 'TR', locale: 'tr' },
  { href: '/en', label: 'EN', locale: 'en' },
  { href: '/fr', label: 'FR', locale: 'fr' }
];

const contactLinks = [
  { href: 'https://wa.me/905437444070', label: 'WhatsApp' },
  { href: 'https://instagram.com/artangallery.tr', label: 'Instagram' }
];

export const metadata = {
  title: 'Italian velvet — for the first time in Türkiye by Artan Gallery.',
  description: 'Art is not just seen — it’s felt.',
  openGraph: {
    title: 'Italian velvet — for the first time in Türkiye by Artan Gallery.',
    description: 'Art is not just seen — it’s felt.'
  },
  twitter: {
    card: 'summary',
    title: 'Italian velvet — for the first time in Türkiye by Artan Gallery.',
    description: 'Art is not just seen — it’s felt.'
  }
};

export default function LayoutEN({ children }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">Skip to main content</a>
        <header className="site-header page-shell">
          <div className="brand">
            <a href="/en">Artan Gallery</a>
          </div>
          <nav className="site-nav" aria-label="Global navigation">
            <ul className="language-switch" aria-label="Language chooser">
              {languages.map((language) => (
                <li key={language.locale}>
                  <a
                    href={language.href}
                    aria-current={language.locale === 'en' ? 'page' : undefined}
                  >
                    {language.label}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="contact-links" aria-label="Social links">
              {contactLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noreferrer noopener">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <main id="main" className="page-shell">
          {children}
        </main>
        <footer className="site-footer page-shell">
          <p>
            <strong>Phone:</strong>{' '}
            <a href="tel:+905437444070">+90 543 744 40 70</a>
          </p>
          <address>
            FENERBAHÇE MAH. İĞRİP SK. NO: 13 İÇ KAPI NO: 1 KADIKÖY/İSTANBUL
          </address>
        </footer>
      </body>
    </html>
  );
}

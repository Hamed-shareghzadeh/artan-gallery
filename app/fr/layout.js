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
  title: 'Velours italien — première en Turquie par Artan Gallery.',
  description: 'L’art ne se voit pas seulement — il se ressent.',
  openGraph: {
    title: 'Velours italien — première en Turquie par Artan Gallery.',
    description: 'L’art ne se voit pas seulement — il se ressent.'
  },
  twitter: {
    card: 'summary',
    title: 'Velours italien — première en Turquie par Artan Gallery.',
    description: 'L’art ne se voit pas seulement — il se ressent.'
  }
};

export default function LayoutFR({ children }) {
  return (
    <html lang="fr">
      <body>
        <a className="skip-link" href="#main">Aller au contenu principal</a>
        <header className="site-header page-shell">
          <div className="brand">
            <a href="/tr">Artan Gallery</a>
          </div>
          <nav className="site-nav" aria-label="Navigation principale">
            <ul className="language-switch" aria-label="Sélecteur de langue">
              {languages.map((language) => (
                <li key={language.locale}>
                  <a
                    href={language.href}
                    aria-current={language.locale === 'fr' ? 'page' : undefined}
                  >
                    {language.label}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="contact-links" aria-label="Liens sociaux">
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
            <strong>Téléphone :</strong>{' '}
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

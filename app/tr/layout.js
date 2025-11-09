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
  title: 'İtalyan kadifesi, Türkiye’de ilk kez — Artan Gallery.',
  description: 'Sanat sadece görülmez — hissedilir.',
  openGraph: {
    title: 'İtalyan kadifesi, Türkiye’de ilk kez — Artan Gallery.',
    description: 'Sanat sadece görülmez — hissedilir.'
  },
  twitter: {
    card: 'summary',
    title: 'İtalyan kadifesi, Türkiye’de ilk kez — Artan Gallery.',
    description: 'Sanat sadece görülmez — hissedilir.'
  }
};

export default function LayoutTR({ children }) {
  return (
    <html lang="tr">
      <body>
        <a className="skip-link" href="#main">İçeriğe atla</a>
        <header className="site-header page-shell">
          <div className="brand">
            <a href="/tr">Artan Gallery</a>
          </div>
          <nav className="site-nav" aria-label="Küresel gezinme">
            <ul className="language-switch" aria-label="Dil seçici">
              {languages.map((language) => (
                <li key={language.locale}>
                  <a
                    href={language.href}
                    aria-current={language.locale === 'tr' ? 'page' : undefined}
                  >
                    {language.label}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="contact-links" aria-label="Sosyal bağlantılar">
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
            <strong>Telefon:</strong>{' '}
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

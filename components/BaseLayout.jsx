import '../app/globals.css';

export default function BaseLayout({ children, htmlLang }) {
  return (
    <html lang={htmlLang}>
      <body>
        <header className="header">
          <div className="brand">Artan Gallery</div>
          <nav className="nav">
            <a href="/tr">TR</a>
            <a href="/en">EN</a>
            <a href="/fr">FR</a>
            <a href="https://wa.me/905437444070" target="_blank" rel="noreferrer">WhatsApp</a>
            <a href="https://instagram.com/artangallery.tr" target="_blank" rel="noreferrer">Instagram</a>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="footer">
          <div>Telefon: +90 543 744 40 70</div>
          <div>Adres: FENERBAHÇE MAH. İĞRİP SK. NO: 13 İÇ KAPI NO: 1 KADIKÖY/İSTANBUL</div>
        </footer>
      </body>
    </html>
  );
}

import './globals.css';

export const metadata = {
  title: 'Artan Gallery',
  description: 'Italian velvet — first time in Türkiye. Modern, minimal, luxurious wall art.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        <header className="header">
          <div className="brand">Artan Gallery</div>
          <nav className="nav">
            <a href="/tr">TR</a>
            <a href="https://wa.me/905437444070" target="_blank" rel="noopener">WhatsApp</a>
            <a href="https://instagram.com/artangallery.tr" target="_blank" rel="noopener">Instagram</a>
          </nav>
        </header>
        {children}
        <footer className="footer">
          <div>Telefon: +90 543 744 40 70</div>
          <div>Adres: FENERBAHÇE MAH. İĞRİP SK. NO: 13 İÇ KAPI NO: 1 KADIKÖY/İSTANBUL</div>
        </footer>
      </body>
    </html>
  );
}

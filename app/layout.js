import './globals.css';

export const metadata = {
  title: 'Artan Gallery',
  description: 'Italian velvet — first time in Türkiye. Modern, minimal, luxurious wall art.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        {/* Top bar slogan */}
        <div className="topbar">
          <span>“<strong>Italian Velvet</strong> — Türkiye’de ilk kez Artan Gallery” • “Sanat sadece görülmez — hissedilir.”</span>
        </div>

        {/* Sticky Header */}
        <header className="header" role="banner">
          <div className="headin">
            {/* Brand */}
            <a href="/tr" className="brand" aria-label="Artan Gallery Home">
              <div className="brand-badge">AG</div>
              <div>Artan Gallery</div>
            </a>

            {/* Languages */}
            <nav className="langs" aria-label="language">
              <a href="/tr" aria-label="Türkçe">TR</a>
              <a href="/en" aria-label="English">EN</a>
              <a href="/fr" aria-label="Français">FR</a>
            </nav>

            {/* Desktop Nav */}
            <nav className="nav" aria-label="primary">
              {/* مسیر پیش‌فرض به TR؛ کاربر با انتخاب زبان می‌تونه وارد نسخهٔ دیگر بشه */}
              <a href="/tr/shop">Mağaza</a>
              <a href="/tr/ai">AI Room Styler</a>
              <a href="/tr/projects">İç Mimari Projeler</a>
              <a href="/tr">Blog</a>
              <a href="/tr">News</a>
            </nav>

            {/* Actions */}
            <div className="actions">
              <a href="https://wa.me/905437444070" target="_blank" rel="noopener" aria-label="WhatsApp">WhatsApp</a>
              <a href="https://instagram.com/artangallery.tr" target="_blank" rel="noopener" aria-label="Instagram">Instagram</a>

              {/* Mobile burger */}
              <label htmlFor="menu-toggle" className="burger" aria-label="Aç/Kapat Menü">
                <span>Menu</span>
                <span aria-hidden>☰</span>
              </label>
              <input id="menu-toggle" type="checkbox" hidden />
            </div>
          </div>

          {/* Mobile Drawer */}
          <div className="drawer">
            <div className="dcontent">
              <nav className="nav" aria-label="mobile primary">
                <a href="/tr/shop" onClick={closeMenu}>Mağaza</a>
                <a href="/tr/ai" onClick={closeMenu}>AI Room Styler</a>
                <a href="/tr/projects" onClick={closeMenu}>İç Mimari Projeler</a>
                <a href="/tr" onClick={closeMenu}>Blog</a>
                <a href="/tr" onClick={closeMenu}>News</a>
              </nav>
              <div className="actions">
                <a href="/tr" onClick={closeMenu}>TR</a>
                <a href="/en" onClick={closeMenu}>EN</a>
                <a href="/fr" onClick={closeMenu}>FR</a>
                <a href="https://wa.me/905437444070" target="_blank" rel="noopener" onClick={closeMenu}>WhatsApp</a>
                <a href="https://instagram.com/artangallery.tr" target="_blank" rel="noopener" onClick={closeMenu}>Instagram</a>
              </div>
            </div>
          </div>
        </header>

        {children}

        {/* Footer */}
        <footer className="footer" role="contentinfo">
          <div className="footin">
            <div className="fbox">
              <div className="fbrand">
                <div className="fbadge">AG</div>
                <div>
                  <h4>Artan Gallery</h4>
                  <p>İtalyan kadifesi ile lüks, modern ve minimal duvar sanatları. “Sanat sadece görülmez — hissedilir.”</p>
                </div>
              </div>
              <div className="news">
                <input placeholder="E-posta adresiniz" aria-label="E-posta" />
                <button>Abone ol</button>
              </div>
            </div>

            <div className="fbox">
              <h4>Mağaza</h4>
              <ul>
                <li><a href="/tr/shop">Tüm Ürünler</a></li>
                <li><a href="/tr/shop">Yeni Posterler</a></li>
                <li><a href="/tr/shop">Koleksiyonlar</a></li>
                <li><a href="/tr/shop">Aksesuar</a></li>
              </ul>
            </div>

            <div className="fbox">
              <h4>Hizmetler</h4>
              <ul>
                <li><a href="/tr/ai">AI Room Styler</a></li>
                <li><a href="/tr/projects">İç Mimari Projeler</a></li>
                <li><a href="/tr">Galerİ Duvar Rehberi</a></li>
                <li><a href="/tr">Boyut & Çerçeve Seçimi</a></li>
              </ul>
            </div>

            <div className="fbox">
              <h4>İletişim</h4>
              <ul>
                <li><a href="tel:+905437444070">+90 543 744 40 70</a></li>
                <li><a href="https://wa.me/905437444070" target="_blank" rel="noopener">WhatsApp</a></li>
                <li><a href="https://instagram.com/artangallery.tr" target="_blank" rel="noopener">@artangallery.tr</a></li>
                <li>FENERBAHÇE MAH. İĞRİP SK. NO: 13 İÇ KAPI NO: 1 KADIKÖY/İSTANBUL</li>
                <li>Hafta içi: 10:00–19:00</li>
              </ul>
            </div>
          </div>
          <div className="copy">© {new Date().getFullYear()} Artan Gallery — All rights reserved.</div>
        </footer>

        {/* helper to close mobile menu on click */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function closeMenu(){
                var el = document.getElementById('menu-toggle');
                if(el) el.checked = false;
              }
              window.closeMenu = closeMenu;
            `
          }}
        />
      </body>
    </html>
  );
}

import './globals.css';
import Header from '../components/Header'; // ← اضافه شد

export const metadata = {
  title: 'Artan Gallery',
  description: 'Italian velvet — first time in Türkiye. Modern, minimal, luxurious wall art.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        <Header />

        {children}

        {/* Footer همان نسخه‌ای که قبلاً گذاشتیم، بدون onClick */}
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
                <li><a href="/tr">Galeri Duvar Rehberi</a></li>
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
      </body>
    </html>
  );
}

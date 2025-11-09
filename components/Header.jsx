"use client";

import Link from "next/link";
import { useCallback } from "react";

export default function Header() {
  // فقط در کلاینت اجرا می‌شود
  const closeMenu = useCallback(() => {
    const el = document.getElementById("menu-toggle");
    if (el) el.checked = false;
  }, []);

  return (
    <>
      {/* Topbar */}
      <div className="topbar">
        <span>
          “<strong>Italian Velvet</strong> — Türkiye’de ilk kez Artan Gallery”
          • “Sanat sadece görülmez — hissedilir.”
        </span>
      </div>

      {/* Sticky Header */}
      <header className="header" role="banner">
        <div className="headin">
          {/* Brand */}
          <Link href="/tr" className="brand" aria-label="Artan Gallery Home" onClick={closeMenu}>
            <div className="brand-badge">AG</div>
            <div>Artan Gallery</div>
          </Link>

          {/* Languages */}
          <nav className="langs" aria-label="language">
            <Link href="/tr" onClick={closeMenu} aria-label="Türkçe">TR</Link>
            <Link href="/en" onClick={closeMenu} aria-label="English">EN</Link>
            <Link href="/fr" onClick={closeMenu} aria-label="Français">FR</Link>
          </nav>

          {/* Desktop Nav */}
          <nav className="nav" aria-label="primary">
            <Link href="/tr/shop" onClick={closeMenu}>Mağaza</Link>
            <Link href="/tr/ai" onClick={closeMenu}>AI Room Styler</Link>
            <Link href="/tr/projects" onClick={closeMenu}>İç Mimari Projeler</Link>
            <Link href="/tr" onClick={closeMenu}>Blog</Link>
            <Link href="/tr" onClick={closeMenu}>News</Link>
          </nav>

          {/* Actions + Burger */}
          <div className="actions">
            <a href="https://wa.me/905437444070" target="_blank" rel="noopener">WhatsApp</a>
            <a href="https://instagram.com/artangallery.tr" target="_blank" rel="noopener">Instagram</a>

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
              <Link href="/tr/shop" onClick={closeMenu}>Mağaza</Link>
              <Link href="/tr/ai" onClick={closeMenu}>AI Room Styler</Link>
              <Link href="/tr/projects" onClick={closeMenu}>İç Mimari Projeler</Link>
              <Link href="/tr" onClick={closeMenu}>Blog</Link>
              <Link href="/tr" onClick={closeMenu}>News</Link>
            </nav>
            <div className="actions">
              <Link href="/tr" onClick={closeMenu}>TR</Link>
              <Link href="/en" onClick={closeMenu}>EN</Link>
              <Link href="/fr" onClick={closeMenu}>FR</Link>
              <a href="https://wa.me/905437444070" target="_blank" rel="noopener" onClick={closeMenu}>WhatsApp</a>
              <a href="https://instagram.com/artangallery.tr" target="_blank" rel="noopener" onClick={closeMenu}>Instagram</a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

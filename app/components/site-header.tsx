"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "./language-provider";
import { routeKeys } from "../lib/content";

export function SiteHeader() {
  const pathname = usePathname();
  const { language, setLanguage, text } = useLanguage();
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Thanh Long Group home">
        <span className="brand-mark">TL</span>
        <span>
          THANH LONG
          <br />
          <small>GROUP</small>
        </span>
      </Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        {text.nav.map((item, index) => (
          <Link
            className={pathname === routeKeys[index] ? "active" : ""}
            href={routeKeys[index]}
            key={item}
          >
            {item}
          </Link>
        ))}
      </nav>
      <div className="header-actions">
        <div className="language-switch" aria-label="Language switcher">
          <button
            className={language === "vi" ? "active" : ""}
            onClick={() => setLanguage("vi")}
          >
            VI
          </button>
          <span>/</span>
          <button
            className={language === "en" ? "active" : ""}
            onClick={() => setLanguage("en")}
          >
            EN
          </button>
        </div>
        <Link className="menu-button" href="/lien-he" aria-label="Contact">
          ↗
        </Link>
      </div>
    </header>
  );
}

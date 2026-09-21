"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/#catering", label: "Catering" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const OVERLAY_ROUTES = [
  "/gallery",
  "/menu",
  "/about",
  "/contact",
  "/sitemap",
  "/privacy-policy",
  "/ai-policy",
  "/ai-readiness",
];

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.85 21 3 13.15 3 3a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.02l-2.2 2.19z" />
    </svg>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const isOverlayPage = OVERLAY_ROUTES.includes(pathname);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!isOverlayPage) {
      setScrolled(false);
      return;
    }

    const sync = () => {
      setScrolled(window.scrollY > 24);
    };

    sync();
    window.addEventListener("scroll", sync, { passive: true });
    return () => window.removeEventListener("scroll", sync);
  }, [isOverlayPage]);

  const classes = [
    "site-header",
    isOverlayPage ? "site-header--overlay" : "",
    isOverlayPage && scrolled ? "is-scrolled" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={classes}>
      <div className="menu-shell">
        <Link href="/" className="logo-link">
          <Image
            className="header-logo"
            src="/images/logo.png"
            alt="Scrambler's Diner"
            width={201}
            height={201}
            priority
            style={{ width: "auto", height: "var(--header-logo-h)" }}
          />
        </Link>
        <nav>
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : link.href.startsWith("/#")
                  ? false
                  : pathname === link.href;
            return (
              <Link key={link.href} href={link.href} className={active ? "is-active" : undefined}>
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="header-actions">
          <a href="tel:4178864224" className="header-phone">
            <PhoneIcon />
            <span>417-886-4224</span>
          </a>
          <Link href="/menu" className="header-menu-btn">
            View our Menu
          </Link>
        </div>
      </div>
    </header>
  );
}

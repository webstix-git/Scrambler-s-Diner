import Link from "next/link";
import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <Image
            src="/images/logo.png"
            alt="Scrambler's Diner"
            width={266}
            height={196}
            className="footer-logo"
          />
          <p className="footer-tag">Springfield, Missouri since 1997.</p>
          <div className="social-row">
            <a
              href="https://www.facebook.com/scramblersdiner417"
              className="social-btn"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2.2V12h2.2V9.8c0-2.2 1.3-3.4 3.3-3.4.96 0 1.96.17 1.96.17v2.16h-1.1c-1.09 0-1.43.68-1.43 1.37V12h2.43l-.39 2.9h-2.04v7A10 10 0 0022 12z" />
              </svg>
            </a>
            <a
              href="https://www.doordash.com/store/scramblers-springfield-403703/23639549/"
              className="social-btn"
              aria-label="DoorDash"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
              </svg>
            </a>
          </div>
        </div>
        <div>
          <p className="footer-label">Quick Links</p>
          <div className="footer-links">
            <Link href="/">Home</Link>
            <Link href="/menu">Menu</Link>
            <Link href="/#catering">Catering</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact Us</Link>
          </div>
        </div>
        <div>
          <p className="footer-label">Visit Us</p>
          <div className="footer-links">
            <a
              href="https://www.google.com/maps/search/?api=1&query=1131+E.+Republic+Rd+Springfield+MO+65807"
              target="_blank"
              rel="noopener noreferrer"
            >
              1131 E. Republic Rd
              <br />
              Springfield, MO 65807
            </a>
            <a href="tel:4178864224">417-886-4224</a>
            <a href="mailto:scrambco@aol.com">scrambco@aol.com</a>
          </div>
        </div>
        <div>
          <p className="footer-label">Restaurant Hours</p>
          <p className="footer-hours">
            Mon-Sat 6:00 AM - 2:00 PM
            <br />
            Sun 7:00 AM - 2:00 PM
          </p>
        </div>
      </div>
      <div className="footer-rule" />
      <div className="footer-bar">
        <span>© 2026 Scrambler&apos;s Diner. All rights reserved.</span>
        <span className="sep">|</span>
        <Link href="/sitemap">Sitemap</Link>
        <span className="sep">|</span>
        <Link href="/privacy-policy">Privacy Policy</Link>
        <span className="sep">|</span>
        <Link href="/ai-policy">AI Policy</Link>
        <span className="sep">|</span>
        <Link href="/ai-readiness">AI Readiness Service Index</Link>
      </div>
    </footer>
  );
}

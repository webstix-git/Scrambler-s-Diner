'use client';

import { useEffect, useRef } from 'react';
import './page.css';

const HTML = `<header class="site-header" id="site-header">
  <div class="menu-shell">
    <a href="/" class="logo-link"><img class="header-logo" src="/Logo.png" alt="Scrambler's Diner"></a>
    <nav>
      <a href="/">Home</a>
      <a href="/menu">Menu</a>
      <a href="/catering" class="is-active">Catering</a>
      <a href="/gallery">Gallery</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
    </nav>
    <div class="header-actions">
      <a href="tel:4178864224" class="header-phone"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.85 21 3 13.15 3 3a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.02l-2.2 2.19z"/></svg><span>417-886-4224</span></a>
      <a href="/contact" class="header-menu-btn">Request a Quote</a>
    </div>
  </div>
</header>
<section class="page-hero">
  <img class="hero-bg" src="/images/buffet.jpg" alt="Scrambler's catering buffet">
  <div class="page-hero-shade"></div>
  <div class="page-hero-inner">
    <h1 class="page-title">Catering</h1>
  </div>
</section>
<div class="page-shell page-breadcrumb-wrap"><nav class="page-breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span class="page-breadcrumb-sep" aria-hidden="true">/</span><span class="page-breadcrumb-current">Catering</span></nav></div>
<main class="about-page">
  <section class="about-band">
    <div class="about-inner about-split">
      <figure class="about-media">
        <img class="about-photo" src="/images/buffet.jpg" alt="Catering buffet at Scrambler's Diner">
      </figure>
      <div class="about-copy">
        <p class="about-kicker">Springfield, Missouri</p>
        <h2>We'll bring breakfast to your meeting.</h2>
        <p class="cater-lede">Scrambler's caters all breakfast events, with plenty of eggs, pancakes, waffles, French toast, and more. Pricing is competitive, and delivery and setup are free.</p>
        <p class="cater-lede">Several lunch items are available too. For private evening parties and fundraisers at the restaurant, you pick the menu and we prepare it.</p>
        <div class="cater-pills">
          <span>Business meetings</span>
          <span>Fundraisers</span>
          <span>Private parties</span>
          <span>Group events</span>
        </div>
      </div>
    </div>
  </section>

  <section class="about-band about-band-warm">
    <div class="about-inner">
      <header class="about-section-head">
        <p class="about-kicker">Breakfast catering</p>
        <h2>Morning spreads people finish</h2>
      </header>
      <div class="cater-menu-grid">
        <article class="cater-dish">
          <h3>Traditional</h3>
          <p>Eggs, hash browns, bacon, sausage patties, biscuits and gravy. Add juice and fruit for an extra charge.</p>
        </article>
        <article class="cater-dish">
          <h3>Freshness</h3>
          <p>Fruit trays, orange juice, bagels, muffins, jellies, and cream cheese. Add yogurt or cottage cheese for an extra charge.</p>
        </article>
        <article class="cater-dish">
          <h3>Nina's Breakfast Casserole</h3>
          <p>The famous casserole that has been a staple at Scrambler's for years.</p>
        </article>
      </div>
      <p class="cater-note">Pancakes, waffles, French toast, and other breakfast favorites are available too. Tell us the size of your group and we'll help you build the spread.</p>
    </div>
  </section>

  <section class="about-band cater-entrees">
    <div class="about-inner">
      <header class="about-section-head">
        <p class="about-kicker">Event entrees</p>
        <h2>Lunch and after-hours menus</h2>
        <p class="cater-lede">You pick the menu and we prepare it — sandwiches, roasts, and sides for meetings, parties, and fundraisers.</p>
      </header>
      <div class="cater-entrees-split">
        <div class="cater-menu-grid cater-menu-grid-2">
          <article class="cater-dish">
            <h3>Ribeye Steak Sandwiches</h3>
            <p>Sauteed mushrooms, Swiss cheese, and chips.</p>
          </article>
          <article class="cater-dish">
            <h3>Fried Chicken</h3>
            <p>Mashed potatoes, gravy, green beans, and rolls.</p>
          </article>
          <article class="cater-dish">
            <h3>Boston Butt Roast</h3>
            <p>Carrots, potatoes, gravy, and celery.</p>
          </article>
          <article class="cater-dish">
            <h3>Sliced Roast Beef</h3>
            <p>Mashed potatoes, gravy, green beans, and rolls.</p>
          </article>
          <article class="cater-dish">
            <h3>Lasagna</h3>
            <p>Green beans and garlic bread.</p>
          </article>
          <article class="cater-dish">
            <h3>Chicken Salad Sandwich</h3>
            <p>Served on croissants with chips.</p>
          </article>
          <article class="cater-dish">
            <h3>BBQ Beef</h3>
            <p>Potato salad and cole slaw.</p>
          </article>
          <article class="cater-dish">
            <h3>Fruit Trays</h3>
            <p>When in season.</p>
          </article>
        </div>
        <figure class="cater-entrees-media">
          <img src="/images/burger.jpg" alt="Burger and fries from Scrambler's Diner">
        </figure>
      </div>
    </div>
  </section>

  <section class="about-band about-band-navy">
    <div class="about-inner about-split">
      <figure class="about-media">
        <img class="about-photo" src="/images/dining-room.webp" alt="Scrambler's Diner dining room">
      </figure>
      <div class="about-copy">
        <p class="about-kicker about-kicker-light">Private parties</p>
        <h2>Host it here after hours</h2>
        <ul class="about-list">
          <li>Facilities available for private parties after restaurant hours</li>
          <li>You pick the menu and we prepare it</li>
          <li>A strong fit for school and team fundraisers</li>
          <li>Free delivery and setup when we come to you</li>
        </ul>
        <p class="about-signoff">Call 417-886-4224 to start a quote</p>
      </div>
    </div>
  </section>

</main>

<section class="page-cta">
  <img class="cta-bg" src="/inside-assets/cta-food.jpg" alt="">
  <div class="page-cta-shade"></div>
  <div class="page-cta-inner">
    <p class="eyebrow">Pull up a chair</p>
    <h2>Ready to feed the room?</h2>
    <p>Tell us the date, headcount, and what you'd like on the table. We'll put a quote together.</p>
    <div class="page-cta-btns">
      <a class="btn-white" href="/contact">Request a Catering Quote</a>
      <a class="btn-outline-light" href="tel:4178864224">Call 417-886-4224</a>
    </div>
  </div>
</section>
<footer class="site-footer footer--franklin footer--fw">
  <div class="footer-fw">
    <div class="footer-fw__brand">
      <div class="footer-fw__identity">
        <img src="/Logo.png" alt="Scrambler's Diner">
        <div>
          <p class="footer-fw__name">Scrambler's Diner</p>
          <p class="footer-fw__tag">Breakfast &amp; lunch · Est. 1997</p>
        </div>
      </div>
      
      <div class="footer-fw__follow">
        <span>Follow us on:</span>
        <a href="https://www.facebook.com/scramblersdiner417" aria-label="Facebook"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 10-11.5 9.9v-7h-2.2V12h2.2V9.8c0-2.2 1.3-3.4 3.3-3.4.96 0 1.96.17 1.96.17v2.16h-1.1c-1.09 0-1.43.68-1.43 1.37V12h2.43l-.39 2.9h-2.04v7A10 10 0 0022 12z"/></svg></a>
        <a href="https://www.doordash.com/store/scramblers-springfield-403703/23639549/" aria-label="DoorDash"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg></a>
      </div>
    </div>
    <div class="footer-fw__hours">
      <p class="footer-fw__heading">Hours</p>
      <p>Mon–Sat 6:00 a.m. – 2:00 p.m.</p>
      <p>Sun 7:00 a.m. – 2:00 p.m.</p>
    </div>
    <div class="footer-fw__links">
      <p class="footer-fw__heading">Quick Links</p>
      <div class="footer-fw__link-grid">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/menu">Menu</a>
        <a href="/testimonials">Reviews</a>
        <a href="/catering">Catering</a>
        <a href="/gallery">Gallery</a>
        <a href="/contact">Contact</a>
      </div>
    </div>
  
    <div class="footer-fw__visit">
      <p class="footer-fw__heading">Visit Us</p>
      <a class="footer-fw__line" href="https://www.google.com/maps/search/?api=1&query=1131+E.+Republic+Rd+Springfield+MO+65807" target="_blank" rel="noopener"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/></svg><span>1131 E. Republic Rd<br>Springfield, MO 65807</span></a>
      <a class="footer-fw__line" href="tel:4178864224"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.85 21 3 13.15 3 3a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.02l-2.2 2.19z"/></svg><span>417-886-4224</span></a>
      <a class="footer-fw__line" href="mailto:scrambco@aol.com"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5L4 8V6l8 5 8-5v2z"/></svg><span>scrambco@aol.com</span></a>
    </div>
  </div>
  <div class="footer-bar">
    <div>
      <span>© 2026 Scrambler's Diner. All rights reserved.</span>
      <span class="sep">|</span>
      <a href="/sitemap">Sitemap</a>
      <span class="sep">|</span>
      <a href="/privacy-policy">Privacy Policy</a>
      <span class="sep">|</span>
      <a href="/ai-policy">AI Policy</a>
      <span class="sep">|</span>
      <a href="/ai-readiness">AI Readiness Service Index</a>
    </div>
  </div>
</footer>`;

const SCRIPTS = [
  `
(function () {
  var header = document.getElementById('site-header');
  if (!header) return;
  function sync() {
    var y = window.pageYOffset || document.documentElement.scrollTop || 0;
    header.classList.toggle('is-scrolled', y > 24);
  }
  window.addEventListener('scroll', sync, { passive: true });
  window.addEventListener('load', sync);
  sync();
})();
`,
];

export default function Page() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    for (const code of SCRIPTS) {
      try {
        // eslint-disable-next-line no-new-func
        new Function(code)();
      } catch (e) {
        console.error('Page script error', e);
      }
    }
  }, []);

  return <div ref={ref} dangerouslySetInnerHTML={{ __html: HTML }} />;
}

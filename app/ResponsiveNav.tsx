'use client';

import { useEffect } from 'react';

/**
 * Enhances existing .site-header markup with a hamburger + mobile drawer
 * below 1024px. Does not change page content or desktop layout.
 */
export default function ResponsiveNav() {
  useEffect(() => {
    const MQ = '(max-width: 1023px)';

    function findHeader() {
      return (
        document.getElementById('site-header') ||
        document.querySelector('.site-header')
      );
    }

    function ensure() {
      const header = findHeader();
      if (!header) return null;

      const shell =
        header.querySelector('.menu-shell') ||
        (header.firstElementChild as HTMLElement | null);
      if (!shell) return null;

      const nav = shell.querySelector('nav');
      if (!nav) return null;

      let toggle = header.querySelector('.nav-toggle') as HTMLButtonElement | null;
      if (!toggle) {
        toggle = document.createElement('button');
        toggle.type = 'button';
        toggle.className = 'nav-toggle';
        toggle.setAttribute('aria-label', 'Open menu');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-controls', 'mobile-nav-panel');
        toggle.innerHTML =
          '<span class="nav-toggle__bar" aria-hidden="true"></span>' +
          '<span class="nav-toggle__bar" aria-hidden="true"></span>' +
          '<span class="nav-toggle__bar" aria-hidden="true"></span>';

        const actions = shell.querySelector('.header-actions');
        if (actions && actions.parentElement === shell) {
          shell.insertBefore(toggle, actions);
        } else {
          shell.appendChild(toggle);
        }
      }

      let panel = document.getElementById('mobile-nav-panel');
      if (!panel) {
        panel = document.createElement('div');
        panel.id = 'mobile-nav-panel';
        panel.className = 'mobile-nav-panel';
        panel.hidden = true;
        panel.setAttribute('role', 'dialog');
        panel.setAttribute('aria-modal', 'true');
        panel.setAttribute('aria-label', 'Site navigation');

        const inner = document.createElement('div');
        inner.className = 'mobile-nav-panel__inner';

        const closeBtn = document.createElement('button');
        closeBtn.type = 'button';
        closeBtn.className = 'mobile-nav-panel__close';
        closeBtn.setAttribute('aria-label', 'Close menu');
        closeBtn.innerHTML = '×';

        const list = document.createElement('nav');
        list.className = 'mobile-nav-panel__links';
        list.setAttribute('aria-label', 'Mobile');

        nav.querySelectorAll('a').forEach((a) => {
          const clone = a.cloneNode(true) as HTMLAnchorElement;
          clone.removeAttribute('style');
          list.appendChild(clone);
        });

        const actions = shell.querySelector('.header-actions');
        if (actions) {
          const extras = document.createElement('div');
          extras.className = 'mobile-nav-panel__extras';
          actions.querySelectorAll('a').forEach((a) => {
            const clone = a.cloneNode(true) as HTMLAnchorElement;
            extras.appendChild(clone);
          });
          inner.appendChild(closeBtn);
          inner.appendChild(list);
          inner.appendChild(extras);
        } else {
          inner.appendChild(closeBtn);
          inner.appendChild(list);
        }

        panel.appendChild(inner);
        document.body.appendChild(panel);
      }

      return { header, toggle, panel, nav };
    }

    function setOpen(open: boolean) {
      const parts = ensure();
      if (!parts) return;
      const { header, toggle, panel } = parts;
      header.classList.toggle('nav-is-open', open);
      document.body.classList.toggle('nav-lock', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      panel.hidden = !open;
      panel.classList.toggle('is-open', open);
    }

    function onToggle(e: Event) {
      e.preventDefault();
      e.stopPropagation();
      const header = findHeader();
      if (!header) return;
      setOpen(!header.classList.contains('nav-is-open'));
    }

    function onDocClick(e: MouseEvent) {
      const header = findHeader();
      if (!header || !header.classList.contains('nav-is-open')) return;
      const t = e.target as Node;
      const panel = document.getElementById('mobile-nav-panel');
      const toggle = header.querySelector('.nav-toggle');
      if (panel && panel.contains(t)) {
        const a = (e.target as HTMLElement).closest('a');
        if (a) setOpen(false);
        return;
      }
      if (toggle && toggle.contains(t)) return;
      setOpen(false);
    }

    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }

    function onResize() {
      if (!window.matchMedia(MQ).matches) setOpen(false);
    }

    let parts = ensure();
    const bind = () => {
      parts = ensure();
      if (!parts) return;
      parts.toggle.onclick = onToggle;
      const close = parts.panel.querySelector('.mobile-nav-panel__close') as HTMLButtonElement | null;
      if (close) close.onclick = () => setOpen(false);
    };

    bind();
    document.addEventListener('click', onDocClick);
    document.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);

    // Re-bind after client HTML injection (pages use useEffect scripts)
    const mo = new MutationObserver(() => {
      if (!document.querySelector('.nav-toggle') || !document.getElementById('mobile-nav-panel')) {
        bind();
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    const t1 = window.setTimeout(bind, 50);
    const t2 = window.setTimeout(bind, 300);

    return () => {
      document.removeEventListener('click', onDocClick);
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
      mo.disconnect();
      clearTimeout(t1);
      clearTimeout(t2);
      setOpen(false);
    };
  }, []);

  return null;
}

import Link from "next/link";
import { BannerHero } from "@/components/BannerHero";
import styles from "./legal.module.css";

export const metadata = { title: "Sitemap" };

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact Us" },
  { href: "/#catering", label: "Catering" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/ai-policy", label: "AI Policy" },
  { href: "/ai-readiness", label: "AI Readiness Service Index" },
];

export default function SitemapPage() {
  return (
    <>
      <BannerHero
        eyebrow="Find your way"
        title="Sitemap"
        lead="Every page on Scrambler's Diner, in one place."
        imageSrc="/images/home-hero.jpg"
        imageAlt="Scrambler's Diner"
      />
      <div className="page-body narrow">
        <ul className={styles.sitemapList}>
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import menu from "@/data/menu.json";
import styles from "./menu.module.css";

const cats = [
  { href: "#classics", label: "Breakfast Classics" },
  { href: "#omelets", label: "Four Egg Omelets" },
  { href: "#benedicts", label: "Benedicts & Scramwiches" },
  { href: "#griddle", label: "Pancakes & Waffles" },
  { href: "#skillets", label: "Skillets" },
  { href: "#lunch", label: "Sandwiches & Salads" },
  { href: "#drinks", label: "Beverages" },
];

const sectionMedia: Record<
  string,
  { src: string; alt: string; caption?: string; transparent?: boolean } | undefined
> = {
  skillets: {
    src: "/images/1788474594911-Eggs Benedict hashbrowns.png",
    alt: "Eggs Benedict over hashbrowns",
    caption: "Hot cast-iron skillets, piled high.",
    transparent: true,
  },
  lunch: {
    src: "/images/1788474590984-Chef Salad.png",
    alt: "Lauren's Chef Salad",
    caption: "Fresh salads and lunch favorites.",
    transparent: true,
  },
  drinks: {
    src: "/images/1788474594376-Drink.png",
    alt: "Ice-cold Coca-Cola",
    caption: "Coffee, tea, juices and soft drinks - all day.",
    transparent: true,
  },
};

export const metadata = {
  title: "Menu",
};

export default function MenuPage() {
  return (
    <>
      <section className={styles.hero}>
        <Image
          src="/images/menu-hero.jpg"
          alt="Scramblers Diner breakfast"
          fill
          priority
          className={styles.heroImg}
          sizes="100vw"
        />
        <div className={styles.heroShade} />
        <div className={`container ${styles.heroContent}`}>
          <p className="eyebrow eyebrow-light">Scrambler&apos;s Diner Menu</p>
          <h1>Breakfast &amp; lunch worth the drive</h1>
        </div>
      </section>

      <section className={styles.cats}>
        <div className={`container ${styles.catsInner}`}>
          <nav>
            {cats.map((cat) => (
              <a key={cat.href} href={cat.href}>
                {cat.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {menu.map((section, index) => {
        const media = sectionMedia[section.id];
        const altBg = index % 2 === 1;
        return (
          <section
            key={section.id}
            id={section.id}
            className={`${styles.section} ${altBg ? styles.sectionAlt : ""}`}
          >
            <div className={`container ${media ? styles.sectionGrid : ""}`}>
              <div>
                <div className={styles.sectionHead}>
                  {section.eyebrow ? (
                    <p className="eyebrow">{section.eyebrow.replace(/&amp;/g, "&")}</p>
                  ) : null}
                  <h2>{section.title}</h2>
                </div>
                {"note" in section && typeof section.note === "string" ? (
                  <p className={styles.sectionNote}>{section.note}</p>
                ) : null}
                <div className={styles.itemList}>
                  {section.items.map((item) => (
                    <div key={item.name} className={styles.item}>
                      <div className={styles.itemRow}>
                        <span className={styles.itemName}>{item.name}</span>
                        <span className={styles.dots} />
                        <span className={styles.price}>{item.price.replace(/^\$/, "")}</span>
                      </div>
                      {"description" in item && item.description ? (
                        <p className={styles.desc}>{item.description}</p>
                      ) : null}
                      {"extras" in item && Array.isArray(item.extras)
                        ? item.extras.map((extra) => (
                            <p key={extra} className={styles.extra}>
                              {extra}
                            </p>
                          ))
                        : null}
                    </div>
                  ))}
                </div>
                {"footerNote" in section && typeof section.footerNote === "string" ? (
                  <p className={styles.footerNote}>{section.footerNote}</p>
                ) : null}
              </div>
              {media ? (
                <figure className={styles.figure}>
                  <div
                    className={`${styles.figureImg} ${media.transparent ? styles.figureImgClear : ""}`}
                  >
                    <Image
                      src={media.src}
                      alt={media.alt}
                      width={640}
                      height={480}
                      className={`${styles.mediaImg} ${media.transparent ? styles.mediaImgClear : ""}`}
                    />
                  </div>
                  {media.caption ? <figcaption>{media.caption}</figcaption> : null}
                </figure>
              ) : null}
            </div>
          </section>
        );
      })}

      <section className={styles.cta}>
        <Image
          src="/images/cta-food.jpg"
          alt="Scramblers breakfast skillet and waffle"
          fill
          className={styles.ctaImg}
          sizes="100vw"
        />
        <div className={styles.ctaShade} />
        <div className={`container ${styles.ctaInner}`}>
          <div>
            <p className="eyebrow eyebrow-light">Catering &amp; Banquets</p>
            <h2>Available at all times!</h2>
            <p>Free delivery and setup for business meetings, fundraisers, private parties and group events.</p>
          </div>
          <div className={styles.ctaBtns}>
            <Link href="/contact" className="btn btn-white">
              Request a Quote
            </Link>
            <a href="tel:4178864224" className="btn btn-outline-light">
              Call 417-886-4224
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

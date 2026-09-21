import Image from "next/image";
import { BannerHero } from "@/components/BannerHero";
import { PageCta } from "@/components/PageCta";
import styles from "./about.module.css";

export const metadata = { title: "About Us" };

const ABOUT_PHOTO = {
  src: "/images/dining-room.webp",
  alt: "Inside Scrambler's Diner dining room",
};

const COMMUNITY_PHOTO = {
  src: "/images/buffet.jpg",
  alt: "Scrambler's catering buffet",
};

const beginningCards = [
  {
    title: "Built for everyone",
    text: "A family-owned business with breakfast options for every appetite at the table.",
  },
  {
    title: "53+ years of know-how",
    text: "Bill and Julie Cox bring over half a century in restaurants between them.",
  },
  {
    title: "Rooted in community",
    text: "Always involved locally, especially schools and fundraisers across Springfield.",
  },
  {
    title: "First jobs that matter",
    text: "We love hiring young people and watching them grow into pillars of the communities they grew up in.",
  },
];

export default function AboutPage() {
  return (
    <>
      <BannerHero
        title="About Us"
        imageSrc={ABOUT_PHOTO.src}
        imageAlt={ABOUT_PHOTO.alt}
      />

      <div className={styles.page}>
        {/* Intro: 50/50 image left, content right */}
        <section className={styles.band}>
          <div className={`container ${styles.split}`}>
            <figure className={styles.media}>
              <Image
                src={ABOUT_PHOTO.src}
                alt={ABOUT_PHOTO.alt}
                width={900}
                height={720}
                className={styles.photo}
                sizes="(max-width: 900px) 100vw, 50vw"
                priority
              />
            </figure>
            <div className={styles.copy}>
              <p className={styles.kicker}>Since 1997</p>
              <h2>A family table in Springfield</h2>
              <p className={styles.lede}>
                Scrambler&apos;s Diner is a family-owned breakfast and lunch spot in Springfield,
                Missouri, open since January 23, 1997. Bill and Julie Cox built it to be the kind of
                place where everyone finds something they love on the menu, and where first jobs turn
                into lifelong stories.
              </p>
            </div>
          </div>
        </section>

        {/* Our beginning: cards */}
        <section className={`${styles.band} ${styles.bandWarm}`}>
          <div className="container">
            <header className={styles.sectionHead}>
              <p className={styles.kicker}>Our beginning</p>
              <h2>Why we started</h2>
            </header>
            <div className={styles.cardGrid}>
              {beginningCards.map((card) => (
                <article key={card.title} className={styles.card}>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Hometown: 50/50 image left, copy right */}
        <section className={`${styles.band} ${styles.bandNavy}`}>
          <div className={`container ${styles.split}`}>
            <figure className={styles.media}>
              <Image
                src={COMMUNITY_PHOTO.src}
                alt={COMMUNITY_PHOTO.alt}
                width={900}
                height={720}
                className={styles.photo}
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </figure>
            <div className={styles.copy}>
              <p className={`${styles.kicker} ${styles.kickerLight}`}>Our hometown</p>
              <h2>Connected to Springfield</h2>
              <ul className={styles.list}>
                <li>Family-friendly through and through</li>
                <li>Proud partners with Honor Flight of the Ozarks</li>
                <li>Supporters of Missouri State Baseball Bears and Truman State Football</li>
                <li>Grateful for the guests who come back day after day and week after week</li>
              </ul>
              <p className={styles.signoff}>Thank you, Springfield. The Cox Family</p>
            </div>
          </div>
        </section>
      </div>

      <PageCta
        eyebrow="Come sit with us"
        title="You're part of the story."
        copy="Pull up a chair, say hello to the crew, and taste why Springfield keeps coming back."
        imageSrc="/images/cta-dining.webp"
        primaryHref="/contact"
        primaryLabel="Visit Us"
        secondaryHref="/menu"
        secondaryLabel="See the Menu"
      />
    </>
  );
}

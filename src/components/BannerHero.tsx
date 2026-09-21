import Image from "next/image";
import styles from "./BannerHero.module.css";

type BannerHeroProps = {
  eyebrow?: string;
  title: string;
  lead?: string;
  imageSrc: string;
  imageAlt?: string;
};

export function BannerHero({
  eyebrow,
  title,
  lead,
  imageSrc,
  imageAlt = "",
}: BannerHeroProps) {
  return (
    <section className={styles.hero}>
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        className={styles.heroImg}
        sizes="100vw"
      />
      <div className={styles.heroShade} />
      <div className={`container ${styles.heroContent}`}>
        {eyebrow ? <p className="eyebrow eyebrow-light">{eyebrow}</p> : null}
        <h1 className={styles.heroTitle}>{title}</h1>
        {lead ? <p className={styles.heroLead}>{lead}</p> : null}
      </div>
    </section>
  );
}

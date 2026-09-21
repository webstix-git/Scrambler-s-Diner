import Image from "next/image";
import Link from "next/link";
import styles from "./PageCta.module.css";

type PageCtaProps = {
  eyebrow: string;
  title: string;
  copy: string;
  imageSrc: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
};

export function PageCta({
  eyebrow,
  title,
  copy,
  imageSrc,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: PageCtaProps) {
  return (
    <section className={styles.cta}>
      <Image src={imageSrc} alt="" fill className={styles.ctaImg} sizes="100vw" />
      <div className={styles.ctaShade} />
      <div className={`container ${styles.ctaContent}`}>
        <p className="eyebrow eyebrow-light">{eyebrow}</p>
        <h2>{title}</h2>
        <p>{copy}</p>
        <div className={styles.ctas}>
          <Link href={primaryHref} className="btn btn-white">
            {primaryLabel}
          </Link>
          <Link href={secondaryHref} className="btn btn-outline-light">
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}

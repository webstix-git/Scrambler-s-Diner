import { BannerHero } from "@/components/BannerHero";
import { ContactForm } from "./ContactForm";
import styles from "./contact.module.css";

export const metadata = { title: "Contact Us" };

function PinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 11H7v-2h4V6h2v7z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.85 21 3 13.15 3 3a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.02l-2.2 2.19z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5L4 8V6l8 5 8-5v2z" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <>
      <BannerHero
        title="Contact Us"
        imageSrc="/images/cta-dining.webp"
        imageAlt="Scrambler's Diner dining room"
      />
      <section className={styles.section}>
        <div className={`page-body ${styles.body}`}>
          <div className={styles.grid}>
            <ContactForm />

            <aside className={styles.infoBox}>
              <h2>Visit &amp; call</h2>
              <div className={styles.infoBlock}>
                <p className={styles.label}>
                  <PinIcon />
                  Address
                </p>
                <p>
                  <strong>1131 E. Republic Rd</strong>
                  <br />
                  Springfield, MO 65807
                </p>
              </div>
              <div className={styles.infoBlock}>
                <p className={styles.label}>
                  <ClockIcon />
                  Hours
                </p>
                <p>
                  Mon-Sat 6:00 AM - 2:00 PM
                  <br />
                  Sun 7:00 AM - 2:00 PM
                </p>
              </div>
              <div className={styles.infoBlock}>
                <p className={styles.label}>
                  <PhoneIcon />
                  Phone
                </p>
                <p>
                  <a href="tel:4178864224">417-886-4224</a>
                </p>
              </div>
              <div className={styles.infoBlock}>
                <p className={styles.label}>
                  <MailIcon />
                  Email
                </p>
                <p>
                  <a href="mailto:scrambco@aol.com">scrambco@aol.com</a>
                </p>
              </div>
              <div className={styles.infoActions}>
                <a
                  className={`btn btn-yellow ${styles.actionBtn}`}
                  href="https://www.google.com/maps/search/?api=1&query=1131+E.+Republic+Rd+Springfield+MO+65807"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Directions
                </a>
                <a className={`btn btn-outline-dark ${styles.actionBtn}`} href="tel:4178864224">
                  Call Now
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

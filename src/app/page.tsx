import Link from "next/link";
import Image from "next/image";
import reviews from "@/data/reviews.json";
import styles from "./home.module.css";

const griddleDishes = [
  { src: "/images/custom-omelet.jpg", title: "Four-egg omelets", blurb: "Built the way you like them." },
  { src: "/images/pancakes-with-syrup.jpg", title: "Pancakes & waffles", blurb: "Hot off the griddle." },
  { src: "/images/skillet.jpg", title: "Cast-iron skillets", blurb: "Hearty plates that stick with you." },
  { src: "/images/burger.jpg", title: "Burgers & lunch", blurb: "From the grill until 2pm." },
  { src: "/images/chef-salad.jpg", title: "Salads", blurb: "Fresh, piled high, and satisfying." },
  { src: "/images/french-toast.jpg", title: "French toast", blurb: "Sweet starts done right." },
];

export default function HomePage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroContent}>
            <p className="eyebrow">Springfield, Missouri · Since 1997</p>
            <h1 className={styles.heroTitle}>
              Omelets, skillets
              <br />
              &amp; pancakes
            </h1>
            <p className={styles.heroCopy}>
              Scrambler&apos;s Diner is a family-owned restaurant serving breakfast and lunch in
              Springfield, Missouri. Fresh meals in a friendly, welcoming atmosphere.
            </p>
            <div className={styles.heroCtas}>
              <Link href="/menu" className="btn btn-outline-dark">
                See the Menu
              </Link>
              <Link href="/contact" className="btn btn-yellow">
                Visit Us
              </Link>
            </div>
          </div>
          <div className={styles.heroVisual} aria-hidden="false">
            <Image
              src="/images/scramblers-blob.png"
              alt="Scrambler's Diner storefront sign"
              width={640}
              height={640}
              priority
              className={styles.heroBlob}
            />
          </div>
        </div>
      </section>

      <section id="visit" className={styles.visit}>
        <div className="container">
          <div className={styles.sectionHead}>
            <p className="eyebrow eyebrow-light">What we do</p>
            <h2>Three ways to eat with us</h2>
            <p>Whether it&apos;s a booth for two or breakfast for a hundred, we&apos;ve got a plate for it.</p>
          </div>
          <div className={styles.visitGrid}>
            {[
              {
                title: "Dine in",
                text: "Pull up a chair for omelets, skillets, pancakes, and lunch classics until 2pm.",
              },
              {
                title: "Catering",
                text: "Free delivery and setup for meetings, fundraisers, parties, and group events.",
              },
              {
                title: "DoorDash",
                text: "Craving Scrambler's at home? Order delivery through DoorDash.",
              },
            ].map((card) => (
              <article key={card.title} className={styles.visitCard}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.griddle}>
        <div className="container">
          <p className="eyebrow">Off the griddle</p>
          <h2 className={styles.sectionTitle}>Favorites worth driving for</h2>
          <div className={styles.griddleGrid}>
            {griddleDishes.map((dish) => (
              <article key={dish.title} className={styles.griddleCard}>
                <div className={styles.griddleImgWrap}>
                  <Image src={dish.src} alt={dish.title} fill className={styles.griddleImg} sizes="33vw" />
                </div>
                <h3>{dish.title}</h3>
                <p>{dish.blurb}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.story}>
        <div className={`container ${styles.storyGrid}`}>
          <div>
            <p className="eyebrow">Our story</p>
            <h2 className={styles.sectionTitle}>A family business, built on breakfast</h2>
            <p>
              Bill and Julie Cox have a combined total of over 53 years in the restaurant business and
              have always been involved in the local communities, especially the school systems through
              fundraisers.
            </p>
            <p>
              They love working with the young kids starting their first job. It has been an extreme joy
              watching these kids grow up and go out to be successful pillars in the communities that
              they grew up in.
            </p>
            <div className={styles.pills}>
              <span>God</span>
              <span>Family</span>
              <span>School</span>
              <span>Work</span>
            </div>
            <Link href="/about" className="btn btn-outline-dark">
              Read more about us
            </Link>
          </div>
          <div className={styles.storyImgWrap}>
            <Image
              src="/images/dining-room.webp"
              alt="Inside Scrambler's Diner"
              fill
              className={styles.storyImg}
              sizes="50vw"
            />
          </div>
        </div>
      </section>

      <section id="testimonials" className={styles.testimonials}>
        <div className="container">
          <p className="eyebrow">Guest love</p>
          <h2 className={styles.sectionTitle}>What Springfield is saying</h2>
          <div className={styles.reviewGrid}>
            {reviews.slice(0, 6).map((review) => (
              <article key={review.name + review.text.slice(0, 24)} className={styles.reviewCard}>
                <div className={styles.reviewTop}>
                  <div className={styles.avatar}>{review.name.charAt(0)}</div>
                  <p className={styles.reviewName}>{review.name}</p>
                </div>
                <p className={styles.reviewText}>{review.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="catering" className={styles.catering}>
        <div className="container">
          <p className="eyebrow eyebrow-light">Catering &amp; banquets</p>
          <h2>Available at all times!</h2>
          <p>
            Free delivery and setup for business meetings, fundraisers, private parties and group
            events.
          </p>
          <div className={styles.heroCtas}>
            <Link href="/contact" className="btn btn-white">
              Request a Quote
            </Link>
            <a href="tel:4178864224" className="btn btn-outline-light">
              Call 417-886-4224
            </a>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <Image src="/images/cta-dining.webp" alt="" fill className={styles.ctaImg} sizes="100vw" />
        <div className={styles.ctaShade} />
        <div className={`container ${styles.ctaContent}`}>
          <p className="eyebrow eyebrow-light">Pull up a chair</p>
          <h2>Breakfast worth driving for.</h2>
          <p>Four-egg omelets, skillets, and homemade toast - open daily until 2pm.</p>
          <div className={styles.heroCtas}>
            <Link href="/menu" className="btn btn-white">
              See the Menu
            </Link>
            <Link href="/contact" className="btn btn-outline-light">
              Find Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

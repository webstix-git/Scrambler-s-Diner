import { BannerHero } from "@/components/BannerHero";
import { PageCta } from "@/components/PageCta";
import { GalleryGrid } from "./GalleryGrid";
import styles from "./gallery.module.css";

export const metadata = { title: "Gallery" };

const items = [
  { src: "/images/dining-room.webp", caption: "Dining room" },
  { src: "/images/scramblers-diner-on-e-republic-rd.jpg", caption: "Breakfast spread" },
  { src: "/images/cast-iron-skillet-breakfast.jpg", caption: "Cast-iron skillet" },
  { src: "/images/pancakes-with-syrup.jpg", caption: "Pancakes" },
  { src: "/images/custom-omelet.jpg", caption: "Custom omelet" },
  { src: "/images/burger.jpg", caption: "Burgers & lunch" },
  { src: "/images/lauren-s-chef-salad.jpg", caption: "Chef salad" },
  { src: "/images/ice-cold-coca-cola.jpg", caption: "Something to drink" },
  { src: "/images/scramblers-breakfast-skillet-and-waffle.jpg", caption: "Skillet & waffle" },
  { src: "/images/french-toast.jpg", caption: "French toast" },
  { src: "/images/breakfast-1.jpg", caption: "Morning favorites" },
  { src: "/images/breakfast-2.jpg", caption: "Classic breakfast" },
  { src: "/images/breakfast-3.jpg", caption: "Eggs & sides" },
  { src: "/images/skillet.jpg", caption: "Hot skillet" },
  { src: "/images/buffet.jpg", caption: "Catering buffet" },
];

export default function GalleryPage() {
  return (
    <>
      <BannerHero
        title="Gallery"
        imageSrc="/images/gallery-hero.jpg"
        imageAlt="Scrambler's catering and refreshment station"
      />

      <div className={`page-body ${styles.body}`}>
        <GalleryGrid items={items} />
      </div>

      <PageCta
        eyebrow="Hungry yet?"
        title="See it on a plate."
        copy="From four-egg omelets to cast-iron skillets. Pull up a chair and taste what you just scrolled past."
        imageSrc="/images/cta-food.jpg"
        primaryHref="/menu"
        primaryLabel="See the Menu"
        secondaryHref="/contact"
        secondaryLabel="Visit Us"
      />
    </>
  );
}

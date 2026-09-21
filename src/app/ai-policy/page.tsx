import { BannerHero } from "@/components/BannerHero";

export const metadata = { title: "AI Policy" };

export default function AiPolicyPage() {
  return (
    <>
      <BannerHero
        eyebrow="Legal"
        title="AI Policy"
        lead="Last updated: September 21, 2026"
        imageSrc="/images/menu-hero.jpg"
        imageAlt="Breakfast at Scrambler's Diner"
      />
      <div className="page-body narrow">
        <h2>Our use of AI</h2>
        <p>
          Scrambler&apos;s Diner may use artificial intelligence tools to help draft website copy,
          organize menu content, and support marketing design. AI assists our team; it does not
          replace our people, recipes, or hospitality.
        </p>
        <h2>Guest data</h2>
        <p>
          We do not use AI systems to make automated decisions about individual guests that produce
          legal or similarly significant effects. We do not upload confidential guest payment data to
          public AI tools.
        </p>
        <h2>Accuracy</h2>
        <p>
          Menu prices, hours, and allergen information published on this site are maintained by
          Scrambler&apos;s staff. If anything looks incorrect, please call 417-886-4224 so we can fix
          it.
        </p>
        <h2>Transparency</h2>
        <p>
          When AI-assisted content is material to how we communicate online, we aim to keep messaging
          consistent with our family-owned values: God, Family, School, Work.
        </p>
        <h2>Contact</h2>
        <p>
          Questions: <a href="mailto:scrambco@aol.com">scrambco@aol.com</a>.
        </p>
      </div>
    </>
  );
}

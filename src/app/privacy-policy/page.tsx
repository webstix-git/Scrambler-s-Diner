import { BannerHero } from "@/components/BannerHero";

export const metadata = { title: "Privacy Policy" };

export default function PrivacyPolicyPage() {
  return (
    <>
      <BannerHero
        eyebrow="Legal"
        title="Privacy Policy"
        lead="Last updated: September 21, 2026"
        imageSrc="/images/pancakes-with-syrup.jpg"
        imageAlt="Pancakes at Scrambler's Diner"
      />
      <div className="page-body narrow">
        <h2>Who we are</h2>
        <p>
          Scrambler&apos;s Diner (&quot;we&quot;, &quot;us&quot;) operates the Scrambler&apos;s Diner
          website for our Springfield, Missouri restaurant at 1131 E. Republic Rd.
        </p>
        <h2>Information we collect</h2>
        <p>
          We may collect contact details you voluntarily provide when requesting catering quotes,
          calling us, or emailing scrambco@aol.com. We do not sell personal information.
        </p>
        <h2>How we use information</h2>
        <p>
          We use contact information to respond to inquiries, schedule catering, and improve our guest
          experience. Website analytics, if enabled by our hosting provider, may collect anonymous
          usage data.
        </p>
        <h2>Cookies</h2>
        <p>
          Our site may use essential cookies required for basic function. You can control cookies
          through your browser settings.
        </p>
        <h2>Third parties</h2>
        <p>
          Links to Facebook, DoorDash, or Google Maps are governed by those services&apos; own privacy
          policies.
        </p>
        <h2>Contact</h2>
        <p>
          Questions about privacy: <a href="mailto:scrambco@aol.com">scrambco@aol.com</a> or
          417-886-4224.
        </p>
      </div>
    </>
  );
}

import { BannerHero } from "@/components/BannerHero";

export const metadata = { title: "AI Readiness Service Index" };

export default function AiReadinessPage() {
  return (
    <>
      <BannerHero
        eyebrow="Legal"
        title="AI Readiness Service Index"
        lead="Last updated: September 21, 2026"
        imageSrc="/images/buffet.jpg"
        imageAlt="Scrambler's catering buffet"
      />
      <div className="page-body narrow">
        <p>
          This index summarizes how Scrambler&apos;s Diner approaches responsible use of digital and
          AI-assisted services on our public website.
        </p>
        <table>
          <thead>
            <tr>
              <th>Area</th>
              <th>Status</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Website content drafting</td>
              <td>Assisted</td>
              <td>Human-reviewed before publish</td>
            </tr>
            <tr>
              <td>Menu &amp; pricing source of truth</td>
              <td>Human-owned</td>
              <td>Staff maintains official prices</td>
            </tr>
            <tr>
              <td>Guest personal data in AI tools</td>
              <td>Not used</td>
              <td>No payment or sensitive guest data</td>
            </tr>
            <tr>
              <td>Automated decisioning about guests</td>
              <td>Not used</td>
              <td>No AI credit, hiring, or eligibility decisions</td>
            </tr>
            <tr>
              <td>Third-party platforms</td>
              <td>Linked</td>
              <td>Facebook, DoorDash, Google Maps under their policies</td>
            </tr>
            <tr>
              <td>Accessibility &amp; clarity</td>
              <td>Ongoing</td>
              <td>We welcome feedback to improve the site</td>
            </tr>
          </tbody>
        </table>
        <p>
          For questions about this index, contact{" "}
          <a href="mailto:scrambco@aol.com">scrambco@aol.com</a> or visit us at 1131 E. Republic Rd,
          Springfield, MO.
        </p>
      </div>
    </>
  );
}

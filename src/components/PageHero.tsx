type PageHeroProps = {
  eyebrow: string;
  title: string;
  lead?: string;
};

export function PageHero({ eyebrow, title, lead }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="page-hero-inner">
        <p className="eyebrow eyebrow-light">{eyebrow}</p>
        <h1 className="page-title">{title}</h1>
        {lead ? <p className="page-lead">{lead}</p> : null}
      </div>
    </section>
  );
}

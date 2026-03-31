import type { ReactNode } from "react";

type SectionBlockProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  id?: string;
  tone?: "default" | "muted" | "brand";
};

export function SectionBlock({
  eyebrow,
  title,
  description,
  children,
  id,
  tone = "default"
}: SectionBlockProps) {
  return (
    <section className={`sectionBlock tone-${tone}`} id={id}>
      <div className="sectionHeading">
        {eyebrow ? <span className="sectionEyebrow">{eyebrow}</span> : null}
        <h2>{title}</h2>
        {description ? <p>{description}</p> : null}
      </div>
      {children}
    </section>
  );
}

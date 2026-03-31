import Link from "next/link";

import type { HomeHero } from "@/lib/site-data";

type HomeHeroSectionProps = {
  hero: HomeHero;
};

export function HomeHeroSection({ hero }: HomeHeroSectionProps) {
  return (
    <section className="homeHero" aria-label="首页主图">
      <figure className="homeHeroFigure">
        <img
          alt={hero.imageAltZh}
          className="homeHeroImage"
          src={hero.imageUrl}
        />
        <div className="homeHeroOverlay" />
        <figcaption className="homeHeroCaption">
          <h1>{hero.titleZh}</h1>
          <p>{hero.summaryZh}</p>
          <Link className="homeHeroButton" href={hero.ctaHref}>
            {hero.ctaLabelZh}
          </Link>
        </figcaption>
      </figure>
    </section>
  );
}

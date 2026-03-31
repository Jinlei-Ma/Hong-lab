import type { ReactNode } from "react";

import type { LinkItem, PageHero as PageHeroType } from "@/lib/site-data";

import { LinkList } from "@/components/link-list";
import { siteConfig } from "@/lib/site-data";

type PageShellProps = {
  hero: PageHeroType;
  children: ReactNode;
  relatedLinks?: LinkItem[];
  sideNote?: ReactNode;
};

export function PageShell({
  hero,
  children,
  relatedLinks,
  sideNote
}: PageShellProps) {
  return (
    <main>
      <section className="pageHero">
        <div className="container pageHeroInner">
          <div className="pageHeroCopy">
            <span className="heroEyebrow">{hero.eyebrowZh}</span>
            <h1>{hero.titleZh}</h1>
            <p>{hero.summaryZh}</p>
          </div>
          <div className="pageHeroAside">
            <div className="pageHeroBadge">
              <span>{siteConfig.brand.schoolNameZh}</span>
              <strong>{siteConfig.brand.academyNameZh}</strong>
            </div>
            <div className="pageHeroBadge">
              <span>最近更新</span>
              <strong>{siteConfig.updatedAtZh}</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="pageBody">
        <div className="container pageBodyGrid">
          <div className="pageMain">{children}</div>
          <aside className="pageAside">
            {sideNote}
            {relatedLinks ? (
              <div className="asideCard">
                <h2>相关链接</h2>
                <LinkList items={relatedLinks} />
              </div>
            ) : null}
          </aside>
        </div>
      </section>
    </main>
  );
}

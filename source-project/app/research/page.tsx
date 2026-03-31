import { ResearchSectionPager } from "@/components/research-section-pager";
import { researchPage, researchSections } from "@/lib/site-data";

export default function ResearchPage() {
  return (
    <main className="researchDocPage">
      <div className="researchWideFrame researchDocFrame">
        <header className="researchDocHeader">
          <h1>{researchPage.hero.titleZh}</h1>
          <p>{researchPage.hero.summaryZh}</p>
        </header>

        <section className="researchDocContent">
          {researchSections.map((section) => (
            <ResearchSectionPager
              items={section.itemsZh}
              key={section.titleZh}
              title={section.titleZh}
            />
          ))}
        </section>
      </div>
    </main>
  );
}

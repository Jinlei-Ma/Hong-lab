import { teachingBlocks, teachingPage } from "@/lib/site-data";

export default function TeachingPage() {
  return (
    <main className="researchDocPage">
      <div className="researchWideFrame researchDocFrame">
        <header className="researchDocHeader">
          <h1>{teachingPage.hero.titleZh}</h1>
          <p>{teachingPage.hero.summaryZh}</p>
        </header>

        <section className="researchDocContent">
        {teachingBlocks.map((block) => (
          <section className="researchDocSection" key={block.titleZh}>
            <div className="researchDocSectionHeading">
              <h2>{block.titleZh}</h2>
            </div>
            <div className="researchDocList">
              {block.itemsZh.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </section>
        ))}
        </section>
      </div>
    </main>
  );
}

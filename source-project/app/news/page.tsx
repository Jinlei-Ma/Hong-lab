import { NewsList } from "@/components/news-list";
import { newsItems, newsPage } from "@/lib/site-data";

export default function NewsPage() {
  return (
    <main className="researchDocPage">
      <div className="researchWideFrame researchDocFrame">
        <header className="researchDocHeader">
          <h1>{newsPage.hero.titleZh}</h1>
          <p>{newsPage.hero.summaryZh}</p>
        </header>

        <section className="researchDocContent">
          <section className="researchDocSection">
            <div className="researchDocSectionHeading">
              <h2>研究动态</h2>
            </div>
            <NewsList items={newsItems} />
          </section>
        </section>
      </div>
    </main>
  );
}

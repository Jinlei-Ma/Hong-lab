import type { ResearchItem } from "@/lib/site-data";

type ResearchListProps = {
  items: ResearchItem[];
};

export function ResearchList({ items }: ResearchListProps) {
  return (
    <div className="researchGrid">
      {items.map((item) => (
        <article className="researchCard" key={item.titleZh}>
          <h3>{item.titleZh}</h3>
          <p>{item.summaryZh}</p>
          <ul className="tagList">
            {item.keywordsZh.map((keyword) => (
              <li key={keyword}>{keyword}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

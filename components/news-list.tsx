import type { NewsItem } from "@/lib/site-data";

type NewsListProps = {
  items: NewsItem[];
  limit?: number;
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(new Date(date));
}

export function NewsList({ items, limit }: NewsListProps) {
  const visibleItems = typeof limit === "number" ? items.slice(0, limit) : items;

  return (
    <div className="newsTimeline">
      {visibleItems.map((item) => (
        <article key={`${item.date}-${item.titleZh}`} className="newsCard">
          <div className="newsMeta">
            <span className="newsCategory">{item.categoryZh}</span>
            <time dateTime={item.date}>{formatDate(item.date)}</time>
          </div>
          <div className="newsContent">
            <div>
              <h3>{item.titleZh}</h3>
              <p>{item.summaryZh}</p>
            </div>
            {item.imageUrl ? (
              <div
                className="newsThumb"
                aria-hidden="true"
                style={{ backgroundImage: `url(${item.imageUrl})` }}
              />
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
}

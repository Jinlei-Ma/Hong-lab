"use client";

import { useState } from "react";

type ResearchSectionPagerProps = {
  title: string;
  items: string[];
  pageSize?: number;
};

export function ResearchSectionPager({
  title,
  items,
  pageSize = 15
}: ResearchSectionPagerProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));
  const start = (currentPage - 1) * pageSize;
  const visibleItems = items.slice(start, start + pageSize);

  const normalizeItem = (item: string, absoluteIndex: number) => {
    const stripped = item
      .replace(/^中文著作：\s*/, "")
      .replace(/^英文著作：\s*/, "")
      .trim();

    if (/^\[\d+\]/.test(stripped)) {
      return stripped;
    }

    return `[${absoluteIndex}] ${stripped}`;
  };

  return (
    <section className="researchDocSection">
      <div className="researchDocSectionHeading">
        <h2>{title}</h2>
      </div>

      <div className="researchDocList">
        {visibleItems.map((item, index) => (
          <p key={item}>{normalizeItem(item, start + index + 1)}</p>
        ))}
      </div>

      {totalPages > 1 ? (
        <div className="researchPager" aria-label={`${title}分页`}>
          {Array.from({ length: totalPages }, (_, index) => {
            const page = index + 1;

            return (
              <button
                className={
                  page === currentPage
                    ? "researchPagerButton active"
                    : "researchPagerButton"
                }
                key={page}
                onClick={() => setCurrentPage(page)}
                type="button"
              >
                {page}
              </button>
            );
          })}
        </div>
      ) : null}
    </section>
  );
}

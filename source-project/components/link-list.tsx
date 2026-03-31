import type { LinkItem } from "@/lib/site-data";

type LinkListProps = {
  items: LinkItem[];
};

export function LinkList({ items }: LinkListProps) {
  return (
    <div className="linkList">
      {items.map((item) => {
        const isExternal = item.href?.startsWith("http");

        if (item.href) {
          return (
            <a
              key={`${item.labelZh}-${item.href}`}
              className="linkCard"
              href={item.href}
              rel={isExternal ? "noreferrer" : undefined}
              target={isExternal ? "_blank" : undefined}
            >
              <strong>{item.labelZh}</strong>
              <span>{item.noteZh ?? item.href}</span>
            </a>
          );
        }

        return (
          <div key={item.labelZh} className="linkCard disabled">
            <strong>{item.labelZh}</strong>
            <span>{item.noteZh ?? "待补充链接"}</span>
          </div>
        );
      })}
    </div>
  );
}

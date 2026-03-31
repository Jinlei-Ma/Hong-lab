import { phdSupervisors } from "@/lib/site-data";

export default function PhdSupervisorsPage() {
  return (
    <main className="facultyListPage">
      <div className="container facultyListFrame">
        <header className="facultyListHeader">
          <h1>同专业博导</h1>
          <p>以下页面为本网站内跳转页，展示同专业博士生导师信息入口。</p>
        </header>

        <section className="facultyListGrid">
          {phdSupervisors.map((item) => (
            <article className="facultyListCard" key={item.nameZh}>
              <h2>{item.nameZh}</h2>
              <p className="facultyListTitle">{item.titleZh}</p>
              <p>{item.summaryZh}</p>
              {item.href ? (
                <a href={item.href} rel="noreferrer" target="_blank">
                  查看教师主页
                </a>
              ) : null}
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}

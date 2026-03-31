import Link from "next/link";

import { profileActionLinks, profileContent } from "@/lib/site-data";

export default function ProfilePage() {
  return (
    <main className="profilePage">
      <div className="profileWideFrame profileFrame">
        <section className="profileLayout">
          <aside className="profileSidebar">
            <div className="profilePortraitCard">
              <img
                alt={`${profileContent.nameZh}个人照片`}
                className="profilePortraitImage"
                src={profileContent.photoUrl}
              />
            </div>

            <h1 className="profileSidebarName">{profileContent.nameZh}</h1>

            <div className="profileMetaList">
              {profileContent.basicInfo.map((item) => (
                <div className="profileMetaItem" key={item.labelZh}>
                  <span className="profileMetaLabel">{item.labelZh}：</span>
                  <span className="profileMetaValue">{item.valueZh}</span>
                </div>
              ))}
            </div>

            <div className="profileActionGrid">
              {profileActionLinks.map((item) => {
                const isExternal = item.href.startsWith("http");
                const className =
                  item.tone === "primary"
                    ? "profileActionButton primary"
                    : "profileActionButton secondary";

                if (isExternal) {
                  return (
                    <a
                      className={`${className} full`}
                      href={item.href}
                      key={item.labelZh}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <span className="profileActionIcon" aria-hidden="true" />
                      <span>{item.labelZh}</span>
                    </a>
                  );
                }

                return (
                  <Link className={className} href={item.href} key={item.labelZh}>
                    <span className="profileActionIcon" aria-hidden="true" />
                    <span>{item.labelZh}</span>
                  </Link>
                );
              })}
            </div>
          </aside>

          <section className="profileContentArea">
            {profileContent.sections.map((section) => (
              <section className="profileSection" key={section.titleZh}>
                <div className="profileSectionHeading">
                  <h2>{section.titleZh}</h2>
                </div>
                <div className="profileSectionBody">
                  {section.paragraphsZh.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </section>
        </section>
      </div>
    </main>
  );
}

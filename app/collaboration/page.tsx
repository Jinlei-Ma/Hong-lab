import { AMapContactMap } from "@/components/amap-contact-map";
import { ContactCard } from "@/components/contact-card";
import { collaborationContent, siteConfig } from "@/lib/site-data";

export default function CollaborationPage() {
  return (
    <main className="researchDocPage">
      <div className="researchWideFrame researchDocFrame">
        <header className="researchDocHeader">
          <h1>{collaborationContent.hero.titleZh}</h1>
          <p>{collaborationContent.hero.summaryZh}</p>
        </header>

        <section className="researchDocContent">
          <section className="researchDocSection">
            <div className="researchDocSectionHeading">
              <h2>{collaborationContent.intro.titleZh}</h2>
            </div>
            <div className="researchDocList">
              {collaborationContent.intro.paragraphsZh.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section className="researchDocSection">
            <div className="researchDocSectionHeading">
              <h2>合作议题</h2>
            </div>
            <div className="collaborationTopicGrid">
              {collaborationContent.areas.map((area) => (
                <article className="collaborationTopicCard" key={area.titleZh}>
                  <h3>{area.titleZh}</h3>
                  <p>{area.descriptionZh}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="researchDocSection">
            <div className="researchDocSectionHeading">
              <h2>联系表单</h2>
            </div>
            <ContactCard />
          </section>

          <section className="researchDocSection">
            <div className="researchDocSectionHeading">
              <h2>联系信息</h2>
            </div>
            <div className="contactInfoBlock">
              <div className="contactInfoRow">
                <span className="contactInfoIcon email" aria-hidden="true" />
                <a className="contactInfoLink" href={`mailto:${siteConfig.contact.email}`}>
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="contactInfoRow">
                <span className="contactInfoIcon location" aria-hidden="true" />
                <span className="contactInfoText">{siteConfig.contact.addressZh}</span>
              </div>
              <div className="contactMapWrap">
                <AMapContactMap />
              </div>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}

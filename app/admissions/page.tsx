import { admissionSections, admissionsPage } from "@/lib/site-data";

export default function AdmissionsPage() {
  return (
    <main className="researchDocPage">
      <div className="researchWideFrame researchDocFrame">
        <header className="researchDocHeader">
          <h1>{admissionsPage.hero.titleZh}</h1>
          <p>{admissionsPage.hero.summaryZh}</p>
        </header>

        <section className="researchDocContent">
          <section className="researchDocSection">
            <div className="researchDocSectionHeading">
              <h2>招生要求总览</h2>
            </div>
            <div className="admissionGrid">
          {admissionSections.map((section) => (
            <article className="admissionCard" key={section.degreeZh}>
              <h3>{section.degreeZh}</h3>
              <p>{section.summaryZh}</p>
              <dl className="requirementList">
                {section.requirements.map((item) => (
                  <div className="requirementRow" key={item.labelZh}>
                    <dt>{item.labelZh}</dt>
                    <dd>{item.valueZh}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}

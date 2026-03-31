import { HomeHeroSection } from "@/components/hero-carousel";
import { SectionBlock } from "@/components/section-block";
import { homeContent } from "@/lib/site-data";

export default function HomePage() {
  return (
    <main>
      <HomeHeroSection hero={homeContent.hero} />

      <div className="homeIntroBand">
        <div className="container homeSections">
          <SectionBlock id="home-intro" title={homeContent.intro.titleZh}>
            <div className="splitShowcase splitShowcaseMission">
              <div className="proseBlock">
                {homeContent.intro.paragraphsZh.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="missionImageFrame">
                <img
                  alt={homeContent.intro.titleZh}
                  className="missionImage"
                  src={homeContent.intro.featureImageUrl}
                />
              </div>
            </div>
          </SectionBlock>
        </div>
      </div>
    </main>
  );
}

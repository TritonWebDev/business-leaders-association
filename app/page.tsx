import { SiteNav } from "@/components/layout/site-nav";
import { SnapScrollContainer } from "@/components/layout/snap-scroll-container";
import { SnapSection } from "@/components/layout/snap-section";
import { PagePlaceholder } from "@/components/sections/page-placeholder";
import { SocialsSection } from "@/components/sections/socials-section";
import { homePageContent } from "@/lib/content";

export default function Home() {
  return (
    <>
      <SiteNav brand={homePageContent.site.brand} links={homePageContent.navigation} />
      <SnapScrollContainer>
      <SnapSection id="homepage" className="snap-page--brown">
        <PagePlaceholder title="Homepage" />
      </SnapSection>
      <SnapSection id="about" className="snap-page--white">
        <PagePlaceholder title="About" />
      </SnapSection>
      <SnapSection id="membership" className="snap-page--brown">
        <PagePlaceholder title="Become a Member" />
      </SnapSection>
      <SnapSection id="faq" className="snap-page--white">
        <PagePlaceholder title="FAQ" />
      </SnapSection>
      <SnapSection id="board" className="snap-page--brown">
        <PagePlaceholder title="Board" />
      </SnapSection>
      <SnapSection id="gallery" className="snap-page--white">
        <PagePlaceholder title="Photo Gallery" />
      </SnapSection>
      <SnapSection id="socials" className="snap-page--brown">
        <SocialsSection content={homePageContent.socials} />
      </SnapSection>
      </SnapScrollContainer>
    </>
  );
}

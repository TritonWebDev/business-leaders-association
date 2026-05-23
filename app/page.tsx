import { SiteNav } from "@/components/layout/site-nav";
import { AboutSection } from "@/components/sections/about-section";
import { BoardSection } from "@/components/sections/board-section";
import { FaqSection } from "@/components/sections/faq-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { HeroSection } from "@/components/sections/hero-section";
import { MembershipSection } from "@/components/sections/membership-section";
import { SocialsSection } from "@/components/sections/socials-section";
import { homePageContent } from "@/lib/content";

export default function Home() {
  const { navigation } = homePageContent;

  return (
    <>
      <SiteNav brand={homePageContent.site.brand} items={navigation} />
      <main>
        <section id="home">
          <HeroSection content={homePageContent.hero} />
        </section>
        <section id="about">
          <AboutSection content={homePageContent.about} />
        </section>
        <MembershipSection content={homePageContent.membership} />
        <FaqSection content={homePageContent.faq} />
        <section id="board">
          <BoardSection content={homePageContent.board} />
        </section>
        <section id="gallery">
          <GallerySection content={homePageContent.gallery} />
        </section>
        <section id="socials">
          <SocialsSection content={homePageContent.socials} />
        </section>
      </main>
    </>
  );
}

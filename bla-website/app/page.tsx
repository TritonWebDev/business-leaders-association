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
      <SiteNav items={navigation} />
      <main>
        <HeroSection content={homePageContent.hero} />
        <AboutSection content={homePageContent.about} />
        <MembershipSection content={homePageContent.membership} />
        <FaqSection content={homePageContent.faq} />
        <BoardSection content={homePageContent.board} />
        <GallerySection content={homePageContent.gallery} />
        <SocialsSection content={homePageContent.socials} />
      </main>
    </>
  );
}


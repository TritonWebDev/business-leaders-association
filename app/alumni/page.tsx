import { SiteNav } from "@/components/layout/site-nav";
import { AlumniSection } from "@/components/sections/alumni-section";
import { alumniPageContent } from "@/lib/content";

export default function AlumniPage() {
  const { navigation } = alumniPageContent;

  return (
    <>
      <SiteNav brand={alumniPageContent.site.brand} items={navigation} />
      <main className="site-main">
        <section id="alumni">
          <AlumniSection content={alumniPageContent.alumni} />
        </section>
      </main>
    </>
  );
}

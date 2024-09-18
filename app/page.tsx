import { Hero } from "@/components/sections/Hero";
import { HomeMobileNavigation } from "@/components/navigation/HomeMobileNavigation";
import { HomeNavigation } from "@/components/navigation/HomeNavigation";
import { getPages } from "@/services/sanity/pages";
import { About} from "@/components/sections/About";
import { Practice } from "@/components/sections/Practice";
import { NavbarWrapper } from "@/components/navigation/NavbarWrapper";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default async function Home() {
  const pageData = await getPages();
  const { about, contact, header, practice } = pageData[0];
  return (
    <main className="w-full">
      <NavbarWrapper>
        <HomeNavigation />
        <HomeMobileNavigation />
      </NavbarWrapper>
      <Hero {...header} />
      <Practice {...practice} />
      <About about={about} />
      <Contact {...contact} />
      <Footer />
    </main>
  );
}

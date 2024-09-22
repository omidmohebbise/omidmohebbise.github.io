import AboutMe from "@/components/aboutme/aboutme";
import Contact from "@/components/contact/contact";
import Educations from "@/components/education/education";
import Experiences from "@/components/experience/work-experiences";
import Footer from "@/components/footer/footer";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div>
      <AboutMe />
      <Skills />
      <Experiences />
      <Educations />
      <Contact />
      <Footer />
    </div>
  );
}

import AboutMe from "@/components/aboutme/aboutme";
import Educations from "@/components/education/education";
import Experiences from "@/components/experience/work-experiences";
import OmidHeader from "@/components/header/omidheader";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div>
      <OmidHeader/>
      <AboutMe />
      <Skills />
      <Experiences />
      <Educations />
      
    </div>
  );
}

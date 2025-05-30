import AboutMe from "@/components/aboutme/aboutme";
import Educations from "@/components/education/education";
import Experiences from "@/components/experience/work-experiences";
import OmidHeader from "@/components/header/Header";
import Skills from "@/components/skill/Skills";

export default function Home() {
  return (
    <div className="">
      <AboutMe />
      <Skills />
      <Experiences />
      <Educations />
    </div>
  );
}

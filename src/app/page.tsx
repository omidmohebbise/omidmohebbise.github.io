import Experiences from "@/components/experience/work-experiences";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div>

      <section id="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <p>I currently work at Rabobank, where I am responsible for initiating, developing, and delivering over 8 Java, Spring, and React applications from the ground up, as well as designing new microservice-based architectures. I work extensively with Java 17 and the latest version of Spring, utilizing Azure DevOps, AWS, and event-driven architecture to deliver high-quality, scalable solutions. I am passionate about translating business needs into technical solutions that create real value and drive innovation within a professional team and tribe</p>
        </div>
      </section>

      <Skills/>

      <Experiences/>





      <section id="education" className="bg-light ">
        <div className="row">
          <h2 className="section-title">Education</h2>
          <div className="row">
            <div className="col-md-6">
              <h4>M.Sc. Software Engineering</h4>
              <p>Payame Noor University, Tehran, Iran (2013-2016)</p>
            </div>
            <div className="col-md-6">
              <h4>B.Sc. Software Engineering</h4>
              <p>Payame Noor University, Isfahan, Iran (2008-2013)</p>
            </div>
          </div>
        </div>
      </section>


      <section id="contact">
        <div className="container">
          <h2 className="section-title">Contact</h2>
          <p>Email: <a href="mailto:omidmohebbise@gmail.com">omidmohebbise@gmail.com</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/omidmohebbise" target="_blank">Omid Mohebbi on LinkedIn</a></p>
        </div>
      </section>


      <footer>
        <p>&copy; 2024 Omid Mohebbi. All rights reserved.</p>
      </footer>


    </div>
  );
}

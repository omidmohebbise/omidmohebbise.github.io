import { positions } from "@/components/experience/positions";
import ExperienceCard from "@/components/experience/work-experience-position";

export default function Experiences() {
    return (
        <section id="experience" className="bg-white py-5">
            <div className="container">
                <p className="section-label">Career</p>
                <h2 className="section-title">Experience</h2>
                <hr className="section-rule" />

                <div className="row">
                    {positions.map((position, index) => (
                        <ExperienceCard
                            key={index}
                            company={position.company}
                            title={position.title}
                            location={position.location}
                            period={position.period}
                            responsibilities={position.responsibilities}
                            techStack={position.techStack}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

import {positions} from "@/components/experience/positions";
import ExperienceCard from "@/components/experience/work-experience-position";

export default function Experiences() {

        return (
            <section id="experience" className="bg-light">
                <div className="container">
                    <h2 className="p-2 ">Experience</h2>
                    {positions.map((position, index) =>
                        <ExperienceCard company={position.company}
                                        title={position.title}
                                        location={position.location}
                                        period={position.period}
                                        responsibilities={position.responsibilities}
                                        techStack={position.techStack}
                                        key={index}
                        ></ExperienceCard>)
                    }

                </div>
            </section>
        )
    }

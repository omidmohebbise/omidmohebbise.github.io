interface ExperienceProps {
    title: string;
    company: string;
    location: string;
    period: string;
    responsibilities: string[];
    techStack: string;
}

 const ExperienceCard = ({
                                  title,
                                  company,
                                  location,
                                  period,
                                  responsibilities,
                                  techStack
                              }: ExperienceProps) => {
    return (
        <div className="col-12 mb-4">
            <div className="card shadow-sm hover-shadow transition">
                <div className="card-body">
                    <h3 className="card-title text-primary">{title}</h3>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <p className="h5 mb-0"><strong>{company}</strong></p>
                        <span className=" ">{period}</span>
                    </div>
                    <p className=" mb-3">{location}</p>
                    <ul className="list-group list-group-flush mb-3">
                        {responsibilities.map((responsibility, index) => (
                            <li key={index} className="list-group-item">{responsibility}</li>
                        ))}
                    </ul>
                    <div className="card bg-light">
                        <div className="card-body">
                            <h6 className="card-subtitle mb-2 text-muted">
                                <strong>Tech Stack</strong>
                            </h6>
                            <p className="card-text">{techStack}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ExperienceCard;

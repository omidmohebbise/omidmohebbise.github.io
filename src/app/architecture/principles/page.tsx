export default function ArchitecturePage() {

    return (
        <div className="container py-5">
            <p className="section-label">Architecture</p>
            <h1 className="section-title">Common Architecture Principles</h1>
            <hr className="section-rule" />
            <div className="row">
                {[
                    { title: "Separation of Concerns (SoC)", desc: "Divides the system into distinct sections that address different concerns, such as business logic, data access, and user interface. Promotes modularity and reduces complexity." },
                    { title: "Modularity", desc: "Dividing the system into self-contained modules that can be developed, tested, and maintained independently. Facilitates code reuse and easier debugging." },
                    { title: "Scalability", desc: "Ensures the system can handle increased load by scaling horizontally (adding more machines) or vertically (adding more resources to existing machines). Achieved through techniques like load balancing, distributed systems, and caching." },
                    { title: "Maintainability", desc: "Focuses on designing systems that can be easily updated and maintained over time. This includes clear code documentation, modular components, and robust testing practices." },
                    { title: "Loose Coupling", desc: "Reduces dependencies between system components, allowing for greater flexibility and easier changes without affecting the whole system." },
                    { title: "High Availability and Fault Tolerance", desc: "Ensures the system is available and functional even in the event of hardware or software failures. Often achieved through replication, failover mechanisms, and disaster recovery plans." },
                    { title: "Security", desc: "Ensures that the system is resistant to threats and vulnerabilities. Incorporates authentication, authorization, encryption, and secure coding practices." },
                ].map((item) => (
                    <div className="col-md-4 mb-3" key={item.title}>
                        <div className="card h-100">
                            <div className="card-body">
                                <h4 style={{ color: '#0f172a', fontWeight: 600, fontSize: '1rem', marginBottom: '0.5rem' }}>{item.title}</h4>
                                <p style={{ color: '#475569', fontSize: '0.9rem', marginBottom: 0 }}>{item.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )

}

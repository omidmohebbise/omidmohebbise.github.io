
export default function ArchitecturePage() {

    return (
        <div className="container py-5">
            <p className="section-label">Architecture</p>
            <h1 className="section-title">Challenges in Software Architecture</h1>
            <hr className="section-rule" />

            <div className="row">
                {[
                    { title: "Balancing Performance and Scalability", desc: "Ensuring the system performs efficiently while scaling to handle growing user demands. Trade-offs between optimizing for speed and scalability can lead to difficult decisions." },
                    { title: "Managing Complexity", desc: "As systems grow in size and functionality, managing their complexity becomes more challenging. Architectures must be designed to minimize complexity through modularity, clear boundaries, and well-defined interfaces." },
                    { title: "Integration with Legacy Systems", desc: "Many organizations need to integrate new systems with existing legacy infrastructure, which can introduce compatibility issues and slow down progress." },
                    { title: "Data Consistency in Distributed Systems", desc: "Ensuring that data remains consistent across multiple services or nodes, especially in microservices or distributed architectures, is a complex challenge. Techniques like eventual consistency and CAP theorem need to be carefully considered." },
                    { title: "Security Risks", desc: "Ensuring security across the system can be a challenge, particularly with increasing threats from external and internal sources. Architectures must be designed with security in mind, including regular audits and adherence to best practices." },
                    { title: "Adapting to Changing Requirements", desc: "Software systems often evolve based on changing business needs or user feedback. Architectures must be flexible enough to accommodate these changes without requiring a complete redesign." },
                    { title: "Cost and Resource Management", desc: "Architecting for efficiency involves managing both resource usage and cost, especially in cloud-based systems. Over-provisioning can lead to wasted resources, while under-provisioning can cause performance issues." },
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

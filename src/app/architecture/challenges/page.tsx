
export default function ArchitecturePage() {

    return (
        <div className="container">
            <section className="mt-5">
                <h2>Challenges in Software Architecture</h2>

                <div className="row m-0 p-0 py-3">
                    <div className="list-group-item col-4">
                        <strong>Balancing Performance and Scalability</strong>
                        <p>Ensuring the system performs efficiently while scaling to handle growing user demands. Trade-offs between optimizing for speed and scalability can lead to difficult decisions.</p>
                    </div>
                    <div className="list-group-item">
                        <strong>Managing Complexity</strong>
                        <p>As systems grow in size and functionality, managing their complexity becomes more challenging. Architectures must be designed to minimize complexity through modularity, clear boundaries, and well-defined interfaces.</p>
                    </div>
                    <div className="list-group-item">
                        <strong>Integration with Legacy Systems</strong>
                        <p>Many organizations need to integrate new systems with existing legacy infrastructure, which can introduce compatibility issues and slow down progress.</p>
                    </div>
                    <div className="list-group-item">
                        <strong>Data Consistency in Distributed Systems</strong>
                        <p>Ensuring that data remains consistent across multiple services or nodes, especially in microservices or distributed architectures, is a complex challenge. Techniques like eventual consistency and CAP theorem need to be carefully considered.</p>
                    </div>
                    <div className="list-group-item">
                        <strong>Security Risks</strong>
                        <p>Ensuring security across the system can be a challenge, particularly with increasing threats from external and internal sources. Architectures must be designed with security in mind, including regular audits and adherence to best practices.</p>
                    </div>
                    <div className="list-group-item">
                        <strong>Adapting to Changing Requirements</strong>
                        <p>Software systems often evolve based on changing business needs or user feedback. Architectures must be flexible enough to accommodate these changes without requiring a complete redesign.</p>
                    </div>
                    <div className="list-group-item">
                        <strong>Cost and Resource Management</strong>
                        <p>Architecting for efficiency involves managing both resource usage and cost, especially in cloud-based systems. Over-provisioning can lead to wasted resources, while under-provisioning can cause performance issues.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
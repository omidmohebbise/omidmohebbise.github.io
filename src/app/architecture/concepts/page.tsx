import React from "react";

export default function ArchitecturePage() {

    return (
        <div className="container py-5">
            <p className="section-label">Architecture</p>
            <h1 className="section-title">Software Architecture Concepts</h1>
            <hr className="section-rule" />
            <p style={{ color: '#475569' }}>Software architecture refers to the high-level structuring of a software system. It defines the components, their interactions, and the principles that guide the design of the system. A good architecture is crucial for building scalable, maintainable, and efficient systems.</p>

            <div className="row mt-4">
                {[
                    { title: "Monolithic Architecture", desc: "A single unified codebase. Simple to develop but can become difficult to maintain as the system grows. Best suited for small to medium-sized applications with less complexity." },
                    { title: "Microservices Architecture", desc: "Decomposes the system into small, independently deployable services. Each service is responsible for a specific business function. Enables better scalability, flexibility, and resilience but can lead to challenges in service coordination and data consistency." },
                    { title: "Serverless Architecture", desc: "Allows developers to focus on business logic while cloud providers handle the infrastructure. Promotes scalability and cost-efficiency but introduces challenges with cold start times and debugging." },
                    { title: "Event-Driven Architecture", desc: "Systems are designed around the production, detection, and reaction to events. Highly decoupled and scalable, ideal for real-time systems and applications with asynchronous workflows." },
                    { title: "Layered (N-Tier) Architecture", desc: "Organizes the system into layers, such as presentation, business logic, and data access layers. Easy to manage and maintain, but tightly coupled layers can limit flexibility." },
                    { title: "Hexagonal (Ports and Adapters) Architecture", desc: "Focuses on isolating the core logic from external systems and interfaces (e.g., databases, web services). Facilitates easier testing and maintenance but requires careful design of adapters and ports." },
                    { title: "Client-Server Architecture", desc: "The client makes requests to the server, which processes the request and returns the appropriate data. Suitable for many web applications but may face scalability and performance issues with increasing load." },
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

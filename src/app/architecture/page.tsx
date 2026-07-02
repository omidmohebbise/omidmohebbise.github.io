"use client"

import React, { useState } from 'react';

const PageStates = {
    Concept: 1,
    Principles: 2,
    Challenges: 3
}

export default function ArchitecturePage() {

    const [pageState, setPageState] = useState(PageStates.Principles)

    const getConcepts = () => {
        return (
            <section className="mt-4">
                <h2 style={{ color: '#0f172a', fontWeight: 700, marginBottom: '0.75rem' }}>Software Architecture</h2>
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
            </section>
        )
    }

    const getPrinciples = () => {
        return (
            <section className="mt-4">
                <h2 style={{ color: '#0f172a', fontWeight: 700, marginBottom: '0.75rem' }}>Common Architecture Principles</h2>
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
            </section>
        )
    }

    const getChallenges = () => {
        return (
            <section className="mt-4">
                <h2 style={{ color: '#0f172a', fontWeight: 700, marginBottom: '0.75rem' }}>Challenges in Software Architecture</h2>
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
            </section>
        )
    }

    return (
        <div className="container py-5">
            <p className="section-label">Architecture</p>
            <h1 className="section-title">Software Architecture</h1>
            <hr className="section-rule" />
            <div className="row m-0 mb-2">
                {Object.keys(PageStates).map(x => (
                    <div className="col-4 p-1" key={PageStates[x as keyof typeof PageStates]}>
                        <button
                            style={pageState === PageStates[x as keyof typeof PageStates]
                                ? { background: '#2563eb', color: 'white', borderRadius: '8px', padding: '0.75rem 1rem', cursor: 'pointer', border: 'none', fontWeight: 600, width: '100%' }
                                : { background: 'transparent', color: '#475569', padding: '0.75rem 1rem', cursor: 'pointer', borderBottom: '2px solid #e2e8f0', fontWeight: 500, width: '100%', border: 'none', borderBottomStyle: 'solid', borderBottomWidth: '2px', borderBottomColor: '#e2e8f0' }}
                            onClick={() => setPageState(PageStates[x as keyof typeof PageStates])}
                        >{x}</button>
                    </div>
                ))}
            </div>
            {pageState === PageStates.Concept && getConcepts()}
            {pageState === PageStates.Principles && getPrinciples()}
            {pageState === PageStates.Challenges && getChallenges()}
        </div>
    )
}

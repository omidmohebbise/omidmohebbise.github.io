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

            <section className="mt-5">
                <h2>Software Architecture</h2>
                <p>Software architecture refers to the high-level structuring of a software system. It defines the components, their interactions, and the principles that guide the design of the system. A good architecture is crucial for building scalable, maintainable, and efficient systems.</p>

                <div className="row m-0 p-0 py-3">
                    <div className="list-group-item col-4 p-2">
                        <strong>Monolithic Architecture</strong>
                        <p>A single unified codebase. Simple to develop but can become difficult to maintain as the system grows. Best suited for small to medium-sized applications with less complexity.</p>
                    </div>
                    <div className="list-group-item col-4">
                        <strong>Microservices Architecture</strong>
                        <p>Decomposes the system into small, independently deployable services. Each service is responsible for a specific business function. Enables better scalability, flexibility, and resilience but can lead to challenges in service coordination and data consistency.</p>
                    </div>
                    <div className="list-group-item col-4">
                        <strong>Serverless Architecture</strong>
                        <p>Allows developers to focus on business logic while cloud providers handle the infrastructure. Promotes scalability and cost-efficiency but introduces challenges with cold start times and debugging.</p>
                    </div>
                    <div className="list-group-item col-4" >
                        <strong>Event-Driven Architecture</strong>
                        <p>Systems are designed around the production, detection, and reaction to events. Highly decoupled and scalable, ideal for real-time systems and applications with asynchronous workflows.</p>
                    </div>
                    <div className="list-group-item col-4">
                        <strong>Layered (N-Tier) Architecture</strong>
                        <p>Organizes the system into layers, such as presentation, business logic, and data access layers. Easy to manage and maintain, but tightly coupled layers can limit flexibility.</p>
                    </div>
                    <div className="list-group-item col-4">
                        <strong>Hexagonal (Ports and Adapters) Architecture</strong>
                        <p>Focuses on isolating the core logic from external systems and interfaces (e.g., databases, web services). Facilitates easier testing and maintenance but requires careful design of adapters and ports.</p>
                    </div>
                    <div className="list-group-item col-4">
                        <strong>Client-Server Architecture</strong>
                        <p>The client makes requests to the server, which processes the request and returns the appropriate data. Suitable for many web applications but may face scalability and performance issues with increasing load.</p>
                    </div>
                </div>
            </section>
        )
    }

    const getPrinciples = () => {
        return (
            <section className="mt-5">
                <h2>Common Architecture Principles</h2>
                <div className="row">
                    <div className="list-group-item col-4 p-2">
                        <strong>Separation of Concerns (SoC)</strong>
                        <p>Divides the system into distinct sections that address different concerns, such as business logic, data access, and user interface. Promotes modularity and reduces complexity.</p>
                    </div>
                    <div className="list-group-item col-4 p-2">
                        <strong>Modularity</strong>
                        <p>Dividing the system into self-contained modules that can be developed, tested, and maintained independently. Facilitates code reuse and easier debugging.</p>
                    </div>
                    <div className="list-group-item col-4 p-2">
                        <strong>Scalability</strong>
                        <p>Ensures the system can handle increased load by scaling horizontally (adding more machines) or vertically (adding more resources to existing machines). Achieved through techniques like load balancing, distributed systems, and caching.</p>
                    </div>
                    <div className="list-group-item col-4 p-2">
                        <strong>Maintainability</strong>
                        <p>Focuses on designing systems that can be easily updated and maintained over time. This includes clear code documentation, modular components, and robust testing practices.</p>
                    </div>
                    <div className="list-group-item col-4 p-2">
                        <strong>Loose Coupling</strong>
                        <p>Reduces dependencies between system components, allowing for greater flexibility and easier changes without affecting the whole system.</p>
                    </div>
                    <div className="list-group-item col-4 p-2">
                        <strong>High Availability and Fault Tolerance</strong>
                        <p>Ensures the system is available and functional even in the event of hardware or software failures. Often achieved through replication, failover mechanisms, and disaster recovery plans.</p>
                    </div>
                    <div className="list-group-item col-4 p-2">
                        <strong>Security</strong>
                        <p>Ensures that the system is resistant to threats and vulnerabilities. Incorporates authentication, authorization, encryption, and secure coding practices.</p>
                    </div>
                </div>
            </section>
        )
    }

    const getChallenges = () => {
        return (
            <section className="mt-5">
                <h2>Challenges in Software Architecture</h2>

                <div className="row m-0 p-0 py-3">
                    <div className="list-group-item col-4 p-2">


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
        )
    }

    return (
        <div className="container">
            {/* <h1 className="text-center mb-5">Artifical Intelligence</h1> */}
            <div className='row m-0 ' >
                {Object.keys(PageStates)
                    .map(x => <div className="text-center col-4 p-1" key={PageStates[x]}>
                        <div role="button" className={pageState === PageStates[x] ? 'bg-light p-3' : "p-3 border-bottom"} onClick={() => setPageState(PageStates[x])}>{x}</div>
                    </div>)}
            </div>
            {pageState === PageStates.Concept && getConcepts()}
            {pageState === PageStates.Principles && getPrinciples()}
            {pageState === PageStates.Challenges && getChallenges()}

        </div>
    )
}
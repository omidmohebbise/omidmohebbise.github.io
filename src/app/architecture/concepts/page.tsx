import React from "react";

export default function ArchitecturePage() {

    return (
        <section className="mt-5">
            <h2>Software Architecture Concepts</h2>
            <p>Software architecture refers to the high-level structuring of a software system. It defines the components, their interactions, and the principles that guide the design of the system. A good architecture is crucial for building scalable, maintainable, and efficient systems.</p>

            <div className="row m-0 p-0 py-3">
                <div className="list-group-item col-4">
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
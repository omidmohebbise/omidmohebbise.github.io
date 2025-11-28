export default function SoftwareArchitectureCommonPatterns() {
    return (
        <div className="pt-4">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title mb-3">Common Patterns & Styles</h2>

                    <div className="row">
                        <div className="col-md-6">
                            <h5>Monolithic Architecture</h5>
                            <p className="mb-2"><strong>Structure:</strong> Single codebase with all features tightly coupled</p>
                            <ul className="list-unstyled mb-3">
                                <li>✓ Simple to deploy and test</li>
                                <li>✗ Hard to scale individual features</li>
                                <li>✗ Technology lock-in</li>
                            </ul>

                            <h5>Microservices Architecture</h5>
                            <p className="mb-2"><strong>Structure:</strong> Independent services owning their data and business logic</p>
                            <ul className="list-unstyled mb-3">
                                <li>✓ Independent scalability</li>
                                <li>✓ Technology flexibility</li>
                                <li>✗ Operational complexity</li>
                                <li>✗ Distributed system challenges</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h5>Layered Architecture</h5>
                            <p className="mb-2"><strong>Structure:</strong> Horizontal layers (UI, business, persistence, data)</p>
                            <ul className="list-unstyled mb-3">
                                <li>✓ Clear separation of concerns</li>
                                <li>✓ Easy to organize teams</li>
                                <li>✗ Tight coupling between layers</li>
                            </ul>

                            <h5>Event-Driven Architecture</h5>
                            <p className="mb-2"><strong>Structure:</strong> Loose coupling through event producers and consumers</p>
                            <ul className="list-unstyled mb-3">
                                <li>✓ Highly scalable and responsive</li>
                                <li>✓ Asynchronous processing</li>
                                <li>✗ Complex debugging and testing</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-12">
                            <h5>Other Patterns</h5>
                            <ul className="list-unstyled">
                                <li><strong>Serverless:</strong> Functions as a service (AWS Lambda, Azure Functions)</li>
                                <li><strong>CQRS:</strong> Separate read and write models</li>
                                <li><strong>API Gateway:</strong> Single entry point for clients</li>
                                <li><strong>Circuit Breaker:</strong> Prevent cascading failures</li>
                                <li><strong>Saga Pattern:</strong> Distributed transactions across services</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

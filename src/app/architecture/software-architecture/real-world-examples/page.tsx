export default function SoftwareArchitectureRealWorldExamples() {
    return (
        <div className="pt-4">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title mb-3">Real-World Examples</h2>

                    <div className="row">
                        <div className="col-md-6">
                            <h5>Netflix (Microservices)</h5>
                            <ul className="list-group list-group-flush mb-4">
                                <li className="list-group-item"><strong>Pattern:</strong> Microservices with Event-Driven</li>
                                <li className="list-group-item"><strong>Technology:</strong> Java, AWS, Kafka</li>
                                <li className="list-group-item"><strong>Key Features:</strong> Independent teams, polyglot persistence</li>
                                <li className="list-group-item"><strong>Challenge:</strong> Managing thousands of services at scale</li>
                            </ul>

                            <h5>Amazon (Monolith → Services)</h5>
                            <ul className="list-group list-group-flush mb-4">
                                <li className="list-group-item"><strong>Pattern:</strong> Transition from monolith to microservices</li>
                                <li className="list-group-item"><strong>Technology:</strong> SOA principles, self-service platforms</li>
                                <li className="list-group-item"><strong>Key Features:</strong> Two-pizza teams, API-first</li>
                                <li className="list-group-item"><strong>Outcome:</strong> Pioneered service-oriented architecture</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h5>Airbnb (Layered with Async)</h5>
                            <ul className="list-group list-group-flush mb-4">
                                <li className="list-group-item"><strong>Pattern:</strong> Layered with event-driven background jobs</li>
                                <li className="list-group-item"><strong>Technology:</strong> Ruby on Rails, Airflow, Kafka</li>
                                <li className="list-group-item"><strong>Key Features:</strong> Rapid development, data pipeline integration</li>
                                <li className="list-group-item"><strong>Challenge:</strong> Scaling Ruby infrastructure</li>
                            </ul>

                            <h5>Uber (Microservices + Real-time)</h5>
                            <ul className="list-group list-group-flush mb-4">
                                <li className="list-group-item"><strong>Pattern:</strong> Microservices with event streaming</li>
                                <li className="list-group-item"><strong>Technology:</strong> Go, Kafka, gRPC, Geospatial tech</li>
                                <li className="list-group-item"><strong>Key Features:</strong> Real-time tracking, scalable coordination</li>
                                <li className="list-group-item"><strong>Challenge:</strong> Complex distributed system</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-12">
                            <h5>Case Study: From Monolith to Microservices</h5>
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Phase</th>
                                            <th>Architecture</th>
                                            <th>Challenges</th>
                                            <th>Solutions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>Phase 1</strong></td>
                                            <td>Monolith</td>
                                            <td>Simple but scaling bottleneck</td>
                                            <td>Vertical scaling, caching</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Phase 2</strong></td>
                                            <td>Service-Oriented Architecture (SOA)</td>
                                            <td>ESB complexity, message routing</td>
                                            <td>Lightweight message brokers</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Phase 3</strong></td>
                                            <td>Microservices</td>
                                            <td>Distributed system complexity</td>
                                            <td>Service mesh, orchestration (Kubernetes)</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Phase 4</strong></td>
                                            <td>Serverless / Event-Driven</td>
                                            <td>Cold starts, debugging distributed flows</td>
                                            <td>Async patterns, observability tools</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-12">
                            <h5>Lessons Learned</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">✓ Start simple, evolve as complexity demands</li>
                                <li className="list-group-item">✓ Align architecture with organizational structure (Conway's Law)</li>
                                <li className="list-group-item">✓ Invest in observability and monitoring early</li>
                                <li className="list-group-item">✓ Document architectural decisions and trade-offs</li>
                                <li className="list-group-item">✓ Balance standardization with innovation</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

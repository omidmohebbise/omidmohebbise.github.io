export default function EnterpriseArchitectureApplicationArchitecture() {
    return (
        <div className="pt-4">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title mb-3">Application Architecture</h2>
                    <p className="mb-3">Application Architecture defines the software systems, their interactions, and how they support business capabilities.</p>

                    <div className="row">
                        <div className="col-md-6">
                            <h5>Application Architecture Considerations</h5>
                            <ul className="list-group list-group-flush mb-4">
                                <li className="list-group-item"><strong>Application Portfolio:</strong> Inventory of all systems</li>
                                <li className="list-group-item"><strong>System Integration:</strong> How applications communicate</li>
                                <li className="list-group-item"><strong>Data Flows:</strong> Information movement between systems</li>
                                <li className="list-group-item"><strong>Scalability & Performance:</strong> Handle growth and load</li>
                                <li className="list-group-item"><strong>Security & Compliance:</strong> Access control and regulations</li>
                                <li className="list-group-item"><strong>Maintainability:</strong> Support multiple releases, versions</li>
                            </ul>

                            <h5>Application Portfolio Management</h5>
                            <ul className="list-unstyled mb-4">
                                <li><strong>Build vs Buy vs Partner:</strong> Make/source decisions</li>
                                <li><strong>Application Rationalization:</strong> Consolidate, retire, replace</li>
                                <li><strong>Technology Diversity:</strong> Polyglot architectures, best-of-breed</li>
                                <li><strong>Technical Debt:</strong> Track and manage debt strategically</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h5>Application Categories</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2"><strong>Strategic Applications:</strong> Core to business, invest heavily</li>
                                <li className="mb-2"><strong>High Value:</strong> Important but not core, maintain well</li>
                                <li className="mb-2"><strong>Support Applications:</strong> Enable operations, minimal investment</li>
                                <li className="mb-2"><strong>Legacy Applications:</strong> Running but slated for retirement</li>
                            </ul>

                            <h5>Integration Patterns at Enterprise Scale</h5>
                            <ul className="list-unstyled">
                                <li><strong>Point-to-Point:</strong> Direct connections (simple but unmaintainable at scale)</li>
                                <li><strong>Hub-and-Spoke:</strong> Central integration hub (ESB)</li>
                                <li><strong>Event-Driven:</strong> Loosely coupled via events</li>
                                <li><strong>API-First:</strong> REST/GraphQL as primary integration</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-12">
                            <h5>Application Patterns & Reference Architectures</h5>
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Pattern</th>
                                            <th>Architecture</th>
                                            <th>Use Case</th>
                                            <th>Trade-offs</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>Monolithic</strong></td>
                                            <td>Single tightly-coupled application</td>
                                            <td>Simple applications, single team</td>
                                            <td>Easy to start, hard to scale</td>
                                        </tr>
                                        <tr>
                                            <td><strong>N-Tier</strong></td>
                                            <td>Presentation, business, data layers</td>
                                            <td>Enterprise applications</td>
                                            <td>Clear separation, tight coupling between layers</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Microservices</strong></td>
                                            <td>Independent services, deployed separately</td>
                                            <td>Large-scale systems, independent scaling</td>
                                            <td>Complexity, operational challenges</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Serverless</strong></td>
                                            <td>Functions as a service (FaaS)</td>
                                            <td>Event-driven, bursty workloads</td>
                                            <td>Cost-effective, cold start overhead</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6">
                            <h5>Cross-Cutting Concerns</h5>
                            <ul className="list-group list-group-flush mb-4">
                                <li className="list-group-item">🔐 Security & Authorization</li>
                                <li className="list-group-item">📊 Logging & Observability</li>
                                <li className="list-group-item">⏱️ Caching & Performance</li>
                                <li className="list-group-item">🔄 Transaction Management</li>
                                <li className="list-group-item">⚠️ Error Handling & Resilience</li>
                                <li className="list-group-item">📈 Monitoring & Alerting</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h5>Application Modernization Strategies</h5>
                            <ul className="list-group list-group-flush mb-4">
                                <li className="list-group-item"><strong>Lift & Shift:</strong> Move to cloud as-is</li>
                                <li className="list-group-item"><strong>Refactor:</strong> Improve code without changing functionality</li>
                                <li className="list-group-item"><strong>Rearchitect:</strong> Redesign for new platform</li>
                                <li className="list-group-item"><strong>Rebuild:</strong> Rewrite from scratch</li>
                                <li className="list-group-item"><strong>Replace:</strong> Buy commercial solution</li>
                                <li className="list-group-item"><strong>Retire:</strong> Remove system, consolidate functionality</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

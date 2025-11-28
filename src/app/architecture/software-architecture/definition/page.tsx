export default function SoftwareArchitectureDefinition() {
    return (
        <div className="pt-4">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title mb-3">Software Architecture Definition</h2>

                    <div className="row">
                        <div className="col-md-6">
                            <h5>What is Software Architecture?</h5>
                            <p>Software architecture is the high-level design that defines the structure of a software system, including its components, their relationships, and how they interact to meet business and technical requirements.</p>

                            <h6 className="mt-3">Key Characteristics</h6>
                            <ul className="list-group list-group-flush mb-3">
                                <li className="list-group-item">Defines the overall structure and organization</li>
                                <li className="list-group-item">Guides development teams on design decisions</li>
                                <li className="list-group-item">Enables scalability, maintainability, and reliability</li>
                                <li className="list-group-item">Communicates design intent to stakeholders</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h5>Architectural Concerns</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2"><strong>Scalability:</strong> Handle growth in users, data, or traffic</li>
                                <li className="mb-2"><strong>Reliability:</strong> Minimize downtime and failures</li>
                                <li className="mb-2"><strong>Maintainability:</strong> Easy to understand, modify, and extend</li>
                                <li className="mb-2"><strong>Security:</strong> Protect against threats and vulnerabilities</li>
                                <li className="mb-2"><strong>Performance:</strong> Meet latency and throughput requirements</li>
                                <li className="mb-2"><strong>Cost-Efficiency:</strong> Optimize resource utilization</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-12">
                            <h5>Levels of Architecture</h5>
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Level</th>
                                        <th>Focus</th>
                                        <th>Audience</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Enterprise Architecture</strong></td>
                                        <td>Organization-wide systems and strategy</td>
                                        <td>C-suite, business leaders</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Application Architecture</strong></td>
                                        <td>Individual application design and structure</td>
                                        <td>Architects, tech leads</td>
                                    </tr>
                                    <tr>
                                        <td><strong>System Design</strong></td>
                                        <td>Low-level component interactions and interfaces</td>
                                        <td>Senior developers, architects</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Implementation</strong></td>
                                        <td>Code-level design patterns and practices</td>
                                        <td>Developers</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

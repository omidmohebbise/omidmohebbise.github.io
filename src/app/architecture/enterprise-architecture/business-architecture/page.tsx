export default function EnterpriseArchitectureBusinessArchitecture() {
    return (
        <div className="pt-4">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title mb-3">Business Architecture</h2>
                    <p className="mb-3">Business Architecture defines organizational structure, capabilities, processes, and strategies. It bridges business strategy and IT implementation.</p>

                    <div className="row">
                        <div className="col-md-6">
                            <h5>Business Architecture Components</h5>
                            <ul className="list-group list-group-flush mb-4">
                                <li className="list-group-item"><strong>Organizational Structure:</strong> Teams, roles, reporting lines</li>
                                <li className="list-group-item"><strong>Business Processes:</strong> Workflows, value chains, workflows</li>
                                <li className="list-group-item"><strong>Business Capabilities:</strong> What the organization can do (e.g., "process orders")</li>
                                <li className="list-group-item"><strong>Business Functions:</strong> Departments and responsibilities</li>
                                <li className="list-group-item"><strong>Stakeholders:</strong> Internal and external actors</li>
                                <li className="list-group-item"><strong>Strategic Goals:</strong> Vision, mission, objectives</li>
                            </ul>

                            <h5>Business Process Types</h5>
                            <ul className="list-unstyled mb-4">
                                <li><strong>Core Processes:</strong> Direct value generation (e.g., sales, manufacturing)</li>
                                <li><strong>Support Processes:</strong> Enable core processes (HR, finance, IT)</li>
                                <li><strong>Management Processes:</strong> Planning and control (strategy, governance)</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h5>Business Capability Mapping</h5>
                            <p className="mb-2">A business capability map shows all capabilities an organization needs, independent of current implementation.</p>
                            <ul className="list-unstyled mb-4">
                                <li className="mb-2"><strong>Purpose:</strong> Identify gaps, redundancies, overlaps</li>
                                <li className="mb-2"><strong>Benefits:</strong> Clear view of business scope and dependencies</li>
                                <li className="mb-2"><strong>Tools:</strong> ArchiMate, TOGAF Capability Models</li>
                                <li className="mb-2"><strong>Example:</strong> "Customer Management" contains "Lead Qualification", "Sales", "Support"</li>
                            </ul>

                            <h5>Value Chain Analysis</h5>
                            <ul className="list-unstyled">
                                <li><strong>Primary Activities:</strong> Customer-facing value creation</li>
                                <li><strong>Support Activities:</strong> Enable primary activities (HR, finance, procurement)</li>
                                <li><strong>Margin:</strong> Profit from value created</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-12">
                            <h5>Business Process Improvement (BPI)</h5>
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Approach</th>
                                            <th>Methodology</th>
                                            <th>Focus</th>
                                            <th>Timeline</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>Business Process Reengineering (BPR)</strong></td>
                                            <td>Radical redesign from scratch</td>
                                            <td>Major transformation, cost reduction</td>
                                            <td>6-12 months</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Lean Management</strong></td>
                                            <td>Eliminate waste, continuous improvement</td>
                                            <td>Efficiency, flow optimization</td>
                                            <td>Ongoing</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Six Sigma</strong></td>
                                            <td>Statistical process control</td>
                                            <td>Quality, variation reduction</td>
                                            <td>3-6 months per project</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Agile Process Improvement</strong></td>
                                            <td>Iterative, feedback-driven</td>
                                            <td>Flexibility, rapid adaptation</td>
                                            <td>Continuous iterations</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6">
                            <h5>Digital Transformation Elements</h5>
                            <ul className="list-group list-group-flush mb-4">
                                <li className="list-group-item">🎯 Customer Experience: Digital-first interactions</li>
                                <li className="list-group-item">🔄 Process Automation: RPA, workflow automation</li>
                                <li className="list-group-item">📊 Data-Driven Decision Making: Analytics, insights</li>
                                <li className="list-group-item">🤖 AI & Automation: Intelligent workflows</li>
                                <li className="list-group-item">☁️ Cloud Infrastructure: Agility, scalability</li>
                                <li className="list-group-item">🔗 Ecosystem Integration: Partner APIs, integrations</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h5>Business Architecture Best Practices</h5>
                            <ul className="list-group list-group-flush mb-4">
                                <li className="list-group-item">✓ Align with organizational strategy</li>
                                <li className="list-group-item">✓ Involve business stakeholders in design</li>
                                <li className="list-group-item">✓ Document decisions and trade-offs</li>
                                <li className="list-group-item">✓ Use consistent terminology and models</li>
                                <li className="list-group-item">✓ Regularly review and update architecture</li>
                                <li className="list-group-item">✓ Communicate vision to organization</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function EnterpriseArchitectureGovernance() {
    return (
        <div className="pt-4">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title mb-3">Architecture Governance</h2>
                    <p className="mb-3">Architecture Governance ensures architectural decisions align with business strategy and are implemented consistently across the organization.</p>

                    <div className="row">
                        <div className="col-md-6">
                            <h5>Governance Components</h5>
                            <ul className="list-group list-group-flush mb-4">
                                <li className="list-group-item"><strong>Architecture Board:</strong> Reviews and approves major decisions</li>
                                <li className="list-group-item"><strong>Policies & Standards:</strong> Mandatory and recommended guidelines</li>
                                <li className="list-group-item"><strong>Reference Architectures:</strong> Pre-built solutions for common scenarios</li>
                                <li className="list-group-item"><strong>Technology Radar:</strong> Assess and classify technologies</li>
                                <li className="list-group-item"><strong>Compliance & Risk:</strong> Security, regulatory, operational risk</li>
                                <li className="list-group-item"><strong>Change Management:</strong> Control and communicate changes</li>
                            </ul>

                            <h5>Architecture Board Roles</h5>
                            <ul className="list-unstyled mb-4">
                                <li><strong>Chief Architect:</strong> Strategic leadership, vision setting</li>
                                <li><strong>Enterprise Architects:</strong> Policy development, roadmap</li>
                                <li><strong>Solution Architects:</strong> Propose solutions for review</li>
                                <li><strong>Business Representatives:</strong> Ensure business alignment</li>
                                <li><strong>Technology Representatives:</strong> Feasibility assessment</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h5>Governance Maturity Levels</h5>
                            <ul className="list-unstyled mb-4">
                                <li className="mb-2"><strong>Level 1 (Initial):</strong> Ad-hoc decisions, no formalized governance</li>
                                <li className="mb-2"><strong>Level 2 (Managed):</strong> Basic governance, manual processes</li>
                                <li className="mb-2"><strong>Level 3 (Defined):</strong> Formal policies, documented processes</li>
                                <li className="mb-2"><strong>Level 4 (Optimized):</strong> Automated enforcement, continuous monitoring</li>
                                <li className="mb-2"><strong>Level 5 (Intelligent):</strong> AI-driven insights and recommendations</li>
                            </ul>

                            <h5>Common Governance Challenges</h5>
                            <ul className="list-unstyled">
                                <li><strong>Shadow IT:</strong> Teams bypassing governance</li>
                                <li><strong>Over-governance:</strong> Slowing innovation with too many controls</li>
                                <li><strong>Lack of Enforcement:</strong> Policies ignored without consequences</li>
                                <li><strong>Outdated Standards:</strong> Policies not kept current</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-12">
                            <h5>Architecture Review Process</h5>
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Stage</th>
                                            <th>Activities</th>
                                            <th>Participants</th>
                                            <th>Outcome</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>Proposal</strong></td>
                                            <td>Solution architect submits architecture design</td>
                                            <td>Solution architect, project lead</td>
                                            <td>Architecture document ready for review</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Review</strong></td>
                                            <td>Board assesses alignment, risks, compliance</td>
                                            <td>Architecture board, domain experts</td>
                                            <td>Feedback and recommendations</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Approval</strong></td>
                                            <td>Board votes on decision (approve, reject, defer)</td>
                                            <td>Architecture board chair</td>
                                            <td>Formal approval or rejection</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Implementation</strong></td>
                                            <td>Team builds according to approved design</td>
                                            <td>Development team, project manager</td>
                                            <td>Delivered solution</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Review & Audit</strong></td>
                                            <td>Verify implementation matches design</td>
                                            <td>Architecture audit team</td>
                                            <td>Compliance report</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6">
                            <h5>Technology Radar Assessment</h5>
                            <ul className="list-group list-group-flush mb-4">
                                <li className="list-group-item">✅ <strong>Adopt:</strong> Approved, use broadly</li>
                                <li className="list-group-item">🟢 <strong>Trial:</strong> Approved for evaluation</li>
                                <li className="list-group-item">🟡 <strong>Assess:</strong> Monitor, not yet approved</li>
                                <li className="list-group-item">❌ <strong>Hold:</strong> Not recommended, reduce usage</li>
                            </ul>

                            <h5>Standards Development Process</h5>
                            <ul className="list-unstyled">
                                <li>1. <strong>Identify Need:</strong> Gap or opportunity identified</li>
                                <li>2. <strong>Research:</strong> Study best practices, options</li>
                                <li>3. <strong>Draft:</strong> Create standard proposal</li>
                                <li>4. <strong>Review:</strong> Stakeholder feedback</li>
                                <li>5. <strong>Approve:</strong> Governance board sign-off</li>
                                <li>6. <strong>Publish:</strong> Communicate to organization</li>
                                <li>7. <strong>Monitor:</strong> Ensure compliance and adoption</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h5>Risk Management in Architecture</h5>
                            <ul className="list-group list-group-flush mb-4">
                                <li className="list-group-item"><strong>Technical Risk:</strong> Feasibility, scalability, integration</li>
                                <li className="list-group-item"><strong>Operational Risk:</strong> Support, maintenance, runbooks</li>
                                <li className="list-group-item"><strong>Security Risk:</strong> Data protection, access control</li>
                                <li className="list-group-item"><strong>Compliance Risk:</strong> Regulatory requirements, audit</li>
                                <li className="list-group-item"><strong>Financial Risk:</strong> Cost overruns, ROI</li>
                                <li className="list-group-item"><strong>Organizational Risk:</strong> Skills, training, change management</li>
                            </ul>

                            <h5>Governance Best Practices</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">✓ Balance governance with agility</li>
                                <li className="list-group-item">✓ Make policies visible and accessible</li>
                                <li className="list-group-item">✓ Use automation to enforce standards</li>
                                <li className="list-group-item">✓ Regularly review and update policies</li>
                                <li className="list-group-item">✓ Provide clear appeal and exception process</li>
                                <li className="list-group-item">✓ Communicate decisions transparently</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

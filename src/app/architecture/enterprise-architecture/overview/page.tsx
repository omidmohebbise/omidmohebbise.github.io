export default function EnterpriseArchitectureOverview() {
    return (
        <div className="pt-4">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title mb-3">Enterprise Architecture Overview</h2>
                    <p className="mb-3">Enterprise Architecture (EA) is a comprehensive approach to aligning an organization's IT infrastructure with business objectives. It spans business, data, application, and technology architectures.</p>

                    <div className="row">
                        <div className="col-md-6">
                            <h5>EA Domains (The Four Pillars)</h5>
                            <ul className="list-group list-group-flush mb-4">
                                <li className="list-group-item"><strong>Business Architecture:</strong> Strategy, processes, organizational structure</li>
                                <li className="list-group-item"><strong>Application Architecture:</strong> Software systems and their interactions</li>
                                <li className="list-group-item"><strong>Data Architecture:</strong> Data management and governance</li>
                                <li className="list-group-item"><strong>Technology Architecture:</strong> Infrastructure, platforms, and tools</li>
                            </ul>

                            <h5>EA Frameworks</h5>
                            <ul className="list-unstyled mb-4">
                                <li><strong>TOGAF:</strong> The Open Group Architecture Framework (industry standard)</li>
                                <li><strong>Zachman:</strong> Enterprise ontology (six perspectives)</li>
                                <li><strong>Federal Enterprise Architecture (FEA):</strong> US government standard</li>
                                <li><strong>ArchiMate:</strong> Modeling language for EA</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h5>EA Governance</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2"><strong>Architecture Board:</strong> Reviews and approves architectures</li>
                                <li className="mb-2"><strong>Enterprise Architects:</strong> Strategic alignment and planning</li>
                                <li className="mb-2"><strong>Solution Architects:</strong> Implement architectures for specific initiatives</li>
                                <li className="mb-2"><strong>Technology Governance:</strong> Standards, compliance, risk management</li>
                                <li className="mb-2"><strong>Portfolio Management:</strong> Prioritize and balance initiatives</li>
                                <li className="mb-2"><strong>Change Management:</strong> Manage organizational transformation</li>
                            </ul>

                            <h5>EA Deliverables</h5>
                            <ul className="list-unstyled">
                                <li><strong>Architecture Roadmap:</strong> Future state vision and transition plan</li>
                                <li><strong>Standards & Guidelines:</strong> Technology choices and patterns</li>
                                <li><strong>Risk & Compliance:</strong> Security and regulatory assessment</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-12">
                            <h5>Enterprise Architecture Benefits</h5>
                            <div className="row">
                                <div className="col-md-6">
                                    <ul className="list-unstyled">
                                        <li>✓ <strong>Strategic Alignment:</strong> IT supports business goals</li>
                                        <li>✓ <strong>Cost Reduction:</strong> Eliminate redundancy, optimize infrastructure</li>
                                        <li>✓ <strong>Agility:</strong> Faster time to market, easier pivots</li>
                                        <li>✓ <strong>Standardization:</strong> Consistency, reduced complexity</li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <ul className="list-unstyled">
                                        <li>✓ <strong>Risk Management:</strong> Proactive identification and mitigation</li>
                                        <li>✓ <strong>Compliance:</strong> Meet regulatory requirements</li>
                                        <li>✓ <strong>Interoperability:</strong> Systems work together seamlessly</li>
                                        <li>✓ <strong>Innovation:</strong> Enable new capabilities and opportunities</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-12">
                            <h5>Common EA Challenges</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><strong>Executive Buy-in:</strong> EA seen as overhead, not strategic</li>
                                <li className="list-group-item"><strong>Legacy Systems:</strong> Technical debt and outdated infrastructure</li>
                                <li className="list-group-item"><strong>Organizational Silos:</strong> Business and IT misalignment</li>
                                <li className="list-group-item"><strong>Rapid Change:</strong> Architecture can't keep pace with business</li>
                                <li className="list-group-item"><strong>Talent:</strong> Shortage of experienced architects</li>
                                <li className="list-group-item"><strong>Governance Overhead:</strong> Slowing innovation rather than enabling it</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function DataDrivenCulturePage() {
    return (
        <div className="pt-4">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title mb-3">Data-Driven Culture</h2>

                    <div className="row">
                        <div className="col-md-6">
                            <h5 className="mb-2">What "Data-Driven" Means</h5>
                            <p className="lead">A data-driven culture prioritizes evidence and metrics over opinion and intuition when making decisions.</p>
                            <ul className="list-group list-group-flush mb-3">
                                <li className="list-group-item"><strong>Evidence-Based Decisions:</strong> Decisions supported by analysis</li>
                                <li className="list-group-item"><strong>Transparency:</strong> Share data and insights across teams</li>
                                <li className="list-group-item"><strong>Accountability:</strong> Measure performance against data metrics</li>
                                <li className="list-group-item"><strong>Continuous Improvement:</strong> Learn and iterate with data</li>
                                <li className="list-group-item"><strong>Experimentation:</strong> A/B tests and controlled experiments</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h5 className="mb-2">Building Data Culture</h5>
                            <ul className="list-group list-group-flush mb-3">
                                <li className="list-group-item"><strong>Leadership Buy-In:</strong> Executive sponsorship</li>
                                <li className="list-group-item"><strong>Data Literacy:</strong> Train employees to understand data</li>
                                <li className="list-group-item"><strong>Accessibility:</strong> Make tools easy for non-technical users</li>
                                <li className="list-group-item"><strong>Incentives:</strong> Reward data-driven outcomes</li>
                                <li className="list-group-item"><strong>Failure Tolerance:</strong> Allow low-risk experiments</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6">
                            <h5>Roles & Responsibilities</h5>
                            <div className="mb-3">
                                <h6 className="mb-1">Business Users</h6>
                                <ul>
                                    <li>Define data needs and questions</li>
                                    <li>Interpret insights and act</li>
                                    <li>Provide domain expertise</li>
                                </ul>
                            </div>

                            <div>
                                <h6 className="mb-1">Data Teams</h6>
                                <ul>
                                    <li>Design analytical solutions</li>
                                    <li>Ensure data quality</li>
                                    <li>Communicate findings</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <h5>Org Roles Continued</h5>
                            <div className="mb-3">
                                <h6 className="mb-1">IT & Engineering</h6>
                                <ul>
                                    <li>Build and maintain infrastructure</li>
                                    <li>Ensure security and compliance</li>
                                </ul>
                            </div>
                            <div>
                                <h6 className="mb-1">Leadership</h6>
                                <ul>
                                    <li>Set strategy and allocate resources</li>
                                    <li>Model data-driven decision-making</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-12">
                            <h5>Challenges in Building Data Culture</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><strong>Resistance to Change:</strong> Not all employees embrace new ways</li>
                                <li className="list-group-item"><strong>Data Silos:</strong> Departments hoard data</li>
                                <li className="list-group-item"><strong>Tool Complexity:</strong> Tools overwhelm non-technical users</li>
                                <li className="list-group-item"><strong>Time to Insight:</strong> Slow analytics delay decisions</li>
                                <li className="list-group-item"><strong>Skill Gaps:</strong> Limited data literacy</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

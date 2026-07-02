export default function SoftwareArchitectureRolesResponsibilities() {
    return (
        <div className="container py-5">
            <p className="section-label">Architecture</p>
            <h1 className="section-title">Roles &amp; Responsibilities</h1>
            <hr className="section-rule" />
            <div className="card mb-4 shadow-sm">
                <div className="card-body">

                    <div className="row">
                        <div className="col-md-6">
                            <h5>Solution Architect</h5>
                            <ul className="list-group list-group-flush mb-3">
                                <li className="list-group-item">Design end-to-end solutions</li>
                                <li className="list-group-item">Align architecture with business requirements</li>
                                <li className="list-group-item">Make technology and design decisions</li>
                                <li className="list-group-item">Review and validate implementation</li>
                            </ul>

                            <h5>System Architect</h5>
                            <ul className="list-group list-group-flush mb-3">
                                <li className="list-group-item">Define system structure and interfaces</li>
                                <li className="list-group-item">Ensure scalability and reliability</li>
                                <li className="list-group-item">Handle integration points</li>
                                <li className="list-group-item">Performance and optimization</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h5>Technical Lead</h5>
                            <ul className="list-group list-group-flush mb-3">
                                <li className="list-group-item">Translate architecture into code</li>
                                <li className="list-group-item">Guide team on design decisions</li>
                                <li className="list-group-item">Code review and quality assurance</li>
                                <li className="list-group-item">Mentoring and knowledge sharing</li>
                            </ul>

                            <h5>Development Team</h5>
                            <ul className="list-group list-group-flush mb-3">
                                <li className="list-group-item">Implement architectural decisions</li>
                                <li className="list-group-item">Follow established patterns</li>
                                <li className="list-group-item">Provide feedback on architecture</li>
                                <li className="list-group-item">Maintain code quality and documentation</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

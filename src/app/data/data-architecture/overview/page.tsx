export default function DataArchitectureOverviewPage() {
    return (
        <div className="container py-5">
            <p className="section-label">Data</p>
            <h1 className="section-title">Data Architecture Overview</h1>
            <hr className="section-rule" />

            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <h5>What is Data Architecture?</h5>
                            <p className="mb-2">Blueprint that defines how data is collected, stored, processed, and consumed across an organization.</p>
                            <p className="mb-0">It connects business requirements to technical implementations.</p>
                        </div>

                        <div className="col-md-6">
                            <h5>Conceptual vs Logical vs Physical</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><strong>Conceptual:</strong> High-level business entities and relationships</li>
                                <li className="list-group-item"><strong>Logical:</strong> Detailed data models and flows without implementation details</li>
                                <li className="list-group-item"><strong>Physical:</strong> Actual storage, technologies and infrastructure</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-12">
                            <h5>When to Use Each</h5>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-1">Conceptual for stakeholder alignment</li>
                                <li className="mb-1">Logical for design and data modeling</li>
                                <li className="mb-0">Physical for implementation and operations</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

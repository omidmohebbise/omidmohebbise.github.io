export default function SoftwareArchitectureKeyComponents() {
    return (
        <div className="pt-4">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title mb-3">Key Components of Software Architecture</h2>

                    <div className="row">
                        <div className="col-md-6">
                            <h5>Components (Building Blocks)</h5>
                            <ul className="list-group list-group-flush mb-3">
                                <li className="list-group-item">Modules or services encapsulating functionality</li>
                                <li className="list-group-item">Clear responsibilities and boundaries</li>
                                <li className="list-group-item">Reusable and independently deployable</li>
                                <li className="list-group-item">Examples: UI, API, database, cache</li>
                            </ul>

                            <h5 className="mt-4">Connectors (Interactions)</h5>
                            <ul className="list-group list-group-flush mb-3">
                                <li className="list-group-item">Communication patterns between components</li>
                                <li className="list-group-item">Synchronous (REST API, RPC) or asynchronous (messaging)</li>
                                <li className="list-group-item">Define data flow and dependencies</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h5>Cross-Cutting Concerns</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2"><strong>Security:</strong> Authentication, authorization, encryption</li>
                                <li className="mb-2"><strong>Logging & Monitoring:</strong> Observability across system</li>
                                <li className="mb-2"><strong>Error Handling:</strong> Graceful degradation, retries</li>
                                <li className="mb-2"><strong>Caching:</strong> Performance optimization</li>
                                <li className="mb-2"><strong>Rate Limiting:</strong> Protect against abuse</li>
                                <li className="mb-2"><strong>Transaction Management:</strong> Data consistency</li>
                            </ul>

                            <h5 className="mt-4">Architectural Decisions</h5>
                            <ul className="list-unstyled">
                                <li>Technology choices (languages, frameworks)</li>
                                <li>Deployment strategy</li>
                                <li>Data storage and retrieval</li>
                                <li>Performance targets and SLAs</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

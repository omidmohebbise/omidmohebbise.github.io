export default function DataManagementPracticesPage() {
    return (
        <div className="container py-5">
            <p className="section-label">Data</p>
            <h1 className="section-title">Data Management Practices</h1>
            <hr className="section-rule" />

            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <h5>Data Quality</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Profiling, validation rules, automated checks</li>
                                <li className="list-group-item">Alerting on anomalies and thresholds</li>
                                <li className="list-group-item">Data contracts between producers and consumers</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h5>Master Data Management</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Single source of truth for critical entities (customers, products)</li>
                                <li className="list-group-item">Data deduplication and reconciliation processes</li>
                                <li className="list-group-item">Define canonical identifiers and mapping rules</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6">
                            <h5>Metadata & Lineage</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Catalog datasets with descriptions, owners, and schemas</li>
                                <li className="list-group-item">Track transformations for auditability</li>
                                <li className="list-group-item">Use tools like Apache Atlas, Amundsen, or DataHub</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h5>Data Ops</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Apply CI/CD to data pipelines using unit tests and regression tests</li>
                                <li className="list-group-item">Monitor pipeline SLAs and health dashboards</li>
                                <li className="list-group-item">Automate deployments and rollback strategies</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

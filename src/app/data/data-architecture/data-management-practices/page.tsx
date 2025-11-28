export default function DataManagementPracticesPage() {
    return (
        <div className='pt-2'>
            <h2 className="mb-4 mt-3">Data Management Practices</h2>

            <div className="row">
                <div className="col-md-6">
                    <h3>Data Quality</h3>
                    <ul>
                        <li>Profiling, validation rules, automated checks</li>
                        <li>Alerting on anomalies and thresholds</li>
                        <li>Data contracts between producers and consumers</li>
                    </ul>

                    <h3>Metadata & Lineage</h3>
                    <ul>
                        <li>Catalog datasets with descriptions, owners, and schemas</li>
                        <li>Track transformations for auditability</li>
                        <li>Use tools like Apache Atlas, Amundsen, or DataHub</li>
                    </ul>
                </div>

                <div className="col-md-6">
                    <h3>Master Data Management</h3>
                    <ul>
                        <li>Single source of truth for critical entities (customers, products)</li>
                        <li>Data deduplication and reconciliation processes</li>
                        <li>Define canonical identifiers and mapping rules</li>
                    </ul>

                    <h3>Data Ops</h3>
                    <ul>
                        <li>Apply CI/CD to data pipelines using unit tests and regression tests</li>
                        <li>Monitor pipeline SLAs and health dashboards</li>
                        <li>Automate deployments and rollback strategies</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default function CoreComponentsPage() {
    return (
        <div className="container py-5">
            <p className="section-label">Data</p>
            <h1 className="section-title">Core Components</h1>
            <hr className="section-rule" />

            <div className="row">
                <div className="col-md-6">
                    <h3>Source Systems</h3>
                    <ul>
                        <li>Operational databases, third-party APIs, IoT devices, logs</li>
                        <li>Each source has different availability and format expectations</li>
                    </ul>

                    <h3>Ingestion</h3>
                    <ul>
                        <li>Batch ingestion: files, ETL jobs</li>
                        <li>Streaming ingestion: Kafka, Kinesis</li>
                        <li>Ensure idempotency and deduplication where needed</li>
                    </ul>
                </div>

                <div className="col-md-6">
                    <h3>Storage Layers</h3>
                    <ul>
                        <li>Raw/bronze for raw data, silver for cleansed data, gold for served datasets</li>
                        <li>Use object storage for raw, warehouses for served analytics</li>
                    </ul>

                    <h3>Consumption</h3>
                    <ul>
                        <li>BI dashboards, ML models, APIs, data products</li>
                        <li>Provide SLAs for dataset freshness and availability</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

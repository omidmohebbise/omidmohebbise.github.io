export default function CoreComponentsPage() {
    return (
        <div className="container py-5">
            <p className="section-label">Data</p>
            <h1 className="section-title">Core Components</h1>
            <hr className="section-rule" />

            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <h5>Source Systems</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Operational databases, third-party APIs, IoT devices, logs</li>
                                <li className="list-group-item">Each source has different availability and format expectations</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h5>Storage Layers</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Raw/bronze for raw data, silver for cleansed data, gold for served datasets</li>
                                <li className="list-group-item">Use object storage for raw, warehouses for served analytics</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6">
                            <h5>Ingestion</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Batch ingestion: files, ETL jobs</li>
                                <li className="list-group-item">Streaming ingestion: Kafka, Kinesis</li>
                                <li className="list-group-item">Ensure idempotency and deduplication where needed</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h5>Consumption</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">BI dashboards, ML models, APIs, data products</li>
                                <li className="list-group-item">Provide SLAs for dataset freshness and availability</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

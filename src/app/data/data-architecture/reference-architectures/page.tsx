export default function ReferenceArchitecturesPage() {
    return (
        <div className="container py-5">
            <p className="section-label">Data</p>
            <h1 className="section-title">Reference Architectures</h1>
            <hr className="section-rule" />

            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <h5>Data Warehouse Architecture</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Source systems → ETL/ELT → Warehouse → BI tools</li>
                                <li className="list-group-item">Star and snowflake schemas for dimensional modeling</li>
                                <li className="list-group-item">Batch or near-real-time ingestion</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h5>Event-Driven / Streaming</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Producers → Event broker (Kafka) → Stream processors → Serving layer</li>
                                <li className="list-group-item">Designed for low-latency processing and near-real-time analytics</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6">
                            <h5>Data Lake / Lakehouse</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Raw data in object storage → processing engines (Spark) → curated datasets</li>
                                <li className="list-group-item">Lakehouse merges warehouse governance with lake flexibility</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h5>Hybrid Architectures</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Combine batch + stream (Lambda) or unify on stream (Kappa)</li>
                                <li className="list-group-item">Adopt patterns based on use-case and team expertise</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function DataArchitectureDataIngestion() {
    return (
        <div className="pt-4">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title mb-3">Data Ingestion</h2>
                    <p className="mb-3">Data ingestion is the process of moving data from source systems into the data platform. It bridges source systems and the data infrastructure.</p>

                    <div className="row">
                        <div className="col-md-6">
                            <h5>Ingestion Patterns</h5>
                            <ul className="list-group list-group-flush mb-4">
                                <li className="list-group-item"><strong>Batch Ingestion:</strong> Periodic bulk transfers (hourly, daily)</li>
                                <li className="list-group-item"><strong>Micro-batch:</strong> Small frequent batches (every few minutes)</li>
                                <li className="list-group-item"><strong>Real-time Streaming:</strong> Continuous event-by-event ingestion</li>
                                <li className="list-group-item"><strong>Change Data Capture (CDC):</strong> Only new/changed records</li>
                                <li className="list-group-item"><strong>Pull Model:</strong> Data platform polls source systems</li>
                                <li className="list-group-item"><strong>Push Model:</strong> Source systems push data to platform</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h5>Ingestion Technologies</h5>
                            <ul className="list-unstyled">
                                <li><strong>Apache Kafka:</strong> Real-time event streaming</li>
                                <li><strong>Apache NiFi:</strong> Data routing and transformation</li>
                                <li><strong>Apache Airflow:</strong> Workflow orchestration</li>
                                <li><strong>Talend, Informatica:</strong> Commercial ETL tools</li>
                                <li><strong>AWS Glue, Azure Data Factory:</strong> Cloud-native platforms</li>
                                <li><strong>Cloud Pub/Sub, Kinesis:</strong> Managed streaming services</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-12">
                            <h5>Ingestion Architecture Patterns</h5>
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Pattern</th>
                                            <th>Use Case</th>
                                            <th>Latency</th>
                                            <th>Tools</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>Batch ETL</strong></td>
                                            <td>Large file transfers, daily reconciliation</td>
                                            <td>Hours to days</td>
                                            <td>Airflow, Talend</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Lambda (Kappa)</strong></td>
                                            <td>Both batch and stream in same pipeline</td>
                                            <td>Minutes to hours</td>
                                            <td>Kafka, Spark</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Stream Processing</strong></td>
                                            <td>Real-time analytics, event-driven actions</td>
                                            <td>Seconds to milliseconds</td>
                                            <td>Kafka, Flink, Spark Streaming</td>
                                        </tr>
                                        <tr>
                                            <td><strong>CDC + Event Streaming</strong></td>
                                            <td>Synchronized copies, real-time replication</td>
                                            <td>Near real-time (seconds)</td>
                                            <td>Debezium, Kafka</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-12">
                            <h5>Key Ingestion Challenges & Solutions</h5>
                            <div className="row">
                                <div className="col-md-6">
                                    <p><strong>Scalability:</strong> Handle growing data volumes</p>
                                    <ul className="list-unstyled mb-3">
                                        <li>→ Distributed architecture, partitioning, auto-scaling</li>
                                    </ul>

                                    <p><strong>Reliability:</strong> Ensure no data loss</p>
                                    <ul className="list-unstyled mb-3">
                                        <li>→ Exactly-once semantics, deduplication, checkpointing</li>
                                    </ul>

                                    <p><strong>Data Quality:</strong> Validation and cleansing</p>
                                    <ul className="list-unstyled mb-3">
                                        <li>→ Schema validation, type checking, null handling</li>
                                    </ul>
                                </div>

                                <div className="col-md-6">
                                    <p><strong>Monitoring:</strong> Track pipeline health</p>
                                    <ul className="list-unstyled mb-3">
                                        <li>→ Metrics, alerts, SLA monitoring</li>
                                    </ul>

                                    <p><strong>Performance:</strong> Optimize throughput</p>
                                    <ul className="list-unstyled mb-3">
                                        <li>→ Compression, batching, parallel processing</li>
                                    </ul>

                                    <p><strong>Security:</strong> Protect sensitive data</p>
                                    <ul className="list-unstyled mb-3">
                                        <li>→ Encryption in transit/at rest, access control</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

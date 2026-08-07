export default function DataIntegrationPage() {
    return (
        <div className="container py-5">
            <p className="section-label">Data</p>
            <h1 className="section-title">Data Integration</h1>
            <hr className="section-rule" />

            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <h5>APIs (Application Programming Interfaces)</h5>
                            <p className="mb-2"><strong>Service-to-Service Integration</strong></p>

                            <h6>Characteristics</h6>
                            <ul className="list-unstyled mb-3">
                                <li className="mb-1">Synchronous request-response pattern</li>
                                <li className="mb-1">Real-time data exchange</li>
                                <li className="mb-1">Tight coupling between systems</li>
                                <li className="mb-0">Request/response format (JSON, XML)</li>
                            </ul>

                            <h6>Advantages</h6>
                            <ul className="list-unstyled mb-3">
                                <li className="mb-1">Immediate data availability</li>
                                <li className="mb-1">Direct data retrieval without intermediary</li>
                                <li className="mb-0">Standardized protocols (REST, GraphQL)</li>
                            </ul>

                            <h6>Disadvantages</h6>
                            <ul className="list-unstyled mb-3">
                                <li className="mb-1">Limited scale for high-volume data</li>
                                <li className="mb-1">Rate limiting and throttling</li>
                                <li className="mb-1">Network latency</li>
                                <li className="mb-0">Doesn&apos;t work well for large bulk transfers</li>
                            </ul>

                            <h6>Use Cases</h6>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-1">Real-time data lookups</li>
                                <li className="mb-1">User-initiated transactions</li>
                                <li className="mb-1">System-to-system queries</li>
                                <li className="mb-0">Webhook notifications</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h5>Message Queues</h5>
                            <p className="mb-2"><strong>Asynchronous Event-Based Integration</strong></p>

                            <h6>Popular Platforms</h6>
                            <ul className="list-group list-group-flush mb-3">
                                <li className="list-group-item"><strong>RabbitMQ:</strong> Message broker with routing capabilities</li>
                                <li className="list-group-item"><strong>Apache Kafka:</strong> High-throughput event streaming</li>
                                <li className="list-group-item"><strong>AWS SQS:</strong> Managed queue service</li>
                                <li className="list-group-item"><strong>AWS SNS:</strong> Pub/sub for notifications</li>
                            </ul>

                            <h6>Characteristics</h6>
                            <ul className="list-unstyled mb-3">
                                <li className="mb-1">Asynchronous, decoupled systems</li>
                                <li className="mb-1">Producer sends messages to queue</li>
                                <li className="mb-1">Consumer processes at own pace</li>
                                <li className="mb-0">Messages persisted until consumed</li>
                            </ul>

                            <h6>Advantages</h6>
                            <ul className="list-unstyled mb-3">
                                <li className="mb-1">Loose coupling between systems</li>
                                <li className="mb-1">High throughput for data volumes</li>
                                <li className="mb-1">Fault tolerance and retry logic</li>
                                <li className="mb-0">Scales better than APIs</li>
                            </ul>

                            <h6>Use Cases</h6>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-1">Event notification systems</li>
                                <li className="mb-1">Data pipeline orchestration</li>
                                <li className="mb-1">Asynchronous job processing</li>
                                <li className="mb-0">Stream data integration</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6">
                            <h5>File-Based Integration</h5>
                            <p className="mb-2"><strong>Batch File Transfers</strong></p>

                            <h6>Methods</h6>
                            <ul className="list-group list-group-flush mb-3">
                                <li className="list-group-item"><strong>SFTP/SCP:</strong> Secure file transfer protocols</li>
                                <li className="list-group-item"><strong>Cloud Storage:</strong> S3, Azure Blob, GCS</li>
                                <li className="list-group-item"><strong>EDI (Electronic Data Interchange):</strong> Structured document format</li>
                                <li className="list-group-item"><strong>CSV/JSON Files:</strong> Common export/import formats</li>
                            </ul>

                            <h6>Characteristics</h6>
                            <ul className="list-unstyled mb-3">
                                <li className="mb-1">Periodic file drops (daily, hourly)</li>
                                <li className="mb-1">Schema typically defined upfront</li>
                                <li className="mb-0">Retry logic at file level</li>
                            </ul>

                            <h6>Advantages</h6>
                            <ul className="list-unstyled mb-3">
                                <li className="mb-1">Works across different systems</li>
                                <li className="mb-1">Legacy system integration</li>
                                <li className="mb-0">Simple to implement</li>
                            </ul>

                            <h6>Disadvantages</h6>
                            <ul className="list-unstyled mb-3">
                                <li className="mb-1">High latency (batch schedule dependent)</li>
                                <li className="mb-1">Manual file management</li>
                                <li className="mb-0">Schema changes problematic</li>
                            </ul>

                            <h6>Use Cases</h6>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-1">Legacy system integration</li>
                                <li className="mb-1">Supplier data exchanges</li>
                                <li className="mb-1">Daily data exports</li>
                                <li className="mb-0">Data archival</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h5>Change Data Capture (CDC)</h5>
                            <p className="mb-2"><strong>Continuous Data Synchronization</strong></p>

                            <h6>Definition</h6>
                            <ul className="list-unstyled mb-3">
                                <li className="mb-1">Identifies and captures data changes (inserts, updates, deletes)</li>
                                <li className="mb-1">Enables continuous synchronization between systems</li>
                                <li className="mb-0">Real-time or near-real-time replication</li>
                            </ul>

                            <h6>Technologies</h6>
                            <ul className="list-group list-group-flush mb-3">
                                <li className="list-group-item"><strong>Debezium:</strong> Open-source CDC platform</li>
                                <li className="list-group-item"><strong>AWS DMS:</strong> Database Migration Service with CDC</li>
                                <li className="list-group-item"><strong>Qlik Replicate:</strong> Enterprise CDC solution</li>
                                <li className="list-group-item"><strong>Native CDC:</strong> Built into many databases (Postgres, MySQL, SQL Server)</li>
                            </ul>

                            <h6>Advantages</h6>
                            <ul className="list-unstyled mb-3">
                                <li className="mb-1">Real-time data synchronization</li>
                                <li className="mb-1">Low latency capture of changes</li>
                                <li className="mb-1">Efficient (only changes captured)</li>
                                <li className="mb-0">Maintains data consistency across systems</li>
                            </ul>

                            <h6>Use Cases</h6>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-1">Master data management</li>
                                <li className="mb-1">Real-time data warehouse updates</li>
                                <li className="mb-1">Database replication</li>
                                <li className="mb-0">Audit logging</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-12">
                            <h5>Integration Pattern Comparison</h5>
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Pattern</th>
                                            <th>Latency</th>
                                            <th>Throughput</th>
                                            <th>Complexity</th>
                                            <th>Best For</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>APIs</strong></td>
                                            <td>Low (real-time)</td>
                                            <td>Low-Medium</td>
                                            <td>Low</td>
                                            <td>Real-time lookups</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Message Queues</strong></td>
                                            <td>Low-Medium</td>
                                            <td>Very High</td>
                                            <td>Medium</td>
                                            <td>Event pipelines</td>
                                        </tr>
                                        <tr>
                                            <td><strong>File Transfer</strong></td>
                                            <td>High (batch)</td>
                                            <td>Medium</td>
                                            <td>Low-Medium</td>
                                            <td>Legacy systems</td>
                                        </tr>
                                        <tr>
                                            <td><strong>CDC</strong></td>
                                            <td>Low-Medium</td>
                                            <td>High</td>
                                            <td>High</td>
                                            <td>Sync replication</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function DataIntegrationPage() {
    return (
        <div className='pt-2'>
            <h2 className="mb-4 mt-3">Data Integration</h2>

            <div className="row">
                <div className="col-md-6">
                    <h3>APIs (Application Programming Interfaces)</h3>
                    <p><strong>Service-to-Service Integration</strong></p>

                    <h4>Characteristics</h4>
                    <ul>
                        <li>Synchronous request-response pattern</li>
                        <li>Real-time data exchange</li>
                        <li>Tight coupling between systems</li>
                        <li>Request/response format (JSON, XML)</li>
                    </ul>

                    <h4>Advantages</h4>
                    <ul>
                        <li>Immediate data availability</li>
                        <li>Direct data retrieval without intermediary</li>
                        <li>Standardized protocols (REST, GraphQL)</li>
                    </ul>

                    <h4>Disadvantages</h4>
                    <ul>
                        <li>Limited scale for high-volume data</li>
                        <li>Rate limiting and throttling</li>
                        <li>Network latency</li>
                        <li>Doesn't work well for large bulk transfers</li>
                    </ul>

                    <h4>Use Cases</h4>
                    <ul>
                        <li>Real-time data lookups</li>
                        <li>User-initiated transactions</li>
                        <li>System-to-system queries</li>
                        <li>Webhook notifications</li>
                    </ul>
                </div>

                <div className="col-md-6">
                    <h3>Message Queues</h3>
                    <p><strong>Asynchronous Event-Based Integration</strong></p>

                    <h4>Popular Platforms</h4>
                    <ul>
                        <li><strong>RabbitMQ:</strong> Message broker with routing capabilities</li>
                        <li><strong>Apache Kafka:</strong> High-throughput event streaming</li>
                        <li><strong>AWS SQS:</strong> Managed queue service</li>
                        <li><strong>AWS SNS:</strong> Pub/sub for notifications</li>
                    </ul>

                    <h4>Characteristics</h4>
                    <ul>
                        <li>Asynchronous, decoupled systems</li>
                        <li>Producer sends messages to queue</li>
                        <li>Consumer processes at own pace</li>
                        <li>Messages persisted until consumed</li>
                    </ul>

                    <h4>Advantages</h4>
                    <ul>
                        <li>Loose coupling between systems</li>
                        <li>High throughput for data volumes</li>
                        <li>Fault tolerance and retry logic</li>
                        <li>Scales better than APIs</li>
                    </ul>

                    <h4>Use Cases</h4>
                    <ul>
                        <li>Event notification systems</li>
                        <li>Data pipeline orchestration</li>
                        <li>Asynchronous job processing</li>
                        <li>Stream data integration</li>
                    </ul>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-md-6">
                    <h3>File-Based Integration</h3>
                    <p><strong>Batch File Transfers</strong></p>

                    <h4>Methods</h4>
                    <ul>
                        <li><strong>SFTP/SCP:</strong> Secure file transfer protocols</li>
                        <li><strong>Cloud Storage:</strong> S3, Azure Blob, GCS</li>
                        <li><strong>EDI (Electronic Data Interchange):</strong> Structured document format</li>
                        <li><strong>CSV/JSON Files:</strong> Common export/import formats</li>
                    </ul>

                    <h4>Characteristics</h4>
                    <ul>
                        <li>Periodic file drops (daily, hourly)</li>
                        <li>Schema typically defined upfront</li>
                        <li>Retry logic at file level</li>
                    </ul>

                    <h4>Advantages</h4>
                    <ul>
                        <li>Works across different systems</li>
                        <li>Legacy system integration</li>
                        <li>Simple to implement</li>
                    </ul>

                    <h4>Disadvantages</h4>
                    <ul>
                        <li>High latency (batch schedule dependent)</li>
                        <li>Manual file management</li>
                        <li>Schema changes problematic</li>
                    </ul>

                    <h4>Use Cases</h4>
                    <ul>
                        <li>Legacy system integration</li>
                        <li>Supplier data exchanges</li>
                        <li>Daily data exports</li>
                        <li>Data archival</li>
                    </ul>
                </div>

                <div className="col-md-6">
                    <h3>Change Data Capture (CDC)</h3>
                    <p><strong>Continuous Data Synchronization</strong></p>

                    <h4>Definition</h4>
                    <ul>
                        <li>Identifies and captures data changes (inserts, updates, deletes)</li>
                        <li>Enables continuous synchronization between systems</li>
                        <li>Real-time or near-real-time replication</li>
                    </ul>

                    <h4>Technologies</h4>
                    <ul>
                        <li><strong>Debezium:</strong> Open-source CDC platform</li>
                        <li><strong>AWS DMS:</strong> Database Migration Service with CDC</li>
                        <li><strong>Qlik Replicate:</strong> Enterprise CDC solution</li>
                        <li><strong>Native CDC:</strong> Built into many databases (Postgres, MySQL, SQL Server)</li>
                    </ul>

                    <h4>Advantages</h4>
                    <ul>
                        <li>Real-time data synchronization</li>
                        <li>Low latency capture of changes</li>
                        <li>Efficient (only changes captured)</li>
                        <li>Maintains data consistency across systems</li>
                    </ul>

                    <h4>Use Cases</h4>
                    <ul>
                        <li>Master data management</li>
                        <li>Real-time data warehouse updates</li>
                        <li>Database replication</li>
                        <li>Audit logging</li>
                    </ul>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-12">
                    <h3>Integration Pattern Comparison</h3>
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
    )
}

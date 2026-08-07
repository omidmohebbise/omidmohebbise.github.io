export default function RealTimeStreamingPage() {
    return (
        <div className="container py-5">
            <p className="section-label">Data</p>
            <h1 className="section-title">Real-Time / Streaming Processing</h1>
            <hr className="section-rule" />

            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <h5>Definition &amp; Characteristics</h5>
                            <p className="mb-2"><strong>Stream Processing:</strong> Process events as they arrive, in real-time</p>

                            <h6 className="mt-3">Key Traits</h6>
                            <ul className="list-group list-group-flush mb-3">
                                <li className="list-group-item"><strong>Event-Driven:</strong> Triggers on incoming data events</li>
                                <li className="list-group-item"><strong>Low Latency:</strong> Sub-second response time</li>
                                <li className="list-group-item"><strong>Continuous Operation:</strong> Always listening for new events</li>
                                <li className="list-group-item"><strong>Stateful:</strong> Maintains state across events (aggregations, windows)</li>
                                <li className="list-group-item"><strong>Scalable:</strong> Handles variable throughput</li>
                            </ul>

                            <h6>Processing Model</h6>
                            <ol className="list-group list-group-numbered list-group-flush">
                                <li className="list-group-item">Events arrive continuously from sources</li>
                                <li className="list-group-item">Processing engine ingests and processes immediately</li>
                                <li className="list-group-item">Apply transformations and enrichments</li>
                                <li className="list-group-item">Generate real-time alerts or actions</li>
                                <li className="list-group-item">Output to real-time destinations (dashboards, databases)</li>
                            </ol>
                        </div>

                        <div className="col-md-6">
                            <h5>Common Use Cases</h5>
                            <ul className="list-group list-group-flush mb-3">
                                <li className="list-group-item"><strong>Fraud Detection:</strong> Real-time transaction monitoring</li>
                                <li className="list-group-item"><strong>Real-Time Dashboards:</strong> Live metrics and KPIs</li>
                                <li className="list-group-item"><strong>IoT Analytics:</strong> Sensor data processing</li>
                                <li className="list-group-item"><strong>User Activity Tracking:</strong> Click streams, user behavior</li>
                                <li className="list-group-item"><strong>Network Monitoring:</strong> Security alerts, anomalies</li>
                                <li className="list-group-item"><strong>Personalization:</strong> Real-time recommendations</li>
                                <li className="list-group-item"><strong>Anomaly Detection:</strong> Immediate outlier identification</li>
                            </ul>

                            <h5>Advantages</h5>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-1">Immediate insights and reactions</li>
                                <li className="mb-1">Timely fraud detection and risk mitigation</li>
                                <li className="mb-1">Real-time personalization and engagement</li>
                                <li className="mb-0">Better user experience with instant updates</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6">
                            <h5>Disadvantages</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><strong>Higher Cost:</strong> Requires continuous infrastructure</li>
                                <li className="list-group-item"><strong>Complexity:</strong> Harder to debug and manage state</li>
                                <li className="list-group-item"><strong>Operational Overhead:</strong> More monitoring and tuning needed</li>
                                <li className="list-group-item"><strong>Ordering Issues:</strong> Events may arrive out of order</li>
                                <li className="list-group-item"><strong>Exactly-Once Semantics:</strong> Harder to guarantee vs batch</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h5>Popular Platforms</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><strong>Apache Kafka:</strong> Event streaming platform, highly scalable</li>
                                <li className="list-group-item"><strong>Apache Flink:</strong> Stream processing with exactly-once semantics</li>
                                <li className="list-group-item"><strong>AWS Kinesis:</strong> Managed streaming for AWS</li>
                                <li className="list-group-item"><strong>Apache Spark Streaming:</strong> Micro-batching approach</li>
                                <li className="list-group-item"><strong>Kafka Streams:</strong> Stream processing library for Kafka</li>
                                <li className="list-group-item"><strong>RabbitMQ:</strong> Message queue for streaming</li>
                                <li className="list-group-item"><strong>Redis Streams:</strong> Lightweight streaming</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6">
                            <h5>Stream Processing Concepts</h5>

                            <h6 className="mt-2">Windowing</h6>
                            <ul className="list-group list-group-flush mb-3">
                                <li className="list-group-item"><strong>Tumbling Window:</strong> Fixed, non-overlapping intervals</li>
                                <li className="list-group-item"><strong>Sliding Window:</strong> Overlapping intervals</li>
                                <li className="list-group-item"><strong>Session Window:</strong> Group events with inactivity gap</li>
                            </ul>

                            <h6>State Management</h6>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-1">Track aggregate values across events</li>
                                <li className="mb-1">Checkpointing for fault tolerance</li>
                                <li className="mb-0">State backends (in-memory, RocksDB, external)</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h5>Architecture Patterns</h5>

                            <h6 className="mt-2">Lambda Architecture</h6>
                            <ul className="list-unstyled mb-3">
                                <li className="mb-1">Combines batch + real-time layers</li>
                                <li className="mb-1">Batch for accuracy, stream for speed</li>
                                <li className="mb-0">Merge views for complete picture</li>
                            </ul>

                            <h6>Kappa Architecture</h6>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-1">Stream processing all the way</li>
                                <li className="mb-1">Replay events for reprocessing</li>
                                <li className="mb-0">Simpler than Lambda</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-12">
                            <h5>Batch vs Stream Comparison</h5>
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Characteristic</th>
                                            <th>Batch</th>
                                            <th>Stream</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>Latency</strong></td>
                                            <td>Minutes to hours</td>
                                            <td>Milliseconds to seconds</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Throughput</strong></td>
                                            <td>Very high for large volumes</td>
                                            <td>High continuous throughput</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Cost</strong></td>
                                            <td>Lower (off-peak processing)</td>
                                            <td>Higher (always-on infrastructure)</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Complexity</strong></td>
                                            <td>Simpler</td>
                                            <td>More complex (state, ordering)</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Best For</strong></td>
                                            <td>Historical analysis, reports</td>
                                            <td>Real-time alerts, dashboards</td>
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

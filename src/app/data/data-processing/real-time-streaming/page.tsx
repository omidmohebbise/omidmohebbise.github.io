export default function RealTimeStreamingPage() {
    return (
        <div className='pt-2'>
            <h2 className="mb-4 mt-3">Real-Time / Streaming Processing</h2>

            <div className="row">
                <div className="col-md-6">
                    <h3>Definition & Characteristics</h3>
                    <p><strong>Stream Processing:</strong> Process events as they arrive, in real-time</p>

                    <h4>Key Traits</h4>
                    <ul>
                        <li><strong>Event-Driven:</strong> Triggers on incoming data events</li>
                        <li><strong>Low Latency:</strong> Sub-second response time</li>
                        <li><strong>Continuous Operation:</strong> Always listening for new events</li>
                        <li><strong>Stateful:</strong> Maintains state across events (aggregations, windows)</li>
                        <li><strong>Scalable:</strong> Handles variable throughput</li>
                    </ul>

                    <h4>Processing Model</h4>
                    <ol>
                        <li>Events arrive continuously from sources</li>
                        <li>Processing engine ingests and processes immediately</li>
                        <li>Apply transformations and enrichments</li>
                        <li>Generate real-time alerts or actions</li>
                        <li>Output to real-time destinations (dashboards, databases)</li>
                    </ol>
                </div>

                <div className="col-md-6">
                    <h3>Common Use Cases</h3>
                    <ul>
                        <li><strong>Fraud Detection:</strong> Real-time transaction monitoring</li>
                        <li><strong>Real-Time Dashboards:</strong> Live metrics and KPIs</li>
                        <li><strong>IoT Analytics:</strong> Sensor data processing</li>
                        <li><strong>User Activity Tracking:</strong> Click streams, user behavior</li>
                        <li><strong>Network Monitoring:</strong> Security alerts, anomalies</li>
                        <li><strong>Personalization:</strong> Real-time recommendations</li>
                        <li><strong>Anomaly Detection:</strong> Immediate outlier identification</li>
                    </ul>

                    <h3>Advantages</h3>
                    <ul>
                        <li>Immediate insights and reactions</li>
                        <li>Timely fraud detection and risk mitigation</li>
                        <li>Real-time personalization and engagement</li>
                        <li>Better user experience with instant updates</li>
                    </ul>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-md-6">
                    <h3>Disadvantages</h3>
                    <ul>
                        <li><strong>Higher Cost:</strong> Requires continuous infrastructure</li>
                        <li><strong>Complexity:</strong> Harder to debug and manage state</li>
                        <li><strong>Operational Overhead:</strong> More monitoring and tuning needed</li>
                        <li><strong>Ordering Issues:</strong> Events may arrive out of order</li>
                        <li><strong>Exactly-Once Semantics:</strong> Harder to guarantee vs batch</li>
                    </ul>
                </div>

                <div className="col-md-6">
                    <h3>Popular Platforms</h3>
                    <ul>
                        <li><strong>Apache Kafka:</strong> Event streaming platform, highly scalable</li>
                        <li><strong>Apache Flink:</strong> Stream processing with exactly-once semantics</li>
                        <li><strong>AWS Kinesis:</strong> Managed streaming for AWS</li>
                        <li><strong>Apache Spark Streaming:</strong> Micro-batching approach</li>
                        <li><strong>Kafka Streams:</strong> Stream processing library for Kafka</li>
                        <li><strong>RabbitMQ:</strong> Message queue for streaming</li>
                        <li><strong>Redis Streams:</strong> Lightweight streaming</li>
                    </ul>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-md-6">
                    <h3>Stream Processing Concepts</h3>

                    <h4>Windowing</h4>
                    <ul>
                        <li><strong>Tumbling Window:</strong> Fixed, non-overlapping intervals</li>
                        <li><strong>Sliding Window:</strong> Overlapping intervals</li>
                        <li><strong>Session Window:</strong> Group events with inactivity gap</li>
                    </ul>

                    <h4>State Management</h4>
                    <ul>
                        <li>Track aggregate values across events</li>
                        <li>Checkpointing for fault tolerance</li>
                        <li>State backends (in-memory, RocksDB, external)</li>
                    </ul>
                </div>

                <div className="col-md-6">
                    <h3>Architecture Patterns</h3>

                    <h4>Lambda Architecture</h4>
                    <ul>
                        <li>Combines batch + real-time layers</li>
                        <li>Batch for accuracy, stream for speed</li>
                        <li>Merge views for complete picture</li>
                    </ul>

                    <h4>Kappa Architecture</h4>
                    <ul>
                        <li>Stream processing all the way</li>
                        <li>Replay events for reprocessing</li>
                        <li>Simpler than Lambda</li>
                    </ul>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-12">
                    <h3>Batch vs Stream Comparison</h3>
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
    )
}

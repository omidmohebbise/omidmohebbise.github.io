export default function BigDataArchitecture() {
    return (
        <div className="pt-4">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title mb-3">Big Data Architecture</h2>
                    <p className="mb-3">Big Data architecture processes, stores, and analyzes massive volumes of data at scale. It addresses the 5 V's: Volume, Velocity, Variety, Veracity, Value.</p>

                    <div className="row">
                        <div className="col-md-6">
                            <h5>Big Data Processing Models</h5>
                            <ul className="list-group list-group-flush mb-4">
                                <li className="list-group-item"><strong>Batch Processing:</strong> Large datasets processed periodically (Hadoop, Spark)</li>
                                <li className="list-group-item"><strong>Stream Processing:</strong> Continuous data flow (Kafka, Flink, Spark Streaming)</li>
                                <li className="list-group-item">Lambda Architecture: Batch + stream in parallel</li>
                                <li className="list-group-item">Kappa Architecture: Stream-only (simpler alternative)</li>
                                <li className="list-group-item"><strong>Interactive Queries:</strong> Real-time exploration (Presto, Druid)</li>
                            </ul>

                            <h5>Big Data Technologies</h5>
                            <ul className="list-unstyled mb-4">
                                <li><strong>Apache Hadoop:</strong> Distributed storage (HDFS) and processing (MapReduce)</li>
                                <li><strong>Apache Spark:</strong> Distributed computing with SQL support</li>
                                <li><strong>Apache Kafka:</strong> Event streaming platform</li>
                                <li><strong>Flink/Storm:</strong> Stream processing frameworks</li>
                                <li><strong>Hive/Presto:</strong> SQL query engines for Hadoop</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h5>The 5 Vs of Big Data</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2"><strong>Volume:</strong> Petabytes to exabytes of data</li>
                                <li className="mb-2"><strong>Velocity:</strong> Real-time to near real-time data generation</li>
                                <li className="mb-2"><strong>Variety:</strong> Structured, semi-structured, unstructured data</li>
                                <li className="mb-2"><strong>Veracity:</strong> Data quality and trustworthiness</li>
                                <li className="mb-2"><strong>Value:</strong> Extract actionable insights from data</li>
                            </ul>

                            <h5>Big Data Use Cases</h5>
                            <ul className="list-unstyled">
                                <li><strong>Log Analysis:</strong> System and application monitoring</li>
                                <li><strong>Social Media:</strong> Sentiment analysis, trend detection</li>
                                <li><strong>IoT:</strong> Sensor data from devices and machines</li>
                                <li><strong>Scientific Research:</strong> Genomics, astronomy, climate</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-12">
                            <h5>Big Data Architecture Patterns</h5>
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Pattern</th>
                                            <th>Data Flow</th>
                                            <th>Latency</th>
                                            <th>Complexity</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>Batch Processing</strong></td>
                                            <td>Ingest → Store → Process → Consume</td>
                                            <td>Hours to days</td>
                                            <td>Low</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Stream Processing</strong></td>
                                            <td>Ingest → Process → Store/Alert</td>
                                            <td>Milliseconds to seconds</td>
                                            <td>High</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Lambda</strong></td>
                                            <td>Batch + Speed (stream) layer parallel</td>
                                            <td>Near real-time with fallback</td>
                                            <td>Very High</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Kappa</strong></td>
                                            <td>Stream only with event log replay</td>
                                            <td>Near real-time</td>
                                            <td>Medium</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6">
                            <h5>Scalability Considerations</h5>
                            <ul className="list-group list-group-flush mb-4">
                                <li className="list-group-item">✓ Horizontal scaling (add more nodes)</li>
                                <li className="list-group-item">✓ Data partitioning and sharding strategies</li>
                                <li className="list-group-item">✓ Distributed consensus (Zookeeper, Consul)</li>
                                <li className="list-group-item">✓ Fault tolerance and recovery</li>
                                <li className="list-group-item">✓ Load balancing and resource allocation</li>
                                <li className="list-group-item">✓ Monitoring and auto-scaling triggers</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h5>Cost Optimization Strategies</h5>
                            <ul className="list-group list-group-flush mb-4">
                                <li className="list-group-item">✓ Use spot instances for non-critical batch jobs</li>
                                <li className="list-group-item">✓ Data tiering (hot/warm/cold storage)</li>
                                <li className="list-group-item">✓ Compression and columnar formats</li>
                                <li className="list-group-item">✓ Resource sharing and multi-tenancy</li>
                                <li className="list-group-item">✓ Scheduled scaling for predictable patterns</li>
                                <li className="list-group-item">✓ Data retention policies to manage growth</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-12">
                            <h5>Data Lake vs Data Warehouse vs Lakehouse</h5>
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Aspect</th>
                                            <th>Data Lake</th>
                                            <th>Data Warehouse</th>
                                            <th>Lakehouse</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>Schema</strong></td>
                                            <td>Schema-on-read</td>
                                            <td>Schema-on-write</td>
                                            <td>Both supported</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Data Format</strong></td>
                                            <td>Any (structured, unstructured)</td>
                                            <td>Structured only</td>
                                            <td>Any (with structure layer)</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Cost</strong></td>
                                            <td>$$ (cheap storage)</td>
                                            <td>$$$$ (expensive)</td>
                                            <td>$$ (cheap storage + overhead)</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Query Performance</strong></td>
                                            <td>Variable (depends on data format)</td>
                                            <td>Excellent (optimized)</td>
                                            <td>Good (optimized)</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Data Governance</strong></td>
                                            <td>Difficult (loose structure)</td>
                                            <td>Strong (enforced)</td>
                                            <td>Strong (metadata layer)</td>
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

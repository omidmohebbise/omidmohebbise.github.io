export default function ChoosingRightOptionPage() {
    return (
        <div className="pt-4">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title mb-3">Choosing the Right Option</h2>

                    <div className="row">
                        <div className="col-md-6">
                            <h5>OLTP (Online Transaction Processing)</h5>
                            <ul className="list-group list-group-flush mb-3">
                                <li className="list-group-item"><strong>Focus:</strong> Real-time transactions</li>
                                <li className="list-group-item"><strong>Workload:</strong> Many small, frequent reads/writes</li>
                                <li className="list-group-item"><strong>Data:</strong> Current operational data</li>
                                <li className="list-group-item"><strong>Examples:</strong> Banking, e-commerce, ticketing</li>
                                <li className="list-group-item"><strong>Systems:</strong> PostgreSQL, MySQL, Oracle, SQL Server</li>
                            </ul>
                            <p className="mb-0"><strong>Characteristics:</strong> Normalized schema, ACID compliance, fast insert/update/delete</p>
                        </div>

                        <div className="col-md-6">
                            <h5>OLAP (Online Analytical Processing)</h5>
                            <ul className="list-group list-group-flush mb-3">
                                <li className="list-group-item"><strong>Focus:</strong> Complex analytical queries</li>
                                <li className="list-group-item"><strong>Workload:</strong> Few large, complex queries</li>
                                <li className="list-group-item"><strong>Data:</strong> Historical aggregated data</li>
                                <li className="list-group-item"><strong>Examples:</strong> BI, data analysis, reporting</li>
                                <li className="list-group-item"><strong>Systems:</strong> Snowflake, BigQuery, Redshift, Data Lake + Spark</li>
                            </ul>
                            <p className="mb-0"><strong>Characteristics:</strong> Denormalized schema, columnar storage, pre-aggregated data</p>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6">
                            <h5>Scalability Requirements</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><strong>Vertical Scaling:</strong> Bigger machines (traditional)</li>
                                <li className="list-group-item"><strong>Horizontal Scaling:</strong> More machines (NoSQL, data lakes)</li>
                                <li className="list-group-item"><strong>Expected Growth:</strong> Data projections 3-5 years</li>
                                <li className="list-group-item"><strong>Query Volume:</strong> Concurrent queries needed</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h5>CAP Theorem (Pick 2 of 3)</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><strong>Consistency:</strong> All nodes have same data</li>
                                <li className="list-group-item"><strong>Availability:</strong> System always operational</li>
                                <li className="list-group-item"><strong>Partition Tolerance:</strong> Tolerates network failures</li>
                            </ul>
                            <p className="mt-2 mb-0"><strong>Financial:</strong> Consistency → SQL | <strong>Social:</strong> Availability → NoSQL | <strong>Analytics:</strong> Consistency OK → Data warehouse</p>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6">
                            <h5>Cost Analysis</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2"><strong>Infrastructure Costs:</strong> Hardware, maintenance, backups</li>
                                <li className="mb-2"><strong>Operational Costs:</strong> DBA time, monitoring, scaling</li>
                                <li className="mb-2"><strong>Cloud vs On-Premise:</strong> CAPEX vs OPEX trade-off</li>
                            </ul>
                            <p><strong>Per-GB Pricing:</strong></p>
                            <ul className="list-unstyled">
                                <li>Object storage: $0.023/GB</li>
                                <li>Data lake: $0.04-0.10/GB</li>
                                <li>Data warehouse: $0.10-0.50/GB</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h5>Performance Requirements</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><strong>Latency:</strong> Sub-millisecond vs seconds?</li>
                                <li className="list-group-item"><strong>Throughput:</strong> Transactions per second needed</li>
                                <li className="list-group-item"><strong>Data Volume:</strong> GB, TB, or PB?</li>
                                <li className="list-group-item"><strong>Update Frequency:</strong> Real-time or batch?</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6">
                            <h5>Data Structure</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><strong>Highly Structured:</strong> Relational database</li>
                                <li className="list-group-item"><strong>Semi-Structured:</strong> NoSQL or data lake</li>
                                <li className="list-group-item"><strong>Unstructured:</strong> Object storage or data lake</li>
                                <li className="list-group-item"><strong>Relationships Important:</strong> Graph database</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h5>Query Patterns</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><strong>OLTP:</strong> SQL database (PostgreSQL)</li>
                                <li className="list-group-item"><strong>OLAP:</strong> Data warehouse (Snowflake)</li>
                                <li className="list-group-item"><strong>Full-Text Search:</strong> Elasticsearch</li>
                                <li className="list-group-item"><strong>Key-Value:</strong> Redis, DynamoDB</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-12">
                            <h5>Decision Matrix</h5>
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Scenario</th>
                                            <th>Data Volume</th>
                                            <th>Query Type</th>
                                            <th>Recommended</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>E-commerce Catalog</strong></td>
                                            <td>GB-TB</td>
                                            <td>OLTP + Search</td>
                                            <td>PostgreSQL + Elasticsearch</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Financial Reporting</strong></td>
                                            <td>TB</td>
                                            <td>OLAP</td>
                                            <td>Data Warehouse (Snowflake)</td>
                                        </tr>
                                        <tr>
                                            <td><strong>IoT Time-Series</strong></td>
                                            <td>PB</td>
                                            <td>Analytical</td>
                                            <td>TimescaleDB or Data Lake</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Social Network</strong></td>
                                            <td>PB</td>
                                            <td>Relationships</td>
                                            <td>Neo4j + MongoDB + Cache</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Real-time Analytics</strong></td>
                                            <td>TB</td>
                                            <td>Stream + Analytics</td>
                                            <td>Kafka + Spark + ClickHouse</td>
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
                        <li><strong>Real-time Streaming:</strong> Kafka + Stream processor</li>
                    </ul>
                </div>

                <div className="col-md-6">
                    <h3>Decision Framework</h3>

                    <h4>Quick Decision Tree</h4>
                    <ol>
                        <li><strong>Is data highly structured and ACID critical?</strong>
                            <ul>
                                <li>Yes → Relational Database (PostgreSQL, MySQL)</li>
                            </ul>
                        </li>
                        <li><strong>Do you need to scale to massive volumes?</strong>
                            <ul>
                                <li>Yes → Consider NoSQL or Data Lake</li>
                            </ul>
                        </li>
                        <li><strong>Is this primarily for analytics?</strong>
                            <ul>
                                <li>Yes → Data Warehouse (Snowflake)</li>
                                <li>No, need raw data exploration → Data Lake</li>
                            </ul>
                        </li>
                        <li><strong>Need ultra-fast access?</strong>
                            <ul>
                                <li>Yes → Add In-Memory cache (Redis)</li>
                            </ul>
                        </li>
                    </ol>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-12">
                    <h3>Technology Selection Matrix</h3>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Use Case</th>
                                <th>Primary Technology</th>
                                <th>Rationale</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>E-commerce transactions</strong></td>
                                <td>PostgreSQL</td>
                                <td>ACID, relationships, proven reliability</td>
                            </tr>
                            <tr>
                                <td><strong>Mobile app data</strong></td>
                                <td>MongoDB/Firebase</td>
                                <td>Flexible schema, real-time sync</td>
                            </tr>
                            <tr>
                                <td><strong>Analytics/BI</strong></td>
                                <td>Snowflake/BigQuery</td>
                                <td>Analytics-optimized, scales with data</td>
                            </tr>
                            <tr>
                                <td><strong>Data exploration</strong></td>
                                <td>Data Lake + Spark</td>
                                <td>Schema flexibility, cost-effective</td>
                            </tr>
                            <tr>
                                <td><strong>Session caching</strong></td>
                                <td>Redis</td>
                                <td>Ultra-fast, perfect for sessions</td>
                            </tr>
                            <tr>
                                <td><strong>File backups</strong></td>
                                <td>Object Storage (S3)</td>
                                <td>Scalable, durable, cost-effective</td>
                            </tr>
                            <tr>
                                <td><strong>Real-time recommendations</strong></td>
                                <td>Neo4j</td>
                                <td>Graph relationships, relationship traversal</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

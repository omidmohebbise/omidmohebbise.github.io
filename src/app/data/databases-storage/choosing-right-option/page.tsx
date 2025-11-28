export default function ChoosingRightOptionPage() {
    return (
        <div className='pt-2'>
            <h2 className="mb-4 mt-3">Choosing the Right Option</h2>

            <div className="row">
                <div className="col-md-6">
                    <h3>OLTP vs OLAP</h3>

                    <h4>OLTP (Online Transaction Processing)</h4>
                    <ul>
                        <li><strong>Focus:</strong> Real-time transactions and updates</li>
                        <li><strong>Workload:</strong> Many small, frequent reads/writes</li>
                        <li><strong>Data:</strong> Current operational data</li>
                        <li><strong>Examples:</strong> Banking, e-commerce, ticketing systems</li>
                        <li><strong>Databases:</strong> PostgreSQL, MySQL, Oracle, SQL Server</li>
                        <li><strong>Characteristics:</strong>
                            <ul>
                                <li>Normalized schema to avoid data redundancy</li>
                                <li>ACID compliance critical</li>
                                <li>Indexes on transactional keys</li>
                                <li>Fast insert/update/delete</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className="col-md-6">
                    <h3>OLAP Continued</h3>

                    <h4>OLAP (Online Analytical Processing)</h4>
                    <ul>
                        <li><strong>Focus:</strong> Complex analytical queries</li>
                        <li><strong>Workload:</strong> Few large, complex queries</li>
                        <li><strong>Data:</strong> Historical aggregated data</li>
                        <li><strong>Examples:</strong> Business intelligence, data analysis, reporting</li>
                        <li><strong>Systems:</strong> Snowflake, BigQuery, Redshift, Data Lake + Spark</li>
                        <li><strong>Characteristics:</strong>
                            <ul>
                                <li>Denormalized schema (star/snowflake schema)</li>
                                <li>Columnar storage for performance</li>
                                <li>Pre-aggregated data</li>
                                <li>Optimized for read-heavy workloads</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-md-6">
                    <h3>Decision Factors</h3>

                    <h4>1. Scalability Requirements</h4>
                    <ul>
                        <li><strong>Vertical Scaling:</strong> Buying bigger machines (traditional databases)</li>
                        <li><strong>Horizontal Scaling:</strong> Adding more machines (NoSQL, data lakes)</li>
                        <li><strong>Expected Data Growth:</strong> How much data will you have in 3-5 years?</li>
                        <li><strong>Query Volume:</strong> How many concurrent queries?</li>
                    </ul>

                    <h4>2. Consistency Requirements (CAP Theorem)</h4>
                    <p><strong>CAP Theorem:</strong> Can only guarantee 2 of 3 properties</p>
                    <ul>
                        <li><strong>Consistency:</strong> All nodes have same data</li>
                        <li><strong>Availability:</strong> System always operational</li>
                        <li><strong>Partition Tolerance:</strong> Tolerates network failures</li>
                    </ul>
                    <p><strong>Choose Based On:</strong></p>
                    <ul>
                        <li>Financial transactions → Consistency critical (SQL databases)</li>
                        <li>Social media feeds → Availability critical (NoSQL)</li>
                        <li>Analytics → Consistency acceptable (Data warehouses)</li>
                    </ul>
                </div>

                <div className="col-md-6">
                    <h3>Decision Factors Continued</h3>

                    <h4>3. Cost Analysis</h4>
                    <ul>
                        <li><strong>Infrastructure Costs:</strong> Hardware, maintenance, backups</li>
                        <li><strong>Operational Costs:</strong> DBA time, monitoring, scaling</li>
                        <li><strong>Cloud vs On-Premise:</strong> CAPEX vs OPEX trade-off</li>
                        <li><strong>Per-GB Costs:</strong>
                            <ul>
                                <li>Object storage: $0.023/GB (AWS S3)</li>
                                <li>Data lake (with processing): $0.04-0.10/GB</li>
                                <li>Data warehouse: $0.10-0.50/GB</li>
                                <li>Traditional database: Higher operational cost</li>
                            </ul>
                        </li>
                    </ul>

                    <h4>4. Performance Requirements</h4>
                    <ul>
                        <li><strong>Query Latency:</strong> Sub-millisecond vs seconds acceptable?</li>
                        <li><strong>Throughput:</strong> Transactions per second needed?</li>
                        <li><strong>Data Volume:</strong> Gigabytes, terabytes, or petabytes?</li>
                        <li><strong>Update Frequency:</strong> Real-time vs batch updates?</li>
                    </ul>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-md-6">
                    <h3>Decision Factors Continued</h3>

                    <h4>5. Data Structure</h4>
                    <ul>
                        <li><strong>Highly Structured:</strong> Relational database</li>
                        <li><strong>Semi-Structured:</strong> NoSQL (document) or data lake</li>
                        <li><strong>Unstructured:</strong> Object storage or data lake</li>
                        <li><strong>Relationships Matter:</strong> Graph database</li>
                    </ul>

                    <h4>6. Query Pattern</h4>
                    <ul>
                        <li><strong>OLTP (Transactional):</strong> SQL database (PostgreSQL)</li>
                        <li><strong>OLAP (Analytical):</strong> Data warehouse (Snowflake)</li>
                        <li><strong>Full-Text Search:</strong> Elasticsearch</li>
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

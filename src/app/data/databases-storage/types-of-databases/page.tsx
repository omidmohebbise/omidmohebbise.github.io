export default function TypesOfDatabasesPage() {
    return (
        <div className='pt-2'>
            <h2 className="mb-4 mt-3">Types of Databases</h2>

            <div className="row">
                <div className="col-md-6">
                    <h3>Relational Databases (SQL)</h3>
                    <p><strong>Overview:</strong> Structured data in tables with rows and columns, enforcing relationships</p>

                    <h4>Popular Systems</h4>
                    <ul>
                        <li><strong>PostgreSQL:</strong> Open-source, powerful, highly reliable</li>
                        <li><strong>MySQL:</strong> Lightweight, widely used web applications</li>
                        <li><strong>Oracle Database:</strong> Enterprise-grade, expensive but feature-rich</li>
                        <li><strong>SQL Server:</strong> Microsoft ecosystem, integrated with Azure</li>
                    </ul>

                    <h4>Strengths</h4>
                    <ul>
                        <li>ACID compliance ensures data integrity</li>
                        <li>Mature ecosystem with excellent tooling</li>
                        <li>Powerful query language (SQL)</li>
                        <li>Referential integrity through foreign keys</li>
                    </ul>

                    <h4>Weaknesses</h4>
                    <ul>
                        <li>Rigid schema requires upfront planning</li>
                        <li>Schema changes can be difficult</li>
                        <li>Horizontal scaling is complex</li>
                        <li>Not ideal for unstructured data</li>
                    </ul>
                </div>

                <div className="col-md-6">
                    <h3>NoSQL Databases</h3>
                    <p><strong>Overview:</strong> Non-relational databases offering flexibility and scale</p>

                    <h4>Key-Value Stores</h4>
                    <ul>
                        <li><strong>Redis:</strong> In-memory, ultra-fast, used for caching and sessions</li>
                        <li><strong>DynamoDB:</strong> AWS managed, serverless, pay-per-request</li>
                        <li><strong>Memcached:</strong> Simple cache store for distributed systems</li>
                        <li>Best for: Fast access, caching, counters</li>
                    </ul>

                    <h4>Document Databases</h4>
                    <ul>
                        <li><strong>MongoDB:</strong> JSON-like documents, flexible schema</li>
                        <li><strong>Firebase/Firestore:</strong> Real-time cloud database</li>
                        <li><strong>CouchDB:</strong> Distributed, replication-friendly</li>
                        <li>Best for: Content management, user profiles, flexible schemas</li>
                    </ul>

                    <h4>Column-Family Databases</h4>
                    <ul>
                        <li><strong>HBase:</strong> Distributed, massive scale on Hadoop</li>
                        <li><strong>Cassandra:</strong> High availability, distributed writes</li>
                        <li>Best for: Time-series data, analytics at scale</li>
                    </ul>

                    <h4>Graph Databases</h4>
                    <ul>
                        <li><strong>Neo4j:</strong> Query relationships efficiently</li>
                        <li><strong>ArangoDB:</strong> Multi-model (documents + graphs)</li>
                        <li>Best for: Social networks, recommendations, knowledge graphs</li>
                    </ul>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-md-6">
                    <h3>In-Memory Databases</h3>

                    <h4>Purpose</h4>
                    <ul>
                        <li>Ultra-fast access to frequently used data</li>
                        <li>Cache layer between applications and persistent storage</li>
                        <li>Reduced latency for real-time operations</li>
                    </ul>

                    <h4>Popular Systems</h4>
                    <ul>
                        <li><strong>Redis:</strong> Data structures, TTL, replication</li>
                        <li><strong>Memcached:</strong> Simple distributed cache</li>
                        <li><strong>VoltDB:</strong> ACID-compliant in-memory OLTP</li>
                    </ul>

                    <h4>Trade-offs</h4>
                    <ul>
                        <li>Faster performance but limited by RAM capacity</li>
                        <li>Risk of data loss if not persisted</li>
                        <li>Higher cost per GB</li>
                    </ul>
                </div>

                <div className="col-md-6">
                    <h3>Search Databases</h3>

                    <h4>Purpose</h4>
                    <ul>
                        <li>Full-text search capabilities</li>
                        <li>Text analysis and indexing</li>
                        <li>Log and event data search</li>
                    </ul>

                    <h4>Popular Systems</h4>
                    <ul>
                        <li><strong>Elasticsearch:</strong> Distributed search, log analytics</li>
                        <li><strong>Solr:</strong> Enterprise search platform</li>
                        <li><strong>Typesense:</strong> Fast, typo-tolerant search</li>
                    </ul>

                    <h4>Use Cases</h4>
                    <ul>
                        <li>Website search functionality</li>
                        <li>Log aggregation and analysis</li>
                        <li>Full-text search on large datasets</li>
                    </ul>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-12">
                    <h3>Choosing a Database Type</h3>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Database Type</th>
                                <th>Best For</th>
                                <th>Avoid If</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Relational</strong></td>
                                <td>Structured data, transactions, relationships</td>
                                <td>Need massive scale or highly flexible schema</td>
                            </tr>
                            <tr>
                                <td><strong>Document</strong></td>
                                <td>Flexible schema, hierarchical data</td>
                                <td>Complex multi-document transactions critical</td>
                            </tr>
                            <tr>
                                <td><strong>Key-Value</strong></td>
                                <td>Caching, sessions, fast access</td>
                                <td>Complex queries needed</td>
                            </tr>
                            <tr>
                                <td><strong>Graph</strong></td>
                                <td>Relationships matter (recommendations, social)</td>
                                <td>Simple tabular data</td>
                            </tr>
                            <tr>
                                <td><strong>Search</strong></td>
                                <td>Full-text search, text analytics</td>
                                <td>No text search requirements</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

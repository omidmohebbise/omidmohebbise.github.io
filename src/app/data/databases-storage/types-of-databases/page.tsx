export default function TypesOfDatabasesPage() {
    return (
        <div className="pt-4">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title mb-3">Types of Databases</h2>

                    <div className="row">
                        <div className="col-md-6">
                            <h5>Relational Databases (SQL)</h5>
                            <p className="mb-2"><strong>Overview:</strong> Structured data in tables with rows and columns, enforcing relationships</p>

                            <p className="mb-2"><strong>Popular Systems</strong></p>
                            <ul className="list-group list-group-flush mb-3">
                                <li className="list-group-item"><strong>PostgreSQL:</strong> Open-source, powerful, highly reliable</li>
                                <li className="list-group-item"><strong>MySQL:</strong> Lightweight, widely used web applications</li>
                                <li className="list-group-item"><strong>Oracle Database:</strong> Enterprise-grade, expensive but feature-rich</li>
                                <li className="list-group-item"><strong>SQL Server:</strong> Microsoft ecosystem, integrated with Azure</li>
                            </ul>

                            <p className="mb-2"><strong>Strengths</strong></p>
                            <ul className="list-unstyled mb-3">
                                <li>✓ ACID compliance ensures data integrity</li>
                                <li>✓ Mature ecosystem with excellent tooling</li>
                                <li>✓ Powerful query language (SQL)</li>
                                <li>✓ Referential integrity through foreign keys</li>
                            </ul>

                            <p className="mb-2"><strong>Weaknesses</strong></p>
                            <ul className="list-unstyled">
                                <li>✗ Rigid schema requires upfront planning</li>
                                <li>✗ Schema changes can be difficult</li>
                                <li>✗ Horizontal scaling is complex</li>
                                <li>✗ Not ideal for unstructured data</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h5>NoSQL Databases</h5>
                            <p className="mb-2"><strong>Overview:</strong> Non-relational databases offering flexibility and scale</p>

                            <p className="mb-2"><strong>Key-Value Stores</strong></p>
                            <ul className="list-group list-group-flush mb-3">
                                <li className="list-group-item"><strong>Redis:</strong> In-memory, ultra-fast, caching</li>
                                <li className="list-group-item"><strong>DynamoDB:</strong> AWS managed, serverless</li>
                                <li className="list-group-item"><strong>Memcached:</strong> Simple cache store</li>
                            </ul>

                            <p className="mb-2"><strong>Document Databases</strong></p>
                            <ul className="list-group list-group-flush mb-3">
                                <li className="list-group-item"><strong>MongoDB:</strong> JSON-like, flexible schema</li>
                                <li className="list-group-item"><strong>Firebase/Firestore:</strong> Real-time cloud database</li>
                                <li className="list-group-item"><strong>CouchDB:</strong> Distributed, replication-friendly</li>
                            </ul>

                            <p className="mb-2"><strong>Column-Family Stores</strong></p>
                            <ul className="list-unstyled mb-3">
                                <li><strong>HBase:</strong> Distributed, massive scale</li>
                                <li><strong>Cassandra:</strong> High availability, distributed writes</li>
                            </ul>

                            <p className="mb-2"><strong>Graph Databases</strong></p>
                            <ul className="list-unstyled">
                                <li><strong>Neo4j:</strong> Query relationships efficiently</li>
                                <li><strong>ArangoDB:</strong> Multi-model (documents + graphs)</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6">
                            <h5>In-Memory Databases</h5>
                            <ul className="list-group list-group-flush mb-3">
                                <li className="list-group-item"><strong>Redis:</strong> Data structures, TTL, replication</li>
                                <li className="list-group-item"><strong>Memcached:</strong> Simple distributed cache</li>
                                <li className="list-group-item"><strong>VoltDB:</strong> ACID-compliant in-memory OLTP</li>
                            </ul>
                            <p className="mb-0"><strong>Use Cases:</strong> Ultra-fast access, caching layer, real-time operations</p>
                        </div>

                        <div className="col-md-6">
                            <h5>Search Databases</h5>
                            <ul className="list-group list-group-flush mb-3">
                                <li className="list-group-item"><strong>Elasticsearch:</strong> Distributed search, log analytics</li>
                                <li className="list-group-item"><strong>Solr:</strong> Enterprise search platform</li>
                                <li className="list-group-item"><strong>Typesense:</strong> Fast, typo-tolerant search</li>
                            </ul>
                            <p className="mb-0"><strong>Use Cases:</strong> Full-text search, log analysis, text indexing</p>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-12">
                            <h5>Choosing a Database Type</h5>
                            <div className="table-responsive">
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
                </div>
            </div>
        </div>
    )
}

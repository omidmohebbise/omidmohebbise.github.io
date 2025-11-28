export default function DatabasesStorageOverviewPage() {
    return (
        <div className="pt-4">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title mb-3">Overview: Databases vs Storage</h2>

                    <div className="row">
                        <div className="col-md-6">
                            <h5>Databases</h5>
                            <p className="mb-1"><strong>Purpose:</strong> Structured storage with queryable data and transactional guarantees</p>
                            <h6 className="mt-2">Characteristics</h6>
                            <ul className="list-group list-group-flush mb-3">
                                <li className="list-group-item"><strong>Schema:</strong> Predefined structure and data types</li>
                                <li className="list-group-item"><strong>ACID:</strong> Atomicity, Consistency, Isolation, Durability</li>
                                <li className="list-group-item"><strong>Querying:</strong> Support complex SQL or query languages</li>
                                <li className="list-group-item"><strong>Indexing:</strong> Optimized retrieval with indexes</li>
                                <li className="list-group-item"><strong>Relationships:</strong> Support for foreign keys and joins</li>
                            </ul>
                            <h6>Use Cases</h6>
                            <p>Transactional systems, business applications, real-time updates.</p>
                        </div>

                        <div className="col-md-6">
                            <h5>Storage</h5>
                            <p className="mb-1"><strong>Purpose:</strong> Persist raw or processed files, objects, and archives</p>
                            <h6 className="mt-2">Characteristics</h6>
                            <ul className="list-group list-group-flush mb-3">
                                <li className="list-group-item"><strong>Schema-less:</strong> Stores data as-is</li>
                                <li className="list-group-item"><strong>Scalability:</strong> Designed for massive volumes</li>
                                <li className="list-group-item"><strong>Cost-Effective:</strong> Lower cost per GB</li>
                                <li className="list-group-item"><strong>Durability:</strong> Replicated for redundancy</li>
                            </ul>
                            <h6>Use Cases</h6>
                            <p>Data lakes, backups, media files, archival.</p>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-12">
                            <h5>Comparison Matrix</h5>
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Aspect</th>
                                            <th>Databases</th>
                                            <th>Storage</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>Data Structure</strong></td>
                                            <td>Structured, schema-enforced</td>
                                            <td>Unstructured or semi-structured</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Query Capability</strong></td>
                                            <td>Complex queries and joins</td>
                                            <td>Simple key-based access</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Update Frequency</strong></td>
                                            <td>Frequent updates</td>
                                            <td>Append-only or batch updates</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Performance</strong></td>
                                            <td>Optimized for transactions</td>
                                            <td>Optimized for throughput</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Scalability</strong></td>
                                            <td>Vertical, limited horizontal</td>
                                            <td>Unlimited horizontal</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Cost</strong></td>
                                            <td>Higher per GB</td>
                                            <td>Lower per GB</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-12">
                            <h5>Hybrid Approaches</h5>
                            <ul className="list-unstyled">
                                <li><strong>Data Lakes:</strong> Storage layer for raw data, combined with processing engines</li>
                                <li><strong>Data Lakehouses:</strong> Combine lake (storage/scale) with warehouse (structure/performance)</li>
                                <li><strong>Cache Layers:</strong> In-memory databases (Redis) in front of traditional databases</li>
                                <li><strong>Polyglot Persistence:</strong> Use multiple database types for different needs</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

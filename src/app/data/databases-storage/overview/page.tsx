export default function DatabasesStorageOverviewPage() {
    return (
        <div className='pt-2'>
            <h2 className="mb-4 mt-3">Overview: Databases vs Storage</h2>

            <div className="row">
                <div className="col-md-6">
                    <h3>Databases</h3>
                    <p><strong>Purpose:</strong> Structured storage with queryable data and transactional guarantees</p>

                    <h4>Characteristics</h4>
                    <ul>
                        <li><strong>Schema:</strong> Predefined structure and data types</li>
                        <li><strong>ACID Properties:</strong> Atomicity, Consistency, Isolation, Durability</li>
                        <li><strong>Querying:</strong> Support complex SQL or query languages</li>
                        <li><strong>Indexing:</strong> Optimized retrieval with indexes</li>
                        <li><strong>Relationships:</strong> Support for foreign keys and joins</li>
                    </ul>

                    <h4>Use Cases</h4>
                    <ul>
                        <li>Transactional systems (e-commerce, banking)</li>
                        <li>Business applications requiring consistency</li>
                        <li>Real-time data updates and queries</li>
                        <li>Systems with frequent read/write operations</li>
                    </ul>
                </div>

                <div className="col-md-6">
                    <h3>Storage</h3>
                    <p><strong>Purpose:</strong> Persist raw or processed files, objects, and archives</p>

                    <h4>Characteristics</h4>
                    <ul>
                        <li><strong>Schema-less:</strong> Stores data as-is without structure requirements</li>
                        <li><strong>Scalability:</strong> Designed for massive data volumes</li>
                        <li><strong>Cost-Effective:</strong> Lower cost per GB than databases</li>
                        <li><strong>Simple Access:</strong> Direct file/object access via paths or keys</li>
                        <li><strong>Durability:</strong> Replicated for redundancy and backup</li>
                    </ul>

                    <h4>Use Cases</h4>
                    <ul>
                        <li>Data lakes for raw data repositories</li>
                        <li>Backup and archival of large datasets</li>
                        <li>Media files (images, videos, documents)</li>
                        <li>Historical data retention</li>
                    </ul>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-12">
                    <h3>Comparison Matrix</h3>
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

            <div className="row mt-5">
                <div className="col-12">
                    <h3>Hybrid Approaches</h3>
                    <ul>
                        <li><strong>Data Lakes:</strong> Storage layer for raw data, combined with processing engines</li>
                        <li><strong>Data Lakehouses:</strong> Combine lake (storage/scale) with warehouse (structure/performance)</li>
                        <li><strong>Cache Layers:</strong> In-memory databases (Redis) in front of traditional databases</li>
                        <li><strong>Polyglot Persistence:</strong> Use multiple database types for different needs</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

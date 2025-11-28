export default function DataArchitectureSourceSystems() {
    return (
        <div className="pt-4">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title mb-3">Source Systems</h2>
                    <p className="mb-3">Source systems are the origin points of data in an organization. They generate, capture, and store business data that flows into the data architecture.</p>

                    <div className="row">
                        <div className="col-md-6">
                            <h5>Types of Source Systems</h5>
                            <ul className="list-group list-group-flush mb-4">
                                <li className="list-group-item"><strong>OLTP Systems:</strong> Transactional systems (ERP, CRM, banking systems)</li>
                                <li className="list-group-item"><strong>Legacy Systems:</strong> Mainframe, older applications</li>
                                <li className="list-group-item"><strong>External Data:</strong> Third-party APIs, market data, partners</li>
                                <li className="list-group-item"><strong>IoT & Sensors:</strong> Real-time streaming from devices</li>
                                <li className="list-group-item"><strong>Web Applications:</strong> Clickstream, user behavior, logs</li>
                                <li className="list-group-item"><strong>Social Media:</strong> Public APIs from social networks</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h5>Characteristics</h5>
                            <ul className="list-unstyled">
                                <li><strong>Variety:</strong> Structured (databases), unstructured (logs), semi-structured (JSON)</li>
                                <li><strong>Volume:</strong> From gigabytes to petabytes</li>
                                <li><strong>Velocity:</strong> Batch updates to real-time streams</li>
                                <li><strong>Format Diversity:</strong> Databases, files, APIs, queues</li>
                                <li><strong>Ownership:</strong> Different teams, systems, standards</li>
                                <li><strong>Quality:</strong> Inconsistent data quality and completeness</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-12">
                            <h5>Challenges with Source Systems</h5>
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Challenge</th>
                                            <th>Description</th>
                                            <th>Impact</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>Heterogeneity</strong></td>
                                            <td>Multiple systems, databases, formats, standards</td>
                                            <td>Complex integration, data mapping errors</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Data Quality</strong></td>
                                            <td>Missing values, duplicates, inconsistencies</td>
                                            <td>Inaccurate analytics, poor decisions</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Performance</strong></td>
                                            <td>OLTP systems optimized for transactions, not queries</td>
                                            <td>Slow data extraction affects downstream systems</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Change Management</strong></td>
                                            <td>Source systems evolve independently</td>
                                            <td>Data pipelines break, require constant maintenance</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Access Control</strong></td>
                                            <td>Security restrictions on data access</td>
                                            <td>Delayed data availability, compliance issues</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-12">
                            <h5>Best Practices for Source System Integration</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">✓ Document data lineage and metadata from source systems</li>
                                <li className="list-group-item">✓ Establish standardized extraction interfaces (APIs, CDC, batch)</li>
                                <li className="list-group-item">✓ Implement quality checks at source to catch issues early</li>
                                <li className="list-group-item">✓ Monitor system changes that affect data pipelines</li>
                                <li className="list-group-item">✓ Use change data capture (CDC) for real-time sync where possible</li>
                                <li className="list-group-item">✓ Maintain separate replicas for analytics to avoid OLTP impact</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

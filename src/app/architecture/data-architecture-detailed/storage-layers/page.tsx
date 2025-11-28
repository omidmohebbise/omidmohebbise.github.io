export default function DataArchitectureStorageLayers() {
    return (
        <div className="pt-4">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title mb-3">Storage Layers</h2>
                    <p className="mb-3">Storage layers organize data at different stages of processing and accessibility. They form the backbone of the data architecture.</p>

                    <div className="row">
                        <div className="col-md-12">
                            <h5>Typical Data Lake Storage Architecture</h5>
                            <ul className="list-unstyled mb-4">
                                <li className="mb-2"><strong>Raw/Landing Layer:</strong> Unprocessed ingested data exactly as received from sources</li>
                                <li className="mb-2"><strong>Bronze/Staging Layer:</strong> Cleaned, deduplicated, but minimally processed</li>
                                <li className="mb-2"><strong>Silver/Refined Layer:</strong> Transformed, validated, standardized data ready for analytics</li>
                                <li className="mb-2"><strong>Gold/Consumption Layer:</strong> Business-ready datasets for specific use cases and dashboards</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <h5>Storage Technologies by Layer</h5>
                            <ul className="list-group list-group-flush mb-4">
                                <li className="list-group-item"><strong>Object Storage:</strong> S3, GCS, Azure Blob (Raw/Bronze)</li>
                                <li className="list-group-item"><strong>Data Warehouses:</strong> Snowflake, BigQuery, Redshift (Silver/Gold)</li>
                                <li className="list-group-item"><strong>Data Lakes:</strong> Delta Lake, Apache Iceberg (all layers)</li>
                                <li className="list-group-item"><strong>Databases:</strong> PostgreSQL, MongoDB (operational/serving)</li>
                                <li className="list-group-item"><strong>Cache:</strong> Redis, Memcached (fast access)</li>
                                <li className="list-group-item"><strong>Search Indexes:</strong> Elasticsearch (full-text search)</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h5>Storage Considerations</h5>
                            <ul className="list-unstyled">
                                <li><strong>Cost:</strong> Object storage cheapest, data warehouses more expensive</li>
                                <li><strong>Performance:</strong> Trade-off between cost and query speed</li>
                                <li><strong>Data Format:</strong> Parquet, ORC for analytics; JSON for flexibility</li>
                                <li><strong>Partitioning:</strong> Organize by date, geography, or business dimension</li>
                                <li><strong>Retention:</strong> Policies for archiving old data</li>
                                <li><strong>Governance:</strong> Metadata, lineage, access control</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-12">
                            <h5>Storage Options Comparison</h5>
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Storage Type</th>
                                            <th>Cost</th>
                                            <th>Query Performance</th>
                                            <th>Scalability</th>
                                            <th>Best For</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>Object Storage (S3)</strong></td>
                                            <td>$$$</td>
                                            <td>Medium (requires compute)</td>
                                            <td>Unlimited</td>
                                            <td>Raw data, data lakes</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Data Warehouse (Snowflake)</strong></td>
                                            <td>$$$$$</td>
                                            <td>Very High</td>
                                            <td>High</td>
                                            <td>OLAP, fast analytics</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Data Lake Format (Delta)</strong></td>
                                            <td>$$</td>
                                            <td>High</td>
                                            <td>Unlimited</td>
                                            <td>Unified analytics + ML</td>
                                        </tr>
                                        <tr>
                                            <td><strong>NoSQL Database</strong></td>
                                            <td>$$$$</td>
                                            <td>High (for access patterns)</td>
                                            <td>High</td>
                                            <td>Real-time operations</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Search Index (ES)</strong></td>
                                            <td>$$$</td>
                                            <td>Very High (full-text)</td>
                                            <td>High</td>
                                            <td>Full-text search, logging</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-12">
                            <h5>Best Practices for Storage Architecture</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">✓ Implement multi-layered architecture for data maturity progression</li>
                                <li className="list-group-item">✓ Use appropriate data formats (Parquet for analytics, JSON for flexibility)</li>
                                <li className="list-group-item">✓ Partition data strategically for query performance</li>
                                <li className="list-group-item">✓ Implement data governance at each layer</li>
                                <li className="list-group-item">✓ Monitor and optimize storage costs vs performance</li>
                                <li className="list-group-item">✓ Plan for data retention and archival policies</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

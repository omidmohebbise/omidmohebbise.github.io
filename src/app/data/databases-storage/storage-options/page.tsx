export default function StorageOptionsPage() {
    return (
        <div className="pt-4">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title mb-3">Storage Options</h2>

                    <div className="row">
                        <div className="col-md-6">
                            <h5>File Storage (NAS)</h5>
                            <p className="mb-2"><strong>Network-Attached Storage</strong></p>
                            <ul className="list-group list-group-flush mb-3">
                                <li className="list-group-item"><strong>✓ Easy to use</strong> - Familiar interface</li>
                                <li className="list-group-item"><strong>✓ Good for collaboration</strong> - Team file sharing</li>
                                <li className="list-group-item"><strong>✗ Limited scalability</strong> - Beyond local network</li>
                                <li className="list-group-item"><strong>✗ Expensive at cloud scale</strong> - Performance degrades</li>
                            </ul>
                            <p className="mb-0"><strong>Use Cases:</strong> Team files, documents, media repositories</p>
                        </div>

                        <div className="col-md-6">
                            <h5>Object Storage</h5>
                            <p className="mb-2"><strong>Cloud-based distributed storage</strong></p>
                            <ul className="list-group list-group-flush mb-3">
                                <li className="list-group-item"><strong>AWS S3:</strong> Market leader, highly reliable</li>
                                <li className="list-group-item"><strong>Azure Blob Storage:</strong> Azure ecosystem</li>
                                <li className="list-group-item"><strong>Google Cloud Storage:</strong> Strong analytics</li>
                                <li className="list-group-item"><strong>Minio:</strong> Open-source S3-compatible</li>
                            </ul>
                            <p className="mb-0"><strong>Best For:</strong> Cloud apps, backups, data lakes, media distribution</p>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6">
                            <h5>Data Lakes</h5>
                            <p className="mb-2"><strong>Repository for raw, untransformed data</strong></p>
                            <ul className="list-group list-group-flush mb-3">
                                <li className="list-group-item">Stores raw data in native format</li>
                                <li className="list-group-item">Schema-on-read (structure applied during analysis)</li>
                                <li className="list-group-item">Supports multiple data types</li>
                                <li className="list-group-item">Built on object storage or HDFS</li>
                            </ul>
                            <p className="mb-2"><strong>Advantages:</strong> Flexible, scalable, cost-effective, ML-ready</p>
                            <p className="mb-0"><strong>Challenges:</strong> Data quality, governance, can become "data swamp"</p>
                        </div>

                        <div className="col-md-6">
                            <h5>Data Warehouses</h5>
                            <p className="mb-2"><strong>Analytics-optimized structured storage</strong></p>
                            <ul className="list-group list-group-flush mb-3">
                                <li className="list-group-item"><strong>Snowflake:</strong> Cloud-native, easy scaling</li>
                                <li className="list-group-item"><strong>AWS Redshift:</strong> Petabyte-scale analytics</li>
                                <li className="list-group-item"><strong>BigQuery:</strong> Serverless SQL analytics</li>
                                <li className="list-group-item"><strong>Azure Synapse:</strong> Integrated analytics</li>
                            </ul>
                            <p className="mb-2"><strong>Best For:</strong> Business analytics, BI, structured queries</p>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-12">
                            <h5>Storage Comparison</h5>
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Storage Type</th>
                                            <th>Scalability</th>
                                            <th>Cost</th>
                                            <th>Performance</th>
                                            <th>Best For</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>File Storage (NAS)</strong></td>
                                            <td>Limited</td>
                                            <td>Moderate</td>
                                            <td>High (local)</td>
                                            <td>Team collaboration</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Object Storage</strong></td>
                                            <td>Unlimited</td>
                                            <td>Low</td>
                                            <td>Variable</td>
                                            <td>Cloud backups, media</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Data Lake</strong></td>
                                            <td>Unlimited</td>
                                            <td>Low</td>
                                            <td>Depends on tools</td>
                                            <td>Raw data repository</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Data Warehouse</strong></td>
                                            <td>Very High</td>
                                            <td>Moderate-High</td>
                                            <td>Very High</td>
                                            <td>Analytics, BI</td>
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

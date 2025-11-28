export default function StorageOptionsPage() {
    return (
        <div className='pt-2'>
            <h2 className="mb-4 mt-3">Storage Options</h2>

            <div className="row">
                <div className="col-md-6">
                    <h3>File Storage (NAS)</h3>
                    <p><strong>Network-Attached Storage</strong></p>

                    <h4>Characteristics</h4>
                    <ul>
                        <li>Shared file system accessible over network</li>
                        <li>Traditional file hierarchies (folders/files)</li>
                        <li>SMB/NFS protocols for access</li>
                        <li>Similar to shared network drives</li>
                    </ul>

                    <h4>Advantages</h4>
                    <ul>
                        <li>Easy to use, familiar interface</li>
                        <li>Good for departmental file sharing</li>
                        <li>Support for access controls and permissions</li>
                        <li>Low latency for local networks</li>
                    </ul>

                    <h4>Disadvantages</h4>
                    <ul>
                        <li>Limited scalability beyond local network</li>
                        <li>Not ideal for distributed teams</li>
                        <li>Performance degrades with large numbers of users</li>
                        <li>Expensive at cloud scale</li>
                    </ul>

                    <h4>Use Cases</h4>
                    <ul>
                        <li>Team file collaboration</li>
                        <li>Document storage and archival</li>
                        <li>Media file repositories</li>
                    </ul>
                </div>

                <div className="col-md-6">
                    <h3>Object Storage</h3>
                    <p><strong>Cloud-based distributed storage</strong></p>

                    <h4>Popular Services</h4>
                    <ul>
                        <li><strong>AWS S3:</strong> Market leader, highly reliable, rich features</li>
                        <li><strong>Azure Blob Storage:</strong> Integrated with Azure ecosystem</li>
                        <li><strong>Google Cloud Storage:</strong> Strong analytics integration</li>
                        <li><strong>Minio:</strong> Open-source S3-compatible storage</li>
                    </ul>

                    <h4>Advantages</h4>
                    <ul>
                        <li>Unlimited scalability</li>
                        <li>Pay-as-you-go pricing</li>
                        <li>High durability and redundancy</li>
                        <li>Easy integration with cloud services</li>
                        <li>Versioning and lifecycle policies</li>
                    </ul>

                    <h4>Disadvantages</h4>
                    <ul>
                        <li>Higher latency than local storage</li>
                        <li>API-based access (not file system)</li>
                        <li>Data transfer costs</li>
                    </ul>

                    <h4>Use Cases</h4>
                    <ul>
                        <li>Cloud application data storage</li>
                        <li>Backup and disaster recovery</li>
                        <li>Data lakes and analytics</li>
                        <li>Media content distribution</li>
                    </ul>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-md-6">
                    <h3>Data Lakes</h3>
                    <p><strong>Repository for raw, untransformed data</strong></p>

                    <h4>Characteristics</h4>
                    <ul>
                        <li>Stores raw data in native format</li>
                        <li>Schema-on-read (structure applied during analysis)</li>
                        <li>Supports multiple data types (structured, unstructured, semi-structured)</li>
                        <li>Built on object storage or HDFS</li>
                    </ul>

                    <h4>Advantages</h4>
                    <ul>
                        <li>Flexible and scalable</li>
                        <li>Cost-effective storage</li>
                        <li>Foundation for advanced analytics and ML</li>
                        <li>Supports diverse data sources</li>
                    </ul>

                    <h4>Challenges</h4>
                    <ul>
                        <li>Data quality issues without governance</li>
                        <li>Can become "data swamp" without organization</li>
                        <li>Metadata management critical</li>
                        <li>Performance issues without optimization</li>
                    </ul>

                    <h4>Best Practices</h4>
                    <ul>
                        <li>Organize data in zones (bronze/raw, silver/processed, gold/serving)</li>
                        <li>Implement strong metadata governance</li>
                        <li>Maintain data lineage and documentation</li>
                        <li>Use partitioning and indexing for performance</li>
                    </ul>
                </div>

                <div className="col-md-6">
                    <h3>Data Warehouses</h3>
                    <p><strong>Analytics-optimized structured storage</strong></p>

                    <h4>Popular Platforms</h4>
                    <ul>
                        <li><strong>Snowflake:</strong> Cloud-native, separates compute/storage, easy scaling</li>
                        <li><strong>AWS Redshift:</strong> Petabyte-scale data warehouse</li>
                        <li><strong>BigQuery:</strong> Serverless, SQL-based analytics</li>
                        <li><strong>Azure Synapse:</strong> Integrated analytics platform</li>
                    </ul>

                    <h4>Characteristics</h4>
                    <ul>
                        <li>Schema-on-write (structure defined upfront)</li>
                        <li>Optimized for analytical queries</li>
                        <li>Columnar storage for performance</li>
                        <li>Aggregated and processed data</li>
                    </ul>

                    <h4>Advantages</h4>
                    <ul>
                        <li>Fast query performance</li>
                        <li>Structured for business analytics</li>
                        <li>ACID compliance</li>
                        <li>Well-integrated BI tools</li>
                    </ul>

                    <h4>Disadvantages</h4>
                    <ul>
                        <li>Schema changes can be rigid</li>
                        <li>Not suitable for raw data storage</li>
                        <li>Can be expensive without optimization</li>
                    </ul>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-12">
                    <h3>Storage Comparison</h3>
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
    )
}

export default function DataArchitectureMetadataCatalog() {
    return (
        <div className="pt-4">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title mb-3">Metadata & Data Catalog</h2>
                    <p className="mb-3">Metadata describes the data itself. A data catalog makes metadata searchable and discoverable, enabling teams to find and understand data assets.</p>

                    <div className="row">
                        <div className="col-md-6">
                            <h5>Types of Metadata</h5>
                            <ul className="list-group list-group-flush mb-4">
                                <li className="list-group-item"><strong>Structural:</strong> Schema, data types, column names</li>
                                <li className="list-group-item"><strong>Descriptive:</strong> Business definitions, ownership, use cases</li>
                                <li className="list-group-item"><strong>Operational:</strong> Update frequency, record counts, quality metrics</li>
                                <li className="list-group-item"><strong>Lineage:</strong> Data source, transformations, dependencies</li>
                                <li className="list-group-item"><strong>Technical:</strong> Format, location, partitioning, compression</li>
                                <li className="list-group-item"><strong>Governance:</strong> PII flags, compliance tags, access levels</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h5>Data Catalog Benefits</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2">🔍 <strong>Discoverability:</strong> Find relevant datasets easily</li>
                                <li className="mb-2">📊 <strong>Data Quality:</strong> Understand data quality metrics upfront</li>
                                <li className="mb-2">🔗 <strong>Lineage:</strong> Track data flow from source to consumption</li>
                                <li className="mb-2">📝 <strong>Documentation:</strong> Business context and use cases</li>
                                <li className="mb-2">🛡️ <strong>Governance:</strong> PII identification, compliance tracking</li>
                                <li className="mb-2">👥 <strong>Collaboration:</strong> Teams can share knowledge about data</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-12">
                            <h5>Data Catalog Tools & Solutions</h5>
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Tool</th>
                                            <th>Type</th>
                                            <th>Key Features</th>
                                            <th>Best For</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>Apache Atlas</strong></td>
                                            <td>Open Source</td>
                                            <td>Lineage, classification, metadata management</td>
                                            <td>Hadoop/big data ecosystems</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Collibra</strong></td>
                                            <td>Commercial</td>
                                            <td>Governance, data quality, business glossary</td>
                                            <td>Enterprise governance</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Alation</strong></td>
                                            <td>Commercial</td>
                                            <td>AI-powered discovery, lineage, collaboration</td>
                                            <td>Data democratization</td>
                                        </tr>
                                        <tr>
                                            <td><strong>AWS Glue Catalog</strong></td>
                                            <td>Cloud Native</td>
                                            <td>Automatic schema detection, integration with Glue jobs</td>
                                            <td>AWS-centric organizations</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Dataplex</strong></td>
                                            <td>Cloud Native</td>
                                            <td>Data mesh architecture, GCP integration</td>
                                            <td>GCP users, data mesh</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-12">
                            <h5>Data Lineage</h5>
                            <p className="mb-2">Data lineage tracks the journey of data from source to consumption:</p>
                            <ul className="list-unstyled mb-3">
                                <li><strong>Upstream Lineage:</strong> Where did this data originate? What transformations were applied?</li>
                                <li><strong>Downstream Lineage:</strong> Where is this data used? What downstream systems depend on it?</li>
                                <li><strong>Impact Analysis:</strong> If source data changes, what systems are affected?</li>
                            </ul>

                            <h5>Building a Metadata Strategy</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">✓ Establish metadata standards and conventions across teams</li>
                                <li className="list-group-item">✓ Automate metadata collection where possible (schema detection, lineage extraction)</li>
                                <li className="list-group-item">✓ Create business glossary for consistent terminology</li>
                                <li className="list-group-item">✓ Track data ownership and stewardship</li>
                                <li className="list-group-item">✓ Monitor catalog adoption and engagement</li>
                                <li className="list-group-item">✓ Link metadata to data quality and governance rules</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

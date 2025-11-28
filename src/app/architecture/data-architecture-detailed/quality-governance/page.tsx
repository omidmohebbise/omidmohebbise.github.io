export default function DataArchitectureQualityGovernance() {
    return (
        <div className="pt-4">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title mb-3">Data Quality & Governance</h2>
                    <p className="mb-3">Data quality and governance ensure data is accurate, secure, and used appropriately. They are critical components of a mature data architecture.</p>

                    <div className="row">
                        <div className="col-md-6">
                            <h5>Data Quality Dimensions</h5>
                            <ul className="list-group list-group-flush mb-4">
                                <li className="list-group-item"><strong>Accuracy:</strong> Data correctly represents reality</li>
                                <li className="list-group-item"><strong>Completeness:</strong> All required data is present</li>
                                <li className="list-group-item"><strong>Consistency:</strong> Same data is uniform across systems</li>
                                <li className="list-group-item"><strong>Timeliness:</strong> Data is available when needed</li>
                                <li className="list-group-item"><strong>Validity:</strong> Data conforms to defined formats</li>
                                <li className="list-group-item"><strong>Uniqueness:</strong> No duplicates for unique identifiers</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h5>Data Governance Components</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2"><strong>Data Ownership:</strong> Clear accountability for data stewardship</li>
                                <li className="mb-2"><strong>Policies:</strong> Rules for data usage, retention, privacy</li>
                                <li className="mb-2"><strong>Standards:</strong> Naming conventions, formats, quality rules</li>
                                <li className="mb-2"><strong>Compliance:</strong> GDPR, CCPA, HIPAA requirements</li>
                                <li className="mb-2"><strong>Access Control:</strong> Role-based permissions for data access</li>
                                <li className="mb-2"><strong>Monitoring:</strong> Track compliance and quality metrics</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-12">
                            <h5>Data Quality Tools & Frameworks</h5>
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Tool Category</th>
                                            <th>Examples</th>
                                            <th>Capabilities</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>Data Quality Platforms</strong></td>
                                            <td>Talend, Informatica, Great Expectations</td>
                                            <td>Profiling, validation, monitoring, anomaly detection</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Data Observability</strong></td>
                                            <td>Monte Carlo, Soda, DataKitchen</td>
                                            <td>Real-time monitoring, incident response, root cause analysis</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Governance Platforms</strong></td>
                                            <td>Collibra, Alation, Okera</td>
                                            <td>Policy enforcement, access control, audit trails</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Privacy Engineering</strong></td>
                                            <td>Immuta, Dataiku, Azure Purview</td>
                                            <td>PII detection, anonymization, compliance automation</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-12">
                            <h5>Implementing Data Quality Checks</h5>
                            <p className="mb-2"><strong>Testing Strategy:</strong></p>
                            <ul className="list-unstyled mb-3">
                                <li>→ <strong>Schema Testing:</strong> Verify expected columns, data types</li>
                                <li>→ <strong>Value Range Testing:</strong> Numeric values within expected bounds</li>
                                <li>→ <strong>NULL Testing:</strong> Required fields have values</li>
                                <li>→ <strong>Duplicate Testing:</strong> Check for unintended duplicates</li>
                                <li>→ <strong>Referential Integrity:</strong> Foreign keys match parent records</li>
                                <li>→ <strong>Freshness Testing:</strong> Data updated within expected timeframe</li>
                            </ul>

                            <p className="mb-2"><strong>Where to Test:</strong></p>
                            <ul className="list-unstyled mb-3">
                                <li>→ <strong>At Source:</strong> Catch issues early in data pipeline</li>
                                <li>→ <strong>During ETL:</strong> Transform and validate during processing</li>
                                <li>→ <strong>At Destination:</strong> Final quality check before consumption</li>
                                <li>→ <strong>Ongoing Monitoring:</strong> Continuous quality metrics</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-12">
                            <h5>Data Governance Maturity Levels</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><strong>Level 1 (Initial):</strong> Ad-hoc processes, no formal governance</li>
                                <li className="list-group-item"><strong>Level 2 (Repeatable):</strong> Documented policies, manual enforcement</li>
                                <li className="list-group-item"><strong>Level 3 (Defined):</strong> Automated tools, organization-wide policies</li>
                                <li className="list-group-item"><strong>Level 4 (Managed):</strong> Proactive monitoring, real-time enforcement</li>
                                <li className="list-group-item"><strong>Level 5 (Optimized):</strong> AI-driven insights, continuous improvement</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

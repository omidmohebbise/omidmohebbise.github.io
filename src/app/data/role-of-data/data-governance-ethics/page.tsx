export default function DataGovernanceEthicsPage() {
    return (
        <div className="pt-4">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title mb-3">Data Governance & Ethics</h2>

                    <div className="row">
                        <div className="col-md-6">
                            <h5>Data Governance</h5>
                            <p className="mb-2"><strong>Definition:</strong> Framework for managing data availability, usability, integrity, and security.</p>

                            <h6>Data Ownership</h6>
                            <ul className="list-group list-group-flush mb-2">
                                <li className="list-group-item">Each data asset has clear ownership and accountability</li>
                                <li className="list-group-item">Data owners approve access and usage</li>
                                <li className="list-group-item">Owners responsible for data quality and compliance</li>
                            </ul>

                            <h6 className="mt-3">Data Quality</h6>
                            <ul className="list-unstyled">
                                <li>Accuracy: Data must be correct and reliable</li>
                                <li>Completeness: All required data elements present</li>
                                <li>Consistency: Uniform data across systems</li>
                                <li>Timeliness: Data current and available when needed</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h5>Governance Continued</h5>
                            <h6>Metadata Management</h6>
                            <ul className="list-group list-group-flush mb-2">
                                <li className="list-group-item">Document data definitions and business meaning</li>
                                <li className="list-group-item">Track data lineage (source to consumption)</li>
                                <li className="list-group-item">Maintain data catalogs for discovery</li>
                                <li className="list-group-item">Document data transformations and rules</li>
                            </ul>

                            <h6 className="mt-3">Data Lineage</h6>
                            <ul className="list-unstyled">
                                <li>Track data flow from source to destination</li>
                                <li>Understand dependencies and impacts</li>
                                <li>Support audit trails and compliance</li>
                                <li>Enable impact analysis for changes</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6">
                            <h5>Privacy</h5>
                            <h6>Personal Data Protection</h6>
                            <ul className="list-group list-group-flush mb-2">
                                <li className="list-group-item">Identify what constitutes personal data</li>
                                <li className="list-group-item">Implement access controls and authentication</li>
                                <li className="list-group-item">Encrypt sensitive data at rest and in transit</li>
                                <li className="list-group-item">Monitor and audit data access</li>
                            </ul>

                            <h6 className="mt-3">Data Minimization</h6>
                            <ul>
                                <li>Collect only necessary data</li>
                                <li>Retain data only as long as needed</li>
                                <li>Delete data when no longer required</li>
                                <li>Anonymize data where possible</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h5>Compliance Frameworks</h5>
                            <h6>GDPR</h6>
                            <ul className="list-group list-group-flush mb-2">
                                <li className="list-group-item"><strong>EU/UK Standard:</strong> Applies to any organization handling EU resident data</li>
                                <li className="list-group-item">User rights: access, correction, deletion, portability</li>
                                <li className="list-group-item">Privacy by design requirements</li>
                                <li className="list-group-item">Data breach notification within 72 hours</li>
                            </ul>

                            <h6 className="mt-3">CCPA</h6>
                            <ul>
                                <li><strong>US Standard:</strong> California residents' personal data rights</li>
                                <li>Right to know, delete, and opt-out of sale</li>
                                <li>Business obligations for data requests</li>
                                <li>Significant penalties for violations</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6">
                            <h5>Other Compliance Standards</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><strong>HIPAA:</strong> Healthcare data protection (US)</li>
                                <li className="list-group-item"><strong>PCI-DSS:</strong> Payment card industry standards</li>
                                <li className="list-group-item"><strong>LGPD:</strong> Brazil's data protection law</li>
                                <li className="list-group-item"><strong>SOX:</strong> Financial data governance</li>
                                <li className="list-group-item"><strong>ISO 27001:</strong> Information security management</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h5>Ethical Data Use</h5>
                            <ul className="list-unstyled">
                                <li><strong>Transparency:</strong> Disclose data collection and usage clearly</li>
                                <li><strong>Fairness:</strong> Prevent algorithmic bias and discrimination</li>
                                <li><strong>Consent:</strong> Obtain explicit permission before using data</li>
                                <li><strong>Accountability:</strong> Own decisions and impacts of data usage</li>
                                <li><strong>Security:</strong> Protect data from unauthorized access</li>
                                <li><strong>Purpose Limitation:</strong> Use data only for stated purposes</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-12">
                            <h5>Best Practices</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Establish a Data Governance Council</li>
                                <li className="list-group-item">Create and maintain data policies and procedures</li>
                                <li className="list-group-item">Conduct regular data audits and assessments</li>
                                <li className="list-group-item">Train employees on data governance and ethics</li>
                                <li className="list-group-item">Implement technical controls (encryption, masking, etc.)</li>
                                <li className="list-group-item">Monitor for policy violations and breaches</li>
                                <li className="list-group-item">Maintain documentation for compliance evidence</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

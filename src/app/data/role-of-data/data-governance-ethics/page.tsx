export default function DataGovernanceEthicsPage() {
    return (
        <div className='pt-2'>
            <h2 className="mb-4 mt-3">Data Governance & Ethics</h2>

            <div className="row">
                <div className="col-md-6">
                    <h3>Data Governance</h3>
                    <p><strong>Definition:</strong> Framework for managing data availability, usability, integrity, and security.</p>

                    <h4>Data Ownership</h4>
                    <ul>
                        <li>Each data asset has clear ownership and accountability</li>
                        <li>Data owners approve access and usage</li>
                        <li>Owners responsible for data quality and compliance</li>
                    </ul>

                    <h4>Data Quality</h4>
                    <ul>
                        <li>Accuracy: Data must be correct and reliable</li>
                        <li>Completeness: All required data elements present</li>
                        <li>Consistency: Uniform data across systems</li>
                        <li>Timeliness: Data current and available when needed</li>
                    </ul>
                </div>

                <div className="col-md-6">
                    <h3>Governance Continued</h3>

                    <h4>Metadata Management</h4>
                    <ul>
                        <li>Document data definitions and business meaning</li>
                        <li>Track data lineage (source to consumption)</li>
                        <li>Maintain data catalogs for discovery</li>
                        <li>Document data transformations and rules</li>
                    </ul>

                    <h4>Data Lineage</h4>
                    <ul>
                        <li>Track data flow from source to destination</li>
                        <li>Understand dependencies and impacts</li>
                        <li>Support audit trails and compliance</li>
                        <li>Enable impact analysis for changes</li>
                    </ul>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-md-6">
                    <h3>Privacy</h3>

                    <h4>Personal Data Protection</h4>
                    <ul>
                        <li>Identify what constitutes personal data</li>
                        <li>Implement access controls and authentication</li>
                        <li>Encrypt sensitive data at rest and in transit</li>
                        <li>Monitor and audit data access</li>
                    </ul>

                    <h4>Data Minimization</h4>
                    <ul>
                        <li>Collect only necessary data</li>
                        <li>Retain data only as long as needed</li>
                        <li>Delete data when no longer required</li>
                        <li>Anonymize data where possible</li>
                    </ul>
                </div>

                <div className="col-md-6">
                    <h3>Compliance Frameworks</h3>

                    <h4>GDPR (General Data Protection Regulation)</h4>
                    <ul>
                        <li><strong>EU/UK Standard:</strong> Applies to any organization handling EU resident data</li>
                        <li>User rights: access, correction, deletion, portability</li>
                        <li>Privacy by design requirements</li>
                        <li>Data breach notification within 72 hours</li>
                    </ul>

                    <h4>CCPA (California Consumer Privacy Act)</h4>
                    <ul>
                        <li><strong>US Standard:</strong> California residents' personal data rights</li>
                        <li>Right to know, delete, and opt-out of sale</li>
                        <li>Business obligations for data requests</li>
                        <li>Significant penalties for violations</li>
                    </ul>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-md-6">
                    <h3>Other Compliance Standards</h3>
                    <ul>
                        <li><strong>HIPAA:</strong> Healthcare data protection (US)</li>
                        <li><strong>PCI-DSS:</strong> Payment card industry standards</li>
                        <li><strong>LGPD:</strong> Brazil's data protection law</li>
                        <li><strong>SOX:</strong> Financial data governance</li>
                        <li><strong>ISO 27001:</strong> Information security management</li>
                    </ul>
                </div>

                <div className="col-md-6">
                    <h3>Ethical Data Use</h3>
                    <ul>
                        <li><strong>Transparency:</strong> Disclose data collection and usage clearly</li>
                        <li><strong>Fairness:</strong> Prevent algorithmic bias and discrimination</li>
                        <li><strong>Consent:</strong> Obtain explicit permission before using data</li>
                        <li><strong>Accountability:</strong> Own decisions and impacts of data usage</li>
                        <li><strong>Security:</strong> Protect data from unauthorized access</li>
                        <li><strong>Purpose Limitation:</strong> Use data only for stated purposes</li>
                    </ul>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-12">
                    <h3>Best Practices</h3>
                    <ul>
                        <li>Establish a Data Governance Council</li>
                        <li>Create and maintain data policies and procedures</li>
                        <li>Conduct regular data audits and assessments</li>
                        <li>Train employees on data governance and ethics</li>
                        <li>Implement technical controls (encryption, masking, etc.)</li>
                        <li>Monitor for policy violations and breaches</li>
                        <li>Maintain documentation for compliance evidence</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

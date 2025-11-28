export default function SecurityArchitecture() {
    return (
        <div className="pt-4">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title mb-3">Security Architecture</h2>
                    <p className="mb-3">Security architecture ensures systems, data, and users are protected from threats. It integrates security across all layers of the system.</p>

                    <div className="row">
                        <div className="col-md-6">
                            <h5>Core Security Principles (CIA Triad)</h5>
                            <ul className="list-group list-group-flush mb-4">
                                <li className="list-group-item"><strong>Confidentiality:</strong> Only authorized users access data</li>
                                <li className="list-group-item"><strong>Integrity:</strong> Data is accurate and unmodified</li>
                                <li className="list-group-item"><strong>Availability:</strong> Systems are accessible when needed</li>
                            </ul>

                            <h5>Defense Layers</h5>
                            <ul className="list-unstyled mb-4">
                                <li><strong>Perimeter:</strong> Firewalls, WAF, DDoS protection</li>
                                <li><strong>Application:</strong> Input validation, authentication, authorization</li>
                                <li><strong>Data:</strong> Encryption, masking, tokenization</li>
                                <li><strong>Infrastructure:</strong> Patch management, hardening, monitoring</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h5>Security Architecture Components</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2"><strong>Authentication:</strong> Verify user identity (OAuth, SAML, MFA)</li>
                                <li className="mb-2"><strong>Authorization:</strong> Control what authenticated users can do (RBAC, ABAC)</li>
                                <li className="mb-2"><strong>Encryption:</strong> Protect data in transit and at rest</li>
                                <li className="mb-2"><strong>Audit Logging:</strong> Track access and changes</li>
                                <li className="mb-2"><strong>Incident Response:</strong> Detect and respond to threats</li>
                                <li className="mb-2"><strong>Compliance:</strong> Meet regulatory requirements</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-12">
                            <h5>Security Technologies & Frameworks</h5>
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Category</th>
                                            <th>Technologies</th>
                                            <th>Purpose</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>Identity & Access</strong></td>
                                            <td>Okta, Azure AD, Auth0, Keycloak</td>
                                            <td>IAM, SSO, MFA, credential management</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Network Security</strong></td>
                                            <td>Firewalls, VPN, WAF, DDoS protection</td>
                                            <td>Perimeter defense, traffic filtering</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Data Protection</strong></td>
                                            <td>TDE, HSM, tokenization platforms</td>
                                            <td>Encryption, key management, data masking</td>
                                        </tr>
                                        <tr>
                                            <td><strong>SIEM & Monitoring</strong></td>
                                            <td>Splunk, ELK, Datadog, AWS GuardDuty</td>
                                            <td>Log collection, anomaly detection, alerting</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Vulnerability Management</strong></td>
                                            <td>Qualys, Rapid7, Snyk, OWASP ZAP</td>
                                            <td>Scanning, testing, threat assessment</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6">
                            <h5>Threat Modeling (STRIDE)</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><strong>Spoofing:</strong> Fake identity attacks</li>
                                <li className="list-group-item"><strong>Tampering:</strong> Data modification attacks</li>
                                <li className="list-group-item"><strong>Repudiation:</strong> Denying actions taken</li>
                                <li className="list-group-item"><strong>Information Disclosure:</strong> Unauthorized data access</li>
                                <li className="list-group-item"><strong>Denial of Service:</strong> Service unavailability</li>
                                <li className="list-group-item"><strong>Elevation of Privilege:</strong> Unauthorized access escalation</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h5>Security Best Practices</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">✓ Zero-trust security model</li>
                                <li className="list-group-item">✓ Principle of least privilege</li>
                                <li className="list-group-item">✓ Defense in depth (multiple layers)</li>
                                <li className="list-group-item">✓ Regular security audits and penetration testing</li>
                                <li className="list-group-item">✓ Incident response plan and team</li>
                                <li className="list-group-item">✓ Security awareness training for all staff</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-12">
                            <h5>Compliance Frameworks</h5>
                            <ul className="list-unstyled mb-3">
                                <li className="mb-2"><strong>GDPR:</strong> Data protection in EU (right to be forgotten, data portability)</li>
                                <li className="mb-2"><strong>CCPA:</strong> California privacy law (user rights, opt-out)</li>
                                <li className="mb-2"><strong>HIPAA:</strong> Healthcare data protection in USA</li>
                                <li className="mb-2"><strong>PCI-DSS:</strong> Payment card industry security standards</li>
                                <li className="mb-2"><strong>SOC 2:</strong> Security, availability, confidentiality, privacy controls</li>
                                <li className="mb-2"><strong>ISO 27001:</strong> Information security management system</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

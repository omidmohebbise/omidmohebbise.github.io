export default function SecurityPage() {
    return (
        <div className="container py-5">
            <p className="section-label">Security</p>
            <h1 className="section-title">Web Security</h1>
            <hr className="section-rule" />

            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h5 className="mb-3">Web Security Overview</h5>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="card h-100 shadow-sm mb-3">
                                <div className="card-body">
                                    <h5 className="card-title">Authentication &amp; Authorization</h5>
                                    <p className="card-text mb-0">Verifying user identities using passwords, multi-factor authentication, and role-based access control.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="card h-100 shadow-sm mb-3">
                                <div className="card-body">
                                    <h5 className="card-title">Data Protection &amp; Encryption</h5>
                                    <p className="card-text mb-0">Encrypting sensitive data using SSL/TLS and protecting stored data with access controls.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="card h-100 shadow-sm mb-3">
                                <div className="card-body">
                                    <h5 className="card-title">Web Application Security</h5>
                                    <p className="card-text mb-0">Defending against SQL Injection, Cross-Site Scripting (XSS), and using Web Application Firewalls.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="card h-100 shadow-sm mb-3">
                                <div className="card-body">
                                    <h5 className="card-title">Secure Coding Practices</h5>
                                    <p className="card-text mb-0">Writing secure code, validating input, sanitizing data, and following OWASP Top 10 guidelines.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="card h-100 shadow-sm mb-3">
                                <div className="card-body">
                                    <h5 className="card-title">Network Security</h5>
                                    <p className="card-text mb-0">Implementing firewalls, intrusion detection systems, and secure APIs to prevent attacks.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="card h-100 shadow-sm mb-3">
                                <div className="card-body">
                                    <h5 className="card-title">User &amp; Session Security</h5>
                                    <p className="card-text mb-0">Managing user sessions securely with secure cookies and authentication protocols like OAuth.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div className="card h-100 shadow-sm mb-3">
                                <div className="card-body">
                                    <h5 className="card-title">Regular Security Audits &amp; Monitoring</h5>
                                    <p className="card-text mb-0">Conducting vulnerability assessments, penetration testing, and using monitoring tools to detect threats.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card shadow-sm">
                <div className="card-body">
                    <h5 className="mb-1">Related Reading</h5>
                    <p className="mb-0">
                        For the frameworks and standards behind these controls — OWASP, Spring
                        Security, OAuth 2.0, ISO/IEC 27001, and more — see the dedicated{" "}
                        <a href="/security/frameworks">Security Frameworks</a> page.
                    </p>
                </div>
            </div>
        </div>
    )
}

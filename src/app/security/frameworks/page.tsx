export default function SecurityPage() {
    return (
        <div className="container py-5">
            <p className="section-label">Security</p>
            <h1 className="section-title">Security Frameworks</h1>
            <hr className="section-rule" />

            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <h5>Web Application Security Frameworks</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><strong>OWASP Security Framework:</strong> Guidelines and tools like the OWASP Top Ten to address common web vulnerabilities (XSS, SQL Injection).</li>
                                <li className="list-group-item"><strong>Spring Security (Java):</strong> A comprehensive framework for securing Java-based web applications — authentication, authorization, and CSRF protection.</li>
                                <li className="list-group-item"><strong>ASP.NET Core Identity (C#):</strong> Secure user authentication and authorization for .NET-based applications.</li>
                                <li className="list-group-item"><strong>Django Security Middleware (Python):</strong> Built-in protections like CSRF, XSS prevention, and secure session handling.</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h5>Cloud Security Frameworks</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><strong>Cloud Security Alliance (CSA):</strong> A framework for secure cloud adoption, including the CSA Cloud Controls Matrix (CCM).</li>
                                <li className="list-group-item"><strong>Azure Security Center:</strong> Monitors and protects Azure-based infrastructure.</li>
                                <li className="list-group-item"><strong>AWS Security Hub:</strong> A comprehensive view of your security posture across AWS environments.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6">
                            <h5>Identity &amp; Access Management (IAM) Frameworks</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><strong>OAuth 2.0:</strong> An open standard for token-based authorization, widely used in web and mobile applications.</li>
                                <li className="list-group-item"><strong>OpenID Connect (OIDC):</strong> Extends OAuth 2.0 for user authentication, providing identity information about users.</li>
                                <li className="list-group-item"><strong>Keycloak:</strong> An open-source IAM framework for single sign-on (SSO) and identity brokering.</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h5>Data Security Frameworks</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><strong>ISO/IEC 27001:</strong> A globally recognized standard for information security management systems (ISMS).</li>
                                <li className="list-group-item"><strong>NIST Cybersecurity Framework (CSF):</strong> A risk-based approach to managing and improving data security.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6">
                            <h5>Secure Development Frameworks</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><strong>OWASP SAMM:</strong> Software Assurance Maturity Model — integrates security into the software development lifecycle.</li>
                                <li className="list-group-item"><strong>BSIMM:</strong> Building Security In Maturity Model — measures and improves software security practices.</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h5>Penetration Testing &amp; Vulnerability Management</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><strong>Metasploit Framework:</strong> A widely used tool for penetration testing and exploiting vulnerabilities.</li>
                                <li className="list-group-item"><strong>Nessus:</strong> A vulnerability scanner to identify and assess security issues in networks and applications.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-12">
                            <h5>General Cybersecurity Frameworks</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><strong>NIST Cybersecurity Framework:</strong> Identifying, protecting, detecting, responding to, and recovering from security incidents.</li>
                                <li className="list-group-item"><strong>MITRE ATT&amp;CK Framework:</strong> A knowledge base of adversary tactics and techniques to understand and counter threats.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function SecurityPage() {
    return (
        <div className="container py-3">
            <div className="card mb-2">
                <div className="card-header ">
                    <h3>Web Security Overview </h3>
                </div>
                <div className="card-body">

                    <div className="row">
                        <div className="col-md-6">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <h5 className="card-title">Authentication & Authorization</h5>
                                    <p className="card-text">Verifying user identities using passwords, multi-factor authentication, and role-based access control.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <h5 className="card-title">Data Protection & Encryption</h5>
                                    <p className="card-text">Encrypting sensitive data using SSL/TLS and protecting stored data with access controls.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <h5 className="card-title">Web Application Security</h5>
                                    <p className="card-text">Defending against SQL Injection, Cross-Site Scripting (XSS), and using Web Application Firewalls.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <h5 className="card-title">Secure Coding Practices</h5>
                                    <p className="card-text">Writing secure code, validating input, sanitizing data, and following OWASP Top 10 guidelines.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <h5 className="card-title">Network Security</h5>
                                    <p className="card-text">Implementing firewalls, intrusion detection systems, and secure APIs to prevent attacks.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <h5 className="card-title">User & Session Security</h5>
                                    <p className="card-text">Managing user sessions securely with secure cookies and authentication protocols like OAuth.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <h5 className="card-title">Regular Security Audits & Monitoring</h5>
                                    <p className="card-text">Conducting vulnerability assessments, penetration testing, and using monitoring tools to detect threats.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-2">
                <div className="card-header ">
                    <h3>Security Frameworks</h3>
                </div>

                <div className="p-2">
                    <ul>
                        <li>
                            <h4 className="py-3 ">- Web Application Security Frameworks:</h4>
                            <ul>
                                <li><strong>OWASP Security Framework:</strong> Provides guidelines and tools like the OWASP Top Ten to address common web vulnerabilities (e.g., XSS, SQL Injection).</li>
                                <li><strong>Spring Security (Java):</strong> A comprehensive security framework for securing Java-based web applications, supporting authentication, authorization, and CSRF protection.</li>
                                <li><strong>ASP.NET Core Identity (C#):</strong> Provides secure user authentication and authorization for .NET-based applications.</li>
                                <li><strong>Django Security Middleware (Python):</strong> Includes built-in protections like CSRF, XSS prevention, and secure session handling.</li>
                            </ul>


                        </li>
                        <li>
                        <h4 className="py-3 ">- Cloud Security Frameworks:</h4>
                            <ul>
                                <li><strong>Cloud Security Alliance (CSA):</strong> Offers a framework for secure cloud adoption, including the CSA Cloud Controls Matrix (CCM).</li>
                                <li><strong>Azure Security Center:</strong> A cloud security framework to monitor and protect Azure-based infrastructure.</li>
                                <li><strong>AWS Security Hub:</strong> Provides a comprehensive view of your security posture in AWS environments.</li>
                            </ul>
                        </li>
                        <li>
                        <h4 className="py-3 ">- Identity and Access Management (IAM) Frameworks:</h4>
                            <ul>
                                <li><strong>OAuth 2.0:</strong> An open standard for token-based authorization, widely used in web and mobile applications.</li>
                                <li><strong>OpenID Connect (OIDC):</strong> Extends OAuth 2.0 for user authentication, providing identity information about users.</li>
                                <li><strong>Keycloak:</strong> An open-source IAM framework for single sign-on (SSO) and identity brokering.</li>
                            </ul>
                        </li>
                        <li>
                        <h4 className="py-3 ">- Data Security Frameworks:</h4>
                            <ul>
                                <li><strong>ISO/IEC 27001:</strong> A globally recognized standard for information security management systems (ISMS).</li>
                                <li><strong>NIST Cybersecurity Framework (CSF):</strong> Provides a risk-based approach to managing and improving data security.</li>
                            </ul>
                        </li>
                        <li>
                        <h4 className="py-3 ">- Secure Development Frameworks:</h4>
                            <ul>
                                <li><strong>OWASP Software Assurance Maturity Model (SAMM):</strong> A framework to integrate security into software development lifecycles.</li>
                                <li><strong>BSIMM (Building Security In Maturity Model):</strong> A framework for measuring and improving software security practices.</li>
                            </ul>
                        </li>
                        <li>
                        <h4 className="py-3 "> - Penetration Testing and Vulnerability Management Frameworks:</h4>
                            <ul>
                                <li><strong>Metasploit Framework:</strong> A widely used tool for penetration testing and exploiting vulnerabilities.</li>
                                <li><strong>Nessus:</strong> A vulnerability scanner to identify and assess security issues in networks and applications.</li>
                            </ul>
                        </li>
                        <li>
                        <h4 className="py-3 ">- General Cybersecurity Frameworks:</h4>
                            <ul>
                                <li><strong>NIST Cybersecurity Framework:</strong> Focuses on identifying, protecting, detecting, responding to, and recovering from security incidents.</li>
                                <li><strong>MITRE ATT&CK Framework:</strong> A knowledge base of adversary tactics and techniques to understand and counter threats.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
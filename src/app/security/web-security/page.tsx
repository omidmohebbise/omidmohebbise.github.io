export default function SecurityPage() {
    return (
        <div className="container py-3">

            <div className="">
                <h2>Security Frameworks: A Tutorial</h2>
                <div className="">
                    <ul>
                        <li>
                            <strong>Web Application Security Frameworks:</strong>
                            <ul>
                                <li><strong>OWASP Security Framework:</strong> Provides guidelines and tools like the OWASP Top Ten to address common web vulnerabilities (e.g., XSS, SQL Injection).</li>
                                <li><strong>Spring Security (Java):</strong> A comprehensive security framework for securing Java-based web applications, supporting authentication, authorization, and CSRF protection.</li>
                                <li><strong>ASP.NET Core Identity (C#):</strong> Provides secure user authentication and authorization for .NET-based applications.</li>
                                <li><strong>Django Security Middleware (Python):</strong> Includes built-in protections like CSRF, XSS prevention, and secure session handling.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Cloud Security Frameworks:</strong>
                            <ul>
                                <li><strong>Cloud Security Alliance (CSA):</strong> Offers a framework for secure cloud adoption, including the CSA Cloud Controls Matrix (CCM).</li>
                                <li><strong>Azure Security Center:</strong> A cloud security framework to monitor and protect Azure-based infrastructure.</li>
                                <li><strong>AWS Security Hub:</strong> Provides a comprehensive view of your security posture in AWS environments.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Identity and Access Management (IAM) Frameworks:</strong>
                            <ul>
                                <li><strong>OAuth 2.0:</strong> An open standard for token-based authorization, widely used in web and mobile applications.</li>
                                <li><strong>OpenID Connect (OIDC):</strong> Extends OAuth 2.0 for user authentication, providing identity information about users.</li>
                                <li><strong>Keycloak:</strong> An open-source IAM framework for single sign-on (SSO) and identity brokering.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Data Security Frameworks:</strong>
                            <ul>
                                <li><strong>ISO/IEC 27001:</strong> A globally recognized standard for information security management systems (ISMS).</li>
                                <li><strong>NIST Cybersecurity Framework (CSF):</strong> Provides a risk-based approach to managing and improving data security.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Secure Development Frameworks:</strong>
                            <ul>
                                <li><strong>OWASP Software Assurance Maturity Model (SAMM):</strong> A framework to integrate security into software development lifecycles.</li>
                                <li><strong>BSIMM (Building Security In Maturity Model):</strong> A framework for measuring and improving software security practices.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Penetration Testing and Vulnerability Management Frameworks:</strong>
                            <ul>
                                <li><strong>Metasploit Framework:</strong> A widely used tool for penetration testing and exploiting vulnerabilities.</li>
                                <li><strong>Nessus:</strong> A vulnerability scanner to identify and assess security issues in networks and applications.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>General Cybersecurity Frameworks:</strong>
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
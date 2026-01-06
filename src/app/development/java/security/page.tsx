export default function JavaSecurityPage() {
    return (
        <div className="pt-4">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title mb-3">Java Security</h2>

                    <div className="row">
                        <div className="col-md-6">
                            <h5>Core Security Components</h5>
                            <ul className="list-group list-group-flush mb-3">
                                <li className="list-group-item"><strong>Java Cryptography Architecture (JCA):</strong> Framework for encryption, key generation, digital signatures</li>
                                <li className="list-group-item"><strong>Java Cryptography Extension (JCE):</strong> APIs for encryption, key exchange, MAC</li>
                                <li className="list-group-item"><strong>Java Secure Socket Extension (JSSE):</strong> SSL/TLS implementation</li>
                                <li className="list-group-item"><strong>Java Authentication and Authorization Service (JAAS):</strong> User authentication and access control</li>
                                <li className="list-group-item"><strong>Security Manager:</strong> Runtime permissions and access control</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h5>Common Security Practices</h5>
                            <ul className="list-group list-group-flush mb-3">
                                <li className="list-group-item"><strong>Input Validation:</strong> Sanitize all user inputs to prevent injection attacks</li>
                                <li className="list-group-item"><strong>SQL Injection Prevention:</strong> Use PreparedStatement with parameterized queries</li>
                                <li className="list-group-item"><strong>XSS Prevention:</strong> Encode output, use content security policies</li>
                                <li className="list-group-item"><strong>CSRF Protection:</strong> Use anti-CSRF tokens in forms</li>
                                <li className="list-group-item"><strong>Secure Password Storage:</strong> Use BCrypt, PBKDF2, or Argon2</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6">
                            <h5>Cryptography in Java</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><strong>MessageDigest:</strong> SHA-256, SHA-512 for hashing</li>
                                <li className="list-group-item"><strong>Cipher:</strong> AES, RSA for encryption/decryption</li>
                                <li className="list-group-item"><strong>KeyGenerator:</strong> Generate symmetric keys</li>
                                <li className="list-group-item"><strong>KeyPairGenerator:</strong> Generate public/private key pairs</li>
                                <li className="list-group-item"><strong>Signature:</strong> Digital signatures with RSA, DSA, ECDSA</li>
                                <li className="list-group-item"><strong>SecureRandom:</strong> Cryptographically strong random number generation</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h5>SSL/TLS Configuration</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><strong>SSLContext:</strong> Configure SSL/TLS protocols and cipher suites</li>
                                <li className="list-group-item"><strong>KeyStore:</strong> Store private keys and certificates</li>
                                <li className="list-group-item"><strong>TrustStore:</strong> Store trusted CA certificates</li>
                                <li className="list-group-item"><strong>TLS Versions:</strong> Use TLS 1.2+ (avoid SSL, TLS 1.0/1.1)</li>
                                <li className="list-group-item"><strong>Certificate Validation:</strong> Implement proper hostname verification</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6">
                            <h5>Authentication & Authorization</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><strong>JAAS LoginModule:</strong> Pluggable authentication modules</li>
                                <li className="list-group-item"><strong>Spring Security:</strong> Comprehensive authentication/authorization framework</li>
                                <li className="list-group-item"><strong>JWT Tokens:</strong> Stateless authentication with JSON Web Tokens</li>
                                <li className="list-group-item"><strong>OAuth 2.0:</strong> Delegated authorization protocol</li>
                                <li className="list-group-item"><strong>OpenID Connect:</strong> Identity layer on top of OAuth 2.0</li>
                                <li className="list-group-item"><strong>LDAP/Active Directory:</strong> Enterprise user directories</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h5>Secure Coding Guidelines</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><strong>Least Privilege:</strong> Grant minimum necessary permissions</li>
                                <li className="list-group-item"><strong>Fail Securely:</strong> Handle errors without exposing sensitive info</li>
                                <li className="list-group-item"><strong>Defense in Depth:</strong> Multiple layers of security controls</li>
                                <li className="list-group-item"><strong>Avoid Security by Obscurity:</strong> Don't rely on hidden implementation</li>
                                <li className="list-group-item"><strong>Keep Security Simple:</strong> Complex systems have more vulnerabilities</li>
                                <li className="list-group-item"><strong>Regular Updates:</strong> Keep dependencies and JDK up to date</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6">
                            <h5>Common Vulnerabilities (OWASP Top 10)</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><strong>Broken Access Control:</strong> Unauthorized access to resources</li>
                                <li className="list-group-item"><strong>Cryptographic Failures:</strong> Weak encryption, exposed data</li>
                                <li className="list-group-item"><strong>Injection:</strong> SQL, LDAP, XML injection attacks</li>
                                <li className="list-group-item"><strong>Insecure Design:</strong> Lack of security controls in design phase</li>
                                <li className="list-group-item"><strong>Security Misconfiguration:</strong> Default credentials, verbose errors</li>
                                <li className="list-group-item"><strong>Vulnerable Components:</strong> Outdated libraries with known CVEs</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h5>Security Tools & Libraries</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><strong>OWASP Dependency-Check:</strong> Identify vulnerable dependencies</li>
                                <li className="list-group-item"><strong>Snyk:</strong> Continuous security scanning</li>
                                <li className="list-group-item"><strong>SonarQube:</strong> Static code analysis for security issues</li>
                                <li className="list-group-item"><strong>Checkmarx/Fortify:</strong> Application security testing</li>
                                <li className="list-group-item"><strong>Bouncy Castle:</strong> Additional cryptographic algorithms</li>
                                <li className="list-group-item"><strong>Apache Shiro:</strong> Lightweight security framework</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-12">
                            <h5>Security Best Practices by Context</h5>
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Context</th>
                                            <th>Best Practice</th>
                                            <th>Implementation</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>Password Storage</strong></td>
                                            <td>Use strong hashing with salt</td>
                                            <td>BCryptPasswordEncoder, PBKDF2, Argon2</td>
                                        </tr>
                                        <tr>
                                            <td><strong>API Communication</strong></td>
                                            <td>Always use HTTPS/TLS</td>
                                            <td>SSL/TLS 1.2+, certificate pinning</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Database Access</strong></td>
                                            <td>Use parameterized queries</td>
                                            <td>PreparedStatement, JPA/Hibernate</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Session Management</strong></td>
                                            <td>Secure session cookies</td>
                                            <td>HttpOnly, Secure, SameSite flags</td>
                                        </tr>
                                        <tr>
                                            <td><strong>File Upload</strong></td>
                                            <td>Validate file type and size</td>
                                            <td>Content-Type validation, virus scanning</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Error Handling</strong></td>
                                            <td>Don't expose stack traces</td>
                                            <td>Generic error messages, log internally</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Logging</strong></td>
                                            <td>Don't log sensitive data</td>
                                            <td>Mask PII, passwords, tokens in logs</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6">
                            <h5>Java Security Manager (Legacy)</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2"><strong>Note:</strong> Deprecated for removal in future Java versions</li>
                                <li className="mb-2"><strong>Purpose:</strong> Define fine-grained permissions for code</li>
                                <li className="mb-2"><strong>Policy Files:</strong> Specify access rights to resources</li>
                                <li className="mb-2"><strong>Modern Alternative:</strong> Use containerization and OS-level security</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h5>Security Compliance</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2"><strong>GDPR:</strong> Data protection and privacy requirements</li>
                                <li className="mb-2"><strong>PCI DSS:</strong> Payment card industry data security</li>
                                <li className="mb-2"><strong>HIPAA:</strong> Healthcare information protection</li>
                                <li className="mb-2"><strong>SOC 2:</strong> Service organization controls</li>
                                <li className="mb-2"><strong>ISO 27001:</strong> Information security management</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

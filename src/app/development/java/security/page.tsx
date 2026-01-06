"use client"

import { useState } from 'react'

const PageStates = {
    Overview: 1,
    CoreFoundations: 2,
    Cryptography: 3,
    Authentication: 4,
    TLS: 5,
    SecureCoding: 6,
    WebSecurity: 7,
    JVMSecurity: 8,
    Advanced: 9
}

export default function JavaSecurityPage() {
    const [pageState, setPageState] = useState(PageStates.Overview)

    return (
        <div className="pt-4">
            <div className="d-flex gap-2 mb-3">
                <button
                    className={`btn ${pageState === PageStates.Overview ? 'btn-primary' : 'btn-outline-primary'}`}
                    onClick={() => setPageState(PageStates.Overview)}
                >
                    Overview
                </button>
                <button
                    className={`btn ${pageState === PageStates.CoreFoundations ? 'btn-primary' : 'btn-outline-primary'}`}
                    onClick={() => setPageState(PageStates.CoreFoundations)}
                >
                    Core Foundations
                </button>
                <button
                    className={`btn ${pageState === PageStates.Cryptography ? 'btn-primary' : 'btn-outline-primary'}`}
                    onClick={() => setPageState(PageStates.Cryptography)}
                >
                    Cryptography
                </button>
                <button
                    className={`btn ${pageState === PageStates.Authentication ? 'btn-primary' : 'btn-outline-primary'}`}
                    onClick={() => setPageState(PageStates.Authentication)}
                >
                    Authentication & Authorization
                </button>
                <button
                    className={`btn ${pageState === PageStates.TLS ? 'btn-primary' : 'btn-outline-primary'}`}
                    onClick={() => setPageState(PageStates.TLS)}
                >
                    TLS & Network Security
                </button>
                <button
                    className={`btn ${pageState === PageStates.SecureCoding ? 'btn-primary' : 'btn-outline-primary'}`}
                    onClick={() => setPageState(PageStates.SecureCoding)}
                >
                    Secure Coding Practices
                </button>
                <button
                    className={`btn ${pageState === PageStates.WebSecurity ? 'btn-primary' : 'btn-outline-primary'}`}
                    onClick={() => setPageState(PageStates.WebSecurity)}
                >
                    Web & Framework Security
                </button>
                <button
                    className={`btn ${pageState === PageStates.JVMSecurity ? 'btn-primary' : 'btn-outline-primary'}`}
                    onClick={() => setPageState(PageStates.JVMSecurity)}
                >
                    JVM & Runtime Security
                </button>
                <button
                    className={`btn ${pageState === PageStates.Advanced ? 'btn-primary' : 'btn-outline-primary'}`}
                    onClick={() => setPageState(PageStates.Advanced)}
                >
                    Advanced Topics
                </button>
            </div>

            {pageState === PageStates.Overview && (
                <div className="card mb-4 shadow-sm">
                    <div className="card-body">
                        <h2 className="card-title mb-3">Java Security - Overview</h2>

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
            )}


            {pageState === PageStates.CoreFoundations && (
                <div className="card mb-4 shadow-sm">
                    <div className="card-body">
                        <h2 className="card-title mb-3">Core Foundations</h2>
                        <p className="lead">The fundamental building blocks that everything else in Java security leans on.</p>

                        <div className="row mt-4">
                            <div className="col-md-6">
                                <h5>Java Security Architecture</h5>
                                <ul className="list-group list-group-flush mb-3">
                                    <li className="list-group-item">
                                        <strong>Security Providers:</strong>
                                        <ul className="mt-2">
                                            <li>Pluggable architecture for cryptographic implementations</li>
                                            <li>Default providers: SunJCE, SunRsaSign, SunJSSE</li>
                                            <li>Third-party providers: Bouncy Castle, Conscrypt</li>
                                            <li>Provider registration and priority ordering</li>
                                        </ul>
                                    </li>
                                    <li className="list-group-item">
                                        <strong>JCA vs JCE:</strong>
                                        <ul className="mt-2">
                                            <li><strong>JCA (Java Cryptography Architecture):</strong> Core framework - signatures, message digests, certificates</li>
                                            <li><strong>JCE (Java Cryptography Extension):</strong> Extension for encryption - ciphers, key agreement, MACs</li>
                                            <li>JCE was historically export-restricted, now fully integrated</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-md-6">
                                <h5>ClassLoaders & Security Model</h5>
                                <ul className="list-group list-group-flush mb-3">
                                    <li className="list-group-item">
                                        <strong>ClassLoader Hierarchy:</strong>
                                        <ul className="mt-2">
                                            <li>Bootstrap ClassLoader (core Java classes)</li>
                                            <li>Extension/Platform ClassLoader (extensions)</li>
                                            <li>Application/System ClassLoader (application classes)</li>
                                            <li>Custom ClassLoaders for isolation</li>
                                        </ul>
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Security Implications:</strong>
                                        <ul className="mt-2">
                                            <li>Class loading delegation model prevents malicious overrides</li>
                                            <li>Each class has a protection domain</li>
                                            <li>Code source (where class came from) + permissions</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-md-6">
                                <h5>Bytecode Verification</h5>
                                <ul className="list-group list-group-flush mb-3">
                                    <li className="list-group-item">
                                        <strong>Purpose:</strong> Ensure loaded bytecode is valid and safe
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Verification Steps:</strong>
                                        <ul className="mt-2">
                                            <li>Structural checks (valid class file format)</li>
                                            <li>Type safety verification</li>
                                            <li>Stack overflow/underflow prevention</li>
                                            <li>No illegal data conversions</li>
                                            <li>Private/protected access enforcement</li>
                                        </ul>
                                    </li>
                                    <li className="list-group-item">
                                        <strong>When It Runs:</strong> At class loading time, before execution
                                    </li>
                                </ul>
                            </div>

                            <div className="col-md-6">
                                <h5>Sandbox Concepts (Historical)</h5>
                                <ul className="list-group list-group-flush mb-3">
                                    <li className="list-group-item">
                                        <strong>Original Vision:</strong> Run untrusted code safely (applets, web apps)
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Key Components:</strong>
                                        <ul className="mt-2">
                                            <li>Bytecode verifier (prevents malicious bytecode)</li>
                                            <li>ClassLoader (isolates code sources)</li>
                                            <li>SecurityManager (enforces runtime permissions)</li>
                                            <li>Access Controller (checks permissions)</li>
                                        </ul>
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Modern Reality:</strong> Sandbox largely abandoned; containers/OS-level security preferred
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-12">
                                <h5>SecurityManager (Legacy)</h5>
                                <div className="alert alert-warning" role="alert">
                                    <strong>Note:</strong> SecurityManager is deprecated as of Java 17 and planned for removal in a future release.
                                </div>

                                <div className="row">
                                    <div className="col-md-6">
                                        <h6>Why It Existed</h6>
                                        <ul className="list-unstyled">
                                            <li className="mb-2"><strong>🎯 Purpose:</strong> Fine-grained runtime permission checks</li>
                                            <li className="mb-2"><strong>📋 Use Cases:</strong>
                                                <ul>
                                                    <li>Java Applets (run untrusted web code)</li>
                                                    <li>Application servers (isolate tenant code)</li>
                                                    <li>Plugin systems (restrict third-party code)</li>
                                                </ul>
                                            </li>
                                            <li className="mb-2"><strong>🔒 Permissions Controlled:</strong>
                                                <ul>
                                                    <li>File system access (read/write/delete)</li>
                                                    <li>Network connections (connect/accept/listen)</li>
                                                    <li>System properties (read/write)</li>
                                                    <li>Thread creation and manipulation</li>
                                                    <li>Reflection and ClassLoader operations</li>
                                                </ul>
                                            </li>
                                            <li className="mb-2"><strong>📝 Policy Files:</strong> Define what code can do what</li>
                                        </ul>
                                    </div>

                                    <div className="col-md-6">
                                        <h6>Why It's Being Removed</h6>
                                        <ul className="list-unstyled">
                                            <li className="mb-2"><strong>❌ Rarely Used:</strong> Applets are dead, modern apps don't use it</li>
                                            <li className="mb-2"><strong>⚡ Performance Overhead:</strong> Every security-sensitive operation has a check</li>
                                            <li className="mb-2"><strong>�� Maintenance Burden:</strong> Complex code that few people understand</li>
                                            <li className="mb-2"><strong>�� Incomplete Protection:</strong> Doesn't protect against all threats</li>
                                            <li className="mb-2"><strong>🆕 Better Alternatives Exist:</strong>
                                                <ul>
                                                    <li>OS-level security (containers, VMs)</li>
                                                    <li>Process isolation</li>
                                                    <li>Module system (Java 9+) for encapsulation</li>
                                                    <li>Cloud security primitives</li>
                                                </ul>
                                            </li>
                                            <li className="mb-2"><strong>📦 Modern Approach:</strong> Run untrusted code in separate containers/VMs, not the same JVM</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="mt-3">
                                    <h6>Migration Path</h6>
                                    <div className="table-responsive">
                                        <table className="table table-sm">
                                            <thead>
                                                <tr>
                                                    <th>Old Approach (SecurityManager)</th>
                                                    <th>Modern Alternative</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Policy files for file access</td>
                                                    <td>OS file permissions, container volume mounts</td>
                                                </tr>
                                                <tr>
                                                    <td>Network permission checks</td>
                                                    <td>Firewalls, network policies, service meshes</td>
                                                </tr>
                                                <tr>
                                                    <td>Code signing and verification</td>
                                                    <td>Supply chain security tools, image signing</td>
                                                </tr>
                                                <tr>
                                                    <td>Running untrusted plugins in-process</td>
                                                    <td>Separate processes, containers, WebAssembly</td>
                                                </tr>
                                                <tr>
                                                    <td>SecurityManager.checkPermission()</td>
                                                    <td>Explicit authorization frameworks, RBAC/ABAC</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-12">
                                <div className="alert alert-info" role="alert">
                                    <h6 className="alert-heading">Key Takeaway</h6>
                                    <p className="mb-0">
                                        While SecurityManager and the sandbox model are being phased out, understanding them provides 
                                        valuable context for Java's security evolution. Modern Java security relies on:
                                    </p>
                                    <ul className="mt-2 mb-0">
                                        <li><strong>Strong cryptography</strong> (JCA/JCE)</li>
                                        <li><strong>Secure coding practices</strong> (input validation, output encoding)</li>
                                        <li><strong>External security layers</strong> (OS, containers, cloud primitives)</li>
                                        <li><strong>Module system</strong> for strong encapsulation (Java 9+)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {pageState === PageStates.Cryptography && (
                <div className="card mb-4 shadow-sm">
                    <div className="card-body">
                        <h2 className="card-title mb-3">Cryptography in Java</h2>
                        <p className="lead">Understanding Java's cryptographic APIs and best practices for secure encryption, hashing, and key management.</p>

                        <div className="row mt-4">
                            <div className="col-12">
                                <h5>JCA / JCE APIs</h5>
                                <div className="alert alert-info" role="alert">
                                    <p className="mb-2"><strong>JCA (Java Cryptography Architecture):</strong> Core framework providing cryptographic services</p>
                                    <p className="mb-0"><strong>JCE (Java Cryptography Extension):</strong> Extension providing encryption, key exchange, and MAC implementations</p>
                                </div>

                                <ul className="list-group list-group-flush mb-4">
                                    <li className="list-group-item">
                                        <strong>Provider-based architecture:</strong> Pluggable cryptographic implementations
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Algorithm independence:</strong> Switch implementations without changing code
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Core classes:</strong> Cipher, MessageDigest, Signature, KeyGenerator, KeyPairGenerator, SecureRandom
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-md-6">
                                <h5>Symmetric Cryptography</h5>
                                <p><strong>Same key for encryption and decryption</strong></p>

                                <h6 className="mt-3">AES (Advanced Encryption Standard)</h6>
                                <ul className="list-group list-group-flush mb-3">
                                    <li className="list-group-item">
                                        <strong>Key sizes:</strong> 128, 192, or 256 bits
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Recommended:</strong> AES-256 for maximum security
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Performance:</strong> Fast, hardware-accelerated on modern CPUs
                                    </li>
                                </ul>

                                <h6 className="mt-3">Modes of Operation</h6>
                                <div className="table-responsive">
                                    <table className="table table-sm">
                                        <thead>
                                            <tr>
                                                <th>Mode</th>
                                                <th>Description</th>
                                                <th>Use Case</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><strong>GCM</strong></td>
                                                <td>Galois/Counter Mode - Authenticated encryption</td>
                                                <td>✅ Recommended - Provides confidentiality + integrity</td>
                                            </tr>
                                            <tr>
                                                <td><strong>CBC</strong></td>
                                                <td>Cipher Block Chaining</td>
                                                <td>⚠️ Legacy - Needs separate MAC for integrity</td>
                                            </tr>
                                            <tr>
                                                <td><strong>ECB</strong></td>
                                                <td>Electronic Codebook</td>
                                                <td>❌ Never use - Deterministic, reveals patterns</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="alert alert-success mt-3" role="alert">
                                    <strong>Best Practice:</strong> Use <code>AES/GCM/NoPadding</code> for authenticated encryption
                                </div>
                            </div>

                            <div className="col-md-6">
                                <h5>Asymmetric Cryptography</h5>
                                <p><strong>Public key for encryption, private key for decryption</strong></p>

                                <h6 className="mt-3">RSA (Rivest-Shamir-Adleman)</h6>
                                <ul className="list-group list-group-flush mb-3">
                                    <li className="list-group-item">
                                        <strong>Key sizes:</strong>
                                        <ul className="mt-2">
                                            <li>2048 bits - Minimum recommended</li>
                                            <li>3072 bits - Better security</li>
                                            <li>4096 bits - Maximum security (slower)</li>
                                        </ul>
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Use cases:</strong> Digital signatures, key exchange, certificate signing
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Performance:</strong> Slower than symmetric crypto
                                    </li>
                                </ul>

                                <h6 className="mt-3">EC (Elliptic Curve)</h6>
                                <ul className="list-group list-group-flush mb-3">
                                    <li className="list-group-item">
                                        <strong>Key sizes:</strong>
                                        <ul className="mt-2">
                                            <li>256 bits (P-256, secp256r1) - Standard</li>
                                            <li>384 bits (P-384) - Higher security</li>
                                            <li>521 bits (P-521) - Maximum security</li>
                                        </ul>
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Advantages:</strong> Smaller keys, better performance than RSA
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Use cases:</strong> TLS, digital signatures (ECDSA), key agreement (ECDH)
                                    </li>
                                </ul>

                                <div className="alert alert-success mt-3" role="alert">
                                    <strong>Modern Recommendation:</strong> Use EC over RSA for new applications (better performance + security)
                                </div>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-md-6">
                                <h5>Hashing & MAC</h5>

                                <h6 className="mt-3">Cryptographic Hashing</h6>
                                <ul className="list-group list-group-flush mb-3">
                                    <li className="list-group-item">
                                        <strong>SHA-256:</strong> Standard hash function (256-bit output)
                                    </li>
                                    <li className="list-group-item">
                                        <strong>SHA-384 / SHA-512:</strong> Longer output for higher security
                                    </li>
                                    <li className="list-group-item">
                                        <strong>SHA-3:</strong> Latest standard, different construction
                                    </li>
                                    <li className="list-group-item">
                                        <strong>❌ Avoid:</strong> MD5, SHA-1 (cryptographically broken)
                                    </li>
                                </ul>

                                <h6 className="mt-3">Properties</h6>
                                <ul className="list-unstyled">
                                    <li className="mb-2">✅ <strong>Deterministic:</strong> Same input → Same output</li>
                                    <li className="mb-2">✅ <strong>One-way:</strong> Can't reverse the hash</li>
                                    <li className="mb-2">✅ <strong>Collision-resistant:</strong> Hard to find two inputs with same hash</li>
                                    <li className="mb-2">✅ <strong>Avalanche effect:</strong> Small input change → Completely different hash</li>
                                </ul>

                                <h6 className="mt-3">Use Cases</h6>
                                <ul className="list-unstyled">
                                    <li className="mb-2">• Data integrity verification</li>
                                    <li className="mb-2">• Digital signatures</li>
                                    <li className="mb-2">• Checksum generation</li>
                                    <li className="mb-2">• Unique identifiers</li>
                                </ul>
                            </div>

                            <div className="col-md-6">
                                <h5 className="invisible">Hashing</h5>

                                <h6 className="mt-3">HMAC (Hash-based Message Authentication Code)</h6>
                                <ul className="list-group list-group-flush mb-3">
                                    <li className="list-group-item">
                                        <strong>Purpose:</strong> Verify data integrity AND authenticity
                                    </li>
                                    <li className="list-group-item">
                                        <strong>How it works:</strong> Hash + secret key
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Common algorithms:</strong>
                                        <ul className="mt-2">
                                            <li>HmacSHA256 - Standard choice</li>
                                            <li>HmacSHA384 / HmacSHA512 - Higher security</li>
                                        </ul>
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Use cases:</strong> API authentication, JWT tokens, message verification
                                    </li>
                                </ul>

                                <div className="alert alert-warning" role="alert">
                                    <strong>Important:</strong> Hashing ≠ Encryption
                                    <ul className="mt-2 mb-0">
                                        <li>Hash: One-way, can't recover original data</li>
                                        <li>Encryption: Two-way, can decrypt with key</li>
                                        <li>Don't use hash for password storage alone - use password hashing algorithms (BCrypt, PBKDF2, Argon2)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-12">
                                <h5>Key Management</h5>
                                <p className="lead">Securely storing and managing cryptographic keys and certificates</p>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-md-6">
                                <h6>KeyStore</h6>
                                <ul className="list-group list-group-flush mb-3">
                                    <li className="list-group-item">
                                        <strong>Purpose:</strong> Stores private keys and certificates
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Protection:</strong> Password-protected
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Contents:</strong>
                                        <ul className="mt-2">
                                            <li>Private keys (for signing, decryption)</li>
                                            <li>Certificate chains (proves key ownership)</li>
                                            <li>Secret keys (symmetric encryption keys)</li>
                                        </ul>
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Use cases:</strong> Server SSL/TLS certificates, code signing, client authentication
                                    </li>
                                </ul>
                            </div>

                            <div className="col-md-6">
                                <h6>TrustStore</h6>
                                <ul className="list-group list-group-flush mb-3">
                                    <li className="list-group-item">
                                        <strong>Purpose:</strong> Stores trusted CA certificates
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Contents:</strong> Public certificates of Certificate Authorities
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Function:</strong> Validates certificates from external parties
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Use cases:</strong> Validating server certificates, verifying signed documents
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-12">
                                <h6>KeyStore Formats</h6>
                                <div className="table-responsive">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>Format</th>
                                                <th>Type</th>
                                                <th>Description</th>
                                                <th>Recommendation</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><strong>PKCS12</strong></td>
                                                <td><code>.p12, .pfx</code></td>
                                                <td>Industry-standard format, cross-platform</td>
                                                <td>✅ Recommended - Default since Java 9</td>
                                            </tr>
                                            <tr>
                                                <td><strong>JKS</strong></td>
                                                <td><code>.jks</code></td>
                                                <td>Java KeyStore - proprietary format</td>
                                                <td>⚠️ Legacy - Only for backward compatibility</td>
                                            </tr>
                                            <tr>
                                                <td><strong>JCEKS</strong></td>
                                                <td><code>.jceks</code></td>
                                                <td>JKS with stronger encryption</td>
                                                <td>⚠️ Legacy - Use PKCS12 instead</td>
                                            </tr>
                                            <tr>
                                                <td><strong>PKCS11</strong></td>
                                                <td>Hardware</td>
                                                <td>Interface to hardware security modules (HSM)</td>
                                                <td>🔒 Enterprise - For maximum security</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-md-6">
                                <h6>Key Management Best Practices</h6>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <strong>🔑 Key Generation:</strong> Use SecureRandom for random key generation
                                    </li>
                                    <li className="list-group-item">
                                        <strong>🔒 Key Storage:</strong> Never hardcode keys in source code
                                    </li>
                                    <li className="list-group-item">
                                        <strong>🔄 Key Rotation:</strong> Rotate keys periodically (90-365 days)
                                    </li>
                                    <li className="list-group-item">
                                        <strong>🗑️ Key Destruction:</strong> Securely wipe keys from memory after use
                                    </li>
                                    <li className="list-group-item">
                                        <strong>🏢 Separation:</strong> Different keys for different environments (dev/staging/prod)
                                    </li>
                                    <li className="list-group-item">
                                        <strong>📦 HSM/KMS:</strong> Use hardware security modules or cloud KMS for production
                                    </li>
                                </ul>
                            </div>

                            <div className="col-md-6">
                                <h6>Common Commands</h6>
                                <div className="bg-light p-3 rounded">
                                    <p className="mb-2"><strong>Generate KeyStore:</strong></p>
                                    <code className="d-block mb-3">keytool -genkeypair -alias mykey -keyalg RSA -keysize 2048 -storetype PKCS12 -keystore keystore.p12</code>

                                    <p className="mb-2 mt-3"><strong>List KeyStore contents:</strong></p>
                                    <code className="d-block mb-3">keytool -list -keystore keystore.p12</code>

                                    <p className="mb-2 mt-3"><strong>Export certificate:</strong></p>
                                    <code className="d-block mb-3">keytool -exportcert -alias mykey -file cert.cer -keystore keystore.p12</code>

                                    <p className="mb-2 mt-3"><strong>Import certificate to TrustStore:</strong></p>
                                    <code className="d-block">keytool -importcert -alias trustedca -file ca-cert.cer -keystore truststore.p12</code>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-12">
                                <div className="alert alert-success" role="alert">
                                    <h6 className="alert-heading">Quick Reference</h6>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <p className="mb-2"><strong>For Data at Rest:</strong></p>
                                            <ul className="mb-0">
                                                <li>Use AES-256-GCM</li>
                                                <li>Store keys in KeyStore/KMS</li>
                                                <li>Rotate keys regularly</li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6">
                                            <p className="mb-2"><strong>For Data in Transit:</strong></p>
                                            <ul className="mb-0">
                                                <li>Use TLS 1.3 with EC certificates</li>
                                                <li>Validate certificates against TrustStore</li>
                                                <li>Implement certificate pinning for critical apps</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {pageState === PageStates.Authentication && (
                <div className="card mb-4 shadow-sm">
                    <div className="card-body">
                        <h2 className="card-title mb-3">Authentication & Authorization</h2>
                        <p className="lead">Understanding identity verification and access control in Java applications.</p>

                        <div className="row mt-4">
                            <div className="col-12">
                                <h5>JAAS (Java Authentication and Authorization Service)</h5>
                                <p>Pluggable authentication and authorization framework for Java applications.</p>

                                <div className="row mt-3">
                                    <div className="col-md-4">
                                        <h6>Principals</h6>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">
                                                <strong>Definition:</strong> Represents an identity (user, group, role)
                                            </li>
                                            <li className="list-group-item">
                                                <strong>Examples:</strong> UserPrincipal, GroupPrincipal, RolePrincipal
                                            </li>
                                            <li className="list-group-item">
                                                <strong>Usage:</strong> Retrieved from authenticated Subject
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="col-md-4">
                                        <h6>Subjects</h6>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">
                                                <strong>Definition:</strong> Represents an authenticated entity
                                            </li>
                                            <li className="list-group-item">
                                                <strong>Contains:</strong> Principals, public credentials, private credentials
                                            </li>
                                            <li className="list-group-item">
                                                <strong>Usage:</strong> Central point for all authentication info
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="col-md-4">
                                        <h6>Credentials</h6>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">
                                                <strong>Public:</strong> Certificates, Kerberos tickets
                                            </li>
                                            <li className="list-group-item">
                                                <strong>Private:</strong> Passwords, private keys
                                            </li>
                                            <li className="list-group-item">
                                                <strong>Security:</strong> Private credentials are sensitive
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-md-6">
                                <h5>Role-Based Access Control (RBAC)</h5>
                                <ul className="list-group list-group-flush mb-3">
                                    <li className="list-group-item">
                                        <strong>Concept:</strong> Permissions assigned to roles, roles assigned to users
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Example Roles:</strong> ADMIN, USER, MODERATOR, GUEST
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Advantages:</strong>
                                        <ul className="mt-2">
                                            <li>Simple to understand and implement</li>
                                            <li>Easy to manage at scale</li>
                                            <li>Industry standard approach</li>
                                        </ul>
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Use Cases:</strong> Most enterprise applications, REST APIs, web apps
                                    </li>
                                </ul>

                                <div className="alert alert-info" role="alert">
                                    <strong>Example:</strong><br/>
                                    User "Alice" has role "ADMIN"<br/>
                                    Role "ADMIN" has permissions: [READ, WRITE, DELETE]<br/>
                                    → Alice can READ, WRITE, DELETE
                                </div>
                            </div>

                            <div className="col-md-6">
                                <h5>Claim-Based Access Control</h5>
                                <ul className="list-group list-group-flush mb-3">
                                    <li className="list-group-item">
                                        <strong>Concept:</strong> Permissions based on attributes (claims) about the user
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Example Claims:</strong> department=engineering, clearance_level=5, region=US
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Advantages:</strong>
                                        <ul className="mt-2">
                                            <li>Fine-grained access control</li>
                                            <li>Flexible policy decisions</li>
                                            <li>Better for complex scenarios</li>
                                        </ul>
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Use Cases:</strong> Federation, SSO, microservices, ABAC systems
                                    </li>
                                </ul>

                                <div className="alert alert-info" role="alert">
                                    <strong>Example:</strong><br/>
                                    User has claims: {`{department: "sales", region: "EU"}`}<br/>
                                    Policy: Allow if department="sales" AND region="EU"<br/>
                                    → User is authorized
                                </div>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-12">
                                <h5>OAuth 2.0 / OpenID Connect</h5>
                                <div className="alert alert-warning" role="alert">
                                    <strong>Key Distinction:</strong><br/>
                                    • <strong>OAuth 2.0:</strong> Authorization protocol (what you can access)<br/>
                                    • <strong>OpenID Connect:</strong> Authentication layer on top of OAuth 2.0 (who you are)
                                </div>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-md-6">
                                <h6>OAuth 2.0 Concepts</h6>
                                <ul className="list-group list-group-flush mb-3">
                                    <li className="list-group-item">
                                        <strong>Resource Owner:</strong> The user who owns the data
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Client:</strong> Application requesting access (your app)
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Authorization Server:</strong> Issues access tokens (e.g., Auth0, Keycloak)
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Resource Server:</strong> API server protecting resources
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Access Token:</strong> Credential to access protected resources
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Refresh Token:</strong> Long-lived token to get new access tokens
                                    </li>
                                </ul>
                            </div>

                            <div className="col-md-6">
                                <h6>OAuth 2.0 Grant Types</h6>
                                <div className="table-responsive">
                                    <table className="table table-sm">
                                        <thead>
                                            <tr>
                                                <th>Grant Type</th>
                                                <th>Use Case</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><strong>Authorization Code</strong></td>
                                                <td>Web apps with backend</td>
                                                <td>✅ Recommended</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Authorization Code + PKCE</strong></td>
                                                <td>Mobile apps, SPAs</td>
                                                <td>✅ Best Practice</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Client Credentials</strong></td>
                                                <td>Machine-to-machine</td>
                                                <td>✅ Server to server</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Implicit</strong></td>
                                                <td>Legacy SPAs</td>
                                                <td>❌ Deprecated</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Password</strong></td>
                                                <td>Legacy apps</td>
                                                <td>❌ Not recommended</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-md-6">
                                <h6>OpenID Connect (OIDC)</h6>
                                <ul className="list-group list-group-flush mb-3">
                                    <li className="list-group-item">
                                        <strong>ID Token:</strong> JWT containing user identity information
                                    </li>
                                    <li className="list-group-item">
                                        <strong>UserInfo Endpoint:</strong> Get additional user profile data
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Standard Claims:</strong> sub (subject), name, email, picture, etc.
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Scopes:</strong> openid (required), profile, email, address, phone
                                    </li>
                                </ul>
                            </div>

                            <div className="col-md-6">
                                <h6>Authentication Flow (OIDC)</h6>
                                <ol className="list-group list-group-numbered">
                                    <li className="list-group-item">User clicks "Login"</li>
                                    <li className="list-group-item">Redirect to authorization server</li>
                                    <li className="list-group-item">User authenticates (username/password, MFA)</li>
                                    <li className="list-group-item">User consents to requested scopes</li>
                                    <li className="list-group-item">Redirect back with authorization code</li>
                                    <li className="list-group-item">Exchange code for tokens (ID token + access token)</li>
                                    <li className="list-group-item">Validate ID token signature and claims</li>
                                    <li className="list-group-item">Extract user identity from ID token</li>
                                </ol>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-12">
                                <h6>Common Java Libraries/Frameworks</h6>
                                <div className="table-responsive">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>Library/Framework</th>
                                                <th>Purpose</th>
                                                <th>Use Case</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><strong>Spring Security</strong></td>
                                                <td>Complete security framework</td>
                                                <td>Authentication, authorization, OAuth2, OIDC</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Spring Security OAuth2</strong></td>
                                                <td>OAuth2/OIDC client & resource server</td>
                                                <td>Integrate with OAuth2 providers</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Keycloak</strong></td>
                                                <td>Identity & access management</td>
                                                <td>Self-hosted auth server, SSO</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Auth0 SDK</strong></td>
                                                <td>Cloud auth service integration</td>
                                                <td>Managed authentication</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Pac4j</strong></td>
                                                <td>Multi-protocol auth library</td>
                                                <td>SAML, OAuth, OIDC, CAS</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Apache Shiro</strong></td>
                                                <td>Lightweight security framework</td>
                                                <td>Simple authentication & authorization</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-12">
                                <div className="alert alert-success" role="alert">
                                    <h6 className="alert-heading">Best Practices</h6>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <p className="mb-2"><strong>✅ DO:</strong></p>
                                            <ul>
                                                <li>Use established frameworks (Spring Security)</li>
                                                <li>Implement MFA for sensitive operations</li>
                                                <li>Use Authorization Code + PKCE for SPAs</li>
                                                <li>Validate tokens on every request</li>
                                                <li>Use short-lived access tokens (15 min)</li>
                                                <li>Store tokens securely (HttpOnly cookies)</li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6">
                                            <p className="mb-2"><strong>❌ DON'T:</strong></p>
                                            <ul>
                                                <li>Roll your own authentication</li>
                                                <li>Store passwords in plain text</li>
                                                <li>Use Implicit grant flow</li>
                                                <li>Store tokens in localStorage (XSS risk)</li>
                                                <li>Share secrets in client-side code</li>
                                                <li>Skip token validation</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {pageState === PageStates.TLS && (
                <div className="card mb-4 shadow-sm">
                    <div className="card-body">
                        <h2 className="card-title mb-3">TLS & Network Security</h2>
                        <p className="lead">Practical guide to securing network communications in Java applications.</p>

                        <div className="row mt-4">
                            <div className="col-12">
                                <h5>How TLS Works</h5>
                                <p><strong>TLS (Transport Layer Security)</strong> - Cryptographic protocol for secure communication over networks.</p>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-md-6">
                                <h6>TLS Handshake Process</h6>
                                <ol className="list-group list-group-numbered">
                                    <li className="list-group-item">
                                        <strong>Client Hello:</strong> Client sends supported TLS versions, cipher suites
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Server Hello:</strong> Server chooses TLS version, cipher suite
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Server Certificate:</strong> Server sends its certificate
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Certificate Validation:</strong> Client verifies server certificate
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Key Exchange:</strong> Client and server establish shared secret
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Finished:</strong> Both sides confirm handshake completion
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Encrypted Communication:</strong> Application data encrypted with session keys
                                    </li>
                                </ol>
                            </div>

                            <div className="col-md-6">
                                <h6>TLS Versions</h6>
                                <div className="table-responsive">
                                    <table className="table table-sm">
                                        <thead>
                                            <tr>
                                                <th>Version</th>
                                                <th>Year</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><strong>TLS 1.3</strong></td>
                                                <td>2018</td>
                                                <td>✅ Current - Use this</td>
                                            </tr>
                                            <tr>
                                                <td><strong>TLS 1.2</strong></td>
                                                <td>2008</td>
                                                <td>✅ Still acceptable</td>
                                            </tr>
                                            <tr>
                                                <td><strong>TLS 1.1</strong></td>
                                                <td>2006</td>
                                                <td>❌ Deprecated 2020</td>
                                            </tr>
                                            <tr>
                                                <td><strong>TLS 1.0</strong></td>
                                                <td>1999</td>
                                                <td>❌ Deprecated 2020</td>
                                            </tr>
                                            <tr>
                                                <td><strong>SSL 3.0</strong></td>
                                                <td>1996</td>
                                                <td>❌ Insecure - Never use</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="alert alert-success mt-3" role="alert">
                                    <strong>Recommendation:</strong> Use TLS 1.3, fallback to TLS 1.2 if needed for compatibility
                                </div>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-12">
                                <h5>Certificates & Trust Chains</h5>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-md-6">
                                <h6>Certificate Components</h6>
                                <ul className="list-group list-group-flush mb-3">
                                    <li className="list-group-item">
                                        <strong>Subject:</strong> Who the certificate belongs to (Common Name, Organization)
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Issuer:</strong> Who issued the certificate (Certificate Authority)
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Public Key:</strong> Server's public key for encryption
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Validity Period:</strong> Not before / Not after dates
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Signature:</strong> CA's digital signature on the certificate
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Serial Number:</strong> Unique identifier
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Extensions:</strong> SAN (Subject Alternative Names), Key Usage, etc.
                                    </li>
                                </ul>
                            </div>

                            <div className="col-md-6">
                                <h6>Trust Chain Validation</h6>
                                <ol className="list-group list-group-numbered">
                                    <li className="list-group-item">
                                        <strong>Check Validity:</strong> Certificate not expired
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Verify Signature:</strong> CA signature is valid
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Chain of Trust:</strong>
                                        <ul className="mt-2">
                                            <li>Server Certificate → signed by</li>
                                            <li>Intermediate CA → signed by</li>
                                            <li>Root CA (in TrustStore)</li>
                                        </ul>
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Hostname Verification:</strong> Certificate matches server hostname
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Revocation Check:</strong> Check CRL or OCSP
                                    </li>
                                </ol>

                                <div className="alert alert-warning mt-3" role="alert">
                                    <strong>Common Issue:</strong> Missing intermediate certificates causes validation failures
                                </div>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-md-6">
                                <h5>mTLS (Mutual TLS)</h5>
                                <p><strong>Both client and server authenticate each other with certificates</strong></p>

                                <h6 className="mt-3">How mTLS Works</h6>
                                <ol className="list-group list-group-numbered mb-3">
                                    <li className="list-group-item">Server sends its certificate</li>
                                    <li className="list-group-item">Client validates server certificate</li>
                                    <li className="list-group-item">Server requests client certificate</li>
                                    <li className="list-group-item">Client sends its certificate</li>
                                    <li className="list-group-item">Server validates client certificate</li>
                                    <li className="list-group-item">Both sides authenticated</li>
                                </ol>

                                <h6>Use Cases</h6>
                                <ul className="list-unstyled">
                                    <li className="mb-2">✅ Microservice-to-microservice communication</li>
                                    <li className="mb-2">✅ API authentication (machine-to-machine)</li>
                                    <li className="mb-2">✅ Zero-trust networks</li>
                                    <li className="mb-2">✅ High-security environments</li>
                                </ul>
                            </div>

                            <div className="col-md-6">
                                <h5>Hostname Verification</h5>
                                <p><strong>Ensures certificate matches the server you're connecting to</strong></p>

                                <h6 className="mt-3">Verification Process</h6>
                                <ul className="list-group list-group-flush mb-3">
                                    <li className="list-group-item">
                                        <strong>Check CN:</strong> Common Name in subject
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Check SAN:</strong> Subject Alternative Names (preferred)
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Wildcard Support:</strong> *.example.com matches api.example.com
                                    </li>
                                    <li className="list-group-item">
                                        <strong>IP Addresses:</strong> Can be in SAN, not in CN
                                    </li>
                                </ul>

                                <div className="alert alert-danger" role="alert">
                                    <strong>⚠️ Critical Security Issue:</strong><br/>
                                    <strong>NEVER</strong> disable hostname verification in production!<br/>
                                    <code>SSLContext.setHostnameVerifier(NoopHostnameVerifier.INSTANCE)</code> ← ❌ DON'T DO THIS
                                </div>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-12">
                                <h5>Common TLS Misconfigurations in Java</h5>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-md-6">
                                <h6>❌ Mistake #1: Trusting All Certificates</h6>
                                <div className="bg-light p-3 rounded mb-3">
                                    <code className="text-danger d-block">{`// NEVER DO THIS IN PRODUCTION!`}</code>
                                    <code className="d-block">TrustManager[] trustAllCerts = new TrustManager[] {`{`}</code>
                                    <code className="d-block">    new X509TrustManager() {`{`}</code>
                                    <code className="d-block">        public void checkClientTrusted(X509Certificate[] certs, String authType) {`{}`}</code>
                                    <code className="d-block">        public void checkServerTrusted(X509Certificate[] certs, String authType) {`{}`}</code>
                                    <code className="d-block">        public X509Certificate[] getAcceptedIssuers() {`{ return null; }`}</code>
                                    <code className="d-block">    {`}`}</code>
                                    <code className="d-block">{`}`};</code>
                                </div>
                                <p><strong>Why it's bad:</strong> Allows man-in-the-middle attacks</p>

                                <h6 className="mt-4">❌ Mistake #2: Disabling Hostname Verification</h6>
                                <div className="bg-light p-3 rounded mb-3">
                                    <code className="text-danger d-block">{`// INSECURE!`}</code>
                                    <code className="d-block">HttpsURLConnection.setDefaultHostnameVerifier(</code>
                                    <code className="d-block">    (hostname, session) -&gt; true);</code>
                                </div>

                                <h6 className="mt-4">❌ Mistake #3: Using Weak Cipher Suites</h6>
                                <div className="bg-light p-3 rounded mb-3">
                                    <code className="text-danger d-block">{`// Weak ciphers`}</code>
                                    <code className="d-block">sslContext.setEnabledCipherSuites(</code>
                                    <code className="d-block">    new String[]{`{"TLS_RSA_WITH_DES_CBC_SHA"}`});</code>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <h6>✅ Correct Approach: Proper TLS Configuration</h6>
                                <div className="bg-light p-3 rounded mb-3">
                                    <code className="d-block">{`// Load truststore`}</code>
                                    <code className="d-block">KeyStore trustStore = KeyStore.getInstance("PKCS12");</code>
                                    <code className="d-block">trustStore.load(new FileInputStream("truststore.p12"),</code>
                                    <code className="d-block">    "password".toCharArray());</code>
                                    <code className="d-block"></code>
                                    <code className="d-block">{`// Initialize TrustManagerFactory`}</code>
                                    <code className="d-block">TrustManagerFactory tmf =</code>
                                    <code className="d-block">    TrustManagerFactory.getInstance("PKIX");</code>
                                    <code className="d-block">tmf.init(trustStore);</code>
                                    <code className="d-block"></code>
                                    <code className="d-block">{`// Create SSLContext with TLS 1.3`}</code>
                                    <code className="d-block">SSLContext sslContext = SSLContext.getInstance("TLSv1.3");</code>
                                    <code className="d-block">sslContext.init(null, tmf.getTrustManagers(), new SecureRandom());</code>
                                    <code className="d-block"></code>
                                    <code className="d-block">{`// Keep hostname verification enabled (default)`}</code>
                                </div>

                                <h6 className="mt-4">Recommended Cipher Suites (TLS 1.3)</h6>
                                <ul className="list-unstyled">
                                    <li className="mb-2">✅ TLS_AES_256_GCM_SHA384</li>
                                    <li className="mb-2">✅ TLS_AES_128_GCM_SHA256</li>
                                    <li className="mb-2">✅ TLS_CHACHA20_POLY1305_SHA256</li>
                                </ul>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-md-6">
                                <h6>❌ Mistake #4: Not Handling Certificate Expiration</h6>
                                <ul className="list-unstyled">
                                    <li className="mb-2">• Monitor certificate expiration dates</li>
                                    <li className="mb-2">• Automate certificate renewal (Let's Encrypt, cert-manager)</li>
                                    <li className="mb-2">• Set up alerts 30 days before expiration</li>
                                </ul>
                            </div>

                            <div className="col-md-6">
                                <h6>❌ Mistake #5: Using Self-Signed Certs in Production</h6>
                                <ul className="list-unstyled">
                                    <li className="mb-2">✅ Dev/Test: OK for self-signed</li>
                                    <li className="mb-2">❌ Production: Use CA-signed certificates</li>
                                    <li className="mb-2">💡 Free options: Let's Encrypt, AWS Certificate Manager</li>
                                </ul>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-12">
                                <div className="alert alert-success" role="alert">
                                    <h6 className="alert-heading">TLS Configuration Checklist</h6>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <p className="mb-2"><strong>✅ Must Do:</strong></p>
                                            <ul>
                                                <li>Use TLS 1.3 (or minimum TLS 1.2)</li>
                                                <li>Use strong cipher suites</li>
                                                <li>Validate certificates properly</li>
                                                <li>Enable hostname verification</li>
                                                <li>Use proper TrustStore</li>
                                                <li>Monitor certificate expiration</li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6">
                                            <p className="mb-2"><strong>🔒 For mTLS:</strong></p>
                                            <ul>
                                                <li>Use separate KeyStores per service</li>
                                                <li>Implement certificate rotation</li>
                                                <li>Use short-lived certificates</li>
                                                <li>Consider service mesh (Istio, Linkerd)</li>
                                                <li>Monitor certificate chain validity</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-12">
                                <h6>Java System Properties for TLS</h6>
                                <div className="table-responsive">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>Property</th>
                                                <th>Purpose</th>
                                                <th>Example</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><code>javax.net.ssl.trustStore</code></td>
                                                <td>Path to truststore file</td>
                                                <td>/path/to/truststore.p12</td>
                                            </tr>
                                            <tr>
                                                <td><code>javax.net.ssl.trustStorePassword</code></td>
                                                <td>Truststore password</td>
                                                <td>changeit</td>
                                            </tr>
                                            <tr>
                                                <td><code>javax.net.ssl.keyStore</code></td>
                                                <td>Path to keystore file</td>
                                                <td>/path/to/keystore.p12</td>
                                            </tr>
                                            <tr>
                                                <td><code>javax.net.ssl.keyStorePassword</code></td>
                                                <td>Keystore password</td>
                                                <td>secret</td>
                                            </tr>
                                            <tr>
                                                <td><code>https.protocols</code></td>
                                                <td>Enabled TLS versions</td>
                                                <td>TLSv1.3,TLSv1.2</td>
                                            </tr>
                                            <tr>
                                                <td><code>jdk.tls.client.protocols</code></td>
                                                <td>Client TLS protocols</td>
                                                <td>TLSv1.3</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {pageState === PageStates.SecureCoding && (
                <div>
                    <h2 className="mb-4">Secure Coding Practices</h2>

                    <div className="card mb-4">
                        <div className="card-header">
                            <h4>Input Validation & Encoding</h4>
                        </div>
                        <div className="card-body">
                            <div className="alert alert-info">
                                <strong>Key Principle:</strong> Never trust user input - validate, sanitize, and encode all data
                            </div>

                            <h5 className="mt-3">Validation Strategies</h5>
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Type</th>
                                        <th>Technique</th>
                                        <th>Example</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Whitelist Validation</td>
                                        <td>Accept only known-good patterns</td>
                                        <td><code>Pattern.compile("^[a-zA-Z0-9_]+$")</code></td>
                                    </tr>
                                    <tr>
                                        <td>Type Conversion</td>
                                        <td>Use strict parsing with error handling</td>
                                        <td><code>Integer.parseInt()</code> with try-catch</td>
                                    </tr>
                                    <tr>
                                        <td>Length Limits</td>
                                        <td>Enforce maximum input size</td>
                                        <td><code>if (input.length() &gt; MAX_LENGTH)</code></td>
                                    </tr>
                                    <tr>
                                        <td>Contextual Encoding</td>
                                        <td>Encode based on output context</td>
                                        <td>HTML, SQL, JavaScript, URL encoding</td>
                                    </tr>
                                </tbody>
                            </table>

                            <h5 className="mt-4">Common Vulnerabilities</h5>
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <strong>SQL Injection:</strong> Use PreparedStatement, never string concatenation
                                </li>
                                <li className="list-group-item">
                                    <strong>XSS (Cross-Site Scripting):</strong> Escape HTML output with libraries like OWASP Java Encoder
                                </li>
                                <li className="list-group-item">
                                    <strong>Path Traversal:</strong> Validate file paths, use canonical paths
                                </li>
                                <li className="list-group-item">
                                    <strong>Command Injection:</strong> Avoid Runtime.exec() with user input
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="card mb-4">
                        <div className="card-header">
                            <h4>Deserialization Vulnerabilities</h4>
                        </div>
                        <div className="card-body">
                            <div className="alert alert-danger">
                                <strong>Critical Risk:</strong> Java deserialization can lead to remote code execution
                            </div>

                            <h5>Mitigation Strategies</h5>
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Approach</th>
                                        <th>Description</th>
                                        <th>Implementation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Avoid ObjectInputStream</td>
                                        <td>Don't deserialize untrusted data</td>
                                        <td>Use JSON, XML, or Protocol Buffers instead</td>
                                    </tr>
                                    <tr>
                                        <td>Object Filter</td>
                                        <td>Whitelist allowed classes (Java 9+)</td>
                                        <td><code>ObjectInputFilter.Config.setSerialFilter()</code></td>
                                    </tr>
                                    <tr>
                                        <td>Custom Deserialization</td>
                                        <td>Override readObject() method</td>
                                        <td>Validate object state during deserialization</td>
                                    </tr>
                                    <tr>
                                        <td>Security Manager</td>
                                        <td>Restrict permissions (legacy approach)</td>
                                        <td>Limited effectiveness, deprecated in JDK 17+</td>
                                    </tr>
                                </tbody>
                            </table>

                            <h5 className="mt-4">Popular Deserialization Attacks</h5>
                            <ul className="list-group">
                                <li className="list-group-item">Apache Commons Collections gadget chains</li>
                                <li className="list-group-item">Spring Framework vulnerabilities</li>
                                <li className="list-group-item">Jackson JSON processor unsafe typing</li>
                                <li className="list-group-item">JNDI injection via LDAP/RMI</li>
                            </ul>
                        </div>
                    </div>

                    <div className="card mb-4">
                        <div className="card-header">
                            <h4>Timing Attacks & Secure Comparisons</h4>
                        </div>
                        <div className="card-body">
                            <div className="alert alert-warning">
                                <strong>Timing Attack:</strong> Attackers measure response time to extract sensitive information
                            </div>

                            <h5>Vulnerable vs Secure Comparison</h5>
                            <div className="row">
                                <div className="col-md-6">
                                    <h6>❌ Vulnerable (Short-Circuit)</h6>
                                    <pre className="bg-light p-3">
{`// Stops at first mismatch
if (password.equals(userInput)) {
    // Timing varies based on position
}`}
                                    </pre>
                                </div>
                                <div className="col-md-6">
                                    <h6>✅ Secure (Constant-Time)</h6>
                                    <pre className="bg-light p-3">
{`// Always checks all characters
import java.security.MessageDigest;

MessageDigest.isEqual(
    hash1.getBytes(),
    hash2.getBytes()
);`}
                                    </pre>
                                </div>
                            </div>

                            <h5 className="mt-4">Applications</h5>
                            <ul className="list-group">
                                <li className="list-group-item">Password/token comparison</li>
                                <li className="list-group-item">HMAC verification</li>
                                <li className="list-group-item">Cryptographic signature validation</li>
                                <li className="list-group-item">Session token comparison</li>
                            </ul>
                        </div>
                    </div>

                    <div className="card mb-4">
                        <div className="card-header">
                            <h4>Secure Randomness (SecureRandom)</h4>
                        </div>
                        <div className="card-body">
                            <div className="alert alert-warning">
                                <strong>Never use Math.random() or Random() for security!</strong>
                            </div>

                            <h5>SecureRandom Best Practices</h5>
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Use Case</th>
                                        <th>Recommendation</th>
                                        <th>Code Example</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>General Purpose</td>
                                        <td>Use default instance</td>
                                        <td><code>SecureRandom sr = new SecureRandom();</code></td>
                                    </tr>
                                    <tr>
                                        <td>Cryptographic Keys</td>
                                        <td>Use strong algorithm</td>
                                        <td><code>SecureRandom.getInstanceStrong()</code></td>
                                    </tr>
                                    <tr>
                                        <td>Linux/Unix</td>
                                        <td>Use NativePRNG</td>
                                        <td><code>SecureRandom.getInstance("NativePRNG")</code></td>
                                    </tr>
                                    <tr>
                                        <td>Token Generation</td>
                                        <td>Use sufficient bytes</td>
                                        <td><code>byte[] token = new byte[32]; sr.nextBytes(token);</code></td>
                                    </tr>
                                </tbody>
                            </table>

                            <h5 className="mt-4">Common Applications</h5>
                            <ul className="list-group">
                                <li className="list-group-item">Session token generation</li>
                                <li className="list-group-item">Password salts</li>
                                <li className="list-group-item">Initialization vectors (IVs) for encryption</li>
                                <li className="list-group-item">CSRF tokens</li>
                                <li className="list-group-item">API keys and nonces</li>
                            </ul>
                        </div>
                    </div>

                    <div className="card mb-4">
                        <div className="card-header">
                            <h4>Secrets Handling & Credential Management</h4>
                        </div>
                        <div className="card-body">
                            <div className="alert alert-danger">
                                <strong>Critical:</strong> Never hard-code credentials or secrets in source code
                            </div>

                            <h5>Secure Secrets Management</h5>
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Method</th>
                                        <th>Description</th>
                                        <th>Tools/Services</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Environment Variables</td>
                                        <td>Store secrets outside codebase</td>
                                        <td>System.getenv("DB_PASSWORD")</td>
                                    </tr>
                                    <tr>
                                        <td>Secret Managers</td>
                                        <td>Centralized vault services</td>
                                        <td>AWS Secrets Manager, Azure Key Vault, HashiCorp Vault</td>
                                    </tr>
                                    <tr>
                                        <td>Configuration Encryption</td>
                                        <td>Encrypt config files</td>
                                        <td>Spring Cloud Config with encryption</td>
                                    </tr>
                                    <tr>
                                        <td>Memory Protection</td>
                                        <td>Clear secrets after use</td>
                                        <td>Use char[] instead of String, Arrays.fill()</td>
                                    </tr>
                                </tbody>
                            </table>

                            <h5 className="mt-4">Best Practices</h5>
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <strong>Use char[] for passwords:</strong> Strings are immutable and remain in memory
                                </li>
                                <li className="list-group-item">
                                    <strong>Rotate credentials regularly:</strong> Implement key rotation policies
                                </li>
                                <li className="list-group-item">
                                    <strong>Principle of Least Privilege:</strong> Grant minimal necessary permissions
                                </li>
                                <li className="list-group-item">
                                    <strong>Audit access:</strong> Log secret retrieval and usage
                                </li>
                                <li className="list-group-item">
                                    <strong>Avoid logging secrets:</strong> Mask sensitive data in logs
                                </li>
                            </ul>

                            <h5 className="mt-4">Memory Clearing Example</h5>
                            <pre className="bg-light p-3">
{`// Good practice
char[] password = getPassword();
try {
    // Use password
    authenticate(password);
} finally {
    // Clear from memory
    Arrays.fill(password, '\\0');
}`}
                            </pre>
                        </div>
                    </div>
                </div>
            )}

            {pageState === PageStates.WebSecurity && (
                <div>
                    <h2 className="mb-4">Java Web & Framework Security</h2>

                    <div className="card mb-4">
                        <div className="card-header">
                            <h4>Spring Security Internals</h4>
                        </div>
                        <div className="card-body">
                            <h5>Core Components</h5>
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Component</th>
                                        <th>Purpose</th>
                                        <th>Key Interfaces</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>SecurityContextHolder</td>
                                        <td>Stores authentication details</td>
                                        <td>SecurityContext, Authentication</td>
                                    </tr>
                                    <tr>
                                        <td>AuthenticationManager</td>
                                        <td>Coordinates authentication</td>
                                        <td>ProviderManager, AuthenticationProvider</td>
                                    </tr>
                                    <tr>
                                        <td>UserDetailsService</td>
                                        <td>Loads user data</td>
                                        <td>loadUserByUsername()</td>
                                    </tr>
                                    <tr>
                                        <td>GrantedAuthority</td>
                                        <td>Represents permissions</td>
                                        <td>getAuthority()</td>
                                    </tr>
                                </tbody>
                            </table>

                            <h5 className="mt-4">Authentication Flow</h5>
                            <ol className="list-group list-group-numbered">
                                <li className="list-group-item">User submits credentials</li>
                                <li className="list-group-item">Filter creates Authentication object (unauthenticated)</li>
                                <li className="list-group-item">AuthenticationManager delegates to providers</li>
                                <li className="list-group-item">Provider validates with UserDetailsService</li>
                                <li className="list-group-item">Success: Authentication object stored in SecurityContext</li>
                                <li className="list-group-item">Failure: AuthenticationException thrown</li>
                            </ol>
                        </div>
                    </div>

                    <div className="card mb-4">
                        <div className="card-header">
                            <h4>Security Filter Chain</h4>
                        </div>
                        <div className="card-body">
                            <h5>Default Filter Order</h5>
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Order</th>
                                        <th>Filter</th>
                                        <th>Function</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>SecurityContextPersistenceFilter</td>
                                        <td>Loads SecurityContext from session</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>CsrfFilter</td>
                                        <td>CSRF token validation</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>LogoutFilter</td>
                                        <td>Handles logout requests</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>UsernamePasswordAuthenticationFilter</td>
                                        <td>Processes login form</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>BasicAuthenticationFilter</td>
                                        <td>HTTP Basic authentication</td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>ExceptionTranslationFilter</td>
                                        <td>Handles security exceptions</td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>FilterSecurityInterceptor</td>
                                        <td>Authorization decisions</td>
                                    </tr>
                                </tbody>
                            </table>

                            <h5 className="mt-4">Custom Filter Example</h5>
                            <pre className="bg-light p-3">
{`@Bean
public SecurityFilterChain filterChain(HttpSecurity http) {
    return http
        .addFilterBefore(jwtFilter, 
            UsernamePasswordAuthenticationFilter.class)
        .authorizeHttpRequests(auth -> auth
            .requestMatchers("/api/public/**").permitAll()
            .anyRequest().authenticated()
        )
        .build();
}`}
                            </pre>
                        </div>
                    </div>

                    <div className="card mb-4">
                        <div className="card-header">
                            <h4>CSRF (Cross-Site Request Forgery) Protection</h4>
                        </div>
                        <div className="card-body">
                            <div className="alert alert-info">
                                <strong>CSRF Attack:</strong> Tricks user into executing unwanted actions while authenticated
                            </div>

                            <h5>Spring Security CSRF Configuration</h5>
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Scenario</th>
                                        <th>Configuration</th>
                                        <th>Rationale</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Traditional Web Apps</td>
                                        <td>Enable CSRF (default)</td>
                                        <td>Session-based, vulnerable to CSRF</td>
                                    </tr>
                                    <tr>
                                        <td>Stateless REST APIs</td>
                                        <td>Disable CSRF</td>
                                        <td>JWT/token-based, not cookie-based</td>
                                    </tr>
                                    <tr>
                                        <td>Mixed Applications</td>
                                        <td>Selective protection</td>
                                        <td>CSRF on forms, disabled for API endpoints</td>
                                    </tr>
                                </tbody>
                            </table>

                            <h5 className="mt-4">Implementation Patterns</h5>
                            <div className="row">
                                <div className="col-md-6">
                                    <h6>Synchronizer Token</h6>
                                    <ul className="list-group">
                                        <li className="list-group-item">Server generates unique token</li>
                                        <li className="list-group-item">Token sent with each form</li>
                                        <li className="list-group-item">Server validates on submission</li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <h6>Double Submit Cookie</h6>
                                    <ul className="list-group">
                                        <li className="list-group-item">Token in both cookie and request</li>
                                        <li className="list-group-item">Server compares both values</li>
                                        <li className="list-group-item">No server-side state needed</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-4">
                        <div className="card-header">
                            <h4>CORS (Cross-Origin Resource Sharing)</h4>
                        </div>
                        <div className="card-body">
                            <h5>Configuration Levels</h5>
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Level</th>
                                        <th>Method</th>
                                        <th>Use Case</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Global</td>
                                        <td>@CrossOrigin on @RestController</td>
                                        <td>All endpoints in controller</td>
                                    </tr>
                                    <tr>
                                        <td>Method-Level</td>
                                        <td>@CrossOrigin on individual methods</td>
                                        <td>Specific endpoints</td>
                                    </tr>
                                    <tr>
                                        <td>Security Config</td>
                                        <td>http.cors()</td>
                                        <td>Integration with Spring Security</td>
                                    </tr>
                                </tbody>
                            </table>

                            <h5 className="mt-4">Secure Configuration Example</h5>
                            <pre className="bg-light p-3">
{`@Bean
public CorsConfigurationSource corsConfigurationSource() {
    CorsConfiguration config = new CorsConfiguration();
    config.setAllowedOrigins(List.of("https://trusted-domain.com"));
    config.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE"));
    config.setAllowedHeaders(List.of("Authorization", "Content-Type"));
    config.setAllowCredentials(true);
    config.setMaxAge(3600L);
    
    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
    source.registerCorsConfiguration("/api/**", config);
    return source;
}`}
                            </pre>

                            <div className="alert alert-warning mt-3">
                                <strong>Security Warning:</strong> Never use <code>setAllowedOrigins("*")</code> with <code>setAllowCredentials(true)</code>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-4">
                        <div className="card-header">
                            <h4>Session vs Stateless Security</h4>
                        </div>
                        <div className="card-body">
                            <h5>Comparison</h5>
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Aspect</th>
                                        <th>Session-Based</th>
                                        <th>Stateless (Token-Based)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Storage</td>
                                        <td>Server-side session</td>
                                        <td>Client holds token</td>
                                    </tr>
                                    <tr>
                                        <td>Scalability</td>
                                        <td>Requires sticky sessions or shared cache</td>
                                        <td>Horizontally scalable</td>
                                    </tr>
                                    <tr>
                                        <td>Security</td>
                                        <td>CSRF protection required</td>
                                        <td>Token theft risk</td>
                                    </tr>
                                    <tr>
                                        <td>Logout</td>
                                        <td>Server invalidates session</td>
                                        <td>Token expiration or blacklist</td>
                                    </tr>
                                    <tr>
                                        <td>Use Case</td>
                                        <td>Traditional web applications</td>
                                        <td>APIs, microservices, SPAs</td>
                                    </tr>
                                </tbody>
                            </table>

                            <h5 className="mt-4">Stateless Configuration</h5>
                            <pre className="bg-light p-3">
{`http
    .sessionManagement(session -> session
        .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
    )
    .csrf(csrf -> csrf.disable())`}
                            </pre>
                        </div>
                    </div>

                    <div className="card mb-4">
                        <div className="card-header">
                            <h4>JWT Pitfalls & Best Practices</h4>
                        </div>
                        <div className="card-body">
                            <div className="alert alert-danger">
                                <strong>Common JWT Mistakes</strong>
                            </div>

                            <h5>Security Pitfalls</h5>
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Pitfall</th>
                                        <th>Risk</th>
                                        <th>Mitigation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Algorithm Confusion (alg: none)</td>
                                        <td>Bypass signature verification</td>
                                        <td>Explicitly require signing algorithm</td>
                                    </tr>
                                    <tr>
                                        <td>Weak Secret Keys</td>
                                        <td>Brute-force signature</td>
                                        <td>Use strong keys (256+ bits)</td>
                                    </tr>
                                    <tr>
                                        <td>No Expiration (exp claim)</td>
                                        <td>Token never expires</td>
                                        <td>Always set short expiration times</td>
                                    </tr>
                                    <tr>
                                        <td>Storing Sensitive Data</td>
                                        <td>JWT is base64, not encrypted</td>
                                        <td>Store only non-sensitive claims</td>
                                    </tr>
                                    <tr>
                                        <td>Not Validating Claims</td>
                                        <td>Accept tampered tokens</td>
                                        <td>Validate iss, aud, exp, nbf</td>
                                    </tr>
                                </tbody>
                            </table>

                            <h5 className="mt-4">Best Practices</h5>
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <strong>Short-lived access tokens:</strong> 15-30 minutes maximum
                                </li>
                                <li className="list-group-item">
                                    <strong>Refresh token rotation:</strong> Issue new refresh token on each use
                                </li>
                                <li className="list-group-item">
                                    <strong>Token revocation:</strong> Maintain blacklist for critical events
                                </li>
                                <li className="list-group-item">
                                    <strong>Use RS256 (asymmetric):</strong> Public key verification, private signing
                                </li>
                                <li className="list-group-item">
                                    <strong>Secure storage:</strong> HttpOnly cookies or secure storage APIs
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="card mb-4">
                        <div className="card-header">
                            <h4>Method-Level Security</h4>
                        </div>
                        <div className="card-body">
                            <h5>Annotations</h5>
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Annotation</th>
                                        <th>Type</th>
                                        <th>Example</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>@PreAuthorize</td>
                                        <td>Before method execution</td>
                                        <td><code>@PreAuthorize("hasRole('ADMIN')")</code></td>
                                    </tr>
                                    <tr>
                                        <td>@PostAuthorize</td>
                                        <td>After method execution</td>
                                        <td><code>@PostAuthorize("returnObject.owner == authentication.name")</code></td>
                                    </tr>
                                    <tr>
                                        <td>@Secured</td>
                                        <td>Simple role checking</td>
                                        <td><code>@Secured("ROLE_USER")</code></td>
                                    </tr>
                                    <tr>
                                        <td>@RolesAllowed</td>
                                        <td>JSR-250 standard</td>
                                        <td><code>@RolesAllowed(&#123;"ADMIN", "MANAGER"&#125;)</code></td>
                                    </tr>
                                </tbody>
                            </table>

                            <h5 className="mt-4">SpEL (Spring Expression Language) Examples</h5>
                            <pre className="bg-light p-3">
{`// Role-based
@PreAuthorize("hasRole('ADMIN')")

// Permission-based
@PreAuthorize("hasAuthority('DELETE_USER')")

// Multiple conditions
@PreAuthorize("hasRole('USER') and #userId == authentication.principal.id")

// Method parameter access
@PreAuthorize("#user.email == authentication.name")
public void updateUser(@Param("user") User user)

// Object ownership
@PostAuthorize("returnObject.createdBy == authentication.name")
public Document getDocument(Long id)`}
                            </pre>

                            <h5 className="mt-4">Enable Method Security</h5>
                            <pre className="bg-light p-3">
{`@Configuration
@EnableMethodSecurity(prePostEnabled = true)
public class SecurityConfig {
    // Configuration
}`}
                            </pre>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

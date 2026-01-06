"use client"

import { useState } from 'react'

const PageStates = {
    Overview: 1,
    CoreFoundations: 2,
    Cryptography: 3
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
        </div>
    )
}

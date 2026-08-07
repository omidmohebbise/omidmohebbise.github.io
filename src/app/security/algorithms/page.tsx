export default function SecurityPage() {
    return (
        <div className="container py-5">
            <p className="section-label">Security</p>
            <h1 className="section-title">Common Security Algorithms</h1>
            <hr className="section-rule" />

            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <h5>Encryption Algorithms</h5>
                            <p className="mb-2">Protect data by converting it into an unreadable format.</p>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><strong>AES (Advanced Encryption Standard):</strong> Symmetric encryption widely used for securing sensitive data. Offers 128, 192, and 256-bit key lengths.</li>
                                <li className="list-group-item"><strong>RSA (Rivest-Shamir-Adleman):</strong> Asymmetric encryption using a public-private key pair for secure communication.</li>
                                <li className="list-group-item"><strong>DES (Data Encryption Standard):</strong> An older symmetric method, now considered insecure due to its small key size.</li>
                                <li className="list-group-item"><strong>ChaCha20:</strong> A modern symmetric algorithm known for speed and security, often used in secure messaging.</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h5>Hashing Algorithms</h5>
                            <p className="mb-2">Transform data into a fixed-length hash value, used for integrity checks and password storage.</p>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><strong>SHA (Secure Hash Algorithm):</strong> A family of cryptographic hash functions. SHA-256 and SHA-3 are widely used.</li>
                                <li className="list-group-item"><strong>MD5 (Message Digest 5):</strong> Once popular, now considered insecure due to vulnerability to collisions.</li>
                                <li className="list-group-item"><strong>Argon2:</strong> A key derivation function designed for password hashing, resistant to GPU-based attacks.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6">
                            <h5>Digital Signature Algorithms</h5>
                            <p className="mb-2">Verify the authenticity and integrity of data.</p>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><strong>DSA (Digital Signature Algorithm):</strong> Generates and verifies digital signatures using asymmetric cryptography.</li>
                                <li className="list-group-item"><strong>ECDSA (Elliptic Curve DSA):</strong> A variant of DSA using elliptic curve cryptography, offering higher security with smaller keys.</li>
                                <li className="list-group-item"><strong>EdDSA (Edwards-Curve DSA):</strong> A fast and secure signature algorithm based on elliptic curves.</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h5>Key Exchange Algorithms</h5>
                            <p className="mb-2">Facilitate secure sharing of cryptographic keys.</p>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><strong>Diffie-Hellman:</strong> Enables two parties to securely exchange cryptographic keys over an insecure channel.</li>
                                <li className="list-group-item"><strong>ECDH (Elliptic Curve Diffie-Hellman):</strong> An elliptic curve variant of Diffie-Hellman, providing strong security with smaller keys.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6">
                            <h5>Authentication Algorithms</h5>
                            <p className="mb-2">Ensure the identity of users or systems.</p>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><strong>HMAC (Hash-based Message Authentication Code):</strong> Combines a cryptographic hash function with a secret key for integrity and authenticity.</li>
                                <li className="list-group-item"><strong>PBKDF2 (Password-Based Key Derivation Function 2):</strong> Strengthens passwords by adding salt and iterating the hashing process.</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h5>Secure Communication Protocols</h5>
                            <p className="mb-2">Use security algorithms to protect data in transit.</p>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><strong>SSL/TLS:</strong> Encrypts communication between web browsers and servers using AES, RSA, and other algorithms.</li>
                                <li className="list-group-item"><strong>IPSec (Internet Protocol Security):</strong> Secures IP communications by authenticating and encrypting packets.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

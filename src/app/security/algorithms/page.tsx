export default function SecurityPage() {
    return (
        <div className="container py-3">

            <div className="">
                <h2>Common Security Algorithms:</h2>
                <div className="my-3">
                    <div className="row">
                        <div className=" col-6 p-1">
                            <div className="card ">
                                <h5 className="bg-light p-2"><strong>Encryption Algorithms:</strong> Used to protect data by converting it into an unreadable format.</h5>
                                <ul>
                                    <li><strong>AES (Advanced Encryption Standard):</strong> A symmetric encryption algorithm widely used for securing sensitive data. Offers 128-bit, 192-bit, and 256-bit key lengths.</li>
                                    <li><strong>RSA (Rivest-Shamir-Adleman):</strong> An asymmetric encryption algorithm that uses a public-private key pair for secure communication.</li>
                                    <li><strong>DES (Data Encryption Standard):</strong> An older symmetric encryption method, now considered insecure due to its small key size.</li>
                                    <li><strong>ChaCha20:</strong> A modern symmetric encryption algorithm known for speed and security, often used in secure messaging protocols.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-6 p-1 ">
                            <div className="card h-100">
                                <h5 className="bg-light p-2"><strong>Hashing Algorithms:</strong> Transform data into a fixed-length hash value, used for integrity checks and password storage.</h5>
                                <ul>
                                    <li><strong>SHA (Secure Hash Algorithm):</strong> A family of cryptographic hash functions. SHA-256 and SHA-3 are widely used for security purposes.</li>
                                    <li><strong>MD5 (Message Digest 5):</strong> Once popular, now considered insecure due to vulnerabilities to collisions.</li>
                                    <li><strong>Argon2:</strong> A key derivation function designed for password hashing. Resistant to GPU-based attacks.</li>
                                </ul>
                            </div>
                        </div>
                        <div className=" col-6 p-1 ">
                            <div className="card h-100 ">
                                <h5 className="bg-light p-2"><strong>Digital Signature Algorithms:</strong> Used to verify the authenticity and integrity of data.</h5>
                                <ul>
                                    <li><strong>DSA (Digital Signature Algorithm):</strong> Generates and verifies digital signatures using asymmetric cryptography.</li>
                                    <li><strong>ECDSA (Elliptic Curve Digital Signature Algorithm):</strong> A variant of DSA using elliptic curve cryptography, offering higher security with smaller key sizes.</li>
                                    <li><strong>EdDSA (Edwards-Curve Digital Signature Algorithm):</strong> A fast and secure signature algorithm based on elliptic curves.</li>
                                </ul>
                            </div>
                        </div>
                        <div className=" col-6 p-1">
                            <div className="card h-100">
                                <h5 className="bg-light p-2"><strong>Key Exchange Algorithms:</strong> Facilitate secure sharing of cryptographic keys.</h5>
                                <ul>
                                    <li><strong>Diffie-Hellman:</strong> Enables two parties to securely exchange cryptographic keys over an insecure channel.</li>
                                    <li><strong>ECDH (Elliptic Curve Diffie-Hellman):</strong> An elliptic curve variant of Diffie-Hellman, providing strong security with smaller key sizes.</li>
                                </ul>
                            </div>
                        </div>
                        <div className=" col-6 p-1">
                            <div className="card h-100">
                                <h5 className="bg-light p-2"><strong>Authentication Algorithms:</strong> Ensure the identity of users or systems.</h5>
                                <ul>
                                    <li><strong>HMAC (Hash-based Message Authentication Code):</strong> Combines a cryptographic hash function with a secret key for data integrity and authenticity.</li>
                                    <li><strong>PBKDF2 (Password-Based Key Derivation Function 2):</strong> Strengthens passwords by adding salt and iterating the hashing process.</li>
                                </ul>
                            </div>
                        </div>
                        <div className=" col-6 p-1 ">
                            <div className="card h-100">
                                <h5 className="bg-light p-2"> <strong>Secure Communication Protocols:</strong> Use security algorithms to protect data in transit.</h5>
                                <ul>
                                    <li><strong>SSL/TLS (Secure Sockets Layer/Transport Layer Security):</strong> Encrypts communication between web browsers and servers using AES, RSA, and other algorithms.</li>
                                    <li><strong>IPSec (Internet Protocol Security):</strong> Secures IP communications by authenticating and encrypting packets.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
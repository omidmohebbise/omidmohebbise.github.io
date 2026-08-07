export default function SecurityPage() {
    return (
        <div className="container py-5">
            <p className="section-label">Security</p>
            <h1 className="section-title">Key Areas of Security</h1>
            <hr className="section-rule" />

            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <h5>Network Security</h5>
                            <p className="mb-0">Protects data as it moves through networks. Firewalls monitor and control traffic, VPNs create secure tunnels for communication, and intrusion detection systems alert you to potential threats.</p>
                        </div>
                        <div className="col-md-6">
                            <h5>Application Security</h5>
                            <p className="mb-0">Securing software by identifying and fixing vulnerabilities. Techniques include secure coding, code reviews, and regular updates to mitigate risks.</p>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6">
                            <h5>Web Security</h5>
                            <p className="mb-0">Protects websites and web apps from hacking, data breaches, and malware. A key focus is preventing unauthorized access and ensuring data integrity.</p>
                        </div>
                        <div className="col-md-6">
                            <h5>Endpoint Security</h5>
                            <p className="mb-0">Secures individual devices like laptops and phones. Antivirus software, device encryption, and remote wiping capabilities are common measures.</p>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6">
                            <h5>Cloud Security</h5>
                            <p className="mb-0">Safeguards data stored in the cloud. Encryption, access controls, and compliance monitoring are essential for secure cloud environments.</p>
                        </div>
                        <div className="col-md-6">
                            <h5>Identity &amp; Access Management (IAM)</h5>
                            <p className="mb-0">Ensures users have appropriate access levels to systems and data. Techniques include role-based access and multi-factor authentication.</p>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6">
                            <h5>Data Security</h5>
                            <p className="mb-0">Focuses on encrypting and securely storing data to prevent breaches, protecting data both at rest and in transit.</p>
                        </div>
                        <div className="col-md-6">
                            <h5>Incident Response</h5>
                            <p className="mb-0">Preparing for and addressing security breaches. Plans should include identifying the breach, mitigating damage, and recovering systems.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

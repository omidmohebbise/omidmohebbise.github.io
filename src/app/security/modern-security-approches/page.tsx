export default function SecurityPage() {
    return (
        <div className="container py-5">
            <p className="section-label">Security</p>
            <h1 className="section-title">Modern Security Approaches</h1>
            <hr className="section-rule" />

            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h5>1. Zero Trust Model</h5>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong>Never Trust, Always Verify:</strong> Unlike traditional security models, Zero Trust requires rigorous verification for every access attempt.</li>
                        <li className="list-group-item"><strong>Segmentation:</strong> Divide the network or cloud environment into smaller secured zones to limit an attacker&apos;s ability to move laterally.</li>
                        <li className="list-group-item"><strong>Multi-Factor Authentication:</strong> Require more than one piece of evidence to verify a user&apos;s identity, making unauthorized access more difficult.</li>
                        <li className="list-group-item"><strong>Advanced Analytics:</strong> Use data from segmentation and authentication to gain insights into network traffic, helping detect and respond to anomalies quickly.</li>
                    </ul>
                </div>
            </div>

            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h5>2. Passwordless Authentication</h5>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong>Shift from Passwords:</strong> Focuses on what you have (e.g., a mobile device), who you are (e.g., biometrics), and where you are (e.g., geolocation) instead of traditional passwords.</li>
                        <li className="list-group-item"><strong>Enhanced Security:</strong> Harder to steal and provides stronger security compared to traditional passwords.</li>
                        <li className="list-group-item"><strong>FIDO2 Keys:</strong> Create a unique cryptographic link between the user and the application, enhancing security and convenience by eliminating the need for passwords.</li>
                    </ul>
                </div>
            </div>

            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h5>3. Threat Modeling</h5>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong>Understanding Threats:</strong> Identifying and categorizing security threats to your applications and systems, similar to analyzing an opponent&apos;s tactics in a game.</li>
                        <li className="list-group-item"><strong>STRIDE Framework:</strong> Helps identify threats in six key areas — Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, and Elevation of Privilege.</li>
                        <li className="list-group-item"><strong>Proactive Defense:</strong> Understanding and addressing these threats helps you build a more robust defense strategy tailored to the specific risks your systems face.</li>
                    </ul>
                </div>
            </div>

            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h5>4. Web Application Firewall vs. Traditional Firewall</h5>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong>Specialized Focus:</strong> Web Application Firewalls (WAFs) specifically target HTTP/HTTPS traffic, defending against web-based threats like SQL injection, which traditional firewalls may not effectively handle.</li>
                        <li className="list-group-item"><strong>Deployment Flexibility:</strong> WAFs can be deployed as physical devices, cloud services, or SaaS-based platforms.</li>
                        <li className="list-group-item"><strong>Content Inspection:</strong> Unlike traditional firewalls that check for authorized entry, WAFs inspect the content of web traffic, filtering out malicious activity before it reaches your site.</li>
                    </ul>
                </div>
            </div>

            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h5>5. Shifting Left</h5>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong>Early Security Integration:</strong> Integrating security measures early in the software development lifecycle ensures security is a priority from the start.</li>
                        <li className="list-group-item"><strong>Cost Efficiency:</strong> Fixing defects and vulnerabilities early in development is significantly cheaper (~$80) compared to fixing them in production (~$7,600).</li>
                        <li className="list-group-item"><strong>Proactive Risk Detection:</strong> Early detection and resolution of security issues helps avoid production delays and inflated development expenses.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

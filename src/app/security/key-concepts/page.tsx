export default function SecurityPage() {
    return (
        <div className="container py-5">
            <p className="section-label">Security</p>
            <h1 className="section-title">Key Concepts</h1>
            <hr className="section-rule" />

            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h5>Threats vs Vulnerabilities vs Risk</h5>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong>Threat:</strong> A potential cause of an unwanted incident that could harm systems or data.</li>
                        <li className="list-group-item"><strong>Vulnerability:</strong> A weakness in a system that can be exploited by a threat.</li>
                        <li className="list-group-item"><strong>Risk:</strong> The potential for loss or damage when a threat exploits a vulnerability, considering both likelihood and impact.</li>
                    </ul>
                </div>
            </div>

            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h5>Layered Security Strategy</h5>
                    <p className="mb-3">Defense in depth involves multiple layers of security controls across network, endpoint, user, and data levels to prevent, detect, and respond to attacks.</p>
                    <ul className="list-group list-group-flush mb-3">
                        <li className="list-group-item"><strong>Network Level Controls:</strong> Firewalls, intrusion detection systems, and network segmentation act as the first line of defense.</li>
                        <li className="list-group-item"><strong>Endpoint Level Controls:</strong> Endpoint detection and response (EDR) protects devices connecting to the network.</li>
                        <li className="list-group-item"><strong>User Level Controls:</strong> Strong authentication methods like multi-factor authentication and access control policies ensure only the right people have access.</li>
                        <li className="list-group-item"><strong>Data Level Controls:</strong> Encryption, backups, and data classification secure the core data even if other defenses are breached.</li>
                    </ul>
                    <div className="alert alert-warning mb-0" role="alert">
                        <strong>Risk Consideration:</strong> The potential for loss or damage when a threat exploits a vulnerability, considering both the likelihood and impact.
                    </div>
                </div>
            </div>

            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h5>Threats and Attacks</h5>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong>Types of Insider Threats:</strong> Insider threats can be malicious insiders, negligent insiders, or accidental insiders.</li>
                        <li className="list-group-item"><strong>Examples and Implications:</strong> Insider threats can lead to significant data breaches and security compromises, as illustrated by the example of a financial institution&apos;s data breach.</li>
                        <li className="list-group-item"><strong>Prevention Strategies:</strong> Effective prevention involves technical controls like access management and user behavior analytics, as well as organizational measures such as regular training and fostering a culture of security awareness.</li>
                    </ul>
                </div>
            </div>

            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h5>Ransomware</h5>
                    <p className="mb-3"><strong>Definition:</strong> Malicious software that encrypts files and demands a ransom, often in cryptocurrency, with threats to release sensitive data if not paid.</p>
                    <h6>Defense Strategies</h6>
                    <ul className="list-unstyled mb-0">
                        <li className="mb-1">Regular software updates and robust endpoint security.</li>
                        <li className="mb-1">Educating employees about phishing.</li>
                        <li className="mb-1">Implementing immutable storage architectures, application whitelisting, and network segmentation.</li>
                        <li className="mb-1">Using end-to-end encryption and having a well-tested incident response plan.</li>
                        <li className="mb-0">Engaging in threat hunting and leveraging threat intelligence services.</li>
                    </ul>
                </div>
            </div>

            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h5>DoS Attacks</h5>
                    <p className="mb-3">A cyberattack aimed at disrupting the normal functioning of a system, network, or website by overwhelming it with excessive requests or traffic — making the service unavailable to legitimate users.</p>

                    <h6>Types of DoS Attacks</h6>
                    <ul className="list-group list-group-flush mb-3">
                        <li className="list-group-item"><strong>Distributed Denial of Service (DDoS):</strong> Multiple compromised computers (botnets) overwhelm a single target, disrupting its capacity to handle requests.</li>
                        <li className="list-group-item"><strong>Application Layer Attacks:</strong> Target specific functionalities within an application, making it slow or unresponsive.</li>
                        <li className="list-group-item"><strong>Network Layer Attacks:</strong> Disrupt connectivity between the user and service by targeting network protocols and equipment like routers and switches.</li>
                    </ul>

                    <h6>Mitigation Strategies</h6>
                    <ul className="list-unstyled mb-0">
                        <li className="mb-1">Implement firewalls and intrusion prevention systems (IPS).</li>
                        <li className="mb-1">Use rate limiting and traffic filtering.</li>
                        <li className="mb-1">Deploy content delivery networks (CDN).</li>
                        <li className="mb-0">Utilize anti-DDoS services from cloud providers.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

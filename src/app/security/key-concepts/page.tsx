export default function SecurityPage() {
    return (
        <div className="container py-3">

            <div className="card mb-2">
                <div className="card-header ">
                    <h3>Threats vs Vulnerabilities vs Risk </h3>
                </div>
                <div className="card-body">
                    <div className="   my-3">
                        <strong>Threats <br /></strong> Potential causes of unwanted incidents that could harm systems or data
                    </div>
                    <div className="   my-3">
                        <strong>Vulnerabilities <br /></strong> Weaknesses in systems that can be exploited by threats.
                    </div>
                    <div className="   my-3">
                        <strong>Risk <br /></strong> The potential for loss or damage when a threat exploits a vulnerability, considering both the likelihood and impact.
                    </div>
                </div>
            </div>

            <div className="card پذ-۲">
                <div className="card-header ">
                    <h3>Layered Security Strategy</h3>
                </div>
                <div className="card-body">
                    <p>Defense in depth involves multiple layers of security controls across network, endpoint, user, and data levels to prevent, detect, and respond to attacks.</p>

                    <strong className="mt-3">Network Level Controls</strong>
                    <p>Firewalls, intrusion detection systems, and network segmentation act as the first line of defense.</p>

                    <strong className="mt-3">Endpoint Level Controls</strong>
                    <p>Endpoint detection and response (EDR) protects devices connecting to the network.</p>

                    <strong className="mt-3">User Level Controls</strong>
                    <p>Strong authentication methods like multi-factor authentication and access control policies ensure only the right people have access.</p>

                    <strong className="mt-3">Data Level Controls</strong>
                    <p>Encryption, backups, and data classification secure the core data even if other defenses are breached.</p>

                    <div className="mt-3 alert alert-warning" role="alert">
                        <strong>Risk Consideration:</strong> The potential for loss or damage when a threat exploits a vulnerability, considering both the likelihood and impact.
                    </div>
                </div>
            </div>

            <div className="card mb-2">
                <div className="card-header ">
                    <h3>Threats and Attacks </h3>
                </div>
                <div className="card-body">
                    <div className="   my-3">
                        <strong>Types of Insider Threats <br /></strong> Insider threats can be malicious insiders, negligent insiders, or accidental insiders.
                    </div>
                    <div className="   my-3">
                        <strong>Examples and Implications <br /></strong>  Insider threats can lead to significant data breaches and security compromises, as illustrated by the example of a financial institution's data breach.
                    </div>
                    <div className="   my-3">
                        <strong>Prevention Strategies <br /></strong> Effective prevention involves technical controls like access management and user behavior analytics, as well as organizational measures such as regular training and fostering a culture of security awareness.
                    </div>
                </div>
            </div>

            <div className="card mb-2">
                <div className="card-header ">
                    <h3>Ransomware</h3>
                </div>
                <div className="card-body">
                    <div className="   my-3">
                        <strong>Definition <br /></strong>Ransomware is malicious software that encrypts files and demands a ransom, often in cryptocurrency, with threats to release sensitive data if not paid.                        </div>
                    <div className="   my-3">
                        <strong>Defense Strategies <br /></strong>
                        <ul>
                            <li>- Regular software updates and robust endpoint security.</li>
                            <li>- Educating employees about phishing</li>
                            <li>- Implementing immutable storage architectures, application whitelisting, and network segmentation</li>
                            <li>- Using end-to-end encryption and having a well-tested incident response plan</li>
                            <li>- Engaging in threat hunting and leveraging threat intelligence services.</li>
                        </ul>
                    </div>

                </div>
            </div>

            <div className="card mb-2">
                <div className="card-header ">
                    <h3>DoS Attacks</h3>
                </div>
                <div className="card-body">
                    <div className=" my-3">
                        <strong>Definition <br /></strong>
                        Is a cyberattack aimed at disrupting the normal functioning of a system, network, or website by overwhelming it with excessive requests or traffic. This makes the service unavailable to legitimate users.
                    </div>
                    <div className=" my-3">
                        <strong>Types of DoS Attacks <br /></strong>
                        <ul>
                            <li><b>- Distributed Denial of Service (DDoS): </b>Multiple compromised computers (botnets) overwhelm a single target, disrupting its capacity to handle requests.</li>
                            <li><b>- Application Layer Attacks: </b> Target specific functionalities within an application, making it slow or unresponsive.</li>
                            <li><b>- Network Layer Attacks: </b> Disrupt connectivity between the user and service by targeting network protocols and equipment like routers and switches.</li>
                        </ul>
                    </div>

                    <div className="col-12 my-3">
                        <strong> Mitigation Strategies <br /></strong>
                        <ul >
                            <li className=" my-1">- Implement firewalls and intrusion prevention systems (IPS).</li>
                            <li className="  my-1">- Use rate limiting and traffic filtering.</li>
                            <li className="  my-1">- Deploy content delivery networks (CDN).</li>
                            <li className="  my-1">- Utilize anti-DDoS services from cloud providers.</li>
                        </ul>
                    </div>

                </div>
            </div>

        </div>
    )
}
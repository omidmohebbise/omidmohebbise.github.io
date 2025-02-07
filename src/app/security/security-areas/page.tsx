export default function SecurityPage() {
    return (
        <div className="container py-3">

            <div className="">
                <h2>Key Areas of Security</h2>
                <div className="row my-3">

                    <div className="col-6 my-3">
                        <strong>Network Security <br/></strong> This area protects data as it moves through networks.
                        Firewalls monitor and control traffic, VPNs create secure tunnels for communication,
                        and intrusion detection systems alert you to potential threats.
                    </div>
                    <div className="col-6 my-3">
                        <strong>Application Security <br/></strong> Securing software by identifying and fixing vulnerabilities.
                        Techniques include secure coding, code reviews, and regular updates to mitigate risks.
                    </div>
                    <div className="col-6 my-3">
                        <strong>Web Security <br/></strong> Protects websites and web apps from hacking, data breaches, and malware.
                        A key focus here is preventing unauthorized access and ensuring data integrity.
                    </div>
                    <div className="col-6 my-3">
                        <strong>Endpoint Security <br/></strong> Secures individual devices like laptops and phones.
                        Antivirus software, device encryption, and remote wiping capabilities are common measures.
                    </div>
                    <div className="col-6 my-3">
                        <strong>Cloud Security <br/></strong> Safeguards data stored in the cloud. Encryption, access controls,
                        and compliance monitoring are essential for secure cloud environments.
                    </div>
                    <div className="col-6 my-3">
                        <strong>Identity and Access Management (IAM)<br/></strong> Ensures users have appropriate access levels
                        to systems and data. Techniques include role-based access and multi-factor authentication.
                    </div>
                    <div className="col-6 my-3">
                        <strong>Data Security<br/></strong> Focuses on encrypting and securely storing data to prevent breaches.
                        This includes protecting data both at rest and in transit.
                    </div>
                    <div className="col-6 my-3">
                        <strong>Incident Response<br/></strong> Involves preparing for and addressing security breaches.
                        Plans should include identifying the breach, mitigating damage, and recovering systems.
                    </div>

                </div>
            </div>

        </div>
    )
}
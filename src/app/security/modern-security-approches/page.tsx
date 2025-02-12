export default function SecurityPage() {
    return (
        <div className="container py-3">

            <div className="card mb-2">
                <div className="card-header ">
                    <h3>1. Zero Trust model </h3>
                </div>
                <div className="card-body">
                    <div className="   my-3">
                        <strong>Never Trust, Always Verify <br /></strong> Unlike traditional security models, Zero Trust operates on the principle of "never trust, always verify," requiring rigorous verification for every access attempt.
                    </div>
                    <div className="   my-3">
                        <strong>Segmentation <br /></strong>Divide the network or cloud environment into smaller secured zones to limit an attacker's ability to move laterally.
                    </div>
                    <div className="   my-3">
                        <strong>Multi-Factor Authentication <br /></strong> Require more than one piece of evidence to verify a user's identity, making unauthorized access more difficult.
                    </div>
                    <div className="   my-3">
                        <strong>Advanced Analytics<br /></strong>Use data from segmentation and authentication to gain insights into network traffic, helping to detect and respond to anomalies quickly.
                    </div>
                </div>
            </div>

            <div className="card mb-2">
                <div className="card-header ">
                    <h3>2. Passwordless authentication </h3>
                </div>
                <div className="card-body">
                    <div className="   my-3">
                        <strong>Shift from Passwords <br /></strong> Passwordless authentication focuses on what you have (e.g., a mobile device), who you are (e.g., biometrics), and where you are (e.g., geolocation) instead of traditional passwords.
                    </div>
                    <div className="   my-3">
                        <strong>Enhanced Security <br /></strong>This method is harder to steal and provides stronger security compared to traditional passwords.
                    </div>
                    <div className="   my-3">
                        <strong>FIDO2 Keys <br /></strong> These keys create a unique cryptographic link between the user and the application, enhancing security and user convenience by eliminating the need for passwords.
                    </div>
                </div>
            </div>

            <div className="card mb-2">
                <div className="card-header ">
                    <h3>3. Threat modeling</h3>
                </div>
                <div className="card-body">
                    <div className="   my-3">
                        <strong>Understanding Threats <br /></strong>Threat modeling is about identifying and categorizing security threats to your applications and systems, similar to analyzing an opponent's tactics in a game.

                    </div>
                    <div className="   my-3">
                        <strong>STRIDE Framework <br /></strong> This framework helps identify threats in six key areas: Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, and Elevation of Privilege.

                    </div>
                    <div className="   my-3">
                        <strong>Proactive Defense <br /></strong>By understanding and addressing these threats, you can create a more robust defense strategy tailored to the specific risks your systems face.

                    </div>
                </div>
            </div>

            <div className="card mb-2">
                <div className="card-header ">
                    <h3>4. Web application firewall vs. traditional firewall</h3>
                </div>
                <div className="card-body">
                    <div className="   my-3">
                        <strong>Specialized Focus <br /></strong> Web Application Firewalls (WAFs) specifically target HTTP and HTTPS traffic, defending against web-based threats like SQL injection and denial of service attacks, which traditional firewalls may not effectively handle.
                    </div>
                    <div className="   my-3">
                        <strong>Deployment Flexibility <br /></strong>WAFs can be deployed as physical devices, cloud services, or SaaS-based platforms, providing robust protection for modern web applications.
                    </div>
                    <div className="   my-3">
                        <strong>Content Inspection <br /></strong>Unlike traditional firewalls that act as gates checking for authorized entry, WAFs inspect the content of web traffic, filtering out malicious activities before they reach your site.
                    </div>
                </div>
            </div>

            <div className="card mb-2">
                <div className="card-header ">
                    <h3>5. Shifting left</h3>
                </div>
                <div className="card-body">
                    <div className="  my-3">
                        <strong>Early Security Integration <br /></strong>Integrating security measures early in the software development lifecycle ensures that security is a priority from the start, leading to more secure and quality software products.

                    </div>
                    <div className="   my-3">
                        <strong>Cost Efficiency<br /></strong>Fixing defects and vulnerabilities early in development is significantly cheaper ($80) compared to fixing them in production ($7,600).

                    </div>
                    <div className="   my-3">
                        <strong>Proactive Risk Detection <br /></strong> Early detection and resolution of security issues help avoid production delays and inflated development expenses.

                    </div>
                </div>
            </div>



            



           

        </div>
    )
}
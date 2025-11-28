export default function EnterpriseArchitectureTechnologyArchitecture() {
    return (
        <div className="pt-4">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title mb-3">Technology Architecture</h2>
                    <p className="mb-3">Technology Architecture defines the infrastructure, platforms, and technical standards that support applications and data.</p>

                    <div className="row">
                        <div className="col-md-6">
                            <h5>Technology Architecture Components</h5>
                            <ul className="list-group list-group-flush mb-4">
                                <li className="list-group-item"><strong>Infrastructure:</strong> Compute, storage, networking</li>
                                <li className="list-group-item"><strong>Platforms & Middleware:</strong> Containers, service mesh, message brokers</li>
                                <li className="list-group-item"><strong>Databases & Data Storage:</strong> RDBMS, NoSQL, data warehouses</li>
                                <li className="list-group-item"><strong>Security & Identity:</strong> IAM, encryption, compliance</li>
                                <li className="list-group-item"><strong>Monitoring & Observability:</strong> Logging, metrics, tracing</li>
                                <li className="list-group-item"><strong>Development Tools:</strong> IDEs, build systems, repositories</li>
                            </ul>

                            <h5>On-Premises vs Cloud Decisions</h5>
                            <ul className="list-unstyled mb-4">
                                <li><strong>On-Premises:</strong> Control, security, compliance</li>
                                <li><strong>Public Cloud:</strong> Flexibility, cost, scalability</li>
                                <li><strong>Private Cloud:</strong> Managed cloud in corporate datacenter</li>
                                <li><strong>Hybrid:</strong> Mix of on-prem and cloud workloads</li>
                                <li><strong>Multi-Cloud:</strong> Leverage multiple cloud providers</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h5>Technology Standards & Policies</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2"><strong>Approved Technologies:</strong> Vetted tools and platforms</li>
                                <li className="mb-2"><strong>Architecture Patterns:</strong> Reusable solutions for common problems</li>
                                <li className="mb-2"><strong>Coding Standards:</strong> Languages, frameworks, conventions</li>
                                <li className="mb-2"><strong>Security Policies:</strong> Access control, encryption, audit</li>
                                <li className="mb-2"><strong>Performance Standards:</strong> SLAs, uptime requirements</li>
                                <li className="mb-2"><strong>Operational Runbooks:</strong> How to deploy, monitor, support</li>
                            </ul>

                            <h5>Containerization & Orchestration</h5>
                            <ul className="list-unstyled">
                                <li><strong>Docker:</strong> Container platform (industry standard)</li>
                                <li><strong>Kubernetes:</strong> Orchestration platform for containers</li>
                                <li><strong>Container Registry:</strong> Repository for container images</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-12">
                            <h5>Infrastructure Models</h5>
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Model</th>
                                            <th>Service Type</th>
                                            <th>Responsibility</th>
                                            <th>Example</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>IaaS</strong></td>
                                            <td>Infrastructure as a Service</td>
                                            <td>You manage: OS, middleware, app, data</td>
                                            <td>AWS EC2, Azure VMs</td>
                                        </tr>
                                        <tr>
                                            <td><strong>PaaS</strong></td>
                                            <td>Platform as a Service</td>
                                            <td>You manage: app, data; Provider manages: OS, middleware</td>
                                            <td>Heroku, Google App Engine</td>
                                        </tr>
                                        <tr>
                                            <td><strong>SaaS</strong></td>
                                            <td>Software as a Service</td>
                                            <td>Provider manages everything</td>
                                            <td>Salesforce, Office 365</td>
                                        </tr>
                                        <tr>
                                            <td><strong>CaaS</strong></td>
                                            <td>Containers as a Service</td>
                                            <td>Container orchestration managed by provider</td>
                                            <td>AWS ECS, Azure Container Instances</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6">
                            <h5>Cloud Migration Strategy (6 Rs)</h5>
                            <ul className="list-group list-group-flush mb-4">
                                <li className="list-group-item"><strong>Rehost:</strong> Lift and shift (minimal changes)</li>
                                <li className="list-group-item"><strong>Replatform:</strong> Optimize for cloud while maintaining core)</li>
                                <li className="list-group-item"><strong>Refactor:</strong> Rebuild to use cloud-native services</li>
                                <li className="list-group-item"><strong>Repurchase:</strong> Switch to SaaS alternative</li>
                                <li className="list-group-item"><strong>Retire:</strong> Decommission legacy system</li>
                                <li className="list-group-item"><strong>Retain:</strong> Keep on-premises (not cloud-ready)</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h5>Technology Architecture Best Practices</h5>
                            <ul className="list-group list-group-flush mb-4">
                                <li className="list-group-item">✓ Design for scalability and performance</li>
                                <li className="list-group-item">✓ Implement redundancy and disaster recovery</li>
                                <li className="list-group-item">✓ Establish clear operational procedures</li>
                                <li className="list-group-item">✓ Standardize where possible, innovate where needed</li>
                                <li className="list-group-item">✓ Plan for capacity and growth</li>
                                <li className="list-group-item">✓ Continuously monitor and optimize costs</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-12">
                            <h5>Cloud Provider Landscape</h5>
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Provider</th>
                                            <th>Strengths</th>
                                            <th>Key Services</th>
                                            <th>Market Position</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>AWS</strong></td>
                                            <td>Broadest service portfolio, maturity</td>
                                            <td>EC2, S3, RDS, Lambda, SageMaker</td>
                                            <td>Market leader (~32%)</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Azure</strong></td>
                                            <td>Enterprise integration, hybrid support</td>
                                            <td>VMs, App Service, Cosmos DB, AI Services</td>
                                            <td>Second largest (~23%)</td>
                                        </tr>
                                        <tr>
                                            <td><strong>GCP</strong></td>
                                            <td>Data & AI capabilities, developer-friendly</td>
                                            <td>Compute Engine, BigQuery, Cloud ML</td>
                                            <td>Growing (~11%)</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

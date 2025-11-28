export default function DevOpsPlatformArchitecture() {
    return (
        <div className="pt-4">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title mb-3">DevOps & Platform Architecture</h2>
                    <p className="mb-3">DevOps architecture enables fast, reliable software delivery through automation, collaboration, and infrastructure management. Platform architecture provides self-service capabilities for development teams.</p>

                    <div className="row">
                        <div className="col-md-6">
                            <h5>DevOps Pillars</h5>
                            <ul className="list-group list-group-flush mb-4">
                                <li className="list-group-item"><strong>Infrastructure as Code:</strong> Automation and version control of infrastructure</li>
                                <li className="list-group-item"><strong>Continuous Integration:</strong> Automated build, test, and quality checks</li>
                                <li className="list-group-item"><strong>Continuous Deployment:</strong> Automated release to production</li>
                                <li className="list-group-item"><strong>Monitoring & Observability:</strong> System health and performance visibility</li>
                                <li className="list-group-item"><strong>Collaboration:</strong> Developers and operations working together</li>
                            </ul>

                            <h5>Platform Components</h5>
                            <ul className="list-unstyled mb-4">
                                <li><strong>Container Orchestration:</strong> Kubernetes for managing containerized apps</li>
                                <li><strong>Service Mesh:</strong> Communication between microservices</li>
                                <li><strong>API Gateway:</strong> Single entry point for services</li>
                                <li><strong>Logging & Tracing:</strong> Centralized observability</li>
                                <li><strong>Secrets Management:</strong> Secure credential storage</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h5>DevOps Toolchain</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2"><strong>Version Control:</strong> Git, GitHub, GitLab</li>
                                <li className="mb-2"><strong>Build Automation:</strong> Jenkins, GitLab CI, GitHub Actions</li>
                                <li className="mb-2"><strong>Configuration Management:</strong> Terraform, Ansible, CloudFormation</li>
                                <li className="mb-2"><strong>Container Registry:</strong> Docker Hub, ECR, GCR</li>
                                <li className="mb-2"><strong>Monitoring:</strong> Prometheus, Grafana, DataDog</li>
                                <li className="mb-2"><strong>Incident Management:</strong> PagerDuty, Opsgenie</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-12">
                            <h5>CI/CD Pipeline Architecture</h5>
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Stage</th>
                                            <th>Activities</th>
                                            <th>Tools</th>
                                            <th>Gate</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>Code</strong></td>
                                            <td>Commit, branch, pull request</td>
                                            <td>Git, GitHub, GitLab</td>
                                            <td>Code review approval</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Build</strong></td>
                                            <td>Compile, test, SCA, quality analysis</td>
                                            <td>Maven, Jenkins, SonarQube</td>
                                            <td>Tests pass, quality threshold</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Package</strong></td>
                                            <td>Build container, publish to registry</td>
                                            <td>Docker, ECR, Artifactory</td>
                                            <td>Image scanned for vulnerabilities</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Deploy</strong></td>
                                            <td>Deploy to staging, run integration tests</td>
                                            <td>Kubernetes, Terraform, Helm</td>
                                            <td>Smoke tests pass</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Release</strong></td>
                                            <td>Manual approval, production deployment</td>
                                            <td>CD platforms, GitOps tools</td>
                                            <td>Manual sign-off (if needed)</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6">
                            <h5>Observability Stack (Three Pillars)</h5>
                            <ul className="list-group list-group-flush mb-4">
                                <li className="list-group-item"><strong>Logs:</strong> Detailed system events (ELK, Splunk)</li>
                                <li className="list-group-item"><strong>Metrics:</strong> Quantitative measurements (Prometheus, Grafana)</li>
                                <li className="list-group-item"><strong>Traces:</strong> Request flow across services (Jaeger, Zipkin)</li>
                            </ul>

                            <h5>Key Metrics (RED Method)</h5>
                            <ul className="list-unstyled">
                                <li><strong>Rate:</strong> Requests per second</li>
                                <li><strong>Errors:</strong> Error rate and types</li>
                                <li><strong>Duration:</strong> Latency and response time</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h5>Platform Engineering Best Practices</h5>
                            <ul className="list-group list-group-flush mb-4">
                                <li className="list-group-item">✓ Golden path templates for teams</li>
                                <li className="list-group-item">✓ Self-service deployment capabilities</li>
                                <li className="list-group-item">✓ Clear runbooks for common operations</li>
                                <li className="list-group-item">✓ Progressive rollout (canary, blue-green)</li>
                                <li className="list-group-item">✓ Automated rollback on failures</li>
                                <li className="list-group-item">✓ Cost allocation and optimization</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

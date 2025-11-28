export default function IntegrationArchitecture() {
    return (
        <div className="pt-4">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title mb-3">Integration Architecture</h2>
                    <p className="mb-3">Integration architecture enables different systems, applications, and data sources to communicate and share information seamlessly.</p>

                    <div className="row">
                        <div className="col-md-6">
                            <h5>Integration Patterns</h5>
                            <ul className="list-group list-group-flush mb-4">
                                <li className="list-group-item"><strong>API-First Integration:</strong> RESTful APIs as primary integration mechanism</li>
                                <li className="list-group-item"><strong>Message-Oriented Middleware (MOM):</strong> Asynchronous message passing (RabbitMQ, Kafka)</li>
                                <li className="list-group-item"><strong>Enterprise Service Bus (ESB):</strong> Centralized routing and transformation</li>
                                <li className="list-group-item"><strong>Event-Driven Integration:</strong> Systems react to events in real-time</li>
                                <li className="list-group-item"><strong>Polling Integration:</strong> Systems periodically check for updates</li>
                                <li className="list-group-item"><strong>File-Based Integration:</strong> Legacy batch file exchanges</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h5>Integration Technologies</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2"><strong>API Management:</strong> Kong, Apigee, AWS API Gateway</li>
                                <li className="mb-2"><strong>Message Brokers:</strong> RabbitMQ, Kafka, AWS SQS</li>
                                <li className="mb-2"><strong>ESB Platforms:</strong> MuleSoft, WSO2, Apache Camel</li>
                                <li className="mb-2"><strong>iPaaS Solutions:</strong> Zapier, Workato, Boomi</li>
                                <li className="mb-2"><strong>Webhooks & Callbacks:</strong> Real-time push notifications</li>
                                <li className="mb-2"><strong>RPC Protocols:</strong> gRPC, Apache Thrift for high-performance</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-12">
                            <h5>Integration Scenarios & Solutions</h5>
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Scenario</th>
                                            <th>Synchronization Needs</th>
                                            <th>Recommended Approach</th>
                                            <th>Tools</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>Real-time Orders</strong></td>
                                            <td>Millisecond latency, event-driven</td>
                                            <td>Event streaming with immediate processing</td>
                                            <td>Kafka, Kinesis, Event Hub</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Master Data Sync</strong></td>
                                            <td>Hourly/daily updates, eventual consistency</td>
                                            <td>Batch ETL with transformation</td>
                                            <td>Airflow, dbt, AWS Glue</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Legacy System Integration</strong></td>
                                            <td>Limited API access, file-based</td>
                                            <td>File transfers, adapter layer</td>
                                            <td>MuleSoft, WSO2, custom adapters</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Microservices Communication</strong></td>
                                            <td>Low-latency, high-throughput</td>
                                            <td>Synchronous APIs or async messaging</td>
                                            <td>gRPC, REST, message queues</td>
                                        </tr>
                                        <tr>
                                            <td><strong>SaaS Integration</strong></td>
                                            <td>Multi-tenant, security-first</td>
                                            <td>OAuth, webhooks, API orchestration</td>
                                            <td>Zapier, IFTTT, custom middleware</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6">
                            <h5>API Design Principles</h5>
                            <ul className="list-group list-group-flush mb-4">
                                <li className="list-group-item">✓ RESTful conventions for consistency</li>
                                <li className="list-group-item">✓ Versioning strategy (URL, header, or accept type)</li>
                                <li className="list-group-item">✓ Rate limiting and quotas</li>
                                <li className="list-group-item">✓ Clear error responses and documentation</li>
                                <li className="list-group-item">✓ OpenAPI/Swagger specifications</li>
                                <li className="list-group-item">✓ Security (OAuth 2.0, API keys)</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h5>Integration Best Practices</h5>
                            <ul className="list-group list-group-flush mb-4">
                                <li className="list-group-item">✓ Async where possible to avoid bottlenecks</li>
                                <li className="list-group-item">✓ Implement circuit breakers for resilience</li>
                                <li className="list-group-item">✓ Monitor integration health metrics</li>
                                <li className="list-group-item">✓ Document data contracts and agreements</li>
                                <li className="list-group-item">✓ Test integration thoroughly before production</li>
                                <li className="list-group-item">✓ Plan for graceful degradation and fallbacks</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

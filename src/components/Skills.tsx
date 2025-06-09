export default function Skills() {
    return (
        <section id="education" className="bg-light py-1 mb-3">
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>
                <div className="row">
                    <div className=" col-md-6 col-lg-6 col-xl-4 ">
                        <div className="card p-2 h-100">
                            <h4 className="">Development</h4>
                            <ul className="">
                                <li>- Java 6 - 21, Kotlin, Python, Js</li>
                                <li>- Spring products & Hibernate</li>
                                <li>- JUnit, Mockito, WireMock</li>
                                <li>- Oracle, PostgreSQL, MongoDB</li>
                                <li>- Oracle ADF, BPM, WebLogic</li>
                                <li>- Apache Kafka, Kinesis, RabitMQ</li>
                                <li>- Splunk, Prometheus, Grafana</li>
                                <li>- TDD, DDD, SOLID, Scrum</li>
                                <li>- Elastic search, ELK logs</li>
                                <li>- HTML/CSS/JS/React/Redux</li>
                                <li>- Bootstrap, ChartJs</li>
                            </ul>
                        </div>
                    </div>
                    <div className=" col-md-6 col-lg-6 col-xl-4">
                        <div className="card p-2 h-100">
                            <ul className="px-1">
                                <li className="m-0">
                                    <h5>AWS</h5>
                                </li>
                                <ul className="  mb-1 small">
                                    <li>- EC2, ECS, EKS, ECR, SNS, SQS, CM</li>
                                    <li>- CloudWatch, Rout 53, Cloud Front</li>
                                    <li>- Lambda, API Gateway, DynamoDB</li>
                                    <li>- IAM, Cognito, SDK, CLI</li>
                                    <li>- RDS, DocumentDB, S3</li>
                                </ul>
                                <h5>GCP</h5>
                                <ul className="  mb-1">
                                    <li>- Step Function, BigQuery, Location API</li>
                                </ul>
                                <h5>Azure</h5>
                                <ul>
                                    <li>- Azure SQL Database</li>
                                    <li>- Azure Virtual Machines</li>
                                </ul>
                            </ul>
                        </div>
                    </div>
                    <div className=" col-md-6 col-lg-6 col-xl-4">
                        <div className=" card p-2 h-100">
                            <h4 className="">Architecture</h4>
                            <ul className="">
                                <li>- Monolith & Modular Monolith</li>
                                <li>- Microservices & Event-Driven</li>
                                <li>- Service-Oriented Architecture</li>
                            </ul>
                            <h4 className="">DevOps</h4>
                            <ul className="">
                                <li>- Azure DevOps, Code Build</li>
                                <li>- Gitlab CI/CD, Jenkins</li>
                                <li>- K8s, Docker and Swarm</li>
                                <li>- Git, SVN, Figma, Miro</li>
                                <li>- Gradle, Maven, NPM</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
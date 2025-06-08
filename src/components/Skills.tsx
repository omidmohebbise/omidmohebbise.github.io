export default function Skills() {
    return (
        <section id="skills" className="content">
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>
                <div className="row">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col">
                                <h4 className="bg-light p-2 mb-3">Back-End</h4>
                            </div>
                        </div>
                        <div className="row w-100">
                            <div className="col-sm-6 col-md-6">
                                <ul className="list-with-dash mb-4">
                                    <li>Java</li>
                                    <li>Spring Boot & Hibernate</li>
                                    <li>Spring Security / Data</li>
                                    <li>JUnit 5, Mockito, SeleniumIDE</li>
                                    <li>PostgreSQL, MySQL, Oracle</li>
                                    <li>MongoDB, DynamoDB</li>
                                    <li>Prometheus, Grafana</li>
                                </ul>
                            </div>
                            <div className="col-sm-6 col-md-6">
                                <ul className="list-with-dash mb-4">
                                    <li>Oracle ADF, BPM, WebLogic</li>
                                    <li>Apache Kafka</li>
                                    <li>AWS SNS, SQS, SES</li>
                                    <li>AWS Lambda, API Gateway</li>
                                    <li>AWS SDK, CLI</li>
                                    <li>NodeJS, Express, Jest</li>
                                    <li>Gradle, Maven, Git</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h4 className="bg-light p-2 mb-3">Front-End</h4>
                        <ul className="list-with-dash mb-4">
                            <li>HTML/CSS/JS/React</li>
                            <li>SAAS/Redux</li>
                            <li>Bootstrap 5</li>
                        </ul>
                        <h4 className="bg-light p-2 mb-3">Cloud and Infra</h4>
                        <ul className="list-with-dash mb-4">
                            <li>AWS, Azure. GCP</li>
                            <li>K8s, Docker and Docker Swarm</li>
                            <li>Gitlab CI/CD, Jenkins, Azure Devops</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
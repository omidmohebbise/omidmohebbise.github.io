


export default function Skills() {

    return (
        <section id="skills">
            <div className="container">
                <h2 className="section-title">Technical Skill</h2>
                <div className="row">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col">
                                <h4 className="bg-light p-2">Back-End</h4>
                            </div>
                        </div>
                        <div className="row w-100">
                            <div className="col-sm-6 col-md-6">
                                <ul className="list-with-dash">
                                    <li>Java</li>
                                    <li>Spring Boot & Hibernate</li>
                                    <li>Spring Security / Data</li>
                                    <li>JUnit 5, Mockito, SeleniumIDE</li>
                                    <li>PostgreSQL, MySQL, Oracle</li>
                                    <li>MongoDB, DynamoDB</li>
                                    <li>Prometheus, Grafana</li>
                                </ul>
                            </div>
                            <div className="col-sm-6 col-md-6 ">
                                <ul className="pt-1">
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
                        <h4 className="bg-light p-2">Front-End</h4>
                        <ul>
                            <li>HTML/CSS/JS/React</li>
                            <li>SAAS/Redux</li>
                            <li>Bootstrap 5</li>
                        </ul>
                        <h4 className="bg-light p-2">DevOps</h4>
                        <ul>

                            <li>Gradle, Git</li>
                            <li>Docker and Docker Swarm</li>
                            <li>AWS Cloud Services</li>
                            <li>Gitlab CI/CD, Jenkins</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h4 className="bg-light p-2">Other:</h4>
                        <ul>
                            <li>Good Knowledge of Microservices, SOA, Integration patterns, and Security Principles</li>
                            <li>Hands-On ActiveMQ, Redis, ELK Stack, GraphQL, Quarkus, Kotlin, Android</li>
                            <li>Good Knowledge of TDD, DDD, SOLID, and Agile Principles</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
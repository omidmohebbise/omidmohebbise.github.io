import "./skill.scss";
export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">Technical Skill</h2>
        <div className="row">
          <div className="col-md-8">
            <div className="row">
              <div className="col">
                <h4 className="bg-light p-2">Development</h4>
              </div>
            </div>
            <div className="row w-100">
              <div className="col-sm-6 col-md-6">
                <ul className="custom-bullet-list">
                  <li>
                    <b>Java 6 - 21</b>, Kotlin, Python, Js
                  </li>
                  <li>
                    <b>Spring </b> Boot & Hibernate
                  </li>
                  <li>JUnit, Mockito, WireMock</li>
                  <li>Oracle, PostgreSQL, MongoDB</li>
                  <li>Oracle ADF, BPM, WebLogic</li>
                  <li>Apache Kafka, Kinesis, RabitMQ</li>
                  <li>Splunk, Prometheus, Grafana</li>
                  <li>TDD, DDD, SOLID, Scrum</li>
                  <li>Elastic search, ELK logs</li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-6 ">
                <ul className="pt-1 custom-bullet-list">
                  <li>AWS </li>
                  <div className="small-font-li">
                    - EC2, ECS, EKS, ECR, SNS, SQS, CM{" "}
                  </div>
                  <div className="small-font-li">
                    - CloudWatch, Rout 53, Cloud Front
                  </div>
                  <div className="small-font-li">
                    - Lambda, API Gateway, DynamoDB
                  </div>

                  <div className="small-font-li">- IAM, Cognito, SDK, CLI</div>
                  <div className="small-font-li">- RDS, DocumentDB, S3</div>
                  <li>GCP</li>
                  <div className="small-font-li">
                    - Step Function, BigQuery, Map
                  </div>
                  <li>UI</li>
                  <div className="small-font-li">- HTML/CSS/JS/React/Redux</div>
                  <div className="small-font-li">- Bootstrap, ChartJs</div>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <h4 className="bg-light p-2">Architecture</h4>
            <ul className="custom-bullet-list">
              <li>Monolith & Modular Monolith</li>
              <li>Microservices & Event-Driven</li>
              <li>Service-Oriented Architecture</li>
            </ul>
            <h4 className="bg-light p-2 ">DevOps</h4>
            <ul className="custom-bullet-list">
              <li>Azure DevOps, Code Build</li>
              <li>Gitlab CI/CD, Jenkins</li>
              <li>K8s, Docker and Swarm</li>
              <li>Git, SVN, Figma, Miro</li>
              <li>Gradle, Maven, NPM</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

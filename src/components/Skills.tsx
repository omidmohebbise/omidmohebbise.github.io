const skillGroups = [
    {
        icon: '⚡',
        label: 'Development',
        chipBg:    '#eff6ff',
        chipText:  '#1d4ed8',
        chipBorder:'#bfdbfe',
        skills: [
            'Java 6–21', 'Spring Boot', 'Spring Cloud', 'Hibernate',
            'Kotlin', 'Python', 'JavaScript',
            'JUnit', 'Mockito', 'WireMock',
            'Oracle', 'PostgreSQL', 'MongoDB',
            'Apache Kafka', 'Kinesis', 'RabbitMQ',
            'Splunk', 'Prometheus', 'Grafana', 'Elasticsearch', 'ELK',
            'React', 'Redux', 'Bootstrap',
            'Oracle ADF', 'BPM', 'WebLogic',
        ],
    },
    {
        icon: '☁️',
        label: 'Cloud',
        chipBg:    '#fff7ed',
        chipText:  '#c2410c',
        chipBorder:'#fed7aa',
        skills: [
            'AWS', 'Azure', 'GCP',
            'EC2', 'ECS', 'EKS', 'ECR', 'Lambda', 'API Gateway',
            'DynamoDB', 'RDS', 'DocumentDB', 'S3',
            'SNS', 'SQS', 'CloudWatch', 'Route 53', 'CloudFront',
            'IAM', 'Cognito', 'SDK', 'CLI',
            'BigQuery', 'Location API',
            'Azure SQL', 'Azure VMs',
        ],
    },
    {
        icon: '🏗️',
        label: 'Architecture & DevOps',
        chipBg:    '#f5f3ff',
        chipText:  '#6d28d9',
        chipBorder:'#ddd6fe',
        skills: [
            'Microservices', 'Event-Driven', 'SOA', 'Modular Monolith',
            'TDD', 'DDD', 'SOLID', 'Scrum',
            'Kubernetes', 'Docker', 'Docker Swarm',
            'Azure DevOps', 'GitLab CI/CD', 'Jenkins', 'CodeBuild',
            'Git', 'SVN', 'Gradle', 'Maven', 'NPM',
            'Figma', 'Miro',
        ],
    },
];

export default function Skills() {
    return (
        <section id="skills" style={{ background: '#f0f7ff', padding: '3.5rem 0' }}>
            <div className="container">
                <p className="section-label">Expertise</p>
                <h2 className="section-title">Technical Skills</h2>
                <hr className="section-rule" />

                <div className="row g-4">
                    {skillGroups.map(({ icon, label, chipBg, chipText, chipBorder, skills }) => (
                        <div className="col-md-4" key={label}>
                            <div className="card h-100" style={{ background: '#ffffff', borderRadius: 14 }}>
                                <div className="card-body p-4">
                                    <div className="d-flex align-items-center gap-2 mb-3">
                                        <span style={{ fontSize: '1.25rem', lineHeight: 1 }}>{icon}</span>
                                        <h4 style={{
                                            fontSize: '0.9rem',
                                            fontWeight: 700,
                                            color: '#0f172a',
                                            margin: 0,
                                            letterSpacing: '-0.01em',
                                        }}>
                                            {label}
                                        </h4>
                                    </div>
                                    <div className="d-flex flex-wrap gap-2">
                                        {skills.map(skill => (
                                            <span
                                                key={skill}
                                                className="skill-chip"
                                                style={{
                                                    background: chipBg,
                                                    color: chipText,
                                                    border: `1px solid ${chipBorder}`,
                                                }}
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

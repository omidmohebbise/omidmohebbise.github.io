"use client"

import { useState } from 'react'

const PageStates = {
    Overview: 1,
    RoleOfData: 2,
    DatabasesStorage: 3,
    DataProcessing: 4,
    Architecture: 5
}

export default function DataPage() {
    const [pageState, setPageState] = useState(PageStates.Overview)

    const getOverview = () => {
        return (
            <>
                <div className='row mt-4'>
                    <div className="col-md-6 mb-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5>Data-Driven Decision Making</h5>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><strong>Strategic Advantage:</strong> Organizations leverage data to make informed decisions.</li>
                                    <li className="list-group-item"><strong>Competitive Edge:</strong> Data insights drive innovation and efficiency.</li>
                                    <li className="list-group-item"><strong>Risk Mitigation:</strong> Data analysis helps identify and manage risks proactively.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 mb-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5>The Data Lifecycle</h5>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><strong>Collection:</strong> Gather data from various sources (systems, sensors, users).</li>
                                    <li className="list-group-item"><strong>Processing:</strong> Clean, transform, and aggregate data for analysis.</li>
                                    <li className="list-group-item"><strong>Storage:</strong> Persist data in databases, data lakes, or warehouses.</li>
                                    <li className="list-group-item"><strong>Analysis:</strong> Extract insights and patterns from data.</li>
                                    <li className="list-group-item"><strong>Visualization:</strong> Present findings through dashboards and reports.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 mb-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5>Role of Data in Organizations</h5>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><strong>Business Functions:</strong> Marketing, Sales, Operations, Finance all depend on data.</li>
                                    <li className="list-group-item"><strong>Cultural Shift:</strong> Building a data-driven culture requires organizational alignment.</li>
                                    <li className="list-group-item"><strong>Governance:</strong> Data quality, security, and compliance are paramount.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 mb-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5>Modern Data Challenges</h5>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><strong>Volume:</strong> Managing increasing amounts of data (Big Data).</li>
                                    <li className="list-group-item"><strong>Velocity:</strong> Processing data in real-time.</li>
                                    <li className="list-group-item"><strong>Variety:</strong> Handling structured and unstructured data.</li>
                                    <li className="list-group-item"><strong>Veracity:</strong> Ensuring data quality and accuracy.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    const getRoleOfData = () => {
        return (
            <>
                <div className='row mt-4'>
                    <div className="col-md-6 mb-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5>Why Data Matters</h5>
                                <p className="mb-2"><strong>Business Value:</strong></p>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Enables informed decision-making</li>
                                    <li className="list-group-item">Powers personalization and customer experience</li>
                                    <li className="list-group-item">Automates processes and improves efficiency</li>
                                    <li className="list-group-item">Drives innovation and new business models</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 mb-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5>Data-Driven Culture</h5>
                                <p className="mb-2"><strong>What It Means:</strong></p>
                                <ul className="list-group list-group-flush mb-3">
                                    <li className="list-group-item">Decisions based on evidence rather than intuition</li>
                                    <li className="list-group-item">Shared responsibility for data quality</li>
                                    <li className="list-group-item">Continuous learning and improvement</li>
                                </ul>
                                <p className="mb-2"><strong>Roles &amp; Responsibilities:</strong></p>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><strong>Business:</strong> Define requirements and use insights</li>
                                    <li className="list-group-item"><strong>IT:</strong> Build infrastructure and manage platforms</li>
                                    <li className="list-group-item"><strong>Leadership:</strong> Champion culture and allocate resources</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 mb-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5>Data in Business Functions</h5>
                                <p className="mb-2"><strong>Marketing:</strong></p>
                                <ul className="list-group list-group-flush mb-3">
                                    <li className="list-group-item">Customer analytics and segmentation</li>
                                    <li className="list-group-item">Campaign performance tracking</li>
                                </ul>
                                <p className="mb-2"><strong>Operations:</strong></p>
                                <ul className="list-group list-group-flush mb-3">
                                    <li className="list-group-item">Process optimization and monitoring</li>
                                    <li className="list-group-item">Supply chain visibility</li>
                                </ul>
                                <p className="mb-2"><strong>Finance:</strong></p>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Forecasting and budgeting</li>
                                    <li className="list-group-item">Risk analysis and fraud detection</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 mb-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5>Data Governance &amp; Ethics</h5>
                                <p className="mb-2"><strong>Data Governance:</strong></p>
                                <ul className="list-group list-group-flush mb-3">
                                    <li className="list-group-item">Data ownership and accountability</li>
                                    <li className="list-group-item">Quality standards and validation</li>
                                    <li className="list-group-item">Metadata management and lineage</li>
                                </ul>
                                <p className="mb-2"><strong>Privacy &amp; Compliance:</strong></p>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">GDPR, CCPA, and regional regulations</li>
                                    <li className="list-group-item">Ethical use of data</li>
                                    <li className="list-group-item">Security and encryption standards</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    const getDatabasesStorage = () => {
        return (
            <>
                <div className='row mt-4'>
                    <div className="col-md-6 mb-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5>Databases vs Storage</h5>
                                <p className="mb-2"><strong>Databases:</strong></p>
                                <ul className="list-group list-group-flush mb-3">
                                    <li className="list-group-item">Structured data with defined schemas</li>
                                    <li className="list-group-item">Support ACID transactions</li>
                                    <li className="list-group-item">Enable complex queries (SQL/NoSQL)</li>
                                    <li className="list-group-item">Optimized for transactional operations</li>
                                </ul>
                                <p className="mb-2"><strong>Storage:</strong></p>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Raw files, objects, or archives</li>
                                    <li className="list-group-item">Backups and long-term retention</li>
                                    <li className="list-group-item">Data lakes for semi-structured data</li>
                                    <li className="list-group-item">Optimized for capacity and cost</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 mb-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5>Types of Databases</h5>
                                <p className="mb-2"><strong>Relational (SQL):</strong></p>
                                <ul className="list-group list-group-flush mb-3">
                                    <li className="list-group-item">PostgreSQL, MySQL, Oracle, SQL Server</li>
                                    <li className="list-group-item">Structured tables with relationships</li>
                                </ul>
                                <p className="mb-2"><strong>NoSQL:</strong></p>
                                <ul className="list-group list-group-flush mb-3">
                                    <li className="list-group-item"><strong>Key-Value:</strong> Redis, DynamoDB</li>
                                    <li className="list-group-item"><strong>Document:</strong> MongoDB, Firestore</li>
                                    <li className="list-group-item"><strong>Column-Family:</strong> HBase, Cassandra</li>
                                    <li className="list-group-item"><strong>Graph:</strong> Neo4j, ArangoDB</li>
                                </ul>
                                <p className="mb-2"><strong>In-Memory:</strong></p>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Redis, Memcached</li>
                                    <li className="list-group-item">Ultra-fast access for caching</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 mb-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5>Storage Options</h5>
                                <p className="mb-2"><strong>File Storage (NAS):</strong></p>
                                <ul className="list-group list-group-flush mb-3">
                                    <li className="list-group-item">Network-attached storage for shared files</li>
                                </ul>
                                <p className="mb-2"><strong>Object Storage:</strong></p>
                                <ul className="list-group list-group-flush mb-3">
                                    <li className="list-group-item">AWS S3, Azure Blob, Google Cloud Storage</li>
                                    <li className="list-group-item">Highly scalable and cost-effective</li>
                                </ul>
                                <p className="mb-2"><strong>Data Lakes:</strong></p>
                                <ul className="list-group list-group-flush mb-3">
                                    <li className="list-group-item">Repository for raw, semi-structured data</li>
                                    <li className="list-group-item">Foundation for analytics and ML</li>
                                </ul>
                                <p className="mb-2"><strong>Data Warehouses:</strong></p>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Analytics-optimized storage (Snowflake, Redshift)</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 mb-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5>Choosing the Right Option</h5>
                                <p className="mb-2"><strong>OLTP vs OLAP:</strong></p>
                                <ul className="list-group list-group-flush mb-3">
                                    <li className="list-group-item"><strong>OLTP:</strong> Online Transaction Processing (real-time writes)</li>
                                    <li className="list-group-item"><strong>OLAP:</strong> Online Analytical Processing (complex queries)</li>
                                </ul>
                                <p className="mb-2"><strong>Decision Factors:</strong></p>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Scalability requirements</li>
                                    <li className="list-group-item">Consistency vs Availability (CAP theorem)</li>
                                    <li className="list-group-item">Cost and performance trade-offs</li>
                                    <li className="list-group-item">Data structure and query patterns</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    const getDataProcessing = () => {
        return (
            <>
                <div className='row mt-4'>
                    <div className="col-md-6 mb-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5>Batch Processing</h5>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><strong>Definition:</strong> Process large volumes of data at scheduled intervals</li>
                                    <li className="list-group-item"><strong>Use Cases:</strong> Daily reports, nightly jobs, bulk transformations</li>
                                    <li className="list-group-item"><strong>Tools:</strong> Apache Spark, Hadoop, AWS Batch</li>
                                    <li className="list-group-item"><strong>Advantages:</strong> Cost-effective, handles large datasets</li>
                                    <li className="list-group-item"><strong>Disadvantages:</strong> Latency, not suitable for real-time</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 mb-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5>Real-Time / Streaming Processing</h5>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><strong>Definition:</strong> Process events as they happen in real-time</li>
                                    <li className="list-group-item"><strong>Use Cases:</strong> Fraud detection, real-time dashboards, IoT analytics</li>
                                    <li className="list-group-item"><strong>Tools:</strong> Apache Kafka, Apache Flink, AWS Kinesis</li>
                                    <li className="list-group-item"><strong>Advantages:</strong> Immediate insights, low latency</li>
                                    <li className="list-group-item"><strong>Disadvantages:</strong> Complex infrastructure, higher cost</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 mb-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5>ETL &amp; ELT</h5>
                                <p className="mb-2"><strong>ETL (Extract, Transform, Load):</strong></p>
                                <ul className="list-group list-group-flush mb-3">
                                    <li className="list-group-item">Transform data before loading to warehouse</li>
                                    <li className="list-group-item">Traditional approach, slower initial load</li>
                                </ul>
                                <p className="mb-2"><strong>ELT (Extract, Load, Transform):</strong></p>
                                <ul className="list-group list-group-flush mb-3">
                                    <li className="list-group-item">Load raw data first, transform in warehouse</li>
                                    <li className="list-group-item">Modern approach, leverage warehouse compute power</li>
                                </ul>
                                <p className="mb-0"><strong>Tools:</strong> Apache NiFi, Talend, Informatica</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 mb-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5>Data Integration</h5>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><strong>APIs:</strong> Service-to-service integration</li>
                                    <li className="list-group-item"><strong>Message Queues:</strong> Asynchronous integration (RabbitMQ, Kafka)</li>
                                    <li className="list-group-item"><strong>File-Based:</strong> Batch file transfers</li>
                                    <li className="list-group-item"><strong>CDC (Change Data Capture):</strong> Track data changes for real-time sync</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 mb-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5>Analytics &amp; BI</h5>
                                <p className="mb-2"><strong>Analytics Types:</strong></p>
                                <ul className="list-group list-group-flush mb-3">
                                    <li className="list-group-item"><strong>Descriptive:</strong> What happened? (historical analysis)</li>
                                    <li className="list-group-item"><strong>Diagnostic:</strong> Why did it happen? (root cause analysis)</li>
                                    <li className="list-group-item"><strong>Predictive:</strong> What will happen? (forecasting)</li>
                                    <li className="list-group-item"><strong>Prescriptive:</strong> What should we do? (recommendations)</li>
                                </ul>
                                <p className="mb-0"><strong>Tools:</strong> Tableau, Power BI, Looker</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    const getArchitecture = () => {
        return (
            <>
                <div className='row mt-4'>
                    <div className="col-md-6 mb-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5>Data Architecture Overview</h5>
                                <p className="mb-2"><strong>Definition:</strong> Blueprint for organizing data systems and flows</p>
                                <p className="mb-2"><strong>Layers:</strong></p>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><strong>Conceptual:</strong> Business-level requirements and entities</li>
                                    <li className="list-group-item"><strong>Logical:</strong> Data models and relationships</li>
                                    <li className="list-group-item"><strong>Physical:</strong> Actual implementation details</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 mb-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5>Reference Architectures</h5>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><strong>Data Warehouse:</strong> Centralized analytics repository</li>
                                    <li className="list-group-item"><strong>Data Lake:</strong> Raw data repository for diverse workloads</li>
                                    <li className="list-group-item"><strong>Lakehouse:</strong> Hybrid approach combining lake and warehouse benefits</li>
                                    <li className="list-group-item"><strong>Event-Driven:</strong> Real-time event streaming architecture</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 mb-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5>Core Components</h5>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><strong>Source Systems:</strong> Operational databases, APIs, sensors</li>
                                    <li className="list-group-item"><strong>Ingestion:</strong> ETL/ELT, streaming pipelines</li>
                                    <li className="list-group-item"><strong>Storage Layers:</strong> Raw (bronze), curated (silver), serving (gold)</li>
                                    <li className="list-group-item"><strong>Processing:</strong> Spark, SQL engines, ML frameworks</li>
                                    <li className="list-group-item"><strong>Consumption:</strong> BI tools, APIs, ML models</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 mb-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5>Data Management Practices</h5>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><strong>Data Quality:</strong> Validation rules, profiling, monitoring</li>
                                    <li className="list-group-item"><strong>Metadata Management:</strong> Catalogs, lineage tracking</li>
                                    <li className="list-group-item"><strong>Master Data Management (MDM):</strong> Single source of truth</li>
                                    <li className="list-group-item"><strong>Data Lineage:</strong> Track data movement and transformations</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 mb-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5>Modern Trends</h5>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><strong>Data Mesh:</strong> Decentralized data ownership and architecture</li>
                                    <li className="list-group-item"><strong>Data Fabric:</strong> Unified data access across distributed systems</li>
                                    <li className="list-group-item"><strong>Cloud-Native:</strong> Serverless, auto-scaling platforms (Snowflake, BigQuery)</li>
                                    <li className="list-group-item"><strong>DataOps:</strong> DevOps practices applied to data pipelines</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className="container py-5">
            <p className="section-label">Data</p>
            <h1 className="section-title">Data Landscape</h1>
            <hr className="section-rule" />
            <div className='row m-0 mb-2'>
                {Object.keys(PageStates)
                    .map(x => (
                        <div className="col-auto p-1" key={PageStates[x as keyof typeof PageStates]}>
                            <button
                                style={pageState === PageStates[x as keyof typeof PageStates]
                                    ? { background: '#2563eb', color: 'white', borderRadius: '8px', padding: '0.5rem 0.85rem', cursor: 'pointer', border: 'none', fontWeight: 600 }
                                    : { background: 'transparent', color: '#475569', padding: '0.5rem 0.85rem', cursor: 'pointer', border: 'none', borderBottom: '2px solid #e2e8f0', fontWeight: 500 }}
                                onClick={() => setPageState(PageStates[x as keyof typeof PageStates])}
                            >{x}</button>
                        </div>
                    ))}
            </div>
            {pageState === PageStates.Overview && getOverview()}
            {pageState === PageStates.RoleOfData && getRoleOfData()}
            {pageState === PageStates.DatabasesStorage && getDatabasesStorage()}
            {pageState === PageStates.DataProcessing && getDataProcessing()}
            {pageState === PageStates.Architecture && getArchitecture()}
        </div>
    )
}

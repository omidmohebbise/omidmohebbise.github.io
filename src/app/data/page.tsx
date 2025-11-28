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
                <div className='pt-2 row'>
                    <h3 className="mb-4 mt-3">Data Landscape Overview</h3>

                    <div className="my-5 col-6">
                        <h2>Data-Driven Decision Making</h2>
                        <ul>
                            <li><strong>Strategic Advantage:</strong> Organizations leverage data to make informed decisions.</li>
                            <li><strong>Competitive Edge:</strong> Data insights drive innovation and efficiency.</li>
                            <li><strong>Risk Mitigation:</strong> Data analysis helps identify and manage risks proactively.</li>
                        </ul>
                    </div>

                    <div className="my-5 col-6">
                        <h2>The Data Lifecycle</h2>
                        <ul>
                            <li><strong>Collection:</strong> Gather data from various sources (systems, sensors, users).</li>
                            <li><strong>Processing:</strong> Clean, transform, and aggregate data for analysis.</li>
                            <li><strong>Storage:</strong> Persist data in databases, data lakes, or warehouses.</li>
                            <li><strong>Analysis:</strong> Extract insights and patterns from data.</li>
                            <li><strong>Visualization:</strong> Present findings through dashboards and reports.</li>
                        </ul>
                    </div>

                    <div className="my-5 col-6">
                        <h2>Role of Data in Organizations</h2>
                        <ul>
                            <li><strong>Business Functions:</strong> Marketing, Sales, Operations, Finance all depend on data.</li>
                            <li><strong>Cultural Shift:</strong> Building a data-driven culture requires organizational alignment.</li>
                            <li><strong>Governance:</strong> Data quality, security, and compliance are paramount.</li>
                        </ul>
                    </div>

                    <div className="my-5 col-6">
                        <h2>Modern Data Challenges</h2>
                        <ul>
                            <li><strong>Volume:</strong> Managing increasing amounts of data (Big Data).</li>
                            <li><strong>Velocity:</strong> Processing data in real-time.</li>
                            <li><strong>Variety:</strong> Handling structured and unstructured data.</li>
                            <li><strong>Veracity:</strong> Ensuring data quality and accuracy.</li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }

    const getRoleOfData = () => {
        return (
            <>
                <div className='pt-2 row'>
                    <h3 className="mb-4 mt-3">Role of Data in the Organization</h3>

                    <div className="my-5 col-6">
                        <h2>Why Data Matters</h2>
                        <p><strong>Business Value:</strong></p>
                        <ul>
                            <li>Enables informed decision-making</li>
                            <li>Powers personalization and customer experience</li>
                            <li>Automates processes and improves efficiency</li>
                            <li>Drives innovation and new business models</li>
                        </ul>
                    </div>

                    <div className="my-5 col-6">
                        <h2>Data-Driven Culture</h2>
                        <p><strong>What It Means:</strong></p>
                        <ul>
                            <li>Decisions based on evidence rather than intuition</li>
                            <li>Shared responsibility for data quality</li>
                            <li>Continuous learning and improvement</li>
                        </ul>
                        <p><strong>Roles & Responsibilities:</strong></p>
                        <ul>
                            <li><strong>Business:</strong> Define requirements and use insights</li>
                            <li><strong>IT:</strong> Build infrastructure and manage platforms</li>
                            <li><strong>Leadership:</strong> Champion culture and allocate resources</li>
                        </ul>
                    </div>

                    <div className="my-5 col-6">
                        <h2>Data in Business Functions</h2>
                        <p><strong>Marketing:</strong></p>
                        <ul>
                            <li>Customer analytics and segmentation</li>
                            <li>Campaign performance tracking</li>
                        </ul>
                        <p><strong>Operations:</strong></p>
                        <ul>
                            <li>Process optimization and monitoring</li>
                            <li>Supply chain visibility</li>
                        </ul>
                        <p><strong>Finance:</strong></p>
                        <ul>
                            <li>Forecasting and budgeting</li>
                            <li>Risk analysis and fraud detection</li>
                        </ul>
                    </div>

                    <div className="my-5 col-6">
                        <h2>Data Governance & Ethics</h2>
                        <p><strong>Data Governance:</strong></p>
                        <ul>
                            <li>Data ownership and accountability</li>
                            <li>Quality standards and validation</li>
                            <li>Metadata management and lineage</li>
                        </ul>
                        <p><strong>Privacy & Compliance:</strong></p>
                        <ul>
                            <li>GDPR, CCPA, and regional regulations</li>
                            <li>Ethical use of data</li>
                            <li>Security and encryption standards</li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }

    const getDatabasesStorage = () => {
        return (
            <>
                <div className='pt-2 row'>
                    <h3 className="mb-4 mt-3">Databases & Storage</h3>

                    <div className="my-5 col-6">
                        <h2>Databases vs Storage</h2>
                        <p><strong>Databases:</strong></p>
                        <ul>
                            <li>Structured data with defined schemas</li>
                            <li>Support ACID transactions</li>
                            <li>Enable complex queries (SQL/NoSQL)</li>
                            <li>Optimized for transactional operations</li>
                        </ul>
                        <p><strong>Storage:</strong></p>
                        <ul>
                            <li>Raw files, objects, or archives</li>
                            <li>Backups and long-term retention</li>
                            <li>Data lakes for semi-structured data</li>
                            <li>Optimized for capacity and cost</li>
                        </ul>
                    </div>

                    <div className="my-5 col-6">
                        <h2>Types of Databases</h2>
                        <p><strong>Relational (SQL):</strong></p>
                        <ul>
                            <li>PostgreSQL, MySQL, Oracle, SQL Server</li>
                            <li>Structured tables with relationships</li>
                        </ul>
                        <p><strong>NoSQL:</strong></p>
                        <ul>
                            <li><strong>Key-Value:</strong> Redis, DynamoDB</li>
                            <li><strong>Document:</strong> MongoDB, Firestore</li>
                            <li><strong>Column-Family:</strong> HBase, Cassandra</li>
                            <li><strong>Graph:</strong> Neo4j, ArangoDB</li>
                        </ul>
                        <p><strong>In-Memory:</strong></p>
                        <ul>
                            <li>Redis, Memcached</li>
                            <li>Ultra-fast access for caching</li>
                        </ul>
                    </div>

                    <div className="my-5 col-6">
                        <h2>Storage Options</h2>
                        <p><strong>File Storage (NAS):</strong></p>
                        <ul>
                            <li>Network-attached storage for shared files</li>
                        </ul>
                        <p><strong>Object Storage:</strong></p>
                        <ul>
                            <li>AWS S3, Azure Blob, Google Cloud Storage</li>
                            <li>Highly scalable and cost-effective</li>
                        </ul>
                        <p><strong>Data Lakes:</strong></p>
                        <ul>
                            <li>Repository for raw, semi-structured data</li>
                            <li>Foundation for analytics and ML</li>
                        </ul>
                        <p><strong>Data Warehouses:</strong></p>
                        <ul>
                            <li>Analytics-optimized storage (Snowflake, Redshift)</li>
                        </ul>
                    </div>

                    <div className="my-5 col-6">
                        <h2>Choosing the Right Option</h2>
                        <p><strong>OLTP vs OLAP:</strong></p>
                        <ul>
                            <li><strong>OLTP:</strong> Online Transaction Processing (real-time writes)</li>
                            <li><strong>OLAP:</strong> Online Analytical Processing (complex queries)</li>
                        </ul>
                        <p><strong>Decision Factors:</strong></p>
                        <ul>
                            <li>Scalability requirements</li>
                            <li>Consistency vs Availability (CAP theorem)</li>
                            <li>Cost and performance trade-offs</li>
                            <li>Data structure and query patterns</li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }

    const getDataProcessing = () => {
        return (
            <>
                <div className='pt-2 row'>
                    <h3 className="mb-4 mt-3">Data Processing</h3>

                    <div className="my-5 col-6">
                        <h2>Batch Processing</h2>
                        <ul>
                            <li><strong>Definition:</strong> Process large volumes of data at scheduled intervals</li>
                            <li><strong>Use Cases:</strong> Daily reports, nightly jobs, bulk transformations</li>
                            <li><strong>Tools:</strong> Apache Spark, Hadoop, AWS Batch</li>
                            <li><strong>Advantages:</strong> Cost-effective, handles large datasets</li>
                            <li><strong>Disadvantages:</strong> Latency, not suitable for real-time</li>
                        </ul>
                    </div>

                    <div className="my-5 col-6">
                        <h2>Real-Time / Streaming Processing</h2>
                        <ul>
                            <li><strong>Definition:</strong> Process events as they happen in real-time</li>
                            <li><strong>Use Cases:</strong> Fraud detection, real-time dashboards, IoT analytics</li>
                            <li><strong>Tools:</strong> Apache Kafka, Apache Flink, AWS Kinesis</li>
                            <li><strong>Advantages:</strong> Immediate insights, low latency</li>
                            <li><strong>Disadvantages:</strong> Complex infrastructure, higher cost</li>
                        </ul>
                    </div>

                    <div className="my-5 col-6">
                        <h2>ETL & ELT</h2>
                        <p><strong>ETL (Extract, Transform, Load):</strong></p>
                        <ul>
                            <li>Transform data before loading to warehouse</li>
                            <li>Traditional approach, slower initial load</li>
                        </ul>
                        <p><strong>ELT (Extract, Load, Transform):</strong></p>
                        <ul>
                            <li>Load raw data first, transform in warehouse</li>
                            <li>Modern approach, leverage warehouse compute power</li>
                        </ul>
                        <p><strong>Tools:</strong> Apache NiFi, Talend, Informatica</p>
                    </div>

                    <div className="my-5 col-6">
                        <h2>Data Integration</h2>
                        <ul>
                            <li><strong>APIs:</strong> Service-to-service integration</li>
                            <li><strong>Message Queues:</strong> Asynchronous integration (RabbitMQ, Kafka)</li>
                            <li><strong>File-Based:</strong> Batch file transfers</li>
                            <li><strong>CDC (Change Data Capture):</strong> Track data changes for real-time sync</li>
                        </ul>
                    </div>

                    <div className="my-5 col-6">
                        <h2>Analytics & BI</h2>
                        <p><strong>Analytics Types:</strong></p>
                        <ul>
                            <li><strong>Descriptive:</strong> What happened? (historical analysis)</li>
                            <li><strong>Diagnostic:</strong> Why did it happen? (root cause analysis)</li>
                            <li><strong>Predictive:</strong> What will happen? (forecasting)</li>
                            <li><strong>Prescriptive:</strong> What should we do? (recommendations)</li>
                        </ul>
                        <p><strong>Tools:</strong> Tableau, Power BI, Looker</p>
                    </div>
                </div>
            </>
        )
    }

    const getArchitecture = () => {
        return (
            <>
                <div className='pt-2 row'>
                    <h3 className="mb-4 mt-3">Data Architecture</h3>

                    <div className="my-5 col-6">
                        <h2>Data Architecture Overview</h2>
                        <p><strong>Definition:</strong> Blueprint for organizing data systems and flows</p>
                        <p><strong>Layers:</strong></p>
                        <ul>
                            <li><strong>Conceptual:</strong> Business-level requirements and entities</li>
                            <li><strong>Logical:</strong> Data models and relationships</li>
                            <li><strong>Physical:</strong> Actual implementation details</li>
                        </ul>
                    </div>

                    <div className="my-5 col-6">
                        <h2>Reference Architectures</h2>
                        <p><strong>Data Warehouse:</strong> Centralized analytics repository</p>
                        <p><strong>Data Lake:</strong> Raw data repository for diverse workloads</p>
                        <p><strong>Lakehouse:</strong> Hybrid approach combining lake and warehouse benefits</p>
                        <p><strong>Event-Driven:</strong> Real-time event streaming architecture</p>
                    </div>

                    <div className="my-5 col-6">
                        <h2>Core Components</h2>
                        <ul>
                            <li><strong>Source Systems:</strong> Operational databases, APIs, sensors</li>
                            <li><strong>Ingestion:</strong> ETL/ELT, streaming pipelines</li>
                            <li><strong>Storage Layers:</strong> Raw (bronze), curated (silver), serving (gold)</li>
                            <li><strong>Processing:</strong> Spark, SQL engines, ML frameworks</li>
                            <li><strong>Consumption:</strong> BI tools, APIs, ML models</li>
                        </ul>
                    </div>

                    <div className="my-5 col-6">
                        <h2>Data Management Practices</h2>
                        <ul>
                            <li><strong>Data Quality:</strong> Validation rules, profiling, monitoring</li>
                            <li><strong>Metadata Management:</strong> Catalogs, lineage tracking</li>
                            <li><strong>Master Data Management (MDM):</strong> Single source of truth</li>
                            <li><strong>Data Lineage:</strong> Track data movement and transformations</li>
                        </ul>
                    </div>

                    <div className="my-5 col-6">
                        <h2>Modern Trends</h2>
                        <p><strong>Data Mesh:</strong> Decentralized data ownership and architecture</p>
                        <p><strong>Data Fabric:</strong> Unified data access across distributed systems</p>
                        <p><strong>Cloud-Native:</strong> Serverless, auto-scaling platforms (Snowflake, BigQuery)</p>
                        <p><strong>DataOps:</strong> DevOps practices applied to data pipelines</p>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className="">
            <div className='row m-0'>
                {Object.keys(PageStates)
                    .map(x => <div className="text-center col-auto p-1" key={PageStates[x]}>
                        <div role="button" className={pageState === PageStates[x] ? 'bg-light p-3' : "p-3 border-bottom"} onClick={() => setPageState(PageStates[x])}>{x}</div>
                    </div>)}
            </div>
            {pageState === PageStates.Overview && getOverview()}
            {pageState === PageStates.RoleOfData && getRoleOfData()}
            {pageState === PageStates.DatabasesStorage && getDatabasesStorage()}
            {pageState === PageStates.DataProcessing && getDataProcessing()}
            {pageState === PageStates.Architecture && getArchitecture()}
        </div>
    )
}

export default function ModernTrendsPage() {
    return (
        <div className="container py-5">
            <p className="section-label">Data</p>
            <h1 className="section-title">Modern Trends</h1>
            <hr className="section-rule" />

            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <h5>Data Mesh</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Decentralized ownership of data products by domain teams</li>
                                <li className="list-group-item">Each domain provides discoverable, interoperable data products</li>
                                <li className="list-group-item">Platform team provides shared infrastructure and governance guardrails</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h5>Cloud-Native Data Platforms</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Serverless warehouses (BigQuery, Snowflake)</li>
                                <li className="list-group-item">Managed streaming (Kinesis, Confluent Cloud)</li>
                                <li className="list-group-item">Elastic compute and managed storage for scale</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6">
                            <h5>Data Fabric</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Unified data access layer across distributed systems</li>
                                <li className="list-group-item">Focus on integration and governance</li>
                                <li className="list-group-item">Often implemented with metadata-driven tools</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h5>Other Trends</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">DataOps and pipeline testing</li>
                                <li className="list-group-item">AI/ML integration into analytic workflows</li>
                                <li className="list-group-item">Governance-as-code</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

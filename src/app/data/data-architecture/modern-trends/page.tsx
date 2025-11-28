export default function ModernTrendsPage() {
    return (
        <div className='pt-2'>
            <h2 className="mb-4 mt-3">Modern Trends</h2>

            <div className="row">
                <div className="col-md-6">
                    <h3>Data Mesh</h3>
                    <ul>
                        <li>Decentralized ownership of data products by domain teams</li>
                        <li>Each domain provides discoverable, interoperable data products</li>
                        <li>Platform team provides shared infrastructure and governance guardrails</li>
                    </ul>

                    <h3>Data Fabric</h3>
                    <ul>
                        <li>Unified data access layer across distributed systems</li>
                        <li>Focus on integration and governance</li>
                        <li>Often implemented with metadata-driven tools</li>
                    </ul>
                </div>

                <div className="col-md-6">
                    <h3>Cloud-Native Data Platforms</h3>
                    <ul>
                        <li>Serverless warehouses (BigQuery, Snowflake)</li>
                        <li>Managed streaming (Kinesis, Confluent Cloud)</li>
                        <li>Elastic compute and managed storage for scale</li>
                    </ul>

                    <h3>Other Trends</h3>
                    <ul>
                        <li>DataOps and pipeline testing</li>
                        <li>AI/ML integration into analytic workflows</li>
                        <li>Governance-as-code</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

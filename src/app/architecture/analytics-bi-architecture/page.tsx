export default function AnalyticsBIArchitecture() {
    return (
        <div className="pt-4">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title mb-3">Analytics & BI Architecture</h2>
                    <p className="mb-3">Analytics & BI architecture enables organizations to extract insights from data. It spans data collection, processing, storage, and visualization.</p>

                    <div className="row">
                        <div className="col-md-6">
                            <h5>Analytics Maturity Levels</h5>
                            <ul className="list-group list-group-flush mb-4">
                                <li className="list-group-item"><strong>Descriptive:</strong> What happened? (dashboards, reports)</li>
                                <li className="list-group-item"><strong>Diagnostic:</strong> Why did it happen? (drill-down, root cause)</li>
                                <li className="list-group-item"><strong>Predictive:</strong> What will happen? (forecasting, ML models)</li>
                                <li className="list-group-item"><strong>Prescriptive:</strong> What should we do? (recommendations, optimization)</li>
                            </ul>

                            <h5>BI Stack Components</h5>
                            <ul className="list-unstyled mb-4">
                                <li><strong>Data Warehouse:</strong> Snowflake, BigQuery, Redshift</li>
                                <li><strong>ETL/ELT:</strong> Talend, dbt, Fivetran</li>
                                <li><strong>BI Tools:</strong> Tableau, Power BI, Looker</li>
                                <li><strong>OLAP Engines:</strong> Druid, Presto</li>
                                <li><strong>Analytics Databases:</strong> ClickHouse, Apache Druid</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h5>Key BI Concepts</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2"><strong>Data Mart:</strong> Subject-specific data subset for specific users</li>
                                <li className="mb-2"><strong>Dimension Tables:</strong> Reference data (dates, products, regions)</li>
                                <li className="mb-2"><strong>Fact Tables:</strong> Quantitative business events (sales, clicks)</li>
                                <li className="mb-2"><strong>Star Schema:</strong> Denormalized schema for fast queries</li>
                                <li className="mb-2"><strong>Aggregations:</strong> Pre-computed summaries for performance</li>
                                <li className="mb-2"><strong>Semantic Layer:</strong> Business-friendly data definitions</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-12">
                            <h5>Modern Analytics Architecture Patterns</h5>
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Pattern</th>
                                            <th>Architecture</th>
                                            <th>Use Case</th>
                                            <th>Pros</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>Traditional DW</strong></td>
                                            <td>ETL → Data Warehouse → BI Tools</td>
                                            <td>Structured business analytics</td>
                                            <td>Proven, optimized, governed</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Data Lake</strong></td>
                                            <td>Ingest → Store → Process → Consume</td>
                                            <td>Diverse data, ML ready</td>
                                            <td>Flexible, scalable, cost-effective</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Lakehouse</strong></td>
                                            <td>Data Lake + DW capabilities (Delta, Iceberg)</td>
                                            <td>Both analytics and ML</td>
                                            <td>Unified, ACID transactions, openness</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Real-time Analytics</strong></td>
                                            <td>Stream Processing → Real-time DB → Dashboards</td>
                                            <td>Live dashboards, alerts</td>
                                            <td>Immediate insights, operational decisions</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6">
                            <h5>Dashboard Design Best Practices</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">✓ Focus on actionable insights, not vanity metrics</li>
                                <li className="list-group-item">✓ Clear hierarchy and visual organization</li>
                                <li className="list-group-item">✓ Consistent color schemes and labeling</li>
                                <li className="list-group-item">✓ Drill-down capability for detailed exploration</li>
                                <li className="list-group-item">✓ Real-time or near real-time data updates</li>
                                <li className="list-group-item">✓ Mobile-responsive design</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h5>Analytics Team Responsibilities</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">📊 <strong>Analytics Engineers:</strong> Build data pipelines and models</li>
                                <li className="list-group-item">📈 <strong>Data Analysts:</strong> Create reports and dashboards</li>
                                <li className="list-group-item">🤖 <strong>Data Scientists:</strong> Build predictive/prescriptive models</li>
                                <li className="list-group-item">🏗️ <strong>Data Architects:</strong> Design infrastructure and data models</li>
                                <li className="list-group-item">📋 <strong>BI Developers:</strong> Implement semantic layer and BI tools</li>
                                <li className="list-group-item">🛡️ <strong>Data Stewards:</strong> Govern data quality and access</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-12">
                            <h5>Analytics Use Cases</h5>
                            <ul className="list-unstyled mb-3">
                                <li className="mb-2"><strong>Business Performance:</strong> Revenue, profitability, growth tracking</li>
                                <li className="mb-2"><strong>Customer Analytics:</strong> Segmentation, lifetime value, churn prediction</li>
                                <li className="mb-2"><strong>Marketing Attribution:</strong> Campaign ROI, channel effectiveness</li>
                                <li className="mb-2"><strong>Operational Efficiency:</strong> Cost analysis, process optimization</li>
                                <li className="mb-2"><strong>Fraud Detection:</strong> Anomaly detection, risk scoring</li>
                                <li className="mb-2"><strong>Demand Forecasting:</strong> Inventory optimization, resource planning</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

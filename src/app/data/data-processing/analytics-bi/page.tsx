export default function AnalyticsBIPage() {
    return (
        <div className="container py-5">
            <p className="section-label">Data</p>
            <h1 className="section-title">Analytics &amp; Business Intelligence</h1>
            <hr className="section-rule" />

            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <h5>Descriptive Analytics</h5>
                            <p className="mb-2"><strong>Question: What Happened?</strong></p>

                            <h6 className="mt-3">Focus</h6>
                            <ul className="list-unstyled mb-3">
                                <li className="mb-1">Historical analysis of past events</li>
                                <li className="mb-1">Summarize and aggregate data</li>
                                <li className="mb-0">Answer &quot;what&quot; questions</li>
                            </ul>

                            <h6>Techniques</h6>
                            <ul className="list-group list-group-flush mb-3">
                                <li className="list-group-item"><strong>Aggregations:</strong> Sums, counts, averages</li>
                                <li className="list-group-item"><strong>Summaries:</strong> Reports and dashboards</li>
                                <li className="list-group-item"><strong>Visualizations:</strong> Charts, graphs, KPIs</li>
                                <li className="list-group-item"><strong>Drill-down:</strong> Explore data at different levels</li>
                            </ul>

                            <h6>Use Cases</h6>
                            <ul className="list-unstyled mb-3">
                                <li className="mb-1">Sales reports and performance summaries</li>
                                <li className="mb-1">Customer demographics and segments</li>
                                <li className="mb-1">Operational metrics and KPIs</li>
                                <li className="mb-0">Historical comparisons (YoY, QoQ)</li>
                            </ul>

                            <h6>Tools</h6>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-1">Tableau, Power BI, Looker</li>
                                <li className="mb-0">Spreadsheets and SQL queries</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h5>Diagnostic Analytics</h5>
                            <p className="mb-2"><strong>Question: Why Did It Happen?</strong></p>

                            <h6 className="mt-3">Focus</h6>
                            <ul className="list-unstyled mb-3">
                                <li className="mb-1">Understand root causes of outcomes</li>
                                <li className="mb-1">Drill into anomalies and exceptions</li>
                                <li className="mb-0">Answer &quot;why&quot; questions</li>
                            </ul>

                            <h6>Techniques</h6>
                            <ul className="list-group list-group-flush mb-3">
                                <li className="list-group-item"><strong>Root Cause Analysis:</strong> Trace back to causes</li>
                                <li className="list-group-item"><strong>Cohort Analysis:</strong> Compare groups over time</li>
                                <li className="list-group-item"><strong>Correlation Analysis:</strong> Identify relationships</li>
                                <li className="list-group-item"><strong>Drill-through:</strong> Explore underlying details</li>
                            </ul>

                            <h6>Use Cases</h6>
                            <ul className="list-unstyled mb-3">
                                <li className="mb-1">Why did sales drop this month?</li>
                                <li className="mb-1">Which customer segments are churning?</li>
                                <li className="mb-1">What caused the performance issue?</li>
                                <li className="mb-0">Which marketing campaigns work best?</li>
                            </ul>

                            <h6>Tools</h6>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-1">Advanced BI tools with analytics</li>
                                <li className="mb-1">SQL analysis and data exploration</li>
                                <li className="mb-0">Statistical software</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6">
                            <h5>Predictive Analytics</h5>
                            <p className="mb-2"><strong>Question: What Will Happen?</strong></p>

                            <h6 className="mt-3">Focus</h6>
                            <ul className="list-unstyled mb-3">
                                <li className="mb-1">Forecast future outcomes using historical data</li>
                                <li className="mb-1">Probability estimates for events</li>
                                <li className="mb-0">Answer &quot;what will&quot; questions</li>
                            </ul>

                            <h6>Techniques</h6>
                            <ul className="list-group list-group-flush mb-3">
                                <li className="list-group-item"><strong>Time Series Forecasting:</strong> Predict trends</li>
                                <li className="list-group-item"><strong>Regression:</strong> Predict continuous values</li>
                                <li className="list-group-item"><strong>Classification:</strong> Predict categories/classes</li>
                                <li className="list-group-item"><strong>Clustering:</strong> Identify patterns and segments</li>
                            </ul>

                            <h6>Use Cases</h6>
                            <ul className="list-unstyled mb-3">
                                <li className="mb-1">Revenue forecasting</li>
                                <li className="mb-1">Customer churn prediction</li>
                                <li className="mb-1">Demand forecasting</li>
                                <li className="mb-0">Lead scoring (sales)</li>
                            </ul>

                            <h6>Tools</h6>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-1">Machine learning frameworks (Python, R)</li>
                                <li className="mb-1">AutoML platforms</li>
                                <li className="mb-0">Advanced BI tools with ML integration</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h5>Prescriptive Analytics</h5>
                            <p className="mb-2"><strong>Question: What Should We Do?</strong></p>

                            <h6 className="mt-3">Focus</h6>
                            <ul className="list-unstyled mb-3">
                                <li className="mb-1">Recommend actions and decisions</li>
                                <li className="mb-1">Optimize outcomes based on predictions</li>
                                <li className="mb-0">Answer &quot;what should&quot; questions</li>
                            </ul>

                            <h6>Techniques</h6>
                            <ul className="list-group list-group-flush mb-3">
                                <li className="list-group-item"><strong>Optimization:</strong> Find best solution</li>
                                <li className="list-group-item"><strong>Simulation:</strong> Test scenarios</li>
                                <li className="list-group-item"><strong>Decision Trees:</strong> Rule-based recommendations</li>
                                <li className="list-group-item"><strong>Reinforcement Learning:</strong> Learn optimal strategies</li>
                            </ul>

                            <h6>Use Cases</h6>
                            <ul className="list-unstyled mb-3">
                                <li className="mb-1">Pricing optimization</li>
                                <li className="mb-1">Inventory management</li>
                                <li className="mb-1">Route optimization (logistics)</li>
                                <li className="mb-0">Resource allocation</li>
                            </ul>

                            <h6>Tools</h6>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-1">Optimization software</li>
                                <li className="mb-1">Advanced ML for reinforcement learning</li>
                                <li className="mb-0">Simulation platforms</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6">
                            <h5>Business Intelligence Platforms</h5>

                            <h6>Popular BI Tools</h6>
                            <ul className="list-group list-group-flush mb-3">
                                <li className="list-group-item"><strong>Tableau:</strong> Industry leader, excellent visualization</li>
                                <li className="list-group-item"><strong>Power BI:</strong> Microsoft ecosystem, cost-effective</li>
                                <li className="list-group-item"><strong>Looker:</strong> Modern, embedded BI, part of Google Cloud</li>
                                <li className="list-group-item"><strong>Metabase:</strong> Open-source, simple self-service BI</li>
                                <li className="list-group-item"><strong>Qlik Sense:</strong> Associative analytics engine</li>
                            </ul>

                            <h6>Key Features</h6>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-1">Data visualization and exploration</li>
                                <li className="mb-1">Self-service analytics for business users</li>
                                <li className="mb-1">Dashboard creation and sharing</li>
                                <li className="mb-1">Real-time monitoring</li>
                                <li className="mb-0">Embedded analytics in applications</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h5>Modern BI Trends</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><strong>Self-Service BI:</strong> Empower business users</li>
                                <li className="list-group-item"><strong>Data Democratization:</strong> Access for all levels</li>
                                <li className="list-group-item"><strong>Cloud BI:</strong> Scalable, easy maintenance</li>
                                <li className="list-group-item"><strong>Embedded Analytics:</strong> BI within applications</li>
                                <li className="list-group-item"><strong>AI-Driven Insights:</strong> Automated pattern discovery</li>
                                <li className="list-group-item"><strong>Real-Time Dashboards:</strong> Live data updates</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-12">
                            <h5>Analytics Maturity Levels</h5>
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Level</th>
                                            <th>Analytics Type</th>
                                            <th>Focus</th>
                                            <th>Complexity</th>
                                            <th>ROI</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>1</strong></td>
                                            <td>Descriptive</td>
                                            <td>What happened?</td>
                                            <td>Low</td>
                                            <td>Quick wins</td>
                                        </tr>
                                        <tr>
                                            <td><strong>2</strong></td>
                                            <td>Diagnostic</td>
                                            <td>Why did it happen?</td>
                                            <td>Medium</td>
                                            <td>Understanding</td>
                                        </tr>
                                        <tr>
                                            <td><strong>3</strong></td>
                                            <td>Predictive</td>
                                            <td>What will happen?</td>
                                            <td>High</td>
                                            <td>Long-term value</td>
                                        </tr>
                                        <tr>
                                            <td><strong>4</strong></td>
                                            <td>Prescriptive</td>
                                            <td>What should we do?</td>
                                            <td>Very High</td>
                                            <td>Competitive advantage</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

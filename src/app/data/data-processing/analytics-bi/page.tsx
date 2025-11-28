export default function AnalyticsBIPage() {
    return (
        <div className='pt-2'>
            <h2 className="mb-4 mt-3">Analytics & Business Intelligence</h2>

            <div className="row">
                <div className="col-md-6">
                    <h3>Descriptive Analytics</h3>
                    <p><strong>Question: What Happened?</strong></p>

                    <h4>Focus</h4>
                    <ul>
                        <li>Historical analysis of past events</li>
                        <li>Summarize and aggregate data</li>
                        <li>Answer "what" questions</li>
                    </ul>

                    <h4>Techniques</h4>
                    <ul>
                        <li><strong>Aggregations:</strong> Sums, counts, averages</li>
                        <li><strong>Summaries:</strong> Reports and dashboards</li>
                        <li><strong>Visualizations:</strong> Charts, graphs, KPIs</li>
                        <li><strong>Drill-down:</strong> Explore data at different levels</li>
                    </ul>

                    <h4>Use Cases</h4>
                    <ul>
                        <li>Sales reports and performance summaries</li>
                        <li>Customer demographics and segments</li>
                        <li>Operational metrics and KPIs</li>
                        <li>Historical comparisons (YoY, QoQ)</li>
                    </ul>

                    <h4>Tools</h4>
                    <ul>
                        <li>Tableau, Power BI, Looker</li>
                        <li>Spreadsheets and SQL queries</li>
                    </ul>
                </div>

                <div className="col-md-6">
                    <h3>Diagnostic Analytics</h3>
                    <p><strong>Question: Why Did It Happen?</strong></p>

                    <h4>Focus</h4>
                    <ul>
                        <li>Understand root causes of outcomes</li>
                        <li>Drill into anomalies and exceptions</li>
                        <li>Answer "why" questions</li>
                    </ul>

                    <h4>Techniques</h4>
                    <ul>
                        <li><strong>Root Cause Analysis:</strong> Trace back to causes</li>
                        <li><strong>Cohort Analysis:</strong> Compare groups over time</li>
                        <li><strong>Correlation Analysis:</strong> Identify relationships</li>
                        <li><strong>Drill-through:</strong> Explore underlying details</li>
                    </ul>

                    <h4>Use Cases</h4>
                    <ul>
                        <li>Why did sales drop this month?</li>
                        <li>Which customer segments are churning?</li>
                        <li>What caused the performance issue?</li>
                        <li>Which marketing campaigns work best?</li>
                    </ul>

                    <h4>Tools</h4>
                    <ul>
                        <li>Advanced BI tools with analytics</li>
                        <li>SQL analysis and data exploration</li>
                        <li>Statistical software</li>
                    </ul>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-md-6">
                    <h3>Predictive Analytics</h3>
                    <p><strong>Question: What Will Happen?</strong></p>

                    <h4>Focus</h4>
                    <ul>
                        <li>Forecast future outcomes using historical data</li>
                        <li>Probability estimates for events</li>
                        <li>Answer "what will" questions</li>
                    </ul>

                    <h4>Techniques</h4>
                    <ul>
                        <li><strong>Time Series Forecasting:</strong> Predict trends</li>
                        <li><strong>Regression:</strong> Predict continuous values</li>
                        <li><strong>Classification:</strong> Predict categories/classes</li>
                        <li><strong>Clustering:</strong> Identify patterns and segments</li>
                    </ul>

                    <h4>Use Cases</h4>
                    <ul>
                        <li>Revenue forecasting</li>
                        <li>Customer churn prediction</li>
                        <li>Demand forecasting</li>
                        <li>Lead scoring (sales)</li>
                    </ul>

                    <h4>Tools</h4>
                    <ul>
                        <li>Machine learning frameworks (Python, R)</li>
                        <li>AutoML platforms</li>
                        <li>Advanced BI tools with ML integration</li>
                    </ul>
                </div>

                <div className="col-md-6">
                    <h3>Prescriptive Analytics</h3>
                    <p><strong>Question: What Should We Do?</strong></p>

                    <h4>Focus</h4>
                    <ul>
                        <li>Recommend actions and decisions</li>
                        <li>Optimize outcomes based on predictions</li>
                        <li>Answer "what should" questions</li>
                    </ul>

                    <h4>Techniques</h4>
                    <ul>
                        <li><strong>Optimization:</strong> Find best solution</li>
                        <li><strong>Simulation:</strong> Test scenarios</li>
                        <li><strong>Decision Trees:</strong> Rule-based recommendations</li>
                        <li><strong>Reinforcement Learning:</strong> Learn optimal strategies</li>
                    </ul>

                    <h4>Use Cases</h4>
                    <ul>
                        <li>Pricing optimization</li>
                        <li>Inventory management</li>
                        <li>Route optimization (logistics)</li>
                        <li>Resource allocation</li>
                    </ul>

                    <h4>Tools</h4>
                    <ul>
                        <li>Optimization software</li>
                        <li>Advanced ML for reinforcement learning</li>
                        <li>Simulation platforms</li>
                    </ul>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-md-6">
                    <h3>Business Intelligence Platforms</h3>

                    <h4>Popular BI Tools</h4>
                    <ul>
                        <li><strong>Tableau:</strong> Industry leader, excellent visualization</li>
                        <li><strong>Power BI:</strong> Microsoft ecosystem, cost-effective</li>
                        <li><strong>Looker:</strong> Modern, embedded BI, part of Google Cloud</li>
                        <li><strong>Metabase:</strong> Open-source, simple self-service BI</li>
                        <li><strong>Qlik Sense:</strong> Associative analytics engine</li>
                    </ul>

                    <h4>Key Features</h4>
                    <ul>
                        <li>Data visualization and exploration</li>
                        <li>Self-service analytics for business users</li>
                        <li>Dashboard creation and sharing</li>
                        <li>Real-time monitoring</li>
                        <li>Embedded analytics in applications</li>
                    </ul>
                </div>

                <div className="col-md-6">
                    <h3>Modern BI Trends</h3>
                    <ul>
                        <li><strong>Self-Service BI:</strong> Empower business users</li>
                        <li><strong>Data Democratization:</strong> Access for all levels</li>
                        <li><strong>Cloud BI:</strong> Scalable, easy maintenance</li>
                        <li><strong>Embedded Analytics:</strong> BI within applications</li>
                        <li><strong>AI-Driven Insights:</strong> Automated pattern discovery</li>
                        <li><strong>Real-Time Dashboards:</strong> Live data updates</li>
                    </ul>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-12">
                    <h3>Analytics Maturity Levels</h3>
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
    )
}

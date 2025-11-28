export default function DataInBusinessFunctionsPage() {
    return (
        <div className="pt-4">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title mb-3">Data in Business Functions</h2>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <h5>Marketing</h5>
                                <h6 className="mb-1">Customer Analytics & Segmentation</h6>
                                <ul className="list-group list-group-flush mb-2">
                                    <li className="list-group-item">Segment customers by demographics, behavior, and value</li>
                                    <li className="list-group-item">Create buyer personas based on data patterns</li>
                                    <li className="list-group-item">Identify high-value customers for retention focus</li>
                                    <li className="list-group-item">Discover churn patterns and risks</li>
                                </ul>
                                <h6 className="mb-1">Campaign Performance Tracking</h6>
                                <ul className="list-unstyled">
                                    <li>Measure ROI for each marketing channel</li>
                                    <li>A/B test messaging, creative, and offers</li>
                                    <li>Track customer journey across touchpoints</li>
                                    <li>Optimize marketing spend allocation</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="mb-3">
                                <h5>Sales</h5>
                                <h6 className="mb-1">Pipeline Analytics</h6>
                                <ul className="list-group list-group-flush mb-2">
                                    <li className="list-group-item">Predict deal closure probability</li>
                                    <li className="list-group-item">Identify bottlenecks in sales process</li>
                                    <li className="list-group-item">Forecast revenue with accuracy</li>
                                    <li className="list-group-item">Track sales rep performance metrics</li>
                                </ul>
                                <h6 className="mb-1">Customer Intelligence</h6>
                                <ul className="list-unstyled">
                                    <li>Identify cross-sell and upsell opportunities</li>
                                    <li>Recommend best sales approach per customer</li>
                                    <li>Track competitive win/loss analysis</li>
                                    <li>Optimize pricing strategies</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6">
                            <h5>Operations</h5>
                            <h6 className="mb-1">Process Optimization</h6>
                            <ul className="list-group list-group-flush mb-2">
                                <li className="list-group-item">Monitor and optimize process cycle times</li>
                                <li className="list-group-item">Identify bottlenecks and inefficiencies</li>
                                <li className="list-group-item">Track quality metrics and defect rates</li>
                                <li className="list-group-item">Improve resource utilization and capacity</li>
                            </ul>
                            <h6 className="mb-1">Supply Chain Visibility</h6>
                            <ul>
                                <li>Real-time inventory tracking</li>
                                <li>Demand forecasting for inventory planning</li>
                                <li>Supplier performance monitoring</li>
                                <li>Logistics optimization and route planning</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h5>Finance</h5>
                            <h6 className="mb-1">Forecasting & Budgeting</h6>
                            <ul className="list-group list-group-flush mb-2">
                                <li className="list-group-item">Revenue forecasting with historical data</li>
                                <li className="list-group-item">Cost analysis and budget variance tracking</li>
                                <li className="list-group-item">Cash flow projections</li>
                                <li className="list-group-item">Scenario analysis for planning</li>
                            </ul>
                            <h6 className="mb-1">Risk Analysis & Fraud Detection</h6>
                            <ul>
                                <li>Credit risk assessment</li>
                                <li>Anomaly detection for unusual transactions</li>
                                <li>Regulatory compliance monitoring</li>
                                <li>Financial statement auditing efficiency</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6">
                            <h5>Human Resources</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Employee retention prediction and churn analysis</li>
                                <li className="list-group-item">Hiring effectiveness metrics</li>
                                <li className="list-group-item">Performance prediction and potential identification</li>
                                <li className="list-group-item">Compensation benchmarking</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h5>Customer Service</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Customer satisfaction tracking</li>
                                <li className="list-group-item">Issue resolution time analysis</li>
                                <li className="list-group-item">Agent performance metrics</li>
                                <li className="list-group-item">Self-service effectiveness measurement</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

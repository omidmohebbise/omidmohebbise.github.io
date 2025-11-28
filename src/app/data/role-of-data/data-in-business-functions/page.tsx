export default function DataInBusinessFunctionsPage() {
    return (
        <div className='pt-2'>
            <h2 className="mb-4 mt-3">Data in Business Functions</h2>

            <div className="row">
                <div className="col-md-6">
                    <h3>Marketing</h3>
                    <p><strong>Customer Analytics & Segmentation:</strong></p>
                    <ul>
                        <li>Segment customers by demographics, behavior, and value</li>
                        <li>Create buyer personas based on data patterns</li>
                        <li>Identify high-value customers for retention focus</li>
                        <li>Discover churn patterns and risks</li>
                    </ul>
                    <p><strong>Campaign Performance Tracking:</strong></p>
                    <ul>
                        <li>Measure ROI for each marketing channel</li>
                        <li>A/B test messaging, creative, and offers</li>
                        <li>Track customer journey across touchpoints</li>
                        <li>Optimize marketing spend allocation</li>
                    </ul>
                </div>

                <div className="col-md-6">
                    <h3>Sales</h3>
                    <p><strong>Pipeline Analytics:</strong></p>
                    <ul>
                        <li>Predict deal closure probability</li>
                        <li>Identify bottlenecks in sales process</li>
                        <li>Forecast revenue with accuracy</li>
                        <li>Track sales rep performance metrics</li>
                    </ul>
                    <p><strong>Customer Intelligence:</strong></p>
                    <ul>
                        <li>Identify cross-sell and upsell opportunities</li>
                        <li>Recommend best sales approach per customer</li>
                        <li>Track competitive win/loss analysis</li>
                        <li>Optimize pricing strategies</li>
                    </ul>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-md-6">
                    <h3>Operations</h3>
                    <p><strong>Process Optimization:</strong></p>
                    <ul>
                        <li>Monitor and optimize process cycle times</li>
                        <li>Identify bottlenecks and inefficiencies</li>
                        <li>Track quality metrics and defect rates</li>
                        <li>Improve resource utilization and capacity</li>
                    </ul>
                    <p><strong>Supply Chain Visibility:</strong></p>
                    <ul>
                        <li>Real-time inventory tracking</li>
                        <li>Demand forecasting for inventory planning</li>
                        <li>Supplier performance monitoring</li>
                        <li>Logistics optimization and route planning</li>
                    </ul>
                </div>

                <div className="col-md-6">
                    <h3>Finance</h3>
                    <p><strong>Forecasting & Budgeting:</strong></p>
                    <ul>
                        <li>Revenue forecasting with historical data</li>
                        <li>Cost analysis and budget variance tracking</li>
                        <li>Cash flow projections</li>
                        <li>Scenario analysis for planning</li>
                    </ul>
                    <p><strong>Risk Analysis & Fraud Detection:</strong></p>
                    <ul>
                        <li>Credit risk assessment</li>
                        <li>Anomaly detection for unusual transactions</li>
                        <li>Regulatory compliance monitoring</li>
                        <li>Financial statement auditing efficiency</li>
                    </ul>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-md-6">
                    <h3>Human Resources</h3>
                    <p><strong>Talent Analytics:</strong></p>
                    <ul>
                        <li>Employee retention prediction and churn analysis</li>
                        <li>Hiring effectiveness metrics</li>
                        <li>Performance prediction and potential identification</li>
                        <li>Compensation benchmarking</li>
                    </ul>
                </div>

                <div className="col-md-6">
                    <h3>Customer Service</h3>
                    <p><strong>Service Quality Metrics:</strong></p>
                    <ul>
                        <li>Customer satisfaction tracking</li>
                        <li>Issue resolution time analysis</li>
                        <li>Agent performance metrics</li>
                        <li>Self-service effectiveness measurement</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

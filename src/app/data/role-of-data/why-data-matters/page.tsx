export default function WhyDataMattersPage() {
    return (
        <div className="pt-4">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title mb-3">Why Data Matters</h2>

                    <div className="row">
                        <div className="col-md-6">
                            <h5 className="mb-3">Business Value of Data</h5>
                            <ul className="list-group list-group-flush mb-3">
                                <li className="list-group-item"><strong>Informed Decision-Making:</strong> Replace gut feelings with evidence-based choices, reducing risk and improving outcomes.</li>
                                <li className="list-group-item"><strong>Personalization:</strong> Understand customer preferences to deliver tailored experiences, increasing engagement and loyalty.</li>
                                <li className="list-group-item"><strong>Automation:</strong> Use data insights to automate processes, reducing manual work and human error.</li>
                                <li className="list-group-item"><strong>Cost Optimization:</strong> Identify inefficiencies and optimization opportunities across operations.</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h5 className="mb-3">Real-World Examples</h5>
                            <ul className="list-group list-group-flush mb-3">
                                <li className="list-group-item"><strong>Decision-Making:</strong> Retailers use sales data to optimize inventory levels, preventing stockouts and overstock situations.</li>
                                <li className="list-group-item"><strong>Personalization:</strong> E-commerce platforms use browsing history and purchase data to recommend products, increasing conversion rates.</li>
                                <li className="list-group-item"><strong>Automation:</strong> Banks use data patterns to detect fraudulent transactions automatically, protecting customers.</li>
                                <li className="list-group-item"><strong>Innovation:</strong> Companies analyze usage patterns to develop new features that meet real customer needs.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6">
                            <h5 className="mb-2">Competitive Advantage</h5>
                            <ul className="list-unstyled">
                                <li><span className="badge bg-primary me-2">Market</span> First-mover insights into trends</li>
                                <li><span className="badge bg-success me-2">Efficiency</span> Data-driven organizations operate more efficiently</li>
                                <li><span className="badge bg-info me-2">Retention</span> Personalized experiences increase lifetime value</li>
                                <li><span className="badge bg-warning text-dark me-2">Innovation</span> Faster, accurate product development cycles</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h5 className="mb-2">Risk Mitigation</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><strong>Fraud Detection:</strong> Patterns reveal suspicious activities early</li>
                                <li className="list-group-item"><strong>Compliance:</strong> Governance ensures regulatory adherence</li>
                                <li className="list-group-item"><strong>Predictive Maintenance:</strong> Identify equipment failures before they occur</li>
                                <li className="list-group-item"><strong>Market Risk:</strong> Forecast demand and supply chain disruptions</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

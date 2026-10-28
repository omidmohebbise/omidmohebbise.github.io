import NormalExplorer from '@/components/math/NormalExplorer';

export default function ProbabilityStatisticsPage() {
    return (
        <div className="container py-5">
            <p className="section-label">Math</p>
            <h1 className="section-title">Probability & Statistics</h1>
            <hr className="section-rule" />

            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h5>Normal Distribution Explorer</h5>
                    <NormalExplorer />
                </div>
            </div>

            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <div className="row">
                    <div className="col-md-6 mb-4">
                        <h5>Probability</h5>
                        <ul className="list-group list-group-flush mb-3">
                            <li className="list-group-item"><strong>Sample space & events:</strong> all possible outcomes and subsets of them</li>
                            <li className="list-group-item"><strong> Conditional probability:</strong> P(A|B), the chance of A given B</li>
                            <li className="list-group-item"><strong> Bayes' theorem:</strong> updates beliefs given new evidence</li>
                            <li className="list-group-item"><strong> Random variables:</strong> numeric outcomes of random processes</li>
                        </ul>
                    </div>
                    <div className="col-md-6 mb-4">
                        <h5>Distributions</h5>
                        <ul className="list-group list-group-flush mb-3">
                            <li className="list-group-item"><strong>Normal:</strong> bell curve defined by mean and standard deviation</li>
                            <li className="list-group-item"><strong> Binomial:</strong> number of successes in n independent trials</li>
                            <li className="list-group-item"><strong> Poisson:</strong> counts of events in a fixed interval</li>
                        </ul>
                    </div>
                    <div className="col-md-6 mb-4">
                        <h5>Statistics</h5>
                        <ul className="list-group list-group-flush mb-3">
                            <li className="list-group-item"><strong>Descriptive:</strong> mean, median, variance, percentiles</li>
                            <li className="list-group-item"><strong> Inference:</strong> estimate population properties from samples</li>
                            <li className="list-group-item"><strong> Hypothesis testing:</strong> p-values and confidence intervals</li>
                            <li className="list-group-item"><strong> Regression:</strong> model relationships between variables</li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

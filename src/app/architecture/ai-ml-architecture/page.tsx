export default function AIMLArchitecture() {
    return (
        <div className="pt-4">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title mb-3">AI/ML Architecture</h2>
                    <p className="mb-3">AI/ML architecture supports the complete machine learning lifecycle: from data preparation through model training, deployment, and continuous monitoring.</p>

                    <div className="row">
                        <div className="col-md-6">
                            <h5>ML Pipeline Stages</h5>
                            <ul className="list-group list-group-flush mb-4">
                                <li className="list-group-item"><strong>Data Collection:</strong> Gather raw data from various sources</li>
                                <li className="list-group-item"><strong>Data Preparation:</strong> Cleaning, transformation, feature engineering</li>
                                <li className="list-group-item"><strong>Model Training:</strong> Fit models on historical data</li>
                                <li className="list-group-item"><strong>Model Evaluation:</strong> Validation and testing</li>
                                <li className="list-group-item"><strong>Model Deployment:</strong> Production serving</li>
                                <li className="list-group-item"><strong>Monitoring & Retraining:</strong> Performance tracking and updates</li>
                            </ul>

                            <h5>ML Frameworks & Tools</h5>
                            <ul className="list-unstyled mb-4">
                                <li><strong>ML Frameworks:</strong> TensorFlow, PyTorch, scikit-learn</li>
                                <li><strong>Feature Stores:</strong> Tecton, Feast, Hopsworks</li>
                                <li><strong>ML Orchestration:</strong> Airflow, Kubeflow, MLflow</li>
                                <li><strong>Model Serving:</strong> TensorFlow Serving, Seldon Core, KServe</li>
                                <li><strong>AutoML:</strong> H2O, Auto-sklearn, Google AutoML</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h5>ML System Components</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2"><strong>Data Pipelines:</strong> ETL/ELT for ML-ready data</li>
                                <li className="mb-2"><strong>Feature Store:</strong> Centralized feature repository</li>
                                <li className="mb-2"><strong>Model Registry:</strong> Version control for models</li>
                                <li className="mb-2"><strong>Model Training:</strong> Compute infrastructure (GPUs, TPUs)</li>
                                <li className="mb-2"><strong>Model Serving:</strong> Online/offline prediction service</li>
                                <li className="mb-2"><strong>Monitoring:</strong> Track data drift and model performance</li>
                            </ul>

                            <h5>Deployment Patterns</h5>
                            <ul className="list-unstyled">
                                <li><strong>Batch:</strong> Periodic predictions (nightly scoring)</li>
                                <li><strong>Real-time:</strong> Low-latency online predictions</li>
                                <li><strong>Embedded:</strong> Model on device (edge AI)</li>
                                <li><strong>Scheduled:</strong> Cron-triggered predictions</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-12">
                            <h5>ML Lifecycle Management</h5>
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Phase</th>
                                            <th>Activities</th>
                                            <th>Key Metrics</th>
                                            <th>Challenges</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>Experimentation</strong></td>
                                            <td>Data exploration, feature engineering, model selection</td>
                                            <td>Accuracy, precision, recall</td>
                                            <td>Data quality, feature importance</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Production</strong></td>
                                            <td>Deployment, online serving, monitoring</td>
                                            <td>Latency, throughput, business impact</td>
                                            <td>Data drift, model degradation</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Maintenance</strong></td>
                                            <td>Retraining, drift detection, versioning</td>
                                            <td>Model performance, refresh frequency</td>
                                            <td>Cost of retraining, automation</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6">
                            <h5>Common ML Use Cases</h5>
                            <ul className="list-group list-group-flush mb-4">
                                <li className="list-group-item"><strong>Classification:</strong> Churn prediction, fraud detection</li>
                                <li className="list-group-item"><strong>Regression:</strong> Price prediction, demand forecasting</li>
                                <li className="list-group-item"><strong>Clustering:</strong> Customer segmentation, anomaly detection</li>
                                <li className="list-group-item"><strong>NLP:</strong> Sentiment analysis, chatbots, machine translation</li>
                                <li className="list-group-item"><strong>Computer Vision:</strong> Image classification, object detection</li>
                                <li className="list-group-item"><strong>Recommender:</strong> Product/content recommendations</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h5>MLOps Best Practices</h5>
                            <ul className="list-group list-group-flush mb-4">
                                <li className="list-group-item">✓ Version control for code, data, models</li>
                                <li className="list-group-item">✓ Reproducible experiment tracking</li>
                                <li className="list-group-item">✓ Automated testing and validation</li>
                                <li className="list-group-item">✓ CI/CD for model deployment</li>
                                <li className="list-group-item">✓ Monitoring data drift and model performance</li>
                                <li className="list-group-item">✓ Automated retraining pipelines</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-12">
                            <h5>Data Drift and Model Degradation</h5>
                            <p className="mb-2"><strong>Data Drift:</strong> When input data distribution changes, models perform worse.</p>
                            <ul className="list-unstyled mb-3">
                                <li>→ Monitor feature distributions over time</li>
                                <li>→ Set up alerts for significant deviations</li>
                                <li>→ Retrain when drift detected</li>
                            </ul>

                            <p className="mb-2"><strong>Model Drift:</strong> Model predictions become less accurate over time.</p>
                            <ul className="list-unstyled mb-3">
                                <li>→ Compare predictions against ground truth</li>
                                <li>→ Track metrics (accuracy, AUC, RMSE)</li>
                                <li>→ Schedule periodic retraining</li>
                            </ul>

                            <h5>Responsible AI Considerations</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">✓ Fairness: Detect and mitigate bias in predictions</li>
                                <li className="list-group-item">✓ Explainability: Make model decisions interpretable</li>
                                <li className="list-group-item">✓ Privacy: Protect sensitive data in training</li>
                                <li className="list-group-item">✓ Robustness: Handle adversarial examples</li>
                                <li className="list-group-item">✓ Governance: Track model lineage and compliance</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

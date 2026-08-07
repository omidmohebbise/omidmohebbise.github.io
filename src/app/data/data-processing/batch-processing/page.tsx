export default function BatchProcessingPage() {
    return (
        <div className="container py-5">
            <p className="section-label">Data</p>
            <h1 className="section-title">Batch Processing</h1>
            <hr className="section-rule" />

            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <h5>Definition &amp; Characteristics</h5>
                            <p className="mb-2"><strong>Batch Processing:</strong> Process large volumes of data at scheduled intervals</p>

                            <h6 className="mt-3">Key Traits</h6>
                            <ul className="list-group list-group-flush mb-3">
                                <li className="list-group-item"><strong>Scheduled Execution:</strong> Runs at predetermined times (nightly, weekly)</li>
                                <li className="list-group-item"><strong>High Latency:</strong> Data not available immediately after collection</li>
                                <li className="list-group-item"><strong>High Throughput:</strong> Process massive volumes efficiently</li>
                                <li className="list-group-item"><strong>Cost-Efficient:</strong> Utilizes resources optimally during off-peak hours</li>
                                <li className="list-group-item"><strong>Stateless:</strong> Each batch run is independent</li>
                            </ul>

                            <h6>Processing Flow</h6>
                            <ol className="list-group list-group-numbered list-group-flush">
                                <li className="list-group-item">Collect data from various sources</li>
                                <li className="list-group-item">Extract and validate</li>
                                <li className="list-group-item">Transform and enrich</li>
                                <li className="list-group-item">Load into storage/database</li>
                                <li className="list-group-item">Generate reports and alerts</li>
                            </ol>
                        </div>

                        <div className="col-md-6">
                            <h5>Typical Use Cases</h5>
                            <ul className="list-group list-group-flush mb-3">
                                <li className="list-group-item"><strong>Daily Reports:</strong> Sales summaries, KPI dashboards</li>
                                <li className="list-group-item"><strong>Nightly Jobs:</strong> Log processing, data cleanup</li>
                                <li className="list-group-item"><strong>Bulk Transformations:</strong> Data migration, schema updates</li>
                                <li className="list-group-item"><strong>Periodic Exports:</strong> Data warehousing, archival</li>
                                <li className="list-group-item"><strong>Batch ML Training:</strong> Train models on accumulated data</li>
                                <li className="list-group-item"><strong>Bulk User Actions:</strong> Email campaigns, account updates</li>
                            </ul>

                            <h5>Advantages</h5>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-1">Cost-effective for large data volumes</li>
                                <li className="mb-1">Simple to implement and understand</li>
                                <li className="mb-1">Proven, stable technology</li>
                                <li className="mb-1">Easy to debug and retry failed batches</li>
                                <li className="mb-0">Parallelizable across machines</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6">
                            <h5>Disadvantages</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><strong>Latency:</strong> Data not immediately available</li>
                                <li className="list-group-item"><strong>Failed Batches:</strong> Entire run fails if one task fails</li>
                                <li className="list-group-item"><strong>Resource Spikes:</strong> High compute demand during batch windows</li>
                                <li className="list-group-item"><strong>Limited Real-Time Insights:</strong> Can&apos;t react to events as they happen</li>
                                <li className="list-group-item"><strong>Complex Dependency Management:</strong> Job scheduling can become complex</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h5>Popular Tools &amp; Platforms</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><strong>Apache Spark:</strong> Distributed batch and streaming, popular for data lakes</li>
                                <li className="list-group-item"><strong>Hadoop:</strong> HDFS + MapReduce, foundation for big data</li>
                                <li className="list-group-item"><strong>Apache Airflow:</strong> Workflow orchestration and scheduling</li>
                                <li className="list-group-item"><strong>AWS Batch:</strong> Managed batch computing service</li>
                                <li className="list-group-item"><strong>Kubernetes CronJobs:</strong> Containerized batch jobs</li>
                                <li className="list-group-item"><strong>dbt:</strong> Data transformation tool (ELT)</li>
                                <li className="list-group-item"><strong>Talend, Informatica:</strong> Enterprise ETL platforms</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6">
                            <h5>Batch vs Stream Processing</h5>
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Aspect</th>
                                            <th>Batch</th>
                                            <th>Stream</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>Latency</strong></td>
                                            <td>Minutes to hours</td>
                                            <td>Milliseconds</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Data Volume</strong></td>
                                            <td>Large, accumulated</td>
                                            <td>Continuous flow</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Cost</strong></td>
                                            <td>Lower</td>
                                            <td>Higher</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Complexity</strong></td>
                                            <td>Lower</td>
                                            <td>Higher</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <h5>Best Practices</h5>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-1">Schedule batch jobs during off-peak hours</li>
                                <li className="mb-1">Implement comprehensive error handling and retry logic</li>
                                <li className="mb-1">Monitor batch execution time and resource utilization</li>
                                <li className="mb-1">Use checkpointing for fault tolerance</li>
                                <li className="mb-1">Partition data for parallel processing</li>
                                <li className="mb-1">Implement data quality checks</li>
                                <li className="mb-1">Document job dependencies clearly</li>
                                <li className="mb-0">Keep logs for troubleshooting</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function BatchProcessingPage() {
    return (
        <div className='pt-2'>
            <h2 className="mb-4 mt-3">Batch Processing</h2>

            <div className="row">
                <div className="col-md-6">
                    <h3>Definition & Characteristics</h3>
                    <p><strong>Batch Processing:</strong> Process large volumes of data at scheduled intervals</p>

                    <h4>Key Traits</h4>
                    <ul>
                        <li><strong>Scheduled Execution:</strong> Runs at predetermined times (nightly, weekly)</li>
                        <li><strong>High Latency:</strong> Data not available immediately after collection</li>
                        <li><strong>High Throughput:</strong> Process massive volumes efficiently</li>
                        <li><strong>Cost-Efficient:</strong> Utilizes resources optimally during off-peak hours</li>
                        <li><strong>Stateless:</strong> Each batch run is independent</li>
                    </ul>

                    <h4>Processing Flow</h4>
                    <ol>
                        <li>Collect data from various sources</li>
                        <li>Extract and validate</li>
                        <li>Transform and enrich</li>
                        <li>Load into storage/database</li>
                        <li>Generate reports and alerts</li>
                    </ol>
                </div>

                <div className="col-md-6">
                    <h3>Typical Use Cases</h3>
                    <ul>
                        <li><strong>Daily Reports:</strong> Sales summaries, KPI dashboards</li>
                        <li><strong>Nightly Jobs:</strong> Log processing, data cleanup</li>
                        <li><strong>Bulk Transformations:</strong> Data migration, schema updates</li>
                        <li><strong>Periodic Exports:</strong> Data warehousing, archival</li>
                        <li><strong>Batch ML Training:</strong> Train models on accumulated data</li>
                        <li><strong>Bulk User Actions:</strong> Email campaigns, account updates</li>
                    </ul>

                    <h3>Advantages</h3>
                    <ul>
                        <li>Cost-effective for large data volumes</li>
                        <li>Simple to implement and understand</li>
                        <li>Proven, stable technology</li>
                        <li>Easy to debug and retry failed batches</li>
                        <li>Parallelizable across machines</li>
                    </ul>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-md-6">
                    <h3>Disadvantages</h3>
                    <ul>
                        <li><strong>Latency:</strong> Data not immediately available</li>
                        <li><strong>Failed Batches:</strong> Entire run fails if one task fails</li>
                        <li><strong>Resource Spikes:</strong> High compute demand during batch windows</li>
                        <li><strong>Limited Real-Time Insights:</strong> Can't react to events as they happen</li>
                        <li><strong>Complex Dependency Management:</strong> Job scheduling can become complex</li>
                    </ul>
                </div>

                <div className="col-md-6">
                    <h3>Popular Tools & Platforms</h3>
                    <ul>
                        <li><strong>Apache Spark:</strong> Distributed batch and streaming, popular for data lakes</li>
                        <li><strong>Hadoop:</strong> HDFS + MapReduce, foundation for big data</li>
                        <li><strong>Apache Airflow:</strong> Workflow orchestration and scheduling</li>
                        <li><strong>AWS Batch:</strong> Managed batch computing service</li>
                        <li><strong>Kubernetes CronJobs:</strong> Containerized batch jobs</li>
                        <li><strong>dbt:</strong> Data transformation tool (ELT)</li>
                        <li><strong>Talend, Informatica:</strong> Enterprise ETL platforms</li>
                    </ul>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-md-6">
                    <h3>Batch vs Stream Processing</h3>
                    <table className="table table-sm">
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

                <div className="col-md-6">
                    <h3>Best Practices</h3>
                    <ul>
                        <li>Schedule batch jobs during off-peak hours</li>
                        <li>Implement comprehensive error handling and retry logic</li>
                        <li>Monitor batch execution time and resource utilization</li>
                        <li>Use checkpointing for fault tolerance</li>
                        <li>Partition data for parallel processing</li>
                        <li>Implement data quality checks</li>
                        <li>Document job dependencies clearly</li>
                        <li>Keep logs for troubleshooting</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

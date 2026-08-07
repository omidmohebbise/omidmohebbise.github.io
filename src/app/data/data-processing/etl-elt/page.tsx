export default function ETLELTPage() {
    return (
        <div className="container py-5">
            <p className="section-label">Data</p>
            <h1 className="section-title">ETL &amp; ELT</h1>
            <hr className="section-rule" />

            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <h5>ETL (Extract, Transform, Load)</h5>
                            <p className="mb-2"><strong>Traditional Approach:</strong> Data is transformed before loading to destination</p>

                            <h6 className="mt-3">Process Flow</h6>
                            <ol className="list-group list-group-numbered list-group-flush mb-3">
                                <li className="list-group-item"><strong>Extract:</strong> Pull data from source systems</li>
                                <li className="list-group-item"><strong>Transform:</strong> Clean, validate, and transform data in staging area</li>
                                <li className="list-group-item"><strong>Load:</strong> Move processed data to target system (warehouse)</li>
                            </ol>

                            <h6>Characteristics</h6>
                            <ul className="list-unstyled mb-3">
                                <li className="mb-1">Transformations happen in-memory or staging database</li>
                                <li className="mb-1">Data is validated before loading</li>
                                <li className="mb-1">Data quality checks built into transformation</li>
                                <li className="mb-0">Target system receives clean, aggregated data</li>
                            </ul>

                            <h6>Advantages</h6>
                            <ul className="list-unstyled mb-3">
                                <li className="mb-1">Data quality is high (validated before storage)</li>
                                <li className="mb-1">Reduced storage requirements (pre-aggregated)</li>
                                <li className="mb-1">Faster queries on clean data</li>
                                <li className="mb-0">Data lineage tracking easier</li>
                            </ul>

                            <h6>Disadvantages</h6>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-1">Complex transformation logic hard to maintain</li>
                                <li className="mb-1">Initial load slower (transform before loading)</li>
                                <li className="mb-1">Brittle to source system changes</li>
                                <li className="mb-0">Staging systems need significant resources</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h5>ELT (Extract, Load, Transform)</h5>
                            <p className="mb-2"><strong>Modern Approach:</strong> Load raw data first, transform in destination</p>

                            <h6 className="mt-3">Process Flow</h6>
                            <ol className="list-group list-group-numbered list-group-flush mb-3">
                                <li className="list-group-item"><strong>Extract:</strong> Pull data from source systems</li>
                                <li className="list-group-item"><strong>Load:</strong> Load raw data directly to warehouse/lake</li>
                                <li className="list-group-item"><strong>Transform:</strong> Transform data using warehouse compute</li>
                            </ol>

                            <h6>Characteristics</h6>
                            <ul className="list-unstyled mb-3">
                                <li className="mb-1">Raw data stored as-is (data lake)</li>
                                <li className="mb-1">Transformations happen in warehouse (SQL, Spark)</li>
                                <li className="mb-1">Leverage warehouse computing power</li>
                                <li className="mb-0">Easy to replay transformations</li>
                            </ul>

                            <h6>Advantages</h6>
                            <ul className="list-unstyled mb-3">
                                <li className="mb-1">Faster initial load (raw data)</li>
                                <li className="mb-1">Leverage warehouse compute for transformations</li>
                                <li className="mb-1">Simpler transformation logic maintenance</li>
                                <li className="mb-1">Data flexibility (raw data available for analysis)</li>
                                <li className="mb-0">Easier to replay/fix transformations</li>
                            </ul>

                            <h6>Disadvantages</h6>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-1">More storage required (raw data)</li>
                                <li className="mb-1">Data quality responsibility on data warehouse</li>
                                <li className="mb-1">Requires data governance discipline</li>
                                <li className="mb-0">Transformation costs higher (compute in warehouse)</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6">
                            <h5>ETL vs ELT Comparison</h5>
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Aspect</th>
                                            <th>ETL</th>
                                            <th>ELT</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>Transform Location</strong></td>
                                            <td>Staging/ETL tool</td>
                                            <td>Data warehouse</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Data Stored</strong></td>
                                            <td>Processed only</td>
                                            <td>Raw + processed</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Load Speed</strong></td>
                                            <td>Slower</td>
                                            <td>Faster</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Storage Cost</strong></td>
                                            <td>Lower</td>
                                            <td>Higher</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Transform Complexity</strong></td>
                                            <td>Higher</td>
                                            <td>Lower</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Data Flexibility</strong></td>
                                            <td>Limited (processed only)</td>
                                            <td>High (raw available)</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Best For</strong></td>
                                            <td>Complex transformations</td>
                                            <td>Modern data warehouses</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <h5>Popular Tools</h5>

                            <h6>ETL Tools</h6>
                            <ul className="list-group list-group-flush mb-3">
                                <li className="list-group-item"><strong>Talend:</strong> Low-code, visual ETL platform</li>
                                <li className="list-group-item"><strong>Informatica:</strong> Enterprise ETL with rich features</li>
                                <li className="list-group-item"><strong>Apache NiFi:</strong> Open-source data routing and transformation</li>
                                <li className="list-group-item"><strong>Pentaho:</strong> Open-source BI and ETL</li>
                            </ul>

                            <h6>ELT Tools</h6>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><strong>dbt (data build tool):</strong> SQL-based transformations, very popular</li>
                                <li className="list-group-item"><strong>Apache Airflow:</strong> Orchestration (works with both ETL/ELT)</li>
                                <li className="list-group-item"><strong>Stitch:</strong> Cloud-based ELT platform</li>
                                <li className="list-group-item"><strong>Fivetran:</strong> Managed ELT for SaaS data</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-12">
                            <h5>Modern Data Stack &amp; ELT</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><strong>Cloud Data Warehouses:</strong> Snowflake, BigQuery, Redshift support scaling transformation compute</li>
                                <li className="list-group-item"><strong>Data Lakes:</strong> Store raw data cheaply, transform with Spark/SQL</li>
                                <li className="list-group-item"><strong>dbt Revolution:</strong> Analytics engineers transform data in SQL within warehouse</li>
                                <li className="list-group-item"><strong>Orchestration:</strong> Apache Airflow manages complex ELT workflows</li>
                                <li className="list-group-item"><strong>Trend:</strong> Industry moving from ETL → ELT for flexibility and cost</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

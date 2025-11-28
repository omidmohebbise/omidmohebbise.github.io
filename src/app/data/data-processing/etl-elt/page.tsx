export default function ETLELTPage() {
    return (
        <div className='pt-2'>
            <h2 className="mb-4 mt-3">ETL & ELT</h2>

            <div className="row">
                <div className="col-md-6">
                    <h3>ETL (Extract, Transform, Load)</h3>
                    <p><strong>Traditional Approach:</strong> Data is transformed before loading to destination</p>

                    <h4>Process Flow</h4>
                    <ol>
                        <li><strong>Extract:</strong> Pull data from source systems</li>
                        <li><strong>Transform:</strong> Clean, validate, and transform data in staging area</li>
                        <li><strong>Load:</strong> Move processed data to target system (warehouse)</li>
                    </ol>

                    <h4>Characteristics</h4>
                    <ul>
                        <li>Transformations happen in-memory or staging database</li>
                        <li>Data is validated before loading</li>
                        <li>Data quality checks built into transformation</li>
                        <li>Target system receives clean, aggregated data</li>
                    </ul>

                    <h4>Advantages</h4>
                    <ul>
                        <li>Data quality is high (validated before storage)</li>
                        <li>Reduced storage requirements (pre-aggregated)</li>
                        <li>Faster queries on clean data</li>
                        <li>Data lineage tracking easier</li>
                    </ul>

                    <h4>Disadvantages</h4>
                    <ul>
                        <li>Complex transformation logic hard to maintain</li>
                        <li>Initial load slower (transform before loading)</li>
                        <li>Brittle to source system changes</li>
                        <li>Staging systems need significant resources</li>
                    </ul>
                </div>

                <div className="col-md-6">
                    <h3>ELT (Extract, Load, Transform)</h3>
                    <p><strong>Modern Approach:</strong> Load raw data first, transform in destination</p>

                    <h4>Process Flow</h4>
                    <ol>
                        <li><strong>Extract:</strong> Pull data from source systems</li>
                        <li><strong>Load:</strong> Load raw data directly to warehouse/lake</li>
                        <li><strong>Transform:</strong> Transform data using warehouse compute</li>
                    </ol>

                    <h4>Characteristics</h4>
                    <ul>
                        <li>Raw data stored as-is (data lake)</li>
                        <li>Transformations happen in warehouse (SQL, Spark)</li>
                        <li>Leverage warehouse computing power</li>
                        <li>Easy to replay transformations</li>
                    </ul>

                    <h4>Advantages</h4>
                    <ul>
                        <li>Faster initial load (raw data)</li>
                        <li>Leverage warehouse compute for transformations</li>
                        <li>Simpler transformation logic maintenance</li>
                        <li>Data flexibility (raw data available for analysis)</li>
                        <li>Easier to replay/fix transformations</li>
                    </ul>

                    <h4>Disadvantages</h4>
                    <ul>
                        <li>More storage required (raw data)</li>
                        <li>Data quality responsibility on data warehouse</li>
                        <li>Requires data governance discipline</li>
                        <li>Transformation costs higher (compute in warehouse)</li>
                    </ul>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-md-6">
                    <h3>ETL vs ELT Comparison</h3>
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

                <div className="col-md-6">
                    <h3>Popular Tools</h3>

                    <h4>ETL Tools</h4>
                    <ul>
                        <li><strong>Talend:</strong> Low-code, visual ETL platform</li>
                        <li><strong>Informatica:</strong> Enterprise ETL with rich features</li>
                        <li><strong>Apache NiFi:</strong> Open-source data routing and transformation</li>
                        <li><strong>Pentaho:</strong> Open-source BI and ETL</li>
                    </ul>

                    <h4>ELT Tools</h4>
                    <ul>
                        <li><strong>dbt (data build tool):</strong> SQL-based transformations, very popular</li>
                        <li><strong>Apache Airflow:</strong> Orchestration (works with both ETL/ELT)</li>
                        <li><strong>Stitch:</strong> Cloud-based ELT platform</li>
                        <li><strong>Fivetran:</strong> Managed ELT for SaaS data</li>
                    </ul>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-12">
                    <h3>Modern Data Stack & ELT</h3>
                    <ul>
                        <li><strong>Cloud Data Warehouses:</strong> Snowflake, BigQuery, Redshift support scaling transformation compute</li>
                        <li><strong>Data Lakes:</strong> Store raw data cheaply, transform with Spark/SQL</li>
                        <li><strong>dbt Revolution:</strong> Analytics engineers transform data in SQL within warehouse</li>
                        <li><strong>Orchestration:</strong> Apache Airflow manages complex ELT workflows</li>
                        <li><strong>Trend:</strong> Industry moving from ETL → ELT for flexibility and cost</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

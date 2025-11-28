export default function ReferenceArchitecturesPage() {
    return (
        <div className='pt-2'>
            <h2 className="mb-4 mt-3">Reference Architectures</h2>

            <div className="row">
                <div className="col-md-6">
                    <h3>Data Warehouse Architecture</h3>
                    <ul>
                        <li>Source systems → ETL/ELT → Warehouse → BI tools</li>
                        <li>Star and snowflake schemas for dimensional modeling</li>
                        <li>Batch or near-real-time ingestion</li>
                    </ul>

                    <h3>Data Lake / Lakehouse</h3>
                    <ul>
                        <li>Raw data in object storage → processing engines (Spark) → curated datasets</li>
                        <li>Lakehouse merges warehouse governance with lake flexibility</li>
                    </ul>
                </div>

                <div className="col-md-6">
                    <h3>Event-Driven / Streaming</h3>
                    <ul>
                        <li>Producers → Event broker (Kafka) → Stream processors → Serving layer</li>
                        <li>Designed for low-latency processing and near-real-time analytics</li>
                    </ul>

                    <h3>Hybrid Architectures</h3>
                    <ul>
                        <li>Combine batch + stream (Lambda) or unify on stream (Kappa)</li>
                        <li>Adopt patterns based on use-case and team expertise</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

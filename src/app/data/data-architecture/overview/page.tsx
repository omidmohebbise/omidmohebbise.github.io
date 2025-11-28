export default function DataArchitectureOverviewPage() {
    return (
        <div className='pt-2'>
            <h2 className="mb-4 mt-3">Data Architecture Overview</h2>

            <div className="row">
                <div className="col-md-6">
                    <h3>What is Data Architecture?</h3>
                    <p>Blueprint that defines how data is collected, stored, processed, and consumed across an organization.</p>
                    <p>It connects business requirements to technical implementations.</p>
                </div>

                <div className="col-md-6">
                    <h3>Conceptual vs Logical vs Physical</h3>
                    <ul>
                        <li><strong>Conceptual:</strong> High-level business entities and relationships</li>
                        <li><strong>Logical:</strong> Detailed data models and flows without implementation details</li>
                        <li><strong>Physical:</strong> Actual storage, technologies and infrastructure</li>
                    </ul>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-12">
                    <h3>When to use each</h3>
                    <ul>
                        <li>Conceptual for stakeholder alignment</li>
                        <li>Logical for design and data modeling</li>
                        <li>Physical for implementation and operations</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default function ArchitecturePage() {

    return (<section className="mt-5">
        <h2>Common Architecture Principles</h2>
        <div className="row">
            <div className="list-group-item col-4 p-2">
                <strong>Separation of Concerns (SoC)</strong>
                <p>Divides the system into distinct sections that address different concerns, such as business logic,
                    data access, and user interface. Promotes modularity and reduces complexity.</p>
            </div>
            <div className="list-group-item col-4 p-2">
                <strong>Modularity</strong>
                <p>Dividing the system into self-contained modules that can be developed, tested, and maintained
                    independently. Facilitates code reuse and easier debugging.</p>
            </div>
            <div className="list-group-item col-4 p-2">
                <strong>Scalability</strong>
                <p>Ensures the system can handle increased load by scaling horizontally (adding more machines) or
                    vertically (adding more resources to existing machines). Achieved through techniques like load
                    balancing, distributed systems, and caching.</p>
            </div>
            <div className="list-group-item col-4 p-2">
                <strong>Maintainability</strong>
                <p>Focuses on designing systems that can be easily updated and maintained over time. This includes clear
                    code documentation, modular components, and robust testing practices.</p>
            </div>
            <div className="list-group-item col-4 p-2">
                <strong>Loose Coupling</strong>
                <p>Reduces dependencies between system components, allowing for greater flexibility and easier changes
                    without affecting the whole system.</p>
            </div>
            <div className="list-group-item col-4 p-2">
                <strong>High Availability and Fault Tolerance</strong>
                <p>Ensures the system is available and functional even in the event of hardware or software failures.
                    Often achieved through replication, failover mechanisms, and disaster recovery plans.</p>
            </div>
            <div className="list-group-item col-4 p-2">
                <strong>Security</strong>
                <p>Ensures that the system is resistant to threats and vulnerabilities. Incorporates authentication,
                    authorization, encryption, and secure coding practices.</p>
            </div>
        </div>
    </section>)

}
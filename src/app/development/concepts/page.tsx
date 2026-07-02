export default function Page() {
    return (
        <div className="container py-5">
            <p className="section-label">Development</p>
            <h1 className="section-title">Welcome to the Development Page</h1>
            <hr className="section-rule" />
            <div className="card shadow-sm mb-4">
                <div className="card-body">
                    <p className="mb-3">
                        Development is a process of creating, designing, and building applications or systems. It involves
                        various stages, including planning, coding, testing, and deploying.
                    </p>
                    <ul>
                        <li>Front-end development focuses on building user interfaces using technologies like HTML, CSS, and
                            JavaScript frameworks such as React.
                        </li>
                        <li>Back-end development involves server-side logic, databases, and APIs to ensure applications function
                            correctly.
                        </li>
                        <li>Full-stack development combines both front-end and back-end skills to create complete
                            applications.
                        </li>
                    </ul>
                    <p className="mt-3">
                        Staying updated with the latest tools and techniques in development ensures efficiency and scalability
                        in your projects.
                    </p>
                </div>
            </div>
        </div>
    )
}

"use client"

import { useState } from 'react'
import './page.scss'

const PageStates = {
    Concept: 1,
    Tools: 2,
    Libraries: 3
}

export default function SoftSkillPage() {

    const [pageState, setPageState] = useState(PageStates.Concept)

    const getLibraries = () => {
        return <>
            <div className="row mt-4">
                <div className="col-md-6">

                </div>

                <div className="col-md-6">

                </div>
            </div>

        </>
    }

    const getConcepts = () => {
        return <>
            <div className="row g-4 mt-2">

                <div className="col-md-6">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h3 className="fw-semibold mb-3" style={{ color: '#1e293b' }}>Requirements Analysis</h3>
                            <ul>
                                <li><strong>Understanding Needs:</strong> Gather and analyze user and business requirements.</li>
                                <li><strong>Stakeholder Communication:</strong> Collaborate with clients, users, and other stakeholders to ensure clarity.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h3 className="fw-semibold mb-3" style={{ color: '#1e293b' }}>Design</h3>
                            <ul>
                                <li><strong>Architecture:</strong> Define the high-level structure of the software.</li>
                                <li><strong>User Interface (UI) and User Experience (UX):</strong> Plan intuitive and user-friendly interfaces.</li>
                                <li><strong>Database Design:</strong> Model data structures and relationships.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h3 className="fw-semibold mb-3" style={{ color: '#1e293b' }}>Development</h3>
                            <ul>
                                <li><strong>Programming:</strong> Write code using programming languages.</li>
                                <li><strong>Version Control:</strong> Use tools like Git to track changes and collaborate.</li>
                                <li><strong>Code Quality:</strong> Follow best practices such as clean code and refactoring.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h3 className="fw-semibold mb-3" style={{ color: '#1e293b' }}>Testing</h3>
                            <ul>
                                <li><strong>Unit Testing:</strong> Test individual components for correctness.</li>
                                <li><strong>Integration Testing:</strong> Ensure that different components work together.</li>
                                <li><strong>System Testing:</strong> Verify the software meets overall requirements.</li>
                                <li><strong>User Acceptance Testing (UAT):</strong> Validate the software with end-users.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h3 className="fw-semibold mb-3" style={{ color: '#1e293b' }}>Deployment</h3>
                            <ul>
                                <li><strong>Release Management:</strong> Plan and execute the deployment of software to production.</li>
                                <li><strong>CI/CD:</strong> Automate building, testing, and deploying processes.</li>
                                <li><strong>Monitoring:</strong> Use tools to monitor performance and detect issues post-deployment.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h3 className="fw-semibold mb-3" style={{ color: '#1e293b' }}>Maintenance</h3>
                            <ul>
                                <li><strong>Bug Fixing:</strong> Resolve issues identified after deployment.</li>
                                <li><strong>Updates:</strong> Add new features or improve existing functionality.</li>
                                <li><strong>Performance Optimization:</strong> Ensure the software remains efficient and scalable.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h3 className="fw-semibold mb-3" style={{ color: '#1e293b' }}>Methodologies and Principles</h3>
                            <ul>
                                <li><strong>Agile:</strong> Emphasizes iterative development and collaboration.</li>
                                <li><strong>DevOps:</strong> Integrates development and operations for faster delivery.</li>
                                <li><strong>Modularity:</strong> Divide the software into independent components.</li>
                                <li><strong>Scalability:</strong> Ensure the software can handle growth.</li>
                                <li><strong>Security:</strong> Protect the software from vulnerabilities.</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </>
    }

    const getTools = () => {
        return <>
            <div> <div className="container mt-3">


            </div></div>
        </>
    }

    return (
        <div className="container py-5">
            <p className="section-label">Development</p>
            <h1 className="section-title">Software Development</h1>
            <hr className="section-rule" />
            <div className="d-flex gap-2 mb-4 flex-wrap">
                {Object.keys(PageStates).map(x => (
                    <button
                        key={PageStates[x as keyof typeof PageStates]}
                        onClick={() => setPageState(PageStates[x as keyof typeof PageStates])}
                        style={pageState === PageStates[x as keyof typeof PageStates]
                            ? { background: '#2563eb', color: 'white', borderRadius: 8, padding: '0.75rem 1rem', fontWeight: 600, border: 'none', cursor: 'pointer' }
                            : { background: 'transparent', color: '#475569', padding: '0.75rem 1rem', borderBottom: '2px solid #e2e8f0', fontWeight: 500, border: 'none', cursor: 'pointer' }
                        }
                    >
                        {x}
                    </button>
                ))}
            </div>
            {pageState === PageStates.Concept && getConcepts()}
            {pageState === PageStates.Tools && getTools()}
            {pageState === PageStates.Libraries && getLibraries()}
        </div>
    )
}

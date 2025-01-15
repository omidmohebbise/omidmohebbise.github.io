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
            <div className='pt-2 row'>
                <h3 className="mb-4 mt-3">Main Concepts of Software Development</h3>

                <div id="machine-learning" className="my-5 col-6">
                    <h2>  Requirements Analysis</h2>
                    <ul>
                        <li><strong>Understanding Needs:</strong> Gather and analyze user and business requirements.</li>
                        <li><strong>Stakeholder Communication:</strong> Collaborate with clients, users, and other stakeholders to ensure clarity.</li>
                    </ul>
                </div>

                <div id="machine-learning" className="my-5 col-6">
                    <h2>  Design</h2>
                    <ul>
                        <li><strong>Architecture:</strong> Define the high-level structure of the software.</li>
                        <li><strong>User Interface (UI) and User Experience (UX):</strong> Plan intuitive and user-friendly interfaces.</li>
                        <li><strong>Database Design:</strong> Model data structures and relationships.</li>
                    </ul>
                </div>

                <div id="machine-learning" className="my-5 col-6">
                    <h2>  Development</h2>
                    <ul>
                        <li><strong>Programming:</strong> Write code using programming languages.</li>
                        <li><strong>Version Control:</strong> Use tools like Git to track changes and collaborate.</li>
                        <li><strong>Code Quality:</strong> Follow best practices such as clean code and refactoring.</li>
                    </ul>
                </div>

                <div id="machine-learning" className="my-5 col-6">
                    <h2>  Testing</h2>
                    <ul>
                        <li><strong>Unit Testing:</strong> Test individual components for correctness.</li>
                        <li><strong>Integration Testing:</strong> Ensure that different components work together.</li>
                        <li><strong>System Testing:</strong> Verify the software meets overall requirements.</li>
                        <li><strong>User Acceptance Testing (UAT):</strong> Validate the software with end-users.</li>
                    </ul>
                </div>



                <div id="machine-learning" className="my-5 col-6">
                    <h2>  Deployment</h2>
                    <ul>
                        <li><strong>Release Management:</strong> Plan and execute the deployment of software to production.</li>
                        <li><strong>CI/CD:</strong> Automate building, testing, and deploying processes.</li>
                        <li><strong>Monitoring:</strong> Use tools to monitor performance and detect issues post-deployment.</li>
                    </ul>
                </div>


                <div id="machine-learning" className="my-5 col-6">
                    <h2>  Maintenance</h2>
                    <ul>
                        <li><strong>Bug Fixing:</strong> Resolve issues identified after deployment.</li>
                        <li><strong>Updates:</strong> Add new features or improve existing functionality.</li>
                        <li><strong>Performance Optimization:</strong> Ensure the software remains efficient and scalable.</li>
                    </ul>
                </div>


                <div id="machine-learning" className="my-5 col-6">
                    <h2>   Methodologies and Principles</h2>
                    <ul>
                        <li><strong>Agile:</strong> Emphasizes iterative development and collaboration.</li>
                        <li><strong>DevOps:</strong> Integrates development and operations for faster delivery.</li>
                        <li><strong>Modularity:</strong> Divide the software into independent components.</li>
                        <li><strong>Scalability:</strong> Ensure the software can handle growth.</li>
                        <li><strong>Security:</strong> Protect the software from vulnerabilities.</li>
                    </ul>
                </div>



            </div >
        </>
    }

    const getTools = () => {
        return <>
            <div> <div className="container mt-3">


            </div></div>
        </>
    }

    return (
        <div className="">
            {/* <h1 className="text-center my-5 col-6">Artifical Intelligence</h1> */}
            <div className='row m-0' >
                {Object.keys(PageStates)
                    .map(x => <div className="text-center col-4 p-1" key={PageStates[x]}>
                        <div role="button" className={pageState === PageStates[x] ? 'bg-light p-3' : "p-3 border-bottom"} onClick={() => setPageState(PageStates[x])}>{x}</div>
                    </div>)}
            </div>
            {pageState === PageStates.Concept && getConcepts()}
            {pageState === PageStates.Tools && getTools()}
            {pageState === PageStates.Libraries && getLibraries()}
        </div>
    )
}
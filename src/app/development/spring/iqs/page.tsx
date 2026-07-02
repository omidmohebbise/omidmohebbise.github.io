
import React from 'react';

import Link from 'next/link'

const CURRENT_PATH = "/software/development/spring/iqs"
const PageStates = {
    Basic: "#",
    Intermediate: "#/intermediate",
    Advanced: "#/advanced",
}

const SpringBasicInterviewQuestions = () => {

    return <div className="container py-5">
        <p className="section-label">Development</p>
        <h1 className="section-title">Spring Interview Questions</h1>
        <hr className="section-rule" />
        <div className='d-flex gap-2 mb-4' >
            {Object.keys(PageStates)
                .map(x => <div className="p-1" key={PageStates[x as keyof typeof PageStates]}>
                    <Link href={CURRENT_PATH + PageStates[x as keyof typeof PageStates]} className="btn btn-outline-secondary">{x}</Link>
                </div>)}
        </div>

        <div className="row g-4">
            <div className="col-md-6">
                <div className="card h-100 shadow-sm">
                    <div className="card-body">
                        <h4 className="fw-semibold mb-3" style={{ color: '#1e293b' }}>Why Spring framework?</h4>
                        <ul>
                            <li>Stability — backward compatibility, long time support</li>
                            <li>Based on JVM</li>
                            <li>Connectivity — connect to any database</li>
                            <li>Cloud Native — following cloud principles and deployment</li>
                            <li>Flexibility — batch job, web-api, command line tools and etc</li>
                            <li>Open Source</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="col-md-6">
                <div className="card h-100 shadow-sm">
                    <div className="card-body">
                        <h4 className="fw-semibold mb-3" style={{ color: '#1e293b' }}>Why Spring Boot?</h4>
                        <ul>
                            <li>A module of Spring, aims at Rapid Application Development</li>
                            <li>Used to create a Spring app project</li>
                            <li>Less complex than the Spring framework</li>
                            <li>Include predefined configuration that make it easy to develop Spring app</li>
                            <li>Auto dependency resolution</li>
                            <li>Embedded HTTP Server</li>
                            <li>Auto configuration</li>
                            <li>Management endpoints</li>
                            <li>Spring Boot CLI</li>
                            <li>Include monitoring and managing APIs for application</li>
                            <li>Integrated with Spring ecosystem</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="col-md-6">
                <div className="card h-100 shadow-sm">
                    <div className="card-body">
                        <h4 className="fw-semibold mb-3" style={{ color: '#1e293b' }}>Mention 6 features of Spring Boot?</h4>
                        <ul>
                            <li>Spring CLI</li>
                            <li>Spring Actuator</li>
                            <li>Starter dependencies</li>
                            <li>Logging and Security</li>
                            <li>Auto Configuration</li>
                            <li>Spring initializer</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="col-md-6">
                <div className="card h-100 shadow-sm">
                    <div className="card-body">
                        <h4 className="fw-semibold mb-3" style={{ color: '#1e293b' }}>What are the possible sources of external configuration?</h4>
                        <ul>
                            <li>Application Properties</li>
                            <li>Command Line Properties</li>
                            <li>Profile Specific Properties</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="col-md-6">
                <div className="card h-100 shadow-sm">
                    <div className="card-body">
                        <h4 className="fw-semibold mb-3" style={{ color: '#1e293b' }}>What happens in the background when a Spring Boot Application starts?</h4>
                        <ul>
                            <li>Automatically tomcat server will be up</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="col-md-6">
                <div className="card h-100 shadow-sm">
                    <div className="card-body">
                        <h4 className="fw-semibold mb-3" style={{ color: '#1e293b' }}>What is the Spring Actuator?</h4>
                        <ul>
                            <li>Shows what is happening inside a running application</li>
                            <li>Provides a very easy way to access the production-ready Rest points and fetch all kinds of information from the web</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="col-md-6">
                <div className="card h-100 shadow-sm">
                    <div className="card-body">
                        <h4 className="fw-semibold mb-3" style={{ color: '#1e293b' }}>What is the need for Spring Boot DevTools?</h4>
                        <ul>
                            <li>Hot reload</li>
                            <li>Repackaging of archives</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="col-md-6">
                <div className="card h-100 shadow-sm">
                    <div className="card-body">
                        <h4 className="fw-semibold mb-3" style={{ color: '#1e293b' }}>How to enable HTTP2 support in Spring Boot?</h4>
                        <ul>
                            <li><code>server.http2.enabled=true</code></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        {/* min 25 =>  https://www.youtube.com/watch?v=CXTiwkZVoZI  */}
    </div>
}
export default SpringBasicInterviewQuestions;

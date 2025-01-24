
import React from 'react';

import Link from 'next/link'

const CURRENT_PATH = "/software/development/spring/iqs"
const PageStates = {
    Basic: "#",
    Intermediate: "#/intermediate",
    Advanced: "#/advanced",
}

const SpringBasicInterviewQuestions = () => {

    return <div className='p-2'>
        <h3 className='py-3'> Spring Interview Questions:</h3>
        <div className='row m-0' >
            {Object.keys(PageStates)
                .map(x => <div className="text-center col-4 p-1" key={PageStates[x]}>
                    <div role="button" className={"p-3 border-bottom"} >
                        <Link href={CURRENT_PATH + PageStates[x]}>{x}</Link>
                    </div>
                </div>)}
        </div>

        <section className='bg-light m-1 p-2'>
            <h5>Why Spring framework?</h5>
            <div>
                <ul>
                    <li> Stability
                        <sub>backward compatiblity, long time support</sub>
                    </li>
                    <li> Based on JVM </li>
                    <li> Connectivity, connect to any database</li>
                    <li> Cloud Native, following cloud principles and deployment  </li>
                    <li> Flexibility, batch job, web-api, command line tools and etc</li>
                    <li> Open Source</li>
                </ul>
            </div>
        </section>
        <section className='bg-light m-1 p-2'>
            <h5>Why Spring Boot?</h5>
            <div>
                <ul>
                    <li> A module of Spring, aims at Rapid Application Development</li>
                    <li> Used to create a Spring app project </li>
                    <li> Less complext than th Spring framwork  </li>
                    <li> Include predefined configuration that make it easy to develop Spring app</li>
                    <li> Auto dependency resolution</li>
                    <li> Embedded HTTP Server</li>
                    <li> Auto configuration</li>
                    <li> Management endpoints</li>
                    <li> Spring Boot CLI</li>
                    <li> Include monitoring and managing APIs for application</li>
                    <li> Integrated with Spring ecosystem</li>
                </ul>
            </div>
        </section>
        <section className='bg-light m-1 p-2'>
            <h5>Mention 6 features of Spring Boot?</h5>
            <div>
                <ul>
                    <li>Spring CLI</li>
                    <li>Spring Actuator</li>
                    <li>Starter dependencies</li>
                    <li> Logging and Security</li>
                    <li> Auto Configuration</li>
                    <li> Spring initializer</li>
                </ul>
            </div>
        </section>

        <section className='bg-light m-1 p-2'>
            <h5>What are the possible sources of external configuration?</h5>
            <div>
                <ul>
                    <li>Application Properties</li>
                    <li>Command Line Properties</li>
                    <li>Profile Specific Properties</li>
                </ul>
            </div>
        </section>

        <section className='bg-light m-1 p-2'>
            <h5>What will be happen in the background when a Spring Boot Application start? </h5>
            <div>
                <ul>
                    <li>Automatically tomcat server will be up</li>

                </ul>
            </div>
        </section>

        <section className='bg-light m-1 p-2'>
            <h5>What is the Spring Actuator? </h5>
            <div>
                <ul>
                    <li> Showss what is happening inside a running application</li>
                    <li>Provide a very easy way to access the production-ready Rest points and fetch all kinds of information from the web</li>
                </ul>
            </div>
        </section>

        <section className='bg-light m-1 p-2'>
            <h5>What is the need for Spring Boot DevTools? </h5>
            <div>
                <ul>
                    <li> Hot reload</li>
                    <li> Repackaging of archives</li>
                </ul>
            </div>
        </section>

        <section className='bg-light m-1 p-2'>
            <h5>How to enable HTTP2 support in Spring Boot? </h5>
            <div>
                <ul>
                    <li>server.http2.enabled=true</li>
                </ul>
            </div>
        </section>
        {/* min 25 =>  https://www.youtube.com/watch?v=CXTiwkZVoZI  */}
    </div>
}
export default SpringBasicInterviewQuestions;
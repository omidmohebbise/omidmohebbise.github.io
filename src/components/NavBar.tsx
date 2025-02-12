"use client"

import Dropdown from 'react-bootstrap/Dropdown';

export default function NavBar() {
    return (
        <>
            <div className="flex justify-content-around w-100 text-light bg-dark p-2">

                <div className='mx-2'>
                    <Dropdown>
                        <Dropdown.Item href="/">
                            Portfolio
                        </Dropdown.Item>
                    </Dropdown>
                </div>
                <div className=''>
                    <Dropdown>
                        <Dropdown.Toggle as="span" style={{ cursor: 'pointer' }} className='color-white' variant="success" id="dropdown-basic">
                            Software
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="/software/architecture"><b>Architecture</b></Dropdown.Item>

                            <ul className='bg-light p-0'>
                                <Dropdown.Item href="/software/development"><b>Development</b></Dropdown.Item>
                                <li><Dropdown.Item className='ps-4' href="#/software/development/java">- Java</Dropdown.Item></li>
                                <li>
                                    <ul>
                                        <li> <Dropdown.Item className='ps-2' href="/software/development/java/java-8-23">Java 8 to 23 versions</Dropdown.Item></li>
                                    </ul>
                                </li>
                                <li>
                                <Dropdown.Item className='ps-4' href="/software/development/spring">- Spring Product</Dropdown.Item>
                                </li>
                            </ul>


                           
                            <Dropdown.Item href="#/action-2"><b>Design Patterns</b></Dropdown.Item>
                            <Dropdown.Item href="#/action-3"><b>Frameworks</b></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>

                <div className='mx-2'>
                    <Dropdown>
                        <Dropdown.Item href="/cloud">
                            Cloud
                        </Dropdown.Item>
                    </Dropdown>
                </div>
                <div className='mx-2'>
                    <Dropdown>
                        <Dropdown.Item href="/ai">
                            AI
                        </Dropdown.Item>
                    </Dropdown>
                </div>
                <div className='mx-2'>
                    <Dropdown>
                        <Dropdown.Toggle as="span" style={{ cursor: 'pointer' }} className='color-white' variant="success" id="dropdown-basic">
                            Security
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="/security/key-concepts">Key Concepts</Dropdown.Item>
                            <Dropdown.Item href="/security/security-areas">Security Areas</Dropdown.Item>
                            <Dropdown.Item href="/security/web-security">Web Security</Dropdown.Item>
                            <Dropdown.Item href="/security/algorithms">Algorithms</Dropdown.Item>
                            <Dropdown.Item href="/security/frameworks">Frameworks</Dropdown.Item>
                            <Dropdown.Item href="/security/modern-security-approches">Modern Security</Dropdown.Item>
                            <Dropdown.Item href="/security/stride-model">STRIDE model</Dropdown.Item>
                        </Dropdown.Menu>

                    </Dropdown>
                </div>

            </div>


        </>
    )
}
"use client"

import Dropdown from 'react-bootstrap/Dropdown';

export default function NavBar() {
    return (
        <>
            <div className="flex justify-content-around w-100 text-light bg-dark p-2">

                {/* <nav>
                        <ul>
                            
                            <li><a href="/">Portfolio</a></li>
                            <li><a href="/architecture">Architecture</a></li>
                            <li><a href="/cloud">Cloud</a></li>
                            <li><a href="/security">Security</a></li>
                            <li><a href="/ai">AI</a></li>
                            <li >

                                
                            </li>

                        </ul>
                    </nav> */}
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
                            <Dropdown.Item href="/architecture">Architecture</Dropdown.Item>
                            <Dropdown.Item href="/development">Development</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Design Patterns</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Frameworks</Dropdown.Item>
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
                        <Dropdown.Item href="/security">
                            Security
                        </Dropdown.Item>
                    </Dropdown>
                </div>

            </div>


        </>
    )
}
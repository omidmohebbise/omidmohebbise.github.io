'use client';

import {useState} from 'react';
import {Navbar, Nav, Container, Dropdown} from 'react-bootstrap';
import {Menu} from 'lucide-react';
import styles from './NavBar.module.css';

export default function NavBar() {
    const [expanded, setExpanded] = useState(false);

    return (
        <Navbar expanded={expanded} expand="md" className={styles.navbar‌}>
            <Container className='pt-0 pb-2'>
                <Navbar.Toggle
                    aria-controls="navbar-nav"
                    onClick={() => setExpanded(!expanded)}
                    className={styles.navbarToggle}
                >
                    <Menu className={styles.menuIcon}/>
                </Navbar.Toggle>

                <Navbar.Collapse id="navbar-nav">
                    <Nav className={styles.navContent}>
                        <Nav.Link href="/" className={styles.navLink}>
                            Portfolio
                        </Nav.Link>

                        <Dropdown>
                            <Dropdown.Toggle as="span" className={styles.dropdownToggle}>
                                Development
                            </Dropdown.Toggle>
                            <Dropdown.Menu className={styles.dropdownMenu}>
                                <Dropdown.Item href="/development/concepts" className={styles.dropdownItem}>
                                    Concepts
                                </Dropdown.Item>
                                <Dropdown.Item href="/#"
                                               className={`${styles.dropdownItem}`}>
                                    Java
                                </Dropdown.Item>
                                <Dropdown.Item href="/development/java/java-8-23"
                                               className={`${styles.dropdownItem} ${styles.subSubItem}`}>
                                    Java 8 to 23 versions
                                </Dropdown.Item>
                                <Dropdown.Item href="/development/java/common-libs"
                                               className={`${styles.dropdownItem} ${styles.subSubItem}`}>
                                    Common Libraries
                                </Dropdown.Item>
                                <Dropdown.Item href="/development/java/concurrency"
                                               className={`${styles.dropdownItem} ${styles.subSubItem}`}>
                                    Concurrency
                                </Dropdown.Item>
                                <Dropdown.Item href="/development/spring"
                                               className={`${styles.dropdownItem}`}>
                                    Spring
                                </Dropdown.Item>
                                <Dropdown.Item href="/kotlin"
                                               className={`${styles.dropdownItem}`}>
                                    Kotlin
                                </Dropdown.Item>
                                <Dropdown.Item href="/python"
                                               className={`${styles.dropdownItem}`}>
                                    Python
                                </Dropdown.Item>
                                <Dropdown.Item href="/design-pattern" className={styles.dropdownItem}>
                                    Design Patterns
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle as="span" className={styles.dropdownToggle}>
                                Architecture
                            </Dropdown.Toggle>
                            <Dropdown.Menu className={styles.dropdownMenu}>
                                <Nav.Link href="/architecture/concepts"
                                          className={styles.dropdownItem}> Concepts </Nav.Link>
                                <Nav.Link href="/architecture/principles"
                                          className={styles.dropdownItem}> Principles </Nav.Link>
                                <Nav.Link href="/architecture/challenges"
                                          className={styles.dropdownItem}> Challenges </Nav.Link>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown>
                            <Dropdown.Toggle as="span" className={styles.dropdownToggle}>
                                Cloud
                            </Dropdown.Toggle>
                            <Dropdown.Menu className={styles.dropdownMenu}>
                                <Nav.Link href="/cloud/aws" className={styles.dropdownItem}> AWS </Nav.Link>
                                <Nav.Link href="/cloud/azure" className={styles.dropdownItem}> Azure </Nav.Link>
                                <Nav.Link href="/cloud/gcp" className={styles.dropdownItem}> GCP </Nav.Link>
                                <Nav.Link href="/cloud/service-mapping" className={styles.dropdownItem}> Service
                                    Mapping </Nav.Link>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown>
                            <Dropdown.Toggle as="span" className={styles.dropdownToggle}>
                                AI
                            </Dropdown.Toggle>
                            <Dropdown.Menu className={styles.dropdownMenu}>
                                <Dropdown.Item href="/ai/main-concepts" className={styles.dropdownItem}>Main
                                    Concepts</Dropdown.Item>
                                <Dropdown.Item href="/ai/tools" className={styles.dropdownItem}>Tools</Dropdown.Item>
                                <Dropdown.Item href="/ai/libraries"
                                               className={styles.dropdownItem}>Libraries</Dropdown.Item>
                                {/* <Dropdown.Item href="/ai/gans" className={styles.dropdownItem}>GANS</Dropdown.Item> */}
                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown>
                            <Dropdown.Toggle as="span" className={styles.dropdownToggle}>
                                Security
                            </Dropdown.Toggle>
                            <Dropdown.Menu className={styles.dropdownMenu}>
                                <Dropdown.Item href="/security/key-concepts" className={styles.dropdownItem}>Key
                                    Concepts</Dropdown.Item>
                                <Dropdown.Item href="/security/security-areas" className={styles.dropdownItem}>Security
                                    Areas</Dropdown.Item>
                                <Dropdown.Item href="/security/web-security" className={styles.dropdownItem}>Web
                                    Security</Dropdown.Item>
                                <Dropdown.Item href="/security/algorithms"
                                               className={styles.dropdownItem}>Algorithms</Dropdown.Item>
                                <Dropdown.Item href="/security/frameworks"
                                               className={styles.dropdownItem}>Frameworks</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown>
                            <Dropdown.Toggle as="span" className={styles.dropdownToggle}>
                                DevOps
                            </Dropdown.Toggle>
                            <Dropdown.Menu className={styles.dropdownMenu}>
                                <Dropdown.Item href="/devops/k8s"
                                               className={`${styles.dropdownItem}`}>
                                    K8S
                                </Dropdown.Item>
                                <Dropdown.Item href="/devops/k8s"
                                               className={`${styles.dropdownItem} ${styles.subSubItem}`}>
                                    Architecture
                                </Dropdown.Item>
                                <Dropdown.Item href="/devops/k8s/yaml-files"
                                               className={`${styles.dropdownItem} ${styles.subSubItem}`}>
                                    Yaml Files
                                </Dropdown.Item>

                                <Nav.Link href="/cloud" className={styles.navLink}> Docker </Nav.Link>

                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
'use client';

import { useState } from 'react';
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import { Menu } from 'lucide-react';
import styles from './NavBar.module.css';

export default function NavBar() {
    const [expanded, setExpanded] = useState(false);

    return (
        <Navbar expanded={expanded} expand="md" className={styles.navbar‌}>
            <Container>
                <Navbar.Toggle 
                    aria-controls="navbar-nav" 
                    onClick={() => setExpanded(!expanded)}
                    className={styles.navbarToggle}
                >
                    <Menu className={styles.menuIcon} />
                </Navbar.Toggle>
                
                <Navbar.Collapse id="navbar-nav">
                    <Nav className={styles.navContent}>
                        <Nav.Link href="/" className={styles.navLink}>
                            Portfolio
                        </Nav.Link>

                        <Dropdown>
                            <Dropdown.Toggle as="span" className={styles.dropdownToggle}>
                                Software
                            </Dropdown.Toggle>
                            <Dropdown.Menu className={styles.dropdownMenu}>
                                <Dropdown.Item href="/software/architecture" className={styles.dropdownItem}>
                                    <b>Architecture</b>
                                </Dropdown.Item>
                                <div className={styles.submenu}>
                                    <Dropdown.Item href="/software/development" className={styles.dropdownItem}>
                                        <b>Development</b>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="/software/development/java" className={`${styles.dropdownItem} ${styles.subItem}`}>
                                        Java
                                    </Dropdown.Item>
                                    <Dropdown.Item href="/software/development/java/java-8-23" className={`${styles.dropdownItem} ${styles.subSubItem}`}>
                                        Java 8 to 23 versions
                                    </Dropdown.Item>
                                    <Dropdown.Item href="/software/development/spring" className={`${styles.dropdownItem} ${styles.subItem}`}>
                                        Spring Product
                                    </Dropdown.Item>
                                </div>
                                <Dropdown.Item href="#/action-2" className={styles.dropdownItem}>
                                    <b>Design Patterns</b>
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-3" className={styles.dropdownItem}>
                                    <b>Frameworks</b>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Nav.Link href="/cloud" className={styles.navLink}>
                            Cloud
                        </Nav.Link>

                        <Nav.Link href="/ai" className={styles.navLink}>
                            AI
                        </Nav.Link>

                        <Dropdown>
                            <Dropdown.Toggle as="span" className={styles.dropdownToggle}>
                                Security
                            </Dropdown.Toggle>
                            <Dropdown.Menu className={styles.dropdownMenu}>
                                <Dropdown.Item href="/security/key-concepts" className={styles.dropdownItem}>Key Concepts</Dropdown.Item>
                                <Dropdown.Item href="/security/security-areas" className={styles.dropdownItem}>Security Areas</Dropdown.Item>
                                <Dropdown.Item href="/security/web-security" className={styles.dropdownItem}>Web Security</Dropdown.Item>
                                <Dropdown.Item href="/security/algorithms" className={styles.dropdownItem}>Algorithms</Dropdown.Item>
                                <Dropdown.Item href="/security/frameworks" className={styles.dropdownItem}>Frameworks</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
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
                                <Dropdown.Item href="/development/java/java-8-23"
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
                                <Dropdown.Item href="/development/java/concurrency/thread-local"
                                               className={`${styles.dropdownItem} ${styles.subSubItem}`}>
                                    Thread Local
                                </Dropdown.Item>
                                <Dropdown.Item href="/development/java/concurrency/inheritable-thread-local"
                                               className={`${styles.dropdownItem} ${styles.subSubItem}`}>
                                    Inheritable Thread Local
                                </Dropdown.Item>
                                <Dropdown.Item href="/development/java/security"
                                               className={`${styles.dropdownItem} ${styles.subSubItem}`}>
                                    Security
                                </Dropdown.Item>

                                <Dropdown.Item href="/development/spring"
                                               className={`${styles.dropdownItem}`}>
                                    Spring
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
                                <Dropdown.Item href="/architecture/software-architecture/definition" className={styles.dropdownItem}>Software Architecture</Dropdown.Item>
                                <Dropdown.Item href="/architecture/software-architecture/key-components" className={`${styles.dropdownItem} ${styles.subSubItem}`}>Key Components</Dropdown.Item>
                                <Dropdown.Item href="/architecture/software-architecture/roles-responsibilities" className={`${styles.dropdownItem} ${styles.subSubItem}`}>Roles & Responsibilities</Dropdown.Item>
                                <Dropdown.Item href="/architecture/software-architecture/common-patterns" className={`${styles.dropdownItem} ${styles.subSubItem}`}>Common Patterns</Dropdown.Item>
                                <Dropdown.Item href="/architecture/software-architecture/real-world-examples" className={`${styles.dropdownItem} ${styles.subSubItem}`}>Real-World Examples</Dropdown.Item>

                                <Dropdown.Item href="/architecture/data-architecture-detailed/source-systems" className={styles.dropdownItem}>Data Architecture</Dropdown.Item>
                                <Dropdown.Item href="/architecture/data-architecture-detailed/data-ingestion" className={`${styles.dropdownItem} ${styles.subSubItem}`}>Data Ingestion</Dropdown.Item>
                                <Dropdown.Item href="/architecture/data-architecture-detailed/storage-layers" className={`${styles.dropdownItem} ${styles.subSubItem}`}>Storage Layers</Dropdown.Item>
                                <Dropdown.Item href="/architecture/data-architecture-detailed/metadata-catalog" className={`${styles.dropdownItem} ${styles.subSubItem}`}>Metadata & Catalog</Dropdown.Item>
                                <Dropdown.Item href="/architecture/data-architecture-detailed/quality-governance" className={`${styles.dropdownItem} ${styles.subSubItem}`}>Quality & Governance</Dropdown.Item>

                                <Dropdown.Item href="/architecture/enterprise-architecture/overview" className={styles.dropdownItem}>Enterprise Architecture</Dropdown.Item>
                                <Dropdown.Item href="/architecture/enterprise-architecture/business-architecture" className={`${styles.dropdownItem} ${styles.subSubItem}`}>Business Architecture</Dropdown.Item>
                                <Dropdown.Item href="/architecture/enterprise-architecture/application-architecture" className={`${styles.dropdownItem} ${styles.subSubItem}`}>Application Architecture</Dropdown.Item>
                                <Dropdown.Item href="/architecture/enterprise-architecture/technology-architecture" className={`${styles.dropdownItem} ${styles.subSubItem}`}>Technology Architecture</Dropdown.Item>
                                <Dropdown.Item href="/architecture/enterprise-architecture/governance" className={`${styles.dropdownItem} ${styles.subSubItem}`}>Governance</Dropdown.Item>

                                <Dropdown.Item href="/architecture/integration-architecture" className={styles.dropdownItem}>Integration Architecture</Dropdown.Item>
                                <Dropdown.Item href="/architecture/security-architecture" className={styles.dropdownItem}>Security Architecture</Dropdown.Item>
                                <Dropdown.Item href="/architecture/devops-platform-architecture" className={styles.dropdownItem}>DevOps & Platform Architecture</Dropdown.Item>
                                <Dropdown.Item href="/architecture/analytics-bi-architecture" className={styles.dropdownItem}>Analytics & BI Architecture</Dropdown.Item>
                                <Dropdown.Item href="/architecture/big-data-architecture" className={styles.dropdownItem}>Big Data Architecture</Dropdown.Item>
                                <Dropdown.Item href="/architecture/ai-ml-architecture" className={styles.dropdownItem}>AI/ML Architecture</Dropdown.Item>
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
                        <Dropdown>
                            <Dropdown.Toggle as="span" className={styles.dropdownToggle}>
                                Data
                            </Dropdown.Toggle>
                            <Dropdown.Menu className={styles.dropdownMenu}>
                                <Dropdown.Item href="/data" className={styles.dropdownItem}>Overview</Dropdown.Item>
                                <Dropdown.Item href="/data/role-of-data/why-data-matters" className={styles.dropdownItem}>Why Data Matters</Dropdown.Item>
                                <Dropdown.Item href="/data/role-of-data/data-driven-culture" className={`${styles.dropdownItem} ${styles.subSubItem}`}>Data-Driven Culture</Dropdown.Item>
                                <Dropdown.Item href="/data/role-of-data/data-in-business-functions" className={`${styles.dropdownItem} ${styles.subSubItem}`}>Data in Business Functions</Dropdown.Item>
                                <Dropdown.Item href="/data/role-of-data/data-governance-ethics" className={`${styles.dropdownItem} ${styles.subSubItem}`}>Data Governance & Ethics</Dropdown.Item>

                                <Dropdown.Item href="/data/databases-storage/overview" className={styles.dropdownItem}>Databases vs Storage</Dropdown.Item>
                                <Dropdown.Item href="/data/databases-storage/types-of-databases" className={`${styles.dropdownItem} ${styles.subSubItem}`}>Types of Databases</Dropdown.Item>
                                <Dropdown.Item href="/data/databases-storage/storage-options" className={`${styles.dropdownItem} ${styles.subSubItem}`}>Storage Options</Dropdown.Item>
                                <Dropdown.Item href="/data/databases-storage/choosing-right-option" className={`${styles.dropdownItem} ${styles.subSubItem}`}>Choosing the Right Option</Dropdown.Item>

                                <Dropdown.Item href="/data/data-processing/batch-processing" className={styles.dropdownItem}>Batch Processing</Dropdown.Item>
                                <Dropdown.Item href="/data/data-processing/real-time-streaming" className={`${styles.dropdownItem} ${styles.subSubItem}`}>Real-Time / Streaming</Dropdown.Item>
                                <Dropdown.Item href="/data/data-processing/etl-elt" className={`${styles.dropdownItem} ${styles.subSubItem}`}>ETL & ELT</Dropdown.Item>
                                <Dropdown.Item href="/data/data-processing/data-integration" className={`${styles.dropdownItem} ${styles.subSubItem}`}>Data Integration</Dropdown.Item>
                                <Dropdown.Item href="/data/data-processing/analytics-bi" className={`${styles.dropdownItem} ${styles.subSubItem}`}>Analytics & BI</Dropdown.Item>

                                <Dropdown.Item href="/data/data-architecture/overview" className={styles.dropdownItem}>Data Architecture</Dropdown.Item>
                                <Dropdown.Item href="/data/data-architecture/reference-architectures" className={`${styles.dropdownItem} ${styles.subSubItem}`}>Reference Architectures</Dropdown.Item>
                                <Dropdown.Item href="/data/data-architecture/core-components" className={`${styles.dropdownItem} ${styles.subSubItem}`}>Core Components</Dropdown.Item>
                                <Dropdown.Item href="/data/data-architecture/data-management-practices" className={`${styles.dropdownItem} ${styles.subSubItem}`}>Data Management Practices</Dropdown.Item>
                                <Dropdown.Item href="/data/data-architecture/modern-trends" className={`${styles.dropdownItem} ${styles.subSubItem}`}>Modern Trends</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
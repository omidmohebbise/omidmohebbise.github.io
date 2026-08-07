'use client';

import { useState } from 'react';
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import { Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';
import styles from './NavBar.module.css';

export default function NavBar() {
    const [expanded, setExpanded] = useState(false);
    const pathname = usePathname();

    const active = (prefix: string) => pathname.startsWith(prefix);

    return (
        <Navbar expanded={expanded} expand="md" className={styles.navbar}>
            <Container className="pt-0 pb-0">
                <Navbar.Toggle
                    aria-controls="navbar-nav"
                    onClick={() => setExpanded(!expanded)}
                    className={styles.navbarToggle}
                >
                    <Menu className={styles.menuIcon} />
                </Navbar.Toggle>

                <Navbar.Collapse id="navbar-nav">
                    <Nav className={styles.navContent}>
                        <Nav.Link
                            href="/"
                            className={`${styles.navLink} ${pathname === '/' ? styles.navLinkActive : ''}`}
                        >
                            Portfolio
                        </Nav.Link>

                        <Dropdown>
                            <Dropdown.Toggle as="span" className={`${styles.dropdownToggle} ${active('/development') ? styles.toggleActive : ''}`}>
                                Development
                            </Dropdown.Toggle>
                            <Dropdown.Menu className={styles.dropdownMenu}>
                                <Dropdown.Item href="/development/java/java-8-23" className={styles.dropdownItem}>Java</Dropdown.Item>
                                <Dropdown.Item href="/development/java/java-8-23" className={`${styles.dropdownItem} ${styles.subItem}`}>Java 8 to 23</Dropdown.Item>
                                <Dropdown.Item href="/development/java/common-libs" className={`${styles.dropdownItem} ${styles.subItem}`}>Common Libraries</Dropdown.Item>
                                <Dropdown.Item href="/development/java/concurrency" className={`${styles.dropdownItem} ${styles.subItem}`}>Concurrency</Dropdown.Item>
                                <Dropdown.Item href="/development/java/concurrency/thread-local" className={`${styles.dropdownItem} ${styles.subItem}`}>Thread Local</Dropdown.Item>
                                <Dropdown.Item href="/development/java/concurrency/inheritable-thread-local" className={`${styles.dropdownItem} ${styles.subItem}`}>Inheritable Thread Local</Dropdown.Item>
                                <Dropdown.Item href="/development/java/security" className={`${styles.dropdownItem} ${styles.subItem}`}>Security</Dropdown.Item>
                                <Dropdown.Item href="/development/spring" className={styles.dropdownItem}>Spring</Dropdown.Item>
                                <Dropdown.Item href="/design-pattern" className={styles.dropdownItem}>Design Patterns</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown>
                            <Dropdown.Toggle as="span" className={`${styles.dropdownToggle} ${active('/architecture') ? styles.toggleActive : ''}`}>
                                Architecture
                            </Dropdown.Toggle>
                            <Dropdown.Menu className={styles.dropdownMenu}>
                                <Dropdown.Item href="/architecture/software-architecture/definition" className={styles.dropdownItem}>Software Architecture</Dropdown.Item>
                                <Dropdown.Item href="/architecture/software-architecture/key-components" className={`${styles.dropdownItem} ${styles.subItem}`}>Key Components</Dropdown.Item>
                                <Dropdown.Item href="/architecture/software-architecture/roles-responsibilities" className={`${styles.dropdownItem} ${styles.subItem}`}>Roles & Responsibilities</Dropdown.Item>
                                <Dropdown.Item href="/architecture/software-architecture/common-patterns" className={`${styles.dropdownItem} ${styles.subItem}`}>Common Patterns</Dropdown.Item>
                                <Dropdown.Item href="/architecture/software-architecture/real-world-examples" className={`${styles.dropdownItem} ${styles.subItem}`}>Real-World Examples</Dropdown.Item>
                                <Dropdown.Item href="/architecture/data-architecture-detailed/source-systems" className={styles.dropdownItem}>Data Architecture</Dropdown.Item>
                                <Dropdown.Item href="/architecture/data-architecture-detailed/data-ingestion" className={`${styles.dropdownItem} ${styles.subItem}`}>Data Ingestion</Dropdown.Item>
                                <Dropdown.Item href="/architecture/data-architecture-detailed/storage-layers" className={`${styles.dropdownItem} ${styles.subItem}`}>Storage Layers</Dropdown.Item>
                                <Dropdown.Item href="/architecture/data-architecture-detailed/metadata-catalog" className={`${styles.dropdownItem} ${styles.subItem}`}>Metadata & Catalog</Dropdown.Item>
                                <Dropdown.Item href="/architecture/data-architecture-detailed/quality-governance" className={`${styles.dropdownItem} ${styles.subItem}`}>Quality & Governance</Dropdown.Item>
                                <Dropdown.Item href="/architecture/enterprise-architecture/overview" className={styles.dropdownItem}>Enterprise Architecture</Dropdown.Item>
                                <Dropdown.Item href="/architecture/enterprise-architecture/business-architecture" className={`${styles.dropdownItem} ${styles.subItem}`}>Business Architecture</Dropdown.Item>
                                <Dropdown.Item href="/architecture/enterprise-architecture/application-architecture" className={`${styles.dropdownItem} ${styles.subItem}`}>Application Architecture</Dropdown.Item>
                                <Dropdown.Item href="/architecture/enterprise-architecture/technology-architecture" className={`${styles.dropdownItem} ${styles.subItem}`}>Technology Architecture</Dropdown.Item>
                                <Dropdown.Item href="/architecture/enterprise-architecture/governance" className={`${styles.dropdownItem} ${styles.subItem}`}>Governance</Dropdown.Item>
                                <Dropdown.Item href="/architecture/integration-architecture" className={styles.dropdownItem}>Integration Architecture</Dropdown.Item>
                                <Dropdown.Item href="/architecture/security-architecture" className={styles.dropdownItem}>Security Architecture</Dropdown.Item>
                                <Dropdown.Item href="/architecture/devops-platform-architecture" className={styles.dropdownItem}>DevOps & Platform Architecture</Dropdown.Item>
                                <Dropdown.Item href="/architecture/analytics-bi-architecture" className={styles.dropdownItem}>Analytics & BI Architecture</Dropdown.Item>
                                <Dropdown.Item href="/architecture/big-data-architecture" className={styles.dropdownItem}>Big Data Architecture</Dropdown.Item>
                                <Dropdown.Item href="/architecture/ai-ml-architecture" className={styles.dropdownItem}>AI/ML Architecture</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown>
                            <Dropdown.Toggle as="span" className={`${styles.dropdownToggle} ${active('/cloud') ? styles.toggleActive : ''}`}>
                                Cloud
                            </Dropdown.Toggle>
                            <Dropdown.Menu className={styles.dropdownMenu}>
                                <Nav.Link href="/cloud/aws" className={styles.dropdownItem}>AWS</Nav.Link>
                                <Nav.Link href="/cloud/azure" className={styles.dropdownItem}>Azure</Nav.Link>
                                <Nav.Link href="/cloud/gcp" className={styles.dropdownItem}>GCP</Nav.Link>
                                <Nav.Link href="/cloud/service-mapping" className={styles.dropdownItem}>Service Mapping</Nav.Link>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown>
                            <Dropdown.Toggle as="span" className={`${styles.dropdownToggle} ${active('/ai') ? styles.toggleActive : ''}`}>
                                AI
                            </Dropdown.Toggle>
                            <Dropdown.Menu className={styles.dropdownMenu}>
                                <Dropdown.Item href="/ai/main-concepts" className={styles.dropdownItem}>Main Concepts</Dropdown.Item>
                                <Dropdown.Item href="/ai/tools" className={styles.dropdownItem}>Tools</Dropdown.Item>
                                <Dropdown.Item href="/ai/libraries" className={styles.dropdownItem}>Libraries</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown>
                            <Dropdown.Toggle as="span" className={`${styles.dropdownToggle} ${active('/security') ? styles.toggleActive : ''}`}>
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

                        <Dropdown>
                            <Dropdown.Toggle as="span" className={`${styles.dropdownToggle} ${active('/devops') ? styles.toggleActive : ''}`}>
                                DevOps
                            </Dropdown.Toggle>
                            <Dropdown.Menu className={styles.dropdownMenu}>
                                <Dropdown.Item href="/devops/k8s" className={styles.dropdownItem}>Kubernetes</Dropdown.Item>
                                <Dropdown.Item href="/devops/k8s/yaml-files" className={`${styles.dropdownItem} ${styles.subItem}`}>YAML Files</Dropdown.Item>
                                <Dropdown.Item href="/devops/k8s/iqs" className={`${styles.dropdownItem} ${styles.subItem}`}>Interview Questions</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown>
                            <Dropdown.Toggle as="span" className={`${styles.dropdownToggle} ${active('/data') ? styles.toggleActive : ''}`}>
                                Data
                            </Dropdown.Toggle>
                            <Dropdown.Menu className={styles.dropdownMenu}>
                                <Dropdown.Item href="/data" className={styles.dropdownItem}>Overview</Dropdown.Item>
                                <Dropdown.Item href="/data/role-of-data/why-data-matters" className={styles.dropdownItem}>Why Data Matters</Dropdown.Item>
                                <Dropdown.Item href="/data/role-of-data/data-driven-culture" className={`${styles.dropdownItem} ${styles.subItem}`}>Data-Driven Culture</Dropdown.Item>
                                <Dropdown.Item href="/data/role-of-data/data-in-business-functions" className={`${styles.dropdownItem} ${styles.subItem}`}>Data in Business Functions</Dropdown.Item>
                                <Dropdown.Item href="/data/role-of-data/data-governance-ethics" className={`${styles.dropdownItem} ${styles.subItem}`}>Data Governance & Ethics</Dropdown.Item>
                                <Dropdown.Item href="/data/databases-storage/overview" className={styles.dropdownItem}>Databases vs Storage</Dropdown.Item>
                                <Dropdown.Item href="/data/databases-storage/types-of-databases" className={`${styles.dropdownItem} ${styles.subItem}`}>Types of Databases</Dropdown.Item>
                                <Dropdown.Item href="/data/databases-storage/storage-options" className={`${styles.dropdownItem} ${styles.subItem}`}>Storage Options</Dropdown.Item>
                                <Dropdown.Item href="/data/databases-storage/choosing-right-option" className={`${styles.dropdownItem} ${styles.subItem}`}>Choosing the Right Option</Dropdown.Item>
                                <Dropdown.Item href="/data/data-processing/batch-processing" className={styles.dropdownItem}>Batch Processing</Dropdown.Item>
                                <Dropdown.Item href="/data/data-processing/real-time-streaming" className={`${styles.dropdownItem} ${styles.subItem}`}>Real-Time / Streaming</Dropdown.Item>
                                <Dropdown.Item href="/data/data-processing/etl-elt" className={`${styles.dropdownItem} ${styles.subItem}`}>ETL & ELT</Dropdown.Item>
                                <Dropdown.Item href="/data/data-processing/data-integration" className={`${styles.dropdownItem} ${styles.subItem}`}>Data Integration</Dropdown.Item>
                                <Dropdown.Item href="/data/data-processing/analytics-bi" className={`${styles.dropdownItem} ${styles.subItem}`}>Analytics & BI</Dropdown.Item>
                                <Dropdown.Item href="/data/data-architecture/overview" className={styles.dropdownItem}>Data Architecture</Dropdown.Item>
                                <Dropdown.Item href="/data/data-architecture/reference-architectures" className={`${styles.dropdownItem} ${styles.subItem}`}>Reference Architectures</Dropdown.Item>
                                <Dropdown.Item href="/data/data-architecture/core-components" className={`${styles.dropdownItem} ${styles.subItem}`}>Core Components</Dropdown.Item>
                                <Dropdown.Item href="/data/data-architecture/data-management-practices" className={`${styles.dropdownItem} ${styles.subItem}`}>Data Management Practices</Dropdown.Item>
                                <Dropdown.Item href="/data/data-architecture/modern-trends" className={`${styles.dropdownItem} ${styles.subItem}`}>Modern Trends</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

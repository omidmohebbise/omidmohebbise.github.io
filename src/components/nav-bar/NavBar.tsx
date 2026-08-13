'use client';

import { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';
import styles from './NavBar.module.css';
import NavMenu from './NavMenu';
import { mainNavMenus } from './navTrees';

export default function NavBar() {
    const [expanded, setExpanded] = useState(false);
    const pathname = usePathname();

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

                        {mainNavMenus.map((menu) => (
                            <NavMenu key={menu.label} {...menu} />
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

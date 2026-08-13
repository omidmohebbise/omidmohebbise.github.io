'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import navStyles from './NavBar.module.css';
import styles from './NavMenu.module.css';

export interface NavNode {
    title: string;
    href: string;
    children?: NavNode[];
}

// Desktop flyouts stay useful instead of cascading off-screen — beyond
// this depth a node still opens fine, just as its own landing page via
// a "See all" link rather than another nested flyout panel. Kept at 1
// (one flyout column beyond the base panel) so it stays safe for menus
// positioned near either edge of the nav bar.
const MAX_FLYOUT_DEPTH = 1;

export default function NavMenu({
    label,
    activePrefix,
    overviewHref,
    overviewLabel,
    nodes,
}: {
    label: string;
    activePrefix: string;
    overviewHref?: string;
    overviewLabel?: string;
    nodes: NavNode[];
}) {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    const wrapperRef = useRef<HTMLDivElement>(null);
    const isActive = pathname.startsWith(activePrefix);

    useEffect(() => {
        if (!open) return;

        function onDocClick(e: MouseEvent) {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        }
        function onKeyDown(e: KeyboardEvent) {
            if (e.key === 'Escape') setOpen(false);
        }

        document.addEventListener('mousedown', onDocClick);
        document.addEventListener('keydown', onKeyDown);
        return () => {
            document.removeEventListener('mousedown', onDocClick);
            document.removeEventListener('keydown', onKeyDown);
        };
    }, [open]);

    const closeMenu = () => setOpen(false);

    return (
        <div className={styles.wrapper} ref={wrapperRef}>
            <button
                type="button"
                className={`${navStyles.dropdownToggle} ${styles.trigger} ${isActive ? navStyles.toggleActive : ''}`}
                aria-haspopup="true"
                aria-expanded={open}
                onClick={() => setOpen((o) => !o)}
            >
                {label}
            </button>

            {open && (
                <div className={styles.panel} role="menu" aria-label={label}>
                    {overviewHref && (
                        <Link href={overviewHref} role="menuitem" className={styles.overviewLink} onClick={closeMenu}>
                            {overviewLabel ?? `${label} Overview`}
                        </Link>
                    )}
                    <NavMenuLevel nodes={nodes} depth={0} closeMenu={closeMenu} />
                </div>
            )}
        </div>
    );
}

function NavMenuLevel({
    nodes,
    depth,
    closeMenu,
}: {
    nodes: NavNode[];
    depth: number;
    closeMenu: () => void;
}) {
    const [openHref, setOpenHref] = useState<string | null>(null);

    return (
        <ul className={styles.level} role="menu">
            {nodes.map((node) => {
                const hasChildren = !!node.children?.length;
                const canFlyout = hasChildren && depth < MAX_FLYOUT_DEPTH;
                const tooDeepForFlyout = hasChildren && depth >= MAX_FLYOUT_DEPTH;
                const isOpen = openHref === node.href;

                return (
                    <li key={node.href} className={styles.item} role="none">
                        <div className={styles.itemRow}>
                            <Link href={node.href} role="menuitem" className={styles.itemLink} onClick={closeMenu}>
                                {node.title}
                            </Link>
                            {canFlyout && (
                                <button
                                    type="button"
                                    className={styles.expandBtn}
                                    aria-expanded={isOpen}
                                    aria-label={`${isOpen ? 'Hide' : 'Show'} ${node.title} submenu`}
                                    onClick={() => setOpenHref(isOpen ? null : node.href)}
                                >
                                    <ChevronRight size={14} />
                                </button>
                            )}
                        </div>

                        {canFlyout && isOpen && (
                            <div className={styles.flyout}>
                                <NavMenuLevel nodes={node.children!} depth={depth + 1} closeMenu={closeMenu} />
                            </div>
                        )}

                        {tooDeepForFlyout && (
                            <div className={styles.seeAll}>
                                <Link href={node.href} onClick={closeMenu}>See all in {node.title} →</Link>
                            </div>
                        )}
                    </li>
                );
            })}
        </ul>
    );
}

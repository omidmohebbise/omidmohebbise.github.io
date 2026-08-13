'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { findAncestorChain } from '@/app/music/musicTree';
import styles from './Breadcrumbs.module.css';

export default function Breadcrumbs() {
    const pathname = usePathname();
    if (!pathname.startsWith('/music')) return null;

    const chain = findAncestorChain(pathname);
    if (chain.length <= 1) return null;

    return (
        <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
            <ol className={styles.list}>
                {chain.map((crumb, i) => {
                    const isLast = i === chain.length - 1;
                    return (
                        <li key={crumb.path} className={styles.item}>
                            {isLast ? (
                                <span aria-current="page">{crumb.title}</span>
                            ) : (
                                <Link href={crumb.path}>{crumb.title}</Link>
                            )}
                            {!isLast && <span className={styles.separator} aria-hidden="true">/</span>}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}

import Link from 'next/link';
import Breadcrumbs from '@/components/breadcrumbs/Breadcrumbs';

export interface MusicLandingItem {
    title: string;
    href: string;
    summary?: string;
}

export default function MusicLandingPage({
    title,
    intro,
    items,
    children,
}: {
    title: string;
    intro?: string;
    items: MusicLandingItem[];
    children?: React.ReactNode;
}) {
    return (
        <div className="container py-5">
            <p className="section-label">Music</p>
            <h1 className="section-title">{title}</h1>
            <hr className="section-rule" />
            <Breadcrumbs />

            {intro && <p className="mb-4">{intro}</p>}

            <div className="row">
                {items.map((item) => (
                    <div className="col-md-6 mb-4" key={item.href}>
                        <Link href={item.href} className="text-decoration-none">
                            <div className="card h-100 shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    {item.summary && <p className="card-text mb-0">{item.summary}</p>}
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

            {children}
        </div>
    );
}

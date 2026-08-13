import Link from 'next/link';

export interface RelatedTopic {
    title: string;
    href: string;
    description?: string;
}

export default function RelatedTopics({ items }: { items: RelatedTopic[] }) {
    if (!items.length) return null;

    return (
        <div className="card shadow-sm">
            <div className="card-body">
                <h5 className="mb-2">Related Topics</h5>
                <ul className="list-group list-group-flush">
                    {items.map((item) => (
                        <li className="list-group-item" key={item.href}>
                            <Link href={item.href}><strong>{item.title}</strong></Link>
                            {item.description && <> — {item.description}</>}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

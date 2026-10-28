import Link from 'next/link';

const topics = [
    { title: 'Algebra', href: '/math/algebra', summary: 'Variables, equations, functions, and the techniques for solving them.' },
    { title: 'Calculus', href: '/math/calculus', summary: 'Limits, derivatives, integrals, and series.' },
    { title: 'Linear Algebra', href: '/math/linear-algebra', summary: 'Vectors, matrices, and transformations — the backbone of ML and graphics.' },
    { title: 'Probability & Statistics', href: '/math/probability-statistics', summary: 'Reasoning under uncertainty and learning from data.' },
    { title: 'Discrete Math', href: '/math/discrete-math', summary: 'Logic, sets, counting, and graphs.' },
];

export default function MathPage() {
    return (
        <div className="container py-5">
            <p className="section-label">Knowledge Base</p>
            <h1 className="section-title">Math</h1>
            <hr className="section-rule" />

            <div className="row">
                {topics.map((t) => (
                    <div key={t.href} className="col-md-6 mb-4">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">
                                    <Link href={t.href}>{t.title}</Link>
                                </h5>
                                <p className="card-text mb-0">{t.summary}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

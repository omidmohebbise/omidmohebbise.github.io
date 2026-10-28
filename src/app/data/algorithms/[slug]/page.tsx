import Link from 'next/link';
import { notFound } from 'next/navigation';
import AlgorithmPlayer from '@/components/algorithms/AlgorithmPlayer';
import { algorithms, getAlgorithm } from '@/components/algorithms/meta';

const levelClass: Record<string, string> = {
    Basic: 'bg-success',
    Intermediate: 'bg-primary',
    Advanced: 'bg-danger',
};

export function generateStaticParams() {
    return algorithms.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
    const meta = getAlgorithm(params.slug);
    return { title: meta ? `${meta.title} — Algorithms` : 'Algorithms' };
}

export default function AlgorithmPage({ params }: { params: { slug: string } }) {
    const meta = getAlgorithm(params.slug);
    if (!meta) notFound();

    const siblings = algorithms.filter((a) => a.category === meta.category);
    const i = siblings.findIndex((a) => a.slug === meta.slug);
    const prev = siblings[i - 1];
    const next = siblings[i + 1];

    return (
        <div className="container py-5">
            <p className="section-label">Algorithms · {meta.category}</p>
            <h1 className="section-title">
                {meta.title} <span className={`badge ${levelClass[meta.level]} align-middle fs-6`}>{meta.level}</span>
            </h1>
            <hr className="section-rule" />

            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <h5>What it does</h5>
                            <p className="mb-0">{meta.summary}</p>
                        </div>
                        <div className="col-md-6">
                            <h5>How it works</h5>
                            <ol className="list-group list-group-numbered list-group-flush">
                                {meta.howItWorks.map((s) => (
                                    <li className="list-group-item" key={s}>{s}</li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h5>Visualizer</h5>
                    <AlgorithmPlayer slug={meta.slug} />
                </div>
            </div>

            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h5>Complexity</h5>
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr><th>Best</th><th>Average</th><th>Worst</th><th>Space</th></tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{meta.complexity.best}</td>
                                    <td>{meta.complexity.average}</td>
                                    <td>{meta.complexity.worst}</td>
                                    <td>{meta.complexity.space}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {meta.properties && (
                        <ul className="list-unstyled mb-0">
                            {meta.properties.map((p, idx) => (
                                <li key={p} className={idx < meta.properties!.length - 1 ? 'mb-1' : 'mb-0'}>{p}</li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>

            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <h5>When to use</h5>
                            <ul className="list-group list-group-flush mb-3">
                                {meta.useCases.map((u) => (
                                    <li className="list-group-item" key={u}>{u}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <h5>Watch out for</h5>
                            <ul className="list-group list-group-flush mb-3">
                                {meta.watchOut.map((u) => (
                                    <li className="list-group-item" key={u}>{u}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-between">
                {prev ? <Link href={`/data/algorithms/${prev.slug}`}>← {prev.title}</Link> : <span />}
                <Link href="/data/algorithms">All algorithms</Link>
                {next ? <Link href={`/data/algorithms/${next.slug}`}>{next.title} →</Link> : <span />}
            </div>
        </div>
    );
}

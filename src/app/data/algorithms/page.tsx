import Link from 'next/link';
import { algorithms, categoryBlurb, categoryOrder } from '@/components/algorithms/meta';

const levelClass: Record<string, string> = {
    Basic: 'bg-success',
    Intermediate: 'bg-primary',
    Advanced: 'bg-danger',
};

export default function AlgorithmsPage() {
    return (
        <div className="container py-5">
            <p className="section-label">Data</p>
            <h1 className="section-title">Algorithms</h1>
            <hr className="section-rule" />

            <p className="mb-4">
                Interactive walk-throughs of core algorithms, from basic to advanced. Every page has a
                step-by-step visualizer — play, pause, step back, and watch the code line that is running.
            </p>

            {categoryOrder.map((category) => (
                <div className="card mb-4 shadow-sm" key={category}>
                    <div className="card-body">
                        <h5>{category}</h5>
                        <p className="mb-3">{categoryBlurb[category]}</p>
                        <div className="row">
                            {algorithms
                                .filter((a) => a.category === category)
                                .map((a) => (
                                    <div className="col-md-6 mb-3" key={a.slug}>
                                        <Link href={`/data/algorithms/${a.slug}`} className="text-decoration-none">
                                            <div className="card h-100 shadow-sm">
                                                <div className="card-body">
                                                    <h6 className="card-title">
                                                        {a.title}{' '}
                                                        <span className={`badge ${levelClass[a.level]} ms-1`}>{a.level}</span>
                                                    </h6>
                                                    <p className="card-text mb-0">{a.summary}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

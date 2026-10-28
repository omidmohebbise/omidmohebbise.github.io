import TangentExplorer from '@/components/math/TangentExplorer';

export default function CalculusPage() {
    return (
        <div className="container py-5">
            <p className="section-label">Math</p>
            <h1 className="section-title">Calculus</h1>
            <hr className="section-rule" />

            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h5>Tangent & Derivative Explorer</h5>
                    <TangentExplorer />
                </div>
            </div>

            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <div className="row">
                    <div className="col-md-6 mb-4">
                        <h5>Limits & Continuity</h5>
                        <ul className="list-group list-group-flush mb-3">
                            <li className="list-group-item"><strong>Limit:</strong> the value a function approaches as its input approaches a point</li>
                            <li className="list-group-item"><strong> Continuity:</strong> no jumps or gaps — the limit equals the function value</li>
                        </ul>
                    </div>
                    <div className="col-md-6 mb-4">
                        <h5>Derivatives</h5>
                        <ul className="list-group list-group-flush mb-3">
                            <li className="list-group-item"><strong>Definition:</strong> instantaneous rate of change, the slope of the tangent line</li>
                            <li className="list-group-item"><strong> Rules:</strong> power, product, quotient and chain rules</li>
                            <li className="list-group-item"><strong> Applications:</strong> optimization, related rates, motion</li>
                        </ul>
                    </div>
                    <div className="col-md-6 mb-4">
                        <h5>Integrals</h5>
                        <ul className="list-group list-group-flush mb-3">
                            <li className="list-group-item"><strong>Definite integral:</strong> accumulated area under a curve</li>
                            <li className="list-group-item"><strong> Fundamental theorem:</strong> links derivatives and integrals as inverse operations</li>
                            <li className="list-group-item"><strong> Techniques:</strong> substitution, integration by parts</li>
                        </ul>
                    </div>
                    <div className="col-md-6 mb-4">
                        <h5>Series</h5>
                        <ul className="list-group list-group-flush mb-3">
                            <li className="list-group-item"><strong>Sequences & series:</strong> sums of infinitely many terms</li>
                            <li className="list-group-item"><strong> Taylor series:</strong> approximates functions with polynomials</li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

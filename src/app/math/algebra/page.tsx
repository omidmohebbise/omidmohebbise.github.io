export default function AlgebraPage() {
    return (
        <div className="container py-5">
            <p className="section-label">Math</p>
            <h1 className="section-title">Algebra</h1>
            <hr className="section-rule" />

            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <div className="row">
                    <div className="col-md-6 mb-4">
                        <h5>Core Ideas</h5>
                        <ul className="list-group list-group-flush mb-3">
                            <li className="list-group-item"><strong>Variables:</strong> symbols standing for unknown or changing quantities</li>
                            <li className="list-group-item"><strong> Expressions:</strong> combinations of variables, numbers and operations</li>
                            <li className="list-group-item"><strong> Equations:</strong> statements that two expressions are equal</li>
                            <li className="list-group-item"><strong> Functions:</strong> rules mapping each input to exactly one output</li>
                        </ul>
                    </div>
                    <div className="col-md-6 mb-4">
                        <h5>Common Techniques</h5>
                        <ul className="list-group list-group-flush mb-3">
                            <li className="list-group-item"><strong>Factoring:</strong> rewrite a polynomial as a product of simpler terms</li>
                            <li className="list-group-item"><strong> Quadratic formula:</strong> solves ax² + bx + c = 0 for any coefficients</li>
                            <li className="list-group-item"><strong> Systems of equations:</strong> solve several equations together by substitution or elimination</li>
                            <li className="list-group-item"><strong> Exponents & logarithms:</strong> inverse operations for growth and scale</li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

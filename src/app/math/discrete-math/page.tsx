export default function DiscreteMathPage() {
    return (
        <div className="container py-5">
            <p className="section-label">Math</p>
            <h1 className="section-title">Discrete Math</h1>
            <hr className="section-rule" />

            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <div className="row">
                    <div className="col-md-6 mb-4">
                        <h5>Logic & Sets</h5>
                        <ul className="list-group list-group-flush mb-3">
                            <li className="list-group-item"><strong>Propositional logic:</strong> AND, OR, NOT and implication over true/false statements</li>
                            <li className="list-group-item"><strong> Sets:</strong> collections with union, intersection and complement</li>
                            <li className="list-group-item"><strong> Proof techniques:</strong> direct, contradiction and induction</li>
                        </ul>
                    </div>
                    <div className="col-md-6 mb-4">
                        <h5>Counting & Graphs</h5>
                        <ul className="list-group list-group-flush mb-3">
                            <li className="list-group-item"><strong>Combinatorics:</strong> permutations and combinations</li>
                            <li className="list-group-item"><strong> Graph theory:</strong> nodes and edges modelling networks and relations</li>
                            <li className="list-group-item"><strong> Recurrences:</strong> define sequences in terms of earlier terms</li>
                            <li className="list-group-item"><strong> Modular arithmetic:</strong> foundation of hashing and cryptography</li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

import TransformExplorer from '@/components/math/TransformExplorer';

export default function LinearAlgebraPage() {
    return (
        <div className="container py-5">
            <p className="section-label">Math</p>
            <h1 className="section-title">Linear Algebra</h1>
            <hr className="section-rule" />

            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h5>Matrix Transformation Explorer</h5>
                    <TransformExplorer />
                </div>
            </div>

            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <div className="row">
                    <div className="col-md-6 mb-4">
                        <h5>Objects</h5>
                        <ul className="list-group list-group-flush mb-3">
                            <li className="list-group-item"><strong>Vectors:</strong> ordered lists of numbers with magnitude and direction</li>
                            <li className="list-group-item"><strong> Matrices:</strong> rectangular arrays representing linear transformations</li>
                            <li className="list-group-item"><strong> Tensors:</strong> generalization to higher dimensions</li>
                        </ul>
                    </div>
                    <div className="col-md-6 mb-4">
                        <h5>Key Concepts</h5>
                        <ul className="list-group list-group-flush mb-3">
                            <li className="list-group-item"><strong>Matrix multiplication:</strong> composition of transformations</li>
                            <li className="list-group-item"><strong> Determinant:</strong> scaling factor of a transformation</li>
                            <li className="list-group-item"><strong> Eigenvalues & eigenvectors:</strong> directions a transformation only stretches</li>
                            <li className="list-group-item"><strong> Rank & span:</strong> dimension of what a set of vectors can reach</li>
                        </ul>
                    </div>
                    <div className="col-md-6 mb-4">
                        <h5>Decompositions</h5>
                        <ul className="list-group list-group-flush mb-3">
                            <li className="list-group-item"><strong>LU:</strong> efficient solving of linear systems</li>
                            <li className="list-group-item"><strong> SVD:</strong> factorization behind PCA and compression</li>
                            <li className="list-group-item"><strong> Eigendecomposition:</strong> diagonalizes a matrix</li>
                        </ul>
                    </div>
                    <div className="col-md-6 mb-4">
                        <h5>Used In</h5>
                        <ul className="list-group list-group-flush mb-3">
                            <li className="list-group-item"><strong>Machine learning:</strong> embeddings, weights and gradients are all vectors and matrices</li>
                            <li className="list-group-item"><strong> Graphics:</strong> rotation, scaling and projection</li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

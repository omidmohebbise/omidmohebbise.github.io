export default function Educations() {
    return (
        <section id="education" className="bg-light py-5">
            <div className="container py-1">
                <h2 className="section-title py-0 ">Education</h2>
                <div className="row g-4">
                    <div className="col-md-6">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body p-4">
                                <h4 className="card-title fw-bold mb-3">M.Sc. Software Engineering</h4>
                                <p className="card-text text-muted">Payame Noor University, Tehran, Iran (2013-2016)</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body p-4">
                                <h4 className="card-title fw-bold mb-3">B.Sc. Software Engineering</h4>
                                <p className="card-text text-muted">Payame Noor University, Isfahan, Iran
                                    (2008-2013)</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 mt-4">
                        <div className="card shadow-sm">
                            <div className="card-body p-4">
                                <h4 className="card-title fw-bold mb-3">Languages</h4>
                                <div className="row">
                                    <div className="col-md-4">
                                        <p className="card-text"><strong>English:</strong> Fluent</p>
                                    </div>
                                    <div className="col-md-4">
                                        <p className="card-text"><strong>Persian:</strong> Native</p>
                                    </div>
                                    <div className="col-md-4">
                                        <p className="card-text"><strong>Dutch:</strong> Beginner</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
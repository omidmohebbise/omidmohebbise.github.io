

const OtherPage: React.FC = () => {

    return (
        <div className="container py-5">
            <p className="section-label">Other</p>
            <h1 className="section-title">Other Topics</h1>
            <hr className="section-rule" />
            <div className="row g-3">
                <div className="col-md-6">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h5 className="fw-semibold mb-2" style={{ color: '#1e293b' }}>Languages</h5>
                            <ul className="list-unstyled mb-0">
                                <li><a href="/other/lang/english">English</a></li>
                                <li><a href="/other/lang/dutch">Dutch</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h5 className="fw-semibold mb-2" style={{ color: '#1e293b' }}>Leadership</h5>
                            <ul className="list-unstyled mb-0">
                                <li><a href="/other/chapter-lead-vs-tech-lead">Chapter Lead vs Tech Lead</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default OtherPage;

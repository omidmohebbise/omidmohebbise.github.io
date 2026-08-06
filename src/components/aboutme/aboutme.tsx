export default function AboutMe() {
    return (
        <section id="about" className="bg-white py-5">
            <div className="container">
                <p className="section-label">Profile</p>
                <h2 className="section-title">About Me</h2>
                <hr className="section-rule" />

                <div className="row g-4 align-items-start">
                    <div className="col-md-8">
                        <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: '1.8', marginBottom: '1rem' }}>
                            I'm a Senior Software Engineer specializing in Java, Spring, Cloud, and
                            microservices, with a deep focus on event-driven solutions. My background spans
                            ERP systems and fintech applications, where I've built a reputation as a
                            reliable collaborator and technical leader.
                        </p>
                        <p style={{ color: '#64748b', lineHeight: '1.75', marginBottom: 0 }}>
                            Passionate about software architecture and continuously evolving with the latest
                            technologies. Outside of engineering, I'm a musician and avid board game player.
                        </p>
                    </div>

                    <div className="col-md-4">
                        <div
                            className="card border-0"
                            style={{ background: '#f8fafc', boxShadow: 'none' }}
                        >
                            <div className="card-body p-3">
                                <ul className="list-unstyled mb-0" style={{ fontSize: '0.875rem', color: '#475569' }}>
                                    {[
                                        { icon: '📍', text: 'Amsterdam, Netherlands' },
                                        { icon: '💼', text: 'Open to opportunities' },
                                        { icon: '🎓', text: 'M.Sc. Software Engineering' },
                                        { icon: '💬', text: 'English · Persian · Dutch' },
                                    ].map(({ icon, text }) => (
                                        <li key={text} className="d-flex align-items-center gap-2 mb-2">
                                            <span>{icon}</span>
                                            <span>{text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

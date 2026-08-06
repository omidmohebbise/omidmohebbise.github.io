const degrees = [
    {
        degree: 'M.Sc. Software Engineering',
        institution: 'Payame Noor University, Tehran',
        years: '2013 – 2016',
    },
    {
        degree: 'B.Sc. Software Engineering',
        institution: 'Payame Noor University, Isfahan',
        years: '2008 – 2013',
    },
];

const languages = [
    { name: 'English', level: 'Fluent',   bg: '#eff6ff', border: '#bfdbfe', text: '#1d4ed8' },
    { name: 'Persian', level: 'Native',   bg: '#f0fdf4', border: '#bbf7d0', text: '#15803d' },
    { name: 'Dutch',   level: 'Beginner', bg: '#fefce8', border: '#fef08a', text: '#854d0e' },
];

export default function Educations() {
    return (
        <section id="education" style={{ background: '#f8fafc', padding: '3.5rem 0' }}>
            <div className="container">
                <p className="section-label">Background</p>
                <h2 className="section-title">Education &amp; Languages</h2>
                <hr className="section-rule" />

                <div className="row g-4">
                    {/* Degrees */}
                    {degrees.map(({ degree, institution, years }) => (
                        <div className="col-md-6" key={degree}>
                            <div className="card h-100">
                                <div className="card-body p-4">
                                    <div className="d-flex align-items-start gap-3">
                                        <span style={{ fontSize: '2rem', lineHeight: 1, flexShrink: 0 }}>🎓</span>
                                        <div>
                                            <h4 style={{
                                                fontSize: '1rem',
                                                fontWeight: 700,
                                                color: '#0f172a',
                                                marginBottom: '0.3rem',
                                            }}>
                                                {degree}
                                            </h4>
                                            <p style={{
                                                fontSize: '0.875rem',
                                                color: '#64748b',
                                                marginBottom: '0.5rem',
                                            }}>
                                                {institution}
                                            </p>
                                            <span style={{
                                                display: 'inline-block',
                                                fontSize: '0.75rem',
                                                fontWeight: 500,
                                                color: '#2563eb',
                                                background: '#eff6ff',
                                                padding: '0.15rem 0.65rem',
                                                borderRadius: 9999,
                                                border: '1px solid #bfdbfe',
                                            }}>
                                                {years}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Languages */}
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body p-4">
                                <h4 style={{
                                    fontSize: '1rem',
                                    fontWeight: 700,
                                    color: '#0f172a',
                                    marginBottom: '1rem',
                                }}>
                                    🌐 Languages
                                </h4>
                                <div className="row g-3">
                                    {languages.map(({ name, level, bg, border, text }) => (
                                        <div className="col-md-4" key={name}>
                                            <div style={{
                                                padding: '0.75rem 1rem',
                                                borderRadius: 10,
                                                background: bg,
                                                border: `1px solid ${border}`,
                                            }}>
                                                <p style={{
                                                    fontSize: '0.78rem',
                                                    color: '#94a3b8',
                                                    marginBottom: '0.15rem',
                                                    fontWeight: 500,
                                                }}>
                                                    {name}
                                                </p>
                                                <p style={{
                                                    fontSize: '0.95rem',
                                                    color: text,
                                                    fontWeight: 700,
                                                    marginBottom: 0,
                                                }}>
                                                    {level}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

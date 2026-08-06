interface ExperienceProps {
    title: string;
    company: string;
    location: string;
    period: string;
    responsibilities: string[];
    techStack: string[];
}

const ExperienceCard = ({
    title,
    company,
    location,
    period,
    responsibilities,
    techStack,
}: ExperienceProps) => {
    return (
        <div className="col-12 mb-4">
            <div
                className="card"
                style={{ borderLeftWidth: 3, borderLeftColor: '#2563eb' }}
            >
                <div className="card-body p-4">
                    {/* ── Header row ──────────────────────── */}
                    <div className="d-flex flex-wrap justify-content-between align-items-start gap-2 mb-3">
                        <div>
                            <h3 style={{
                                fontSize: '1.05rem',
                                fontWeight: 700,
                                color: '#0f172a',
                                marginBottom: '0.2rem',
                            }}>
                                {title}
                            </h3>
                            <p style={{
                                fontSize: '0.9rem',
                                fontWeight: 600,
                                color: '#2563eb',
                                marginBottom: '0.2rem',
                            }}>
                                {company}
                            </p>
                            <p style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: 0 }}>
                                📍 {location}
                            </p>
                        </div>

                        <span style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            padding: '0.25rem 0.8rem',
                            fontSize: '0.75rem',
                            fontWeight: 500,
                            borderRadius: 9999,
                            background: '#eff6ff',
                            color: '#1d4ed8',
                            border: '1px solid #bfdbfe',
                            whiteSpace: 'nowrap',
                            flexShrink: 0,
                        }}>
                            {period}
                        </span>
                    </div>

                    {/* ── Responsibilities ─────────────────── */}
                    <ul style={{ paddingLeft: '1.2rem', marginBottom: '1rem' }}>
                        {responsibilities.map((r, i) => (
                            <li
                                key={i}
                                style={{
                                    fontSize: '0.875rem',
                                    color: '#475569',
                                    marginBottom: '0.45rem',
                                    lineHeight: 1.65,
                                }}
                            >
                                {r}
                            </li>
                        ))}
                    </ul>

                    {/* ── Tech stack ───────────────────────── */}
                    <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '0.85rem' }}>
                        <p style={{
                            fontSize: '0.68rem',
                            fontWeight: 700,
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            color: '#94a3b8',
                            marginBottom: '0.5rem',
                        }}>
                            Tech Stack
                        </p>
                        <div className="d-flex flex-wrap gap-1">
                            {techStack.map(t => (
                                <span
                                    key={t}
                                    style={{
                                        display: 'inline-flex',
                                        padding: '0.18rem 0.6rem',
                                        fontSize: '0.72rem',
                                        fontWeight: 500,
                                        borderRadius: 9999,
                                        background: '#f8fafc',
                                        color: '#475569',
                                        border: '1px solid #e2e8f0',
                                        whiteSpace: 'nowrap',
                                    }}
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExperienceCard;

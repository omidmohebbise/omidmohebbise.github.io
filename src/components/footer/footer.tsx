import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

const socials = [
    { href: 'https://www.linkedin.com/in/omidmohebbise', label: 'LinkedIn', icon: <Linkedin size={16} /> },
    { href: 'mailto:omidmohebbise@gmail.com',            label: 'Email',    icon: <Mail     size={16} /> },
    { href: 'https://www.github.com/omidmohebbise',      label: 'GitHub',   icon: <Github   size={16} /> },
    { href: 'https://x.com/omid_mohebbi_se',             label: 'Twitter',  icon: <Twitter  size={16} /> },
];

export default function Footer() {
    return (
        <footer style={{
            background: '#0f172a',
            color: '#94a3b8',
            paddingTop: '3rem',
            paddingBottom: '2rem',
            marginTop: '0',
        }}>
            <div className="container">
                {/* Top row */}
                <div className="row align-items-start g-4 mb-4">
                    <div className="col-md-6">
                        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f1f5f9', marginBottom: '0.3rem' }}>
                            Omid Mohebbi
                        </h3>
                        <p style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '0.25rem' }}>
                            Senior Software Engineer &amp; Solution Architect
                        </p>
                        <p style={{ fontSize: '0.875rem', color: '#475569', marginBottom: 0 }}>
                            📍 Amsterdam, Netherlands
                        </p>
                    </div>

                    <div className="col-md-6">
                        <div className="d-flex gap-2 justify-content-md-end">
                            {socials.map(({ href, label, icon }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    target={href.startsWith('mailto') ? undefined : '_blank'}
                                    rel="noopener noreferrer"
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '2.1rem',
                                        height: '2.1rem',
                                        borderRadius: 8,
                                        background: 'rgba(255,255,255,0.06)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        color: '#64748b',
                                        textDecoration: 'none',
                                        transition: 'background 0.2s, color 0.2s',
                                    }}
                                >
                                    {icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom row */}
                <div style={{
                    borderTop: '1px solid rgba(255,255,255,0.06)',
                    paddingTop: '1.5rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                }}>
                    <p style={{ fontSize: '0.8rem', color: '#475569', marginBottom: 0 }}>
                        &copy; {new Date().getFullYear()} Omid Mohebbi. All rights reserved.
                    </p>
                    <p style={{ fontSize: '0.8rem', color: '#334155', marginBottom: 0 }}>
                        Built with Next.js &amp; TypeScript
                    </p>
                </div>
            </div>
        </footer>
    );
}

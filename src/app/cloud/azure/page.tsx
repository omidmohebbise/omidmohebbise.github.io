import { azureServices } from './data.js';

const levelDot = (level: string) => {
    if (level === 'skill-level-high') return <span style={{ display: 'inline-block', width: 10, height: 10, borderRadius: '50%', background: '#22c55e', marginRight: 8, flexShrink: 0 }} title="HIGH" />;
    if (level === 'skill-level-medium') return <span style={{ display: 'inline-block', width: 10, height: 10, borderRadius: '50%', background: '#eab308', marginRight: 8, flexShrink: 0 }} title="MEDIUM" />;
    return <span style={{ display: 'inline-block', width: 10, height: 10, borderRadius: '50%', background: '#94a3b8', marginRight: 8, flexShrink: 0 }} title="LOW" />;
};

export default function Azure() {
    return (
        <div className="container py-5">
            <p className="section-label">Cloud</p>
            <h1 className="section-title">Azure Services</h1>
            <hr className="section-rule" />
            <div className="mb-3 d-flex gap-3" style={{ fontSize: '0.8rem', color: '#475569' }}>
                <span><span style={{ display: 'inline-block', width: 10, height: 10, borderRadius: '50%', background: '#22c55e', marginRight: 4 }} />High priority</span>
                <span><span style={{ display: 'inline-block', width: 10, height: 10, borderRadius: '50%', background: '#eab308', marginRight: 4 }} />Medium priority</span>
                <span><span style={{ display: 'inline-block', width: 10, height: 10, borderRadius: '50%', background: '#94a3b8', marginRight: 4 }} />Low priority</span>
            </div>
            {azureServices.map(categoryAndService =>
                <div className="service-category mb-4" key={categoryAndService.title}>
                    <h3 style={{ color: '#0f172a', fontWeight: 600, padding: '0.5rem 0.75rem', background: '#f1f5f9', borderRadius: 8, marginBottom: '0.75rem' }}>{categoryAndService.title}</h3>
                    <ul className="list-group service-list">
                        {categoryAndService.services.map(service =>
                            <li className="list-group-item" key={service.title} style={{ display: 'flex', alignItems: 'flex-start' }}>
                                {levelDot(service.level)}
                                <span><strong>{service.title}</strong> {service.description}</span>
                            </li>
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
}

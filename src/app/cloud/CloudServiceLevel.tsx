import styles from './CloudServiceLevel.module.css';

interface Service {
    title: string;
    description: string;
    level: string;
}

interface ServiceCategory {
    title: string;
    services: Service[];
}

const LEVEL_LABEL: Record<string, string> = {
    'skill-level-high': 'HIGH',
    'skill-level-medium': 'MEDIUM',
    'skill-level-low': 'LOW',
};

const LEVEL_CLASS: Record<string, string> = {
    'skill-level-high': styles.dotHigh,
    'skill-level-medium': styles.dotMedium,
    'skill-level-low': styles.dotLow,
};

function LevelDot({ level }: { level: string }) {
    return <span className={`${styles.dot} ${LEVEL_CLASS[level] ?? styles.dotLow}`} title={LEVEL_LABEL[level] ?? 'LOW'} />;
}

function LevelLegend() {
    return (
        <div className={`mb-3 d-flex gap-3 ${styles.legendRow}`}>
            <span><LevelDot level="skill-level-high" />High priority</span>
            <span><LevelDot level="skill-level-medium" />Medium priority</span>
            <span><LevelDot level="skill-level-low" />Low priority</span>
        </div>
    );
}

export default function CloudServicesList({ categories }: { categories: ServiceCategory[] }) {
    return (
        <>
            <LevelLegend />
            {categories.map((category) => (
                <div className="mb-4" key={category.title}>
                    <h3 className={styles.categoryTitle}>{category.title}</h3>
                    <ul className="list-group">
                        {category.services.map((service) => (
                            <li className="list-group-item d-flex align-items-start" key={service.title}>
                                <LevelDot level={service.level} />
                                <span><strong>{service.title}</strong> {service.description}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </>
    );
}

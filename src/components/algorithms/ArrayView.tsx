import type { ArrayFrame } from './types';
import styles from './player.module.css';

export default function ArrayView({ frame }: { frame: ArrayFrame }) {
    const max = Math.max(...frame.values, 1);
    return (
        <div className={styles.bars} role="img" aria-label={`Array: ${frame.values.join(', ')}`}>
            {frame.values.map((v, i) => (
                <div className={styles.barCol} key={i}>
                    <span className={styles.barValue}>{v}</span>
                    <div
                        className={`${styles.bar} ${styles[`tone_${frame.tones[i] ?? 'none'}`]}`}
                        style={{ height: `${Math.max(8, (v / max) * 100)}%` }}
                    />
                    <span className={styles.barIndex}>{i}</span>
                    <span className={styles.pointer}>{frame.pointers[i] ?? ' '}</span>
                </div>
            ))}
        </div>
    );
}

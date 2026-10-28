'use client';

import { useState } from 'react';
import styles from './math.module.css';

const FUNCS = {
    'x²': { f: (x: number) => x * x, d: (x: number) => 2 * x, yMin: -2, yMax: 9 },
    'x³ − 3x': { f: (x: number) => x ** 3 - 3 * x, d: (x: number) => 3 * x * x - 3, yMin: -6, yMax: 6 },
    'sin x': { f: (x: number) => Math.sin(x), d: (x: number) => Math.cos(x), yMin: -2, yMax: 2 },
} as const;
type Key = keyof typeof FUNCS;

const W = 400;
const H = 240;
const X_MIN = -3;
const X_MAX = 3;

export default function TangentExplorer() {
    const [key, setKey] = useState<Key>('x²');
    const [x0, setX0] = useState(1);
    const fn = FUNCS[key];

    const sx = (x: number) => ((x - X_MIN) / (X_MAX - X_MIN)) * W;
    const sy = (y: number) => H - ((y - fn.yMin) / (fn.yMax - fn.yMin)) * H;

    const pts: string[] = [];
    for (let i = 0; i <= 120; i++) {
        const x = X_MIN + ((X_MAX - X_MIN) * i) / 120;
        pts.push(`${sx(x).toFixed(1)},${sy(fn.f(x)).toFixed(1)}`);
    }
    const y0 = fn.f(x0);
    const m = fn.d(x0);
    const tl = (x: number) => y0 + m * (x - x0);

    return (
        <div className={styles.wrap}>
            <div className={styles.row}>
                <label>
                    f(x) =
                    <select className={styles.select} value={key} onChange={(e) => setKey(e.target.value as Key)}>
                        {Object.keys(FUNCS).map((k) => (
                            <option key={k}>{k}</option>
                        ))}
                    </select>
                </label>
                <label>
                    x₀ = {x0.toFixed(2)}
                    <input type="range" min={X_MIN} max={X_MAX} step={0.05} value={x0} onChange={(e) => setX0(Number(e.target.value))} />
                </label>
            </div>
            <svg viewBox={`0 0 ${W} ${H}`} className={styles.svg} role="img" aria-label="Function graph with tangent line">
                <line x1={0} x2={W} y1={sy(0)} y2={sy(0)} className={styles.axis} />
                <line x1={sx(0)} x2={sx(0)} y1={0} y2={H} className={styles.axis} />
                <polyline points={pts.join(' ')} className={styles.curve} />
                <line x1={sx(X_MIN)} y1={sy(tl(X_MIN))} x2={sx(X_MAX)} y2={sy(tl(X_MAX))} className={styles.tangent} clipPath="url(#clip)" />
                <circle cx={sx(x0)} cy={sy(y0)} r={5} className={styles.dot} />
                <defs>
                    <clipPath id="clip"><rect x={0} y={0} width={W} height={H} /></clipPath>
                </defs>
            </svg>
            <div className={styles.readout}>
                <span>f(x₀) = {y0.toFixed(2)}</span>
                <span>f′(x₀) = slope = {m.toFixed(2)}</span>
                <span>{Math.abs(m) < 0.05 ? 'Slope ≈ 0: a peak, valley or flat point' : m > 0 ? 'Rising here' : 'Falling here'}</span>
            </div>
            <p className="mb-0 small text-muted">
                The red line touches the curve at x₀ and has the same slope as the curve there — that slope is the derivative.
            </p>
        </div>
    );
}

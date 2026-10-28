'use client';

import { useState } from 'react';
import styles from './math.module.css';

// Abramowitz–Stegun erf approximation
function erf(x: number) {
    const s = Math.sign(x);
    x = Math.abs(x);
    const t = 1 / (1 + 0.3275911 * x);
    const y = 1 - ((((1.061405429 * t - 1.453152027) * t + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t * Math.exp(-x * x);
    return s * y;
}

const W = 400;
const H = 220;
const X_MIN = -8;
const X_MAX = 8;

export default function NormalExplorer() {
    const [mu, setMu] = useState(0);
    const [sigma, setSigma] = useState(1);
    const [k, setK] = useState(1);

    const pdf = (x: number) => Math.exp(-0.5 * ((x - mu) / sigma) ** 2) / (sigma * Math.sqrt(2 * Math.PI));
    const sx = (x: number) => ((x - X_MIN) / (X_MAX - X_MIN)) * W;
    const sy = (y: number) => H - 10 - (y / 0.85) * (H - 20);

    const line: string[] = [];
    const shade: string[] = [`${sx(mu - k * sigma)},${sy(0)}`];
    for (let i = 0; i <= 200; i++) {
        const x = X_MIN + ((X_MAX - X_MIN) * i) / 200;
        line.push(`${sx(x).toFixed(1)},${sy(pdf(x)).toFixed(1)}`);
        if (x >= mu - k * sigma && x <= mu + k * sigma) shade.push(`${sx(x).toFixed(1)},${sy(pdf(x)).toFixed(1)}`);
    }
    shade.push(`${sx(mu + k * sigma)},${sy(0)}`);
    const prob = erf(k / Math.SQRT2);

    return (
        <div className={styles.wrap}>
            <div className={styles.row}>
                <label>
                    μ = {mu.toFixed(1)}
                    <input type="range" min={-4} max={4} step={0.1} value={mu} onChange={(e) => setMu(Number(e.target.value))} />
                </label>
                <label>
                    σ = {sigma.toFixed(1)}
                    <input type="range" min={0.5} max={3} step={0.1} value={sigma} onChange={(e) => setSigma(Number(e.target.value))} />
                </label>
                <label>
                    Within
                    <select className={styles.select} value={k} onChange={(e) => setK(Number(e.target.value))}>
                        {[1, 2, 3].map((n) => (
                            <option key={n} value={n}>{n}σ</option>
                        ))}
                    </select>
                </label>
            </div>
            <svg viewBox={`0 0 ${W} ${H}`} className={styles.svg} role="img" aria-label="Normal distribution curve with shaded area">
                <line x1={0} x2={W} y1={sy(0)} y2={sy(0)} className={styles.axis} />
                <polygon points={shade.join(' ')} className={styles.shade} />
                <polyline points={line.join(' ')} className={styles.curve} />
                <line x1={sx(mu)} x2={sx(mu)} y1={sy(0)} y2={sy(pdf(mu))} className={styles.axis} strokeDasharray="4 3" />
            </svg>
            <div className={styles.readout}>
                <span>P(μ − {k}σ ≤ X ≤ μ + {k}σ) = {(prob * 100).toFixed(1)}%</span>
                <span>
                    range: {(mu - k * sigma).toFixed(1)} … {(mu + k * sigma).toFixed(1)}
                </span>
            </div>
            <p className="mb-0 small text-muted">
                μ slides the curve; σ widens or narrows it. The shaded area is the probability — try 1σ, 2σ, 3σ for the 68–95–99.7 rule.
            </p>
        </div>
    );
}

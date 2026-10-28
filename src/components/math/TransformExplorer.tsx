'use client';

import { useState } from 'react';
import styles from './math.module.css';

type M = [number, number, number, number]; // a b / c d  → columns (a,c) and (b,d)

const PRESETS: Record<string, M> = {
    Identity: [1, 0, 0, 1],
    'Rotate 45°': [0.71, -0.71, 0.71, 0.71],
    'Scale 1.5×': [1.5, 0, 0, 1.5],
    'Shear': [1, 1, 0, 1],
    'Reflect x': [1, 0, 0, -1],
    'Squash (det 0)': [1, 1, 1, 1],
};

const S = 40; // px per unit
const C = 160; // svg centre
const R = 3;

export default function TransformExplorer() {
    const [m, setM] = useState<M>(PRESETS.Identity);
    const [a, b, c, d] = m;
    const tx = (x: number, y: number): [number, number] => [a * x + b * y, c * x + d * y];
    const px = ([x, y]: [number, number]) => `${C + x * S},${C - y * S}`;
    const det = a * d - b * c;

    const lines: JSX.Element[] = [];
    for (let k = -R; k <= R; k++) {
        const [x1, y1] = tx(k, -R);
        const [x2, y2] = tx(k, R);
        const [x3, y3] = tx(-R, k);
        const [x4, y4] = tx(R, k);
        lines.push(
            <line key={`v${k}`} x1={C + x1 * S} y1={C - y1 * S} x2={C + x2 * S} y2={C - y2 * S} className={styles.gridImg} />,
            <line key={`h${k}`} x1={C + x3 * S} y1={C - y3 * S} x2={C + x4 * S} y2={C - y4 * S} className={styles.gridImg} />,
        );
    }
    const square = [tx(0, 0), tx(1, 0), tx(1, 1), tx(0, 1)].map(px).join(' ');
    const set = (i: number, v: number) => setM((prev) => prev.map((p, j) => (j === i ? v : p)) as M);

    return (
        <div className={styles.wrap}>
            <div className={styles.row}>
                {Object.keys(PRESETS).map((name) => (
                    <button key={name} type="button" className={styles.btn} onClick={() => setM(PRESETS[name])}>
                        {name}
                    </button>
                ))}
            </div>
            <div className={styles.row}>
                {(['a', 'b', 'c', 'd'] as const).map((n, i) => (
                    <label key={n}>
                        {n} = {m[i].toFixed(2)}
                        <input type="range" min={-2} max={2} step={0.05} value={m[i]} onChange={(e) => set(i, Number(e.target.value))} />
                    </label>
                ))}
            </div>
            <svg viewBox={`0 0 ${2 * C} ${2 * C}`} className={styles.svg} role="img" aria-label="Plane transformed by a 2 by 2 matrix">
                <rect x={C} y={C - S} width={S} height={S} className={styles.unit} />
                <line x1={0} x2={2 * C} y1={C} y2={C} className={styles.axis} />
                <line x1={C} x2={C} y1={0} y2={2 * C} className={styles.axis} />
                {lines}
                <polygon points={square} className={styles.image} />
                <line x1={C} y1={C} x2={C + a * S} y2={C - c * S} className={styles.vecI} />
                <line x1={C} y1={C} x2={C + b * S} y2={C - d * S} className={styles.vecJ} />
                <text x={C + a * S + 4} y={C - c * S - 4} className={styles.label}>î</text>
                <text x={C + b * S + 4} y={C - d * S - 4} className={styles.label}>ĵ</text>
            </svg>
            <div className={styles.readout}>
                <span>M = [[{a.toFixed(2)}, {b.toFixed(2)}], [{c.toFixed(2)}, {d.toFixed(2)}]]</span>
                <span>det = {det.toFixed(2)} (area scale{det < 0 ? ', orientation flipped' : ''}{Math.abs(det) < 0.01 ? ', collapsed to a line' : ''})</span>
            </div>
            <p className="mb-0 small text-muted">
                Columns of the matrix are where the red î and green ĵ arrows land. The dashed unit square becomes the blue parallelogram, whose area is |det|.
            </p>
        </div>
    );
}

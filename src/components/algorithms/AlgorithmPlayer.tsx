'use client';

import { useEffect, useMemo, useState } from 'react';
import { Pause, Play, RotateCcw, Shuffle, StepBack, StepForward } from 'lucide-react';
import { getAlgorithm } from './meta';
import { runners } from './runners';
import { GRAPH } from './generators/graph';
import ArrayView from './ArrayView';
import GraphView from './GraphView';
import type { Tone } from './types';
import styles from './player.module.css';

const DEFAULT_VALUES = [29, 10, 14, 37, 13, 5, 42, 21, 8, 33];
const SPEEDS = [
    { label: 'Slow', ms: 1100 },
    { label: 'Normal', ms: 600 },
    { label: 'Fast', ms: 250 },
    { label: 'Turbo', ms: 80 },
];

const LEGEND: { tone: Tone; label: string; kinds: ('array' | 'graph')[] }[] = [
    { tone: 'compare', label: 'Comparing', kinds: ['array', 'graph'] },
    { tone: 'swap', label: 'Swap / write', kinds: ['array'] },
    { tone: 'active', label: 'Active', kinds: ['array', 'graph'] },
    { tone: 'pivot', label: 'Pivot / min / key', kinds: ['array'] },
    { tone: 'frontier', label: 'Discovered', kinds: ['graph'] },
    { tone: 'visited', label: 'Processed', kinds: ['array', 'graph'] },
    { tone: 'found', label: 'Found / placed', kinds: ['array', 'graph'] },
    { tone: 'sorted', label: 'Final / sorted', kinds: ['array'] },
    { tone: 'dim', label: 'Ruled out', kinds: ['array', 'graph'] },
];

function randomValues(size: number) {
    const set = new Set<number>();
    while (set.size < size) set.add(2 + Math.floor(Math.random() * 98));
    return Array.from(set);
}

export default function AlgorithmPlayer({ slug }: { slug: string }) {
    const meta = getAlgorithm(slug);
    const run = runners[slug];

    const [values, setValues] = useState(DEFAULT_VALUES);
    const [size, setSize] = useState(DEFAULT_VALUES.length);
    const [target, setTarget] = useState(37);
    const [start, setStart] = useState('A');
    const [speed, setSpeed] = useState(1);
    const [idx, setIdx] = useState(0);
    const [playing, setPlaying] = useState(false);

    const frames = useMemo(
        () => (run ? run({ values, target, start }) : []),
        [run, values, target, start],
    );

    useEffect(() => {
        setIdx(0);
        setPlaying(false);
    }, [frames]);

    useEffect(() => {
        if (!playing) return;
        if (idx >= frames.length - 1) {
            setPlaying(false);
            return;
        }
        const t = setTimeout(() => setIdx((i) => i + 1), SPEEDS[speed].ms);
        return () => clearTimeout(t);
    }, [playing, idx, frames.length, speed]);

    if (!meta || !run) return null;
    const frame = frames[Math.min(idx, frames.length - 1)];
    const atEnd = idx >= frames.length - 1;
    const isArray = meta.input !== 'graph';

    const shuffle = (n = size) => {
        const v = randomValues(n);
        setValues(v);
        if (meta.input === 'search') setTarget(v[Math.floor(Math.random() * v.length)]);
    };

    return (
        <div className={styles.player}>
            <div className={styles.inputs}>
                {isArray && (
                    <>
                        <button type="button" className={styles.btnLight} onClick={() => shuffle()}>
                            <Shuffle size={15} aria-hidden /> New array
                        </button>
                        <label className={styles.field}>
                            Size {size}
                            <input
                                type="range"
                                min={5}
                                max={20}
                                value={size}
                                onChange={(e) => {
                                    const n = Number(e.target.value);
                                    setSize(n);
                                    shuffle(n);
                                }}
                            />
                        </label>
                    </>
                )}
                {meta.input === 'search' && (
                    <label className={styles.field}>
                        Target
                        <input
                            type="number"
                            className={styles.numInput}
                            value={target}
                            onChange={(e) => setTarget(Number(e.target.value))}
                        />
                    </label>
                )}
                {meta.input === 'graph' && (
                    <label className={styles.field}>
                        Start node
                        <select value={start} onChange={(e) => setStart(e.target.value)} className={styles.select}>
                            {GRAPH.nodes.map((n) => (
                                <option key={n.id}>{n.id}</option>
                            ))}
                        </select>
                    </label>
                )}
            </div>

            <div className="row g-3">
                <div className="col-lg-7">
                    <div className={styles.stage}>
                        {frame.kind === 'array' ? (
                            <ArrayView frame={frame} />
                        ) : (
                            <GraphView frame={frame} showWeights={slug === 'dijkstra'} />
                        )}
                    </div>
                    <p className={styles.message} aria-live="polite">
                        <span className={styles.stepCount}>
                            Step {idx + 1}/{frames.length}
                        </span>
                        {frame.message}
                    </p>
                    <div className={styles.legend}>
                        {LEGEND.filter((l) => l.kinds.includes(frame.kind)).map((l) => (
                            <span key={l.tone} className={styles.legendItem}>
                                <i className={`${styles.swatch} ${styles[`tone_${l.tone}`]}`} />
                                {l.label}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="col-lg-5">
                    <pre className={styles.code} aria-label={`${meta.title} source code`}>
                        {meta.code.map((text, i) => (
                            <div
                                key={i}
                                className={`${styles.codeLine} ${i === frame.line ? styles.codeLineActive : ''}`}
                                aria-current={i === frame.line ? 'step' : undefined}
                            >
                                <span className={styles.lineNo}>{i + 1}</span>
                                <code>{text || ' '}</code>
                            </div>
                        ))}
                    </pre>
                </div>
            </div>

            <div className={styles.controls}>
                <button type="button" className={styles.btn} aria-label="Reset" onClick={() => { setIdx(0); setPlaying(false); }}>
                    <RotateCcw size={16} />
                </button>
                <button type="button" className={styles.btn} aria-label="Step back" disabled={idx === 0} onClick={() => { setPlaying(false); setIdx((i) => Math.max(0, i - 1)); }}>
                    <StepBack size={16} />
                </button>
                <button
                    type="button"
                    className={`${styles.btn} ${styles.btnPrimary}`}
                    aria-label={playing ? 'Pause' : atEnd ? 'Replay' : 'Play'}
                    onClick={() => {
                        if (atEnd) setIdx(0);
                        setPlaying((p) => !p);
                    }}
                >
                    {playing ? <Pause size={16} /> : <Play size={16} />}
                </button>
                <button type="button" className={styles.btn} aria-label="Step forward" disabled={atEnd} onClick={() => { setPlaying(false); setIdx((i) => Math.min(frames.length - 1, i + 1)); }}>
                    <StepForward size={16} />
                </button>
                <input
                    type="range"
                    className={styles.scrubber}
                    aria-label="Progress"
                    min={0}
                    max={frames.length - 1}
                    value={idx}
                    onChange={(e) => { setPlaying(false); setIdx(Number(e.target.value)); }}
                />
                <select className={styles.select} aria-label="Speed" value={speed} onChange={(e) => setSpeed(Number(e.target.value))}>
                    {SPEEDS.map((s, i) => (
                        <option key={s.label} value={i}>{s.label}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}

import type { GraphFrame } from './types';
import { GRAPH, edgeKey } from './generators/graph';
import styles from './player.module.css';

export default function GraphView({ frame, showWeights }: { frame: GraphFrame; showWeights: boolean }) {
    const byId = Object.fromEntries(GRAPH.nodes.map((n) => [n.id, n]));
    return (
        <div>
            <svg viewBox="0 0 400 260" className={styles.graphSvg} role="img" aria-label="Graph with nodes A to G">
                {GRAPH.edges.map((e) => {
                    const a = byId[e.a];
                    const b = byId[e.b];
                    const tone = frame.edgeTones[edgeKey(e.a, e.b)] ?? 'none';
                    return (
                        <g key={`${e.a}-${e.b}`}>
                            <line x1={a.x} y1={a.y} x2={b.x} y2={b.y} className={`${styles.edge} ${styles[`edge_${tone}`]}`} />
                            {showWeights && (
                                <text x={(a.x + b.x) / 2} y={(a.y + b.y) / 2 - 5} className={styles.edgeWeight} textAnchor="middle">
                                    {e.w}
                                </text>
                            )}
                        </g>
                    );
                })}
                {GRAPH.nodes.map((n) => {
                    const tone = frame.nodeTones[n.id] ?? 'none';
                    const label = frame.nodeLabels[n.id];
                    return (
                        <g key={n.id}>
                            <circle cx={n.x} cy={n.y} r={20} className={`${styles.node} ${styles[`node_${tone}`]}`} />
                            <text x={n.x} y={n.y + 5} textAnchor="middle" className={styles.nodeText}>
                                {n.id}
                            </text>
                            {label !== undefined && (
                                <text x={n.x} y={n.y + 38} textAnchor="middle" className={styles.nodeLabel}>
                                    {label}
                                </text>
                            )}
                        </g>
                    );
                })}
            </svg>
            {frame.structure && (
                <div className={styles.structure}>
                    <span className={styles.structureName}>{frame.structure.name}</span>
                    <div className={styles.structureItems}>
                        {frame.structure.items.length === 0 ? (
                            <span className={styles.structureEmpty}>empty</span>
                        ) : (
                            frame.structure.items.map((it, i) => (
                                <span key={`${it}-${i}`} className={styles.chip}>
                                    {it}
                                </span>
                            ))
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

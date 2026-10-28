import type { AlgorithmInput, GraphFrame, Tone } from '../types';

export interface GraphNode {
    id: string;
    x: number;
    y: number;
}
export interface GraphEdge {
    a: string;
    b: string;
    w: number;
}

export const GRAPH: { nodes: GraphNode[]; edges: GraphEdge[] } = {
    nodes: [
        { id: 'A', x: 50, y: 130 },
        { id: 'B', x: 140, y: 45 },
        { id: 'C', x: 140, y: 215 },
        { id: 'D', x: 250, y: 45 },
        { id: 'E', x: 250, y: 215 },
        { id: 'F', x: 350, y: 85 },
        { id: 'G', x: 350, y: 175 },
    ],
    edges: [
        { a: 'A', b: 'B', w: 4 },
        { a: 'A', b: 'C', w: 2 },
        { a: 'B', b: 'C', w: 1 },
        { a: 'B', b: 'D', w: 5 },
        { a: 'C', b: 'E', w: 8 },
        { a: 'D', b: 'E', w: 2 },
        { a: 'D', b: 'F', w: 3 },
        { a: 'E', b: 'G', w: 4 },
        { a: 'F', b: 'G', w: 6 },
    ],
};

export const edgeKey = (a: string, b: string) => (a < b ? `${a}-${b}` : `${b}-${a}`);

export function neighbors(id: string): { id: string; w: number }[] {
    return GRAPH.edges
        .filter((e) => e.a === id || e.b === id)
        .map((e) => ({ id: e.a === id ? e.b : e.a, w: e.w }))
        .sort((x, y) => x.id.localeCompare(y.id));
}

class Recorder {
    frames: GraphFrame[] = [];
    nodeTones: Record<string, Tone> = {};
    labels: Record<string, string> = {};
    tree: Record<string, string> = {}; // child -> parent
    push(message: string, line: number, structure?: GraphFrame['structure'], edgeExtra: Record<string, Tone> = {}) {
        const edgeTones: Record<string, Tone> = {};
        Object.entries(this.tree).forEach(([child, parent]) => (edgeTones[edgeKey(child, parent)] = 'found'));
        this.frames.push({
            kind: 'graph',
            nodeTones: { ...this.nodeTones },
            edgeTones: { ...edgeTones, ...edgeExtra },
            nodeLabels: { ...this.labels },
            structure,
            message,
            line,
        });
    }
}

export function bfs({ start }: AlgorithmInput): GraphFrame[] {
    const r = new Recorder();
    const visited = new Set([start]);
    const queue = [start];
    r.nodeTones[start] = 'frontier';
    const q = () => ({ name: 'Queue (front → back)', items: [...queue] });
    r.push(`Start at ${start}: mark it visited and put it in the queue.`, 2, q());
    while (queue.length) {
        const node = queue.shift()!;
        r.nodeTones[node] = 'active';
        r.push(`Dequeue ${node} — explore its neighbours.`, 4, q());
        for (const nb of neighbors(node)) {
            const key = edgeKey(node, nb.id);
            r.push(`Look at neighbour ${nb.id}.`, 5, q(), { [key]: 'compare' });
            if (!visited.has(nb.id)) {
                visited.add(nb.id);
                queue.push(nb.id);
                r.nodeTones[nb.id] = 'frontier';
                r.tree[nb.id] = node;
                r.push(`${nb.id} is new — mark it visited and enqueue it.`, 8, q());
            } else {
                r.push(`${nb.id} was already visited — skip.`, 6, q(), { [key]: 'dim' });
            }
        }
        r.nodeTones[node] = 'visited';
        r.push(`Finished ${node}. Nodes are reached level by level (fewest edges first).`, 10, q());
    }
    r.push(`Queue empty — all reachable nodes visited (order = shortest hops from ${start}).`, 11, q());
    return r.frames;
}

export function dfs({ start }: AlgorithmInput): GraphFrame[] {
    const r = new Recorder();
    const visited = new Set<string>();
    const stack: string[] = [];
    const s = () => ({ name: 'Call stack (bottom → top)', items: [...stack] });
    r.push(`Start depth-first search at ${start}.`, 0, s());

    const visit = (node: string) => {
        visited.add(node);
        stack.push(node);
        r.nodeTones[node] = 'active';
        r.push(`Enter ${node}: mark it visited.`, 1, s());
        for (const nb of neighbors(node)) {
            const key = edgeKey(node, nb.id);
            r.push(`Look at neighbour ${nb.id}.`, 3, s(), { [key]: 'compare' });
            if (!visited.has(nb.id)) {
                r.tree[nb.id] = node;
                r.push(`${nb.id} is unvisited — go deeper.`, 4, s());
                r.nodeTones[node] = 'frontier';
                visit(nb.id);
                r.nodeTones[node] = 'active';
                r.push(`Backtrack to ${node}.`, 5, s());
            } else {
                r.push(`${nb.id} was already visited — skip.`, 3, s(), { [key]: 'dim' });
            }
        }
        stack.pop();
        r.nodeTones[node] = 'visited';
        r.push(`${node} fully explored — return.`, 7, s());
    };

    visit(start);
    r.push('Done — every reachable node was visited, going as deep as possible before backtracking.', 7, s());
    return r.frames;
}

export function dijkstra({ start }: AlgorithmInput): GraphFrame[] {
    const r = new Recorder();
    const INF = Infinity;
    const dist: Record<string, number> = {};
    GRAPH.nodes.forEach((n) => {
        dist[n.id] = INF;
        r.labels[n.id] = '∞';
    });
    dist[start] = 0;
    r.labels[start] = '0';
    const settled = new Set<string>();
    let pq: [number, string][] = [[0, start]];
    const q = () => ({ name: 'Priority queue (smallest first)', items: pq.map(([d, n]) => `${n}:${d}`) });
    r.nodeTones[start] = 'frontier';
    r.push(`Distance to ${start} is 0; every other node starts at ∞.`, 1, q());

    while (pq.length) {
        pq.sort((x, y) => x[0] - y[0]);
        const [d, node] = pq.shift()!;
        if (settled.has(node) || d > dist[node]) {
            r.push(`Skip stale entry ${node}:${d} — a shorter path was already found.`, 5, q());
            continue;
        }
        settled.add(node);
        r.nodeTones[node] = 'active';
        r.push(`Pop ${node} (distance ${d}) — the closest unsettled node, so its distance is final.`, 4, q());
        for (const nb of neighbors(node)) {
            if (settled.has(nb.id)) continue;
            const key = edgeKey(node, nb.id);
            const cand = d + nb.w;
            r.push(`Via ${node}: ${d} + ${nb.w} = ${cand} to reach ${nb.id} (current: ${dist[nb.id] === INF ? '∞' : dist[nb.id]}).`, 7, q(), { [key]: 'compare' });
            if (cand < dist[nb.id]) {
                dist[nb.id] = cand;
                r.labels[nb.id] = String(cand);
                r.tree[nb.id] = node;
                pq.push([cand, nb.id]);
                r.nodeTones[nb.id] = 'frontier';
                r.push(`Shorter! Update ${nb.id} to ${cand} and push it onto the queue.`, 8, q());
            } else {
                r.push(`Not shorter — keep ${nb.id} at ${dist[nb.id]}.`, 7, q(), { [key]: 'dim' });
            }
        }
        r.nodeTones[node] = 'visited';
        r.push(`${node} is settled.`, 11, q());
    }
    r.push(`Done. Green edges form the shortest-path tree from ${start}; labels are shortest distances.`, 13, q());
    return r.frames;
}

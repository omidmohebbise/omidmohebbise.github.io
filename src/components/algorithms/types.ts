export type Tone =
    | 'compare'
    | 'swap'
    | 'found'
    | 'sorted'
    | 'active'
    | 'pivot'
    | 'visited'
    | 'frontier'
    | 'dim';

export interface ArrayFrame {
    kind: 'array';
    values: number[];
    tones: Record<number, Tone>;
    pointers: Record<number, string>;
    message: string;
    line: number;
}

export interface GraphFrame {
    kind: 'graph';
    nodeTones: Record<string, Tone>;
    edgeTones: Record<string, Tone>;
    nodeLabels: Record<string, string>;
    structure?: { name: string; items: string[] };
    message: string;
    line: number;
}

export type Frame = ArrayFrame | GraphFrame;

export interface AlgorithmInput {
    values: number[];
    target: number;
    start: string;
}

export type Category = 'Searching' | 'Sorting' | 'Graph';
export type Level = 'Basic' | 'Intermediate' | 'Advanced';
export type InputKind = 'array' | 'search' | 'graph';

export interface Complexity {
    best: string;
    average: string;
    worst: string;
    space: string;
}

export interface AlgorithmMeta {
    slug: string;
    title: string;
    category: Category;
    level: Level;
    input: InputKind;
    summary: string;
    howItWorks: string[];
    useCases: string[];
    watchOut: string[];
    complexity: Complexity;
    properties?: string[];
    code: string[];
}

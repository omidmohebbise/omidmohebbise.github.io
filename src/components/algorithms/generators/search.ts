import type { AlgorithmInput, ArrayFrame, Tone } from '../types';

export function arr(
    values: number[],
    tones: Record<number, Tone>,
    message: string,
    line: number,
    pointers: Record<number, string> = {},
): ArrayFrame {
    return { kind: 'array', values: [...values], tones: { ...tones }, pointers: { ...pointers }, message, line };
}

export function addPointer(p: Record<number, string>, index: number, name: string) {
    p[index] = p[index] ? `${p[index]}/${name}` : name;
}

export function linearSearch({ values, target }: AlgorithmInput): ArrayFrame[] {
    const frames: ArrayFrame[] = [];
    const tones: Record<number, Tone> = {};
    frames.push(arr(values, {}, `Looking for ${target} in ${values.length} items, starting at index 0.`, 0));
    for (let i = 0; i < values.length; i++) {
        frames.push(arr(values, { ...tones, [i]: 'compare' }, `Is ${values[i]} equal to ${target}?`, 2, { [i]: 'i' }));
        if (values[i] === target) {
            frames.push(arr(values, { ...tones, [i]: 'found' }, `Yes — found ${target} at index ${i}.`, 3, { [i]: 'i' }));
            return frames;
        }
        tones[i] = 'dim';
        frames.push(arr(values, tones, `No — ${values[i]} is not ${target}. Move to the next index.`, 1));
    }
    frames.push(arr(values, tones, `Reached the end — ${target} is not in the array (returns -1).`, 6));
    return frames;
}

export function binarySearch({ values, target }: AlgorithmInput): ArrayFrame[] {
    const a = [...values].sort((x, y) => x - y);
    const frames: ArrayFrame[] = [];
    let lo = 0;
    let hi = a.length - 1;

    const tonesFor = (mid?: number): Record<number, Tone> => {
        const t: Record<number, Tone> = {};
        for (let i = 0; i < a.length; i++) if (i < lo || i > hi) t[i] = 'dim';
        if (mid !== undefined) t[mid] = 'compare';
        return t;
    };
    const ptrs = (mid?: number) => {
        const p: Record<number, string> = {};
        if (lo <= hi) {
            addPointer(p, lo, 'lo');
            addPointer(p, hi, 'hi');
        }
        if (mid !== undefined) addPointer(p, mid, 'mid');
        return p;
    };

    frames.push(arr(a, tonesFor(), `Binary search needs sorted data, so the array is sorted first. Search range: ${lo}..${hi}.`, 1, ptrs()));
    while (lo <= hi) {
        const mid = Math.floor((lo + hi) / 2);
        frames.push(arr(a, tonesFor(mid), `Check the middle: arr[${mid}] = ${a[mid]}. Compare with ${target}.`, 3, ptrs(mid)));
        if (a[mid] === target) {
            const t = tonesFor();
            t[mid] = 'found';
            frames.push(arr(a, t, `${a[mid]} equals ${target} — found at index ${mid}.`, 4, ptrs(mid)));
            return frames;
        }
        if (a[mid] < target) {
            frames.push(arr(a, tonesFor(mid), `${a[mid]} < ${target}: the target must be to the right. Discard the left half (lo = ${mid + 1}).`, 5, ptrs(mid)));
            lo = mid + 1;
        } else {
            frames.push(arr(a, tonesFor(mid), `${a[mid]} > ${target}: the target must be to the left. Discard the right half (hi = ${mid - 1}).`, 6, ptrs(mid)));
            hi = mid - 1;
        }
    }
    frames.push(arr(a, tonesFor(), `The range is empty — ${target} is not in the array (returns -1).`, 8, {}));
    return frames;
}

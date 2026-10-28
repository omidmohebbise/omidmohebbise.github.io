import type { AlgorithmInput, ArrayFrame, Tone } from '../types';
import { arr } from './search';

const range = (lo: number, hi: number, tone: Tone, into: Record<number, Tone> = {}) => {
    for (let i = lo; i <= hi; i++) into[i] = tone;
    return into;
};

const withSorted = (sorted: Set<number>, extra: Record<number, Tone> = {}) => {
    const t: Record<number, Tone> = {};
    sorted.forEach((i) => (t[i] = 'sorted'));
    return { ...t, ...extra };
};

export function bubbleSort({ values }: AlgorithmInput): ArrayFrame[] {
    const a = [...values];
    const n = a.length;
    const f: ArrayFrame[] = [];
    const sorted = new Set<number>();
    f.push(arr(a, {}, 'Start: repeatedly compare neighbours and swap them if out of order.', 0));
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            f.push(arr(a, withSorted(sorted, { [j]: 'compare', [j + 1]: 'compare' }), `Compare ${a[j]} and ${a[j + 1]}.`, 3, { [j]: 'j' }));
            if (a[j] > a[j + 1]) {
                [a[j], a[j + 1]] = [a[j + 1], a[j]];
                f.push(arr(a, withSorted(sorted, { [j]: 'swap', [j + 1]: 'swap' }), `${a[j + 1]} > ${a[j]}, so swap them.`, 4, { [j]: 'j' }));
            }
        }
        sorted.add(n - 1 - i);
        f.push(arr(a, withSorted(sorted), `Pass ${i + 1} done: ${a[n - 1 - i]} has bubbled to its final position.`, 6));
    }
    sorted.add(0);
    f.push(arr(a, withSorted(sorted), 'Sorted — no more passes needed.', 8));
    return f;
}

export function selectionSort({ values }: AlgorithmInput): ArrayFrame[] {
    const a = [...values];
    const n = a.length;
    const f: ArrayFrame[] = [];
    const sorted = new Set<number>();
    f.push(arr(a, {}, 'Start: repeatedly find the smallest remaining item and put it at the front.', 0));
    for (let i = 0; i < n - 1; i++) {
        let min = i;
        f.push(arr(a, withSorted(sorted, { [i]: 'pivot' }), `Pass ${i + 1}: assume index ${i} (${a[i]}) is the minimum.`, 2, { [i]: 'min' }));
        for (let j = i + 1; j < n; j++) {
            f.push(arr(a, withSorted(sorted, { [min]: 'pivot', [j]: 'compare' }), `Is ${a[j]} smaller than the current minimum ${a[min]}?`, 4, { [min]: 'min', [j]: 'j' }));
            if (a[j] < a[min]) {
                min = j;
                f.push(arr(a, withSorted(sorted, { [min]: 'pivot' }), `Yes — new minimum is ${a[min]} at index ${min}.`, 4, { [min]: 'min' }));
            }
        }
        if (min !== i) {
            [a[i], a[min]] = [a[min], a[i]];
            f.push(arr(a, withSorted(sorted, { [i]: 'swap', [min]: 'swap' }), `Swap the minimum into index ${i}.`, 6));
        }
        sorted.add(i);
        f.push(arr(a, withSorted(sorted), `${a[i]} is now in its final position.`, 7));
    }
    sorted.add(n - 1);
    f.push(arr(a, withSorted(sorted), 'Sorted.', 8));
    return f;
}

export function insertionSort({ values }: AlgorithmInput): ArrayFrame[] {
    const a = [...values];
    const n = a.length;
    const f: ArrayFrame[] = [];
    f.push(arr(a, {}, 'Start: grow a sorted prefix by inserting one item at a time into place.', 0));
    for (let i = 1; i < n; i++) {
        const key = a[i];
        const prefix = (extra: Record<number, Tone> = {}) => ({ ...range(0, i, 'visited'), ...extra });
        f.push(arr(a, prefix({ [i]: 'pivot' }), `Take ${key} (index ${i}) as the key to insert into the sorted prefix.`, 2, { [i]: 'key' }));
        let j = i - 1;
        while (j >= 0 && a[j] > key) {
            f.push(arr(a, prefix({ [j]: 'compare' }), `${a[j]} > ${key}, so ${a[j]} must move one step right.`, 4, { [j]: 'j' }));
            a[j + 1] = a[j];
            f.push(arr(a, prefix({ [j + 1]: 'swap' }), `Shift ${a[j]} right.`, 5, { [j + 1]: 'gap' }));
            j--;
        }
        a[j + 1] = key;
        f.push(arr(a, prefix({ [j + 1]: 'found' }), `Insert ${key} at index ${j + 1}. Prefix 0..${i} is sorted.`, 8));
    }
    f.push(arr(a, range(0, n - 1, 'sorted'), 'Sorted.', 10));
    return f;
}

export function mergeSort({ values }: AlgorithmInput): ArrayFrame[] {
    const a = [...values];
    const f: ArrayFrame[] = [];
    f.push(arr(a, {}, 'Start: split in half, sort each half recursively, then merge.', 0));

    const ms = (lo: number, hi: number) => {
        if (lo >= hi) return;
        const mid = Math.floor((lo + hi) / 2);
        f.push(arr(a, range(lo, hi, 'active'), `Split range ${lo}..${hi} at index ${mid}.`, 2));
        ms(lo, mid);
        ms(mid + 1, hi);
        const left = a.slice(lo, mid + 1);
        const right = a.slice(mid + 1, hi + 1);
        f.push(arr(a, range(lo, hi, 'active'), `Merge sorted halves [${left.join(', ')}] and [${right.join(', ')}].`, 5));
        let i = 0;
        let j = 0;
        let k = lo;
        while (i < left.length && j < right.length) {
            const takeLeft = left[i] <= right[j];
            const v = takeLeft ? left[i++] : right[j++];
            a[k] = v;
            f.push(arr(a, range(lo, hi, 'active', { [k]: 'swap' }), `Take the smaller head (${v}) and write it to index ${k}.`, 9));
            k++;
        }
        while (i < left.length) {
            a[k] = left[i++];
            f.push(arr(a, range(lo, hi, 'active', { [k]: 'swap' }), `Left half remainder: write ${a[k]} to index ${k}.`, 11));
            k++;
        }
        while (j < right.length) {
            a[k] = right[j++];
            f.push(arr(a, range(lo, hi, 'active', { [k]: 'swap' }), `Right half remainder: write ${a[k]} to index ${k}.`, 12));
            k++;
        }
        f.push(arr(a, range(lo, hi, 'visited'), `Range ${lo}..${hi} is now sorted.`, 13));
    };

    ms(0, a.length - 1);
    f.push(arr(a, range(0, a.length - 1, 'sorted'), 'Sorted.', 13));
    return f;
}

export function quickSort({ values }: AlgorithmInput): ArrayFrame[] {
    const a = [...values];
    const f: ArrayFrame[] = [];
    const sorted = new Set<number>();
    f.push(arr(a, {}, 'Start: pick a pivot, partition smaller items to its left and larger to its right, repeat.', 0));

    const qs = (lo: number, hi: number) => {
        if (lo > hi) return;
        if (lo === hi) {
            sorted.add(lo);
            f.push(arr(a, withSorted(sorted), `Single item ${a[lo]} is already in place.`, 1));
            return;
        }
        const pivot = a[hi];
        let i = lo;
        const base = (extra: Record<number, Tone> = {}) => withSorted(sorted, { ...range(lo, hi, 'active'), [hi]: 'pivot', ...extra });
        f.push(arr(a, base(), `Partition ${lo}..${hi} using ${pivot} (last item) as the pivot.`, 2, { [hi]: 'pivot' }));
        for (let j = lo; j < hi; j++) {
            f.push(arr(a, base({ [j]: 'compare' }), `Is ${a[j]} < pivot ${pivot}?`, 5, { [i]: 'i', [hi]: 'pivot', ...(j !== i ? { [j]: 'j' } : {}) }));
            if (a[j] < pivot) {
                if (i !== j) {
                    [a[i], a[j]] = [a[j], a[i]];
                    f.push(arr(a, base({ [i]: 'swap', [j]: 'swap' }), `Yes — swap it into the "smaller" zone (index ${i}).`, 6, { [hi]: 'pivot' }));
                }
                i++;
            }
        }
        [a[i], a[hi]] = [a[hi], a[i]];
        sorted.add(i);
        f.push(arr(a, withSorted(sorted, { [i]: 'found' }), `Place pivot ${pivot} at index ${i} — it is now in its final position.`, 9));
        qs(lo, i - 1);
        qs(i + 1, hi);
    };

    qs(0, a.length - 1);
    f.push(arr(a, range(0, a.length - 1, 'sorted'), 'Sorted.', 12));
    return f;
}

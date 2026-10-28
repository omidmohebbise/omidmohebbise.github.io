import type { AlgorithmInput, Frame } from './types';
import { binarySearch, linearSearch } from './generators/search';
import { bubbleSort, insertionSort, mergeSort, quickSort, selectionSort } from './generators/sorting';
import { bfs, dfs, dijkstra } from './generators/graph';

export const runners: Record<string, (input: AlgorithmInput) => Frame[]> = {
    'linear-search': linearSearch,
    'binary-search': binarySearch,
    'bubble-sort': bubbleSort,
    'selection-sort': selectionSort,
    'insertion-sort': insertionSort,
    'merge-sort': mergeSort,
    'quick-sort': quickSort,
    bfs,
    dfs,
    dijkstra,
};

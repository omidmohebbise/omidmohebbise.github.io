export interface MusicNode {
    title: string;
    slug: string;
    summary?: string;
    children?: MusicNode[];
}

/**
 * The Music section's navigation/content hierarchy. A node can have
 * children, and children can have children, to any depth — the nav,
 * breadcrumbs, and landing pages all walk this same tree recursively
 * instead of hard-coding a level. Add a new node (with or without
 * children) and it shows up everywhere automatically.
 */
export const musicTree: MusicNode[] = [
    {
        title: 'Music Fundamentals',
        slug: 'fundamentals',
        summary: 'The building blocks of music — pitch, rhythm, dynamics — and how they combine into melody and form.',
        children: [
            {
                title: 'Pitch',
                slug: 'pitch',
                summary: 'What pitch is, how it is measured, and how Western equal temperament differs from Persian tuning.',
            },
        ],
    },
    {
        title: 'Persian Music',
        slug: 'persian',
        summary: 'Dastgah, Avaz, Gusheh, and the Radif — the modal system at the heart of Persian classical music.',
        children: [
            {
                title: 'Dastgah',
                slug: 'dastgah',
                summary: 'The modal systems that organize Persian classical music, each built from a sequence of Gusheh.',
                children: [
                    {
                        title: 'Shur',
                        slug: 'shur',
                        summary: 'The most widely used Dastgah — modal home to a large share of Persian folk and classical melody.',
                    },
                ],
            },
        ],
    },
    {
        title: 'Instruments',
        slug: 'instruments',
        summary: 'History, construction, technique, and repertoire for Tar, Setar, Santoor, Piano, and Voice.',
        children: [
            { title: 'Tar', slug: 'tar', summary: 'The primary instrument of Persian classical music — construction, technique, and repertoire.' },
            { title: 'Setar', slug: 'setar', summary: 'The intimate four-string cousin of the Tar, closely tied to the Radif tradition.' },
            { title: 'Santoor', slug: 'santoor', summary: 'The 72-string hammered dulcimer at the center of Persian instrumental music.' },
            { title: 'Piano', slug: 'piano', summary: 'Keyboard technique and harmony, and how Western piano concepts connect back to Persian music.' },
            { title: 'Voice', slug: 'voice', summary: 'Vocal technique, Persian singing, and Tahrir ornamentation.' },
        ],
    },
];

interface Crumb {
    title: string;
    path: string;
}

/**
 * Walks the tree following a /music/... pathname and returns the
 * ancestor chain for breadcrumbs, e.g. /music/persian/dastgah/shur ->
 * [Music, Persian Music, Dastgah, Shur]. Stops gracefully if a segment
 * isn't found in the tree (e.g. a future catch-all page).
 */
export function findAncestorChain(pathname: string): Crumb[] {
    const segments = pathname.replace(/^\/music\/?/, '').split('/').filter(Boolean);
    const chain: Crumb[] = [{ title: 'Music', path: '/music' }];

    let nodes = musicTree;
    let currentPath = '/music';

    for (const segment of segments) {
        const match = nodes.find((n) => n.slug === segment);
        if (!match) break;
        currentPath = `${currentPath}/${segment}`;
        chain.push({ title: match.title, path: currentPath });
        nodes = match.children ?? [];
    }

    return chain;
}

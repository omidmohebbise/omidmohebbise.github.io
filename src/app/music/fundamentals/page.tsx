import MusicLandingPage from '@/components/music/MusicLandingPage';
import { musicTree } from '../musicTree';

export default function FundamentalsPage() {
    const node = musicTree.find((n) => n.slug === 'fundamentals')!;

    return (
        <MusicLandingPage
            title={node.title}
            intro="The building blocks every piece of music is made from — pitch, rhythm, dynamics, timbre — and how they combine into melody, harmony, and form. This is the shared vocabulary the rest of the Music section builds on, in both Western and Persian contexts."
            items={(node.children ?? []).map((child) => ({
                title: child.title,
                href: `/music/fundamentals/${child.slug}`,
                summary: child.summary,
            }))}
        />
    );
}

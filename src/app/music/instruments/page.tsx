import MusicLandingPage from '@/components/music/MusicLandingPage';
import { musicTree } from '../musicTree';

export default function InstrumentsPage() {
    const node = musicTree.find((n) => n.slug === 'instruments')!;

    return (
        <MusicLandingPage
            title={node.title}
            intro="History, construction, tuning, technique, and repertoire notes for the instruments in active practice: Tar, Setar, Santoor, Piano, and Voice."
            items={(node.children ?? []).map((child) => ({
                title: child.title,
                href: `/music/instruments/${child.slug}`,
                summary: child.summary,
            }))}
        />
    );
}

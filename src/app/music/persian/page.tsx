import MusicLandingPage from '@/components/music/MusicLandingPage';
import { musicTree } from '../musicTree';

export default function PersianMusicPage() {
    const node = musicTree.find((n) => n.slug === 'persian')!;

    return (
        <MusicLandingPage
            title={node.title}
            intro="Persian classical music is organized around Dastgah — modal systems, each built from a sequence of shorter melodic modules called Gusheh, together forming the Radif: the master repertoire passed down from teacher to student. Vocal improvisation within this system is called Avaz."
            items={(node.children ?? []).map((child) => ({
                title: child.title,
                href: `/music/persian/${child.slug}`,
                summary: child.summary,
            }))}
        />
    );
}

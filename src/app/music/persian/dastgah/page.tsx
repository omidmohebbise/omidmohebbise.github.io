import MusicLandingPage from '@/components/music/MusicLandingPage';
import { musicTree } from '../../musicTree';

export default function DastgahPage() {
    const persian = musicTree.find((n) => n.slug === 'persian')!;
    const node = persian.children!.find((n) => n.slug === 'dastgah')!;

    return (
        <MusicLandingPage
            title={node.title}
            intro="A Dastgah is a modal system that organizes Persian classical music — not just a scale, but a whole framework of characteristic melodic phrases (Gusheh), ornamentation, and mood that a performer draws on during Avaz (vocal improvisation) and instrumental performance."
            items={(node.children ?? []).map((child) => ({
                title: child.title,
                href: `/music/persian/dastgah/${child.slug}`,
                summary: child.summary,
            }))}
        >
            <div className="card shadow-sm">
                <div className="card-body">
                    <h5 className="mb-2">The Seven Principal Dastgahs</h5>
                    <p className="mb-0">
                        Persian classical music recognizes seven main Dastgahs — <strong>Shur</strong>,{' '}
                        <strong>Mahur</strong>, <strong>Homayoun</strong>, <strong>Segah</strong>,{' '}
                        <strong>Chahargah</strong>, <strong>Nava</strong>, and{' '}
                        <strong>Rast-Panjgah</strong> — plus several Avaz (related modal systems
                        considered offshoots of Shur). This list isn&apos;t fixed or exhaustive;
                        Shur is covered in depth first, with the rest to follow.
                    </p>
                </div>
            </div>
        </MusicLandingPage>
    );
}

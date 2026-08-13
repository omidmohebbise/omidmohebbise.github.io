import MusicLandingPage from '@/components/music/MusicLandingPage';
import { musicTree } from './musicTree';

export default function MusicPage() {
    return (
        <MusicLandingPage
            title="Music"
            intro="A personal, long-term music knowledge base spanning music theory, Persian classical music, and technique on Tar, Setar, Santoor, Piano, and Voice — built up one topic at a time as I practice, perform, and keep notes."
            items={musicTree.map((node) => ({
                title: node.title,
                href: `/music/${node.slug}`,
                summary: node.summary,
            }))}
        >
            <div className="card shadow-sm">
                <div className="card-body">
                    <h5 className="mb-2">Planned Sections</h5>
                    <p className="mb-0">
                        This section will keep growing. Planned additions include Notes &amp;
                        Notation, Rhythm, Scales &amp; Modes, Harmony, Melody, Music Styles,
                        Technique, Ear Training, Practice, Repertoire, Musicians &amp; Composers,
                        Composition, Musical Forms, Performance, and a personal &quot;My
                        Music&quot; journal — added incrementally rather than all at once.
                    </p>
                </div>
            </div>
        </MusicLandingPage>
    );
}

import Breadcrumbs from '@/components/breadcrumbs/Breadcrumbs';
import RelatedTopics from '@/components/music/RelatedTopics';

export default function VoicePage() {
    return (
        <div className="container py-5">
            <p className="section-label">Music</p>
            <h1 className="section-title">Voice / Singing</h1>
            <hr className="section-rule" />
            <Breadcrumbs />

            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <p className="lead mb-3">
                        The voice is the one instrument every musician already carries — and, in
                        Persian music especially, the primary vehicle for improvisation through
                        Avaz.
                    </p>

                    <div className="row">
                        <div className="col-md-6">
                            <h5>Vocal Anatomy &amp; Breathing</h5>
                            <p className="mb-0">
                                Sound starts with breath support from the diaphragm, not the
                                throat — steady, controlled airflow across the vocal folds is
                                what allows pitch and dynamics to stay stable through a phrase.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <h5>Posture &amp; Resonance</h5>
                            <p className="mb-0">
                                Open, upright posture keeps the airway unobstructed. Resonance is
                                how vibration is shaped by the throat, mouth, and sinus cavities
                                into a fuller, more efficient tone — &quot;placement&quot; in
                                singing terminology.
                            </p>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6">
                            <h5>Vocal Registers</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><strong>Chest Voice:</strong> The lower, fuller register, felt as resonance in the chest.</li>
                                <li className="list-group-item"><strong>Head Voice:</strong> The higher, lighter register, felt as resonance in the head/sinuses.</li>
                                <li className="list-group-item"><strong>Mixed Voice:</strong> A blend of chest and head resonance, smoothing the transition between them.</li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <h5>Pitch &amp; Intonation</h5>
                            <p className="mb-0">
                                Vocal range is trained gradually and safely from the center
                                outward. Intonation — singing precisely in tune, including
                                Persian koron/sori pitches — depends directly on ear training and
                                breath control together.
                            </p>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6">
                            <h5>Articulation, Diction &amp; Vibrato</h5>
                            <p className="mb-0">
                                Clear articulation and diction keep text (or vocalise syllables)
                                intelligible. Vibrato — a controlled, regular pitch oscillation —
                                is an expressive device, not a default state; over-relying on it
                                can mask pitch accuracy problems.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <h5>Dynamics &amp; Expression</h5>
                            <p className="mb-0">
                                Controlled variation in loudness and tone color shapes phrasing
                                and emotional intent — the same melodic line can feel completely
                                different sung softly versus with full projection.
                            </p>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6">
                            <h5>Persian Singing</h5>
                            <p className="mb-0">
                                Persian classical singing (Avaz) is largely improvised within a
                                Dastgah&apos;s modal framework, following the Radif&apos;s vocal
                                repertoire — the singer moves through a Dastgah&apos;s Gusheh much
                                as an instrumentalist would.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <h5>Tahrir</h5>
                            <p className="mb-0">
                                A distinctive vocal ornament in Persian singing — a fast, yodel-like
                                break between two pitches, often on an open vowel, that is one of
                                the most recognizable techniques in the tradition and takes
                                significant practice to control.
                            </p>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-12">
                            <h5>Warm-Ups &amp; Exercises</h5>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-1">Gentle lip trills or hums through your range before any focused singing.</li>
                                <li className="mb-1">Sustain a single pitch on a steady vowel, checking it against a reference tone or tuner.</li>
                                <li className="mb-0">Practice slow, controlled slides between two pitches as groundwork for eventually approaching Tahrir.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <RelatedTopics
                items={[
                    { title: 'Pitch', href: '/music/fundamentals/pitch', description: 'pitch matching and intonation basics' },
                    { title: 'Shur', href: '/music/persian/dastgah/shur', description: 'Avaz — vocal improvisation within a Dastgah' },
                    { title: 'Persian Music', href: '/music/persian', description: 'the Dastgah / Avaz / Radif system Persian singing draws on' },
                    { title: 'Piano', href: '/music/instruments/piano', description: 'a fixed-pitch reference instrument for practice' },
                ]}
            />
        </div>
    );
}

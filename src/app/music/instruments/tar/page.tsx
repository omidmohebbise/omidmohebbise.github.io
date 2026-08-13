import Breadcrumbs from '@/components/breadcrumbs/Breadcrumbs';
import RelatedTopics from '@/components/music/RelatedTopics';

export default function TarPage() {
    return (
        <div className="container py-5">
            <p className="section-label">Music</p>
            <h1 className="section-title">Tar</h1>
            <hr className="section-rule" />
            <Breadcrumbs />

            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <p className="lead mb-3">
                        The Tar is the primary instrument of Persian classical music — a
                        long-necked, double-bowled lute whose bright, articulate voice carries
                        much of the Radif repertoire.
                    </p>

                    <div className="row">
                        <div className="col-md-6">
                            <h5>History</h5>
                            <p className="mb-0">
                                The Tar reached roughly its modern form in the 18th–19th century
                                and became the central instrument of the Radif tradition —
                                the master repertoire on which most Persian classical performance
                                is still built today.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <h5>Construction</h5>
                            <p className="mb-0">
                                A carved mulberry-wood double-bowl body topped with a thin
                                stretched membrane (traditionally lambskin) as a soundboard, a
                                walnut neck, and tied-on movable gut or nylon frets that let the
                                pitch of each fret be repositioned for a given Dastgah.
                            </p>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6">
                            <h5>Strings &amp; Tuning</h5>
                            <p className="mb-0">
                                Six steel strings arranged in three courses. There is no single
                                fixed tuning — the open strings are set relative to each other
                                and then the movable frets are positioned to suit the Dastgah
                                being played.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <h5>Fretboard</h5>
                            <p className="mb-0">
                                Roughly 25–28 movable frets tied on with ligatures, spaced to
                                allow the koron and sori (Persian quarter-tone-ish) intervals that
                                fixed-fret or fixed-pitch instruments like the piano can&apos;t
                                produce.
                            </p>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6">
                            <h5>Right-Hand Technique</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><strong>Mezrab:</strong> A small brass plectrum, held between the fingers, producing the Tar&apos;s characteristic percussive attack.</li>
                                <li className="list-group-item"><strong>Down/up strokes:</strong> The basic stroke pattern underlying almost every rhythmic figure.</li>
                                <li className="list-group-item"><strong>Tremolo:</strong> Rapid alternating strokes used to sustain a note.</li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <h5>Left-Hand Technique</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><strong>Fretting:</strong> Precise finger placement against movable frets, including microtonal positions.</li>
                                <li className="list-group-item"><strong>Kesheh (slides):</strong> Sliding between pitches for expressive connection.</li>
                                <li className="list-group-item"><strong>Vibrato:</strong> Subtle pitch oscillation applied to sustained notes.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6">
                            <h5>Ornamentation &amp; Chaharmezrab</h5>
                            <p className="mb-0">
                                Ornaments like Tekiyeh and Riz add rhythmic and melodic detail to
                                a line. <strong>Chaharmezrab</strong> is a fast, rhythmically
                                driven, virtuosic piece type built on rapid mezrab patterns —
                                often the flashiest material in a performance.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <h5>Improvisation &amp; Repertoire</h5>
                            <p className="mb-0">
                                Improvisation on Tar draws directly on the Radif — the internalized
                                Gusheh of a Dastgah become the vocabulary a player improvises
                                with, rather than a fixed, unchanging score.
                            </p>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-12">
                            <h5>Exercises</h5>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-1">Practice mezrab stroke patterns slowly on a single open string before adding left-hand movement.</li>
                                <li className="mb-1">Work through the Daramad of a Dastgah you&apos;re studying, one Gusheh at a time.</li>
                                <li className="mb-0">Record yourself regularly and compare against a reference recording of the same Gusheh.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <RelatedTopics
                items={[
                    { title: 'Setar', href: '/music/instruments/setar', description: 'the Tar’s more intimate four-string cousin' },
                    { title: 'Santoor', href: '/music/instruments/santoor', description: 'another core Persian instrument, struck rather than plucked' },
                    { title: 'Dastgah', href: '/music/persian/dastgah', description: 'the modal systems Tar repertoire is organized around' },
                    { title: 'Shur', href: '/music/persian/dastgah/shur', description: 'a Dastgah to practice fretting for koron intervals' },
                    { title: 'Pitch', href: '/music/fundamentals/pitch', description: 'how movable frets produce Persian pitch positions' },
                ]}
            />
        </div>
    );
}

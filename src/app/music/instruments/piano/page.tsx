import Breadcrumbs from '@/components/breadcrumbs/Breadcrumbs';
import RelatedTopics from '@/components/music/RelatedTopics';

export default function PianoPage() {
    return (
        <div className="container py-5">
            <p className="section-label">Music</p>
            <h1 className="section-title">Piano</h1>
            <hr className="section-rule" />
            <Breadcrumbs />

            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <p className="lead mb-3">
                        The piano&apos;s fixed, equal-tempered keyboard makes it the clearest tool
                        for seeing harmony and theory laid out visually — and a valuable reference
                        point against Persian instruments&apos; movable pitches.
                    </p>

                    <div className="row">
                        <div className="col-md-6">
                            <h5>Keyboard &amp; Octaves</h5>
                            <p className="mb-0">
                                88 keys spanning just over seven octaves, alternating white
                                (natural) and black (sharp/flat) keys in a repeating 12-key
                                pattern per octave — the same fixed layout at every register.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <h5>Fingering</h5>
                            <p className="mb-0">
                                Consistent fingering patterns (thumb-under for scales, standard
                                chord-shape fingerings) let the hand move efficiently across the
                                keyboard without looking — essential for sight-reading and fluent
                                improvisation alike.
                            </p>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6">
                            <h5>Scales &amp; Arpeggios</h5>
                            <p className="mb-0">
                                Major, minor, and modal scales, plus their arpeggiated (broken
                                chord) forms, are the daily technical foundation — they build
                                finger independence and make the shapes of Western harmony
                                physically automatic.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <h5>Chords &amp; Voicings</h5>
                            <p className="mb-0">
                                Beyond simple triads, voicing is about which notes go in which
                                octave and which get doubled or omitted — the same chord can sound
                                completely different depending on how it&apos;s voiced across the
                                two hands.
                            </p>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6">
                            <h5>Pedaling</h5>
                            <p className="mb-0">
                                The sustain (damper) pedal lets notes ring past the point where
                                fingers release the keys — essential for legato phrasing and
                                harmonic color, but easy to overuse and blur the harmony if not
                                controlled carefully.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <h5>Sight-Reading</h5>
                            <p className="mb-0">
                                Reading both staves simultaneously while keeping a steady tempo —
                                built through regular, low-pressure practice on material slightly
                                below your comfortable performance level.
                            </p>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6">
                            <h5>Accompaniment</h5>
                            <p className="mb-0">
                                Supporting a singer or another instrumentalist — following tempo
                                and dynamics rather than leading them, and voicing chords to leave
                                room for the melody rather than competing with it.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <h5>Improvisation</h5>
                            <p className="mb-0">
                                Using scales, chord tones, and rhythmic motifs as raw material to
                                generate melody in real time — a Western parallel, in spirit, to
                                Avaz in Persian music, though built from a different harmonic
                                vocabulary.
                            </p>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-12">
                            <h5>Exercises</h5>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-1">Practice scales and arpeggios hands-separately at a slow, even tempo before combining hands.</li>
                                <li className="mb-1">Sight-read one short, easy piece per practice session without stopping to fix mistakes.</li>
                                <li className="mb-0">Play a simple melody and improvise a few variations on it using only chord tones.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <RelatedTopics
                items={[
                    { title: 'Pitch', href: '/music/fundamentals/pitch', description: 'the piano as a fixed equal-tempered reference' },
                    { title: 'Voice', href: '/music/instruments/voice', description: 'piano as an accompaniment and reference instrument for singing' },
                    { title: 'Music Fundamentals', href: '/music/fundamentals', description: 'the theory vocabulary the piano makes visible' },
                ]}
            />
        </div>
    );
}

import Breadcrumbs from '@/components/breadcrumbs/Breadcrumbs';
import RelatedTopics from '@/components/music/RelatedTopics';

export default function SantoorPage() {
    return (
        <div className="container py-5">
            <p className="section-label">Music</p>
            <h1 className="section-title">Santoor</h1>
            <hr className="section-rule" />
            <Breadcrumbs />

            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <p className="lead mb-3">
                        The Santoor is a trapezoid-shaped hammered dulcimer — dozens of strings
                        struck with lightweight wooden mallets, producing a shimmering, bell-like
                        texture unlike any other instrument in the Persian classical ensemble.
                    </p>

                    <div className="row">
                        <div className="col-md-6">
                            <h5>History</h5>
                            <p className="mb-0">
                                The Santoor has ancient roots as a struck-string instrument and
                                was revived and developed as a Persian classical solo instrument
                                through the 20th century, gaining a full place alongside Tar and
                                Setar in the modern Radif-based repertoire.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <h5>Construction</h5>
                            <p className="mb-0">
                                A trapezoid wooden box with two sets of bridges running across it,
                                over which courses of strings are stretched — commonly around 72
                                strings grouped in courses of four, tuned in sets across the
                                bridges.
                            </p>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6">
                            <h5>Strings &amp; Tuning</h5>
                            <p className="mb-0">
                                Metal strings grouped in courses of typically four strings per
                                note, split across left and right bridge sections. Some bridges
                                are movable, letting a player retune sections of the instrument
                                for a given Dastgah.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <h5>Mezrab Technique</h5>
                            <p className="mb-0">
                                Played with two lightweight wooden mallets (also called mezrab,
                                distinct from the Tar&apos;s plectrum), one in each hand, striking
                                the strings directly above the bridges — technique centers on
                                precise, even alternation between the two hands.
                            </p>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6">
                            <h5>Tremolo &amp; Ornamentation</h5>
                            <p className="mb-0">
                                Rapid alternating mallet strokes create tremolo, used to sustain a
                                note the way a bowed instrument would — since a struck string
                                otherwise decays quickly. Grace-note figures and rolls add
                                further ornamentation to a melodic line.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <h5>Dastgah</h5>
                            <p className="mb-0">
                                Because bridge position determines pitch, playing in a given
                                Dastgah often starts with retuning movable bridges to the
                                intervals (including koron/sori) that Dastgah requires — the
                                instrument&apos;s physical layout encodes the mode being played.
                            </p>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-12">
                            <h5>Repertoire &amp; Exercises</h5>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-1">Practice even alternation between left and right mallets on a single string before adding melody.</li>
                                <li className="mb-1">Work through Radif Gusheh slowly, focusing on clean, controlled mallet strikes rather than speed.</li>
                                <li className="mb-0">Practice tremolo control at varying dynamic levels to sustain a melodic line expressively.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <RelatedTopics
                items={[
                    { title: 'Tar', href: '/music/instruments/tar', description: 'a plucked counterpart within the same repertoire' },
                    { title: 'Setar', href: '/music/instruments/setar', description: 'another core Persian instrument' },
                    { title: 'Dastgah', href: '/music/persian/dastgah', description: 'the modal systems Santoor bridges are tuned for' },
                    { title: 'Shur', href: '/music/persian/dastgah/shur', description: 'a Dastgah to practice bridge tuning for' },
                    { title: 'Pitch', href: '/music/fundamentals/pitch', description: 'how movable bridges shape Persian pitch' },
                ]}
            />
        </div>
    );
}

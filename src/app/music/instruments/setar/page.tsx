import Breadcrumbs from '@/components/breadcrumbs/Breadcrumbs';
import RelatedTopics from '@/components/music/RelatedTopics';

export default function SetarPage() {
    return (
        <div className="container py-5">
            <p className="section-label">Music</p>
            <h1 className="section-title">Setar</h1>
            <hr className="section-rule" />
            <Breadcrumbs />

            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <p className="lead mb-3">
                        The Setar is a small, intimate long-necked lute — quieter and more
                        introspective than the Tar, and closely tied to solo Radif practice and
                        Sufi musical tradition.
                    </p>

                    <div className="row">
                        <div className="col-md-6">
                            <h5>History</h5>
                            <p className="mb-0">
                                &quot;Setar&quot; literally means &quot;three strings,&quot; though a
                                fourth (drone) string was added later and is standard on modern
                                instruments. It has long been associated with solo, contemplative
                                playing rather than ensemble or dance music.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <h5>Construction</h5>
                            <p className="mb-0">
                                A small pear-shaped mulberry-wood body, thin wooden soundboard
                                (unlike the Tar&apos;s membrane), and a long thin neck with tied-on
                                movable frets, producing a softer, more delicate tone than the Tar.
                            </p>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6">
                            <h5>Strings &amp; Tuning</h5>
                            <p className="mb-0">
                                Four strings — traditionally three melody/drone strings plus a
                                lower added string. As with the Tar, exact tuning is set relative
                                to the piece and Dastgah rather than fixed to one standard.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <h5>Fretboard &amp; Fingering</h5>
                            <p className="mb-0">
                                Movable gut/nylon frets, similar in principle to the Tar, allowing
                                the same koron/sori microtonal positioning. The smaller scale and
                                closer fret spacing shape a distinct left-hand fingering feel.
                            </p>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6">
                            <h5>Technique</h5>
                            <p className="mb-0">
                                Played with the nail of the index finger rather than a separate
                                plectrum — up and down strokes plus a rapid tremolo (called{' '}
                                <em>rizh</em>) sustain notes. The right hand also has direct access
                                to the drone string for accompaniment while the melody continues.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <h5>Ornamentation</h5>
                            <p className="mb-0">
                                Slides, subtle vibrato, and grace-note figures connect and color
                                individual pitches — Setar ornamentation tends to favor
                                understatement over the more percussive attack of the Tar.
                            </p>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6">
                            <h5>Radif Practice &amp; Improvisation</h5>
                            <p className="mb-0">
                                The Setar is a traditional first instrument for studying the Radif
                                in depth — its intimate volume and direct nail-on-string contact
                                suit slow, careful internalization of each Gusheh before
                                improvising from it.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <h5>Differences from Tar</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Wooden soundboard vs. the Tar&apos;s membrane — softer, warmer tone.</li>
                                <li className="list-group-item">Played with a fingernail, not a mezrab plectrum.</li>
                                <li className="list-group-item">Four strings vs. the Tar&apos;s six (in three courses).</li>
                                <li className="list-group-item">Smaller body, quieter dynamic range, more suited to solo/contemplative playing.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-12">
                            <h5>Exercises</h5>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-1">Practice nail-stroke tremolo on a single string at a slow, even tempo before increasing speed.</li>
                                <li className="mb-1">Work a Gusheh from the Radif phrase by phrase, matching a recording before adding your own phrasing.</li>
                                <li className="mb-0">Alternate melody and drone-string accompaniment on the same phrase to build independence between them.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <RelatedTopics
                items={[
                    { title: 'Tar', href: '/music/instruments/tar', description: 'the Setar’s louder, mezrab-plucked relative' },
                    { title: 'Santoor', href: '/music/instruments/santoor', description: 'another instrument central to Radif repertoire' },
                    { title: 'Dastgah', href: '/music/persian/dastgah', description: 'the modal systems Setar repertoire is organized around' },
                    { title: 'Shur', href: '/music/persian/dastgah/shur', description: 'a common starting Dastgah for Setar study' },
                    { title: 'Pitch', href: '/music/fundamentals/pitch', description: 'movable frets and Persian pitch positions' },
                ]}
            />
        </div>
    );
}

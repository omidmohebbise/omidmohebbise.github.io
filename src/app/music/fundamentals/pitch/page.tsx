import MusicTopicPage from '@/components/music/MusicTopicPage';

export default function PitchPage() {
    return (
        <MusicTopicPage
            title="Pitch"
            summary="Pitch is how high or low a sound is perceived to be — the raw material every scale, melody, and Dastgah is built from."
            definition={
                <p className="mb-0">
                    Pitch is the perceived frequency of a sound. Faster vibration is heard as
                    higher pitch, slower vibration as lower pitch, measured in Hertz (Hz —
                    cycles per second). Western concert pitch conventionally tunes the A above
                    middle C (A4) to 440 Hz, though some traditions and eras use other
                    reference points.
                </p>
            }
            whyItMatters={
                <p className="mb-0">
                    Every interval, scale, chord, and Dastgah is really just a specific set of
                    pitch relationships. Before you can reason about melody or harmony, your ear
                    needs a stable sense of individual pitches and how far apart they are.
                </p>
            }
            explanation={
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Octave equivalence:</strong> A pitch and the pitch at double (or half) its frequency are heard as &quot;the same note,&quot; just higher or lower — this is why octaves share a letter name.</li>
                    <li className="list-group-item"><strong>Relative vs. absolute pitch:</strong> Absolute pitch is recognizing a note without a reference; relative pitch — far more common and trainable — is recognizing the distance between two pitches.</li>
                    <li className="list-group-item"><strong>Equal temperament:</strong> Modern Western instruments (piano included) divide the octave into 12 equal semitones. It&apos;s a compromise tuning that makes every key sound equally in tune (and equally slightly &quot;off&quot; from pure harmonic ratios).</li>
                    <li className="list-group-item"><strong>Persian pitch system:</strong> Persian classical music doesn&apos;t use 12 equal divisions. It includes intervals narrower than a Western semitone — see the Persian Music Connection below.</li>
                </ul>
            }
            howToHear={
                <p className="mb-0">
                    Play a reference pitch (a piano note, a drone, a tuner) and sing or hum
                    alongside it. Notice when you&apos;re exactly matched versus slightly above or
                    below — that gap is the first thing ear training sharpens.
                </p>
            }
            howToSing={
                <p className="mb-0">
                    Match pitch by ear against a sustained reference tone before trying to sing
                    a full melody. Start with unison matching, then try singing a notch above
                    and below the reference and back to it — this builds the muscle memory for
                    landing a pitch accurately.
                </p>
            }
            howToPlayPiano={
                <p className="mb-0">
                    The piano is fixed-pitch and equal-tempered — every key always produces the
                    same frequency. That makes it an excellent reference instrument for learning
                    absolute pitch landmarks (middle C, the A above it at 440 Hz) that you can
                    then carry to other instruments and to your voice.
                </p>
            }
            onTarSetarSantoor={
                <p className="mb-0">
                    Unlike the piano, Tar and Setar frets are tied on with movable gut or nylon
                    ligatures, so their pitches aren&apos;t fixed to 12-tone equal temperament —
                    they&apos;re repositioned to produce the narrower Persian intervals a given
                    Dastgah requires. On Santoor, the same idea shows up in the movable bridges,
                    which are set per Dastgah before playing.
                </p>
            }
            persianConnection={
                <p className="mb-0">
                    Persian music adds two accidentals beyond sharp/flat: <strong>koron</strong>{' '}
                    (lowers a pitch by roughly a quarter-tone) and <strong>sori</strong> (raises
                    it by roughly a quarter-tone). These aren&apos;t exotic add-ons — they&apos;re
                    structural to Dastgahs like Shur, which uses a koron-lowered second degree as
                    one of its defining colors.
                </p>
            }
            exercises={
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Sing a reference pitch, look away, then try to sing it again from memory — check against the reference.</li>
                    <li className="list-group-item">Tune an open string on Tar/Setar to match a drone by ear before using a tuner to check.</li>
                    <li className="list-group-item">Compare a piano note to the nearest fretted note on Tar or Setar and listen for how far the Persian pitch sits from the equal-tempered one.</li>
                </ul>
            }
            related={[
                { title: 'Dastgah', href: '/music/persian/dastgah', description: 'the modal systems built from these pitch relationships' },
                { title: 'Shur', href: '/music/persian/dastgah/shur', description: 'a Dastgah defined partly by its koron-lowered pitch' },
                { title: 'Tar', href: '/music/instruments/tar', description: 'movable frets for Persian pitch positions' },
                { title: 'Setar', href: '/music/instruments/setar', description: 'movable frets for Persian pitch positions' },
                { title: 'Santoor', href: '/music/instruments/santoor', description: 'movable bridges set per Dastgah' },
                { title: 'Piano', href: '/music/instruments/piano', description: 'a fixed equal-tempered reference instrument' },
                { title: 'Voice', href: '/music/instruments/voice', description: 'pitch matching and intonation' },
            ]}
        />
    );
}

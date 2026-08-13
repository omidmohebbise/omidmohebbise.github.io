import MusicTopicPage from '@/components/music/MusicTopicPage';

export default function ShurPage() {
    return (
        <MusicTopicPage
            title="Shur"
            summary="The most widely used Dastgah in Persian music — modal home to a large share of Persian folk melody and the starting point most students learn first."
            definition={
                <p className="mb-0">
                    Shur is one of the seven principal Dastgahs of Persian classical music. Its
                    tonal center sits on a pitch lowered by a koron (a Persian-specific
                    quarter-tone-ish flat) on its second degree — the interval that gives Shur
                    its distinctive, often-described-as-melancholic character.
                </p>
            }
            whyItMatters={
                <p className="mb-0">
                    Shur is usually the first Dastgah taught because so much Persian folk music
                    and a large branch of the Radif live inside it or its related Avaz (Abu Ata,
                    Bayat-e Tork, Afshari, Dashti). Learning Shur well gives you a working
                    foundation for a large share of the whole Persian repertoire.
                </p>
            }
            explanation={
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Tonal center (Shahed):</strong> The note the melody keeps returning to and resting on.</li>
                    <li className="list-group-item"><strong>Koron second:</strong> The defining interval — a neutral second, neither a Western major nor minor second.</li>
                    <li className="list-group-item"><strong>Gusheh:</strong> Shur contains many named melodic modules (short characteristic phrases/sections) performed roughly in a traditional order, opening with the Daramad.</li>
                    <li className="list-group-item"><strong>Related Avaz:</strong> Abu Ata, Bayat-e Tork, Afshari, and Dashti share Shur&apos;s tonal material but shift the emphasis and mood.</li>
                </ul>
            }
            onTarSetarSantoor={
                <p className="mb-0">
                    On Tar and Setar, playing in Shur means repositioning the movable frets to
                    sound the koron second rather than a fixed Western interval. On Santoor, the
                    movable bridges are set specifically for Shur before playing — the tuning
                    itself encodes the Dastgah.
                </p>
            }
            persianConnection={
                <p className="mb-0">
                    Shur sits inside the Radif — the master repertoire of Gusheh passed from
                    teacher to student — and is typically where a student&apos;s formal study of
                    the Radif begins.
                </p>
            }
            exercises={
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Sing or play the Daramad of Shur slowly, listening for the koron second against the tonal center.</li>
                    <li className="list-group-item">Listen to a few different Gusheh within Shur back to back and notice how each shifts mood while staying anchored to the same tonal center.</li>
                    <li className="list-group-item">Compare Shur to one of its related Avaz (e.g. Bayat-e Tork) and listen for what changes.</li>
                </ul>
            }
            related={[
                { title: 'Dastgah', href: '/music/persian/dastgah', description: 'the modal system Shur belongs to' },
                { title: 'Persian Music', href: '/music/persian', description: 'the broader Dastgah / Avaz / Radif system' },
                { title: 'Pitch', href: '/music/fundamentals/pitch', description: 'koron and sori, the accidentals that define Shur’s color' },
                { title: 'Tar', href: '/music/instruments/tar', description: 'fretting Shur’s koron second' },
                { title: 'Setar', href: '/music/instruments/setar', description: 'closely tied to Radif practice in Shur' },
                { title: 'Santoor', href: '/music/instruments/santoor', description: 'bridge setup for Shur' },
                { title: 'Voice', href: '/music/instruments/voice', description: 'Avaz — vocal improvisation within Shur' },
            ]}
        />
    );
}

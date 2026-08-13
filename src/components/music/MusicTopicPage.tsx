import Breadcrumbs from '@/components/breadcrumbs/Breadcrumbs';
import RelatedTopics, { type RelatedTopic } from './RelatedTopics';

function Section({ title, children }: { title: string; children?: React.ReactNode }) {
    if (!children) return null;
    return (
        <div className="mb-4">
            <h5>{title}</h5>
            <div>{children}</div>
        </div>
    );
}

export interface MusicTopicPageProps {
    title: string;
    summary?: React.ReactNode;
    definition?: React.ReactNode;
    whyItMatters?: React.ReactNode;
    explanation?: React.ReactNode;
    examples?: React.ReactNode;
    howToHear?: React.ReactNode;
    howToSing?: React.ReactNode;
    howToPlayPiano?: React.ReactNode;
    onTarSetarSantoor?: React.ReactNode;
    persianConnection?: React.ReactNode;
    exercises?: React.ReactNode;
    references?: React.ReactNode;
    personalNotes?: React.ReactNode;
    related?: RelatedTopic[];
}

/**
 * Reusable template for a Music topic page (brief §18). Every section
 * is optional — pass only what applies to a given topic.
 */
export default function MusicTopicPage({
    title,
    summary,
    definition,
    whyItMatters,
    explanation,
    examples,
    howToHear,
    howToSing,
    howToPlayPiano,
    onTarSetarSantoor,
    persianConnection,
    exercises,
    references,
    personalNotes,
    related,
}: MusicTopicPageProps) {
    return (
        <div className="container py-5">
            <p className="section-label">Music</p>
            <h1 className="section-title">{title}</h1>
            <hr className="section-rule" />
            <Breadcrumbs />

            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    {summary && <p className="lead mb-3">{summary}</p>}
                    <Section title="Definition">{definition}</Section>
                    <Section title="Why It Matters">{whyItMatters}</Section>
                    <Section title="Explanation">{explanation}</Section>
                    <Section title="Musical Examples &amp; Notation">{examples}</Section>
                    <Section title="How to Hear It">{howToHear}</Section>
                    <Section title="How to Sing It">{howToSing}</Section>
                    <Section title="How to Play It on Piano">{howToPlayPiano}</Section>
                    <Section title="On Tar / Setar / Santoor">{onTarSetarSantoor}</Section>
                    <Section title="Persian Music Connection">{persianConnection}</Section>
                    <Section title="Exercises">{exercises}</Section>
                    <Section title="References">{references}</Section>
                    <Section title="Personal Notes">{personalNotes}</Section>
                </div>
            </div>

            {related && <RelatedTopics items={related} />}
        </div>
    );
}

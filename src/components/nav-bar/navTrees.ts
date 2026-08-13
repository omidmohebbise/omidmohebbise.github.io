import { musicTree, type MusicNode } from '@/app/music/musicTree';
import type { NavNode } from './NavMenu';

export interface NavMenuConfig {
    label: string;
    activePrefix: string;
    overviewHref?: string;
    overviewLabel?: string;
    nodes: NavNode[];
}

const developmentNav: NavNode[] = [
    {
        title: 'Java',
        href: '/development/java/java-8-23',
        children: [
            { title: 'Java 8 to 23', href: '/development/java/java-8-23' },
            { title: 'Common Libraries', href: '/development/java/common-libs' },
            {
                title: 'Concurrency',
                href: '/development/java/concurrency',
                children: [
                    { title: 'Thread Local', href: '/development/java/concurrency/thread-local' },
                    { title: 'Inheritable Thread Local', href: '/development/java/concurrency/inheritable-thread-local' },
                ],
            },
            { title: 'Security', href: '/development/java/security' },
        ],
    },
    { title: 'Spring', href: '/development/spring' },
    { title: 'Design Patterns', href: '/development/design-pattern' },
];

const architectureNav: NavNode[] = [
    {
        title: 'Software Architecture',
        href: '/architecture/software-architecture/definition',
        children: [
            { title: 'Key Components', href: '/architecture/software-architecture/key-components' },
            { title: 'Roles & Responsibilities', href: '/architecture/software-architecture/roles-responsibilities' },
            { title: 'Common Patterns', href: '/architecture/software-architecture/common-patterns' },
            { title: 'Real-World Examples', href: '/architecture/software-architecture/real-world-examples' },
        ],
    },
    {
        title: 'Data Architecture',
        href: '/architecture/data-architecture-detailed/source-systems',
        children: [
            { title: 'Data Ingestion', href: '/architecture/data-architecture-detailed/data-ingestion' },
            { title: 'Storage Layers', href: '/architecture/data-architecture-detailed/storage-layers' },
            { title: 'Metadata & Catalog', href: '/architecture/data-architecture-detailed/metadata-catalog' },
            { title: 'Quality & Governance', href: '/architecture/data-architecture-detailed/quality-governance' },
        ],
    },
    {
        title: 'Enterprise Architecture',
        href: '/architecture/enterprise-architecture/overview',
        children: [
            { title: 'Business Architecture', href: '/architecture/enterprise-architecture/business-architecture' },
            { title: 'Application Architecture', href: '/architecture/enterprise-architecture/application-architecture' },
            { title: 'Technology Architecture', href: '/architecture/enterprise-architecture/technology-architecture' },
            { title: 'Governance', href: '/architecture/enterprise-architecture/governance' },
        ],
    },
    { title: 'Integration Architecture', href: '/architecture/integration-architecture' },
    { title: 'Security Architecture', href: '/architecture/security-architecture' },
    { title: 'DevOps & Platform Architecture', href: '/architecture/devops-platform-architecture' },
    { title: 'Analytics & BI Architecture', href: '/architecture/analytics-bi-architecture' },
    { title: 'Big Data Architecture', href: '/architecture/big-data-architecture' },
    { title: 'AI/ML Architecture', href: '/architecture/ai-ml-architecture' },
];

const cloudNav: NavNode[] = [
    { title: 'AWS', href: '/cloud/aws' },
    { title: 'Azure', href: '/cloud/azure' },
    { title: 'GCP', href: '/cloud/gcp' },
    { title: 'Service Mapping', href: '/cloud/service-mapping' },
];

const aiNav: NavNode[] = [
    { title: 'Main Concepts', href: '/ai/main-concepts' },
    { title: 'Common Models', href: '/ai/common-model' },
    { title: 'Generative AI (GANs/VAE)', href: '/ai/gans' },
    { title: 'Tools', href: '/ai/tools' },
    { title: 'Libraries', href: '/ai/libraries' },
];

const securityNav: NavNode[] = [
    { title: 'Key Concepts', href: '/security/key-concepts' },
    { title: 'Security Areas', href: '/security/security-areas' },
    { title: 'Web Security', href: '/security/web-security' },
    { title: 'Algorithms', href: '/security/algorithms' },
    { title: 'Frameworks', href: '/security/frameworks' },
];

const devopsNav: NavNode[] = [
    { title: 'Kubernetes', href: '/devops/k8s' },
    { title: 'Terraform', href: '/devops/terraform' },
    { title: 'GitOps', href: '/devops/gitops' },
];

const dataNav: NavNode[] = [
    {
        title: 'Why Data Matters',
        href: '/data/role-of-data/why-data-matters',
        children: [
            { title: 'Data-Driven Culture', href: '/data/role-of-data/data-driven-culture' },
            { title: 'Data in Business Functions', href: '/data/role-of-data/data-in-business-functions' },
            { title: 'Data Governance & Ethics', href: '/data/role-of-data/data-governance-ethics' },
        ],
    },
    {
        title: 'Databases vs Storage',
        href: '/data/databases-storage/overview',
        children: [
            { title: 'Types of Databases', href: '/data/databases-storage/types-of-databases' },
            { title: 'Storage Options', href: '/data/databases-storage/storage-options' },
            { title: 'Choosing the Right Option', href: '/data/databases-storage/choosing-right-option' },
        ],
    },
    {
        title: 'Batch Processing',
        href: '/data/data-processing/batch-processing',
        children: [
            { title: 'Real-Time / Streaming', href: '/data/data-processing/real-time-streaming' },
            { title: 'ETL & ELT', href: '/data/data-processing/etl-elt' },
            { title: 'Data Integration', href: '/data/data-processing/data-integration' },
            { title: 'Analytics & BI', href: '/data/data-processing/analytics-bi' },
        ],
    },
    {
        title: 'Data Architecture',
        href: '/data/data-architecture/overview',
        children: [
            { title: 'Reference Architectures', href: '/data/data-architecture/reference-architectures' },
            { title: 'Core Components', href: '/data/data-architecture/core-components' },
            { title: 'Data Management Practices', href: '/data/data-architecture/data-management-practices' },
            { title: 'Modern Trends', href: '/data/data-architecture/modern-trends' },
        ],
    },
];

function musicNodesToNavNodes(nodes: MusicNode[], basePath: string): NavNode[] {
    return nodes.map((node) => {
        const href = `${basePath}/${node.slug}`;
        return {
            title: node.title,
            href,
            children: node.children ? musicNodesToNavNodes(node.children, href) : undefined,
        };
    });
}

export const mainNavMenus: NavMenuConfig[] = [
    { label: 'Development', activePrefix: '/development', nodes: developmentNav },
    { label: 'Architecture', activePrefix: '/architecture', nodes: architectureNav },
    { label: 'Cloud', activePrefix: '/cloud', nodes: cloudNav },
    { label: 'AI', activePrefix: '/ai', nodes: aiNav },
    { label: 'Security', activePrefix: '/security', nodes: securityNav },
    { label: 'DevOps', activePrefix: '/devops', nodes: devopsNav },
    { label: 'Data', activePrefix: '/data', overviewHref: '/data', overviewLabel: 'Overview', nodes: dataNav },
    { label: 'Music', activePrefix: '/music', overviewHref: '/music', overviewLabel: 'Music Overview', nodes: musicNodesToNavNodes(musicTree, '/music') },
];

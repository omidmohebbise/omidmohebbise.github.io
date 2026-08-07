import Link from 'next/link'

const TABS = [
    { label: 'Basic', href: '/devops/k8s/iqs' },
    { label: 'Intermediate', href: '/devops/k8s/iqs/intermediate' },
    { label: 'Advanced', href: '/devops/k8s/iqs/advanced' },
    { label: 'Expert', href: '/devops/k8s/iqs/expert' },
]

export default function IqsTabs({ active }: { active: string }) {
    return (
        <div className="d-flex gap-2 mb-4 flex-wrap">
            {TABS.map(tab => (
                <Link
                    key={tab.href}
                    href={tab.href}
                    className={`btn btn-sm ${tab.label === active ? 'btn-primary' : 'btn-outline-secondary'}`}
                    aria-current={tab.label === active ? 'page' : undefined}
                >
                    {tab.label}
                </Link>
            ))}
        </div>
    )
}

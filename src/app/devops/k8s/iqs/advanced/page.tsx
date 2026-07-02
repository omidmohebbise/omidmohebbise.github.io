
import Link from 'next/link'

const CURRENT_PATH = "/software/deployment/k8s/iqs"
const PageStates = {
    Basic: "/",
    Intermediate: "/intermediate",
    Advanced: "#/advanced",
    Experts: "/expert"
}

export default function SoftSkillPage() {
    
    return (
        <div className="container py-5">
            <p className="section-label">DevOps</p>
            <h1 className="section-title">K8s Interview Questions — Advanced</h1>
            <hr className="section-rule" />
            <div className='d-flex gap-2 mb-4' >
                {Object.keys(PageStates)
                    .map(x => <div className="p-1" key={PageStates[x as keyof typeof PageStates]}>
                        <Link href={CURRENT_PATH + PageStates[x as keyof typeof PageStates]} className="btn btn-outline-secondary">{x}</Link>
                    </div>)}
            </div>
            <p style={{ color: '#475569' }}>no content</p>
        </div>
    )
}
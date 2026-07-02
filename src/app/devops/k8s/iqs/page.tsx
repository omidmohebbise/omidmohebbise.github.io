
import Image from 'next/image'
import Link from 'next/link'

const CURRENT_PATH = "/software/deployment/k8s/iqs"
const PageStates = {
    Basic: "#",
    Intermediate: "/intermediate",
    Advanced: "/advanced",
    Experts: "/expert"
}

export default function SoftSkillPage() {

    return (
        <div className="container py-5">
            <p className="section-label">DevOps</p>
            <h1 className="section-title">K8s Interview Questions</h1>
            <hr className="section-rule" />
            <div className='d-flex gap-2 mb-4' >
                {Object.keys(PageStates)
                    .map(x => <div className="p-1" key={PageStates[x as keyof typeof PageStates]}>
                        <Link href={CURRENT_PATH + PageStates[x as keyof typeof PageStates]} className="btn btn-outline-secondary">{x}</Link>
                    </div>)}
            </div>
            <div className="row g-4">
                <div className="col-md-6">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h4 className="fw-semibold mb-3" style={{ color: '#1e293b' }}>What is Kubernetes?</h4>
                            <p>Kubernetes is an open-source platform designed to automate deploying, scaling, and operating application containers.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h4 className="fw-semibold mb-3" style={{ color: '#1e293b' }}>Explain Kubernetes Architecture.</h4>
                            <p>Kubernetes is an open-source container deployment and administration platform. It offers container orchestration, container runtime, container-centric infrastructure orchestration, balance of load, self-healing mechanisms, and service discovery. A Kubernetes cluster has several control planes and one or more worker nodes.</p>
                            <div className='d-flex justify-content-center w-100 p-2'>
                                <img
                                    src="/images/k8s-architecture.png"
                                    width={400}
                                    height={400}
                                    alt="K8s Architecture Diagram"
                                    style={{ maxWidth: '100%', height: 'auto' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h4 className="fw-semibold mb-3" style={{ color: '#1e293b' }}>What is Container Orchestration?</h4>
                            <p>Container orchestration is the automated process of managing and coordinating the deployment, scaling, networking, and lifecycle of containers. It simplifies the operational complexities of running applications packaged in containers, ensuring they are deployed efficiently and reliably in various environments, such as cloud, on-premises, or hybrid setups.</p>
                            <p><strong>Popular Container Orchestration Tools:</strong></p>
                            <ul>
                                <li><strong>Kubernetes:</strong> Open-source platform widely adopted for container orchestration.</li>
                                <li><strong>Docker Swarm:</strong> Native container orchestration tool from Docker.</li>
                                <li><strong>Amazon ECS (Elastic Container Service):</strong> Managed container orchestration service by AWS. Works well with other AWS services.</li>
                                <li><strong>Azure Kubernetes Service (AKS):</strong> Managed Kubernetes offering by Microsoft Azure.</li>
                                <li><strong>Google Kubernetes Engine (GKE):</strong> Google&apos;s managed Kubernetes platform with deep integration into Google Cloud.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h4 className="fw-semibold mb-3" style={{ color: '#1e293b' }}>What is Kubelet?</h4>
                            <p>The Kubelet is a key component of Kubernetes that runs on every node in a Kubernetes cluster. It is responsible for managing the lifecycle of containers on its node, ensuring they are running as defined in the PodSpec (pod specification). The Kubelet acts as an agent that communicates with the Kubernetes control plane to maintain the desired state of the cluster.</p>
                            <p><strong>Key Responsibilities of Kubelet:</strong></p>
                            <ul>
                                <li>Pod Management</li>
                                <li>Container Runtime Interface (CRI)</li>
                                <li>Node Status Reporting</li>
                                <li>Syncing Desired State</li>
                                <li>Logs and Metrics</li>
                                <li>Volume Management</li>
                                <li>Networking</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

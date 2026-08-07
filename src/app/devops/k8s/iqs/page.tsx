import IqsTabs from './IqsTabs'

export default function SoftSkillPage() {

    return (
        <div className="container py-5">
            <p className="section-label">DevOps</p>
            <h1 className="section-title">K8s Interview Questions</h1>
            <hr className="section-rule" />
            <IqsTabs active="Basic" />
            <div className="row g-4">
                <div className="col-md-6">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h5 className="mb-3">What is Kubernetes?</h5>
                            <p className="mb-0">Kubernetes is an open-source platform designed to automate deploying, scaling, and operating application containers.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h5 className="mb-3">Explain Kubernetes Architecture.</h5>
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
                            <h5 className="mb-3">What is Container Orchestration?</h5>
                            <p>Container orchestration is the automated process of managing and coordinating the deployment, scaling, networking, and lifecycle of containers. It simplifies the operational complexities of running applications packaged in containers, ensuring they are deployed efficiently and reliably in various environments, such as cloud, on-premises, or hybrid setups.</p>
                            <p className="mb-2"><strong>Popular Container Orchestration Tools:</strong></p>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><strong>Kubernetes:</strong> Open-source platform widely adopted for container orchestration.</li>
                                <li className="list-group-item"><strong>Docker Swarm:</strong> Native container orchestration tool from Docker.</li>
                                <li className="list-group-item"><strong>Amazon ECS (Elastic Container Service):</strong> Managed container orchestration service by AWS. Works well with other AWS services.</li>
                                <li className="list-group-item"><strong>Azure Kubernetes Service (AKS):</strong> Managed Kubernetes offering by Microsoft Azure.</li>
                                <li className="list-group-item"><strong>Google Kubernetes Engine (GKE):</strong> Google&apos;s managed Kubernetes platform with deep integration into Google Cloud.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h5 className="mb-3">What is Kubelet?</h5>
                            <p>The Kubelet is a key component of Kubernetes that runs on every node in a Kubernetes cluster. It is responsible for managing the lifecycle of containers on its node, ensuring they are running as defined in the PodSpec (pod specification). The Kubelet acts as an agent that communicates with the Kubernetes control plane to maintain the desired state of the cluster.</p>
                            <p className="mb-2"><strong>Key Responsibilities of Kubelet:</strong></p>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Pod Management</li>
                                <li className="list-group-item">Container Runtime Interface (CRI)</li>
                                <li className="list-group-item">Node Status Reporting</li>
                                <li className="list-group-item">Syncing Desired State</li>
                                <li className="list-group-item">Logs and Metrics</li>
                                <li className="list-group-item">Volume Management</li>
                                <li className="list-group-item">Networking</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

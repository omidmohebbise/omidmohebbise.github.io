
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
        <div className="">
            <h3 className='py-3'> K8s Interview Questions:</h3>
            <div className='row m-0' >
                {Object.keys(PageStates)
                    .map(x => <div className="text-center col-3 p-1" key={PageStates[x]}>
                        <div role="button" className={"p-3 border-bottom"} >
                            <Link href={CURRENT_PATH + PageStates[x]}>{x}</Link>
                        </div>
                    </div>)}
            </div>
            <div className=" mt-4">
                <section className='bg-light m-1 p-2'>
                    <h5>What is Kubernetes?</h5>
                    Kubernetes is an open-source platform designed to automate deploying, scaling, and operating application containers

                </section>

                <section className='bg-light m-1 p-2'>
                    <h5>Explain Kubernetes Architecture.</h5>
                    Kubernetes is an open-source container deployment and administration platform. It offers container orchestration, container runtime, container-centric infrastructure orchestration, balance of load, self-healing mechanisms, and service discovery. A Kubernetes cluster has several control planes and one or more worker nodes.
                    <div className='d-flex justify-content-center w-100  p-2'>
                        <img
                            src="/images/k8s-architecture.png"
                            width={500}
                            height={500}
                            alt="Picture of the author"
                        />
                    </div>

                </section>

                <section className='bg-light m-1 p-2'>
                    <h5>What is Container Orchestration?</h5>
                    Container orchestration is the automated process of managing and coordinating the deployment, scaling, networking, and lifecycle of containers. It simplifies the operational complexities of running applications packaged in containers, ensuring they are deployed efficiently and reliably in various environments, such as cloud, on-premises, or hybrid setups.
                    <br/>
                    <strong>Popular Container Orchestration Tools:</strong>
                    <ul>
                        <li><strong>Kubernetes:</strong> Open-source platform widely adopted for container orchestration.</li>
                        <li><strong>Docker Swarm:</strong> Native container orchestration tool from Docker. </li>
                        <li><strong>Amazon ECS (Elastic Container Service):</strong> Managed container orchestration service by AWS. Works well with other AWS services.</li>
                        <li><strong>Azure Kubernetes Service (AKS): </strong> Managed Kubernetes offering by Microsoft Azure.</li>
                        <li><strong>Google Kubernetes Engine (GKE): </strong> Google’s managed Kubernetes platform with deep integration into Google Cloud.</li>
                    </ul>
                </section>
                <section className='bg-light m-1 p-2'>
                    <h5>What is Kubelet?</h5>
                    The Kubelet is a key component of Kubernetes that runs on every node in a Kubernetes cluster. It is responsible for managing the lifecycle of containers on its node, ensuring they are running as defined in the PodSpec (pod specification). The Kubelet acts as an agent that communicates with the Kubernetes control plane to maintain the desired state of the cluster.                    <h6>Popular Container Orchestration Tools</h6>
                   
                    <strong>Key Responsibilities of Kubelet:</strong>
                    <ul className='p-2'>                   
                        <li>- Pod Management</li>
                        <li>- Container Runtime Interface (CRI):</li>
                        <li>- Node Status Reporting:</li>
                        <li>- Syncing Desired State</li>
                        <li>- Logs and Metrics</li>
                        <li>- Volume Management</li>
                        <li>- Networking</li>
                        </ul>
                </section>


            </div>

        </div>
    )
}
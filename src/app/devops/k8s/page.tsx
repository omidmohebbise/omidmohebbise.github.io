import React from "react";

export default function KubernetesPage() {
    return (
        <div className="container pt-1 pb-3">
            <KubernetesComponents></KubernetesComponents>
            <KubernetesArchitecture></KubernetesArchitecture>
        </div>
    )
}

const KubernetesComponents: React.FC = () => {
    return (
        <div className=" my-5">
            <h1 className=" pb-4">Kubernetes Architecture Overview</h1>
            <div className="row mb-5">
                <div className="col-12">
                    <img
                        src="https://kubernetes.io/images/docs/components-of-kubernetes.svg"
                        alt="Kubernetes Components"
                        className="img-fluid border rounded shadow-sm"
                    />
                </div>

            </div>
        </div>
    );
};


const KubernetesArchitecture: React.FC = () => {
    return (
        <div className="container my-5">

            {/* Control Plane */}
            <section className="mb-5">
                <h2 className="text-primary">🧠 Control Plane Components</h2>
                <p>
                    The control plane makes global decisions about the cluster and responds to events (e.g., scheduling Pods). Typically, all control plane components run on one machine for simplicity.
                </p>

                <div className="row">
                    {[
                        {
                            title: "kube-apiserver",
                            desc: "Front-end for the Kubernetes control plane, exposing the Kubernetes API. Supports horizontal scaling."
                        },
                        {
                            title: "etcd",
                            desc: "Consistent, highly-available key-value store for all cluster data. Requires a solid backup strategy."
                        },
                        {
                            title: "kube-scheduler",
                            desc: "Assigns Pods to nodes based on resource needs, constraints, affinity, and more."
                        },
                        {
                            title: "kube-controller-manager",
                            desc: "Runs background controller processes like Node, Job, EndpointSlice, and ServiceAccount controllers."
                        },
                        {
                            title: "cloud-controller-manager",
                            desc: "Handles cloud-provider specific logic for node status, routing, and service load balancers."
                        }
                    ].map((c, idx) => (
                        <div className="col-md-6 mb-3" key={idx}>
                            <div className="card h-100">
                                <div className="card-body">
                                    <h5 className="card-title">{c.title}</h5>
                                    <p className="card-text">{c.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Node Components */}
            <section className="mb-5">
                <h2 className="text-success">⚙️ Node Components</h2>
                <p>
                    These run on every node to maintain Pods and manage the runtime environment.
                </p>

                <div className="row">
                    {[
                        {
                            title: "kubelet",
                            desc: "Ensures that containers in Pods are running and healthy. Only manages containers created by Kubernetes."
                        },
                        {
                            title: "kube-proxy",
                            desc: "Implements Kubernetes Services networking using OS packet filtering or direct traffic forwarding."
                        },
                        {
                            title: "Container Runtime",
                            desc: "Runs and manages containers. Examples include containerd and CRI-O."
                        }
                    ].map((n, idx) => (
                        <div className="col-md-4 mb-3" key={idx}>
                            <div className="card h-100">
                                <div className="card-body">
                                    <h5 className="card-title">{n.title}</h5>
                                    <p className="card-text">{n.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Addons */}
            <section className="mb-5">
                <h2 className="text-warning">🧩 Addons</h2>
                <p>
                    Addons extend Kubernetes by using native resources (e.g., Deployments, DaemonSets) to implement additional features.
                </p>

                <div className="row">
                    {[
                        {
                            title: "DNS",
                            desc: "Cluster DNS enables service discovery for Kubernetes services."
                        },
                        {
                            title: "Web UI (Dashboard)",
                            desc: "Web-based interface for managing and monitoring clusters and workloads."
                        },
                        {
                            title: "Resource Monitoring",
                            desc: "Collects and displays time-series metrics about container usage."
                        },
                        {
                            title: "Logging",
                            desc: "Captures and stores container logs centrally with search support."
                        },
                        {
                            title: "Network Plugins",
                            desc: "Implements the Container Network Interface (CNI) to enable pod communication."
                        }
                    ].map((addon, idx) => (
                        <div className="col-md-4 mb-3" key={idx}>
                            <div className="card h-100">
                                <div className="card-body">
                                    <h5 className="card-title">{addon.title}</h5>
                                    <p className="card-text">{addon.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Architecture Variations */}
            <section className="mb-5">
                <h2 className="text-info">🏗️ Architecture Variations</h2>

                <div className="alert alert-secondary">
                    <h5>Deployment Options</h5>
                    <ul>
                        <li><strong>Traditional:</strong> Control plane runs directly on machines/VMs.</li>
                        <li><strong>Static Pods:</strong> Managed by kubelet, typically used by kubeadm.</li>
                        <li><strong>Self-hosted:</strong> Control plane runs inside Kubernetes as Pods.</li>
                        <li><strong>Managed Services:</strong> Cloud providers manage the control plane.</li>
                    </ul>
                </div>

                <div className="alert alert-light">
                    <h5>Workload Placement</h5>
                    <ul>
                        <li>Dev clusters may run control plane + workloads on same nodes.</li>
                        <li>Prod clusters often isolate control plane from user workloads.</li>
                        <li>Critical monitoring or add-ons may also run on control plane nodes.</li>
                    </ul>
                </div>

                <div className="alert alert-dark">
                    <h5>Customization & Extensibility</h5>
                    <ul>
                        <li>Custom schedulers and API extensions possible.</li>
                        <li>CRDs and API Aggregation allow extending Kubernetes APIs.</li>
                        <li>Cloud-controller-manager helps with cloud-specific integrations.</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};





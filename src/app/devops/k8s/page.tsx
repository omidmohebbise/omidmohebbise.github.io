import React from "react";

export default function KubernetesPage() {
    return (
        <div className="container py-5">
            <p className="section-label">DevOps</p>
            <h1 className="section-title">Kubernetes</h1>
            <hr className="section-rule" />

            <KubernetesIntro></KubernetesIntro>
            <KubernetesArchitectureDiagram></KubernetesArchitectureDiagram>
            <KubernetesObjects></KubernetesObjects>
            <KubernetesArchitecture></KubernetesArchitecture>
            <BestPractices></BestPractices>
        </div>
    )
}

const KubernetesIntro: React.FC = () => {
    return (
        <div className="card mb-4 shadow-sm">
            <div className="card-body">
                <h5>What is Kubernetes?</h5>
                <p className="mb-3">
                    Kubernetes (K8s) is an open-source container orchestration platform that
                    automates the deployment, scaling, networking, and lifecycle management of
                    containerized applications. Instead of manually placing containers on servers,
                    you describe the <em>desired state</em> — how many replicas, what resources
                    they need, how they should be exposed — and Kubernetes continuously works to
                    make the cluster match that state.
                </p>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Self-Healing:</strong> Automatically restarts, reschedules, or replaces unhealthy containers.</li>
                    <li className="list-group-item"><strong>High Availability:</strong> Multi-node resilience by design — no single point of failure for workloads.</li>
                    <li className="list-group-item"><strong>Scalable:</strong> Scale applications up or down manually or automatically based on demand.</li>
                    <li className="list-group-item"><strong>Secure:</strong> RBAC, Network Policies, and Secrets management control access and traffic.</li>
                    <li className="list-group-item"><strong>Portable:</strong> Runs consistently across cloud, on-premises, or hybrid environments.</li>
                </ul>
            </div>
        </div>
    );
};

const KubernetesArchitectureDiagram: React.FC = () => {
    return (
        <div className="card mb-4 shadow-sm">
            <div className="card-body">
                <h5>Kubernetes Architecture</h5>
                <p className="mb-3">
                    Developers push manifests through <code>kubectl</code>/CI pipelines; the control
                    plane is the &quot;brain&quot; that schedules work onto worker nodes, while built-in
                    service networking and persistent storage keep traffic and data flowing correctly.
                </p>
                <div className="text-center mb-3">
                    <img
                        src="/images/k8s.png"
                        alt="Kubernetes architecture diagram showing users and developers, the control plane (API server, scheduler, controller manager, etcd), worker nodes running kubelet, kube-proxy and pods, built-in service networking, persistent storage, and operations tooling"
                        className="img-fluid border rounded shadow-sm"
                    />
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Ingress / Load Balancer:</strong> Terminates TLS and routes external HTTP/HTTPS traffic into the cluster.</li>
                    <li className="list-group-item"><strong>Control Plane:</strong> The API server, scheduler, controller manager, and etcd — the cluster&apos;s brain and source of truth.</li>
                    <li className="list-group-item"><strong>Worker Nodes:</strong> Run <code>kubelet</code> and <code>kube-proxy</code>, hosting the actual application Pods.</li>
                    <li className="list-group-item"><strong>Service Networking:</strong> Services, kube-proxy, and internal DNS (CoreDNS) provide stable addressing and load balancing between Pods.</li>
                    <li className="list-group-item"><strong>Persistent Storage:</strong> PersistentVolumes and StorageClasses decouple data from the lifecycle of any single Pod.</li>
                </ul>
            </div>
        </div>
    );
};

const KubernetesObjects: React.FC = () => {
    return (
        <div className="card mb-4 shadow-sm">
            <div className="card-body">
                <h5 className="mb-1">Core Kubernetes Objects</h5>
                <p className="mb-3">
                    Almost everything in Kubernetes is a declarative object defined in YAML —
                    these are the ones you&apos;ll work with in nearly every cluster.
                </p>
                <div className="row">
                    <div className="col-md-6">
                        <h6>Workloads</h6>
                        <ul className="list-group list-group-flush mb-3">
                            <li className="list-group-item"><strong>Pod:</strong> The smallest deployable unit — one or more containers that share network and storage.</li>
                            <li className="list-group-item"><strong>ReplicaSet:</strong> Ensures a specified number of identical Pod replicas are running.</li>
                            <li className="list-group-item"><strong>Deployment:</strong> Manages ReplicaSets and rolling updates for stateless applications.</li>
                            <li className="list-group-item"><strong>StatefulSet:</strong> Manages Pods with stable identities and storage — for databases and stateful workloads.</li>
                            <li className="list-group-item"><strong>DaemonSet:</strong> Runs one Pod on every (or selected) node — used for log collectors, monitoring agents.</li>
                            <li className="list-group-item"><strong>Job / CronJob:</strong> Runs Pods to completion once, or on a recurring schedule.</li>
                        </ul>

                        <h6>Networking</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><strong>Service:</strong> Stable virtual IP and DNS name for a set of Pods (ClusterIP, NodePort, LoadBalancer).</li>
                            <li className="list-group-item"><strong>Ingress:</strong> HTTP/HTTPS routing rules mapping external hostnames/paths to Services.</li>
                            <li className="list-group-item"><strong>NetworkPolicy:</strong> Firewall rules controlling which Pods can talk to each other.</li>
                        </ul>
                    </div>

                    <div className="col-md-6">
                        <h6>Configuration &amp; Storage</h6>
                        <ul className="list-group list-group-flush mb-3">
                            <li className="list-group-item"><strong>ConfigMap:</strong> Injects non-sensitive configuration data into Pods.</li>
                            <li className="list-group-item"><strong>Secret:</strong> Injects sensitive data (passwords, tokens, certs), base64-encoded at rest.</li>
                            <li className="list-group-item"><strong>Volume:</strong> Storage attached to a Pod, sharing its lifecycle.</li>
                            <li className="list-group-item"><strong>PersistentVolume (PV) / Claim (PVC):</strong> Cluster storage provisioned independently of any Pod&apos;s lifecycle.</li>
                            <li className="list-group-item"><strong>StorageClass:</strong> Defines how storage is dynamically provisioned (e.g. SSD vs HDD tiers).</li>
                        </ul>

                        <h6>Access Control &amp; Namespaces</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><strong>Namespace:</strong> Partitions cluster resources for teams, environments, or projects.</li>
                            <li className="list-group-item"><strong>ServiceAccount:</strong> Identity that Pods use to authenticate to the API server.</li>
                            <li className="list-group-item"><strong>Role / RoleBinding:</strong> Grants permissions within a single namespace.</li>
                            <li className="list-group-item"><strong>ClusterRole / ClusterRoleBinding:</strong> Grants permissions cluster-wide.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

const KubernetesArchitecture: React.FC = () => {
    return (
        <div>
            {/* Control Plane */}
            <section className="mb-5">
                <h3 className="fw-semibold mb-3">Control Plane Components</h3>
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
                            <div className="card h-100 shadow-sm">
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
                <h3 className="fw-semibold mb-3">Node Components</h3>
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
                            <div className="card h-100 shadow-sm">
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
                <h3 className="fw-semibold mb-3">Addons</h3>
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
                            <div className="card h-100 shadow-sm">
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
                <h3 className="fw-semibold mb-3">Architecture Variations</h3>

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
                    <h5>Customization &amp; Extensibility</h5>
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

const BestPractices: React.FC = () => {
    return (
        <div className="card mb-4 shadow-sm">
            <div className="card-body">
                <h5>Best Practices</h5>
                <ul className="list-unstyled mb-0">
                    <li className="mb-1">Always set resource <code>requests</code> and <code>limits</code> — an unbounded Pod can starve its neighbors.</li>
                    <li className="mb-1">Define liveness and readiness probes so Kubernetes can detect and recover from failures automatically.</li>
                    <li className="mb-1">Never store secrets in plain ConfigMaps or images — use Secrets (or an external secrets manager) with RBAC restrictions.</li>
                    <li className="mb-1">Use Namespaces and ResourceQuotas to isolate teams/environments sharing a cluster.</li>
                    <li className="mb-1">Prefer Deployments/StatefulSets over bare Pods — they give you self-healing and rollout control for free.</li>
                    <li className="mb-1">Version and store manifests in Git; apply changes through CI/CD (or GitOps) rather than manual <code>kubectl edit</code>.</li>
                    <li className="mb-0">Back up etcd regularly — it is the single source of truth for the entire cluster&apos;s state.</li>
                </ul>
            </div>
        </div>
    );
};

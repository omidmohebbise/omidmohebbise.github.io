import IqsTabs from '../IqsTabs'

export default function AdvancedIqsPage() {
    return (
        <div className="container py-5">
            <p className="section-label">DevOps</p>
            <h1 className="section-title">K8s Interview Questions — Advanced</h1>
            <hr className="section-rule" />
            <IqsTabs active="Advanced" />
            <div className="row g-4">
                <div className="col-md-6">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h5 className="mb-3">StatefulSet vs Deployment — when do you need a StatefulSet?</h5>
                            <p className="mb-0">A Deployment&apos;s Pods are interchangeable and get random names/storage. A <strong>StatefulSet</strong> gives each Pod a stable, unique identity (<code>app-0</code>, <code>app-1</code>...), a stable network identity via DNS, and its own dedicated PersistentVolumeClaim that survives rescheduling. Use it for anything where identity or storage must persist per instance — databases, Kafka brokers, Elasticsearch nodes.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h5 className="mb-3">What is a DaemonSet used for?</h5>
                            <p className="mb-0">A DaemonSet guarantees exactly one copy of a Pod runs on every node (or a matching subset via node selectors/affinity), and automatically adds/removes Pods as nodes join or leave. Typical uses: log shippers (Fluentd), node monitoring agents (node-exporter), and CNI/storage plugins that need node-local access.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h5 className="mb-3">How does an Ingress Controller differ from an Ingress resource?</h5>
                            <p className="mb-0">The <strong>Ingress resource</strong> is just a declarative set of routing rules (host/path → Service). It does nothing on its own — you need an <strong>Ingress Controller</strong> (NGINX, Traefik, cloud-managed ALB, etc.) running in the cluster to watch Ingress objects and actually implement the routing, TLS termination, and load balancing.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h5 className="mb-3">How do NetworkPolicies control traffic?</h5>
                            <p>By default, all Pods can talk to all other Pods. A <strong>NetworkPolicy</strong> selects Pods by label and defines allowed ingress/egress rules — once any policy selects a Pod, all traffic not explicitly allowed is denied for that direction.</p>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Requires a CNI plugin that enforces policies (e.g. Calico, Cilium) — not all do.</li>
                                <li className="list-group-item">Commonly used to enforce namespace isolation in multi-tenant clusters.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h5 className="mb-3">Explain PersistentVolume, PersistentVolumeClaim, and StorageClass together.</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><strong>PersistentVolume (PV):</strong> A piece of cluster storage, provisioned by an admin or dynamically.</li>
                                <li className="list-group-item"><strong>PersistentVolumeClaim (PVC):</strong> A Pod&apos;s request for storage — Kubernetes binds it to a matching PV.</li>
                                <li className="list-group-item"><strong>StorageClass:</strong> A template describing how to dynamically provision a PV on demand (e.g. gp3 SSD, provisioner, reclaim policy) — so you rarely pre-create PVs by hand.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h5 className="mb-3">How does Kubernetes RBAC work?</h5>
                            <p className="mb-0">RBAC (Role-Based Access Control) grants permissions by binding a <strong>subject</strong> (user, group, or ServiceAccount) to a <strong>Role</strong> (namespace-scoped) or <strong>ClusterRole</strong> (cluster-wide) via a <strong>RoleBinding</strong>/<strong>ClusterRoleBinding</strong>. Roles define allowed verbs (get, list, create, delete...) on specific resource types — following least-privilege, ServiceAccounts used by workloads should only be bound to the exact permissions they need.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h5 className="mb-3">What problem does Helm solve?</h5>
                            <p className="mb-0">Helm packages a set of Kubernetes manifests into a reusable, versioned <strong>chart</strong> with templated values — instead of hand-maintaining dozens of YAML files per environment, you install/upgrade/rollback a chart as a single release, overriding only the values that differ (image tag, replica count, env-specific config).</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

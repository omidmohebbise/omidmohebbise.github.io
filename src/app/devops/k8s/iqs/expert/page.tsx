import IqsTabs from '../IqsTabs'

export default function ExpertIqsPage() {
    return (
        <div className="container py-5">
            <p className="section-label">DevOps</p>
            <h1 className="section-title">K8s Interview Questions — Expert</h1>
            <hr className="section-rule" />
            <IqsTabs active="Expert" />
            <div className="row g-4">
                <div className="col-md-6">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h5 className="mb-3">What are CRDs and Operators, and why do they matter?</h5>
                            <p className="mb-0">A <strong>CustomResourceDefinition (CRD)</strong> extends the Kubernetes API with your own object kind (e.g. <code>PostgresCluster</code>). An <strong>Operator</strong> is a controller that watches those custom resources and encodes operational knowledge — backups, failover, upgrades — that would otherwise require a human. Together they let you manage complex, stateful applications the same declarative way you manage built-in objects.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h5 className="mb-3">Why is etcd critical, and how do you protect it?</h5>
                            <p>etcd is the single source of truth for all cluster state — every object, every Secret. Losing it means losing the cluster.</p>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Run an odd number of etcd members (typically 3 or 5) for quorum-based fault tolerance.</li>
                                <li className="list-group-item">Take regular snapshots (<code>etcdctl snapshot save</code>) and test restores.</li>
                                <li className="list-group-item">Watch disk latency closely — etcd is extremely sensitive to slow disks.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h5 className="mb-3">What are Admission Controllers?</h5>
                            <p className="mb-0">Admission controllers intercept API requests after authentication/authorization but before an object is persisted to etcd. <strong>Mutating</strong> webhooks can modify the object (e.g. inject a sidecar); <strong>validating</strong> webhooks can accept or reject it (e.g. enforce that images come from an approved registry). They&apos;re how policy engines like OPA/Gatekeeper or Kyverno enforce organization-wide rules.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h5 className="mb-3">How do Pod Security Standards harden a cluster?</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><strong>Privileged:</strong> Unrestricted — effectively opt-out of Pod-level security.</li>
                                <li className="list-group-item"><strong>Baseline:</strong> Blocks known privilege escalations while staying broadly compatible.</li>
                                <li className="list-group-item"><strong>Restricted:</strong> Enforces current Pod hardening best practices (non-root, dropped capabilities, no host namespaces).</li>
                            </ul>
                            <p className="mb-0 mt-2">Enforced per-namespace via labels, replacing the deprecated PodSecurityPolicy.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h5 className="mb-3">HPA vs Cluster Autoscaler vs Vertical Pod Autoscaler — how do they interact?</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><strong>HPA:</strong> Adds/removes Pod replicas based on metrics.</li>
                                <li className="list-group-item"><strong>Cluster Autoscaler:</strong> Adds/removes nodes when Pods can&apos;t be scheduled or nodes sit underutilized.</li>
                                <li className="list-group-item"><strong>VPA:</strong> Adjusts a Pod&apos;s resource requests/limits over time — generally not run alongside HPA on the same metric to avoid conflicting decisions.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h5 className="mb-3">How do you plan a zero-downtime cluster upgrade?</h5>
                            <p className="mb-0">Upgrade the control plane first (it&apos;s versioned independently and stays backward-compatible with slightly older kubelets), then upgrade nodes one at a time: <code>cordon</code> to stop new scheduling, <code>drain</code> to safely evict and reschedule existing Pods elsewhere (respecting PodDisruptionBudgets), upgrade kubelet, then <code>uncordon</code>. PodDisruptionBudgets are what keep a rolling node upgrade from taking an entire application down at once.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h5 className="mb-3">A Pod is stuck in <code>Pending</code> — what do you check?</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><code>kubectl describe pod</code> — check Events for scheduling failures.</li>
                                <li className="list-group-item">Insufficient CPU/memory on all nodes matching its requests.</li>
                                <li className="list-group-item">Unsatisfiable node affinity/anti-affinity or taints without matching tolerations.</li>
                                <li className="list-group-item">An unbound PersistentVolumeClaim with no matching PersistentVolume or StorageClass.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

import IqsTabs from '../IqsTabs'

export default function IntermediateIqsPage() {
    return (
        <div className="container py-5">
            <p className="section-label">DevOps</p>
            <h1 className="section-title">K8s Interview Questions — Intermediate</h1>
            <hr className="section-rule" />
            <IqsTabs active="Intermediate" />
            <div className="row g-4">
                <div className="col-md-6">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h5 className="mb-3">How does a Deployment perform a rolling update?</h5>
                            <p>A Deployment creates a new ReplicaSet and gradually scales it up while scaling the old one down, controlled by <code>maxSurge</code> and <code>maxUnavailable</code>. This keeps the application available throughout the rollout.</p>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><strong>maxSurge:</strong> How many extra Pods can be created above the desired count during the update.</li>
                                <li className="list-group-item"><strong>maxUnavailable:</strong> How many Pods can be unavailable during the update.</li>
                                <li className="list-group-item"><strong>Rollback:</strong> <code>kubectl rollout undo</code> reverts to the previous ReplicaSet revision.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h5 className="mb-3">What&apos;s the difference between liveness, readiness, and startup probes?</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><strong>Liveness Probe:</strong> Detects if a container is stuck — kubelet restarts it on failure.</li>
                                <li className="list-group-item"><strong>Readiness Probe:</strong> Detects if a container can accept traffic — removed from Service endpoints on failure, not restarted.</li>
                                <li className="list-group-item"><strong>Startup Probe:</strong> Gives slow-starting containers time to initialize before liveness/readiness checks begin.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h5 className="mb-3">ConfigMap vs Secret — when do you use each?</h5>
                            <p className="mb-0">Both inject configuration into Pods as environment variables or mounted files. A <strong>ConfigMap</strong> holds non-sensitive data (feature flags, URLs). A <strong>Secret</strong> holds sensitive data (passwords, tokens, TLS certs) — it&apos;s base64-encoded, not encrypted, at rest by default, so it should be paired with RBAC and, ideally, encryption at rest or an external secrets manager.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h5 className="mb-3">What are the different Service types?</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><strong>ClusterIP:</strong> Default — reachable only inside the cluster.</li>
                                <li className="list-group-item"><strong>NodePort:</strong> Exposes the Service on a static port on every node&apos;s IP.</li>
                                <li className="list-group-item"><strong>LoadBalancer:</strong> Provisions an external load balancer (cloud provider integration).</li>
                                <li className="list-group-item"><strong>ExternalName:</strong> Maps a Service to an external DNS name, no proxying involved.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h5 className="mb-3">What happens if you don&apos;t set resource requests and limits?</h5>
                            <p className="mb-0">Without <strong>requests</strong>, the scheduler can&apos;t reliably place the Pod based on actual need, and it may be evicted first under node pressure. Without <strong>limits</strong>, a single container can consume unbounded CPU/memory and starve its neighbors. The combination also determines a Pod&apos;s QoS class (Guaranteed, Burstable, or BestEffort), which controls eviction priority.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h5 className="mb-3">How does the Horizontal Pod Autoscaler (HPA) work?</h5>
                            <p className="mb-0">HPA watches a metric (by default, CPU utilization, but custom/external metrics are supported via the metrics API) and adjusts the <code>replicas</code> count on a Deployment or StatefulSet to keep the observed value near a target. It complements — but is separate from — the Cluster Autoscaler, which adds or removes <em>nodes</em> rather than Pods.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

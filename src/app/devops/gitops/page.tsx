import React from "react";

export default function GitOpsPage() {
    return (
        <div className="container py-5">
            <p className="section-label">DevOps</p>
            <h1 className="section-title">GitOps — Argo CD &amp; Flux</h1>
            <hr className="section-rule" />

            <GitOpsIntro></GitOpsIntro>
            <GitOpsArchitectureDiagram></GitOpsArchitectureDiagram>
            <ArgoFluxComparison></ArgoFluxComparison>
            <GitOpsConcepts></GitOpsConcepts>
            <GitOpsUseCases></GitOpsUseCases>
            <GitOpsExample></GitOpsExample>
            <GitOpsBestPractices></GitOpsBestPractices>
        </div>
    )
}

const GitOpsIntro: React.FC = () => {
    return (
        <div className="card mb-4 shadow-sm">
            <div className="card-body">
                <h5>What is GitOps?</h5>
                <p className="mb-3">
                    GitOps is a way of managing infrastructure and application deployment where a
                    Git repository is the <strong>single source of truth</strong> for the desired
                    state of a system. Instead of a pipeline pushing changes into a cluster,
                    a controller running inside the cluster continuously pulls the desired state
                    from Git and reconciles the live system to match it — automatically,
                    repeatedly, and with a full audit trail.
                </p>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Declarative:</strong> The entire desired state is defined in Git, not in imperative scripts.</li>
                    <li className="list-group-item"><strong>Version Controlled:</strong> Every change is tracked, reviewed, and traceable through normal Git history.</li>
                    <li className="list-group-item"><strong>Automated Sync:</strong> Continuous delivery and self-healing infrastructure with no manual <code>kubectl apply</code>.</li>
                    <li className="list-group-item"><strong>Rollback:</strong> Reverting is just reverting a Git commit — revert to any previous state with confidence.</li>
                    <li className="list-group-item"><strong>Auditability:</strong> A full audit trail of changes and reconciliations, for free, from Git history.</li>
                </ul>
            </div>
        </div>
    );
};

const GitOpsArchitectureDiagram: React.FC = () => {
    return (
        <div className="card mb-4 shadow-sm">
            <div className="card-body">
                <h5>GitOps Architecture</h5>
                <p className="mb-3">
                    Developers never deploy directly — they change manifests in Git, a CI pipeline
                    builds and publishes the image, and a GitOps controller inside the cluster pulls
                    the new desired state and reconciles it onto the cluster itself.
                </p>
                <div className="text-center mb-3">
                    <img
                        src="/images/argo-flux.png"
                        alt="GitOps architecture diagram showing developers committing to a Git repository (application code and environment manifests), a CI pipeline building, testing and pushing container images to a registry, GitOps controllers (Argo CD and Flux) watching Git, detecting drift, reconciling and syncing changes, onto a Kubernetes cluster with dev, staging and production namespaces"
                        className="img-fluid border rounded shadow-sm"
                    />
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>1. Developers / Platform Teams:</strong> Commit code, update Helm/Kustomize manifests, and open a pull request.</li>
                    <li className="list-group-item"><strong>2. Git Repository:</strong> The single source of truth — application code plus per-environment manifests (<code>main</code>, <code>staging</code>, <code>production</code>).</li>
                    <li className="list-group-item"><strong>3. CI Pipeline:</strong> Builds the container image, runs tests, and pushes it to a container registry.</li>
                    <li className="list-group-item"><strong>4. GitOps Controllers:</strong> Argo CD and/or Flux continuously watch Git, detect drift between desired and actual state, and reconcile/sync changes to the cluster.</li>
                    <li className="list-group-item"><strong>5. Kubernetes Cluster:</strong> Multi-tenant, multi-namespace (dev/staging/production), with policy enforced per environment.</li>
                </ul>
            </div>
        </div>
    );
};

const ArgoFluxComparison: React.FC = () => {
    return (
        <div className="card mb-4 shadow-sm">
            <div className="card-body">
                <h5 className="mb-1">Argo CD vs Flux</h5>
                <p className="mb-3">
                    Both are CNCF GitOps controllers that implement the same reconciliation loop —
                    watch Git, detect drift, reconcile, sync — but differ in how they&apos;re built and operated.
                </p>
                <div className="row">
                    <div className="col-md-6">
                        <h6>Argo CD</h6>
                        <p className="mb-2">
                            Argo CD is a GitOps continuous delivery tool for Kubernetes with a strong
                            focus on visibility — a web UI and CLI that show exactly what&apos;s deployed,
                            what&apos;s drifted, and let you sync or roll back with one click.
                        </p>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><strong>Application:</strong> The core CRD — binds a Git source (path/branch) to a destination cluster and namespace.</li>
                            <li className="list-group-item"><strong>ApplicationSet:</strong> Generates many Applications from one template — e.g. one per cluster or environment.</li>
                            <li className="list-group-item"><strong>App of Apps:</strong> A parent Application that manages a set of child Applications, for bootstrapping whole environments.</li>
                            <li className="list-group-item"><strong>Sync Waves &amp; Hooks:</strong> Control the order resources are applied in, and run jobs pre/post-sync.</li>
                            <li className="list-group-item"><strong>Web UI / CLI:</strong> Visualizes application health, sync status, and resource trees; <code>argocd</code> CLI for scripting.</li>
                        </ul>
                    </div>

                    <div className="col-md-6">
                        <h6>Flux</h6>
                        <p className="mb-2">
                            Flux is a GitOps toolkit built as a set of small, composable Kubernetes
                            controllers — no separate UI by default, everything is a Kubernetes
                            custom resource managed the same way as any other cluster object.
                        </p>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><strong>Source Controller:</strong> Watches Git repos, Helm repos, and OCI registries for new revisions.</li>
                            <li className="list-group-item"><strong>Kustomize Controller:</strong> Applies Kustomize-built manifests and reconciles them against the cluster.</li>
                            <li className="list-group-item"><strong>Helm Controller:</strong> Manages Helm releases declaratively from a <code>HelmRelease</code> resource.</li>
                            <li className="list-group-item"><strong>Notification Controller:</strong> Sends events/alerts to Slack, Teams, or webhooks on sync results.</li>
                            <li className="list-group-item"><strong>Image Automation Controllers:</strong> Detect new container image tags and automatically commit updates back to Git.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

const GitOpsConcepts: React.FC = () => {
    return (
        <div className="card mb-4 shadow-sm">
            <div className="card-body">
                <h5>Core GitOps Concepts</h5>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Desired State:</strong> What the manifests in Git say the system should look like — the target of every reconciliation.</li>
                    <li className="list-group-item"><strong>Actual State:</strong> What&apos;s really running in the cluster right now, observed continuously by the controller.</li>
                    <li className="list-group-item"><strong>Drift Detection:</strong> Continuously comparing desired vs. actual state to spot manual changes or failures.</li>
                    <li className="list-group-item"><strong>Reconciliation Loop:</strong> The continuous cycle of watch → diff → apply that keeps actual state converging on desired state.</li>
                    <li className="list-group-item"><strong>Pull-Based Deployment:</strong> The controller inside the cluster pulls changes from Git, rather than an external CI job pushing credentials in — a smaller attack surface than traditional CD.</li>
                </ul>
            </div>
        </div>
    );
};

const GitOpsUseCases: React.FC = () => {
    return (
        <div className="card mb-4 shadow-sm">
            <div className="card-body">
                <h5>Use Cases</h5>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Continuous Delivery:</strong> Every merge to <code>main</code> automatically reconciles onto the target cluster — no manual deploy step.</li>
                    <li className="list-group-item"><strong>Self-Healing Infrastructure:</strong> A manual <code>kubectl edit</code> or a failed Pod gets silently reverted back to what Git says it should be.</li>
                    <li className="list-group-item"><strong>Multi-Environment Promotion:</strong> Promote a change from dev → staging → production by merging between environment branches/folders.</li>
                    <li className="list-group-item"><strong>Multi-Cluster Management:</strong> One Argo CD ApplicationSet or Flux Kustomization can roll the same change out across many clusters.</li>
                    <li className="list-group-item"><strong>Disaster Recovery:</strong> Rebuild a cluster from nothing by pointing a fresh controller at the same Git repository.</li>
                    <li className="list-group-item"><strong>Compliance &amp; Audit:</strong> Every production change has a corresponding pull request, review, and commit — an audit trail for free.</li>
                </ul>
            </div>
        </div>
    );
};

const GitOpsExample: React.FC = () => {
    return (
        <div className="card mb-4 shadow-sm">
            <div className="card-body">
                <h5>Example: An Argo CD Application</h5>
                <p className="mb-2">
                    This is the entire configuration needed to tell Argo CD to continuously
                    deploy a folder of manifests to a namespace:
                </p>
                <pre className="bg-light p-3 rounded"><code>{`apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: reports-service
  namespace: argocd
spec:
  project: default

  source:
    repoURL: https://github.com/omidmohebbise/platform-config.git
    targetRevision: main
    path: environments/production/reports-service

  destination:
    server: https://kubernetes.default.svc
    namespace: production

  syncPolicy:
    automated:
      prune: true
      selfHeal: true`}</code></pre>
                <p className="mb-0">
                    Once applied, Argo CD watches <code>environments/production/reports-service</code>{" "}
                    on the <code>main</code> branch. Any new commit is automatically synced to the
                    <code> production</code> namespace; <code>selfHeal: true</code> means a manual
                    change made directly in the cluster gets reverted back to match Git on the next
                    reconciliation.
                </p>
            </div>
        </div>
    );
};

const GitOpsBestPractices: React.FC = () => {
    return (
        <div className="card mb-4 shadow-sm">
            <div className="card-body">
                <h5>Best Practices</h5>
                <ul className="list-unstyled mb-0">
                    <li className="mb-1">Separate the <strong>application code</strong> repo from the <strong>environment manifests</strong> repo — CI pushes an image tag, GitOps promotes it.</li>
                    <li className="mb-1">Structure manifests per environment (<code>environments/dev</code>, <code>environments/staging</code>, <code>environments/production</code>) so promotion is just a merge or PR.</li>
                    <li className="mb-1">Enable <code>selfHeal</code> / drift correction in production so manual changes can&apos;t silently persist.</li>
                    <li className="mb-1">Require pull request review on the manifests repo — it&apos;s your production change-control process now.</li>
                    <li className="mb-1">Use Sync Waves (Argo CD) or dependency ordering (Flux <code>Kustomization</code> dependencies) when resources must apply in a specific order.</li>
                    <li className="mb-1">Never store plaintext secrets in the manifests repo — pair GitOps with Sealed Secrets, SOPS, or an external secrets operator.</li>
                    <li className="mb-0">Monitor sync status and drift alerts (Notification Controller, Argo CD notifications) — a stuck sync is a silent production incident.</li>
                </ul>
            </div>
        </div>
    );
};

import React from "react";

const KubernetesYamlFiles: React.FC = () => {
    return (
        <div className="container py-5">
            <p className="section-label">DevOps</p>
            <h1 className="section-title">Core Kubernetes YAML File Types</h1>
            <hr className="section-rule" />
            <p>
                Kubernetes is largely driven by <strong>YAML configuration files</strong>, each describing an object in the cluster.
            </p>

            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h5>Anatomy of a Manifest</h5>
                    <p className="mb-2">Every Kubernetes YAML file shares the same four top-level fields:</p>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong>apiVersion:</strong> Which version of the Kubernetes API this object uses (e.g. <code>apps/v1</code>).</li>
                        <li className="list-group-item"><strong>kind:</strong> The type of object being defined — see the table below.</li>
                        <li className="list-group-item"><strong>metadata:</strong> Identifying information — <code>name</code>, <code>namespace</code>, <code>labels</code>, <code>annotations</code>.</li>
                        <li className="list-group-item"><strong>spec:</strong> The desired state — what the object should actually do or contain.</li>
                    </ul>
                </div>
            </div>

            <div className="table-responsive">
                <table className="table table-bordered table-striped align-middle">
                    <thead className="table-dark">
                    <tr>
                        <th>File Type</th>
                        <th>Kind in YAML</th>
                        <th>Purpose</th>
                    </tr>
                    </thead>
                    <tbody>
                    {[
                        ["deployment.yaml", "Deployment", "Manages replica sets and rollout of Pods"],
                        ["service.yaml", "Service", "Exposes a set of Pods as a network service"],
                        ["pod.yaml", "Pod", "Defines a single or multiple container workload"],
                        ["configmap.yaml", "ConfigMap", "Injects config data into Pods"],
                        ["secret.yaml", "Secret", "Injects sensitive data like passwords into Pods"],
                        ["ingress.yaml", "Ingress", "Defines HTTP routing to services"],
                        ["namespace.yaml", "Namespace", "Partitions resources within the cluster"],
                        ["role.yaml", "Role", "Defines permissions within a namespace"],
                        ["rolebinding.yaml", "RoleBinding", "Binds a Role to a user or group"],
                        ["clusterrole.yaml", "ClusterRole", "Defines cluster-wide permissions"],
                        ["clusterrolebinding.yaml", "ClusterRoleBinding", "Binds ClusterRole globally"],
                        ["persistentvolume.yaml", "PersistentVolume", "Represents storage resource"],
                        ["persistentvolumeclaim.yaml", "PersistentVolumeClaim", "Requests storage"],
                        ["statefulset.yaml", "StatefulSet", "Manages stateful Pods (e.g. databases)"],
                        ["daemonset.yaml", "DaemonSet", "Runs a Pod on all or some nodes"],
                        ["job.yaml", "Job", "Manages one-time tasks"],
                        ["cronjob.yaml", "CronJob", "Schedules recurring jobs"],
                        ["serviceaccount.yaml", "ServiceAccount", "Defines account for Pod identity"],
                        ["networkpolicy.yaml", "NetworkPolicy", "Controls traffic flow to/from Pods"],
                    ].map(([file, kind, purpose]) => (
                        <tr key={file}>
                            <td><code>{file}</code></td>
                            <td>{kind}</td>
                            <td>{purpose}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            <div className="card mt-4 shadow-sm">
                <div className="card-body">
                    <h5>Tools That Use These Files</h5>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><code>kubectl apply -f file.yaml</code> — applies the config to the cluster</li>
                        <li className="list-group-item"><code>kustomize</code> — manages multiple YAMLs with overlays</li>
                        <li className="list-group-item"><code>Helm</code> — packages multiple YAMLs into reusable charts</li>
                        <li className="list-group-item"><code>kubeadm</code> — uses its own config file to bootstrap clusters</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default KubernetesYamlFiles;

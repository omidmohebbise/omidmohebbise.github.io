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

            <h3 className="mt-4">🔧 Tools That Use These Files</h3>
            <ul>
                <li>
                    <code>kubectl apply -f file.yaml</code> — applies the config to the cluster
                </li>
                <li>
                    <code>kustomize</code> — manages multiple YAMLs with overlays
                </li>
                <li>
                    <code>Helm</code> — packages multiple YAMLs into reusable charts
                </li>
                <li>
                    <code>kubeadm</code> — uses its own config file to bootstrap clusters
                </li>
            </ul>
        </div>
    );
};

export default KubernetesYamlFiles;

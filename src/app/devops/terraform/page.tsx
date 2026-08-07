import React from "react";

export default function TerraformPage() {
    return (
        <div className="container py-5">
            <p className="section-label">DevOps</p>
            <h1 className="section-title">Terraform</h1>
            <hr className="section-rule" />

            <TerraformIntro></TerraformIntro>
            <TerraformArchitectureDiagram></TerraformArchitectureDiagram>
            <TerraformConcepts></TerraformConcepts>
            <TerraformWorkflow></TerraformWorkflow>
            <TerraformUseCases></TerraformUseCases>
            <TerraformExample></TerraformExample>
            <TerraformBestPractices></TerraformBestPractices>
        </div>
    )
}

const TerraformIntro: React.FC = () => {
    return (
        <div className="card mb-4 shadow-sm">
            <div className="card-body">
                <h5>What is Terraform?</h5>
                <p className="mb-3">
                    Terraform is an open-source <strong>Infrastructure as Code (IaC)</strong> tool
                    from HashiCorp. Instead of clicking through cloud consoles, you describe the
                    infrastructure you want — VMs, networks, storage, Kubernetes clusters, DNS
                    records — in declarative configuration files, and Terraform figures out the
                    plan to create, update, or destroy real resources to match that description.
                </p>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Declarative:</strong> You describe the desired end state, not the steps to get there.</li>
                    <li className="list-group-item"><strong>Reusable:</strong> Modules and variables let the same configuration provision dev, staging, and production.</li>
                    <li className="list-group-item"><strong>Consistent:</strong> The same configuration produces repeatable, drift-free environments.</li>
                    <li className="list-group-item"><strong>Collaborative:</strong> Remote state and CI/CD let teams safely provision infrastructure together.</li>
                    <li className="list-group-item"><strong>Multi-Cloud:</strong> One workflow and language (HCL) across AWS, Azure, GCP, Kubernetes, and SaaS providers.</li>
                </ul>
            </div>
        </div>
    );
};

const TerraformArchitectureDiagram: React.FC = () => {
    return (
        <div className="card mb-4 shadow-sm">
            <div className="card-body">
                <h5>Terraform Architecture</h5>
                <p className="mb-3">
                    Engineers write configuration, commit it to version control, and Terraform CLI
                    takes it from there — computing a plan, resolving dependencies, and calling
                    providers to create or update real infrastructure.
                </p>
                <div className="text-center mb-3">
                    <img
                        src="/images/terraform.png"
                        alt="Terraform architecture diagram showing engineers writing HCL configuration through git/CI-CD into the Terraform CLI (init, plan, apply, destroy), which computes an execution plan and dependency graph, calls providers, applies policy and validation, and provisions AWS, Azure, GCP, Kubernetes and SaaS resources, backed by remote state management with locking"
                        className="img-fluid border rounded shadow-sm"
                    />
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Configuration:</strong> HCL files (<code>.tf</code>, <code>.tfvars</code>), modules, and variables describe the desired infrastructure.</li>
                    <li className="list-group-item"><strong>Version Control / CI-CD:</strong> Configuration is reviewed and applied the same way as application code.</li>
                    <li className="list-group-item"><strong>Terraform CLI:</strong> <code>init</code>, <code>plan</code>, <code>apply</code>, and <code>destroy</code> drive the workflow.</li>
                    <li className="list-group-item"><strong>Execution Plan &amp; Dependency Graph:</strong> Terraform diffs desired vs. current state and orders resource changes safely.</li>
                    <li className="list-group-item"><strong>Providers:</strong> Plugins that translate resource blocks into API calls for AWS, Azure, GCP, Kubernetes, and more.</li>
                    <li className="list-group-item"><strong>Policy / Validation:</strong> Linting, policy checks, and approval gates run before changes are applied.</li>
                    <li className="list-group-item"><strong>State Management:</strong> <code>terraform.tfstate</code> tracks what Terraform believes exists — stored in a remote backend with locking so teams don&apos;t collide.</li>
                </ul>
            </div>
        </div>
    );
};

const TerraformConcepts: React.FC = () => {
    return (
        <div className="card mb-4 shadow-sm">
            <div className="card-body">
                <h5 className="mb-1">Core Concepts</h5>
                <p className="mb-3">
                    A small, consistent vocabulary that applies the same way whether you&apos;re
                    provisioning a single S3 bucket or an entire multi-cloud platform.
                </p>
                <div className="row">
                    <div className="col-md-6">
                        <h6>Configuration &amp; Language</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><strong>Provider:</strong> Plugin that talks to a specific API (AWS, Azure, GCP, Kubernetes, GitHub...).</li>
                            <li className="list-group-item"><strong>Resource:</strong> A single infrastructure object Terraform manages, e.g. a VM or bucket.</li>
                            <li className="list-group-item"><strong>Data Source:</strong> Read-only lookup of information that already exists outside this configuration.</li>
                            <li className="list-group-item"><strong>Variable:</strong> Input parameter that makes a configuration reusable across environments.</li>
                            <li className="list-group-item"><strong>Output:</strong> Value exposed after apply — an IP, ARN, or endpoint other systems need.</li>
                            <li className="list-group-item"><strong>Module:</strong> A reusable, packaged bundle of resources with its own inputs/outputs.</li>
                        </ul>
                    </div>

                    <div className="col-md-6">
                        <h6>Workflow &amp; State</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><strong>State File:</strong> Terraform&apos;s record of what it created and its current attributes.</li>
                            <li className="list-group-item"><strong>Remote Backend:</strong> Shared state storage (S3, Terraform Cloud, Azure Blob, GCS) instead of a local file.</li>
                            <li className="list-group-item"><strong>State Locking:</strong> Prevents two applies from racing and corrupting state at once.</li>
                            <li className="list-group-item"><strong>Workspace:</strong> Named, isolated instances of the same configuration (e.g. dev/staging/prod).</li>
                            <li className="list-group-item"><strong>Execution Plan:</strong> A preview — computed by <code>plan</code> — of exactly what will change.</li>
                            <li className="list-group-item"><strong>Dependency Graph:</strong> The order resources must be created, updated, or destroyed in.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

const TerraformWorkflow: React.FC = () => {
    return (
        <section className="mb-5">
            <h3 className="fw-semibold mb-3">Core Workflow Commands</h3>
            <p>The same four commands drive every Terraform change, from a single resource to an entire platform.</p>
            <div className="row">
                {[
                    {
                        title: "terraform init",
                        desc: "Downloads providers and modules, and configures the backend. Run once per configuration, and again after adding providers."
                    },
                    {
                        title: "terraform plan",
                        desc: "Computes and displays the execution plan — what will be created, changed, or destroyed — without touching real infrastructure."
                    },
                    {
                        title: "terraform apply",
                        desc: "Executes the plan, calling providers to create or update real resources, and updates the state file."
                    },
                    {
                        title: "terraform destroy",
                        desc: "Tears down every resource this configuration manages — typically used for ephemeral or per-PR environments."
                    },
                    {
                        title: "terraform validate",
                        desc: "Checks configuration syntax and internal consistency without accessing any provider."
                    },
                    {
                        title: "terraform fmt",
                        desc: "Rewrites configuration files to the canonical HCL style — keeps diffs and reviews clean."
                    }
                ].map((c, idx) => (
                    <div className="col-md-4 mb-3" key={idx}>
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title"><code>{c.title}</code></h5>
                                <p className="card-text">{c.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

const TerraformUseCases: React.FC = () => {
    return (
        <div className="card mb-4 shadow-sm">
            <div className="card-body">
                <h5>Use Cases</h5>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Multi-Cloud Provisioning:</strong> Manage AWS, Azure, and GCP resources through one consistent workflow.</li>
                    <li className="list-group-item"><strong>Kubernetes Cluster &amp; Workload Provisioning:</strong> Create the cluster itself (EKS/AKS/GKE) and, via the Kubernetes provider, the workloads on it.</li>
                    <li className="list-group-item"><strong>Networking &amp; VPC Setup:</strong> Consistently provision VPCs, subnets, routing, and security groups across environments.</li>
                    <li className="list-group-item"><strong>IAM &amp; Security Policy as Code:</strong> Define roles, policies, and permissions in version control instead of a console.</li>
                    <li className="list-group-item"><strong>Ephemeral Per-PR Environments:</strong> Spin up a full environment for a pull request, then <code>destroy</code> it on merge.</li>
                    <li className="list-group-item"><strong>Disaster Recovery / Multi-Region:</strong> Reapply the same configuration in a second region to rebuild infrastructure quickly.</li>
                </ul>
            </div>
        </div>
    );
};

const TerraformExample: React.FC = () => {
    return (
        <div className="card mb-4 shadow-sm">
            <div className="card-body">
                <h5>Example: Provisioning an S3 Bucket</h5>
                <p className="mb-2">
                    A minimal but realistic configuration — a provider, an input variable, a
                    resource, and an output:
                </p>
                <pre className="bg-light p-3 rounded"><code>{`terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = var.aws_region
}

variable "aws_region" {
  description = "AWS region to deploy into"
  type        = string
  default     = "eu-west-1"
}

variable "environment" {
  description = "Deployment environment"
  type        = string
}

resource "aws_s3_bucket" "reports" {
  bucket = "omid-reports-\${var.environment}"

  tags = {
    Environment = var.environment
    ManagedBy   = "terraform"
  }
}

output "bucket_arn" {
  value = aws_s3_bucket.reports.arn
}`}</code></pre>
                <p className="mb-0">
                    <code>terraform init</code> downloads the AWS provider, <code>terraform plan -var=&quot;environment=staging&quot;</code>{" "}
                    shows exactly what will be created, and <code>terraform apply</code> creates
                    the bucket and prints its ARN as an output — ready to feed into the next
                    module or pipeline step.
                </p>
            </div>
        </div>
    );
};

const TerraformBestPractices: React.FC = () => {
    return (
        <div className="card mb-4 shadow-sm">
            <div className="card-body">
                <h5>Best Practices</h5>
                <ul className="list-unstyled mb-0">
                    <li className="mb-1">Always use a remote backend with state locking — never share a local <code>.tfstate</code> file between teammates.</li>
                    <li className="mb-1">Never commit <code>.tfstate</code> or <code>.tfvars</code> files containing secrets to git — state can contain sensitive values in plain text.</li>
                    <li className="mb-1">Pin provider and module versions — an unpinned <code>required_providers</code> block can silently change behavior between runs.</li>
                    <li className="mb-1">Package repeated infrastructure into modules instead of copy-pasting resource blocks across environments.</li>
                    <li className="mb-1">Separate state per environment (workspaces, or separate backends) so a mistake in dev can&apos;t touch production.</li>
                    <li className="mb-1">Run <code>terraform plan</code> in CI on every pull request so reviewers see the actual infrastructure diff, not just the code diff.</li>
                    <li className="mb-0">Use policy-as-code (Sentinel, OPA) to enforce guardrails — e.g. blocking public S3 buckets — before <code>apply</code> runs.</li>
                </ul>
            </div>
        </div>
    );
};

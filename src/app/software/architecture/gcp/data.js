const HIGH = "skill-level-high";
const MEDIUM = "skill-level-medium";
const LOW = "skill-level-low";

const computeServices = {
    title: "Compute Services",
    services: [
        {
            title: "Compute Engine",
            description: "Scalable, high-performance virtual machines.",
            level: HIGH
        },
        {
            title: "App Engine",
            description: "Platform-as-a-Service to build scalable web apps and mobile backends.",
            level: HIGH
        },
        {
            title: "Kubernetes Engine",
            description: "Managed environment to deploy, manage, and scale containerized applications using Kubernetes.",
            level: HIGH
        },
        {
            title: "Cloud Functions",
            description: "Serverless compute service that executes functions in response to events.",
            level: MEDIUM
        },
        {
            title: "Cloud Run",
            description: "Fully managed service for running stateless containers.",
            level: MEDIUM
        },
        {
            title: "Anthos",
            description: "Platform for managing applications across hybrid and multi-cloud environments.",
            level: LOW
        },
        {
            title: "VMware Engine",
            description: "Run VMware workloads natively in GCP.",
            level: LOW
        }
    ]
};

const storageServices = {
    title: "Storage Services",
    services: [
        {
            title: "Cloud Storage",
            description: "Object storage service offering high durability and availability.",
            level: HIGH
        },
        {
            title: "Persistent Disk",
            description: "Durable block storage for Google Cloud VMs.",
            level: HIGH
        },
        {
            title: "Filestore",
            description: "High-performance file storage for applications.",
            level: MEDIUM
        },
        {
            title: "Cloud SQL",
            description: "Managed relational database service for MySQL, PostgreSQL, and SQL Server.",
            level: MEDIUM
        },
        {
            title: "Cloud Spanner",
            description: "Horizontally scalable relational database with high availability.",
            level: MEDIUM
        },
        {
            title: "BigQuery",
            description: "Serverless data warehouse for big data analytics.",
            level: LOW
        },
        {
            title: "Firestore",
            description: "NoSQL document database for mobile, web, and server development.",
            level: LOW
        },
        {
            title: "Cloud Datastore",
            description: "NoSQL document database built for automatic scaling.",
            level: LOW
        },
        {
            title: "Transfer Appliance",
            description: "Physical device to transfer large amounts of data to GCP.",
            level: LOW
        }
    ]
};

const networkServices = {
    title: "Network Services",
    services: [
        {
            title: "VPC (Virtual Private Cloud)",
            description: "Create isolated virtual networks in Google Cloud.",
            level: HIGH
        },
        {
            title: "Cloud CDN",
            description: "Content delivery network to serve content globally with low latency.",
            level: HIGH
        },
        {
            title: "Cloud DNS",
            description: "Scalable, reliable, and managed DNS service.",
            level: HIGH
        },
        {
            title: "Cloud Interconnect",
            description: "Establish a dedicated network connection from on-premises to GCP.",
            level: MEDIUM
        },
        {
            title: "Cloud Load Balancing",
            description: "Distribute incoming traffic across multiple virtual machine instances.",
            level: HIGH
        },
        {
            title: "Cloud VPN",
            description: "Establish secure connections between your on-premises networks and Google Cloud.",
            level: MEDIUM
        },
        {
            title: "Traffic Director",
            description: "Service mesh for load balancing and traffic management in hybrid and multi-cloud environments.",
            level: MEDIUM
        },
        {
            title: "Private Google Access",
            description: "Access Google APIs and services using internal IP addresses.",
            level: LOW
        },
        {
            title: "Network Service Tiers",
            description: "Optimize network performance by choosing between Premium and Standard tiers.",
            level: LOW
        },
        {
            title: "Cloud NAT",
            description: "Managed network address translation (NAT) service for Google Cloud VMs.",
            level: LOW
        },
        {
            title: "Cloud Armor",
            description: "DDoS protection and web application firewall for defending against attacks.",
            level: LOW
        }
    ]
};

export const gcpServices = [computeServices, storageServices, networkServices];

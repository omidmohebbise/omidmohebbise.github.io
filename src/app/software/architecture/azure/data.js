const HIGH = "skill-level-high";
const MEDIUM = "skill-level-medium";
const LOW = "skill-level-low";

const computeServices = {
    title: "Compute Services",
    services: [
        {
            title: "Azure Virtual Machines",
            description: "Provision Windows and Linux virtual machines in seconds.",
            level: HIGH
        },
        {
            title: "Azure App Service",
            description: "Build and host web apps, mobile backends, and RESTful APIs in the programming language of your choice.",
            level: HIGH
        },
        {
            title: "Azure Kubernetes Service (AKS)",
            description: "Simplify the deployment, management, and operations of Kubernetes.",
            level: HIGH
        },
        {
            title: "Azure Functions",
            description: "A serverless compute service that allows you to run event-triggered code.",
            level: MEDIUM
        },
        {
            title: "Azure Container Instances",
            description: "Easily run containers on Azure without managing servers.",
            level: MEDIUM
        },
        {
            title: "Azure Batch",
            description: "Cloud-scale job scheduling and compute management for batch processing.",
            level: LOW
        },
        {
            title: "Azure Service Fabric",
            description: "Build and manage scalable microservices and container-based applications.",
            level: LOW
        }
    ]
};

const storageServices = {
    title: "Storage Services",
    services: [
        {
            title: "Azure Blob Storage",
            description: "Massively scalable object storage for unstructured data.",
            level: HIGH
        },
        {
            title: "Azure Disk Storage",
            description: "Persistent, high-performance disk storage for Azure virtual machines.",
            level: HIGH
        },
        {
            title: "Azure File Storage",
            description: "Fully managed file shares in the cloud, accessible via the SMB protocol.",
            level: MEDIUM
        },
        {
            title: "Azure SQL Database",
            description: "Managed relational database service based on the latest SQL Server technologies.",
            level: MEDIUM
        },
        {
            title: "Azure Cosmos DB",
            description: "Globally distributed, multi-model database service for high availability and scalability.",
            level: MEDIUM
        },
        {
            title: "Azure Archive Storage",
            description: "Cost-effective storage for rarely accessed data.",
            level: LOW
        },
        {
            title: "Azure Data Lake Storage",
            description: "Secure, scalable storage for big data analytics.",
            level: LOW
        }
    ]
};

const networkServices = {
    title: "Network Services",
    services: [
        {
            title: "Azure Virtual Network",
            description: "Create a logically isolated network in the cloud.",
            level: HIGH
        },
        {
            title: "Azure CDN",
            description: "Deliver high-bandwidth content to users globally with low latency.",
            level: HIGH
        },
        {
            title: "Azure DNS",
            description: "Host your DNS domain and manage DNS records using Azure DNS.",
            level: HIGH
        },
        {
            title: "Azure ExpressRoute",
            description: "Establish dedicated, private connections between your data center and Azure.",
            level: MEDIUM
        },
        {
            title: "Azure Load Balancer",
            description: "Deliver high availability and network performance to your applications.",
            level: HIGH
        },
        {
            title: "Azure VPN Gateway",
            description: "Securely extend your on-premises networks to the cloud with a VPN.",
            level: MEDIUM
        },
        {
            title: "Azure Traffic Manager",
            description: "Route incoming traffic for high availability and performance.",
            level: MEDIUM
        },
        {
            title: "Azure Private Link",
            description: "Securely connect to Azure services without exposing traffic to the public internet.",
            level: LOW
        },
        {
            title: "Azure Firewall",
            description: "Managed, cloud-based network security service to protect your resources.",
            level: LOW
        },
        {
            title: "Azure Front Door",
            description: "Securely deliver applications with low latency and high availability.",
            level: LOW
        }
    ]
};

export const azureServices = [computeServices, storageServices, networkServices];

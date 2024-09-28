const HIGH = "skill-level-high"
const MEDIUM = "skill-level-medium"
const LOW = "skill-level-low"


const computServices =
{
    title: "Comput Services",
    services: [

        {
            title: "EC2 (Elastic Compute Cloud)",
            description: "Secure, resizable compute capacity in the cloud.",
            level: HIGH,

        },
        {
            title: "Lambda",
            description: "A serverless compute service that runs code in response to events.",
            level: HIGH,

        },
        {
            title: "Elastic Beanstalk",
            description: "PaaS that simplifies application deployment and scaling.",
            level: MEDIUM,

        },
        {
            title: "Lightsail",
            description: "Simple cloud hosting for web apps with ease of use.",
            level: HIGH,

        },
        {
            title: "EKS (Elastic Kubernetes Service)",
            description: "Fully managed Kubernetes service.",
            level: HIGH,

        },
        {
            title: "Fargate",
            description: "Serverless compute engine for containers.",
            level: MEDIUM,

        },
        {
            title: "ECS (Elastic Container Service)",
            description: "Highly scalable container orchestration service.",
            level: HIGH,

        },
        {
            title: "Batch",
            description: "Run batch computing workloads on AWS.",
            level: LOW,

        },
        {
            title: "Outposts",
            description: "Fully managed AWS infrastructure in on-premises environments.",
            level: LOW,

        },
        {
            title: "Wavelength",
            description: "Bring AWS services to the edge of 5G networks.",
            level: LOW,

        },
        {
            title: "Snowball Edge",
            description: "Edge computing and data transfer device.",
            level: LOW,

        },
        {
            title: "App Runner",
            description: "Fully managed service to deploy containerized web apps and APIs.",
            level: HIGH,

        }


    ]

}

const storageServices = {
    title: "Storage",
    services: [
        {
            title: "S3 (Simple Storage Service)",
            description: "Scalable object storage for data, media, and backups.",
            level:    HIGH
        },
        {
            title: "EBS (Elastic Block Store)",
            description: "Persistent block storage for use with EC2.",
            level:    HIGH
        },
        {
            title: "EFS (Elastic File System)",
            description: "Managed file storage for EC2 instances, providing scalable file storage for use with Linux-based workloads.",
            level:    MEDIUM
        },
        {
            title: "Glacier",
            description: "Low-cost archival storage for infrequently accessed data.",
            level:    MEDIUM
        },
        {
            title: "FSx for Windows File Server",
            description: "Fully managed Windows file system for shared file storage in the cloud.",
            level:    MEDIUM
        },
        {
            title: "FSx for Lustre",
            description: "High-performance file system for processing large workloads.",
            level: LOW
        },
        {
            title: "Storage Gateway",
            description: "Hybrid cloud storage service enabling on-premises applications to use AWS cloud storage.",
            level: LOW
        },
        {
            title: "Backup",
            description: "Centralized backup service to automate and manage backups across AWS services.",
            level:    HIGH
        },
        {
            title: "Snowball",
            description: "Physical device to transfer large amounts of data into and out of AWS.",
            level: LOW
        },
        {
            title: "S3 Glacier Deep Archive",
            description: "The lowest-cost storage class for long-term data archiving.",
            level: LOW
        }
    ]
};

const networkServices = {
    title:"Network Services",
    services: [
        {
            title: "VPC (Virtual Private Cloud)",
            description: "Create isolated cloud resources in a virtual network.",
            level: HIGH
        },
        {
            title: "CloudFront",
            description: "Content delivery network (CDN) for fast distribution of content to end users.",
            level: HIGH
        },
        {
            title: "Route 53",
            description: "Scalable Domain Name System (DNS) web service for routing end users to applications.",
            level: HIGH
        },
        {
            title: "Direct Connect",
            description: "Establish a dedicated network connection from on-premises to AWS.",
            level: MEDIUM
        },
        {
            title: "Elastic Load Balancing (ELB)",
            description: "Automatically distributes incoming application traffic across multiple targets.",
            level: HIGH
        },
        {
            title: "Global Accelerator",
            description: "Improve the availability and performance of your applications with global traffic distribution.",
            level: MEDIUM
        },
        {
            title: "VPN (Virtual Private Network)",
            description: "Establish secure connections between on-premises networks and AWS over the internet.",
            level: MEDIUM
        },
        {
            title: "Transit Gateway",
            description: "Connect VPCs and on-premises networks through a central hub.",
            level: MEDIUM
        },
        {
            title: "PrivateLink",
            description: "Securely access services hosted on AWS in a private network without exposing data to the public internet.",
            level: LOW
        },
        {
            title: "App Mesh",
            description: "Service mesh that provides application-level networking to make it easy for services to communicate across multiple types of compute infrastructure.",
            level: LOW
        },
        {
            title: "Cloud Map",
            description: "Service discovery service that helps applications discover resources like databases, queues, and microservices.",
            level: LOW
        },
        {
            title: "Outposts Networking",
            description: "Extend AWS services, infrastructure, and operating models to virtually any data center, co-location space, or on-premises facility.",
            level: LOW
        }
    ]
};


export const awsServices = [computServices, storageServices,networkServices]



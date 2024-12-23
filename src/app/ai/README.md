# Cloud Service Comparison: AWS, Azure, GCP

This document compares the most commonly used services across **Amazon Web Services (AWS)**, **Microsoft Azure**, and **Google Cloud Platform (GCP)**. The table below shows the most similar services used in similar layers and architectures, making it easier to understand the mapping of services between the three cloud providers.

## Comparison Table

| **Layer/Category**          | **AWS**                                    | **Azure**                                | **GCP**                                  |
|-----------------------------|--------------------------------------------|------------------------------------------|------------------------------------------|
| **Compute**                 | EC2 (Elastic Compute Cloud)                | Virtual Machines (VMs)                   | Compute Engine                          |
| **Storage**                 | S3 (Simple Storage Service)                | Blob Storage                            | Cloud Storage                           |
| **Database (Relational)**   | RDS (Relational Database Service)          | Azure SQL Database                       | Cloud SQL                               |
| **Database (NoSQL)**        | DynamoDB                                   | Cosmos DB                               | Firestore                               |
| **Serverless Compute**      | Lambda                                     | Azure Functions                         | Cloud Functions                         |
| **Container Orchestration** | ECS (Elastic Container Service)            | Azure Kubernetes Service (AKS)           | Google Kubernetes Engine (GKE)           |
| **Networking (VPC)**        | VPC (Virtual Private Cloud)                | Virtual Network (VNet)                   | Virtual Private Cloud (VPC)             |
| **Load Balancer**           | ELB (Elastic Load Balancer)                | Azure Load Balancer                      | Cloud Load Balancing                     |
| **Identity & Access Mgmt**  | IAM (Identity and Access Management)       | Azure Active Directory (AAD)             | Identity and Access Management (IAM)     |
| **Monitoring & Logging**    | CloudWatch                                 | Azure Monitor                            | Operations Suite (formerly Stackdriver)  |
| **Machine Learning**        | SageMaker                                  | Azure Machine Learning                   | AI Platform                              |
| **Content Delivery Network**| CloudFront                                 | Azure CDN                                | Cloud CDN                                |
| **Big Data**                | EMR (Elastic MapReduce)                    | Azure HDInsight                          | Dataproc                                 |
| **Data Warehouse**          | Redshift                                  | Azure Synapse Analytics                  | BigQuery                                 |

## Overview of Services

- **Compute**: These services are responsible for provisioning and managing virtual machines or containers to run applications. They enable scalable compute resources on-demand.
  
- **Storage**: These services offer scalable, reliable, and low-latency storage solutions for unstructured data, such as media files, backups, and logs.
  
- **Databases**: Both relational (RDS, SQL Database) and NoSQL (DynamoDB, Cosmos DB) services provide managed database solutions for various use cases.

- **Serverless**: These services allow developers to run code in response to events without provisioning or managing servers.

- **Container Orchestration**: Services for managing and orchestrating containers in a distributed environment.

- **Networking**: VPC, VNet, and VPC services enable private networks, subnets, and secure communication between cloud resources.

- **Load Balancer**: These services distribute incoming traffic across multiple instances to ensure high availability and reliability.

- **Identity & Access Management (IAM)**: These services help manage access to resources, ensuring secure authentication and authorization.

- **Monitoring & Logging**: These services provide insights into the performance and health of cloud resources through metrics, logs, and alerts.

- **Machine Learning**: Managed platforms for building, training, and deploying machine learning models at scale.

- **Content Delivery Network (CDN)**: These services cache and deliver content (such as web pages, videos, and images) to end users with low latency.

- **Big Data**: These services help process large datasets, typically for analytics or machine learning workloads.

- **Data Warehouse**: These managed services are designed for large-scale data analytics and business intelligence tasks.

## Conclusion

The cloud providers AWS, Azure, and GCP offer very similar services across various layers and architectures, though they often have different names and specific implementations. Understanding these mappings helps cloud architects and developers navigate across platforms and make informed decisions based on the service offerings of each provider.

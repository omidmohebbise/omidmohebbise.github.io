


const CloudPage = () => {

  return (<div>
    <div className="container my-5">
      <h1 className="text-center mb-4">Cloud Service: AWS, Azure, GCP</h1>
      <p className="text-center">
        This document shows the most commonly used services across
        <strong> Amazon Web Services (AWS)</strong>, <strong>Microsoft Azure</strong>, and
        <strong> Google Cloud Platform (GCP)</strong>.
      </p>
      <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th scope="col">Layer/Category</th>
              <th scope="col" >AWS</th>
              <th scope="col">Azure</th>
              <th scope="col">GCP</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Compute</strong></td>
              <td className="text-success">EC2 (Elastic Compute Cloud)</td>
              <td>Virtual Machines (VMs)</td>
              <td>Compute Engine</td>
            </tr>
            <tr>
              <td><strong>Storage</strong></td>
              <td className="text-success">S3 (Simple Storage Service)</td>
              <td>Blob Storage</td>
              <td>Cloud Storage</td>
            </tr>
            <tr>
              <td><strong>Database (Relational)</strong></td>
              <td className="text-success">RDS (Relational Database Service)</td>
              <td>Azure SQL Database</td>
              <td>Cloud SQL</td>
            </tr>
            <tr>
              <td><strong>Database (NoSQL)</strong></td>
              <td className="text-success">DynamoDB</td>
              <td>Cosmos DB</td>
              <td>Firestore</td>
            </tr>
            <tr>
              <td><strong>Serverless Compute</strong></td>
              <td className="text-success">Lambda</td>
              <td>Azure Functions</td>
              <td>Cloud Functions</td>
            </tr>
            <tr>
              <td><strong>Container Orchestration</strong></td>
              <td className="text-success">ECS (Elastic Container Service)</td>
              <td>Azure Kubernetes Service (AKS)</td>
              <td>Google Kubernetes Engine (GKE)</td>
            </tr>
            <tr>
              <td><strong>Networking (VPC)</strong></td>
              <td className="text-success">VPC (Virtual Private Cloud)</td>
              <td>Virtual Network (VNet)</td>
              <td>Virtual Private Cloud (VPC)</td>
            </tr>
            <tr>
              <td><strong>Load Balancer</strong></td>
              <td className="text-success">ELB (Elastic Load Balancer)</td>
              <td>Azure Load Balancer</td>
              <td>Cloud Load Balancing</td>
            </tr>
            <tr>
              <td><strong>Identity & Access Management</strong></td>
              <td className="text-success">IAM (Identity and Access Management)</td>
              <td>Azure Active Directory (AAD)</td>
              <td>Identity and Access Management (IAM)</td>
            </tr>
            <tr>
              <td><strong>Monitoring & Logging</strong></td>
              <td className="text-success">CloudWatch</td>
              <td>Azure Monitor</td>
              <td>Operations Suite (formerly Stackdriver)</td>
            </tr>
            <tr>
              <td><strong>Machine Learning</strong></td>
              <td>SageMaker</td>
              <td>Azure Machine Learning</td>
              <td>AI Platform</td>
            </tr>
            <tr>
              <td><strong>Content Delivery Network</strong></td>
              <td className="text-success">CloudFront</td>
              <td>Azure CDN</td>
              <td>Cloud CDN</td>
            </tr>
            <tr>
              <td><strong>Big Data</strong></td>
              <td>EMR (Elastic MapReduce)</td>
              <td>Azure HDInsight</td>
              <td>Dataproc</td>
            </tr>
            <tr>
              <td><strong>Data Warehouse</strong></td>
              <td>Redshift</td>
              <td>Azure Synapse Analytics</td>
              <td>BigQuery</td>
            </tr>
            <tr>
              <td><strong>Object Storage (Archive)</strong></td>
              <td>Glacier</td>
              <td>Azure Blob Storage (Archive)</td>
              <td>Coldline</td>
            </tr>
            <tr>
              <td><strong>Event Streaming</strong></td>
              <td>Kinesis</td>
              <td>Event Grid</td>
              <td>Pub/Sub</td>
            </tr>
            <tr>
              <td><strong>Serverless Database</strong></td>
              <td>Aurora Serverless</td>
              <td>Azure SQL Database Serverless</td>
              <td>Cloud SQL (Serverless)</td>
            </tr>
            <tr>
              <td><strong>Distributed Cache</strong></td>
              <td>ElastiCache</td>
              <td>Azure Cache for Redis</td>
              <td>Cloud Memorystore</td>
            </tr>
            <tr>
              <td><strong>Data Lakes</strong></td>
              <td>Lake Formation</td>
              <td>Azure Data Lake Storage</td>
              <td>Cloud Storage for Data Lakes</td>
            </tr>
            <tr>
              <td><strong>DNS Service</strong></td>
              <td className="text-success">Route 53</td>
              <td>Azure DNS</td>
              <td>Cloud DNS</td>
            </tr>
            <tr>
              <td><strong>API Gateway</strong></td>
              <td className="text-success">API Gateway</td>
              <td>Azure API Management</td>
              <td>API Gateway</td>
            </tr>
            <tr>
              <td><strong>Virtual Desktop Infrastructure</strong></td>
              <td>WorkSpaces</td>
              <td>Azure Virtual Desktop</td>
              <td>Virtual Desktops</td>
            </tr>
            <tr>
              <td><strong>Blockchain</strong></td>
              <td>Amazon Managed Blockchain</td>
              <td>Azure Blockchain Service</td>
              <td>Cloud Blockchain</td>
            </tr>
            <tr>
              <td><strong>IoT</strong></td>
              <td>AWS IoT Core</td>
              <td>Azure IoT Hub</td>
              <td>Cloud IoT Core</td>
            </tr>
            <tr>
              <td><strong>Artificial Intelligence (AI)</strong></td>
              <td>AWS AI Services (e.g., Polly, Rekognition)</td>
              <td>Azure AI Services (e.g., Cognitive Services)</td>
              <td>Google AI (e.g., Vision AI, Dialogflow)</td>
            </tr>
            <tr>
              <td><strong>Migration</strong></td>
              <td>AWS Migration Hub</td>
              <td>Azure Migrate</td>
              <td>Google Cloud Migration</td>
            </tr>
            <tr>
              <td><strong>Developer Tools</strong></td>
              <td>CodePipeline</td>
              <td>Azure DevOps</td>
              <td>Cloud Build</td>
            </tr>
            <tr>
              <td><strong>Edge Computing</strong></td>
              <td>AWS Wavelength</td>
              <td>Azure Edge Zones</td>
              <td>Anthos</td>
            </tr>
            <tr>
              <td><strong>App Integration</strong></td>
              <td>Step Functions</td>
              <td>Azure Logic Apps</td>
              <td>Cloud Composer</td>
            </tr>
            <tr>
              <td><strong>Backup & Recovery</strong></td>
              <td>AWS Backup</td>
              <td>Azure Backup</td>
              <td>Cloud Storage for Backup</td>
            </tr>
            <tr>
              <td><strong>Security</strong></td>
              <td>AWS Security Hub</td>
              <td>Azure Security Center</td>
              <td>Cloud Security Command Center</td>
            </tr>
            <tr>
              <td><strong>Content Management</strong></td>
              <td className="text-success" >Amazon S3 + CloudFront</td>
              <td>Azure Blob Storage + CDN</td>
              <td>Cloud Storage + Cloud CDN</td>
            </tr>
          </tbody>
        </table>
    </div>
  </div>
  );
}


export default CloudPage;
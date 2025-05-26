import React from "react";

const databaseTypes = [
  {
    title: "Blockchain Database",
    features: [
      "Ensures data integrity and security",
      "Supports decentralized applications",
      "Ideal for transactional data",
    ],
    examples: "BigchainDB, Chainbase",
  },
  {
    title: "SQL Database",
    features: [
      "Structured data storage and retrieval",
      "Supports relational properties for transactions",
      "Uses relational data model",
    ],
    examples: "MySQL, Microsoft SQL Server",
  },
  {
    title: "Columnar Database",
    features: [
      "Optimized for reading/writing columns",
      "Efficient in analytical and OLAP systems",
      "Faster access",
    ],
    examples: "Amazon Redshift, Apache Cassandra",
  },
  {
    title: "NewSQL Database",
    features: [
      "Combines SQL reliability with NoSQL scalability",
      "Supports ACID transactions at scale",
      "Offers real-time analytics",
    ],
    examples: "Google Spanner, CockroachDB",
  },
  {
    title: "Spatial Database",
    features: [
      "Stores and queries spatial data types",
      "Supports location-based services and GIS",
      "Enables spatial indexing and querying",
      "Used in mapping and navigation",
    ],
    examples: "PostGIS, GeoSpatial",
  },
  {
    title: "Graph Database",
    features: [
      "Stores data in nodes and edges",
      "Optimized for complex relational queries",
      "Supports network and graph analyses",
      "Ideal for recommendation systems",
    ],
    examples: "Neo4j, Microsoft Azure Cosmos DB",
  },
  {
    title: "Object-Oriented Database",
    features: [
      "Stores data as objects",
      "Supports complex data types",
      "Used in engineering and CAD systems",
    ],
    examples: "db4o, ObjectDB",
  },
  {
    title: "Document Database",
    features: [
      "Stores data in document-based format",
      "Schema-less, flexible data types",
      "Ideal for content management systems",
      "Supports JSON, XML",
    ],
    examples: "MongoDB, Couchbase",
  },
  {
    title: "Key-Value Database",
    features: [
      "Stores data as key-value pairs",
      "Fast access via key lookup",
      "Suitable for caching and session storage",
    ],
    examples: "Redis, Amazon DynamoDB",
  },
  {
    title: "Time-Series Database",
    features: [
      "Supports metrics and event tracking",
      "Ideal for IoT and monitoring applications",
      "Efficient in data aggregation over time",
    ],
    examples: "InfluxDB, TimescaleDB",
  },
  {
    title: "Vector Database",
    features: [
      "Optimized for vector data storage",
      "Supports AI and machine learning models",
      "Enables fast similarity search",
      "Used in image and voice recognition",
    ],
    examples: "Milvus, Pinecone",
  },
  {
    title: "In-Memory Database",
    features: [
      "Stores data in RAM for speed",
      "Offers ultra-fast data processing",
      "Suitable for real-time analytics",
      "Volatile or persistent storage options",
    ],
    examples: "SAP HANA, MemSQL",
  },
];

const DatabaseTypes = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Types of Databases</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {databaseTypes.map((db, index) => (
          <div className="col" key={index}>
            <div className="p-3 border rounded bg-light h-100">
              <h5>{db.title}</h5>
              <ul>
                {db.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <strong>Examples:</strong> {db.examples}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DatabaseTypes;

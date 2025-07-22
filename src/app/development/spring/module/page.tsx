"use client"
import React from 'react';
import SpringNav from '@/components/spring/SpringNav';

const SpringModule = () => (
  <>
    <SpringNav />
    <div style={{ padding: '2rem' }}>
      <h2>Spring Module</h2>
      <section>
        <h4>Spring Boot</h4>
        <ul>
          <li>Microservice framework</li>
          <li>Auto-configuration for Spring applications</li>
          <li>Embedded web servers (Tomcat, Jetty, Undertow)</li>
          <li>Production-ready features (Actuator)</li>
          <li>Spring Initializr for project scaffolding</li>
        </ul>
      </section>
      <section>
        <h4>Spring Cloud</h4>
        <ul>
          <li>Microservice architecture support</li>
          <li>Service discovery (Eureka, Consul, or Zookeeper)</li>
          <li>Configuration management</li>
          <li>API Gateway (Spring Cloud Gateway)</li>
          <li>Resilience patterns (Hystrix, Resilience4j)</li>
          <li>Distributed tracing (Sleuth, Zipkin)</li>
        </ul>
      </section>
      <section>
        <h4>Spring Data</h4>
        <ul>
          <li>Repositories for data access</li>
          <li>Support for relational databases (JPA, JDBC)</li>
          <li>Support for NoSQL databases (MongoDB, Cassandra, Redis)</li>
          <li>Custom queries with QueryDSL or JPQL</li>
          <li>Auditing and transaction management</li>
        </ul>
      </section>
      <section>
        <h4>Spring Integration</h4>
        <ul>
          <li>Enterprise Integration Patterns (EIP)</li>
          <li>Message channels and routing</li>
          <li>Adapters for external systems (JMS, Kafka, HTTP, etc.)</li>
          <li>Flow orchestration and transformation</li>
          <li>Supports event-driven architectures</li>
        </ul>
      </section>
      <section>
        <h4>Spring Security</h4>
        <ul>
          <li>Authentication and authorization</li>
          <li>Support for OAuth2 and OpenID Connect</li>
          <li>Custom security configurations</li>
          <li>Integration with Spring MVC and WebFlux</li>
          <li>Advanced features like CSRF protection</li>
        </ul>
      </section>
      <section>
        <h4>Spring Session</h4>
        <ul>
          <li>Centralized session management</li>
          <li>Support for Redis, JDBC, and Hazelcast</li>
          <li>Clustered session storage</li>
          <li>Transparent HTTP session handling</li>
          <li>Improves scalability for web applications</li>
        </ul>
      </section>
      <section>
        <h4>Spring WebFlux</h4>
        <ul>
          <li>Reactive programming model</li>
          <li>Non-blocking I/O</li>
          <li>Supports reactive streams (Project Reactor)</li>
          <li>Asynchronous processing for high concurrency</li>
          <li>Functional and annotation-based programming models</li>
        </ul>
      </section>
    </div>
  </>
);

export default SpringModule; 
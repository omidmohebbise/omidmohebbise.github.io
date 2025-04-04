"use client"
import React, { useState } from 'react';
import './style.scss'

const SpringProducts = () => {
    const[activeTab, setActiveTab]= useState(0) 
  return (
    <div className="d-flex align-items-start">
      <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
        <button className={"nav-link" + (activeTab===0 ? " active " : " ") } onClick={()=>setActiveTab(0)} id="v-pills-boot-tab" data-bs-toggle="pill" data-bs-target="#v-pills-boot" type="button" role="tab" aria-controls="v-pills-boot" aria-selected="false">Spring Boot</button>
        <button className={"nav-link" + (activeTab===1 ? " active " : " ") } onClick={()=>setActiveTab(1)} id="v-pills-cloud-tab" data-bs-toggle="pill" data-bs-target="#v-pills-cloud" type="button" role="tab" aria-controls="v-pills-cloud" aria-selected="false">Spring Cloud</button>
        <button className={"nav-link" + (activeTab===2 ? " active " : " ") } onClick={()=>setActiveTab(2)} id="v-pills-data-tab" data-bs-toggle="pill" data-bs-target="#v-pills-data" type="button" role="tab" aria-controls="v-pills-data" aria-selected="false">Spring Data</button>
        <button className={"nav-link" + (activeTab===3 ? " active " : " ") } onClick={()=>setActiveTab(3)} id="v-pills-integration-tab" data-bs-toggle="pill" data-bs-target="#v-pills-integration" type="button" role="tab" aria-controls="v-pills-integration" aria-selected="false">Spring Integration</button>
        <button className={"nav-link" + (activeTab===4 ? " active " : " ") } onClick={()=>setActiveTab(4)} id="v-pills-security-tab" data-bs-toggle="pill" data-bs-target="#v-pills-security" type="button" role="tab" aria-controls="v-pills-security" aria-selected="false">Spring Security</button>
        <button className={"nav-link" + (activeTab===5 ? " active " : " ") } onClick={()=>setActiveTab(5)} id="v-pills-session-tab" data-bs-toggle="pill" data-bs-target="#v-pills-session" type="button" role="tab" aria-controls="v-pills-session" aria-selected="false">Spring Session</button>
        <button className={"nav-link" + (activeTab===6 ? " active " : " ") } onClick={()=>setActiveTab(6)} id="v-pills-webflux-tab" data-bs-toggle="pill" data-bs-target="#v-pills-webflux" type="button" role="tab" aria-controls="v-pills-webflux" aria-selected="false">Spring WebFlux</button>
      </div>
      <div className="tab-content" id="v-pills-tabContent">
        <div className={"tab-pane fade show " + (activeTab===0 ? " active " : " ")} id="v-pills-boot" role="tabpanel" aria-labelledby="v-pills-boot-tab">
          <h4>Spring Boot</h4>
          <ul>
            <li>Microservice framework</li>
            <li>Auto-configuration for Spring applications</li>
            <li>Embedded web servers (Tomcat, Jetty, Undertow)</li>
            <li>Production-ready features (Actuator)</li>
            <li>Spring Initializr for project scaffolding</li>
          </ul>
        </div>
        <div className= {"tab-pane fade show " + (activeTab===1 ? " active " : " ")} id="v-pills-cloud" role="tabpanel" aria-labelledby="v-pills-cloud-tab">
          <h4>Spring Cloud</h4>
          <ul>
            <li>Microservice architecture support</li>
            <li>Service discovery (Eureka, Consul, or Zookeeper)</li>
            <li>Configuration management</li>
            <li>API Gateway (Spring Cloud Gateway)</li>
            <li>Resilience patterns (Hystrix, Resilience4j)</li>
            <li>Distributed tracing (Sleuth, Zipkin)</li>
          </ul>
        </div>
        <div className= {"tab-pane fade show " + (activeTab===2 ? " active " : " ")} id="v-pills-data" role="tabpanel" aria-labelledby="v-pills-data-tab">
          <h4>Spring Data</h4>
          <ul>
            <li>Repositories for data access</li>
            <li>Support for relational databases (JPA, JDBC)</li>
            <li>Support for NoSQL databases (MongoDB, Cassandra, Redis)</li>
            <li>Custom queries with QueryDSL or JPQL</li>
            <li>Auditing and transaction management</li>
          </ul>
        </div>
        <div className= {"tab-pane fade show " + (activeTab===3 ? " active " : " ")} id="v-pills-integration" role="tabpanel" aria-labelledby="v-pills-integration-tab">
          <h4>Spring Integration</h4>
          <ul >
            <li>Enterprise Integration Patterns (EIP)</li>
            <li>Message channels and routing</li>
            <li>Adapters for external systems (JMS, Kafka, HTTP, etc.)</li>
            <li>Flow orchestration and transformation</li>
            <li>Supports event-driven architectures</li>
          </ul>
        </div>
        <div className= {"tab-pane fade show " + (activeTab===4 ? " active " : " ")} id="v-pills-security" role="tabpanel" aria-labelledby="v-pills-security-tab">
          <h4>Spring Security</h4>
          <ul>
            <li>Authentication and authorization</li>
            <li>Support for OAuth2 and OpenID Connect</li>
            <li>Custom security configurations</li>
            <li>Integration with Spring MVC and WebFlux</li>
            <li>Advanced features like CSRF protection</li>
          </ul>
        </div>
        <div className= {"tab-pane fade show " + (activeTab===5 ? " active " : " ")} id="v-pills-session" role="tabpanel" aria-labelledby="v-pills-session-tab">
          <h4>Spring Session</h4>
          <ul>
            <li>Centralized session management</li>
            <li>Support for Redis, JDBC, and Hazelcast</li>
            <li>Clustered session storage</li>
            <li>Transparent HTTP session handling</li>
            <li>Improves scalability for web applications</li>
          </ul>
        </div>
        <div className= {"tab-pane fade show " + (activeTab===6 ? " active " : " ")} id="v-pills-webflux" role="tabpanel" aria-labelledby="v-pills-webflux-tab">
          <h4>Spring WebFlux</h4>
          <ul>
            <li>Reactive programming model</li>
            <li>Non-blocking I/O</li>
            <li>Supports reactive streams (Project Reactor)</li>
            <li>Asynchronous processing for high concurrency</li>
            <li>Functional and annotation-based programming models</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SpringProducts;

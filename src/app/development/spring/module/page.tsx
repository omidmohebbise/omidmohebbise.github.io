"use client"
import React from 'react';
import SpringNav from '@/components/spring/SpringNav';
import { Accordion, Alert, Badge, Card, Col, Container, Row, Table } from 'react-bootstrap';

type SpringModuleInfo = {
  title: string;
  icon: string;
  tagline: string;
  badges: string[];
  useCases: string[];
  keyPieces: string[];
  starterHints: string[];
};

const springModules: SpringModuleInfo[] = [
  {
    title: 'Spring Boot',
    icon: 'bi-rocket-takeoff',
    tagline: 'Opinionated, production-ready setup for Spring applications.',
    badges: ['Auto-configuration', 'Starters', 'Actuator'],
    useCases: [
      'Rapidly bootstrap a new service or monolith',
      'Expose REST APIs with sensible defaults',
      'Ship with health checks and metrics',
    ],
    keyPieces: ['Auto-config', 'Actuator endpoints', 'Externalized configuration', 'Embedded server (MVC)'],
    starterHints: ['spring-boot-starter-web', 'spring-boot-starter-actuator'],
  },
  {
    title: 'Spring Cloud',
    icon: 'bi-cloud',
    tagline: 'Patterns and tools for building distributed systems and microservices.',
    badges: ['Config', 'Gateway', 'Resilience'],
    useCases: [
      'Centralize config across services',
      'Build an API gateway and edge routing',
      'Add resiliency patterns around remote calls',
    ],
    keyPieces: ['Config Server/Client', 'Service discovery', 'Gateway routing', 'Circuit breaking'],
    starterHints: ['spring-cloud-starter-gateway', 'spring-cloud-starter-config'],
  },
  {
    title: 'Spring Data',
    icon: 'bi-database',
    tagline: 'Repository abstraction for consistent data access across stores.',
    badges: ['Repositories', 'JPA/JDBC', 'NoSQL'],
    useCases: [
      'Implement CRUD quickly with repositories',
      'Standardize data access across teams',
      'Support multiple backends (SQL + NoSQL)',
    ],
    keyPieces: ['Repository interfaces', 'Query methods', 'Pagination/sorting', 'Transactions integration'],
    starterHints: ['spring-boot-starter-data-jpa', 'spring-boot-starter-data-mongodb'],
  },
  {
    title: 'Spring Integration',
    icon: 'bi-diagram-3',
    tagline: 'Enterprise Integration Patterns (EIP) for messaging and orchestration.',
    badges: ['EIP', 'Messaging', 'Adapters'],
    useCases: [
      'Build integration flows with channels and routers',
      'Connect to external systems with adapters',
      'Implement event-driven processing pipelines',
    ],
    keyPieces: ['Channels', 'Message handlers', 'Transformers/filters', 'Inbound/outbound adapters'],
    starterHints: ['spring-boot-starter-integration'],
  },
  {
    title: 'Spring Security',
    icon: 'bi-shield-lock',
    tagline: 'Authentication, authorization, and secure-by-default web/service security.',
    badges: ['OAuth2/OIDC', 'JWT', 'Method security'],
    useCases: [
      'Secure REST APIs and UIs',
      'Add OAuth2 login and resource server support',
      'Enforce authorization at method level',
    ],
    keyPieces: ['Security filter chain', 'Authentication providers', 'Authorization rules', 'CSRF/CORS'],
    starterHints: ['spring-boot-starter-security', 'spring-boot-starter-oauth2-resource-server'],
  },
  {
    title: 'Spring Session',
    icon: 'bi-collection',
    tagline: 'Externalize session state for scalable, clustered web applications.',
    badges: ['Redis', 'JDBC', 'Clustered'],
    useCases: [
      'Share HTTP session across multiple instances',
      'Avoid sticky sessions behind load balancers',
      'Move session storage out of app memory',
    ],
    keyPieces: ['Session repository', 'Session serialization', 'Store-backed sessions', 'TTL management'],
    starterHints: ['spring-session-data-redis'],
  },
  {
    title: 'Spring WebFlux',
    icon: 'bi-lightning-charge',
    tagline: 'Reactive, non-blocking web stack built on Project Reactor.',
    badges: ['Reactive', 'Non-blocking', 'High concurrency'],
    useCases: [
      'Handle many concurrent connections efficiently',
      'Stream data with backpressure',
      'Build reactive APIs end-to-end',
    ],
    keyPieces: ['Reactor (Mono/Flux)', 'WebClient', 'Functional or annotation routing', 'Netty runtime'],
    starterHints: ['spring-boot-starter-webflux'],
  },
];

const SpringModule = () => {
  return (
    <>
      <SpringNav />
      <Container className="py-4">
        <div className="d-flex align-items-start justify-content-between flex-wrap gap-2 mb-3">
          <div>
            <h2 className="mb-1 text-primary">Spring Modules</h2>
            <p className="text-secondary mb-0">
              A practical overview of the Spring ecosystem: what each module is for, when to use it, and the
              building blocks you’ll typically see in real projects.
            </p>
          </div>
          <div className="text-secondary small">
            <div className="d-flex align-items-center gap-2">
              <i className="bi bi-info-circle"></i>
              <span>Tip: start with Boot, then add modules as needed.</span>
            </div>
          </div>
        </div>

        <Alert variant="light" className="border">
          <div className="d-flex align-items-start gap-3">
            <i className="bi bi-compass fs-4 text-success"></i>
            <div>
              <div className="fw-semibold">How to choose modules</div>
              <div className="text-secondary">
                Prefer the smallest set that solves your problem. Each extra module adds configuration surface area,
                runtime dependencies, and operational concerns.
              </div>
            </div>
          </div>
        </Alert>

        <Row className="g-4">
          {springModules.map((mod) => (
            <Col key={mod.title} md={6} lg={4}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Body>
                  <div className="d-flex align-items-start gap-3 mb-2">
                    <div>
                      <i className={`bi ${mod.icon} fs-2 text-success`}></i>
                    </div>
                    <div>
                      <Card.Title className="fw-bold mb-1">{mod.title}</Card.Title>
                      <div className="text-secondary">{mod.tagline}</div>
                    </div>
                  </div>

                  <div className="d-flex flex-wrap gap-2 mt-3">
                    {mod.badges.map((b) => (
                      <Badge key={b} bg="secondary" className="fw-normal">
                        {b}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-3">
                    <div className="fw-semibold">Common use cases</div>
                    <ul className="mt-2 mb-0 ps-3">
                      {mod.useCases.map((item) => (
                        <li key={item} className="text-secondary mb-1">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="mt-5">
          <h4 className="mb-3">Quick Reference</h4>
          <Card className="border-0 shadow-sm">
            <Card.Body>
              <Table responsive className="mb-0 align-middle">
                <thead>
                  <tr>
                    <th style={{ width: '22%' }}>Module</th>
                    <th style={{ width: '38%' }}>What it solves</th>
                    <th style={{ width: '40%' }}>You’ll often see</th>
                  </tr>
                </thead>
                <tbody>
                  {springModules.map((mod) => (
                    <tr key={mod.title}>
                      <td className="fw-semibold">
                        <i className={`bi ${mod.icon} me-2 text-success`}></i>
                        {mod.title}
                      </td>
                      <td className="text-secondary">{mod.tagline}</td>
                      <td className="text-secondary">
                        {mod.keyPieces.slice(0, 3).join(' • ')}
                        {mod.keyPieces.length > 3 ? ' • …' : ''}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </div>

        <div className="mt-5">
          <h4 className="mb-3">More Details</h4>
          <Accordion>
            {springModules.map((mod, idx) => (
              <Accordion.Item eventKey={String(idx)} key={mod.title}>
                <Accordion.Header>
                  <span className="fw-semibold">
                    <i className={`bi ${mod.icon} me-2 text-success`}></i>
                    {mod.title}
                  </span>
                </Accordion.Header>
                <Accordion.Body>
                  <Row className="g-3">
                    <Col md={6}>
                      <div className="fw-semibold mb-2">Key building blocks</div>
                      <ul className="ps-3 mb-0">
                        {mod.keyPieces.map((k) => (
                          <li key={k} className="text-secondary mb-1">
                            {k}
                          </li>
                        ))}
                      </ul>
                    </Col>
                    <Col md={6}>
                      <div className="fw-semibold mb-2">Starter hints</div>
                      <ul className="ps-3 mb-0">
                        {mod.starterHints.map((s) => (
                          <li key={s} className="text-secondary mb-1">
                            <span className="font-monospace">{s}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-3 fw-semibold mb-2">When to avoid overusing</div>
                      <div className="text-secondary">
                        If the team is still aligning on architecture, start simple and add this module only when the
                        problem is clear and recurring.
                      </div>
                    </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </Container>
    </>
  );
};

export default SpringModule; 
"use client"
import React from 'react';
import './style.scss'
import SpringNav from '@/components/spring/SpringNav';

const springMainComponents = [
  {
    title: 'Core Container',
    desc: 'Provides IoC (Inversion of Control) and Dependency Injection, the foundation of Spring.',
    icon: 'bi-diagram-3',
    details: [
      'BeanFactory and ApplicationContext for managing beans',
      'Dependency injection via XML, annotations, or Java config',
      'Resource loading and environment abstraction',
    ],
  },
  {
    title: 'Spring AOP',
    desc: 'Aspect-Oriented Programming for cross-cutting concerns like logging and security.',
    icon: 'bi-shuffle',
    details: [
      'Declarative method interception and advice',
      'Supports @AspectJ and XML-based configuration',
      'Integrates with Spring Security and Transactions',
    ],
  },
  {
    title: 'Data Access/Integration',
    desc: 'Simplifies database, ORM, transaction, and messaging integration.',
    icon: 'bi-database',
    details: [
      'JDBC, JPA, Hibernate, MyBatis, and more',
      'Declarative transaction management',
      'Messaging support (JMS, AMQP)',
    ],
  },
  {
    title: 'Web',
    desc: 'Spring MVC and WebFlux for building web and reactive applications.',
    icon: 'bi-globe',
    details: [
      'Spring MVC for traditional servlet-based apps',
      'Spring WebFlux for reactive, non-blocking apps',
      'REST API support, validation, and view resolution',
    ],
  },
  {
    title: 'Security',
    desc: 'Comprehensive authentication, authorization, and security features.',
    icon: 'bi-shield-lock',
    details: [
      'Authentication and authorization (RBAC, OAuth2, JWT)',
      'CSRF, CORS, and session management',
      'Integrates with web, method, and domain security',
    ],
  },
  {
    title: 'Testing',
    desc: 'Support for unit and integration testing of Spring components.',
    icon: 'bi-beaker',
    details: [
      'Spring TestContext for integration tests',
      'Mock objects and utilities for web and data layers',
      'JUnit and TestNG integration',
    ],
  },
];

const SpringMain = () => {
  return (
    <>
      <SpringNav />
      <div className="container py-4">
        <h2 className="mb-4 text-primary">Spring Framework</h2>
        <div className="row g-4">
          {springMainComponents.map((comp) => (
            <div className="col-md-6 col-lg-4" key={comp.title}>
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body d-flex flex-column align-items-start">
                  <div className="mb-3">
                    <i className={`bi ${comp.icon} fs-2 text-success`}></i>
                  </div>
                  <h5 className="card-title fw-bold">{comp.title}</h5>
                  <p className="card-text text-secondary">{comp.desc}</p>
                  <ul className="list-unstyled ms-2 mt-2">
                    {comp.details.map((d) => (
                      <li key={d} className="mb-1">
                        <i className="bi bi-dot text-primary me-1"></i>{d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SpringMain;

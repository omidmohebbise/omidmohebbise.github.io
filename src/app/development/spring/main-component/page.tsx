"use client"
import React from 'react';
import Image from 'next/image';
import SpringNav from '@/components/spring/SpringNav';

const SpringMainComponent = () => (
  <>
    <SpringNav />
    <div className="container py-4">
      <h2 className="mb-3">Spring Framework Architecture (Overview)</h2>

      <div className="row g-3">
        <div className="col-12 col-md-6">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="h5 card-title">1. Core Container</h3>
              <p className="mb-2">This is the heart.</p>
              <p className="mb-2"><strong>Core / Beans / Context / SpEL</strong></p>
              <ul className="mb-0">
                <li>Handles IoC (Inversion of Control) and Dependency Injection</li>
                <li>Creates, wires, and manages your objects (beans)</li>
                <li>If Spring feels “magical,” it’s usually this part doing the quiet work.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="h5 card-title">2. AOP (Aspect-Oriented Programming)</h3>
              <p className="mb-2">Cross-cutting concerns live here.</p>
              <ul className="mb-2">
                <li>Logging</li>
                <li>Security</li>
                <li>Transactions</li>
              </ul>
              <p className="mb-0">Instead of scattering this logic everywhere, AOP wraps it around where needed.</p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="h5 card-title">3. Data Access &amp; Integration</h3>
              <p className="mb-2">The persistence side of things.</p>
              <ul className="mb-2">
                <li><strong>JDBC</strong> – simpler database access</li>
                <li><strong>ORM</strong> – integrates with Hibernate, JPA, etc.</li>
                <li><strong>Transactions</strong> – consistent transaction management</li>
                <li><strong>JMS</strong> – messaging support</li>
              </ul>
              <p className="mb-0">This layer’s job: make data access boring and predictable.</p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="h5 card-title">4. Web Layer</h3>
              <p className="mb-2">For HTTP-based applications.</p>
              <ul className="mb-2">
                <li><strong>Spring MVC</strong> – classic web &amp; REST APIs</li>
                <li><strong>Spring WebFlux</strong> – reactive, non-blocking web apps</li>
              </ul>
              <p className="mb-0">Controllers, request mapping, validation—this is where it all happens.</p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="h5 card-title">5. Security</h3>
              <p className="mb-2">Handled by Spring Security.</p>
              <ul className="mb-0">
                <li>Authentication &amp; authorization</li>
                <li>OAuth2, JWT, session management</li>
                <li>Method-level security</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="h5 card-title">6. Testing</h3>
              <p className="mb-2">Support for testing Spring apps cleanly.</p>
              <ul className="mb-0">
                <li>Integration testing</li>
                <li>Mocking beans</li>
                <li>JUnit / TestNG support</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h3 className="h5 card-title">7. Spring Boot (Worth Mentioning)</h3>
              <p className="mb-2">Not a core module, but impossible to ignore.</p>
              <div className="row">
                <div className="col-12 col-md-6">
                  <ul className="mb-0">
                    <li>Auto-configuration</li>
                    <li>Embedded servers</li>
                    <li>Opinionated defaults</li>
                  </ul>
                </div>
                <div className="col-12 col-md-6">
                  <p className="mb-0">Boot removes friction; the framework underneath is still Spring.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center mt-4">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div className="card">
            <div className="card-body">
              <Image
                src="/images/spring-overview.png"
                alt="Spring Framework architecture overview"
                width={1200}
                height={650}
                unoptimized
                style={{ width: '100%', height: 'auto' }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default SpringMainComponent; 
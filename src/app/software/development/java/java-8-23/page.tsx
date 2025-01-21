"use client"
import React, { useState } from 'react';
import './style.scss'

const JavaVersions = () => {
    const[activeTab, setActiveTab]= useState(0) 
  return (
    <div className="d-flex align-items-start">
      <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
        <button className={"m-1 bg-light nav-link" + (activeTab===0 ? " active " : " ")}  onClick={()=>setActiveTab(0)}  id="v-pills-23-tab" >Java 23</button>
        <button className={"m-1 bg-light nav-link" + (activeTab===1 ? " active " : " ")}  onClick={()=>setActiveTab(1)}  id="v-pills-22-tab" >Java 22</button>
        <button className={"m-1 bg-light nav-link " + (activeTab===2 ? " active " : " ")}  onClick={()=>setActiveTab(2)}  id="v-pills-21-tab" >Java 21</button>
        <button className={"m-1 bg-light nav-link" + (activeTab===3 ? " active " : " ")}  onClick={()=>setActiveTab(3)}  id="v-pills-20-tab" >Java 20</button>
        <button className={"m-1 bg-light nav-link" + (activeTab===4 ? " active " : " ")}  onClick={()=>setActiveTab(4)}  id="v-pills-19-tab" >Java 19</button>
        <button className={"m-1 bg-light nav-link" + (activeTab===5 ? " active " : " ")}  onClick={()=>setActiveTab(5)}  id="v-pills-18-tab" >Java 18</button>
        <button className={"m-1 bg-light nav-link" + (activeTab===6 ? " active " : " ")}  onClick={()=>setActiveTab(6)}  id="v-pills-17-tab" >Java 17</button>
        <button className={"m-1 bg-light nav-link" + (activeTab===7 ? " active " : " ")}  onClick={()=>setActiveTab(7)}  id="v-pills-16-tab" >Java 16</button>
        <button className={"m-1 bg-light nav-link" + (activeTab===8 ? " active " : " ")}  onClick={()=>setActiveTab(8)}  id="v-pills-15-tab" >Java 15</button>
        <button className={"m-1 bg-light nav-link" + (activeTab===9 ? " active " : " ")}  onClick={()=>setActiveTab(9)}  id="v-pills-14-tab" >Java 14</button>
        <button className={"m-1 bg-light nav-link" + (activeTab===10 ? " active " : " ")} onClick={()=>setActiveTab(10)} id="v-pills-13-tab" >Java 13</button>
        <button className={"m-1 bg-light nav-link" + (activeTab===11 ? " active " : " ")} onClick={()=>setActiveTab(11)} id="v-pills-12-tab" >Java 12</button>
        <button className={"m-1 bg-light nav-link" + (activeTab===12 ? " active " : " ")} onClick={()=>setActiveTab(12)} id="v-pills-11-tab" >Java 11</button>
        <button className={"m-1 bg-light nav-link" + (activeTab===13 ? " active " : " ")} onClick={()=>setActiveTab(13)} id="v-pills-10-tab" >Java 10</button>
        <button className={"m-1 bg-light nav-link" + (activeTab===14 ? " active " : " ")} onClick={()=>setActiveTab(14)} id="v-pills-9-tab"  >Java 9</button>
        <button className={"m-1 bg-light nav-link" + (activeTab===15 ? " active " : " ")} onClick={()=>setActiveTab(15)} id="v-pills-8-tab"  >Java 8</button>
      </div>
      <div className="tab-content" id="v-pills-tabContent">
        <div className={"tab-pane fade show "+ (activeTab===0 ? " active " : " ")} id="v-pills-23" role="tabpanel" aria-labelledby="v-pills-23-tab">
          <ul className='p-4'>
            <li>String Templates (Preview) </li>
            <li>Sequenced Collections</li>
            <li>Generational ZGC</li>
            <li>Record Patterns</li>
            <li>Pattern Matching for switch</li>
            <li>Foreign Function & Memory API (Third Preview)</li>
            <li>Unnamed Patterns and Variables (Preview)</li>
            <li>Virtual Threads</li>
            <li>Unnamed Classes and Instance Main Methods (Preview)</li>
            <li>Scoped Values (Preview)</li>
            <li>Vector API (Sixth Incubator)</li>
            <li>Deprecation of Windows 32-bit x86 Port for Removal</li>
            <li>Preparation to Disallow Dynamic Loading of Agents</li>
            <li>Key Encapsulation Mechanism API</li>
            <li>Structured Concurrency (Preview)</li>
          </ul>
        </div>
        <div className={"tab-pane fade show "+ (activeTab===1 ? " active " : " ")} id="v-pills-22" role="tabpanel" aria-labelledby="v-pills-22-tab">
          <ul>
            <li>Project Loom (Preview)</li>
            <li>Project Panama (Incubator)</li>
            <li>Project Valhalla (Incubator)</li>
            <li>Pattern Matching for instanceof</li>
            <li>Enhanced Switch Expressions</li>
            <li>Virtual Threads</li>
            <li>Vector API (Fourth Incubator)</li>
          </ul>
        </div>
        <div className={"tab-pane fade show "+ (activeTab===2 ? " active " : " ")} id="v-pills-21" role="tabpanel" aria-labelledby="v-pills-21-tab">
          <ul>
            <li>String Templates (Preview)</li>
            <li>Sequenced Collections</li>
            <li>Generational ZGC</li>
            <li>Record Patterns</li>
            <li>Pattern Matching for switch</li>
            <li>Foreign Function & Memory API (Third Preview)</li>
            <li>Unnamed Patterns and Variables (Preview)</li>
            <li>Virtual Threads</li>
            <li>Unnamed Classes and Instance Main Methods (Preview)</li>
            <li>Scoped Values (Preview)</li>
            <li>Vector API (Sixth Incubator)</li>
          </ul>
        </div>
        <div className={"tab-pane fade show "+ (activeTab===3 ? " active " : " ")} id="v-pills-20" role="tabpanel" aria-labelledby="v-pills-20-tab">
          <ul>
            <li>Foreign Function & Memory API (Second Preview)</li>
            <li>JEP 376: ZGC: Concurrent Thread-Stack Processing</li>
            <li>Vector API (Fifth Incubator)</li>
            <li>Project Loom (Preview)</li>
          </ul>
        </div>
        <div className={"tab-pane fade show "+ (activeTab===4 ? " active " : " ")} id="v-pills-19" role="tabpanel" aria-labelledby="v-pills-19-tab">
          <ul>
            <li>Project Loom (Preview)</li>
            <li>JEP 358: ZGC: Uncommit Unused Memory</li>
            <li>Pattern Matching for instanceof</li>
            <li>Foreign Function & Memory API (Preview)</li>
          </ul>
        </div>
        <div className={"tab-pane fade show "+ (activeTab===5 ? " active " : " ")} id="v-pills-18" role="tabpanel" aria-labelledby="v-pills-18-tab">
          <ul>
            <li>UTF-8 by Default</li>
            <li>Simple Web Server</li>
            <li>Code Snippets in Java API Documentation</li>
            <li>Reimplementation of Core Reflection with Method Handles</li>
            <li>Vector API (Third Incubator)</li>
            <li>Internet-Address Resolution SPI</li>
            <li>Foreign Function & Memory API (Second Incubator)</li>
            <li>Pattern Matching for switch (Second Preview)</li>
            <li>Deprecation of Finalization for Removal</li>
          </ul>
        </div>
        <div className={"tab-pane fade show "+ (activeTab===6 ? " active " : " ")} id="v-pills-17" role="tabpanel" aria-labelledby="v-pills-17-tab">
          <ul>
            <li>Restore Always-Strict Floating-Point Semantics</li>
            <li>Enhanced Pseudo-Random Number Generators</li>
            <li>New macOS Rendering Pipeline</li>
            <li>macOS/AArch64 Port</li>
            <li>Deprecation of Applet API for Removal</li>
            <li>Strong Encapsulation of JDK Internals</li>
            <li>Pattern Matching for switch (Preview)</li>
            <li>Removal of RMI Activation</li>
            <li>Sealed Classes</li>
            <li>Removal of Experimental AOT and JIT Compiler</li>
            <li>Deprecation of Security Manager for Removal</li>
            <li>Foreign Function & Memory API (Incubator)</li>
            <li>Vector API (Second Incubator)</li>
            <li>Context-Specific Deserialization Filters</li>
          </ul>
        </div>
        <div className={"tab-pane fade show "+ (activeTab===7 ? " active " : " ")} id="v-pills-16" role="tabpanel" aria-labelledby="v-pills-16-tab">
          <ul>
            <li>Vector API (Incubator)</li>
            <li>Enable C++14 Language Features</li>
            <li>Migration from Mercurial to Git</li>
            <li>Migration to GitHub</li>
            <li>ZGC: Concurrent Thread-Stack Processing</li>
            <li>Unix-Domain Socket Channels</li>
            <li>Alpine Linux Port</li>
            <li>Elastic Metaspace</li>
            <li>Windows/AArch64 Port</li>
            <li>Foreign Linker API (Incubator)</li>
            <li>Warnings for Value-Based Classes</li>
            <li>Packaging Tool</li>
            <li>Foreign-Memory Access API (Third Incubator)</li>
            <li>Pattern Matching for instanceof</li>
            <li>Records</li>
            <li>Strong Encapsulation of JDK Internals by Default</li>
            <li>Sealed Classes (Second Preview)</li>
          </ul>
        </div>
        <div className={"tab-pane fade show "+ (activeTab===8 ? " active " : " ")} id="v-pills-15" role="tabpanel" aria-labelledby="v-pills-15-tab">
          <ul>
            <li>Sealed Classes and Interfaces (Preview)</li>
            <li>EdDSA Algorithm</li>
            <li>Hidden Classes</li>
            <li>Pattern Matching for instanceof (Second Preview)</li>
            <li>Removal of Nashorn JavaScript Engine</li>
            <li>Reimplementation of Legacy DatagramSocket API</li>
            <li>Records (Second Preview)</li>
            <li> Text Blocks become a standard feature </li>
          </ul>
        </div>
        <div className={"tab-pane fade show "+ (activeTab===9 ? " active " : " ")} id="v-pills-14" role="tabpanel" aria-labelledby="v-pills-14-tab">
          <ul>
            <li>Pattern Matching for instanceof (Preview)</li>
            <li>Text Blocks (Second Preview)</li>
            <li>Helpful NullPointerExceptions</li>
            <li>Records (Preview)</li>
            <li>Switch Expressions (Standard)</li>
            <li>Packaging Tool (Incubator)</li>
            <li>NUMA-Aware Memory Allocation for G1</li>
            <li>JFR Event Streaming</li>
            <li>Non-Volatile Mapped Byte Buffers</li>
            <li>Removal of Concurrent Mark Sweep (CMS) Garbage Collector</li>
            <li>Removal of Pack200 Tools and API</li>
            <li>Foreign-Memory Access API (Incubator)</li>
          </ul>
        </div>
        <div className={"tab-pane fade show "+ (activeTab===10 ? " active " : " ")} id="v-pills-13" role="tabpanel" aria-labelledby="v-pills-13-tab">
          <ul>
            <li>Text Blocks (Preview)</li>
            <li>Switch Expressions Enhancements (Preview)</li>
            <li>Reimplementation of the DatagramSocket API</li>
            <li>Enhanced Pseudo-Random Number Generators</li>
            <li>Strongly Encapsulate JDK Internals</li>
          </ul>
        </div>
        <div className={"tab-pane fade show "+ (activeTab===11 ? " active " : " ")} id="v-pills-12" role="tabpanel" aria-labelledby="v-pills-12-tab">
          <ul>
            <li>JEP 376: ZGC: Concurrent Thread-Stack Processing</li>
            <li>JEP 358: ZGC: Uncommit Unused Memory</li>
            <li>JEP 351: JDK 12 Compiler Improvements</li>
            <li>JEP 349: JFR Event Streaming</li>
            <li>JEP 331: Low-Overhead Heap Profiling</li>
            <li>JEP 341: Default CDS Archives</li>
          </ul>
        </div>
        <div className={"tab-pane fade show "+ (activeTab===12 ? " active " : " ")} id="v-pills-11" role="tabpanel" aria-labelledby="v-pills-11-tab">
          <ul>
            <li> Long-Term Support (LTS) Release </li>
            <li>Local-Variable Syntax for Lambda Parameters</li>
            <li>JEP 323: Local-Variable Type Inference</li>
            <li>JEP 324: Key Encapsulation Mechanism (KEM) API</li>
            <li>JEP 322: Time-Based Release Versioning</li>
            <li>JEP 315: Improve AArch64 Intrinsics</li>
          </ul>
        </div>
        <div className={"tab-pane fade show "+ (activeTab===13 ? " active " : " ")} id="v-pills-10" role="tabpanel" aria-labelledby="v-pills-10-tab">
          <ul>
            <li>JEP 286: Local-Variable Type Inference</li>
            <li>JEP 296: Consolidate the JDK Forest into a Single Repository</li>
            <li>JEP 318: Epsilon: A No-Op Garbage Collector</li>
          </ul>
        </div>
        <div className={"tab-pane fade show "+ (activeTab===14 ? " active " : " ")} id="v-pills-9" role="tabpanel" aria-labelledby="v-pills-9-tab">
          <ul>
            <li>JEP 260: Encapsulate Most Internal APIs</li>
            <li>JEP 266: Convenience Factory Methods for Collections</li>
            <li>JEP 230: Microbenchmarking</li>
          </ul>
        </div>
        <div className={"tab-pane fade show "+ (activeTab===15 ? " active " : " ")} id="v-pills-8" role="tabpanel" aria-labelledby="v-pills-8-tab">
          <ul>
            <li> Lambda Expressions </li>
            <li> Streams API </li>
            <li>Default Methods</li>
            <li>New Date and Time API</li>
            <li>Optional Class</li>
            <li>Base64 Encoding</li>
            <li>Method References</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JavaVersions;

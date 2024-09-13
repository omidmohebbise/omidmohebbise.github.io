import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const JEP430Summary = () => {
  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header bg-primary text-white">
          <h3>JEP 430: String Templates (Preview)</h3>
        </div>
        <div className="card-body">
          <p>
            JEP 430 introduces **String Templates** as a preview feature in the Java language, providing a more readable and concise way to embed expressions inside strings. These expressions are automatically evaluated and formatted at runtime.
          </p>
          <h5>Key Features:</h5>
          <ul>
            <li><strong>Embedded Expressions:</strong> Embed expressions directly within strings using <code>${'{expression}'}</code> syntax.</li>
            <li><strong>Enhanced Readability:</strong> Improves code readability and reduces the need for manual concatenation or <code>String.format()</code>.</li>
            <li><strong>Type-Safe:</strong> Ensures that expressions are type-checked at compile-time, reducing runtime errors.</li>
            <li><strong>Custom Processing:</strong> Allows developers to define custom processors for how embedded expressions are evaluated and formatted.</li>
            <li><strong>Preview Feature:</strong> Available for experimentation but not yet a permanent part of the Java language, allowing for feedback and iteration.</li>
          </ul>
          <h5>Use Cases:</h5>
          <ul>
            <li>Simplified string construction for logging, UI messages, or dynamic content.</li>
            <li>More readable and maintainable code when dealing with strings built from multiple variables or expressions.</li>
          </ul>
          <p>
            JEP 430 aims to make string manipulation in Java more powerful, safer, and easier to read and maintain.
          </p>
        </div>
      </div>
    </div>
  );
};

export default JEP430Summary;

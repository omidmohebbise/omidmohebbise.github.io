import React from 'react';

const InheritableThreadLocalComponent: React.FC = () => {
    return (
        <div className="container mt-4">
            <h2>InheritableThreadLocal in Java</h2>
            <p>
                <strong>InheritableThreadLocal</strong> is a subclass of ThreadLocal in Java that allows child threads to inherit values from their parent thread. This can be useful in scenarios where you need to maintain context information relevant to a thread’s lifecycle, and want the context accessible in any threads spawned by the parent.
            </p>

            <div className="card mb-4">
                <div className="card-header">
                    <h4>Example: InheritableThreadLocal</h4>
                </div>
                <div className="card-body">
          <pre>
{`import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class InheritableThreadLocalExample {
    private static InheritableThreadLocal<String> contextHolder = new InheritableThreadLocal<>();

    public static void main(String[] args) {
        contextHolder.set("Parent Thread Context");

        ExecutorService executor = Executors.newFixedThreadPool(2);

        executor.submit(() -> {
            String childContext = contextHolder.get();
            System.out.println("Child Thread Context: " + childContext);
        });

        String parentContext = contextHolder.get();
        System.out.println("Parent Thread Context: " + parentContext);

        executor.shutdown();
    }
}`}
          </pre>
                </div>
            </div>

            <div className="alert alert-info mt-4">
                <strong>Output:</strong>
                <pre>
{`Parent Thread Context: Parent Thread Context
Child Thread Context: Parent Thread Context`}
        </pre>
            </div>

            <h4>Explanation</h4>
            <ul>
                <li><strong>InheritableThreadLocal Creation:</strong> We create an instance named <code>contextHolder</code> to hold context information.</li>
                <li><strong>Setting Context in Parent Thread:</strong> In the main thread, we set a value ("Parent Thread Context") in <code>contextHolder</code>.</li>
                <li><strong>Child Thread Creation:</strong> We use an <code>ExecutorService</code> to create a child thread, which inherits the value from the parent.</li>
                <li><strong>Accessing Context:</strong> In the child thread, the inherited value is retrieved from <code>contextHolder</code>.</li>
            </ul>

            <h4>Use Cases</h4>
            <ul>
                <li>Context Propagation (e.g., user sessions, request IDs)</li>
                <li>Logging Context for tracing logs across threads</li>
                <li>Transaction Management for background tasks in child threads</li>
                <li>Thread-specific Configuration based on parent thread settings</li>
            </ul>

            <h4>Important Considerations</h4>
            <ul>
                <li><strong>Memory Leaks:</strong> Ensure values are cleaned up properly to avoid memory leaks, especially in long-lived threads.</li>
                <li><strong>Performance:</strong> Use judiciously to avoid unnecessary performance overhead.</li>
            </ul>

            {/*<button className="btn btn-primary mt-4" onClick={() => alert('Further reading on InheritableThreadLocal')}>Learn More</button>*/}
        </div>
    );
};

export default InheritableThreadLocalComponent;

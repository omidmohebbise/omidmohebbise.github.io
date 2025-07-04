import React from 'react';

const ThreadLocalComponent: React.FC = () => {
    return (
        <div className="container mt-4">
            <h2>ThreadLocal in Java</h2>
            <p>
                <strong>ThreadLocal</strong> is a class in Java that provides thread-local variables. Each thread accessing such a variable has its own, independently initialized copy of the variable. This is useful for maintaining per-thread context without requiring explicit synchronization.
            </p>

            <div className="card mb-4">
                <div className="card-header">
                    <h4>Example: ThreadLocal</h4>
                </div>
                <div className="card-body">
          <pre>
{`public class ThreadLocalExample {
    private static ThreadLocal<Integer> threadLocalValue = ThreadLocal.withInitial(() -> 0);

    public static void main(String[] args) {
        Thread thread1 = new Thread(new Task(), "Thread-1");
        Thread thread2 = new Thread(new Task(), "Thread-2");

        thread1.start();
        thread2.start();
    }

    static class Task implements Runnable {
        @Override
        public void run() {
            Integer value = threadLocalValue.get();
            System.out.println(Thread.currentThread().getName() + " initial value: " + value);

            threadLocalValue.set(value + 1);
            System.out.println(Thread.currentThread().getName() + " updated value: " + threadLocalValue.get());

            try {
                Thread.sleep(100);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }

            System.out.println(Thread.currentThread().getName() + " final value: " + threadLocalValue.get());
        }
    }
}`}
          </pre>
                </div>
            </div>

            <div className="alert alert-info mt-4">
                <strong>Explanation:</strong>
                <ul>
                    <li>We create a <code>ThreadLocal</code> variable <code>threadLocalValue</code> that initializes to 0 for each thread.</li>
                    <li>Each thread retrieves its own copy of the thread-local variable, updates it, and prints the result.</li>
                    <li>The changes made by one thread do not affect the value seen by the other thread.</li>
                </ul>
            </div>

            <h4>Use Cases of ThreadLocal</h4>
            <ul>
                <li>User Sessions in Web Applications: Each user can have a unique session context stored in a thread-local variable, enabling the server to handle multiple requests from different users simultaneously without mixing session data.</li>
                <li>Database Connections: Store connections specific to a thread in a connection pool to avoid the overhead of passing connections around.</li>
                <li>Transaction Management: Track transaction contexts in frameworks like Spring using ThreadLocal to avoid passing context explicitly.</li>
                <li>Logging: Store the current user’s logging context (user ID, session ID) in ThreadLocal to avoid passing it around explicitly.</li>
                <li>Configuration Settings: Use ThreadLocal to store thread-specific settings such as locale or timezone.</li>
            </ul>

            <h4>Important Considerations</h4>
            <ul>
                <li><strong>Memory Leak:</strong> Clean up <code>ThreadLocal</code> variables when no longer needed using the <code>remove()</code> method, especially in environments with reused threads like thread pools.</li>
                <li><strong>Isolation:</strong> While <code>ThreadLocal</code> isolates data for each thread, it does not replace proper synchronization mechanisms for mutable data shared across threads.</li>
            </ul>

        </div>
    );
};

export default ThreadLocalComponent;

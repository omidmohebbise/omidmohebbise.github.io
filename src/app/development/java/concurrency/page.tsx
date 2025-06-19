import React from 'react';
import concepts from "./data.json";

const ConcurrencyConcepts = () => {


    return (
        <div className="container">
            <h2 className="mb-4">Java Concurrency Concepts</h2>

            {concepts.map((concept, index) => (
                <div key={index} className="mb-4">
                    <h3 className="mb-3">{concept.title}</h3>
                    <div className="p-3 border rounded">
                        <p>{concept.body}</p>
                        <pre className="bg-light p-3 mt-3"><code>{concept.code}</code></pre>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ConcurrencyConcepts;
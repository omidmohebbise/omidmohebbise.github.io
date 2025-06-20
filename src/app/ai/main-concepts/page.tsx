import React from "react";

const AiPage: React.FC = () => {
    const concepts = [
        {
            id: "machine-learning",
            title: "1. Machine Learning (ML)",
            description:
                "Machine Learning is a subset of AI that focuses on building systems that can learn and improve from data without explicit programming.",
            items: [
                "<strong>Supervised Learning:</strong> Training models on labeled data.",
                "<strong>Unsupervised Learning:</strong> Discovering patterns in unlabeled data.",
                "<strong>Reinforcement Learning:</strong> Learning through trial and error with rewards and penalties.",
            ],
        },
        {
            id: "deep-learning",
            title: "2. Deep Learning",
            description:
                "Deep Learning is a specialized branch of ML that uses neural networks with multiple layers to analyze complex patterns in large datasets.",
            items: [
                "Inspired by the structure and function of the human brain.",
                "Used in applications like image recognition, natural language processing, and autonomous vehicles.",
            ],
        },
        {
            id: "natural-language-processing",
            title: "3. Natural Language Processing (NLP)",
            description:
                "NLP enables machines to understand, interpret, and generate human language.",
            items: [
                "<strong>Key Tasks:</strong> Sentiment analysis, translation, speech recognition.",
                "Used in chatbots, virtual assistants, and text summarization.",
            ],
        },
        {
            id: "computer-vision",
            title: "4. Computer Vision",
            description:
                "Computer Vision enables machines to interpret and make decisions based on visual data.",
            items: [
                "Applications include object detection, facial recognition, and medical imaging.",
                "Involves techniques like image processing, feature extraction, and deep learning.",
            ],
        },
        {
            id: "robotics",
            title: "5. Robotics",
            description:
                "Robotics combines AI with mechanical engineering to design intelligent machines that can perform tasks autonomously.",
            items: [
                "Used in manufacturing, healthcare, and exploration.",
                "Involves motion planning, perception, and decision-making algorithms.",
            ],
        },
        {
            id: "expert-systems",
            title: "6. Expert Systems",
            description:
                "Expert Systems use rule-based reasoning to simulate the decision-making ability of a human expert.",
            items: [
                "Composed of a knowledge base and an inference engine.",
                "Applications include medical diagnosis and financial forecasting.",
            ],
        },
        {
            id: "reinforcement-learning",
            title: "7. Reinforcement Learning",
            description:
                "A learning paradigm where agents learn by interacting with an environment to achieve goals.",
            items: [
                "Uses concepts of rewards and penalties to shape behavior.",
                "Applied in robotics, game playing, and autonomous systems.",
            ],
        },
    ];

    return (
        <div className="container py-5">
            <h1 className="mb-4 p-3 bg-light border rounded text-center">
                🤖 AI Main Concepts
            </h1>
            {concepts.map((concept) => (
                <section id={concept.id} className="mb-5" key={concept.id}>
                    <h3 className="mb-2 text-primary">{concept.title}</h3>
                    <p>{concept.description}</p>
                    <ul className="list-group list-group-flush">
                        {concept.items.map((item, index) => (
                            <li
                                key={index}
                                className="list-group-item"
                                dangerouslySetInnerHTML={{ __html: item }}
                            />
                        ))}
                    </ul>
                </section>
            ))}
        </div>
    );
};

export default AiPage;

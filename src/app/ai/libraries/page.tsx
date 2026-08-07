import React from "react";

const AiLibrariesPage: React.FC = () => {
    const librariesByCategory = [
        {
            title: "Machine Learning",
            items: ["Scikit-learn", "TensorFlow", "PyTorch", "Keras", "XGBoost"],
        },
        {
            title: "Deep Learning",
            items: ["TensorFlow", "PyTorch", "Keras", "OpenCV"],
        },
        {
            title: "Natural Language Processing",
            items: ["NLTK", "spaCy", "Transformers", "Gensim"],
        },
        {
            title: "Reinforcement Learning",
            items: ["OpenAI Gym", "Stable-Baselines3", "Ray RLlib"],
        },
        {
            title: "Computer Vision",
            items: [
                "OpenCV",
                "TensorFlow Object Detection API",
                "Detectron2",
                "YOLO",
            ],
        },
        {
            title: "Data Handling",
            items: ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
        },
        {
            title: "AutoML",
            items: ["TPOT", "H2O.ai", "AutoKeras", "MLJar"],
        },
    ];

    return (
        <div className="container py-5">
            <p className="section-label">AI</p>
            <h1 className="section-title">AI Libraries</h1>
            <hr className="section-rule" />

            <div className="row">
                {librariesByCategory.map((category) => (
                    <div className="col-md-6 mb-4" key={category.title}>
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h5 className="mb-2">{category.title}</h5>
                                <ul className="list-unstyled mb-0">
                                    {category.items.map((lib) => (
                                        <li key={lib} className="mb-1">
                                            • {lib}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AiLibrariesPage;

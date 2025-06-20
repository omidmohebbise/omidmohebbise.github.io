import React from "react";
import './page.scss';

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
        <div className="container py-4">
            <h1 className="p-3 mb-5 bg-light rounded text-center">🤖 AI Libraries</h1>

            {librariesByCategory.map((category, idx) => (
                <div className="row mb-4" key={category.title}>
                    <div className={category.title === "AutoML" ? "col-md-6" : "col-md-6"}>
                        <h3 className="category-title">{category.title}</h3>
                        <ul className="category-list list-unstyled ps-3">
                            {category.items.map((lib) => (
                                <li key={lib} className="mb-1">
                                    • {lib}
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* For odd count categories that don't fill two columns, leave blank col */}
                    {category.title !== "AutoML" && idx % 2 === 0 ? (
                        <div className="col-md-6"></div>
                    ) : null}
                </div>
            ))}
        </div>
    );
};

export default AiLibrariesPage;

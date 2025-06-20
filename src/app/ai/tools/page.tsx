import React from "react";

const AiToolsPage: React.FC = () => {
    const tools = [
        {
            id: "ollama",
            name: "Ollama",
            description:
                "A command-line tool to run and manage large language models locally.",
            details: [
                "Supports models like LLaMA, Mistral, and custom fine-tuned models.",
                "Simplifies model setup and deployment.",
                "Optimized for local inference on modern hardware.",
            ],
            installation: `curl -fsSL https://ollama.com/install.sh | sh`,
            usage: `ollama run llama2`,
            website: "https://ollama.com",
            useCase: "Best for users who want an easy-to-use CLI tool for running models locally.",
        },
        {
            id: "lm-studio",
            name: "LM Studio",
            description: "A user-friendly GUI tool for running LLMs locally.",
            details: [
                "Supports models like LLaMA, Mistral, and GPT4All.",
                "Clean graphical interface.",
                "Works on macOS, Windows, and Linux.",
            ],
            installation: "Download from https://lmstudio.ai",
            useCase: "Best for users who prefer a graphical interface.",
        },
        {
            id: "hugging-face-transformers",
            name: "Hugging Face Transformers",
            description: "A Python library for downloading, running, and fine-tuning LLMs.",
            details: [
                "Access thousands of models from Hugging Face Hub.",
                "Supports frameworks like PyTorch and TensorFlow.",
            ],
            installation: `pip install transformers`,
            example: `
from transformers import pipeline
generator = pipeline("text-generation", model="meta-llama/Llama-2-7b-hf")
print(generator("Once upon a time,"))`,
            useCase: "Best for developers who want programmatic control.",
        },
        {
            id: "gpt4all",
            name: "GPT4All",
            description:
                "A tool for running open-source LLMs locally with minimal hardware requirements.",
            details: [
                "Supports multiple models: GPT-J, LLaMA, Mistral.",
                "Offers both CLI and GUI options.",
                "Cross-platform support (macOS, Windows, Linux).",
            ],
            installation: "Download from https://gpt4all.io",
            useCase: "Great for lightweight, local deployment.",
        },
        {
            id: "localai",
            name: "LocalAI",
            description:
                "A drop-in replacement for OpenAI's API that runs models locally.",
            details: [
                "Compatible with OpenAI's API endpoints.",
                "Supports models like LLaMA, Mistral, and GPT-J.",
                "Lightweight and containerized.",
            ],
            installation: `docker run -p 8080:8080 quay.io/go-skynet/local-ai:latest`,
            website: "https://localai.io",
            useCase: "Best for deploying models as local APIs.",
        },
        {
            id: "llama-cpp",
            name: "llama.cpp",
            description:
                "A lightweight C++ implementation of LLaMA optimized for CPU inference.",
            details: [
                "Runs models efficiently on CPU (no GPU required).",
                "Lightweight and fast.",
                "Bindings available for Python and other languages.",
            ],
            installation: `git clone https://github.com/ggerganov/llama.cpp
cd llama.cpp
make`,
            useCase: "Ideal for performance-focused, low-level control.",
        },
        {
            id: "koboldcpp",
            name: "KoboldCpp",
            description:
                "A fork of llama.cpp designed for interactive story generation and experimentation.",
            details: [
                "Provides a GUI for chat and text generation.",
                "Supports GGML models like LLaMA and Mistral.",
            ],
            website: "https://github.com/LostRuins/koboldcpp",
            useCase: "Great for interactive, creative text generation.",
        },
        {
            id: "tensorrt-llm",
            name: "TensorRT-LLM (NVIDIA)",
            description:
                "NVIDIA's optimized library for deploying LLMs on GPUs.",
            details: [
                "Designed for NVIDIA GPUs.",
                "Optimizes models like GPT-2, GPT-3, and LLaMA for high performance.",
            ],
            useCase: "Best for GPU-based inference with NVIDIA hardware.",
        },
    ];

    return (
        <div className="container py-5">
            <h1 className="mb-4 p-3 bg-light border rounded text-center">🛠 AI Tools</h1>

            {/* Tools List */}
            {tools.map((tool) => (
                <section key={tool.id} id={tool.id} className="mb-5">
                    <h3 className="text-primary">{tool.name}</h3>
                    <p>{tool.description}</p>

                    <ul className="list-group list-group-flush mb-3">
                        {tool.details.map((detail, idx) => (
                            <li className="list-group-item" key={idx}>
                                {detail}
                            </li>
                        ))}
                    </ul>

                    {tool.installation && (
                        <>
                            <h6>Installation:</h6>
                            <pre className="bg-dark text-white p-3 rounded" style={{ whiteSpace: "pre-wrap" }}>
                {tool.installation}
              </pre>
                        </>
                    )}

                    {tool.usage && (
                        <>
                            <h6>Usage:</h6>
                            <code>{tool.usage}</code>
                        </>
                    )}

                    {tool.example && (
                        <>
                            <h6>Example:</h6>
                            <pre className="bg-dark text-white p-3 rounded" style={{ whiteSpace: "pre-wrap" }}>
                {tool.example.trim()}
              </pre>
                        </>
                    )}

                    {tool.website && (
                        <p>
                            Website:{" "}
                            <a href={tool.website} target="_blank" rel="noopener noreferrer">
                                {tool.website}
                            </a>
                        </p>
                    )}

                    <p>
                        <strong>Use Case:</strong> {tool.useCase}
                    </p>
                    <hr />
                </section>
            ))}

            {/* Comparison Table */}
            <h2 className="mb-3">Comparison Table</h2>
            <div className="table-responsive">
                <table className="table table-striped table-bordered align-middle">
                    <thead className="table-light">
                    <tr>
                        <th>Tool</th>
                        <th>Ease of Use</th>
                        <th>Hardware Needs</th>
                        <th>Interface</th>
                        <th>Supported Models</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Ollama</td>
                        <td>Easy (CLI)</td>
                        <td>Moderate</td>
                        <td>CLI</td>
                        <td>LLaMA, Mistral, Custom</td>
                    </tr>
                    <tr>
                        <td>LM Studio</td>
                        <td>Very Easy</td>
                        <td>Moderate</td>
                        <td>GUI</td>
                        <td>LLaMA, GPT4All, Mistral</td>
                    </tr>
                    <tr>
                        <td>GPT4All</td>
                        <td>Easy</td>
                        <td>Low/Moderate</td>
                        <td>CLI & GUI</td>
                        <td>GPT-J, LLaMA, Mistral</td>
                    </tr>
                    <tr>
                        <td>Hugging Face</td>
                        <td>Moderate</td>
                        <td>Moderate/High</td>
                        <td>Code-based</td>
                        <td>Any model on Hugging Face</td>
                    </tr>
                    <tr>
                        <td>llama.cpp</td>
                        <td>Moderate</td>
                        <td>Low</td>
                        <td>CLI</td>
                        <td>LLaMA models</td>
                    </tr>
                    <tr>
                        <td>LocalAI</td>
                        <td>Easy</td>
                        <td>Moderate</td>
                        <td>API-compatible</td>
                        <td>LLaMA, GPT-J, Mistral</td>
                    </tr>
                    <tr>
                        <td>KoboldCpp</td>
                        <td>Easy</td>
                        <td>Low</td>
                        <td>GUI</td>
                        <td>GGML Models (LLaMA, etc.)</td>
                    </tr>
                    <tr>
                        <td>TensorRT-LLM</td>
                        <td>Moderate</td>
                        <td>High (GPU)</td>
                        <td>Code-based</td>
                        <td>Optimized GPT, LLaMA</td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <div className="alert alert-info mt-4">
                <strong>Tips:</strong>{" "}
                Try <em>Ollama, LM Studio, or GPT4All</em> for ease of use. Use{" "}
                <em>LocalAI</em> for API-based needs. For low-resource setups, consider{" "}
                <em>llama.cpp</em> or <em>KoboldCpp</em>. Developers looking for advanced
                control should try <em>Hugging Face Transformers</em>. For GPU-heavy
                workloads, NVIDIA's <em>TensorRT-LLM</em> is the way to go.
            </div>
        </div>
    );
};

export default AiToolsPage;

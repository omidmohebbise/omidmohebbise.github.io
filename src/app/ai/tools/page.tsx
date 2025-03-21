import './page.scss'

const AiPage = () => {
    const getTools = () => {
        return <>
            <div> <div className="container mt-3">

                <section id="ollama" className="mb-5">
                    <h2>1. Ollama</h2>
                    <p><strong>Description:</strong> A command-line tool to run and manage large language models locally.</p>
                    <ul>
                        <li>Supports models like LLaMA, Mistral, and custom fine-tuned models.</li>
                        <li>Simplifies model setup and deployment.</li>
                        <li>Optimized for local inference on modern hardware.</li>
                    </ul>
                    <p><strong>Installation:</strong></p>
                    <pre><code>curl -fsSL https://ollama.com/install.sh | sh</code></pre>
                    <p><strong>Usage:</strong> <code>ollama run llama2</code></p>
                    <p><strong>Website:</strong> <a href="https://ollama.com">https://ollama.com</a></p>
                    <p><strong>Use Case:</strong> Best for users who want an easy-to-use CLI tool for running models locally.</p>
                </section>

                <section id="lm-studio" className="mb-5">
                    <h2>2. LM Studio</h2>
                    <p><strong>Description:</strong> A user-friendly GUI tool for running LLMs locally.</p>
                    <ul>
                        <li>Supports models like LLaMA, Mistral, and GPT4All.</li>
                        <li>Clean graphical interface.</li>
                        <li>Works on macOS, Windows, and Linux.</li>
                    </ul>
                    <p><strong>Installation:</strong> Download from <a href="https://lmstudio.ai">https://lmstudio.ai</a>.</p>
                    <p><strong>Use Case:</strong> Best for users who prefer a graphical interface.</p>
                </section>

                <section id="hugging-face" className="mb-5">
                    <h2>3. Hugging Face Transformers</h2>
                    <p><strong>Description:</strong> A Python library for downloading, running, and fine-tuning LLMs.</p>
                    <ul>
                        <li>Access thousands of models from Hugging Face Hub.</li>
                        <li>Supports frameworks like PyTorch and TensorFlow.</li>
                    </ul>
                    <p><strong>Installation:</strong></p>
                    <pre><code>pip install transformers</code></pre>
                    <p><strong>Example:</strong></p>
                    <pre><code>from transformers import pipeline
                        generator = pipeline("text-generation", model="meta-llama/Llama-2-7b-hf")
                        print(generator("Once upon a time,"))</code></pre>
                    <p><strong>Use Case:</strong> Best for developers who want programmatic control.</p>
                </section>

                <section id="gpt4all" className="mb-5">
                    <h2>4. GPT4All</h2>
                    <p><strong>Description:</strong> A tool for running open-source LLMs locally with minimal hardware requirements.</p>
                    <ul>
                        <li>Supports multiple models: GPT-J, LLaMA, Mistral.</li>
                        <li>Offers both CLI and GUI options.</li>
                        <li>Cross-platform support (macOS, Windows, Linux).</li>
                    </ul>
                    <p><strong>Installation:</strong> Download from <a href="https://gpt4all.io">https://gpt4all.io</a>.</p>
                    <p><strong>Use Case:</strong> Great for lightweight, local deployment.</p>
                </section>

                <section id="localai" className="mb-5">
                    <h2>5. LocalAI</h2>
                    <p><strong>Description:</strong> A drop-in replacement for OpenAI's API that runs models locally.</p>
                    <ul>
                        <li>Compatible with OpenAI's API endpoints.</li>
                        <li>Supports models like LLaMA, Mistral, and GPT-J.</li>
                        <li>Lightweight and containerized.</li>
                    </ul>
                    <p><strong>Installation:</strong></p>
                    <pre><code>docker run -p 8080:8080 quay.io/go-skynet/local-ai:latest</code></pre>
                    <p><strong>Website:</strong> <a href="https://localai.io">https://localai.io</a></p>
                    <p><strong>Use Case:</strong> Best for deploying models as local APIs.</p>
                </section>

                <section id="llama-cpp" className="mb-5">
                    <h2>6. llama.cpp</h2>
                    <p><strong>Description:</strong> A lightweight C++ implementation of LLaMA optimized for CPU inference.</p>
                    <ul>
                        <li>Runs models efficiently on CPU (no GPU required).</li>
                        <li>Lightweight and fast.</li>
                        <li>Bindings available for Python and other languages.</li>
                    </ul>
                    <p><strong>Installation:</strong></p>
                    <pre><code>git clone https://github.com/ggerganov/llama.cpp
                        cd llama.cpp
                        make</code></pre>
                    <p><strong>Use Case:</strong> Ideal for performance-focused, low-level control.</p>
                </section>

                <section id="koboldcpp" className="mb-5">
                    <h2>7. KoboldCpp</h2>
                    <p><strong>Description:</strong> A fork of llama.cpp designed for interactive story generation and experimentation.</p>
                    <ul>
                        <li>Provides a GUI for chat and text generation.</li>
                        <li>Supports GGML models like LLaMA and Mistral.</li>
                    </ul>
                    <p><strong>Website:</strong> <a href="https://github.com/LostRuins/koboldcpp">https://github.com/LostRuins/koboldcpp</a></p>
                    <p><strong>Use Case:</strong> Great for interactive, creative text generation.</p>
                </section>

                <section id="tensorrt-llm" className="mb-5">
                    <h2>8. TensorRT-LLM (NVIDIA)</h2>
                    <p><strong>Description:</strong> NVIDIA's optimized library for deploying LLMs on GPUs.</p>
                    <ul>
                        <li>Designed for NVIDIA GPUs.</li>
                        <li>Optimizes models like GPT-2, GPT-3, and LLaMA for high performance.</li>
                    </ul>
                    <p><strong>Use Case:</strong> Best for GPU-based inference with NVIDIA hardware.</p>
                </section>

                <section id="comparison-table" className="mb-5">
                    <h2>Comparison Table</h2>
                    <table className="table table-striped">
                        <thead>
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
                </section>

                <footer className="text-left py-4">
                    <p>For ease of use: Try Ollama, LM Studio, or GPT4All.</p>
                    <p>For API-based alternatives: Use LocalAI.</p>
                    <p>For low-resource environments: Go with llama.cpp or KoboldCpp.</p>
                    <p>For advanced developers: Use Hugging Face Transformers.</p>
                    <p>For GPU-based performance: NVIDIA's TensorRT-LLM is ideal.</p>
                </footer>
            </div></div>
        </>
    }

    return (
        <div className="">
            <h1 className="p-2 mb-5 bg-light rounded">AI Tools</h1>
            {getTools()}
        </div>
    )
}


export default AiPage;
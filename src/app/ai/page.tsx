"use client"

import { useState } from 'react'
import './page.scss'

const PageStates = {
    Concept: 1,
    Tools: 2,
    Libraries: 3
}

const AiPage = () => {
    const [pageState, setPageState] = useState(PageStates.Concept)

    const getLibraries = () => {
        return <>
            <div className="row mt-4">
                <div className="col-md-6">
                    <h3 className="category-title">Machine Learning</h3>
                    <ul className="category-list">
                        <li>Scikit-learn</li>
                        <li>TensorFlow</li>
                        <li>PyTorch</li>
                        <li>Keras</li>
                        <li>XGBoost</li>
                    </ul>
                </div>

                <div className="col-md-6">
                    <h3 className="category-title">Deep Learning</h3>
                    <ul className="category-list">
                        <li>TensorFlow</li>
                        <li>PyTorch</li>
                        <li>Keras</li>
                        <li>OpenCV</li>
                    </ul>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <h3 className="category-title">Natural Language Processing</h3>
                    <ul className="category-list">
                        <li>NLTK</li>
                        <li>spaCy</li>
                        <li>Transformers</li>
                        <li>Gensim</li>
                    </ul>
                </div>

                <div className="col-md-6">
                    <h3 className="category-title">Reinforcement Learning</h3>
                    <ul className="category-list">
                        <li>OpenAI Gym</li>
                        <li>Stable-Baselines3</li>
                        <li>Ray RLlib</li>
                    </ul>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <h3 className="category-title">Computer Vision</h3>
                    <ul className="category-list">
                        <li>OpenCV</li>
                        <li>TensorFlow Object Detection API</li>
                        <li>Detectron2</li>
                        <li>YOLO</li>
                    </ul>
                </div>

                <div className="col-md-6">
                    <h3 className="category-title">Data Handling</h3>
                    <ul className="category-list">
                        <li>Pandas</li>
                        <li>NumPy</li>
                        <li>Matplotlib</li>
                        <li>Seaborn</li>
                    </ul>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <h3 className="category-title">AutoML</h3>
                    <ul className="category-list">
                        <li>TPOT</li>
                        <li>H2O.ai</li>
                        <li>AutoKeras</li>
                        <li>MLJar</li>
                    </ul>
                </div>
            </div>
        </>
    }

    const getConcepts = () => {
        return <>
            <div className='pt-2'>
                <section id="machine-learning" className="mb-5">
                    <h2>1. Machine Learning (ML)</h2>
                    <p>Machine Learning is a subset of AI that focuses on building systems that can learn and improve from data without explicit programming.</p>
                    <ul>
                        <li><strong>Supervised Learning:</strong> Training models on labeled data.</li>
                        <li><strong>Unsupervised Learning:</strong> Discovering patterns in unlabeled data.</li>
                        <li><strong>Reinforcement Learning:</strong> Learning through trial and error with rewards and penalties.</li>
                    </ul>
                </section>

                <section id="deep-learning" className="mb-5">
                    <h2>2. Deep Learning</h2>
                    <p>Deep Learning is a specialized branch of ML that uses neural networks with multiple layers to analyze complex patterns in large datasets.</p>
                    <ul>
                        <li>Inspired by the structure and function of the human brain.</li>
                        <li>Used in applications like image recognition, natural language processing, and autonomous vehicles.</li>
                    </ul>
                </section>

                <section id="natural-language-processing" className="mb-5">
                    <h2>3. Natural Language Processing (NLP)</h2>
                    <p>NLP enables machines to understand, interpret, and generate human language.</p>
                    <ul>
                        <li><strong>Key Tasks:</strong> Sentiment analysis, translation, speech recognition.</li>
                        <li>Used in chatbots, virtual assistants, and text summarization.</li>
                    </ul>
                </section>

                <section id="computer-vision" className="mb-5">
                    <h2>4. Computer Vision</h2>
                    <p>Computer Vision enables machines to interpret and make decisions based on visual data.</p>
                    <ul>
                        <li>Applications include object detection, facial recognition, and medical imaging.</li>
                        <li>Involves techniques like image processing, feature extraction, and deep learning.</li>
                    </ul>
                </section>

                <section id="robotics" className="mb-5">
                    <h2>5. Robotics</h2>
                    <p>Robotics combines AI with mechanical engineering to design intelligent machines that can perform tasks autonomously.</p>
                    <ul>
                        <li>Used in manufacturing, healthcare, and exploration.</li>
                        <li>Involves motion planning, perception, and decision-making algorithms.</li>
                    </ul>
                </section>

                <section id="expert-systems" className="mb-5">
                    <h2>6. Expert Systems</h2>
                    <p>Expert Systems use rule-based reasoning to simulate the decision-making ability of a human expert.</p>
                    <ul>
                        <li>Composed of a knowledge base and an inference engine.</li>
                        <li>Applications include medical diagnosis and financial forecasting.</li>
                    </ul>
                </section>

                <section id="reinforcement-learning" className="mb-5">
                    <h2>7. Reinforcement Learning</h2>
                    <p>A learning paradigm where agents learn by interacting with an environment to achieve goals.</p>
                    <ul>
                        <li>Uses concepts of rewards and penalties to shape behavior.</li>
                        <li>Applied in robotics, game playing, and autonomous systems.</li>
                    </ul>
                </section>
            </div>
        </>
    }

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
            {/* <h1 className="text-center mb-5">Artifical Intelligence</h1> */}
            <div className='row m-0' >
                {Object.keys(PageStates)
                    .map(x => <div className="text-center col-4 p-1" key={PageStates[x]}>
                        <div role="button" className={pageState === PageStates[x] ? 'bg-light p-3' : "p-3 border-bottom"} onClick={() => setPageState(PageStates[x])}>{x}</div>
                    </div>)}
            </div>
            {pageState === PageStates.Concept && getConcepts()}
            {pageState === PageStates.Tools && getTools()}
            {pageState === PageStates.Libraries && getLibraries()}
        </div>
    )
}


export default AiPage;
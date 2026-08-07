export default function CommonModelsPage() {
    return (
        <div className="container py-5">
            <p className="section-label">AI</p>
            <h1 className="section-title">Common Model Architectures</h1>
            <hr className="section-rule" />

            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <p className="mb-3">
                        Most AI systems you&apos;ll encounter are built on a handful of well-known
                        neural network architectures. Each is shaped by the kind of data it was
                        designed to process. (Generative Adversarial Networks and Variational
                        Autoencoders are covered in depth on the{" "}
                        <a href="/ai/gans">Generative AI Models</a> page.)
                    </p>

                    <div className="row">
                        <div className="col-md-6">
                            <h5>Transformer</h5>
                            <p className="mb-2">The architecture behind modern LLMs (GPT, Claude, Llama) — processes an entire sequence at once using self-attention rather than one token at a time.</p>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><strong>Self-Attention:</strong> Weighs the relevance of every other token when encoding each token.</li>
                                <li className="list-group-item"><strong>Parallelizable:</strong> Unlike RNNs, processes sequences in parallel — key to training at scale.</li>
                                <li className="list-group-item"><strong>Use Cases:</strong> Language models, translation, code generation, multimodal models.</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h5>Convolutional Neural Network (CNN)</h5>
                            <p className="mb-2">Applies learned filters across an image to detect local patterns — edges, textures, shapes — building up to higher-level features in deeper layers.</p>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><strong>Convolution + Pooling:</strong> Filters scan the input; pooling layers reduce dimensionality.</li>
                                <li className="list-group-item"><strong>Spatial Awareness:</strong> Well suited to grid-like data such as images.</li>
                                <li className="list-group-item"><strong>Use Cases:</strong> Image classification, object detection, medical imaging.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6">
                            <h5>Recurrent Neural Network (RNN) / LSTM</h5>
                            <p className="mb-2">Processes sequences step by step, carrying a hidden state forward — LSTMs (Long Short-Term Memory) add gating to retain context over longer sequences.</p>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><strong>Sequential Processing:</strong> Each step depends on the previous one, unlike Transformers.</li>
                                <li className="list-group-item"><strong>Memory Gating (LSTM/GRU):</strong> Controls what information to keep or forget over time.</li>
                                <li className="list-group-item"><strong>Use Cases:</strong> Time series forecasting, speech recognition — largely superseded by Transformers for language.</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h5>Autoencoder</h5>
                            <p className="mb-2">Learns to compress input into a smaller latent representation, then reconstruct it — the reconstruction error itself becomes a useful signal.</p>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><strong>Encoder / Decoder:</strong> Compress to a bottleneck, then reconstruct from it.</li>
                                <li className="list-group-item"><strong>Unsupervised:</strong> Learns structure from data without labels.</li>
                                <li className="list-group-item"><strong>Use Cases:</strong> Dimensionality reduction, denoising, anomaly detection.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6">
                            <h5>Diffusion Model</h5>
                            <p className="mb-2">Learns to reverse a gradual noising process — starting from pure noise and iteratively denoising it into a coherent image or sample.</p>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><strong>Forward Process:</strong> Training data is progressively corrupted with noise.</li>
                                <li className="list-group-item"><strong>Reverse Process:</strong> The model learns to undo that noise, step by step.</li>
                                <li className="list-group-item"><strong>Use Cases:</strong> Image generation (Stable Diffusion, DALL·E), audio synthesis.</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <h5>Foundation Model / LLM</h5>
                            <p className="mb-2">A large Transformer pre-trained on broad data, then adapted (fine-tuned or prompted) to many downstream tasks instead of being trained from scratch each time.</p>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><strong>Pre-training + Adaptation:</strong> One expensive general-purpose training run, many cheap task-specific adaptations.</li>
                                <li className="list-group-item"><strong>Emergent Behavior:</strong> Capabilities like reasoning or in-context learning appear at scale.</li>
                                <li className="list-group-item"><strong>Use Cases:</strong> Chat assistants, summarization, code generation, agents.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

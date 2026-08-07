const Gans = () => {
    return (
        <div className="container py-5">
            <p className="section-label">AI</p>
            <h1 className="section-title">Generative AI Models</h1>
            <hr className="section-rule" />

            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h5>Generative Adversarial Networks (GANs)</h5>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong>Structure:</strong> GANs consist of two parts, the Generator and the Discriminator, which work together in a competitive manner to create realistic data.</li>
                        <li className="list-group-item"><strong>Functionality:</strong> The Generator creates data, and the Discriminator evaluates it, providing feedback to improve the Generator&apos;s output until it becomes indistinguishable from real data.</li>
                        <li className="list-group-item"><strong>Applications:</strong> GANs are versatile and can be used in various fields, such as designing car wheels for Audi, creating visual effects in films, and generating synthetic data for financial fraud detection.</li>
                    </ul>
                </div>
            </div>

            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h5>Variational Autoencoder (VAE)</h5>
                    <p className="mb-3">A Variational Autoencoder (VAE) is a type of generative AI model used for tasks like anomaly detection.</p>
                    <ul className="list-group list-group-flush mb-3">
                        <li className="list-group-item"><strong>Structure:</strong> A VAE consists of two main parts — the encoder compresses input data into a smaller, latent representation; the decoder then reconstructs the original data from that compressed representation.</li>
                        <li className="list-group-item"><strong>Functionality:</strong> By training on a dataset of normal data, a VAE learns to recognize what &quot;normal&quot; looks like. When it encounters data that deviates from this norm, it identifies it as an anomaly.</li>
                    </ul>
                    <p className="mb-2"><strong>Applications:</strong></p>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong>Financial Transactions:</strong> Detecting fraud.</li>
                        <li className="list-group-item"><strong>Manufacturing:</strong> Spotting defects in products.</li>
                        <li className="list-group-item"><strong>Healthcare:</strong> Identifying anomalies in medical imaging.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Gans;


import './page.scss'

const Gans = () => {
    return (
        <div className="container py-5">
            <p className="section-label">AI</p>
            <h1 className="section-title">Generative AI Models</h1>
            <hr className="section-rule" />

            <div className="card mb-4">
                <div className="card-body">
                    <h3 style={{ color: '#0f172a', fontWeight: 700, marginBottom: '1rem' }}>Generative Adversarial Networks (GANs)</h3>
                    <p><strong>GAN Structure:</strong> GANs consist of two parts, the Generator and the Discriminator, which work together in a competitive manner to create realistic data.</p>
                    <p><strong>Applications:</strong> GANs are versatile and can be used in various fields, such as designing car wheels for Audi, creating visual effects in films, and generating synthetic data for financial fraud detection.</p>
                    <p><strong>Functionality:</strong> The Generator creates data, and the Discriminator evaluates it, providing feedback to improve the Generator&apos;s output until it becomes indistinguishable from real data.</p>
                </div>
            </div>

            <div className="card mb-4">
                <div className="card-body">
                    <h3 style={{ color: '#0f172a', fontWeight: 700, marginBottom: '1rem' }}>Variational Autoencoder (VAE)</h3>
                    <p>A Variational Autoencoder (VAE) is a type of generative AI model used for tasks like anomaly detection.</p>
                    <p><strong>Structure:</strong> A VAE consists of two main parts: the encoder and the decoder. The encoder compresses input data into a smaller, latent representation. The decoder then reconstructs the original data from this compressed representation.</p>
                    <p><strong>Functionality:</strong> By training on a dataset of normal data, a VAE learns to recognize what &quot;normal&quot; looks like. When it encounters data that deviates from this norm, it identifies it as an anomaly.</p>
                    <p><strong>Applications:</strong> VAEs are used in various fields, such as:</p>
                    <ul>
                        <li><strong>Financial Transactions:</strong> Detecting fraud.</li>
                        <li><strong>Manufacturing:</strong> Spotting defects in products.</li>
                        <li><strong>Healthcare:</strong> Identifying anomalies in medical imaging.</li>
                    </ul>
                    <p>In essence, VAEs are powerful tools for detecting unusual patterns in data, making them valuable for tasks requiring high accuracy in anomaly detection.</p>
                </div>
            </div>
        </div>
    );
}

export default Gans;


import './page.scss'



const Gans = () => {

    return (
        <>
            <div className="row mt-4">
                <h2 className='text-left py-3 rounded'>Generative Adversarial Networks (GANs)</h2>
                <strong>GAN Structure:</strong> GANs consist of two parts, the Generator and the Discriminator, which work together in a competitive manner to create realistic data.
                <strong>Applications: </strong>GANs are versatile and can be used in various fields, such as designing car wheels for Audi, creating visual effects in films, and generating synthetic data for financial fraud detection.
                <strong>Functionality: </strong>The Generator creates data, and the Discriminator evaluates it, providing feedback to improve the Generator's output until it becomes indistinguishable from real data.
            </div>
            <div>
                <h1>
                    Variational Autoencoder (VAE)
                </h1>
                <p>
                    A Variational Autoencoder (VAE) is a type of generative AI model used for tasks like anomaly detection. Here's a simplified explanation:
                    Structure: A VAE consists of two main parts: the encoder and the decoder.

                    The encoder compresses input data into a smaller, latent representation.
                    The decoder then reconstructs the original data from this compressed representation.

                    Functionality: By training on a dataset of normal data, a VAE learns to recognize what "normal" looks like. When it encounters data that deviates from this norm, it identifies it as an anomaly.

                    Applications: VAEs are used in various fields, such as:

                    Financial Transactions: Detecting fraud.
                    Manufacturing: Spotting defects in products.
                    Healthcare: Identifying anomalies in medical imaging.

                    In essence, VAEs are powerful tools for detecting unusual patterns in data, making them valuable for tasks requiring high accuracy in anomaly detection.Í
                </p>
            </div>
        </>)
}

export default Gans;
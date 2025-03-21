import './page.scss'


const AiPage = () => {

   
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

    return (
        <div className="">
             <h1 className="p-2 mb-5 bg-light rounded">AI Main Concepts</h1>           
            {getConcepts()}          
        </div>
    )
}


export default AiPage;
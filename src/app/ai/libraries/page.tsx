
import './page.scss'


const AiPage = () => {
   
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

   
    return (
        <div className="">
            <h1 className="p-2 mb-5 bg-light rounded">AI Libraries</h1>
          
            {getLibraries()}
        </div>
    )
}


export default AiPage;
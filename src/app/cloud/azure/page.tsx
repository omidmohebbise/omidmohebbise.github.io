import CloudServicesList from '../CloudServiceLevel';
import { azureServices } from './data.js';

export default function Azure() {
    return (
        <div className="container py-5">
            <p className="section-label">Cloud</p>
            <h1 className="section-title">Azure Services</h1>
            <hr className="section-rule" />
            <CloudServicesList categories={azureServices} />
        </div>
    );
}

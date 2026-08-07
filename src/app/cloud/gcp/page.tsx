import CloudServicesList from '../CloudServiceLevel';
import { gcpServices } from './data.js';

export default function GCP() {
    return (
        <div className="container py-5">
            <p className="section-label">Cloud</p>
            <h1 className="section-title">GCP Services</h1>
            <hr className="section-rule" />
            <CloudServicesList categories={gcpServices} />
        </div>
    );
}

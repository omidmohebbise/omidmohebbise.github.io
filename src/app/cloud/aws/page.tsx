import CloudServicesList from '../CloudServiceLevel';
import { awsServices } from './data.js';

export default function AWS() {
    return (
        <div className="container py-5">
            <p className="section-label">Cloud</p>
            <h1 className="section-title">AWS Services</h1>
            <hr className="section-rule" />
            <CloudServicesList categories={awsServices} />
        </div>
    );
}

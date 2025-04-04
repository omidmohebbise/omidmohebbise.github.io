
import { gcpServices } from './data.js';
export default function GCP() {
    return <div className="container my-4">
        <h2 className="">GCP Services</h2>
        {gcpServices.map(categoryAndService =>
            <div className="service-category px-3">
                <h4 className='py-3'>{categoryAndService.title}</h4>
                <ul className="list-group service-list">
                    {categoryAndService.services.map(service =>
                        <li className={"list-group-item " + service.level}>
                            <strong>{service.title}</strong> {service.description}
                        </li>
                    )}
                </ul>
            </div>
        )}
    </div>
}
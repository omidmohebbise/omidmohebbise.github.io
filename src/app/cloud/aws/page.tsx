import './page.css'
import { awsServices } from './data.js';

export default function AWS() {

    return <div className="container my-4">
        <h2 className=""> Aws Services</h2>
        {awsServices.map(categoryAndService =>
            <div className="service-category">
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
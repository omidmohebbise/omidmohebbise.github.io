import { azureServices } from './data.js';
export default function Azure() {
    return <div className="container my-4">
        <h2 className="">Azure Services</h2>
        {azureServices.map(categoryAndService =>
            <div className="service-category px-3" key={categoryAndService.title}>
                <h4 className='py-3'>{categoryAndService.title}</h4>
                <ul className="list-group service-list">
                    {categoryAndService.services.map(service =>
                        <li className={"list-group-item " + service.level} key={service.title}>
                            <strong>{service.title}</strong> {service.description}
                        </li>
                    )}
                </ul>
            </div>
        )}
    </div>
}
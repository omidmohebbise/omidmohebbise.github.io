import React from 'react';
import data from './data.json';

interface ClassItem {
    [key: string]: string | number;
}

interface LibraryItem {
    library: string;
    provider: string;
    classes: ClassItem[];
    id: string; // Add unique identifier
}

const CommonLibraries = () => {
    const javaLibs: LibraryItem[] = data as unknown as LibraryItem[];
    return (
        <div className="container py-5">
            {javaLibs.map((item: LibraryItem, index:number) => (
                <div key={index} className="card shadow-sm mb-5">
                    <div className="card-header bg-primary text-white">
                        <h2 className="h4 mb-0">{item.library}</h2>
                    </div>
                    <div className="card-body">
                        <h4 className="h5 text-muted mb-4">Provider: {item.provider}</h4>

                        <div>
                            <h3 className="h5 text-primary mb-4">Available Classes</h3>
                            <div className="row">
                                {item.classes.map((classItem, i) => (
                                    <div key={i} className="col-md-6 mb-4">
                                        <div className="card h-100 border-light">
                                            <div className="card-body">
                                                {Object.entries(classItem).map(([key, value1]) => (
                                                    <div key={key} className="mb-3">
                                                        <h5 className="h6 text-secondary">{key}</h5>
                                                        <p className="text-muted small mb-0">{value1}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CommonLibraries;
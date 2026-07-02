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
            <p className="section-label">Development</p>
            <h1 className="section-title">Common Java Libraries</h1>
            <hr className="section-rule" />
            {javaLibs.map((item: LibraryItem, index:number) => (
                <div key={index} className="card shadow-sm mb-5">
                    <div className="card-body">
                        <h2 className="h4 mb-1" style={{ color: '#1e293b' }}>{item.library}</h2>
                        <h4 className="h5 mb-4" style={{ color: '#475569' }}>Provider: {item.provider}</h4>

                        <div>
                            <h3 className="h5 mb-4" style={{ color: '#2563eb' }}>Available Classes</h3>
                            <div className="row">
                                {item.classes.map((classItem, i) => (
                                    <div key={i} className="col-md-6 mb-4">
                                        <div className="card h-100 border-light">
                                            <div className="card-body">
                                                {Object.entries(classItem).map(([key, value1]) => (
                                                    <div key={key} className="mb-3">
                                                        <h5 className="h6" style={{ color: '#475569' }}>{key}</h5>
                                                        <p className="small mb-0" style={{ color: '#94a3b8' }}>{value1}</p>
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

"use client";

import React, { useState } from 'react';



export default function CloudPage() {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <>
            <div className="row pt-4">
                <div className="col text-center">
                    <div className="bg-light p-4 active" onClick={() => setActiveTab(0)}> <h1>AWS</h1> </div>
                </div>
                <div className="col text-center">
                    <div className="bg-light p-4" onClick={() => setActiveTab(1)}> <h1>Azure</h1> </div>
                </div>
                <div className="col text-center">
                    <div className="bg-light p-4" onClick={() => setActiveTab(2)}> <h1>Google Cloud</h1> </div>
                </div>
            </div>

            <div className="row pt-4">
                {activeTab === 0 &&
                    <>
                        <div className="col-2">
                            <ul>
                                <li>
                                    EC2
                                </li>
                            </ul>
                        </div>
                        <div className="col">
                            EC2 Description
                        </div>
                    </>}
            </div>

        </>

    )
}
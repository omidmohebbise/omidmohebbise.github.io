

import React from 'react';



export default function CloudPage() {

    return (
        <>
            <div className="row pt-4 gy-5">
                <div className="col text-center">
                    <div className="bg-light p-4 text-decoration-none" > <a href='/cloud/aws'><h1>AWS</h1></a> </div>
                </div>
                <div className="col text-center">
                    <div className="bg-light p-4 text-decoration-none" > <a href='/cloud/azure'><h1>Azure</h1> </a></div>
                </div>
                <div className="col text-center">
                    <div className="bg-light p-4 text-decoration-none" > <a href='/cloud/gcp'><h1>Google Cloud</h1></a> </div>
                </div>
            </div>

        </>

    )
}
"use client"

import { useState } from 'react'
import Image from 'next/image'

const PageStates = {
    Basic: 1,
    Intermediate: 2,
    Advanced: 3,
    Experts: 4
}

export default function SoftSkillPage() {

    const [pageState, setPageState] = useState(PageStates.Basic)

    const getBasic = () => {
        return <>
            <div className=" mt-4">
                <section className='bg-light m-1 p-2'>
                    <h5>What is Kubernetes?</h5>
                    Kubernetes is an open-source platform designed to automate deploying, scaling, and operating application containers

                </section>

                <section className='bg-light m-1 p-2'>
                    <h5>Explain Kubernetes Architecture.</h5>
                    Kubernetes is an open-source container deployment and administration platform. It offers container orchestration, container runtime, container-centric infrastructure orchestration, balance of load, self-healing mechanisms, and service discovery. A Kubernetes cluster has several control planes and one or more worker nodes.
                    <Image
                        src="./img/image.png"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                    />
                    
                </section>
            </div>

        </>
    }

    const getIntermediate = () => {
        return <>
            <div className='pt-2 row'>


            </div >
        </>
    }

    const getAdvanced = () => {
        return <>
            <div> <div className="container mt-3">


            </div></div>
        </>
    }

    const getExpert = () => {
        return <>
            <div>

            </div>
        </>
    }

    return (
        <div className="">
            <h3 className='py-3'> K8s Interview Questions:</h3>
            <div className='row m-0' >
                {Object.keys(PageStates)
                    .map(x => <div className="text-center col-3 p-1" key={PageStates[x]}>
                        <div role="button" className={pageState === PageStates[x] ? 'bg-light p-3' : "p-3 border-bottom"} onClick={() => setPageState(PageStates[x])}>{x}</div>
                    </div>)}
            </div>
            {pageState === PageStates.Basic && getBasic()}
            {pageState === PageStates.Intermediate && getIntermediate()}
            {pageState === PageStates.Advanced && getAdvanced()}
            {pageState === PageStates.Experts && getExpert()}
        </div>
    )
}
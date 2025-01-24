
import Link from 'next/link'

const CURRENT_PATH = "/software/deployment/k8s/iqs"
const PageStates = {
    Basic: "/",
    Intermediate: "#/intermediate",
    Advanced: "/advanced",
    Experts: "/expert"
}

export default function SoftSkillPage() {
    
    return (
        <div className="">
            <h3 className='py-3'> K8s Interview Questions:</h3>
            <div className='row m-0' >
                {Object.keys(PageStates)
                    .map(x => <div className="text-center col-3 p-1" key={PageStates[x]}>
                        <div role="button" className={ "p-3 border-bottom"} >
                            <Link href={CURRENT_PATH+ PageStates[x]}>{x}</Link>
                            </div>
                    </div>)}
            </div>
            <div className=" mt-4">
                no content
            </div>

        </div>
    )
}
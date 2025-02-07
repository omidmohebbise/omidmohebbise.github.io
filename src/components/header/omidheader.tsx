
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

export default function OmidHeader() {

    return (
        <section className="bg-light p-2">

            <div className="row ">
                <div className="  col-sm-12  col-md-6 col-lg-6 ">
                    <h1 className="text">O.Mohebbi</h1>
                    <h6 className="text-secondary ">Senior Software Engineer / Solution Architect</h6>
                </div>
                <div className="text-sm-start  col-6 ">
                    {/* <div className="row">
                        <section className="p-2 col-sm-12 col-md-6 col-6">Email: <a href="">omidmohebbise@gmail.com</a></section>
                        <section className="p-2  col-sm-12 col-md-6 col-6">LinkedIn: <a href="" target="_blank">Omid Mohebbi on LinkedIn</a></section>
                    </div>
                    <div className="row">
                        <section className="p-2 col-sm-12 col-md-6 col-6">Web: <a href="https://omidmohebbi.ir" target="_blank">http://omidmohebbi.ir</a></section>
                        <section className="p-2 col-sm-12 col-md-6 col-6">GitHub: <a href="" target="_blank">github.com/omidmohebbise</a></section>
                    </div> */}

                    <div className=" flex justify-content-sm-start justify-content-md-end space-x-4 align-items-end h-100">
                        <a href="https://www.linkedin.com/in/omidmohebbise" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="w-6 h-6 text-blue-600 hover:text-blue-800" />
                        </a>
                        <a href="mailto:omidmohebbise@gmail.com">
                            <Mail className="w-6 h-6 text-red-500 hover:text-red-700" />
                        </a>
                        <a href="https://www.github.com/omidmohebbise" target="_blank" rel="noopener noreferrer">
                            <Github className="w-6 h-6 text-gray-800 hover:text-gray-900" />
                        </a>
                        <a href="https://x.com/omid_mohebbi_se" target="_blank" rel="noopener noreferrer">
                            <Twitter className="w-6 h-6 text-blue-400 hover:text-blue-600" />
                        </a>
                    </div>
                </div>
            </div>


        </section>
    )
}
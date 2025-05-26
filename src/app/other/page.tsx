

const OtherPage: React.FC = () => {

    const cssString: string = "col-12 radius bg-light my-2 p-2"
    return (

        <div className="row">
            <div className={cssString}>
                <a href="/other/lang/english"> English</a> <br/>
                <a href="/other/lang/dutch"> Dutch</a> 
            </div>
            <div className={cssString}>
                <a href="/other/chapter-lead-vs-tech-lead">Chapter lead vs Tech Lead</a>
            </div>
        </div>
    )

}

export default OtherPage;
export default function NavBar() {
    return (
        <>
            <div className="row">
                <div className="col">

                    <nav>
                        <ul>
                            <li><a href="/">Portfolio</a></li>
                            <li><a href="/tech-news">Tech News</a></li>
                            <li><a href="/cloud">Cloud </a></li>
                            <li><a href="/ai">AI</a></li>
                            <li><a href="/gallery">Gallery</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div>
                <header>
                    <div className="">
                        <h1>O.Mohebbi</h1>
                        <div className="px-3">Senior Software Engineer</div>
                    </div>
                </header>
            </div>
        </>
    )
}
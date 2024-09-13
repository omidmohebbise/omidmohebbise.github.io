export default function NavBar() {
    return (
        <div className="row">
            <div className="col">
                <header>
                    <div className="">
                        <h1>Omid Mohebbi</h1>
                        <p>Senior Software Engineer</p>
                    </div>
                </header>
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
    )
}
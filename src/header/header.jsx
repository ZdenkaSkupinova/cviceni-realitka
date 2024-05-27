import "./header.css"

export const Header = (props) => {
    return (
        <header>
            <h1 className ="add-title">{props.addTitle}</h1>
            <h2 className="novinky">novinky v nabídce</h2>
                <nav id="nav" className="dum">
                    <a href="/dum01">dům 1</a>
                    <a href="/dum02">dům 2</a>
                    <a href="/dum03">dům 3</a>
                    <a href="/dum04">dům 4</a>
                </nav>
        </header>
    )
}
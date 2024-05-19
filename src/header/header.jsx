import "./header.css"
export const Header = (props) => {
    return (
        <header>
            <h1 className ="add-title">{props.addTitle}</h1>
                <nav id="nav">
                    <a href="/dum01">dům 1</a>
                    <a href="/dum02">dům 2</a>
                    <a href="/dum03">dům 3</a>
                    <a href="/dum04">dům 4</a>
                </nav>
        </header>
    )
}
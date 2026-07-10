export default function Header() {
    return <>
        <header className="topbar">
            <div className="container topbar__inner">
                <a className="brand" href="index.html" aria-label="WEG Academy - Página inicial">
                    <img className="brand__logo" src="logo-weg.png" alt="WEG" />
                    <span className="brand__text">Academy</span>
                </a>

                <nav className="nav" aria-label="Navegação principal">
                    <a href="#programas">Programas</a>
                    <a href="#filtros">Categorias</a>
                </nav>
            </div>
        </header>
    </>
}
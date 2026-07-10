export default function Header() {
    return <>
        <header Class="border-b border-slate-200 bg-white">
            <div Class="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between">
                <a href="./index.html" Class="flex items-center gap-3" aria-label="Página inicial WEG Academy">
                    <img src="./assets/img/logo-weg.png" alt="Logo WEG" Class="h-8 w-auto">
                        <span Class="text-sm font-bold text-weg-dark">Academy</span>
                </a>

                <nav Class="flex items-center gap-2 text-sm font-semibold text-slate-600" aria-label="Navegação principal">
                    <a href="./index.html" Class="rounded-full bg-weg-light px-3 py-2 text-weg-dark">Cursos</a>
                    <a href="./sobre.html" Class="rounded-full px-3 py-2 hover:bg-slate-100">Sobre a WEG</a>
                </nav>
            </div>
        </header>
    </>
}
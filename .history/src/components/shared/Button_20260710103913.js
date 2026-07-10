export default function Footer({ href, color }) {

    buttonClassName = ""

    if (color === "blue") {

    } else {

    }

    return <>
        <a href={href} className="rounded-full bg-weg-blue px-5 py-3 text-sm font-bold text-white hover:bg-weg-dark">Explorar cursos</a>
        <a href="sobre" className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-weg-dark hover:bg-slate-50">Conhecer a WEG</a>
    </>
}
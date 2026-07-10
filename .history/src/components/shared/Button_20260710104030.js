export default function Footer({ href, color }) {

    let buttonClassName;

    if (color === "blue") {
        buttonClassName = "bg-weg-blue text-white hover:bg-weg-dark"
    } else {
        buttonClassName = "border border-slate-300 bg-white"
    }

    return <>
        <a href={href} className="rounded-full px-5 py-3 text-sm font-bold ">Explorar cursos</a>
        <a href="sobre" className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-weg-dark hover:bg-slate-50">Conhecer a WEG</a>
    </>
}
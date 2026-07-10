export default function Footer({ href, color }) {

    let buttonClassName;

    if (color === "blue") {
        buttonClassName = "bg-weg-blue text-white hover:bg-weg-dark"
    } else {
        buttonClassName = "border border-slate-300 bg-white text-weg-dark hover:bg-slate-50"
    }

    return <>
        <a href={href} className={"rounded-full px-5 py-3 text-sm font-bold " + buttonClassName}>Explorar cursos</a>
        <a href="sobre" className={"rounded-full px-5 py-3 text-sm font-bold " + buttonClassName}>Conhecer a WEG</a>
    </>
}
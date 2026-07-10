import Link from "next/link";

export default function Button({children, href, color, className}) {

    let buttonClassName;

    if (color === "blue") {
        buttonClassName = "bg-weg-blue text-white hover:bg-weg-dark"
    } else {
        buttonClassName = "border border-slate-300 bg-white text-weg-dark hover:bg-slate-50"
    }

    return <>
        <Link href={href} className={"rounded-full px-5 py-3 text-sm font-bold " + buttonClassName + " "}>{children}</Link>
    </>
}
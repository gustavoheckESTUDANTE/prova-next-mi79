"use client";

import Image from "next/image";
import { useState } from "react";

const buttonNavStates = Object.freeze({
    COURSES:"COURSES",
    ABOUT:"ABOUT",
    NONE:"NONE"
});

export default function Header() {

    const [buttonState, setButtonState] = useState(buttonNavStates.COURSES);

    console.log(buttonState)

    let cursosButtonClassName;
    let aboutButtonClassName;

    if (buttonState === buttonNavStates.COURSES) {
        cursosButtonClassName = "bg-weg-light text-weg-dark"
        aboutButtonClassName = "hover:bg-slate-100"
    } else if (buttonState === buttonNavStates.ABOUT) {
        cursosButtonClassName = "hover:bg-slate-100"
        aboutButtonClassName = "bg-weg-light text-weg-dark"
    } else {
        cursosButtonClassName = "hover:bg-slate-100"
        aboutButtonClassName = "hover:bg-slate-100"
    }

    return <>
        <header className="border-b border-slate-200 bg-white">
            <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between">
                <a href="/" onClick={() => setButtonState(buttonNavStates.COURSES) console.log("")} className="flex items-center gap-3" aria-label="Página inicial WEG Academy">
                    <Image src="/img/logo-weg.png" width={200} height={200} alt="Logo WEG" className="h-8 w-auto"></Image>
                        <span className="text-sm font-bold text-weg-dark">Academy</span>
                </a>

                <nav className="flex items-center gap-2 text-sm font-semibold text-slate-600" aria-label="Navegação principal">
                    <a href="/" onClick={() => setButtonState(buttonNavStates.COURSES)} className={"rounded-full px-3 py-2 " + cursosButtonClassName}>Cursos</a>
                    <a href="sobre" onClick={() => setButtonState(buttonNavStates.ABOUT)} className={"rounded-full px-3 py-2 " + aboutButtonClassName}>Sobre a WEG</a>
                </nav>
            </div>
        </header>
    </>
}
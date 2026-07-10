'use client';

import Image from "next/image";
import { useState } from "react";

const buttonNavStates = Object.freeze({
    COURSES:"COURSES",
    ABOUT:"ABOUT",
    NONE:"NONE"
});

export default function Header() {

    const [buttonState, setButtonState] = useState(buttonNavStates.COURSES);

    if (buttonState == buttonNavStates.COURSES) {
        
    }

    return <>
        <header className="border-b border-slate-200 bg-white">
            <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between">
                <a href="/" onClick={() => setButtonState(buttonNavStates.COURSES)} className="flex items-center gap-3" aria-label="Página inicial WEG Academy">
                    <Image src="./assets/img/logo-weg.png" width={80} height={80} alt="Logo WEG" className="h-8 w-auto"> </Image>
                        <span className="text-sm font-bold text-weg-dark">Academy</span>
                </a>

                <nav className="flex items-center gap-2 text-sm font-semibold text-slate-600" aria-label="Navegação principal">
                    <a href="/" onClick={() => setButtonState(buttonNavStates.COURSES)} className="rounded-full bg-weg-light px-3 py-2 text-weg-dark">Cursos</a>
                    <a href="/sobre.html" onClick={() => setButtonState(buttonNavStates.ABOUT)} className="rounded-full px-3 py-2 hover:bg-slate-100">Sobre a WEG</a>
                </nav>
            </div>
        </header>
    </>
}
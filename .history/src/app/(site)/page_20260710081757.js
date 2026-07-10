export default function HomePage() {
    <>
        <section class="border-b border-slate-200 bg-slate-50">
            <div class="mx-auto max-w-6xl px-4 py-16">
                <div class="max-w-3xl">
                    <p class="mb-3 text-xs font-extrabold uppercase tracking-[0.16em] text-weg-blue">Plataforma de cursos técnicos</p>
                    <h1 class="text-4xl font-extrabold tracking-tight text-weg-dark md:text-6xl">
                        Aprendizagem para quem transforma tecnologia em indústria
                    </h1>
                    <p class="mt-5 max-w-2xl text-base leading-7 text-slate-600">
                        A WEG Academy reúne cursos e formações voltados para automação, acionamentos,
                        eficiência energética, eletricidade industrial e soluções aplicadas ao mundo do trabalho.
                    </p>
                    <div class="mt-8 flex flex-wrap gap-3">
                        <a href="#cursos" class="rounded-full bg-weg-blue px-5 py-3 text-sm font-bold text-white hover:bg-weg-dark">Explorar cursos</a>
                        <a href="./sobre.html" class="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-weg-dark hover:bg-slate-50">Conhecer a WEG</a>
                    </div>
                </div>
            </div>
        </section>

        <section class="mx-auto max-w-6xl px-4 py-14" id="cursos">
            <div class="mb-8 max-w-2xl">
                <p class="mb-2 text-xs font-extrabold uppercase tracking-[0.16em] text-weg-blue">Catálogo</p>
                <h2 class="text-3xl font-extrabold tracking-tight text-weg-dark">Cursos disponíveis</h2>
                <p class="mt-3 text-sm leading-6 text-slate-600">
                    Os cards abaixo estão estáticos e mockados na base HTML. Na versão em Next.js,
                    eles deverão ser renderizados a partir da API/JSON, exibindo apenas a categoria <strong>Cursos</strong>.
                </p>
            </div>
        </>
}
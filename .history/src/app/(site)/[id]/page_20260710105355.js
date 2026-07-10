import GetById from "@/services/GetById";

export default async function userLoaded({ params }) {

    const { id } = await params;

    const curso = await GetById(id)

    const precoFormatado = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(curso.preco);

    return <>
        <section className="border-b border-slate-200 bg-slate-50">
            <div className="mx-auto max-w-6xl px-4 py-12">
                <Link href="/" className="text-sm font-extrabold text-weg-blue hover:text-weg-dark">← Voltar para cursos</Link>

                <div className="mt-8 grid gap-8 md:grid-cols-[1.35fr_0.65fr]">
                    <div>
                        {
                            curso.destaque && <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.16em] text-weg-blue">Curso em destaque</p>
                        }
                        <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-weg-dark md:text-6xl">{curso.nome}</h1>
                        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
                            {curso.descricao}
                        </p>

                        <div className="mt-6 flex flex-wrap gap-2 text-xs font-bold text-slate-600">
                            <span className="rounded-full bg-white px-3 py-1">Categoria: {curso.categoria}</span>
                            <span className="rounded-full bg-white px-3 py-1">{curso.data}</span>
                            <span className={"rounded-full px-3 py-1 " + + (curso.vagas_disponiveis > 10 ? "bg-white" : "bg-amber-50 text-amber-700")}>{curso.vagas_disponiveis} vagas disponíveis</span>
                        </div>
                    </div>

                    <aside className="rounded-2xl border border-slate-200 bg-white p-6">
                        <h2 className="text-xl font-bold text-weg-dark">Informações do curso</h2>
                        <p className="mt-4 text-sm leading-6 text-slate-600"><strong> Local:</strong>{curso.local}</p>
                        <p className="mt-2 text-sm leading-6 text-slate-600"><strong> Identificador:</strong>{curso.id}</p>
                        <p className="mt-5 text-3xl font-extrabold tracking-tight text-weg-dark">{precoFormatado}</p>
                        <Link href="/" className="mt-6 inline-flex rounded-full bg-weg-blue px-5 py-3 text-sm font-bold text-white hover:bg-weg-dark">Tenho interesse</a>
                    </aside>
                </div>
            </div>
        </section>
    </>
}
import Image from "next/image";

export default function UserCard({curso}) {
    return <>
        <footer className="border-t border-slate-200 bg-white">
            <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                <Image src={curso.imagem} width={200} height={200} alt={`Imagem placeholder do curso ${curso.nome}`} className="h-44 w-full object-cover"></Image>
                    <div className="p-5">
                        
                        <h3 className="mt-4 text-xl font-bold leading-tight text-weg-dark">{curso.nome}</h3>
                        <p className="mt-3 text-sm leading-6 text-slate-600">{curso.descricao}</p>

                        <div className="mt-4 flex flex-wrap gap-2 text-xs font-bold text-slate-600">
                            <span className="rounded-full bg-slate-100 px-3 py-1">{curso.preco}</span>
                            <span className="rounded-full bg-slate-100 px-3 py-1">{curso.data}</span>
                            <span className={"rounded-full px-3 py-1 " + (curso.vagas_disponiveis > 10 ? "bg-slate-100" : "bg-amber-50 text-amber-700")}>{curso.vagas_disponiveis}</span>
                        </div>

                        <p className="mt-4 text-sm text-slate-500">{curso.local}</p>
                        <a href={`/${curso.id}`} className="mt-5 inline-flex text-sm font-extrabold text-weg-blue hover:text-weg-dark">Ver detalhes</a>
                    </div>
            </article>
        </footer>
    </>
}
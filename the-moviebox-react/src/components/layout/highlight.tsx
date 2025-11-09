export function Highlight() {
    return (
        <section className="relative flex bg-[url('../../../public/img/etT14XfDEqhQZdD47ywpyihXPyW.jpg')] bg-position-[left_calc((50vw-170px)-340px)_top] bg-cover">
            <div className="absolute top-0 left-0 w-full h-full z-1 bg-linear-to-r from-[#111111] from-[calc((50vw-70px)-340px)] via-[#111111b3] via-1/2 to-[#111111b3]"></div>

            <div className="relative z-2 flex gap-8 py-8 container mx-auto">
                <img className="rounded-lg"
                     src="../../../public/img/q5pXRYTycaeW6dEgsCrd4mYPmxM.jpg"
                />

                <div className="flex flex-col">
                    <h2 className="text-[2.5rem] font-normal">Como Treinar o Seu Dragão</h2>

                    <div className="text-[0.8rem] my-[0.6rem]">
                        <span className="bg-white/20 px-[0.8rem] py-[0.3rem] rounded-[20px]">Fantasia</span>
                        <span className="bg-white/20 px-[0.8rem] py-[0.3rem] rounded-[20px]">Família</span>
                        <span className="bg-white/20 px-[0.8rem] py-[0.3rem] rounded-[20px]">Ação & Aventura</span>
                        <span className="pl-4 text-[#ccc]">2h 5m</span>
                    </div>

                    <div className="flex flex-col gap-0.5">
                        <h3 className="text-[1.5rem] font-normal p-12 pb-2">Sinopse</h3>
                        <p className="text-[#a0a0a0] text-[0.8rem]">
                        Em um mundo onde dragões e humanos coexistem, um jovem viking chamado
                        Soluço se torna amigo de um dragão ferido chamado Banguela. Juntos,
                        eles desafiam as tradições de suas tribos e descobrem que dragões não
                        são os monstros que todos acreditavam ser.
                        </p>
                    </div>

                    <div className="flex gap-4 my-6">
                        <button className="bg-[#e50914] hover:bg-[#b8070f] text-white border-none px-6 py-[0.8rem] rounded-sm font-bold transition-colors duration-300 cursor-pointer">Assistir</button>
                        <button className="bg-white/20 hover:bg-[rgba(255,255,255,0.3)] text-white border border-white/30 px-6 py-[0.8rem] rounded-sm transition-colors duration-300 cursor-pointer">Detalhes</button>
                        <button className="bg-white/20 hover:bg-[rgba(255,255,255,0.3)] text-white border border-white/30 px-6 py-[0.8rem] rounded-sm transition-colors duration-300 cursor-pointer">+ Adicionar à Lista</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
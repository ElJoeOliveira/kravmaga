import { WHATSAPP_URL } from "@/lib/constants";

export function FooterCTASection() {
  return (
    <section className="w-full bg-primary pt-32 pb-48 px-6 text-black flex flex-col justify-center items-center text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(45deg, #000 0, #000 2px, transparent 2px, transparent 10px)" }}></div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
         <div className="inline-block px-4 py-1 border-2 border-black font-display uppercase tracking-widest text-sm mb-8 font-bold">
          Diretriz Final
        </div>
        <h2 className="text-6xl md:text-8xl font-display font-black uppercase leading-[0.9] tracking-tighter mb-8">
          Sua reação amanhã <br/>
          Depende do <br/>treino de hoje.
        </h2>
        <p className="text-xl md:text-2xl font-bold font-display uppercase tracking-wide mb-12">
          Aceite a missão. Agende sua aula cortesia.
        </p>
        
        <a 
          href={WHATSAPP_URL} 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center font-display uppercase text-2xl font-bold tracking-widest px-12 py-6 bg-black text-primary hover:bg-white hover:text-black hover:scale-105 transition-all duration-300"
        >
          Quero Minha Aula Cortesia <span className="ml-4 font-normal">→</span>
        </a>
        <p className="mt-8 font-body uppercase tracking-widest text-sm font-semibold opacity-70">
          Acesso 100% gratuito. Início imediato.
        </p>
      </div>
    </section>
  );
}

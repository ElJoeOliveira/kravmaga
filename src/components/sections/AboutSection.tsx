import { Button } from "@/components/ui/Button";
import { WHATSAPP_URL } from "@/lib/constants";

export function AboutSection() {
  const principles = [
    "Ser o mais rápido",
    "Manter o peso na área de contato com o alvo",
    "Atingir os pontos críticos do corpo",
    "Evitar ser atingido",
    "Usar objetos ou ferramentas que estão por perto",
    "Alternar de defesa para ataque rapidamente",
    "Usar os reflexos naturais do corpo",
    "Ser objetivo (fugir ou bater)",
  ];

  return (
    <section id="sobre" className="w-full flex justify-center border-b border-border-dark bg-background">
      <div className="max-w-7xl w-full mx-auto flex flex-col xl:flex-row border-x border-border-dark">
        {/* Sobre o Krav Magá */}
        <div className="p-10 md:p-20 xl:w-1/2 flex flex-col border-b xl:border-b-0 xl:border-r border-border-dark">
          <div className="inline-block px-4 py-1 border border-border-dark text-text-muted font-display uppercase tracking-widest text-sm mb-8 w-max">
            A Origem
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold uppercase text-text-main mb-8">
            O que é o <span className="text-primary">Krav Magá?</span>
          </h2>
          <div className="flex flex-col gap-6 font-body text-text-muted text-lg leading-relaxed">
            <p>
              O Krav Magá é um sistema de defesa pessoal de origem israelense, baseado no combate corpo a corpo (full contact), conhecido pela sua objetividade e eficácia. Seu principal objetivo é garantir a proteção pessoal e a preservação da integridade dos praticantes.
            </p>
            <p>
              Considerado um dos métodos de autodefesa mais eficientes do mundo, é indicado para qualquer pessoa que deseja aprender a se defender contra ataques individuais ou em grupo, com ou sem armas. Sua prática envolve técnicas diretas, como socos, chutes, torções e golpes em pontos estratégicos do corpo do agressor, além de desenvolver autoconfiança, agilidade e flexibilidade.
            </p>
            <p>
              É amplamente utilizado por forças militares e de segurança em todo o mundo devido à facilidade de aprendizado, rapidez na aplicação e eficiência em situações reais. (Ex: CIA, FBI, SWAT, GIGN, GOE e forças de defesa de Israel).
            </p>
          </div>
        </div>

        {/* Princípios do Combate */}
        <div className="p-10 md:p-20 bg-surface xl:w-1/2 flex flex-col">
          <div className="mb-12">
            <h3 className="font-display text-4xl uppercase text-text-main mb-8">Os<br/>Princípios<br/><span className="text-primary">Sob Pressão</span></h3>
            <ul className="flex flex-col gap-0 font-display text-lg uppercase tracking-wide">
              {principles.map((principle, idx) => (
                <li key={idx} className="flex items-center gap-4 py-4 border-b border-border-dark last:border-0">
                  <span className="text-primary text-xl font-bold">{(idx + 1).toString().padStart(2, '0')}</span>
                  <span className="text-text-main">{principle}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-auto pt-8">
             <Button href={WHATSAPP_URL} variant="primary" className="w-full sm:w-auto">
              Quero Começar Agora <span className="ml-3">→</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

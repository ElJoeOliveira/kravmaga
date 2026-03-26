import { Button } from "@/components/ui/Button";
import { WHATSAPP_URL } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center brutal-border-b bg-surface">
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_center,var(--color-surface-elevated)_0%,var(--color-background)_100%)]"></div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-8 flex flex-col items-start gap-8 relative">
          <div className="inline-block px-4 py-1 border border-border-dark text-text-muted font-display uppercase tracking-widest text-sm mb-4">
            Defesa Pessoal • Sobrevivência Urbana
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-text-main uppercase leading-[0.9] tracking-tight">
            Não dependa da sorte <br/>
            <span className="text-primary">para se proteger.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-text-muted font-body max-w-2xl leading-relaxed mt-4">
            Treine Krav Magá em Ipatinga com o professor Diêgo Silva. Desenvolva segurança, reação e controle para lidar com situações reais de violência — mesmo que você nunca tenha treinado e independente da sua idade.
          </p>
          
          <div className="flex flex-col gap-3 mt-8 w-full sm:w-auto">
            <Button href={WHATSAPP_URL} className="w-full sm:w-auto">
              Agendar Aula Cortesia <span className="ml-3">→</span>
            </Button>
            <span className="text-sm font-body text-text-muted uppercase tracking-wider text-center sm:text-left mt-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary block"></span> Resposta rápida • Sem compromisso
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

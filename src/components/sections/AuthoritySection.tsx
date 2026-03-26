import { Button } from "@/components/ui/Button";
import { WHATSAPP_URL } from "@/lib/constants";

export function AuthoritySection() {
  return (
    <section className="w-full flex border-b border-border-dark flex-col lg:flex-row">
      <div className="p-10 md:p-20 bg-background lg:w-1/2 flex flex-col border-b lg:border-b-0 lg:border-r border-border-dark">
        <div className="inline-block px-4 py-1 border border-border-dark text-text-muted font-display uppercase tracking-widest text-sm mb-8 w-max">
          Dossiê: O Instrutor
        </div>
        <h2 className="text-4xl md:text-5xl font-display font-bold uppercase text-text-main mb-8">
          Diêgo <span className="text-primary">Silva</span>
        </h2>
        <div className="flex flex-col gap-3 font-body text-text-muted">
          <p className="uppercase font-display tracking-widest text-white mb-4">&gt; 16 Anos de Experiência</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm">
            <span className="border-b border-border-dark pb-2">Profissional Ed. Física (CREF 048410)</span>
            <span className="border-b border-border-dark pb-2">Filiado: FBKMK</span>
            <span className="border-b border-border-dark pb-2">Instrutor Int. Kapap</span>
            <span className="border-b border-border-dark pb-2">Instrutor de Tiro e Brigadista</span>
            <span className="border-b border-border-dark pb-2">Socorrista Avançado</span>
            <span className="border-b border-border-dark pb-2">Pedagogo & Letras Libras</span>
          </div>
        </div>
      </div>

      <div className="p-10 md:p-20 bg-surface lg:w-1/2 flex flex-col">
        <div className="mb-12">
          <h3 className="font-display text-3xl uppercase text-text-main mb-6">Operações & Estrutura</h3>
          <ul className="flex flex-col gap-4 font-body text-text-muted border-l-2 border-primary pl-6">
            <li><strong>Local:</strong> Galeria JG Center - Centro, Ipatinga</li>
            <li>Av. 28 de Abril, nº 621, Sala 403 (Ao lado da Igreja Católica)</li>
            <li className="mt-4"><strong className="text-text-main">Aulas em Grupo:</strong> Progressão contínua em equipe.</li>
            <li><strong className="text-text-main">Particulares:</strong> Evolução tática acelerada (Duplas ou Individual).</li>
            <li><strong className="text-text-main">Kids:</strong> Turmas especiais 8-13 anos.</li>
          </ul>
        </div>
        <div className="mt-auto">
           <Button href={WHATSAPP_URL} variant="outline" className="w-full">
            Solicitar Rota no WhatsApp <span className="ml-3"></span>
          </Button>
        </div>
      </div>
    </section>
  );
}

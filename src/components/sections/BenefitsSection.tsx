import { Button } from "@/components/ui/Button";
import { WHATSAPP_URL } from "@/lib/constants";

export function BenefitsSection() {
  const items = [
    { title: "Identificação de Ameaças", text: "Aprenda a mapear rotas, reconhecer intenções e ler o ambiente rapidamente." },
    { title: "Defesa e Ataque Simultâneo", text: "Neutralize a agressão e contra-ataque na mesma fração de segundo." },
    { title: "Decisão sob Extremo Estresse", text: "Treinamento que forja a mente a não hesitar quando sua integridade está em risco." },
    { title: "Melhoria do Condicionamento", text: "Aumento real do preparo cardiovascular, força, explosão muscular e reflexos." },
    // Novos itens do Alteraçoes.txt
    { title: "Transformação Pessoal", text: "Muito além de uma prática física: ele fortalece a mente, desenvolve autoconfiança e prepara você para focar sob intensa pressão." },
    { title: "Reação e Posicionamento", text: "Aprenda a reagir diante da violência real e não a recuar. Acima de tudo, aprenda a se posicionar sem demonstrar medo ou se esconder." },
    { title: "Controle Emocional", text: "Cada treino constrói mais disciplina, foco e controle emocional, criando uma versão muito mais segura, preparada e determinada de você." },
    { title: "Mentalidade Inabalável", text: "Assuma o controle efetivo da sua própria segurança, vença o medo biológico do confronto e esteja sempre pronto para o pior cenário." },
  ];

  return (
    <section id="beneficios" className="w-full py-24 brutal-border-b bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl font-display font-bold uppercase text-text-main">
            Seu corpo é a <span className="text-primary">arma primária.</span>
          </h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-border-dark">
          {items.map((item, i) => (
            <div key={i} className="p-8 border-b sm:border-b-0 sm:border-r border-border-dark last:border-0 hover:bg-surface-elevated transition-colors">
              <div className="w-12 h-12 border-2 border-border-dark flex items-center justify-center font-display text-xl text-primary mb-6">{i+1}</div>
              <h4 className="text-xl font-display uppercase text-text-main mb-4">{item.title}</h4>
              <p className="font-body text-base text-text-muted">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Button href={WHATSAPP_URL} variant="outline" className="w-full sm:w-auto">
            Falar no WhatsApp <span className="ml-3">→</span>
          </Button>
        </div>
      </div>
    </section>
  );
}

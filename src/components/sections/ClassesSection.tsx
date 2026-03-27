import { Button } from "@/components/ui/Button";
import { WHATSAPP_URL } from "@/lib/constants";

export function ClassesSection() {
  const kidsBenefits = [
    "Prevenção contra Bullying",
    "Autoconfiança e Autocontrole",
    "Consciência de Autoproteção",
    "Controle do Estresse",
    "Redução da Ansiedade",
    "Concentração e Disciplina",
    "Condicionamento Físico",
    "Socialização",
    "Saúde e Bem-estar"
  ];

  return (
    <section id="aulas" className="w-full py-24 brutal-border-b bg-surface flex justify-center">
      <div className="max-w-7xl mx-auto w-full px-6">
        <div className="mb-16">
          <div className="inline-block px-4 py-1 border border-border-dark text-text-muted font-display uppercase tracking-widest text-sm mb-4">
            Modalidades
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-bold uppercase text-text-main">
            Treinamento <span className="text-primary">Específico.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-0 border border-border-dark">
          {/* Regulares */}
          <div className="p-8 border-b lg:border-b-0 lg:border-r border-border-dark flex flex-col hover:bg-surface-elevated transition-colors group">
            <h3 className="text-3xl font-display uppercase tracking-wide text-text-main mb-6 group-hover:text-primary transition-colors">
              Aulas Regulares em Grupo
            </h3>
            <div className="flex flex-col gap-4 font-body text-text-muted leading-relaxed mb-8 grow">
              <p>As aulas de Krav Magá têm como objetivo preparar o aluno por meio de técnicas simples, práticas e de fácil aprendizado. Não há competições; o foco é o desenvolvimento da defesa pessoal de forma realista, conforme as situações do dia a dia.</p>
              <p>As turmas são compostas por homens e mulheres de diferentes idades. A carga horária varia entre duas e três horas semanais, distribuídas durante a semana e aos sábados.</p>
            </div>
          </div>

          {/* Particulares */}
          <div className="p-8 border-b lg:border-b-0 lg:border-r border-border-dark flex flex-col hover:bg-surface-elevated transition-colors group bg-background">
            <h3 className="text-3xl font-display uppercase tracking-wide text-text-main mb-6 group-hover:text-primary transition-colors">
              Aulas Particulares
            </h3>
            <div className="flex flex-col gap-4 font-body text-text-muted leading-relaxed mb-8 grow">
              <p>O treinamento particular de Krav Magá é voltado para adultos, crianças, homens e mulheres que precisam de horários flexíveis ou preferem um atendimento individualizado.</p>
              <p>As aulas são agendadas conforme a disponibilidade do aluno e do instrutor. Nesse formato, o desenvolvimento pode ser até três vezes mais rápido do que nas aulas em grupo, devido à atenção exclusiva do professor.</p>
            </div>
            <div className="mt-8">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary font-display uppercase tracking-wider text-sm border border-primary/20">
                Evolução 3x Mais Rápida
              </span>
            </div>
          </div>

          {/* Kids */}
          <div className="p-8 flex flex-col hover:bg-surface-elevated transition-colors group">
            <h3 className="text-3xl font-display uppercase tracking-wide text-text-main mb-6 group-hover:text-primary transition-colors">
              Aulas Kids
            </h3>
            <div className="flex flex-col gap-4 font-body text-text-muted leading-relaxed mb-8">
              <p>A defesa pessoal é uma ferramenta poderosa para o desenvolvimento infantil. Ela fortalece a autoconfiança, ensina disciplina e controle emocional, além de melhorar a coordenação e o preparo físico.</p>
              <p>Mais do que lutar, a criança aprende a se proteger, identificar riscos e agir com segurança. É um caminho direto para formar crianças mais seguras, focadas e preparadas para os desafios do dia a dia.</p>
            </div>
            
            <div className="mt-auto">
              <h4 className="font-display text-lg text-text-main uppercase mb-3">Benefícios:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm font-body text-text-muted border-t border-border-dark pt-4">
                {kidsBenefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary shrink-0">▸</span> {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <Button href={WHATSAPP_URL} variant="outline" className="w-full sm:w-auto">
            Consultar Grade de Horários <span className="ml-3">→</span>
          </Button>
        </div>
      </div>
    </section>
  );
}

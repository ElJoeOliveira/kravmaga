export const metadata = {
  title: "Termos de Uso | Krav Magá Ipatinga",
  description: "Termos Gerais e de Uso da aplicação e serviços.",
};

export default function TermosPage() {
  return (
    <div className="min-h-screen bg-background text-text-main py-24 px-6">
      <div className="max-w-3xl mx-auto flex flex-col gap-8">
        
        <div className="border-b border-border-dark pb-8 mb-4">
          <h1 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight text-primary mb-4">
            Termos de Uso
          </h1>
          <p className="text-text-muted font-body">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
        </div>

        <section className="flex flex-col gap-4 font-body text-text-muted leading-relaxed">
          <h2 className="text-2xl font-display font-semibold text-text-main uppercase tracking-widest mt-6">1. Aceitação dos Termos</h2>
          <p>
            Ao acessar e utilizar nosso website e nossos serviços de agendamento de aulas de treinamento em Krav Magá (disponibilizados por <strong>[RAZÃO SOCIAL AQUI]</strong>, sob CNPJ <strong>XX.XXX.XXX/0001-XX</strong>), você concorda irrestritamente em cumprir estes Termos de Uso. Caso discorde de qualquer termo, pedimos gentilmente que não utilize nossos serviços.
          </p>

          <h2 className="text-2xl font-display font-semibold text-text-main uppercase tracking-widest mt-6">2. Uso do Site e dos Serviços</h2>
          <p>
            O conteúdo estruturado deste site possui cunho exclusivamente informativo e convite/captação para agendamentos via WhatsApp. Nenhuma transação bancária ou captura de dados sistêmica automatizada é feita sem o contato humano voluntário do usuário.
          </p>
          <ul className="list-disc list-inside ml-4 flex flex-col gap-2">
            <li>As "aulas cortesia" mencionadas estão sujeitas a disponibilidade de agenda e devem ser sempre confirmadas por nossa equipe.</li>
            <li>O agendamento da aula não vincula obrigatoriedade de matrícula, mas requer cumprimento das normas de segurança do nosso galpão de treino.</li>
          </ul>

          <h2 className="text-2xl font-display font-semibold text-text-main uppercase tracking-widest mt-6">3. Propriedade Intelectual</h2>
          <p>
            Toda a metodologia, identidade visual, design da página, textos em formato de manifesto ou "copy", slogans e layout são protegidos pelas leis de propriedade intelectual. Qualquer menção à FBKMK ou Kapap pertencem aos seus respectivos detentores, devidamente licenciados ao instrutor. A cópia visual total ou parcial desta landing page para a promoção de concorrência resultará em infração passível de ação legal.
          </p>

          <h2 className="text-2xl font-display font-semibold text-text-main uppercase tracking-widest mt-6">4. Isenção de Responsabilidade Técnica</h2>
          <p>
            O site é fornecido "no estado em que se encontra". Não garantimos que a plataforma estará ininterrupta ou isenta de erros temporários de servidor (uptime). Não nos responsabilizamos por links de agendamento do WhatsApp fora do ar devido à operação de empresas provedoras como a Meta.
          </p>

          <h2 className="text-2xl font-display font-semibold text-text-main uppercase tracking-widest mt-6">5. Alteração de Termos</h2>
          <p>
            Estes formulários podem ser alterados ou atualizados a critério da nossa equipe técnica e legal a qualquer instante, cabendo ao aluno/visitante verificar regularmente sua modificação antes do acesso continuado à clínica/escola.
          </p>
          
          <h2 className="text-2xl font-display font-semibold text-text-main uppercase tracking-widest mt-6">6. Contato Legal</h2>
          <p>
            Sempre que houverem dúvidas a respeito das regras e responsabilidades associadas nestes termos informativos, nossos canais diretos estão abertos através do e-mail oficial designado: <strong>contato@kravmagaipatinga.com.br</strong>.
          </p>
        </section>

      </div>
    </div>
  );
}

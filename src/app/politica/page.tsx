export const metadata = {
  title: "Política de Privacidade | Krav Magá Ipatinga",
  description: "Tratamento de Dados e Privacidade (LGPD).",
};

export default function PoliticaPage() {
  return (
    <div className="min-h-screen bg-background text-text-main py-24 px-6">
      <div className="max-w-3xl mx-auto flex flex-col gap-8">
        
        <div className="border-b border-border-dark pb-8 mb-4">
          <h1 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight text-primary mb-4">
            Política de Privacidade
          </h1>
          <p className="text-text-muted font-body">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
        </div>

        <section className="flex flex-col gap-4 font-body text-text-muted leading-relaxed">
          <h2 className="text-2xl font-display font-semibold text-text-main uppercase tracking-widest mt-6">1. Nosso Compromisso e a LGPD</h2>
          <p>
            A <strong>[RAZÃO SOCIAL AQUI]</strong>, inscrita sob o CNPJ <strong>XX.XXX.XXX/0001-XX</strong> leva extremamente a sério os direitos de privacidade estipulados na Lei Geral de Proteção de Dados (Lei Federal n. 13.709/2018). Esta página elenca de maneira direta, crua e transparente quais informações processamos sobre você no momento em que busca se tornar habilitado em nossos treinamentos operacionais de Krav Magá.
          </p>

          <h2 className="text-2xl font-display font-semibold text-text-main uppercase tracking-widest mt-6">2. Operações de Coleta de Dados</h2>
          <p>
            Durante sua navegação no sistema, nenhum dado complexo e sigiloso é extraído diretamente nesta Landing Page através de formulários nativos. O fluxo construído pela <strong>Krav Magá Ipatinga</strong> tem foco na interceptação de alunos somente após clique com aproximação humana através de ferramenta de terceira parte autorizada: O WhatsApp (oferecido pela empresa Meta Inc.).
          </p>
          <ul className="list-disc list-inside ml-4 flex flex-col gap-2">
            <li><strong>Métricas Anônimas:</strong> Ferramentas como o Pixel da Meta e o Google Analytics podem estar embarcadas na estrutura web puramente com foco em entender sua visita e localização genérica visando adequação de campanha de anúncios para a localidade do Vale do Aço.</li>
            <li><strong>Dados Espontâneos:</strong> Telefone celular ou Nome apenas, expostos voluntariamente pelo interessado no momento de enviar a mensagem no WhatsApp buscando seu agendamento.</li>
          </ul>

          <h2 className="text-2xl font-display font-semibold text-text-main uppercase tracking-widest mt-6">3. Fim Fundamental do Tratamento</h2>
          <p>
            Armazenamos seu histórico em nossas bases de operação com a finalidade singular de prosseguir seu cadastro ativo caso vire aluno, comunicar retornos da "Aula Cortesia" pendente, ofertar novidades em cursos técnicos (como Kapap, Armamento e Tiro, ou treinamentos novos por Diêgo Silva) e, eventualmente, faturamento por mensalidade regular.
          </p>

          <h2 className="text-2xl font-display font-semibold text-text-main uppercase tracking-widest mt-6">4. Exceções e Compartilhamento com Terceiros</h2>
          <p>
            Não arrendamos, não repassamos, e não comercializamos bases de leads geradas. Apenas empresas essenciais como faturamento bancário, contabilidade ou sistemas operacionais (exemplo: empresa do Meta) poderão ser canais pelos quais transportamos informações de segurança visando as finalidades descritas.
          </p>

          <h2 className="text-2xl font-display font-semibold text-text-main uppercase tracking-widest mt-6">5. Controle Restrito de Retenção</h2>
          <p>
            As sessões atreladas a alunos evadidos, contatos de WhatsApp ou leads não efetivados que repousarem nas mensagens operacionais podem ser retidas pelos períodos legislativos requeridos por questões normativas (emissões fiscais), ou mantidos caso demonstre interesse futuramente contatável. Porém, sob seu controle rígido: assim que pedido, faremos o "Direito ao esquecimento".
          </p>
          
          <h2 className="text-2xl font-display font-semibold text-text-main uppercase tracking-widest mt-6">6. Mecanismos para o seu Exame Titular (Canal DPO)</h2>
          <p>
            A qualquer tempo, o visitante, lead ou aluno ativo/ex-aluno poderá contactar o nosso controlador de dados (também Encarregado Tático) exigindo portabilidade, cancelamento de mensagens promocionais de matrícula ou extinção completa da sua via do banco de cadastros. Sendo necessário tal ordem de intervenção ou se possuir litígio sob informações vazadas através da equipe por equívoco, preste queixa acionando diretamente o e-mail responsável <strong>contato@kravmagaipatinga.com.br</strong>.
          </p>
        </section>

      </div>
    </div>
  );
}

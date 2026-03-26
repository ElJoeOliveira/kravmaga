import { Button } from "@/components/ui/Button";

const WHATSAPP_URL = "https://wa.me/5531985765400?text=Ol%C3%A1%21+Quero+agendar+minha+aula+cortesia+de+Krav+Mag%C3%A1+em+Ipatinga.";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[90vh] flex items-center brutal-border-b bg-surface">
        {/* Background texture simulator (optional noise, here implemented via absolute div if needed, but keeping clean for now) */}
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

      {/* 2. DOR E REALIDADE SECTION */}
      <section className="w-full py-24 brutal-border-b bg-background">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-6xl font-display font-bold uppercase leading-none text-text-main mb-8">
              O medo e a <br/>vulnerabilidade<br/> <span className="text-border-dark">são falhas táticas.</span>
            </h2>
          </div>
          <div className="flex flex-col gap-8 justify-center">
            <p className="text-xl text-text-muted font-body">
              A violência real não escolhe hora nem vítima. Se sentir inseguro, não saber como reagir sob pressão ou depender de terceiros para a sua proteção é um risco que você não pode correr.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-display uppercase tracking-wider text-lg">
              <li className="flex items-center gap-3 p-4 border border-border-dark"><span className="text-primary">✕</span> Falta de reação rápida</li>
              <li className="flex items-center gap-3 p-4 border border-border-dark"><span className="text-primary">✕</span> Congelar sob pressão</li>
              <li className="flex items-center gap-3 p-4 border border-border-dark"><span className="text-primary">✕</span> Baixa confiança física</li>
              <li className="flex items-center gap-3 p-4 border border-border-dark"><span className="text-primary">✕</span> Sensação constante de risco</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. A SOLUÇÃO (KRAV MAGÁ) & TRANSFORMAÇÃO */}
      <section className="w-full bg-surface brutal-border-b">
        <div className="grid md:grid-cols-2">
          {/* Box Antes */}
          <div className="p-12 md:p-24 border-b md:border-b-0 md:border-r border-border-dark flex flex-col justify-center">
            <div className="text-border-dark font-display text-8xl mb-6">01</div>
            <h3 className="text-3xl font-display uppercase tracking-wide text-text-muted mb-6">O Alvo</h3>
            <ul className="flex flex-col gap-4 font-body text-text-muted text-lg">
              <li className="border-l-2 border-border-dark pl-4">Vulnerável a ataques surpresas</li>
              <li className="border-l-2 border-border-dark pl-4">Passivo(a) e inseguro(a) no dia a dia</li>
              <li className="border-l-2 border-border-dark pl-4">Dependente da sorte</li>
            </ul>
          </div>
          
          {/* Box Depois */}
          <div className="p-12 md:p-24 bg-surface-elevated relative flex flex-col justify-center">
            {/* Visual Destaque */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_top_right,var(--color-primary)_0%,transparent_70%)] opacity-10"></div>
            <div className="text-primary font-display text-8xl mb-6">02</div>
            <h3 className="text-3xl font-display uppercase tracking-wide text-text-main mb-6">O Sobrevivente</h3>
            <ul className="flex flex-col gap-4 font-body text-text-main text-lg">
              <li className="border-l-2 border-primary pl-4 font-medium">Condicionamento atento e vigilante</li>
              <li className="border-l-2 border-primary pl-4 font-medium">Capacidade de resposta explosiva</li>
              <li className="border-l-2 border-primary pl-4 font-medium">Postura inabalável de controle</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. BENEFÍCIOS PRÁTICOS */}
      <section className="w-full py-24 brutal-border-b bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-5xl md:text-7xl font-display font-bold uppercase text-text-main">
              Seu corpo é a <span className="text-primary">arma primária.</span>
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-border-dark">
            {[
              { title: "Identificação de Ameaças", text: "Aprenda a mapear rotas, reconhecer intenções e ler o ambiente rapidamente." },
              { title: "Defesa e Ataque Simultâneo", text: "Neutralize a agressão e contra-ataque na mesma fração de segundo." },
              { title: "Decisão sob Extremo Estresse", text: "Treinamento que forja a mente a não hesitar quando sua integridade está em risco." },
              { title: "Melhoria do Condicionamento", text: "Aumento real do preparo cardiovascular, força, explosão muscular e reflexos." },
            ].map((item, i) => (
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

      {/* 5. AVALIAÇÃO DE PARÂMETROS / OBJEÇÕES */}
      <section className="w-full py-24 brutal-border-b bg-surface">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-display font-bold uppercase text-text-main mb-12 text-center">
            Acesso Restrito? <span className="text-border-dark">— FALSO.</span>
          </h2>
          
          <div className="flex flex-col border-t border-border-dark">
            {[
              { q: "Estou velho demais para treinar?", a: "Mentira. O Krav Magá foi criado para ser universal e não depende de juventude, apenas da técnica correta aplicada a pontos de alavanca." },
              { q: "Nunca treinei nenhuma luta", a: "Excelente. Você virá sem vícios motores. A metodologia foi feita justamente para o cidadão comum aprender do zero." },
              { q: "Não tenho preparo físico", a: "O condicionamento é adquirido ao longo dos treinos, adaptado ao limite respiratório de cada aluno nos primeiros meses." },
              { q: "Isso incentiva a violência?", a: "Não. Focamos exclusivamente em defesa pessoal e sobrevivência urbana rápida, não em combate esportivo de ringue." }
            ].map((obj, i) => (
              <div key={i} className="p-8 border-b border-border-dark flex flex-col md:flex-row gap-6 md:items-start group">
                <span className="font-display text-2xl text-primary w-8 shrink-0 flex items-center">[{i+1}]</span>
                <div className="flex-1">
                  <h4 className="text-xl font-display uppercase tracking-wide text-text-main mb-2">{obj.q}</h4>
                  <p className="font-body text-text-muted">{obj.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. INFORMAÇÕES DE PROTOCOLO (AUTORIDADE, LOCAL) */}
      <section className="w-full flex border-b border-border-dark flex-col lg:flex-row">
        
        {/* Dossie Professor */}
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

        {/* Localização & Modalidades */}
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

      {/* 7. PROVA SOCIAL (ESPAÇO RESERVADO) */}
      <section className="w-full py-24 bg-background brutal-border-b border-border-dark flex justify-center items-center">
        {/* Mantido simples e rígido conforme briefing (estruturar espaço) */}
        <div className="text-center px-6">
           <h2 className="text-3xl font-display uppercase tracking-widest text-text-main mb-6 opacity-40">
            A Tática em Execução Prática
          </h2>
          <div className="w-full max-w-2xl mx-auto h-48 border border-dashed border-border-dark flex items-center justify-center">
              <span className="text-text-muted font-display uppercase tracking-widest opacity-50 text-sm">
                [ Espaço alocado para depoimentos de alunos e relatos pós-sobrevivência ]
              </span>
          </div>
        </div>
      </section>

      {/* 8. FOOTER / DEPLOYMENT (CTA FINAL MATADOR) */}
      <section className="w-full bg-primary pt-32 pb-48 px-6 text-black flex flex-col justify-center items-center text-center relative overflow-hidden">
        
        {/* Efeito listras de alerta */}
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
            className="inline-flex items-center justify-center font-display uppercase text-2xl font-bold tracking-widest px-12 py-6 bg-black text-primary hover:bg-white hover:text-black hover:scale-105 transition-all duration-300"
          >
            Quero Minha Aula Cortesia <span className="ml-4 font-normal">→</span>
          </a>
          <p className="mt-8 font-body uppercase tracking-widest text-sm font-semibold opacity-70">
            Acesso 100% gratuito. Início imediato.
          </p>
        </div>
      </section>

    </div>
  );
}

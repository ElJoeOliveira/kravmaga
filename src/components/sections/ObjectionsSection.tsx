export function ObjectionsSection() {
  const faqList = [
    { q: "Estou velho demais para treinar?", a: "Mentira. O Krav Magá foi criado para ser universal e não depende de juventude, apenas da técnica correta aplicada a pontos de alavanca." },
    { q: "Nunca treinei nenhuma luta", a: "Excelente. Você virá sem vícios motores. A metodologia foi feita justamente para o cidadão comum aprender do zero." },
    { q: "Não tenho preparo físico", a: "O condicionamento é adquirido ao longo dos treinos, adaptado ao limite respiratório de cada aluno nos primeiros meses." },
    { q: "Isso incentiva a violência?", a: "Não. Focamos exclusivamente em defesa pessoal e sobrevivência urbana rápida, não em combate esportivo de ringue." }
  ];

  return (
    <section className="w-full py-24 brutal-border-b bg-surface">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-display font-bold uppercase text-text-main mb-12 text-center">
          Acesso Restrito? <span className="text-border-dark">— FALSO.</span>
        </h2>
        
        <div className="flex flex-col border-t border-border-dark">
          {faqList.map((obj, i) => (
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
  );
}

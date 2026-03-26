export function PainSection() {
  return (
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
  );
}

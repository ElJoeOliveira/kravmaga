export function SolutionSection() {
  return (
    <section className="w-full bg-surface brutal-border-b">
      <div className="grid md:grid-cols-2">
        <div className="p-12 md:p-24 border-b md:border-b-0 md:border-r border-border-dark flex flex-col justify-center">
          <div className="text-border-dark font-display text-8xl mb-6">01</div>
          <h3 className="text-3xl font-display uppercase tracking-wide text-text-muted mb-6">O Alvo</h3>
          <ul className="flex flex-col gap-4 font-body text-text-muted text-lg">
            <li className="border-l-2 border-border-dark pl-4">Vulnerável a ataques surpresas</li>
            <li className="border-l-2 border-border-dark pl-4">Passivo(a) e inseguro(a) no dia a dia</li>
            <li className="border-l-2 border-border-dark pl-4">Dependente da sorte</li>
          </ul>
        </div>
        
        <div className="p-12 md:p-24 bg-surface-elevated relative flex flex-col justify-center">
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
  );
}

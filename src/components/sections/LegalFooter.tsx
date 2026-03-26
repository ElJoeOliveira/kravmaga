export function LegalFooter() {
  return (
    <footer className="w-full bg-background border-t border-border-dark py-12 px-6 flex flex-col md:flex-row items-center justify-between text-text-muted font-body text-sm gap-6">
      <p>© {new Date().getFullYear()} [NOME FANTASIA / RAZÃO SOCIAL AQUI] - CNPJ: XX.XXX.XXX/0001-XX. Todos os direitos reservados.</p>
      <div className="flex gap-6">
        <a href="/termos" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Termos de Uso</a>
        <a href="/politica" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Política de Privacidade</a>
      </div>
    </footer>
  );
}

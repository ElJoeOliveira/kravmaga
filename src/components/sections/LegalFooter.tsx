export function LegalFooter() {
  return (
    <footer className="w-full bg-background border-t border-border-dark py-12 px-6 flex flex-col items-center gap-6 text-text-muted font-body text-sm">
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6">
        <p>© {new Date().getFullYear()} CNPJ: 44.834.579/0001-63. Todos os direitos reservados.</p>
        <div className="flex gap-6">
          <a href="/termos" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Termos de Uso</a>
          <a href="/politica" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Política de Privacidade</a>
        </div>
      </div>
      <div className="w-full text-center border-t border-border-dark pt-6">
        <p>
          Desenvolvido por{" "}
          <a
            href="https://anunciecerto.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ff9934] font-semibold hover:underline"
          >
            ANUNCIE CERTO
          </a>
        </p>
      </div>
    </footer>
  );
}

"use client";

import { useState, useEffect } from "react";
import { WHATSAPP_URL } from "@/lib/constants";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-4" : "py-8"
      }`}
    >
      <div 
        className={`mx-auto max-w-7xl transition-all duration-300 ${
          isScrolled 
            ? "bg-[#050505]/90 backdrop-blur-md border border-zinc-600 shadow-[0_10px_40px_rgba(0,0,0,0.8)] py-3 px-6 w-[95%] md:w-full"
            : "bg-transparent border border-transparent px-6 w-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <a href="#" className="font-display font-bold uppercase tracking-widest text-text-main text-xl">
            Krav Magá <span className="text-primary">Ipatinga</span>
          </a>

          <nav className="hidden lg:flex items-center gap-8 font-display uppercase tracking-wider text-sm text-text-muted">
            <a href="#metodo" className="hover:text-primary transition-colors">O Método</a>
            <a href="#beneficios" className="hover:text-primary transition-colors">Benefícios</a>
            <a href="#faq" className="hover:text-primary transition-colors">F.A.Q</a>
            <a href="#instrutor" className="hover:text-primary transition-colors">Instrutor</a>
          </nav>

          <a 
            href={WHATSAPP_URL} 
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center font-display uppercase text-sm font-bold tracking-widest px-6 py-3 bg-primary text-black hover:bg-white transition-colors"
          >
            Agendar Aula →
          </a>
        </div>
      </div>
    </header>
  );
}

import React from "react";

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
  className?: string;
}

export function Button({ href, variant = "primary", children, className = "", ...props }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-display uppercase tracking-widest text-lg px-8 py-5 transition-all duration-200 border-2";
  
  const variants = {
    primary: "bg-primary text-black border-primary hover:bg-white hover:border-white hover:text-black",
    secondary: "bg-surface-elevated text-text-main border-transparent hover:border-text-main",
    outline: "bg-transparent text-primary border-primary hover:bg-primary hover:text-black",
  };

  return (
    <a 
      href={href} 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}

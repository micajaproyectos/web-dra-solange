"use client";

import { useState, useEffect } from "react";
import { Menu, X, Stethoscope } from "lucide-react";

const WA_URL =
  "https://wa.me/56933987534?text=Hola%20Dra.%20Solange%2C%20quisiera%20agendar%20una%20consulta";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2">
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-sky-600 text-white">
              <Stethoscope size={18} />
            </span>
            <span className="font-semibold text-slate-800 text-lg leading-tight">
              Dra.&nbsp;<span className="text-sky-700">Solange</span>
            </span>
          </a>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-slate-600 hover:text-sky-600 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-4 py-2 rounded-full bg-sky-600 text-white text-sm font-semibold hover:bg-sky-700 transition-colors shadow-sm"
            >
              Agendar hora
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-sky-50 transition-colors"
            aria-label="Menú"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-lg">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 rounded-lg text-slate-700 font-medium hover:bg-sky-50 hover:text-sky-600 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 px-4 py-3 rounded-full bg-sky-600 text-white font-semibold text-center hover:bg-sky-700 transition-colors"
            >
              Agendar hora por WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

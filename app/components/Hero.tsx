import Image from "next/image";
import { CheckCircle, Calendar, MessageCircle, Star, ShieldCheck } from "lucide-react";

const WA_URL =
  "https://wa.me/56933987534?text=Hola%20Dra.%20Solange%2C%20quisiera%20agendar%20una%20consulta";

const highlights = [
  "Sin filas · Sin sala de espera",
  "Atención personalizada y humana",
  "Recetas válidas en toda farmacia",
];

const stats = [
  { value: "500+", label: "Pacientes", sub: "atendidos" },
  { value: "8+", label: "Años de", sub: "experiencia" },
  { value: "4.9", label: "Calificación", sub: "promedio ★" },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex overflow-hidden bg-[#f0f9ff]"
    >
      {/* ── Blob decorativo fondo izquierda ── */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-sky-100/50 blur-3xl -translate-x-1/2 -translate-y-1/3 pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-blue-100/40 blur-3xl pointer-events-none"
      />

      {/* ══════════════════════════════════════
          COLUMNA IZQUIERDA — Contenido
      ══════════════════════════════════════ */}
      <div className="relative z-10 flex flex-col justify-center w-full lg:w-[54%] px-6 sm:px-10 lg:pl-16 xl:pl-24 lg:pr-8 pt-24 pb-20 lg:py-0">

        {/* Línea dorada + badge */}
        <div className="fade-up flex items-center gap-3 mb-7">
          <span className="block w-10 h-1 rounded-full bg-sky-500" />
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-sky-700">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
            Atención disponible ahora
          </span>
        </div>

        {/* Headline principal */}
        <h1 className="fade-up fade-up-delay-1 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-slate-900 leading-[1.05] tracking-tight mb-6">
          Tu salud,{" "}
          <br className="hidden sm:block" />
          <span className="shimmer-gold">donde estés.</span>
        </h1>

        {/* Descripción */}
        <p className="fade-up fade-up-delay-2 text-lg text-slate-600 leading-relaxed mb-7 max-w-lg">
          Soy la <strong className="text-slate-800 font-semibold">Dra. Solange</strong>,
          médico general con más de 8 años de experiencia. Videollamada,
          visita a domicilio y recetas — sin trámites, sin esperas.
        </p>

        {/* Highlights */}
        <ul className="fade-up fade-up-delay-3 flex flex-col gap-2.5 mb-9">
          {highlights.map((h) => (
            <li key={h} className="flex items-center gap-2.5 text-slate-700">
              <CheckCircle size={17} className="text-sky-500 shrink-0" />
              <span className="text-base">{h}</span>
            </li>
          ))}
        </ul>

        {/* CTAs */}
        <div className="fade-up fade-up-delay-4 flex flex-col sm:flex-row gap-3 mb-12">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-sky-600 text-white font-bold text-base hover:bg-sky-700 active:scale-95 transition-all shadow-lg shadow-sky-200 hover:shadow-sky-200"
          >
            <Calendar size={18} />
            Agendar consulta
          </a>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white border-2 border-slate-200 text-slate-700 font-bold text-base hover:border-sky-300 hover:text-sky-700 active:scale-95 transition-all shadow-sm"
          >
            <MessageCircle size={18} />
            Escribir por WhatsApp
          </a>
        </div>

        {/* Stats row */}
        <div className="fade-up fade-up-delay-5 flex items-center gap-6 sm:gap-8">
          {stats.map((s, i) => (
            <div key={s.label}>
              <p className="text-2xl font-black text-slate-900 leading-none">{s.value}</p>
              <p className="text-xs text-slate-500 mt-1 leading-tight">
                {s.label}<br />{s.sub}
              </p>
              {i < stats.length - 1 && (
                <span className="hidden sm:block absolute" aria-hidden="true" />
              )}
            </div>
          ))}
          {/* Separadores */}
          <div className="hidden sm:flex gap-8 items-center absolute" aria-hidden="true" />
        </div>

        {/* Divisores entre stats */}
        <div className="fade-up fade-up-delay-5 flex items-stretch gap-0 -mt-10 mb-0 pointer-events-none select-none" aria-hidden="true" />
      </div>

      {/* ══════════════════════════════════════
          COLUMNA DERECHA — Foto full height
      ══════════════════════════════════════ */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[50%] hero-photo">
        {/* Blend suave izquierda */}
        <div
          aria-hidden="true"
          className="absolute left-0 top-0 bottom-0 w-64 bg-gradient-to-r from-[#f0f9ff] to-transparent z-10 pointer-events-none"
        />
        {/* Blend suave abajo */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#f0f9ff]/80 to-transparent z-10 pointer-events-none"
        />

        {/* Foto + degradados integrados como capas CSS */}
        <div
          role="img"
          aria-label="Dra. Solange, Médico General"
          className="absolute inset-0"
          style={{
            backgroundImage: [
              "linear-gradient(to right, #f0f9ff 0%, transparent 35%)",
              "linear-gradient(to top, #f0f9ff 0%, transparent 30%)",
              "linear-gradient(to bottom right, rgba(14,165,233,0.06) 0%, transparent 60%)",
              "url('/foto-hero.png')",
            ].join(", "),
            backgroundSize: "100% 100%, 100% 100%, 100% 100%, cover",
            backgroundPosition: "0 0, 0 0, 0 0, top right",
            backgroundRepeat: "no-repeat",
            transform: "scale(0.85)",
            transformOrigin: "top right",
          }}
        />

        {/* Badge flotante — nombre */}
        <div className="absolute bottom-16 left-12 z-20 float-badge">
          <div className="bg-white/80 backdrop-blur-md border border-white/60 rounded-2xl px-5 py-4 shadow-xl">
            <div className="flex items-center gap-2 mb-1">
              <ShieldCheck size={15} className="text-sky-600" />
              <span className="text-xs font-semibold text-sky-700 uppercase tracking-wide">Médico certificado</span>
            </div>
            <p className="text-slate-900 font-bold text-lg leading-tight">Dra. Solange</p>
            <p className="text-slate-500 text-sm">Médico General · Telemedicina</p>
            <div className="flex items-center gap-1 mt-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} className="fill-sky-400 text-sky-400" />
              ))}
              <span className="text-xs text-slate-500 ml-1">4.9 · 500+ pacientes</span>
            </div>
          </div>
        </div>

        {/* Badge disponible — top */}
        <div className="absolute top-28 right-10 z-20">
          <div className="bg-white/75 backdrop-blur-md border border-white/50 rounded-full px-4 py-2 shadow-lg flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm font-semibold text-slate-700">Disponible ahora</span>
          </div>
        </div>
      </div>

      {/* ── Foto mobile (solo visible en < lg) ── */}
      <div className="lg:hidden absolute inset-x-0 top-16 h-56 sm:h-72 z-0">
        <Image
          src="/foto-hero.png"
          alt="Dra. Solange, Médico General"
          fill
          priority
          unoptimized
          className="object-cover object-top"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#f0f9ff]/60 to-[#f0f9ff]" />
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator absolute bottom-8 left-1/2 z-20 hidden lg:flex flex-col items-center gap-1">
        <span className="text-xs text-slate-400 uppercase tracking-widest">Scroll</span>
        <svg width="16" height="22" viewBox="0 0 16 22" fill="none" className="text-slate-300">
          <rect x="1" y="1" width="14" height="20" rx="7" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="8" cy="7" r="2" fill="currentColor" className="animate-bounce"/>
        </svg>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 inset-x-0 pointer-events-none z-20" aria-hidden="true">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 30C240 60 480 0 720 30C960 60 1200 0 1440 30V60H0V30Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}

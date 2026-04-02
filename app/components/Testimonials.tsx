"use client";
import { useRef } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "María José Fuentes",
    location: "Santiago, RM",
    service: "Telemedicina",
    rating: 5,
    text: "La Dra. Solange es increíblemente atenta y profesional. Me atendió en menos de 30 minutos por videollamada, me explicó todo muy bien y la receta llegó al tiro. ¡La recomiendo a ojos cerrados!",
    initials: "MJ",
    color: "bg-blue-400",
  },
  {
    name: "Carlos Rodríguez",
    location: "Providencia, RM",
    service: "Visita domiciliaria",
    rating: 5,
    text: "Mi mamá de 78 años necesitaba atención y no podía ir a una clínica. La Dra. Solange llegó puntual, fue súper delicada con ella y se tomó todo el tiempo necesario. Un servicio de primera.",
    initials: "CR",
    color: "bg-sky-500",
  },
  {
    name: "Valentina Morales",
    location: "Las Condes, RM",
    service: "Receta médica",
    rating: 5,
    text: "Necesitaba renovar mi receta con urgencia y no tenía tiempo para ir a una consulta presencial. Me contacté por WhatsApp y en menos de una hora tenía todo listo. Excelente!",
    initials: "VM",
    color: "bg-emerald-400",
  },
  {
    name: "Roberto Sánchez",
    location: "Ñuñoa, RM",
    service: "Seguimiento",
    rating: 5,
    text: "Llevo 6 meses con seguimiento de mi hipertensión con la Dra. Solange. Siempre disponible, me revisa los exámenes rápido y me explica todo en términos que entiendo. ¡Mi salud ha mejorado mucho!",
    initials: "RS",
    color: "bg-emerald-500",
  },
  {
    name: "Catalina Vega",
    location: "Maipú, RM",
    service: "Telemedicina",
    rating: 5,
    text: "Súper cómodo atenderse desde la casa, especialmente con niños chicos. La doctora es muy profesional y empática, te da toda la atención como si estuvieras en una consulta normal.",
    initials: "CV",
    color: "bg-blue-500",
  },
  {
    name: "Andrés Pinto",
    location: "Vitacura, RM",
    service: "Seguimiento",
    rating: 5,
    text: "El seguimiento que hace la Dra. Solange es de altísima calidad. Siempre recuerda mi historial, me contacta proactivamente si ve algo raro y me da la tranquilidad de estar bien atendido.",
    initials: "AP",
    color: "bg-sky-500",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="fill-sky-400 text-sky-400" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  function scroll(dir: "left" | "right") {
    scrollRef.current?.scrollBy({ left: dir === "right" ? 320 : -320, behavior: "smooth" });
  }

  return (
    <section id="testimonios" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-semibold uppercase tracking-wide mb-4">
            Opiniones reales
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Lo que dicen mis pacientes
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-lg leading-relaxed">
            La confianza de mis pacientes es mi mayor orgullo. Aquí algunas de
            sus experiencias.
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-14">
          {[
            { value: "500+", label: "Pacientes atendidos" },
            { value: "4.9★", label: "Calificación promedio" },
            { value: "98%", label: "Satisfacción" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-4 rounded-2xl bg-sky-50 border border-sky-100">
              <p className="text-2xl font-bold text-sky-600">{stat.value}</p>
              <p className="text-xs text-slate-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Scroll horizontal */}
        <div className="relative">
          <button
            onClick={() => scroll("left")}
            aria-label="Anterior"
            className="hidden sm:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white border border-slate-200 shadow-md items-center justify-center text-slate-500 hover:text-sky-600 hover:border-sky-300 transition-colors"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Siguiente"
            className="hidden sm:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white border border-slate-200 shadow-md items-center justify-center text-slate-500 hover:text-sky-600 hover:border-sky-300 transition-colors"
          >
            <ChevronRight size={16} />
          </button>
        <div ref={scrollRef} className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative bg-white rounded-2xl border border-slate-100 shadow-sm p-6 hover:shadow-md transition-shadow shrink-0 w-72 sm:w-80 snap-start"
            >
              {/* Quote icon */}
              <Quote size={20} className="text-sky-200 mb-3" />

              {/* Stars */}
              <Stars count={t.rating} />

              {/* Text */}
              <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Service badge */}
              <span className="inline-block mt-3 text-xs px-2 py-1 rounded-full bg-sky-50 text-sky-600 font-medium">
                {t.service}
              </span>

              {/* Author */}
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-slate-100">
                <div
                  className={`w-9 h-9 rounded-full ${t.color} flex items-center justify-center text-white text-sm font-bold shrink-0`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">{t.name}</p>
                  <p className="text-xs text-slate-400">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}

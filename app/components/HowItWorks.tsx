import { MessageCircle, CalendarCheck, Video, HeartPulse } from "lucide-react";

const WA_URL =
  "https://wa.me/56933987534?text=Hola%20Dra.%20Solange%2C%20quisiera%20agendar%20una%20consulta";

const steps = [
  {
    step: "01",
    icon: MessageCircle,
    title: "Escríbeme por WhatsApp",
    description:
      "Contáctame directamente por WhatsApp indicando el tipo de consulta que necesitas y tu disponibilidad horaria.",
    color: "text-blue-500",
    bg: "bg-blue-100",
  },
  {
    step: "02",
    icon: CalendarCheck,
    title: "Agendamos tu hora",
    description:
      "Coordinamos juntos el día y hora más conveniente para ti. Confirmo tu consulta en pocos minutos.",
    color: "text-sky-600",
    bg: "bg-sky-100",
  },
  {
    step: "03",
    icon: Video,
    title: "Nos conectamos",
    description:
      "A la hora acordada iniciamos la videollamada o me presento en tu domicilio. Sin esperas, sin trámites.",
    color: "text-emerald-500",
    bg: "bg-emerald-100",
  },
  {
    step: "04",
    icon: HeartPulse,
    title: "Recibes tu atención",
    description:
      "Te entrego diagnóstico, indicaciones, receta y lo que necesites. Quedo disponible para tus dudas.",
    color: "text-emerald-500",
    bg: "bg-emerald-100",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="py-20 md:py-28 section-divider"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-semibold uppercase tracking-wide mb-4">
            Proceso simple
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            ¿Cómo funciona?
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-lg leading-relaxed">
            Agenda tu consulta en cuatro pasos simples. Sin burocracia, sin
            formularios interminables.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.step} className="relative flex flex-col items-center text-center">
                {/* Connector line (desktop) */}
                {i < steps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-10 left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] h-0.5 bg-gradient-to-r from-slate-200 to-slate-100 z-0"
                    aria-hidden="true"
                  />
                )}

                {/* Icon circle */}
                <div className={`relative z-10 w-20 h-20 rounded-full ${s.bg} flex items-center justify-center mb-5 shadow-sm`}>
                  <Icon size={28} className={s.color} />
                  <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-white border-2 border-slate-100 flex items-center justify-center text-xs font-bold text-slate-500">
                    {s.step.slice(1)}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-800 mb-2">{s.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{s.description}</p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-sky-600 text-white font-semibold text-lg hover:bg-sky-700 active:scale-95 transition-all shadow-lg shadow-sky-200"
          >
            <MessageCircle size={20} />
            Comenzar ahora
          </a>
          <p className="mt-3 text-slate-500 text-sm">Respondo en minutos · Sin costo de agendamiento</p>
        </div>
      </div>
    </section>
  );
}

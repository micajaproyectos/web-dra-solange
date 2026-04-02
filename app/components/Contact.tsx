import { Phone, Clock, MapPin, Calendar } from "lucide-react";

const WA_URL =
  "https://wa.me/56933987534?text=Hola%20Dra.%20Solange%2C%20quisiera%20agendar%20una%20consulta";

const info = [
  {
    icon: Phone,
    label: "Celular",
    value: "+56 9 3398 7534",
    sub: "Lunes a sábado",
    color: "bg-sky-100 text-sky-600",
  },
  {
    icon: Clock,
    label: "Horario",
    value: "Lun – Sáb: 9:00 – 20:00",
    sub: "Urgencias coordinadas",
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    icon: MapPin,
    label: "Cobertura",
    value: "Región Metropolitana",
    sub: "Telemedicina: todo Chile",
    color: "bg-violet-100 text-violet-600",
  },
];

const faqs = [
  {
    q: "¿Cuánto cuesta una consulta de telemedicina?",
    a: "El valor de la consulta se informa al momento de agendar. Se aceptan múltiples formas de pago. Contáctame para conocer el arancel vigente.",
  },
  {
    q: "¿La receta médica es válida en todas las farmacias?",
    a: "Sí, las recetas que emito son legalmente válidas en todas las farmacias de Chile, en formato físico o digital según corresponda.",
  },
  {
    q: "¿Cómo se realiza la videollamada?",
    a: "Usamos plataformas simples como WhatsApp Video, Zoom o la que prefieras. Solo necesitas una conexión a internet y el dispositivo que uses habitualmente.",
  },
  {
    q: "¿Puedo agendar para el mismo día?",
    a: "Sí, según disponibilidad puedo atenderte el mismo día. Escríbeme y coordinamos en el momento.",
  },
];

export default function Contact() {
  return (
    <section id="contacto" className="py-12 md:py-16 bg-gradient-to-br from-slate-900 to-blue-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-sky-200 text-xs font-semibold uppercase tracking-wide mb-3">
            Contacto
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            ¿Lista/o para cuidar tu salud?
          </h2>
          <p className="text-slate-300 max-w-lg mx-auto text-base leading-relaxed">
            Escríbeme y agendamos tu consulta en minutos. Sin filas, sin esperas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left: CTA + info */}
          <div>
            {/* Main WhatsApp CTA */}
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 rounded-2xl bg-[#25D366] hover:bg-[#20bf5a] transition-colors shadow-xl mb-5"
            >
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  fill="white"
                  className="w-8 h-8"
                  aria-hidden="true"
                >
                  <path d="M16.003 2.667C8.636 2.667 2.667 8.636 2.667 16c0 2.37.633 4.59 1.737 6.51L2.667 29.333l6.99-1.71A13.28 13.28 0 0 0 16.003 29.333c7.364 0 13.33-5.969 13.33-13.333S23.367 2.667 16.003 2.667zm0 24.267a11.003 11.003 0 0 1-5.61-1.537l-.4-.237-4.148 1.014 1.047-3.99-.26-.41A10.933 10.933 0 0 1 5.003 16c0-6.067 4.933-11 11-11s11 4.933 11 11-4.933 11-11 11zm6.04-8.233c-.33-.165-1.955-.963-2.258-1.073-.303-.11-.523-.165-.743.165s-.853 1.073-1.045 1.293c-.193.22-.385.248-.715.083-.33-.165-1.393-.514-2.652-1.638-.98-.875-1.643-1.957-1.836-2.287-.193-.33-.021-.508.145-.673.15-.148.33-.385.495-.578.165-.193.22-.33.33-.55.11-.22.055-.413-.028-.578-.083-.165-.743-1.793-.018-2.453.605-.575 1.32-.45 1.65-.43.083.005.165.01.248.01.303 0 .55.14.72.39.22.33.743 1.793.808 1.923.066.13.11.283.028.44-.083.165-.125.268-.248.413-.124.144-.26.32-.37.43-.11.11-.225.23-.097.45.128.22.568.937 1.22 1.517.837.748 1.543 1.043 1.76 1.16.218.117.345.098.473-.055.128-.153.55-.638.697-.857.146-.22.293-.183.495-.11.202.073 1.285.607 1.505.717.22.11.367.165.42.257.054.093.054.54-.138 1.06-.192.52-.77.993-1.205 1.12-.248.072-.56.13-.87.015z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-white font-bold text-xl">Agendar por WhatsApp</p>
                <p className="text-white/80 text-sm mt-0.5">
                  Haz clic y te respondo enseguida
                </p>
              </div>
              <Calendar size={20} className="text-white/60 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {info.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="rounded-xl bg-white/5 border border-white/10 p-4"
                  >
                    <span className={`inline-flex w-8 h-8 rounded-full items-center justify-center mb-3 ${item.color}`}>
                      <Icon size={15} />
                    </span>
                    <p className="text-slate-400 text-xs">{item.label}</p>
                    <p className="text-white font-semibold text-sm mt-0.5">{item.value}</p>
                    <p className="text-slate-400 text-xs mt-0.5">{item.sub}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: FAQ */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Preguntas frecuentes</h3>
            <div className="flex flex-col gap-3">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="rounded-xl bg-white/5 border border-white/10 p-4"
                >
                  <p className="text-white font-semibold text-sm mb-2">{faq.q}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

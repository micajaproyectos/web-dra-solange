import { Video, Home, FileText, Activity, ClipboardList } from "lucide-react";

const WA_URL =
  "https://wa.me/56933987534?text=Hola%20Dra.%20Solange%2C%20quisiera%20agendar%20una%20consulta";

const services = [
  {
    icon: Video,
    title: "Telemedicina",
    subtitle: "Videollamada",
    description:
      "Consulta médica por videollamada desde donde estés, sin salir de casa.",
    features: [
      "Consulta en tiempo real",
      "Diagnóstico clínico completo",
      "Orientación y tratamiento",
      "Disponible en todo Chile",
    ],
    color: "blue",
    bg: "bg-blue-50",
    iconBg: "bg-blue-500",
    border: "border-blue-100",
    badge: "bg-blue-100 text-blue-600",
  },
  {
    icon: Home,
    title: "Visita Domiciliaria",
    subtitle: "A tu hogar",
    description:
      "Atención en tu hogar, ideal para adultos mayores o movilidad reducida.",
    features: [
      "Sin traslados ni esperas",
      "Examen físico completo",
      "Atención a adultos mayores",
      "Sectores seleccionados",
    ],
    color: "emerald",
    bg: "bg-emerald-50",
    iconBg: "bg-emerald-500",
    border: "border-emerald-100",
    badge: "bg-emerald-100 text-emerald-700",
  },
  {
    icon: FileText,
    title: "Recetas Médicas",
    subtitle: "Online y en papel",
    description:
      "Receta médica digital, rápida y válida en todas las farmacias de Chile.",
    features: [
      "Receta digital al instante",
      "Medicamentos habituales",
      "100% válida en farmacias",
    ],
    color: "teal",
    bg: "bg-sky-50",
    iconBg: "bg-sky-500",
    border: "border-sky-100",
    badge: "bg-sky-100 text-sky-700",
  },
  {
    icon: ClipboardList,
    title: "Licencia Médica",
    subtitle: "Emisión online",
    description:
      "Evaluación y emisión de licencia médica online, válida en Isapre y Fonasa.",
    features: [
      "Evaluación previa por videollamada",
      "Licencia digital o en papel",
      "Válida en Isapre y Fonasa",
      "Tramitación ágil y sin filas",
    ],
    color: "violet",
    bg: "bg-violet-50",
    iconBg: "bg-violet-500",
    border: "border-violet-100",
    badge: "bg-violet-100 text-violet-700",
  },
  {
    icon: Activity,
    title: "Seguimiento",
    subtitle: "Control continuo",
    description:
      "Control periódico de tu salud, revisión de exámenes y ajuste de tratamientos.",
    features: [
      "Revisión de exámenes",
      "Ajuste de tratamientos",
      "Control de enfermedades crónicas",
      "Comunicación directa",
    ],
    color: "cyan",
    bg: "bg-cyan-50",
    iconBg: "bg-cyan-500",
    border: "border-cyan-100",
    badge: "bg-cyan-100 text-cyan-700",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-semibold uppercase tracking-wide mb-4">
            Mis servicios
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Todo lo que necesitas,
            <span className="text-sky-600"> sin complicaciones</span>
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-lg leading-relaxed">
            Ofrezco atención médica integral y personalizada, adaptada a tu
            ritmo de vida y necesidades.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className={`group relative rounded-2xl border ${s.border} ${s.bg} p-6 flex flex-col gap-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl ${s.iconBg} flex items-center justify-center text-white shadow-sm`}
                >
                  <Icon size={22} />
                </div>

                {/* Title */}
                <div>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${s.badge}`}>
                    {s.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-slate-800 mt-2">{s.title}</h3>
                  <p className="text-slate-600 text-sm mt-1.5 leading-relaxed">
                    {s.description}
                  </p>
                </div>

                {/* CTA */}
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block text-center px-4 py-2.5 rounded-full bg-white border border-slate-200 text-slate-700 text-sm font-semibold hover:border-sky-300 hover:text-sky-600 transition-colors shadow-sm"
                >
                  Agendar hora →
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

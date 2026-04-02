import Image from "next/image";
import { GraduationCap, Heart, Users } from "lucide-react";

const credentials = [
  { icon: GraduationCap, text: "Médico Cirujano" },
  { icon: Heart, text: "+8 años de experiencia clínica" },
  { icon: Users, text: "Más de 500 pacientes atendidos" },
];

export default function About() {
  return (
    <section className="py-20 md:py-28 section-divider">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: visual */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Foto */}
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-xl ring-4 ring-sky-100">
                <Image
                  src="/foto-sobremi.png"
                  alt="Dra. Solange"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border-2 border-sky-200 scale-110 opacity-50" aria-hidden="true" />
              <div className="absolute inset-0 rounded-full border border-blue-200 scale-125 opacity-30" aria-hidden="true" />
            </div>
          </div>

          {/* Right: content */}
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-semibold uppercase tracking-wide mb-5">
              Sobre mí
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-5">
              Una médico comprometida
              <span className="text-sky-600"> con tu bienestar</span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Soy la <strong className="text-slate-800">Dra. Solange</strong>, médico
              cirujano. A lo largo de mi carrera
              he atendido a cientos de pacientes con la misma dedicación: escuchar,
              diagnosticar y acompañar.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Creo firmemente que la salud de calidad debe ser accesible para todos.
              Por eso ofrezco telemedicina — para que la distancia nunca sea un
              obstáculo entre tú y la atención médica que mereces.
            </p>

            <div className="flex items-start gap-6">
              <ul className="flex flex-col gap-3">
                {credentials.map((c) => {
                  const Icon = c.icon;
                  return (
                    <li key={c.text} className="flex items-center gap-3">
                      <span className="w-9 h-9 rounded-full bg-sky-100 flex items-center justify-center shrink-0">
                        <Icon size={16} className="text-sky-600" />
                      </span>
                      <span className="text-slate-700 text-sm">{c.text}</span>
                    </li>
                  );
                })}
              </ul>

              {/* Certificado */}
              <div className="shrink-0">
                <Image
                  src="/certificado.jpg"
                  alt="Certificado Dra. Solange"
                  width={160}
                  height={200}
                  className="rounded object-cover shadow-sm border border-slate-100"
                />
                <p className="text-slate-400 text-xs mt-1.5 text-center leading-snug">
                  Título habilitante
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Stethoscope } from "lucide-react";

const WA_URL =
  "https://wa.me/56933987534?text=Hola%20Dra.%20Solange%2C%20quisiera%20agendar%20una%20consulta";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-sky-600 text-white">
                <Stethoscope size={18} />
              </span>
              <span className="font-semibold text-white text-lg">
                Dra.&nbsp;<span className="text-sky-400">Solange</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Médico general con más de 8 años de experiencia. Atención
              personalizada, cálida y profesional a través de telemedicina.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
              Servicios
            </h4>
            <ul className="flex flex-col gap-2 text-sm">
              {[
                "Telemedicina (Videollamada)",
                "Consulta Domiciliaria",
                "Recetas Médicas",
                "Seguimiento de Pacientes",
              ].map((s) => (
                <li key={s}>
                  <a
                    href={WA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-sky-400 transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
              Contacto
            </h4>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <a href="tel:+56933987534" className="hover:text-sky-400 transition-colors">
                  Teléfono: +56 9 3398 7534
                </a>
              </li>
              <li>Lunes a sábado: 9:00 – 20:00</li>
              <li>Región Metropolitana · Todo Chile (online)</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p>
            &copy; {new Date().getFullYear()} Dra. Solange · Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}

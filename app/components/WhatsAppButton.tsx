"use client";

const WA_URL =
  "https://wa.me/56933987534?text=Hola%20Dra.%20Solange%2C%20quisiera%20agendar%20una%20consulta";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Burbuja de texto */}
      <div className="relative bg-white text-slate-800 text-sm font-medium px-4 py-2.5 rounded-2xl shadow-lg border border-slate-100 whitespace-nowrap">
        Agenda tu cita
        {/* Cola de burbuja apuntando a la derecha */}
        <span
          aria-hidden="true"
          className="absolute right-[-7px] top-1/2 -translate-y-1/2 w-0 h-0"
          style={{
            borderTop: "7px solid transparent",
            borderBottom: "7px solid transparent",
            borderLeft: "8px solid white",
            filter: "drop-shadow(1px 0 1px rgba(0,0,0,0.06))",
          }}
        />
      </div>

      {/* Botón WhatsApp */}
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Agenda tu cita por WhatsApp"
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] shadow-xl wa-pulse hover:scale-110 transition-transform duration-200 shrink-0"
        style={{ borderRadius: "22%" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="white"
          className="w-9 h-9"
          aria-hidden="true"
        >
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
        </svg>
      </a>
    </div>
  );
}

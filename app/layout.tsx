import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dra. Solange | Médico Online · Telemedicina Chile",
  description:
    "Consulta médica online, domiciliaria y recetas con la Dra. Solange. Atención personalizada, profesional y cálida desde la comodidad de tu hogar. Agenda por WhatsApp.",
  keywords:
    "telemedicina chile, médico online, consulta médica online, médico a domicilio, recetas médicas online",
  openGraph: {
    title: "Dra. Solange | Telemedicina Chile",
    description:
      "Atención médica profesional desde casa. Videollamada, visita domiciliaria y recetas online.",
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CL" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-white text-slate-800`}>
        {children}
      </body>
    </html>
  );
}

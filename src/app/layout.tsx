import type { Metadata, Viewport } from "next";
import { Rubik } from "next/font/google";
import { Encabezado } from "@/components/encabezado";
import { Pie } from "@/components/pie";
import "./globals.css";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-rubik",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kios.com.ar"),
  title: {
    default: "KIOS · Aprendé a programar armando robots",
    template: "%s · KIOS",
  },
  description:
    "KIOS es la plataforma para aprender programación y robótica armando robots de verdad: clases con video, simulador, bloques y Python, para familias y escuelas.",
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: "KIOS",
    url: "https://kios.com.ar",
  },
};

export const viewport: Viewport = {
  themeColor: "#051e38",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-AR" className={rubik.variable}>
      <body className="min-h-dvh">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-boton focus:bg-blanco focus:px-4 focus:py-2"
        >
          Saltar al contenido
        </a>
        <Encabezado />
        <main id="contenido">{children}</main>
        <Pie />
      </body>
    </html>
  );
}

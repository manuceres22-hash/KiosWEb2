import type { Metadata, Viewport } from "next";
import { Rubik } from "next/font/google";
import { Encabezado } from "@/components/encabezado";
import { Pie } from "@/components/pie";
import { Aparecer } from "@/components/aparecer";
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
    default: "KIOS · Tecnología para aprender haciendo",
    template: "%s · KIOS",
  },
  description:
    "KIOS es una empresa de tecnología educativa: robots y kits, la plataforma KIOS para aprender a programar, capacitación docente y otras tecnologías para escuelas, gobiernos y familias.",
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
    <html lang="es-AR" className={rubik.variable} suppressHydrationWarning>
      <head>
        {/* Antes de pintar: con JS, lo que aparece al scrollear arranca escondido. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
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
        <Aparecer />
      </body>
    </html>
  );
}

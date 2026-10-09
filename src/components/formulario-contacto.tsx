"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { CONTACTO } from "@/datos/provisorio";

const MOTIVOS = [
  { id: "demo", texto: "Quiero una demo" },
  { id: "familia", texto: "Plan Familia" },
  { id: "escuela", texto: "KIOS en mi escuela" },
  { id: "ministerio", texto: "Ministerio o distrito" },
  { id: "kit", texto: "Comprar un kit" },
  { id: "avisame", texto: "Avisame cuando haya un kit nuevo" },
  { id: "otro", texto: "Otra consulta" },
];

/**
 * El sitio es estático, así que el formulario no manda nada por su cuenta:
 * arma el mail y lo abre en el programa de correo de quien escribe. Cuando haya
 * un servicio de formularios, se cambia `enviar` y nada más.
 */
export function FormularioContacto() {
  const params = useSearchParams();
  const motivoInicial = MOTIVOS.some((m) => m.id === params.get("motivo")) ? params.get("motivo")! : "demo";
  const kit = params.get("kit");
  const [enviado, setEnviado] = useState(false);

  function enviar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const datos = new FormData(e.currentTarget);
    const motivo = MOTIVOS.find((m) => m.id === datos.get("motivo"))?.texto ?? "Consulta";
    const destino = ["escuela", "ministerio"].includes(String(datos.get("motivo"))) ? CONTACTO.emailEscuelas : CONTACTO.email;
    const encabezado = [
      `Nombre: ${datos.get("nombre")}`,
      `Mail: ${datos.get("email")}`,
      datos.get("institucion") ? `Escuela o institución: ${datos.get("institucion")}` : null,
      kit ? `Kit: ${kit}` : null,
    ].filter(Boolean);
    const cuerpo = `${encabezado.join("\n")}\n\n${datos.get("mensaje") ?? ""}`;
    window.location.href = `mailto:${destino}?subject=${encodeURIComponent(`KIOS · ${motivo}`)}&body=${encodeURIComponent(cuerpo)}`;
    setEnviado(true);
  }

  const campo = "mt-1 block w-full rounded-boton border border-niebla bg-hielo px-4 py-3 text-lg text-marino focus:border-marino";

  return (
    <form onSubmit={enviar} className="grid gap-5">
      <h2 className="text-2xl font-bold">Contanos qué necesitás</h2>
      <label className="block">
        <span className="font-medium">Sobre qué es</span>
        <select name="motivo" defaultValue={motivoInicial} className={campo}>
          {MOTIVOS.map((m) => (
            <option key={m.id} value={m.id}>{m.texto}</option>
          ))}
        </select>
      </label>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="font-medium">Tu nombre</span>
          <input name="nombre" required autoComplete="name" className={campo} />
        </label>
        <label className="block">
          <span className="font-medium">Tu mail</span>
          <input name="email" type="email" required autoComplete="email" className={campo} />
        </label>
      </div>
      <label className="block">
        <span className="font-medium">Escuela o institución <span className="font-normal text-grafito">(si es para una)</span></span>
        <input name="institucion" autoComplete="organization" className={campo} />
      </label>
      <label className="block">
        <span className="font-medium">Mensaje</span>
        <textarea name="mensaje" rows={5} required className={campo} placeholder="Por ejemplo: somos una escuela con tres cursos de 5.º grado y queremos probarlo." />
      </label>
      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" className="fondo-lanzamiento min-h-12 rounded-boton px-6 py-3 text-lg font-medium text-noche">
          Enviar
        </button>
        <p className="text-sm text-grafito" role="status">
          {enviado ? "Se abrió tu programa de correo con el mensaje listo: sólo falta enviarlo." : "Se abre tu programa de correo con el mensaje armado."}
        </p>
      </div>
    </form>
  );
}

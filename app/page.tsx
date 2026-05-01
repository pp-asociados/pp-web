

const clientes = [
  "Club Atlético River Plate",
  "Club Atlético Vélez Sarsfield",
  "Secretaría de Cultura de la Nación",
  "Lonco Hue Mercedes Benz",
  "Sponsor Merchandising",
  "Gardiner",
  "Tequila",
  "Augusta",
  "Jet BA",
  "GENEA",
  "Enero Costanera",
  "La Fernetería Alcorta",
  "Blue Night",
  "Sendero Costanera",
  "Plásticos Floresta",
  "Garages comerciales e industrias",
  "Puertas Pentágono",
  "Hotel First Park Buenos Aires",
  "Boliches Clase C: Tequila – Jet BA",
  "Gastronomía: Gardiner – Augusta",
  "Empresas: Lonco Hue – Mercedes Benz",
  "Roaltex",
  "Caballito Shopping Center"
];

const servicios = [
  "Armado integral de Sistemas de Autoprotección",
  "Seguimiento de expedientes y subsanaciones",
  "Planos de evacuación y simulacros",
  "Protocolos de Seguridad e Higiene",
  "Capacitaciones, brigadas y RCP",
  "Gestiones y estudios de Medio Ambiente",
  "Simulación de evacuación de personas",
  "Simulación de humo FDS",
  "Tratamientos ignífugos"
];

const whatsapp =
  "https://wa.me/5491141692194?text=Hola%20quiero%20consultar%20por%20Sistemas%20de%20Autoprotección";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f1111] text-white">

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-[#f7f4ef]/95 backdrop-blur border-b border-stone-200 text-[#171514]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/logo.png" className="w-24" />
            <div>
              <h1 className="text-xl font-semibold">P&P Asociados</h1>
              <p className="text-sm text-stone-500">
                Seguridad, Higiene y Medio Ambiente
              </p>
            </div>
          </div>

          <a
            href={whatsapp}
            target="_blank"
            className="bg-[#171514] text-white px-5 py-3 rounded-full text-sm font-medium"
          >
            Solicitar Consulta
          </a>
        </div>
      </header>

      {/* HERO (CORREGIDO SIN IMAGEN) */}
      <section className="relative overflow-hidden">

        {/* FONDO SIN ERROR */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#171514] via-[#2a2824] to-[#0f1111]"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-semibold leading-tight mb-6">
              Sistemas de Autoprotección, Seguridad e Higiene y Medio Ambiente
            </h2>

           Nos ocupamos de todo tu Sistema de Autoprotección (Ley 5920): armado, presentación, seguimiento del expediente y resolución de subsanaciones ante Defensa Civil. Incluye confección de planos de evacuación conforme normativa, simulaciones según requerimiento del establecimiento y gestión integral.

También realizamos presentaciones de vigencias, declaraciones juradas y reválidas según Disposición 331/2025.

Si sos profesional, podés delegar el armado y la carga del Sistema de Autoprotección: nosotros lo desarrollamos y gestionamos bajo tu firma como profesional responsable, optimizando tiempos y evitando tareas administrativas tediosas.

            <a
  href="https://wa.me/5491141692194?text=Hola,%20quiero%20consultar%20por%20un%20Sistema%20de%20Autoprotección"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-[#d8bd82] text-[#171514] px-7 py-4 rounded-full font-medium"
>
  Solicitar consulta por WhatsApp
</a>

<p className="text-xs text-white/50 mt-2">
  Respuesta rápida en el día hábil

  

          <div className="bg-white/10 border border-white/15 rounded-[2rem] p-8">
            {servicios.map((item) => (
              <div key={item} className="border-b border-white/10 py-4">
                ✓ {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTES */}
      <section className="bg-[#fef8dc] py-14 overflow-hidden text-[#171514]">
        <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
          <h3 className="text-3xl md:text-4xl font-semibold mb-3">
            Empresas que confían en nuestro trabajo
          </h3>

          <p className="text-stone-600 text-sm">
            Más de 7 años de experiencia en Sistemas de Autoprotección (Ley 5920)
          </p>
        </div>

        <div className="overflow-hidden">
          <div className="flex gap-6 whitespace-nowrap font-medium">
            {[...clientes, ...clientes].map((item, i) => (
              <span key={i} className="px-5 py-3 bg-white/70 rounded-full border shadow-sm">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="uppercase tracking-[0.25em] text-[#d8bd82] text-sm mb-3">
            Servicios
          </p>

          <h3 className="text-3xl md:text-5xl font-semibold mb-5">
            Gestión integral, prolija y técnicamente respaldada
          </h3>

          <p className="text-white/65 max-w-3xl mx-auto">
            Acompañamiento en Sistemas de Autoprotección (Ley 5920), Seguridad, Higiene y Medio Ambiente.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card title="Sistemas de Autoprotección" text="Armado, desarrollo y presentación de SAP (Ley 5920 y Disp. 331/2025)." />
          <Card title="Expedientes y subsanaciones" text="Seguimiento completo y respuestas técnicas ante Defensa Civil." />
          <Card title="Seguridad e Higiene" text="Protocolos, matrices de riesgo, estudios y documentación para ART." />
          <Card title="Capacitaciones y brigadas" text="Capacitación del personal, brigadas contra incendio y RCP." />
          <Card title="Medio Ambiente" text="Gestiones ambientales, residuos y estudios requeridos." />
          <Card title="Planos y simulaciones" text="Evacuación de personas y simulaciones de humo (FDS)." />
          <Card title="Tratamientos ignífugos" text="Gestión y certificación de tratamientos ignífugos." />
          <Card title="Estudios complementarios" text="Iluminación, ruido, ergonomía y otros protocolos." />
          <Card title="Asesoramiento integral" text="Acompañamiento completo en cada etapa del trámite." />
        </div>
      </section>

      {/* CONTACTO */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-white/10 border border-white/10 rounded-[2rem] p-10 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-semibold mb-5">
              ¿Necesitás presentar o responder una observación?
            </h3>

            <p className="text-white/70">
              Escribinos por WhatsApp o comunicate directamente.
            </p>
          </div>

          <div className="space-y-4">
            <p className="bg-white/10 rounded-2xl p-4">📱 11-4169-2194</p>
            <p className="bg-white/10 rounded-2xl p-4">📱 11-4043-3283</p>

            <a
              href={whatsapp}
              target="_blank"
              className="block text-center bg-[#d8bd82] text-[#171514] px-6 py-4 rounded-full font-medium"
            >
              Enviar consulta
            </a>
          </div>
        </div>
      </section>

      {/* BOTÓN */}
      <a
        href={whatsapp}
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-3 rounded-full shadow-lg"
      >
        Consultar
      </a>

      {/* FOOTER */}
      <footer className="text-center text-sm text-white/50 py-8 border-t border-white/10">
        © 2026 P&P Asociados
      </footer>

    </main>
  );
}

function Card({ title, text }: { title: string; text: string }) {
  return (
    <div className="bg-white text-[#171514] border border-stone-200 rounded-[1.75rem] p-7 shadow-sm">
      <h4 className="text-xl font-semibold mb-3">{title}</h4>
      <p className="text-stone-600 leading-relaxed">{text}</p>
    </div>
  );
}
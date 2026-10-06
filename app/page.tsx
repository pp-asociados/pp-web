"use client";
import { useEffect, useState } from "react";

 const clientes = [
  { nombre: "Augusta", logo: "/logos/augusta.PNG" },
  { nombre: "Clínica Santa Rosa", logo: "/logos/clinica santa rosa.PNG" },
  { nombre: "Costa 7070", logo: "/logos/costa7070.PNG" },
  { nombre: "Enero Costanera", logo: "/logos/enero.png" },
  { nombre: "ESEADE", logo: "/logos/eseade.png" },
  { nombre: "Feir's Park Hotel", logo: "/logos/feirs parj hotel.png" },
  { nombre: "Gardiner", logo: "/logos/gardiner.JPG" },
  { nombre: "GENEA", logo: "/logos/genea.PNG" },
  { nombre: "Club Atlético Huracán", logo: "/logos/huracan.PNG" },
  { nombre: "Lonco Hue", logo: "/logos/lonco hue.PNG" },
  { nombre: "Magnolia", logo: "/logos/magnolia.PNG" },
  { nombre: "Matafuegos Paraná", logo: "/logos/matafuegos parana.png" },
  { nombre: "Plásticos Floresta", logo: "/logos/plasticos floresta.PNG" },
  { nombre: "Saporiti", logo: "/logos/saporiti.PNG" },
  { nombre: "Sendero", logo: "/logos/sendero.PNG" },
  { nombre: "Sheshu Home", logo: "/logos/sheshu.png" },
  { nombre: "Sponsor", logo: "/logos/sponsor.JPG" },
  { nombre: "Tequila Club", logo: "/logos/tequila club.PNG" },
  { nombre: "Ver", logo: "/logos/ver.PNG" },
  { nombre: "Zamudio Mosaicos", logo: "/logos/zamudio mosaicos.JPG" },
];

const servicios = [
  "Servicio integral de Seguridad e Higiene",
  "Sistemas de Autoprotección (SAP)",
  "Seguridad e Higiene en Obras",
  "Medio Ambiente y gestión de residuos",
  "Protección contra incendios",
  "Capacitaciones, brigadas, RCP y DEA",
  "Mediciones, estudios y protocolos",
  "Planos de evacuación y simulaciones",
  "Tratamientos ignífugos",
  "Gestiones técnicas, expedientes y habilitaciones",
];

const areas = [
  "Seguridad e Higiene",
  "Sistemas de Autoprotección",
  "Medio Ambiente",
  "Seguridad en Obras",
  "Protección contra Incendios",
  "Capacitaciones",
];

const whatsapp =
 "https://wa.me/5491124764333?text=Hola%2C%20quiero%20realizar%20una%20consulta%20sobre%20los%20servicios%20de%20P%26P%20Asociados."
export default function Home() {
  const [areaActual, setAreaActual] = useState(0);
  useEffect(() => {
  const intervalo = setInterval(() => {
    setAreaActual((anterior) => (anterior + 1) % areas.length);
  }, 2500);

  return () => clearInterval(intervalo);
}, []);
  return (
    <main className="min-h-screen bg-[#0f1111] text-white">

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-[#f7f4ef]/95 backdrop-blur border-b border-stone-200 text-[#171514]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/logo.png" className="w-32" />
            <div>
              <h1 className="text-2xl font-semibold">P&P Asociados</h1>
              <p className="text-base text-stone-500">
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
  <div className="absolute inset-0 bg-gradient-to-br from-[#171514] via-[#2a2824] to-[#171514]"></div>

  <div className="relative max-w-6xl mx-auto pl-16 pr-8 grid md:grid-cols-1 gap-...">
    <div>
      
    </div>
  </div>

</section>
            <h2 className="text-4xl md:text-6xl font-semibold leading-tight mb-6 max-w-5xl mx-auto">
             Soluciones integrales para empresas, comercios y profesionales.
              <span key={areaActual} className="block mt-3 text-[#7da544] area-animada">
  {areas[areaActual]}
</span>
            </h2>

           <p className="max-w-5xl mx-auto">
           P&P Asociados es una consultora especializada en Seguridad e Higiene, Sistemas de Autoprotección y Medio Ambiente. Brindamos soluciones integrales para empresas, comercios, obras y profesionales, adaptándonos a las necesidades de cada establecimiento.
 Desde un servicio puntual hasta una gestión integral, Contamos con profesionales y especialistas para acompañar cada proyecto de manera técnica y personalizada.
 
   
</p>
<p className="text-xs text-white/50 mt-2">
  Respuesta rápida en el día hábil
</p>        
  



  

          <div className="bg-white/10 border border-white/15 rounded-[2rem] p-8">
            {servicios.map((item) => (
              <div key={item} className="border-b border-white/10 py-4">
                ✓ {item}
              </div>
            ))}
          </div>
      

      {/* CLIENTES */}
      <section className="bg-[#fef8dc] py-14 overflow-hidden text-[#171514]">
        <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
          <h3 className="text-3xl md:text-4xl font-semibold mb-3">
            Empresas que confían en nuestro trabajo
          </h3>

          <p className="text-stone-600 text-sm">
            Más de 8 años de experiencia en Sistemas de Autoprotección (Ley 5920)
          </p>
        </div>

        <div className="overflow-hidden">
  <div className="flex gap-6 whitespace-nowrap logos-track">
    {[...clientes, ...clientes].map((item, i) => (
      <div
        key={i}
        className="flex-none w-44 h-28 bg-white rounded-2xl border border-black/10 p-4 flex items-center justify-center"
      >
        <img
          src={item.logo}
          alt={item.nombre}
          className="max-w-full max-h-full object-contain"
        />
      </div>
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
            Soluciones en Seguridad e Higiene, Sistemas de Autoprotección, Medio Ambiente, Obras y Protección contra Incendios.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card title="Sistemas de Autoprotección (SAP)" text="Desarrollo, presentación, carga, seguimiento, subsanaciones y reválidas." />
          <Card title="Gestiones técnicas y habilitaciones" text="Expedientes, subsanaciones, trámites ante organismos y seguimiento administrativo." />
          <Card title="Seguridad e Higiene" text="Servicio integral, protocolos, mediciones, documentación, ART y asesoramiento técnico." />
          <Card title="Capacitaciones y brigadas" text="Evacuación, uso de extintores, brigadas, RCP, DEA y formación del personal." />
         <Card title="Medio Ambiente" text="Gestión ambiental, RSU, AVU, análisis de agua y documentación correspondiente." />
          <Card title="Planos y simulaciones" text="Planos de evacuación, simulación de humo y evacuación de personas." />
         <Card title="Tratamientos ignífugos" text="Aplicación de productos ignífugos, certificación de tratamientos y asesoramiento según el tipo de material y establecimiento." />
          <Card title="Mediciones y protocolos" text="Ruido, iluminación, ergonomía, puesta a tierra y otros estudios técnicos." />
          <Card title="Capacitación práctica en RCP y DEA" text="Entrenamiento teórico-práctico con muñecos de RCP y uso de DEA, orientado a personal de empresas, comercios y establecimientos." />
          <Card title="Seguridad e Higiene en Obras" text="Acompañamiento profesional, visitas, documentación, permisos y gestión de Seguridad e Higiene durante la obra." />
          <Card title="Protección contra Incendios" text="Extintores, recargas y mantenimiento, redes de hidrantes, señalización, tratamientos ignífugos y gestión de documentación con código QR." />
          <Card title="Impacto acústico y ruido" text="Mediciones de emisión e inmisión sonora, evaluación de ruidos molestos y documentación técnica." />
          <Card title="Gestiones ante ART y SRT" text="Trámites, documentación y seguimiento técnico vinculados a Seguridad e Higiene laboral ante ART y SRT." />
          <Card title="Fachadas y frentes" text="Relevamientos, documentación técnica y gestiones vinculadas a fachadas y frentes de comercios, edificios y establecimientos." />
          <Card title="Permisos y gestión de obras" text="Avisos y permisos de obra, documentación técnica, trámites, presentaciones y seguimiento ante los organismos correspondientes." />

        </div>
      </section>

      {/* SERVICIO PARA PROFESIONALES */}
<section className="max-w-7xl mx-auto px-6 py-20">
  <div className="bg-[#fef8dc] text-[#171514] rounded-[2rem] p-8 md:p-12">
    <p className="text-[#7da544] font-semibold uppercase tracking-widest mb-3">
      Servicio exclusivo para profesionales
    </p>

    <h2 className="text-3xl md:text-5xl font-semibold leading-tight mb-6">
      Mantené tu firma. Nosotros nos ocupamos del desarrollo del SAP.
    </h2>

    <p className="text-lg mb-8 max-w-5xl">
      Si sos profesional, podés delegar en P&P Asociados el desarrollo del Sistema de Autoprotección, manteniendo siempre tu firma y responsabilidad profesional.
    </p>

    <div className="grid md:grid-cols-3 gap-4 mb-8">
      <div className="bg-white rounded-2xl p-5">
        <strong>Desarrollo del SAP</strong>
        <p className="mt-2 text-sm">Desarrollo completo para tu revisión y presentación.</p>
      </div>

      <div className="bg-white rounded-2xl p-5">
        <strong>SAP + carga</strong>
        <p className="mt-2 text-sm">Desarrollo y carga de la documentación correspondiente.</p>
      </div>

      <div className="bg-white rounded-2xl p-5">
        <strong>Gestión completa</strong>
        <p className="mt-2 text-sm">Desarrollo, carga, seguimiento del expediente y subsanaciones.</p>
      </div>
    </div>
    <div className="mt-8 mb-6">
  <h3 className="text-2xl font-semibold mb-3">
    Experiencia en gestión integral de SAP con resultado favorable
  </h3>

  <p className="text-sm text-stone-600 mb-4">
    Desarrollo del Sistema de Autoprotección, carga documental, seguimiento del expediente, subsanaciones, simulacros, vigencias y gestión integral del trámite, realizados como servicio para profesionales que mantuvieron su firma y responsabilidad técnica.</p>

  <div className="flex flex-wrap gap-2">
    {[
      "Club Atlético River Plate",
      "Club Atlético Vélez Sarsfield",
      "Teatro Nacional Cervantes",
      "Ciudad Cultural Konex",
      "Museo del Whisky",
      "Hotel Bisonte",
    ].map((caso) => (
      <span
        key={caso}
        className="bg-white/70 border border-black/10 rounded-full px-4 py-2 text-sm"
      >
        {caso}
      </span>
    ))}
  </div>
  <p className="mt-4 text-sm text-stone-600">
  Entre otros establecimientos y rubros, con amplia experiencia en comercios, hoteles, industrias, geriátricos, garages, depósitos, locales gastronómicos, talleres y empresas.
</p>
</div>
    <p className="mt-4 mb-5 text-sm text-stone-600">
  Servicio dirigido exclusivamente a profesionales que mantienen su firma y responsabilidad técnica.
</p>

    <a
      href="https://wa.me/5491124764333?text=Hola,%20soy%20profesional%20y%20quiero%20consultar%20por%20el%20servicio%20de%20SAP"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-[#171514] text-white px-6 py-3 rounded-full font-medium"
    >
      Consultar servicio para profesionales
    </a>
  </div>
</section>

      {/* CONTACTO */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-white/10 border border-white/10 rounded-[2rem] p-10 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-semibold mb-5">
              ¿Cómo podemos ayudarte?
            </h3>

            <p className="text-white/70">
             Contactanos para recibir asesoramiento sobre nuestros servicios.
            </p>
          </div>

          <div className="space-y-4">
            <p className="bg-white/10 rounded-2xl p-4">📱 1141692194</p>
            <p className="bg-white/10 rounded-2xl p-4">📱 1124764333</p>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=contacto@asociadospyp.com" className="block bg-white/10 rounded-2xl p-4">✉ contacto@asociadospyp.com</a>
            <div className="flex gap-3 pt-2">
  <a
    href="https://www.instagram.com/p_pasociados/"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white/10 rounded-2xl px-4 py-3"
  >
    Instagram
  </a>

  <a
    href="https://www.facebook.com/share/19KS2CrCbQ/?mibextid=wwXIfr"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white/10 rounded-2xl px-4 py-3"
  >
    Facebook
  </a>
</div>
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
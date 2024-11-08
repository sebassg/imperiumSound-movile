import "../index.css";
import { Flower2, Handshake, BarChart2, Eye, ArrowUpCircle, Award } from "lucide-react";
import Navbar from "./Navbar";

const Nosotros = [
  {
    title: "Nosotros",
    description: "En Imperium sound nos dedicamos a ayudarte a entender y controlar el ruido en tu entorno. Creemos que un ambiente acústico saludable es fundamental para el bienestar y la productividad.",
    icon: Flower2
  },
  {
    title: "Nuestro compromiso",
    description: "Nos comprometemos a proporcionar una herramienta fiable y precisa para mejorar tu calidad de vida. Creemos que un entorno más tranquilo contribuye a una mejor salud mental y física.",
    icon: Handshake
  },
  {
    title: "¿Qué hacemos?",
    description: "Ofrecemos una herramienta en línea fácil de usar que mide el nivel de ruido en las instituciones educativas. Con solo unos clics, puedes obtener datos precisos sobre la intensidad del sonido y recibir recomendaciones para mejorar tu espacio acústico.",
    icon: BarChart2
  },
  {
    title: "Visión",
    description: "Aspiramos a ser líderes en el campo del monitoreo acústico, ofreciendo soluciones innovadoras que mejoren la calidad de vida de los estudiantes y docentes. Nos esforzamos por educar a la comunidad sobre la importancia del control del ruido y proporcionar las herramientas necesarias para lograr un entorno más silencioso y saludable.",
    icon: Eye
  },
  {
    title: "Innovación y Tecnología",
    description: "En Imperium sound, estamos a la vanguardia de la tecnología acústica. Nuestra herramienta utiliza algoritmos avanzados y sensores precisos para ofrecerte datos exactos sobre el nivel de ruido. Estamos constantemente mejorando y actualizando nuestra tecnología para asegurarnos de que tengas acceso a las mejores soluciones disponibles en el mercado.",
    icon: ArrowUpCircle
  },
  {
    title: "Responsabilidad Social",
    description: "Nos preocupamos por el impacto del ruido en la salud y el medio ambiente. Por eso, colaboramos con organizaciones y comunidades para promover la conciencia sobre la contaminación acústica y sus efectos. A través de campañas educativas y proyectos comunitarios, trabajamos para crear un entorno más saludable y sostenible para todos.",
    icon: Award
  }
]

export default function ComponentNosotros() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#0c041c] to-[#10041c] py-8 px-4">
        <div className="fixed top-0 left-0 w-full z-10">
      <Navbar></Navbar>
      </div>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-8 sm:mb-12">
            Nosotros
          </h1>
        <div className="max-w-[450px] mx-auto">
          <div className="space-y-8">
            {Nosotros.map((section, index) => (
              <div key={index} className="flex flex-col items-center text-center relative bg-indigo-950/50 rounded-3xl p-6 backdrop-blur-sm transform transition-transform">
                <div className="mb-6 w-24 h-24 bg-[#d8d8d8] rounded-full flex items-center justify-center">
                  <div className="w-20 h-20 bg-[#1c0c34] rounded-full flex items-center justify-center">
                    <section.icon className="w-10 h-10 text-purple-200" />
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-white mb-4">
                  {section.title}
                </h2>

                <p className="text-purple-200 leading-relaxed">
                  {section.description}
                </p>
              </div>
            ))}
          </div>

          {}
          <div className="fixed bottom-10 right-6 w-2 h-2 bg-indigo-400 rounded-full opacity-30" />
          <div className="fixed top-40 right-8 w-3 h-3 bg-purple-400 rounded-full opacity-20" />
        </div>
      </div>
    </>
  )
}

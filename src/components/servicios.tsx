import "../index.css";
import { Volume2, LineChart, Globe, CheckCircle, Headphones, Target } from "lucide-react"

const services = [
  {
    title: "Control de ruido",
    description: "En los entornos educativos, el dispositivo puede alertar a los administradores cuando los niveles de ruido excedan ciertos límites, lo que les permitirá tomar medidas para mantener un ambiente tranquilo y agradable.",
    icon: Volume2
  },
  {
    title: "Monitoreo",
    description: "Proporciona información en tiempo real sobre los niveles de ruido en las aulas, lo que ayuda a las directivas a tomar medidas para reducir la contaminación acústica.",
    icon: LineChart
  },
  {
    title: "Accesibilidad",
    description: "Disponible en cualquier dispositivo con acceso a internet, sin necesidad de descargas.",
    icon: Globe
  },
  {
    title: "Recomendaciones",
    description: "Recibe consejos prácticos para reducir el ruido y mejorar tu bienestar.",
    icon: CheckCircle
  },
  {
    title: "Soporte Dedicado",
    description: "Nuestro equipo de soporte está siempre disponible para ayudarte con cualquier duda o problema.",
    icon: Headphones
  },
  {
    title: "Precisión",
    description: "Utilizamos tecnología avanzada para ofrecerte mediciones exactas del nivel de ruido.",
    icon: Target
  }
]

export default function ComponentServicios() {
  return ( <>
    <div className="min-h-screen bg-gradient-to-br from-purple-950 to-indigo-950 py-8 px-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          SERVICIOS
        </h1>
        
        <div className="space-y-4">
          {services.map((service, index) => (
              <div 
              key={index}
              className="relative bg-indigo-950/50 rounded-3xl p-6 backdrop-blur-sm transform transition-transform hover:scale-102 hover:shadow-lg"
              >
              <div className="flex flex-col items-center gap-6">
                <div className="w-24 h-24 bg-purple-600 rounded-full flex items-center justify-center">
                  <div className="bg-white rounded-full p-6">
                    <service.icon className="w-8 h-8 text-purple-600" />
                  </div>
                </div>
                
                <div className="text-center">
                  <h2 className="text-2xl font-semibold text-gray-200 mb-2">
                    {service.title}
                  </h2>
                  <p className="text-gray-300">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {}
        <div className="fixed top-20 left-4 w-2 h-2 bg-purple-500 rounded-full opacity-50" />
        <div className="fixed bottom-10 right-6 w-2 h-2 bg-indigo-400 rounded-full opacity-30" />
        <div className="fixed top-40 right-8 w-3 h-3 bg-purple-400 rounded-full opacity-20" />
      </div>
    </div>
          </>
  )
}
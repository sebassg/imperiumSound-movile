import Navbar from "./Navbar";
export default function Contact() {
    return (
      <div className="min-h-screen bg-gradient-to-br bg-gradient-to-br from-[#0c041c] to-[#10041c] py-4 sm:py-8 px-3 sm:px-6 lg:px-8">
        <div className="fixed top-0 left-0 w-full z-10">
        <Navbar></Navbar>
        </div>
        <div className="max-w-[450px] mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-8 sm:mb-12 mt-10">
            Contáctanos
          </h1>
  
          <div className="grid gap-6 sm:gap-8 md:gap-12">
            <form className="space-y-4 sm:space-y-6">
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Nombre"
                  className="w-full p-3 sm:p-4 bg-white/10 border-2 border-purple-500/20 rounded-lg placeholder:text-purple-200/50 text-white transition-all focus:bg-white/20 focus:border-purple-500 focus:outline-none group-hover:bg-white/15 text-sm sm:text-base"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 blur-xl group-hover:opacity-20 transition-opacity" />
              </div>
  
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Sugerencias"
                  className="w-full p-3 sm:p-4 bg-white/10 border-2 border-purple-500/20 rounded-lg placeholder:text-purple-200/50 text-white transition-all focus:bg-white/20 focus:border-purple-500 focus:outline-none group-hover:bg-white/15 text-sm sm:text-base"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 blur-xl group-hover:opacity-20 transition-opacity" />
              </div>
  
              <div className="relative group">
                <textarea
                  placeholder="Mensaje"
                  rows={4}
                  className="w-full p-3 sm:p-4 bg-white/10 border-2 border-purple-500/20 rounded-lg placeholder:text-purple-200/50 text-white transition-all focus:bg-white/20 focus:border-purple-500 focus:outline-none group-hover:bg-white/15 resize-none text-sm sm:text-base"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 blur-xl group-hover:opacity-20 transition-opacity" />
              </div>
  
              <button className="w-full p-3 sm:p-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-medium transition-all hover:from-purple-500 hover:to-indigo-500 hover:shadow-lg hover:shadow-purple-500/25 active:scale-[0.98] text-sm sm:text-base">
                ENVIAR
              </button>
            </form>
  
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-4 sm:p-8 space-y-4 sm:space-y-6 border border-white/10 shadow-xl">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-purple-500/10 flex items-center justify-center">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 text-purple-300">📍</div>
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-medium text-purple-300/80">UBICACIÓN</p>
                  <p className="text-white font-medium text-sm sm:text-base">MEDELLÍN, ANTIOQUIA</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-purple-500/10 flex items-center justify-center">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 text-purple-300">📞</div>
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-medium text-purple-300/80">CELULAR</p>
                  <p className="text-white font-medium text-sm sm:text-base">3136173078</p>
                </div>
              </div>
  
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-purple-500/10 flex items-center justify-center">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 text-purple-300">✉️</div>
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-medium text-purple-300/80">E-MAIL</p>
                  <p className="text-white font-medium text-sm sm:text-base break-all">IMPERIUM.SOUND@GMAIL.COM</p>
                </div>
              </div>
  
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-purple-500/10 flex items-center justify-center">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 text-purple-300">⏰</div>
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-medium text-purple-300/80">HORARIO</p>
                  <p className="text-white font-medium text-sm sm:text-base">LUN - VIER 9:00 AM A 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>
  
          <div className="fixed inset-0 -z-10 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-32 sm:w-64 h-32 sm:h-64 bg-purple-500/30 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-indigo-500/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    );
  }
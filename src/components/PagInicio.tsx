import "../index.css";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function PagInicio() {
  const navigate = useNavigate();
  const registroURL = "/register";

  return (<>
    <div className="min-h-screen bg-gradient-to-br from-[#0c041c] to-[#10041c] py-8 px-4">

    <Navbar></Navbar>
  
      <main className="flex flex-col items-start mt-24 px-6 md:px-12 w-full">
        <div className="flex flex-col items-start mb-8">
          <h1 className="text-5xl sm:text-6xl text-neutral-300 font-bold mb-4">10,000</h1>
          <h2 className="text-3xl sm:text-4xl text-neutral-300 font-semibold mb-4">Personas a tiempo real</h2>
        </div>
    
        <p className="text-lg sm:text-xl max-w-lg mx-auto mb-8 text-neutral-400">
          Bienvenidos a IMPERIUM SOUND, donde la música y el sonido se fusionan para ofrecerte una experiencia única. Únete a nuestra comunidad y sé parte de esta vibrante red de personas que disfrutan de lo mejor del entretenimiento sonoro, ¡todo en tiempo real!
        </p>

        <button
          onClick={() => navigate(registroURL)}
          className="bg-[#402484] text-white px-6 py-3 rounded-full text-lg text-neutral-00 font-medium font-bold transition duration-300"
          >
          REGISTRARME
        </button>
      </main>
      
          <div className="fixed bottom-10 right-6 w-2 h-2 bg-indigo-400 rounded-full opacity-30" />
          <div className="fixed top-40 right-8 w-3 h-3 bg-purple-400 rounded-full opacity-20" />
    </div>
          </>
  );
}

export default PagInicio;


import { useEffect, useState } from "react";
import NoiseLevelMeter from "./Microfono";
import MisRegistros from "./Misregistros";
import { validToken } from "../../components/Token";
import Navbar from "../../components/Navbar";

interface UserType {
  idUser: string;
  userName: string;
  nombre: string;
}

function RegistroSonoroIndex() {
  const [user, setUser] = useState<UserType | null>(null);
  const [mostrarComponente, setMostrarComponente] = useState<
    "crear" | "misRegistros"
  >("crear");

  const tokenEffect = async () => {
    const result = await validToken();
    if (result) {
      setUser(result);
    }
  };

  useEffect(() => {
    tokenEffect();
  }, []);

  const nombre = user?.nombre;

  const renderizarComponente = () => {
    switch (mostrarComponente) {
      case "crear":
        return <NoiseLevelMeter />;
      case "misRegistros":
        return <MisRegistros />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="bg-gray-200 min-h-screen flex flex-col bg-gradient-to-br from-[#0c041c] to-[#10041c]">
        <Navbar />

        <div className="flex-grow flex flex-col items-center justify-start p-4">
          {/* Mensaje de bienvenida */}
          <h1 className="text-2xl font-bold text-white mb-4">
            Bienvenido a los registros sonoros, {nombre}!
          </h1>

          {/* Contenedor para los botones */}
          <div className="flex space-x-4 mb-6">
            <button
              onClick={() => setMostrarComponente("misRegistros")}
              className="bg-[#3c2484] text-white py-2 px-4 rounded-lg shadow hover:bg-purple-700 transition duration-200"
            >
              Mis registros
            </button>
            <button
              onClick={() => setMostrarComponente("crear")}
              className="bg-[#3c2484] text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition duration-200"
            >
              Crear registro
            </button>
          </div>
          <div>{renderizarComponente()}</div>
        </div>
        <div className="fixed bottom-10 right-6 w-2 h-2 bg-indigo-400 rounded-full opacity-30" />
        <div className="fixed top-40 right-8 w-3 h-3 bg-purple-400 rounded-full opacity-20" />
      </div>
    </>
  );
}

export default RegistroSonoroIndex;

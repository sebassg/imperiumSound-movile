import { useEffect, useState } from "react";
import { API } from "../../config";
import RegistrosSonorosCard from "./RegistrosSonorosCard";

// Define el tipo de cada registro
interface RegistrosSonorosType {
  nivelSonoro: string;
  lugar: string;
  fechaHora: string;
}

const MisRegistros = () => {
  const [resistro, setRegistro] = useState<RegistrosSonorosType[]>([]);

  const registrosSonoros = async () => {
    try {
      const response = await fetch(`${API}/registrosSonoros/me`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (!response.ok) {
        console.log("fallo");
        return;
      }

      const result: RegistrosSonorosType[] = await response.json();
      console.log(result);
      setRegistro(result);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    registrosSonoros();
  }, []);

  return (
    <>
      <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg p-4 border border-gray-200">
        Mis registros
      </div>

      {/* Renderiza cada registro usando map */}
      {resistro.map((registro, index) => (
        <RegistrosSonorosCard
          key={index}
          dB={registro.nivelSonoro}
          lugar={registro.lugar}
          fechaHora={registro.fechaHora}
        />
      
      ))
      }
    </>
  );
};

export default MisRegistros;

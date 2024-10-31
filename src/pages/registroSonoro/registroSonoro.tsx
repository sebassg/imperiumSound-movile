
import { useEffect, useState } from "react";
import NoiseLevelMeter from "./Microfono";
import { validToken } from "../../components/Token";
import Navbar from "../../components/Navbar";

interface UserType {
  idUser: string;
  userName: string;
  nombre: string;
}

function RegistroSonoro() {
  const [user, setUser] = useState<UserType | null>(null);

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

  return (
    <>
      <div className="bg-gray-100 min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
            Bienvenido a los registros sonoros, {nombre}!
          </h1>
          <div className=" p-6 rounded-lg  w-full max-w-md">
            <NoiseLevelMeter />
          </div>
        </div>
      </div>
    </>
  );
}

export default RegistroSonoro;

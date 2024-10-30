
import { useEffect, useState } from "react";
import NoiseLevelMeter from "./Microfono";
import { validToken } from "../../components/Token";

interface UserType {
 
  idUser: string;
  userName: string;
  nombre: string
 
}

function RegistroSonoro() {
    
    const [user, setUser] = useState<UserType | null>(null);

    const tokenEffect = async () => {
        const result = await validToken(); 
        if (result) { 
          const { user } = result; 
          
          setUser(user);
        }
      };
    
      useEffect(() => {
        tokenEffect();
      }, []);

      const nombre = user?.nombre
  
  return (
    <>
      <NoiseLevelMeter />
      <h1>hola {nombre}</h1>
    </>
  );
}

export default RegistroSonoro;

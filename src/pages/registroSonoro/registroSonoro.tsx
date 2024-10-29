
import { useEffect, useState } from "react";
import NoiseLevelMeter from "./Microfono";
import { validToken } from "../../components/Token";

function RegistroSonoro() {
    
    const [user, setUser] = useState<UserType | null>(null);

    const tokenEffect = async () => {
        const result = await validToken(); 
        if (result) { 
          const { user } = result; 
          console.log("holaaa",result); 
          setUser(user);
        }
      };
    
      useEffect(() => {
        tokenEffect();
      }, []);
  
  return (
    <>
      <NoiseLevelMeter />
      <h1>hola</h1>
    </>
  );
}

export default RegistroSonoro;

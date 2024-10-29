
import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";
import { validToken } from "../../components/Token";

interface UserType {
  idUser: string;
  nombre: string;
  userName: string;
}

export default function Home() {
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

  const userName = user?.userName

  return (
    <>
      <Navbar />
      
      <h1>hola {userName}</h1>
    </>
  );
}

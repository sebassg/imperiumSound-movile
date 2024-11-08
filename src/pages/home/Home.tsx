
import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";
import { validToken } from "../../components/Token";
import PagInicio from "../../components/PagInicio";

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
    
      setUser(user);
    }
  };

  useEffect(() => {
    tokenEffect();
    
  }, []);

  const userName = user?.userName

  return (
    <>
    
      <PagInicio/>
      
    </>
  );
}

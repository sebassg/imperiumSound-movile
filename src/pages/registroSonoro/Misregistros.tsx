import { useEffect, useState } from "react";
import { API } from "../../config";
import RegistrosSonorosCard from "./RegistrosSonorosCard";
import DecibelCard from "./RegistrosSonorosCard";


const MisRegistros = () => {
  const [resistro, setRegistro] = useState([])
const registrosSonoros = async ()=>{
  try{
    const response = await fetch(`${API}/registrosSonoros/me`,{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })

    if(!response.ok){
      console.log("fallo")
      return
    }
    const result = await response.json()
    console.log(result)
    setRegistro(result)
   
  }catch(e){
    console.log(e)
  }
}

useEffect(()=>{
  registrosSonoros()
},[])

  
return (
  <>

<RegistrosSonorosCard/>
 


  
  
  </>
);
};

export default MisRegistros

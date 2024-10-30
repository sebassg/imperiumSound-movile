import { API } from "../config";

export const validToken = async () => {
  console.log('api:', API)
  try {
    const response = await fetch(`${API}/valid`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    console.log('respuesta api:',response.json())

    if (!response.ok) {
      let errorMessage = "Error desconocido";

      try {
        const errorData = await response.json();
        errorMessage = errorData.message || errorMessage;
        return null;
      } catch (e) {
        console.log(e)
      }

      throw new Error(`Error de validación del token: ${errorMessage}`);
    }

    const data = await response.json(); 
    return { ...data }; 
  } catch (e) {
    
    return { error: e }; 
  }
};

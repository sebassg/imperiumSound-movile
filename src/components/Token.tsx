
import { API } from "../config";



export const validToken = async () => {
  console.log(API)
  try {
    const response = await fetch(`${API}/valid`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });  

    const data = await response.json();
    console.log(data);

    if (response.ok) {
      const user = { ...data}
      
      return {user}
    }
  } catch (error) {
    console.error("Error al verificar el token:", error);
    return null
  }
};
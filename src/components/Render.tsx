import { useEffect } from "react";

const Redirector = () => {
  useEffect(() => {
    if (window.innerWidth <= 800) {
      // Si la pantalla es más pequeña o igual a 800px, redirige al móvil
      window.location.href = "https://imperiumsound.site";
    } else {
      // Si la pantalla es mayor a 800px, redirige al escritorio
      window.location.href = "https://m.imperiumsound.site";
    }
  }, []);

  return null; // Solo redirige, no necesita renderizar nada
};

export default Redirector;

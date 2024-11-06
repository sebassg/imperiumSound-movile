import { useEffect } from "react";

const Redirector = () => {
  useEffect(() => {
    if (window.innerWidth <= 800) {

      window.location.href = "https://imperiumsound.site/home";
    } else {

      window.location.href = "https://m.imperiumsound.site";
    }
  }, []);

  return null; // Solo redirige, no necesita renderizar nada
};

export default Redirector;

import { useEffect } from "react";

const Redirector = () => {
  useEffect(() => {
    if (window.innerWidth <= 800) {

      window.location.href = "https://imperiumsound.site/inicio";
    } else {

      window.location.href = "https://m.imperiumsound.site";
    }
  }, []);

  return null; 
};

export default Redirector;

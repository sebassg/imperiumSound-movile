import { useEffect, useState } from "react";
import NavOption from "./NavOption";
import { validToken } from "./Token";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [islog, setIslog] = useState(false);

  const tokenEffect = async () => {
    const result = await validToken();
    console.log(result);

    
    if (!result) {
      setIslog(true)
      
    }
    setIslog(false)
   
  };

  useEffect(() => {
    tokenEffect();
  }, []);

  const perfil = islog? "Perfil" : "Registrarse" ;
  const registrosSonoros = islog? "Registros sonoros" : "Iniciar Sesión" ;
  const perfilRut = islog? "/perfil" : "/register" ;
  const registrosSonorosRut = islog? "/registrosSonoros" : "/login" ;


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      {/* Menú lateral para pantallas pequeñas */}
      <div
        className={`fixed inset-y-0 left-0 bg-white w-64 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:hidden`}
      >
        <div className="flex flex-col h-full ">
          <h1 className="text-2xl font-bold text-gray-800 p-4">
            ImperiumSound
          </h1>
          <div className="mt-6 space-y-2">
            <NavOption titulo="Inicio" spot={false} ruta="/" />
            <NavOption titulo="Sobre nosotros" spot={false} ruta="/" />
            <NavOption titulo="Servicios" spot={false} ruta="/" />
            <NavOption titulo="Contacto" spot={false} ruta="/" />
            <NavOption titulo={registrosSonoros} spot={false} ruta={registrosSonorosRut} />
            <NavOption titulo={perfil} spot={false} ruta={perfilRut} />
          </div>
          <button
            onClick={toggleMenu}
            className="mt-auto text-gray-600 hover:text-gray-800 p-2"
          >
            Cerrar
          </button>
        </div>
      </div>

      {/* Botón para abrir el menú lateral en pantallas pequeñas */}
      <button
        onClick={toggleMenu}
        className="p-4 text-gray-600 focus:outline-none sm:hidden"
      >
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Menú superior para pantallas grandes */}
      <div className="hidden sm:flex sm:items-center sm:justify-between bg-white shadow p-4 w-full">
        <h1 className="text-2xl font-bold text-gray-800">ImperiumSound</h1>
        <div className="space-x-4">
          <a
            href="#"
            className="text-gray-700 hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-md"
          >
            Inicio
          </a>
          <a
            href="#"
            className="text-gray-700 hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-md"
          >
            Sobre nosotros
          </a>
          <a
            href="#"
            className="text-gray-700 hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-md"
          >
            Servicios
          </a>
          <a
            href="#"
            className="text-gray-700 hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-md"
          >
            Contacto
          </a>
        </div>
      </div>

      {/* Contenido principal */}
    </div>
  );
};

export default Navbar;

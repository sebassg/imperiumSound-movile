import { useEffect, useState } from "react";
import NavOption from "./NavOption";
import { validToken } from "./Token";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

const Navbar = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIslogin] = useState(false);

  const validLogin = async () => {
    const result = await validToken();
    
    if (!result) {
      console.log('token no valido');
      setIslogin(false);
      return;
    }
    
    setIslogin(true);
  };

  const logout = () => {
    // Elimina la cookie 'access_token'
    Cookies.remove('access_token');
   
    navigate("/"); 
  };

  useEffect(() => {
    validLogin();
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const loginSon = isLogin ? 'Registros sonoros' : 'Iniciar Sesión';
  const loginSonRut = isLogin ? '/registrosSonoros' : '/login';

  return (
    <div className="flex">
      {/* Menú lateral para pantallas pequeñas */}
      <div
        className={`fixed inset-y-0 left-0 bg-white w-64 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:hidden`}
      >
        <div className="flex flex-col h-full">
          <h1 className="text-2xl font-bold text-gray-800 p-4">
            ImperiumSound
          </h1>
          <div className="mt-6 space-y-2">
            <NavOption titulo="Inicio" spot={false} ruta="/" />
            <NavOption titulo="Sobre nosotros" spot={false} ruta="/" />
            <NavOption titulo="Servicios" spot={false} ruta="/" />
            <NavOption titulo="Contacto" spot={false} ruta="/" />
            <NavOption titulo={loginSon} spot={false} ruta={loginSonRut} />
            {!isLogin ? (
              <NavOption titulo="Registrarse" spot={false} ruta="/register" />
            ) : (
              <a onClick={logout} className="block text-gray-700 hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-md">
                Cerrar sesión
              </a>
            )}
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
          <NavOption titulo="Inicio" spot={false} ruta="/" />
          <NavOption titulo="Sobre nosotros" spot={false} ruta="/" />
          <NavOption titulo="Servicios" spot={false} ruta="/" />
          <NavOption titulo="Contacto" spot={false} ruta="/" />
          {!isLogin ? (
            <NavOption titulo="Registrarse" spot={false} ruta="/register" />
          ) : (
            <a onClick={logout} className="text-gray-700 hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-md">
              Cerrar sesión
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

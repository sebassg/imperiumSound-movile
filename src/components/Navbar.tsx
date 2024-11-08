import { useEffect, useState } from "react";
import NavOption from "./NavOption";
import { validToken } from "./Token";
import { useNavigate } from "react-router-dom";
import { API } from "../config";


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
    fetch(`${API}/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
    .then(response => response.json())
    .then(data => {
      console.log(data.message); // Opcional: ver si el backend confirma la eliminación
      navigate("/login");
    })
    .catch(error => console.error('Error al cerrar sesión:', error));
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
        className={`fixed inset-y-0 left-0 bg-[#ececec] w-64 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:hidden`}
      >
        <div className="flex flex-col h-full">
          <h1 className="text-2xl font-bold text-[#0c041c] p-4">
            ImperiumSound
          </h1>
          <div className="mt-6 space-y-2 font-semibold">
            <NavOption titulo="Inicio" spot={false} ruta="/inicio" />
            <NavOption titulo="Sobre nosotros" spot={false} ruta="/nosotros" />
            <NavOption titulo="Servicios" spot={false} ruta="/servicios" />
            <NavOption titulo="Contacto" spot={false} ruta="/contactanos" />
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
            className="mt-auto text-[#0c041c] font-bold text-2xl hover:text-gray-800 p-2"
          >
            X
          </button>
        </div>
      </div>

      {/* Botón para abrir el menú lateral en pantallas pequeñas */}
      <button
  onClick={toggleMenu}
  className="p-4 text-white focus:outline-none "
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
    </div>
  );
};

export default Navbar;

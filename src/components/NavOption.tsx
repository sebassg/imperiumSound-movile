
import React from 'react';
import { useNavigate } from 'react-router-dom';

// Definición de la interfaz para las props
interface NavOptionProps {
    titulo: string;
    spot: boolean;
    ruta: string; // Nueva prop para la ruta
}

const NavOption: React.FC<NavOptionProps> = ({ titulo, spot, ruta }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(ruta); // Navega a la ruta especificada
    };

    const style = spot 
        ? "block text-gray-700 bg-gray-200 text-gray-900 px-3 py-2 rounded-md" 
        : "block text-gray-700 hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-md";

    return (
        <a onClick={handleClick} className={style}>
            {titulo}
        </a>
    );
};

export default NavOption;

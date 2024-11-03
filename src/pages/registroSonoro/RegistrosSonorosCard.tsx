

const RegistrosSonorosCard  = () => {
  return (
    <>
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg p-4 border border-gray-200">Mis registros</div>
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg p-4 border border-gray-200">

    <div className="flex items-center">
        {/* Decibeles */}
        <div className="flex-shrink-0 bg-blue-600 text-white text-2xl font-bold p-4 rounded-full shadow-md">
            60dB
        </div>
        
        {/* Información del registro */}
        <div className="ml-4">
           
            <h4 className="text-sm text-gray-600">I.E.Javiera Londoño (centro)   sss</h4>
            <h5 className="text-xs text-gray-500 mt-1">01-01-2023 12:30</h5>
        </div>
    </div>
    </div>

    </>
  );
};

// Datos de ejemplo para probar la tarjeta


export default RegistrosSonorosCard;
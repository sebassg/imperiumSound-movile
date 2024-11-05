interface RegistrosSonorosType{
  dB: string,
  lugar: string,
  fechaHora: string

}

const RegistrosSonorosCard: React.FC<RegistrosSonorosType>  = ({dB,lugar,fechaHora}) => {
  return (
    <>
    
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg p-4 border border-gray-200">

    <div className="flex items-center">
     
        <div className="flex-shrink-0 bg-blue-600 text-white text-2xl font-bold p-4 rounded-full shadow-md">
            {dB}
        </div>
        
      
        <div className="ml-4">
           
            <h4 className="text-sm text-gray-600">{lugar}</h4>
            <h5 className="text-xs text-gray-500 mt-1">{fechaHora}</h5>
        </div>
    </div>
    </div>

    </>
  );
};




export default RegistrosSonorosCard;
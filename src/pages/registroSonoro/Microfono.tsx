import { useState, useEffect, useRef } from 'react';
import { API } from '../../config';


const NoiseLevelMeter = () => {
  const [decibels, setDecibels] = useState(0);
  const [decibelMayor, setDecibelMayor] = useState(0);
  const [isMeasuring, setIsMeasuring] = useState(false);
  const [showLocationInput, setShowLocationInput] = useState(false); // Estado para mostrar el input de ubicación
  const [location, setLocation] = useState(""); // Estado para la ubicación ingresada
  const decibelMayorRef = useRef(0);

  useEffect(() => {
    const startAudioCapture = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const audioContext = new (window.AudioContext)();
        const analyser = audioContext.createAnalyser();
        const microphone = audioContext.createMediaStreamSource(stream);

        microphone.connect(analyser);
        analyser.fftSize = 128;
        const dataArray = new Uint8Array(analyser.frequencyBinCount);

        const calculateDecibels = () => {
          if (!isMeasuring) return;

          analyser.getByteFrequencyData(dataArray);
          const values = dataArray.reduce((a, b) => a + b, 0);
          const average = values / dataArray.length;

          const decibelLevel = Math.max(Math.round(20 * Math.log10(average + 1)), 0);
          setDecibels(decibelLevel);

          if (decibelLevel > decibelMayorRef.current) {
            decibelMayorRef.current = decibelLevel;
            setDecibelMayor(decibelMayorRef.current);
          }

          requestAnimationFrame(calculateDecibels);
        };

        calculateDecibels();

        setTimeout(() => {
          setIsMeasuring(false);
          setShowLocationInput(true); // Mostrar input de ubicación después de la medición
          audioContext.close();
        }, 10000); // 10 segundos de medición
      } catch (err) {
        console.error('Error al acceder al microfono', err);
      }
    };

    if (isMeasuring) {
      startAudioCapture();
    }
  }, [isMeasuring]);

  const toggleMeasuring = () => {
    if (isMeasuring) {
      setIsMeasuring(false);
    } else {
      setDecibelMayor(0);
      decibelMayorRef.current = 0;
      setDecibels(0);
      setIsMeasuring(true);
      setShowLocationInput(false); // Ocultar el input de ubicación al comenzar a medir
    }
  };

  const handleLocationSave = async () => {
    const decibelString = `${decibelMayor} dB`; // Convertir decibeles a string con unidad

    // Estructura de datos para enviar a la API
    const dataToSave = {
      lugar: location,
      nivelSonoro: decibelString,
    };

    try {
      const response = await fetch(`${API}/registrosSonoros`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSave),
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Error en la solicitud POST");
      }

      const result = await response.json();
      console.log("Datos guardados en la API:", result);

      // Limpiar el formulario y ocultar el input de ubicación
      setLocation("");
      setShowLocationInput(false);
    } catch (error) {
      console.error("Error al guardar en la API:", error);
    }
  };

  return (
    <div className="p-6 rounded-lg w-full mt-20 max-w-md bg-white shadow-md">
      <div className="flex flex-col items-center">
        <div 
          className={`bg-[#24143c] rounded-full w-48 h-48 flex items-center justify-center shadow-2xl mb-4 cursor-pointer transition duration-300 ${isMeasuring ? "animate-pulse" : ""}`}
          onClick={toggleMeasuring}
        >
          <span className={`text-3xl font-light text-white text-center ${isMeasuring ? "opacity-100" : "opacity-60"}`}>
            {isMeasuring ? `${decibelMayor} dB` : "Toca para comenzar"}
          </span>
        </div>
        <h2 className="text-xl text-gray-700">Nivel de ruido actual: {decibels} dB</h2>
        {isMeasuring ? (
          <p className="text-green-600">Midiendo...</p>
        ) : (
          <p className="text-red-600">Medición completada</p>
        )}

        {/* Input para ingresar la ubicación, aparece después de la medición */}
        {showLocationInput && (
          <div className="mt-4 w-full">
            <label className="block text-gray-700 text-sm font-medium mb-2">Guardar en lugar:</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Ingresa el lugar"
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
            <button
              onClick={handleLocationSave}
              className="mt-3 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-500"
            >
              Guardar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NoiseLevelMeter;

import { useState, useEffect, useRef } from 'react';

const NoiseLevelMeter = () => {
  const [decibels, setDecibels] = useState(0);
  const [decibelMayor, setDecibelMayor] = useState(0);
  const [isMeasuring, setIsMeasuring] = useState(false);
  const decibelMayorRef = useRef(0); 

  useEffect(() => {
    const startAudioCapture = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const audioContext = new (window.AudioContext)();
        const analyser = audioContext.createAnalyser();
        const microphone = audioContext.createMediaStreamSource(stream);
        
        microphone.connect(analyser);
        analyser.fftSize = 256;
        
        const dataArray = new Uint8Array(analyser.frequencyBinCount);

        const calculateDecibels = () => {
          if (!isMeasuring) return;

          analyser.getByteFrequencyData(dataArray);
          const values = dataArray.reduce((a, b) => a + b, 0);
          const average = values / dataArray.length;

          // Asegúrate de que el nivel de dB no sea negativo
          const decibelLevel = Math.max(Math.round(20 * Math.log10(average)), 0);

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
          audioContext.close();
        }, 10000);
      } catch (err) {
        console.error('Error accessing the microphone', err);
      }
    };

    if (isMeasuring) {
      startAudioCapture();
    }
  }, [isMeasuring]);

  const start = () => {
    setIsMeasuring(true);
    setDecibelMayor(0);
    decibelMayorRef.current = 0;
  };

  return (
    <div className="flex flex-col items-center">
      <div className="bg-purple-800 rounded-full w-48 h-48 flex items-center justify-center shadow-2xl mb-4">
        <span className="text-3xl font-bold text-white">{decibelMayor} dB</span>
      </div>
      <h2 className="text-xl text-gray-700">Nivel de ruido actual: {decibels} dB</h2>
      {isMeasuring ? <p className="text-green-600">Midiendo...</p> : <p className="text-red-600">Medición completada</p>}
      <button 
        onClick={start}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
      >
        Comenzar a medir
      </button>
    </div>
  );
};

export default NoiseLevelMeter;

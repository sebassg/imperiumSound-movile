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
        
        // Reduce fftSize to increase sensitivity (higher resolution)
        analyser.fftSize = 128; // 128 is a smaller size than 256 for more sensitivity
        
        const dataArray = new Uint8Array(analyser.frequencyBinCount);

        const calculateDecibels = () => {
          if (!isMeasuring) return;

          analyser.getByteFrequencyData(dataArray);
          const values = dataArray.reduce((a, b) => a + b, 0);
          const average = values / dataArray.length;

          // More sensitivity: you can lower the threshold by multiplying or tweaking the log formula
          const decibelLevel = Math.max(Math.round(20 * Math.log10(average + 1)), 0); // Adding +1 to avoid log(0)

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
        }, 10000); // 10 seconds of measuring
      } catch (err) {
        console.error('Error accessing the microphone', err);
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
    }
  };

  return (
    <div className="p-6 rounded-lg w-full max-w-md bg-white shadow-md">
      <div className="flex flex-col items-center">
        <div 
          className={`bg-purple-800 rounded-full w-48 h-48 flex items-center justify-center shadow-2xl mb-4 cursor-pointer transition duration-300 ${isMeasuring ? "animate-pulse" : ""}`}
          onClick={toggleMeasuring}
        >
          <span className={`text-3xl font-light text-white text-center ${isMeasuring ? "opacity-100" : "opacity-60"}`}>
            {isMeasuring ? `${decibelMayor} dB` : "Toca para comenzar"}
          </span>
        </div>
        <h2 className="text-xl text-gray-700">Nivel de ruido actual: {decibels} dB</h2>
        {isMeasuring ? <p className="text-green-600">Midiendo...</p> : <p className="text-red-600">Medición completada</p>}
      </div>
    </div>
  );
};

export default NoiseLevelMeter;


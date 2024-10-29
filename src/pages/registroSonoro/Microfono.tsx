import { useState, useEffect, useRef } from 'react';

const NoiseLevelMeter = () => {
  const [decibels, setDecibels] = useState(0);
  const [decibelMayor, setDecibelMayor] = useState(0);
  const [isMeasuring, setIsMeasuring] = useState(true);
  const decibelMayorRef = useRef(0); 
  useEffect(() => {
    const startAudioCapture = async () => {
      try {
        
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const audioContext = new (window.AudioContext )();
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
          const decibelLevel = Math.round(20 * Math.log10(average));

          setDecibels(decibelLevel || 0);

          
          if (decibelLevel > decibelMayorRef.current) {
            decibelMayorRef.current = decibelLevel;
            setDecibelMayor(decibelMayorRef.current);
          }

          requestAnimationFrame(calculateDecibels);
        };

        calculateDecibels();

        
        setTimeout(() => {
          setIsMeasuring(false);
          setDecibelMayor(decibelMayorRef.current); // Guardar el valor máximo en el estado
          audioContext.close();
        }, 10000);
      } catch (err) {
        console.error('Error accessing the microphone', err);
      }
    };

    startAudioCapture();
  }, [isMeasuring]);
  const start = () => {
    setIsMeasuring(true)
    setDecibelMayor(0)
    decibelMayorRef.current = 0


  }

  return (
    <div>
      <h2>Mayor registro detectado: {decibelMayor} dB</h2>
      <h2>Nivel de ruido actual: {decibels} dB</h2>
      {isMeasuring ? <p>Midiendo...</p> : <p>Medición completada</p>}
      <button onClick={ start}>
        comenzar a medir
      </button>
    </div>
  );
};

export default NoiseLevelMeter;
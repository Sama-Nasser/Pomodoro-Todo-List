import { useState, useEffect, useRef } from "react";

function useTimer(initialMinutes = 2) {
  const [totalSeconds, setTotalSeconds] = useState(initialMinutes * 60);  
  const [isActive, setIsActive] = useState(false);
  const [onBreak, setOnBreak] = useState(false);
  const [isFinished, setIsFinished] = useState(false);  
  const timerRef = useRef(null);

  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  useEffect(() => {
    if (!isActive) return;

    timerRef.current = setInterval(() => {
      setTotalSeconds((prev) => {
        if (prev > 0) {
          return prev - 1;
        }

         
        clearInterval(timerRef.current);
        setIsActive(false);

        if (onBreak) {
          setOnBreak(false);
          setIsFinished(false);
          return initialMinutes * 60;  
        } else {
           
          setIsFinished(true);
          return 0;  
        }
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [isActive, onBreak, initialMinutes]);

  const start = () => {
     
    if (!onBreak && totalSeconds === 0) {
      setTotalSeconds(initialMinutes * 60);
    }
    setIsFinished(false);
    setIsActive(true);
  };

  const pause = () => {
    clearInterval(timerRef.current);
    setIsActive(false);
  };

  const reset = () => {
    clearInterval(timerRef.current);
    setIsActive(false);
    setOnBreak(false);
    setIsFinished(false);
    setTotalSeconds(initialMinutes * 60);  
  };

  const startBreak = () => {
    clearInterval(timerRef.current);
    setIsFinished(false);
    setOnBreak(true);
    setTotalSeconds(1 * 60);  
    setIsActive(true);
  };

  return {
    minutes,
    seconds,
    isActive,
    onBreak,
    isFinished,
    start,
    pause,
    reset,
    startBreak,
  };
}

export default useTimer;


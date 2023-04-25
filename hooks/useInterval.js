import { useState, useEffect } from "react";

const useInterval = (callback, delay) => {
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const id = setInterval(callback, delay);
    setIntervalId(id);
    return () => clearInterval(id);
  }, [delay]);

  return intervalId;
};

export default useInterval;

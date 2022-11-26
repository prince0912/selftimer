import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval;

    interval = setInterval(() => {
      setCount(count + 3);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);

  const handleIncrement = () => {
    setCount(() => count + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <h1> count is:{count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

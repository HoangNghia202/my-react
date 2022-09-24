import React, { useState, useEffect } from "react";

const CountDown = () => {
  const [count, setCount] = useState(5);
  useEffect(() => {
    if (count === 0) {
      alert("Time is up");
      return;
    }
    const timer = setInterval(() => {
      setCount(count - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [count]);

  return (
    <div>
      <h3>{count}</h3>
    </div>
  );
};
export default CountDown;

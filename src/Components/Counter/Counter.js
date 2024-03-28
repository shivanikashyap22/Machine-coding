import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const decrement = () => {
    setCount(prev=>prev-1);
  };
  const increment = () => {
    setCount(prev=>prev+1);
  };
  return (
    <div>
      <h2>Counter</h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <button onClick={decrement}>-</button>
        <div>{count}</div>
        <button onClick={increment}>+</button>
      
      </div>
    </div>
  );
};

export default Counter;

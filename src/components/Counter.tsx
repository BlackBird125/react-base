import React, { useState } from "react";
import Button from "./Button";

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <p style={{ fontSize: "20px", marginBottom: "16px" }}>
        カウント: {count}
      </p>
      <div>
        <Button label="+" onClick={increment} />
        <Button label="-" onClick={decrement} />
      </div>
    </div>
  );
};

export default Counter;

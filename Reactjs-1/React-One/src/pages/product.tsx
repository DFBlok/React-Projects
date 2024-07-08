import React, { useState } from "react";

const product = () => {
  const [count, setCount] = useState(0);
  console.log(count);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter App</h1>
      <h3>Count is: ${count}</h3>
      <button onClick={increase}>Increase + </button> <br></br>
      <button onClick={decrease}>Decrease -</button>
    </div>
  );
};

export default product;

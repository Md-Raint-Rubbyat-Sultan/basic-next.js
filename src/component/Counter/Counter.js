"use client";

import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(() => 0);
  return (
    <div>
      <h2 className="text-4xl">Count: {count}</h2>
      <button className="mr-2" onClick={() => setCount((prev) => prev + 1)}>
        increment
      </button>
      <button className="" onClick={() => setCount((prev) => prev - 1)}>
        decrement
      </button>
    </div>
  );
};

export default Counter;

import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const add = () => setCount(count + 1);
  const subtract = () => setCount(count - 1);

  return (
    <div className="text-center">
      <h1>{count}</h1>
      <button className="btn btn-primary" onClick={add}>
        Aggiungi
      </button>
      <button className="btn btn-danger" onClick={subtract}>
        Rimuovi
      </button>
    </div>
  );
};

export default Counter;

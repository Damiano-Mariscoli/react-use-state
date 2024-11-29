import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function add() {
    setCount(count + 1);
  }
  function subtract() {
    setCount(count - 1);
  }

  return (
    <div className="text-center mb-5">
      <h1 className="mt-4">{count}</h1>
      <div className="d-flex justify-content-center gap-5 mt-4">
        <button className="btn btn-primary" onClick={add}>
          Aggiungi
        </button>
        <button className="btn btn-danger" onClick={subtract}>
          Rimuovi
        </button>
      </div>
    </div>
  );
}

export default Counter;

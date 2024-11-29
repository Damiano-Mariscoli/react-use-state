import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.css";
import Counter from "./components/counter.jsx";
import Main from "./components/main.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Counter />
      <div className="text-center">
        <h1>Learning Web development</h1>
      </div>
      <div>
        <Main />
      </div>
    </>
  );
}

export default App;

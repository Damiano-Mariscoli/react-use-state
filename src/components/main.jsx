import React, { useState } from "react";
import languages from "../assets/languages.js";

function Main() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container-md">
        <div className="row">
          {languages.map((language) => (
            <div
              className="col d-flex justify-content-center mt-5"
              key={language.id}
            >
              <button className="btn btn-primary">{language.title}</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Main;

import React, { useState } from "react";
import languages from "../assets/languages.js";

function Main() {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  console.log(selectedLanguage);
  function switchColor() {
    const [isClicked, setIsClicked] = useState(false);
  }
  function switchCard(language) {
    setSelectedLanguage(language);
    setIsClicked(!isClicked);
  }

  return (
    <>
      <div className="container-md">
        <div className="row">
          {languages.map((language) => (
            <div
              className="col d-flex justify-content-center mt-5"
              key={language.id}
            >
              <button
                onClick={() => switchCard(language)}
                className="btn btn-primary"
              >
                {language.title}
              </button>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="card mt-5">
            <div className="card-body">
              {selectedLanguage ? (
                <>
                  <h2>{selectedLanguage.title}</h2>
                  <p>{selectedLanguage.description}</p>
                </>
              ) : (
                <>
                  <h2>Nessun linguaggio selezionato</h2>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;

import React from "react";
import "./App.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="row d-flex justify-content-center Meaning">
      <section className="meaningSection">
        <h3 className="partSpeech">{props.meaning.partOfSpeech}</h3>
        <h3 className="definitionLabel">Definition(s):</h3>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div>
              <ul key={index}>
                <li>{definition.definition}</li>
                <p className="example">{definition.example}</p>
              </ul>
            </div>
          );
        })}
      </section>
    </div>
  );
}

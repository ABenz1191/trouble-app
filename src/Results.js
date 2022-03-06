import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./App.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="row d-flex justify-content-center results">
        <section className="resultsSection">
          <h2 className="wordResult">{props.results.word}</h2>
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <ul className="phoneticsOrder" key={index}>
                <li className="phoneticsList row d-flex justify-content-center">
                  <Phonetic phonetic={phonetic} />
                </li>
              </ul>
            );
          })}
        </section>
        <section className="meanings">
          {props.results.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}
        </section>
      </div>
    );
  } else {
    return null;
  }
}

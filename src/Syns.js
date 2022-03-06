import React from "react";
import Synonyms from "./Synonyms";
import "./App.css";

export default function Syns(props) {
  console.log(props.syns);
  if (props.syns) {
    return (
      <div className="row d-flex justify-content-center">
        <section className="synonymSection">
          <h3 className="synonymLabel">Synonym(s):</h3>
          {props.syns.response.map(function (response, index) {
            return (
              <div>
                <div key={index}>
                  <Synonyms response={response} />
                </div>
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

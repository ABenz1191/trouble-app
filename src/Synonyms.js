import React from "react";
import "./App.css";

export default function Synonyms(props) {
  if (props.response) {
    return (
      <div className="Synonyms">
        <ul>
          <li className="synonymCategory">
            {props.response.list.category}
            <span className="synonymWord"> {props.response.list.synonyms}</span>
          </li>
        </ul>
      </div>
    );
  } else {
    return null;
  }
}

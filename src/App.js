import React from "react";
import "./App.css";
import SearchEngine from "./SearchEngine";

export default function App() {
  return (
    <div className="App">
      <div className="body">
        <div className="container">
          <SearchEngine />
        </div>
      </div>
      <div className="footer">
        <a href="https://github.com/ABenz1191/React-Dictionary-Project.git">
          github
        </a>
      </div>
    </div>
  );
}

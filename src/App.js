import React from "react";
import "./App.css";
import SearchEngine from "./SearchEngine";

export default function App() {
  return (
    <div className="App">
      <div className="body">
        <div className="row d-flex justify-content-between headerSpace">
          <div className="col-6 appHeader">
            <h1>The</h1>
            <h1>Free</h1>
            <h1>Dictionary</h1>
          </div>
          <span className="col-6  headerImage">
            <img
              src="https://images.pexels.com/photos/5929346/pexels-photo-5929346.jpeg"
              alt="define-page"
              className="img-fluid"
            />
          </span>
        </div>
        <div className="container">
          <div className="d-flex row justify-content-center containerSearch">
            <SearchEngine defaultKeyword="corgi" />
          </div>
        </div>
      </div>
      <div className="footer">
        <span className="footerText">
          This site was coded by Ashleigh Benz and is{" "}
        </span>
        <span className="footerLink">
          <a href="https://github.com/ABenz1191/React-Dictionary-Project.git">
            open-sourced on Github
          </a>
        </span>{" "}
        and{" "}
        <span className="footerLink">
          <a href="https://heuristic-noyce-4e0c7a.netlify.app">
            hosted on Netlify
          </a>
        </span>
      </div>
    </div>
  );
}

import React from "react";
import "./App.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="row d-flex justify-content-center">
        <section className="photosSection">
          <div className="row justify-content-center d-flex">
            {props.photos.map(function (photo, index) {
              return (
                <div
                  className="d-flex justify-content-evenly col-4"
                  key={index}
                >
                  <a href={photo.src.original} target="_blank" rel="noreferrer">
                    <img
                      src={photo.src.tiny}
                      className="img-fluid photoGrid"
                      alt="defined word"
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    );
  } else {
    return null;
  }
}

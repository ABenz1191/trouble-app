import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import Syns from "./Syns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function SearchEngine(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);
  let [syns, setSyns] = useState(null);

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
    let pexelsApiKey =
      "563492ad6f9170000100000171f54a7177ed47048bdaaf8ee9c617e2";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
    let thesaurusApiKey = " Yx9CXRha2wquaSe4uNrl";
    let thesaurusApiUrl = `https://thesaurus.altervista.org/thesaurus/v1?word=${keyword}&language=en_US&output=json&key=${thesaurusApiKey}`;
    axios.get(thesaurusApiUrl).then(handleThesaurusResponse);
  }
  function handleThesaurusResponse(response) {
    console.log(response);
    setSyns(response.data);
  }
  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function handleResponse(response) {
    console.log(response);
    setResults(response.data[0]);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="searchEngine">
        <div className="row d-flex justify-content-center container">
          <section className="searchSection">
            <h2>What can I define for you today?</h2>
            <form onSubmit={handleSubmit}>
              <div className="input-group mb-3">
                <input
                  type="search"
                  className="form-control form-control-lg"
                  placeholder="Example: corgi"
                  aria-label="keyword-search"
                  aria-describedby="button-addon2"
                  onChange={handleKeywordChange}
                />
                <button
                  className="btn btn-outline-secondary searchButton"
                  type="button"
                  id="button-addon2"
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
              </div>
            </form>
            <p className="suggestions">
              Suggestions: eucalyptus, drag queen, boxing, vaccine, etc.
            </p>
          </section>
          <div className="row d-flex justify-content-center">
            <Results results={results} />

            <section>
              <Syns syns={syns} />
            </section>
          </div>
          <Photos photos={photos} />
        </div>
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}

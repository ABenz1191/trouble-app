import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import Results from "./Results";

export default function SearchEngine() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
  axios.get(apiUrl).then(handleResponse);

  function search(event) {
    event.preventDefault();
  }

  function handleResponse(response) {
    setResults(response.data[0]);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="searchEngine">
      <form onSubmit={search}>
        <div class="input-group mb-3">
          <input
            type="search"
            class="form-control"
            placeholder="Search..."
            aria-label="keyword-search"
            aria-describedby="button-addon2"
            onChange={handleKeywordChange}
          />
          <button
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            Search
          </button>
        </div>
      </form>
      <Results results={results} />
    </div>
  );
}

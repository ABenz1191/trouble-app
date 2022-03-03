import React, { useState } from "react";
import "./App.css";

export default function SearchEngine() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`searching for ${keyword}`);
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
    </div>
  );
}

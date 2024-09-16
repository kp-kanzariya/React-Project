import React, { useState } from "react";

const items = [
  "Apple",
  "Banana",
  "Orange",
  "Mango",
  "Grapes",
  "Pineapple",
  "Peach",
];
function SearchComponent() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [searchMode, setSearchMode] = useState("first-letter"); // Search mode

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length === 0) {
      setSuggestions([]);
    } else {
      let filteredSuggestions = [];

      switch (searchMode) {
        case "first-letter":
          filteredSuggestions = items.filter((item) =>
            item.toLowerCase().startsWith(value.toLowerCase())
          );
          break;
        case "any-first-letter":
          filteredSuggestions = items.filter((item) =>
            item.toLowerCase().includes(value.toLowerCase())
          );
          break;
        case "whole-word":
          filteredSuggestions = items.filter(
            (item) => item.toLowerCase() === value.toLowerCase()
          );
          break;
        default:
          break;
      }

      setSuggestions(filteredSuggestions);
    }
  };

  return (
    <div>
      <h2>Search Items</h2>
      <select
        onChange={(e) => setSearchMode(e.target.value)}
        value={searchMode}
      >
        <option value="first-letter">First Letter</option>
        <option value="any-first-letter">Any Letter</option>
        <option value="whole-word">Whole Word</option>
      </select>

      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleSearch}
      />
      <ul>
        {suggestions.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchComponent;

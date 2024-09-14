import React, { useState, useEffect } from "react";
import searchdata from "../data.json";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (query.length > 0) {
      const filtered = searchdata.filter(
        (item) =>
          item.country.toLowerCase().includes(query.toLowerCase()) ||
          item.capital.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  }, [query]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search by country or capital"
        value={query}
        onChange={handleInputChange}
      />
      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((item, index) => (
            <li key={index}>
              <strong>{item.country}</strong> - {item.capital}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;

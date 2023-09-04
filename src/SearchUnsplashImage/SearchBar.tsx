import "./SearchBar.css";
import React, { useState, ChangeEvent, FormEvent } from "react";

interface SearchBarProps {
  onSubmit: (term: string) => void;
}

function SearchBar({ onSubmit }: SearchBarProps) {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit(term);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Enter Search Term</label>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchBar;

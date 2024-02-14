import { useState } from "react";

import "./search-panel.scss";

const SearchPanel = ({ handleSearch }) => {
  const [enteredData, setEnteredData] = useState("");

  const handleInput = (e) => {
    const inputValue = e.target.value;
    setEnteredData(inputValue);
    handleSearch(inputValue);
  };

  return (
    <div className="search-panel">
      <div className="search-panel__label">Lookiing for</div>
      <input
        onChange={(e) => handleInput(e)}
        value={enteredData}
        placeholder="start typing here..."
        className="search-panel__input"
        type="text"
      />
    </div>
  );
};

export default SearchPanel;

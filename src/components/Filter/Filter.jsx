import React from 'react';
import './Filter.css';

const Filter = ({ titleFilter, rateFilter, onTitleChange, onRateChange }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title..."
        value={titleFilter}
        onChange={(e) => onTitleChange(e.target.value)}
      />
      <select
        value={rateFilter}
        onChange={(e) => onRateChange(e.target.value)}
      >
        <option value="0">Filter by rating...</option>
        <option value="1">1+</option>
        <option value="2">2+</option>
        <option value="3">3+</option>
        <option value="4">4+</option>
        <option value="5">5+</option>
        <option value="6">6+</option>
        <option value="7">7+</option>
        <option value="8">8+</option>
        <option value="9">9+</option>
        <option value="10">10</option>
      </select>
    </div>
  );
};

export default Filter;
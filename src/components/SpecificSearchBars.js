/** @format */

import React from 'react';
import './SpecificSearchBars.css';

// --- This page will show 3 search bars --- //

function SpecificSearchBars({ title, placeholder }) {
  return (
    <div className="specificSearchBars">
      <div className="searchBar"></div>
      <h3>{title}</h3>
      <input
        type="text"
        name="search-bar"
        id="search-bar"
        placeholder={`Search ${placeholder} `}
        className="specificSearch__input"
      />
      <button className="specificSearch__button">Search</button>
    </div>
  );
}

export default SpecificSearchBars;

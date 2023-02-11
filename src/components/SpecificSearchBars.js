/** @format */

import React, { useEffect, useState, useRef } from 'react';

import './SpecificSearchBars.css';

// --- This page will show 3 search bars --- //

function SpecificSearchBars({
  handleSpecificSearchInputClick,
  title,
  placeholder,
}) {
  const [specificSearch, setSpecificSearch] = useState('');
  const [specificOnClick, setSpecificOnClick] = useState('');

  const handleClick = () => {
    try {
      console.log(`specific search inside handleclick is ${specificSearch}`);
      setSpecificOnClick(specificSearch);
      handleSpecificSearchInputClick(specificOnClick);
    } catch (e) {
      console.error('something went wrong', e);
    }
  };
  // useEffect(() => {
  //   handleSpecificSearchInputClick(this.specificOnClick);
  // }, [handleClick]);
  console.log(`value is ${specificSearch} when click for ${specificOnClick}`);
  // console.log(
  //   `specific fct is ${handleSpecificSearchInputClick(this.specificOnClick)}`
  // );
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
        onChange={(e) => {
          setSpecificSearch(e.target.value);
        }}
        value={specificSearch}
      />
      <button onClick={handleClick} className="specificSearch__button">
        Search
      </button>
    </div>
  );
}

export default SpecificSearchBars;

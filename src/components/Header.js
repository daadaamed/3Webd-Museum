/** @format */

import React, { useEffect, useState, useRef } from 'react';
import SpecificSearchBars from './SpecificSearchBars.js';
import Nav from './Nav.js';
import './Header.css';

// ---- The header component which contains a background image and the search bar and the button search ---- //
// ---------------------- It is displayed in all website pages -------------------- //

function Header(props) {
  const [onClickSpecfic, setOnClickSpecific] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [textInInput, setTextInInput] = useState('');
  const [specificDepartment, setSpecificDepartment] = useState('');
  const [specificYear, setSpecificYear] = useState('');

  // in input field of specific search bar, manage onclick of  specific search

  const handleSpecificSearchInputClick = (specificDepartment, specificYear) => {
    //console.log('clicked in input of specifi search');
    setSpecificDepartment(specificDepartment);
    setSpecificYear(specificYear);
  };
  useEffect(() => {
    setSpecificDepartment(specificDepartment);
    setSpecificYear(specificYear);
    console.log(
      `clicked in input of specific dep which value is ${specificDepartment}`
    );
    console.log(
      `clicked in input of specific Year which value is ${specificYear}`
    );
  }, [handleSpecificSearchInputClick]);

  //when click on specific search bar, 3 bars appear

  const handleSpecificSearchClick = () => {
    setOnClickSpecific(true);
  };

  // get text from input when click on search

  const handleSearchBarClick = () => {
    //console.log('clicked on search');
    setTextInInput(searchInput);
    //event.preventDefault();
  };
  return (
    <div>
      <header
        className="header"
        style={{
          backgroundSize: 'cover',
          backgroundImage: `url("https://headerart.weebly.com/uploads/5/7/5/7/5757212/eye-catching-colorful-paints-art-header_orig.jpg")`,
          backgroundPosition: 'center center',
        }}
      >
        <div className="header__contents">
          <h3 className="header__title">
            Gallery of Met Museum articles. Discover ancient artifacts and arts. Type anything to learn about it in more details.
          </h3>
          <div className="header__buttons">
            <input
              type="text"
              name="search-bar"
              value={searchInput}
              id="search-bar"
              placeholder="Search anything"
              className="header__input"
              onChange={(e) => {
                setSearchInput(e.target.value);
              }}
            />
            <button
              // search bar button
              onClick={handleSearchBarClick}
              className="header__button"
            >
              Search
            </button>
            <button
              // specific search bar button
              onClick={handleSpecificSearchClick}
              className="header__button"
            >
              Specific Search
            </button>
          </div>
        </div>
      </header>

      <div className="header--fadeBottom" />
      {onClickSpecfic ? (
        <div>
          {' '}
          <SpecificSearchBars
            handleSpecificSearchInputClick={handleSpecificSearchInputClick}
            title="Search By Department"
            placeholder="Department"
          />
          <SpecificSearchBars
            handleSpecificSearchInputClick={handleSpecificSearchInputClick}
            title="Search By Year   "
            placeholder="Year"
          />{' '}
        </div>
      ) : (
        <div> </div>
      )}
      <Nav
        textInInput={textInInput}
        specificDepartment={specificDepartment}
        specificYear={specificYear}
      />
    </div>
  );
}

export default Header;

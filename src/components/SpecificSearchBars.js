/** @format */

import React, { useEffect, useState } from 'react';

import './SpecificSearchBars.css';

// ----------The specific search bar component which contains an input text and a click button  -----//

// naadi esm title baad l click w nchecki ken specificonclick== haja m les department b if w else w ken ey nrajaa esm l department lel header component

// --- This page will show 3 search bars --- //

function SpecificSearchBars({
  handleSpecificSearchInputClick,
  title,
  placeholder,
}) {
  const [specificSearch, setSpecificSearch] = useState('');
  const [specificDepartment, setSpecificDepartment] = useState('');
  const [specificYear, setSpecificYear] = useState('');

  const handleClick = () => {
    try {
      //console.log(`specific search inside handleclick is ${specificSearch}`);
      if (title == 'Search By Department') {
        if (
          specificSearch == 'American Decorative Arts' ||
          specificSearch == 'Ancient Near Eastern Art' ||
          specificSearch == 'Arms and Armor' ||
          specificSearch == 'Arts of Africa, Oceania, and the Americas' ||
          specificSearch == 'Asian Art' ||
          specificSearch == 'The Cloisters' ||
          specificSearch == 'The Costume Institute' ||
          specificSearch == 'Drawings and Prints' ||
          specificSearch == 'Egyptian Art' ||
          specificSearch == 'European Paintings' ||
          specificSearch == 'European Sculpture and Decorative Arts' ||
          specificSearch == 'Greek and Roman Art' ||
          specificSearch == 'Islamic Art' ||
          specificSearch == 'The Robert Lehman Collection' ||
          specificSearch == 'The Libraries' ||
          specificSearch == 'Medieval Art' ||
          specificSearch == 'Musical Instruments' ||
          specificSearch == 'Photographs' ||
          specificSearch == 'Modern Art'
        ) {
          setSpecificDepartment(specificSearch);
          // pass data to parent component
          //handleSpecificSearchInputClick(specificDepartment, specificYear);
          console.log(
            `value is ${specificSearch} when click for ${title} for value of dep ${specificDepartment}`
          );
        } else {
          setSpecificDepartment('');
        }
      }
      if (title == 'Search By Year   ') {
        setSpecificYear(specificSearch);
        // handleSpecificSearchInputClick(specificDepartment, specificYear);
        console.log(
          `value is ${specificSearch} when click for ${title} for value of cat: ${specificYear}`
        );
      }
    } catch (e) {
      console.error('something went wrong', e);
    }
  };

  useEffect(() => {
    if (specificYear != '' || specificDepartment != '') {
      handleSpecificSearchInputClick(specificDepartment, specificYear);
    }
  }, [handleClick]);
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

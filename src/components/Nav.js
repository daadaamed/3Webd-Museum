/** @format */

import React, { useEffect, useState } from 'react';
import axios from './axios';
import './Nav.css';
import Row from './Row';
// ---- This page contains the articles to show from API ---- //

function Nav({ textInInput, specificDepartment, specificCategory }) {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const textInput = JSON.stringify(textInInput);
  const specificDepartment1 = JSON.stringify(specificDepartment);
  // console.log(
  //   `specificDepartment1 is ${specificDepartment1} which length is ${specificDepartment1.length} `
  // );

  //console.log(`in Nav, text input ${textInput} and articles is ${result.objectId}`); // (result.objectId)

  // ---- if search bar is clicked, articles will change according to the searched articles --- //

  let url = `https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&isImage=true&q=sun`;
  if (textInput.length == 2) {
    console.log(
      `empty as length = ${textInput.length}, so url=${url} and the textInput is ${textInput}`
    );
  } else {
    url = `https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&isImage=true&q=${textInput}`;
    //console.log(`non empty cause length = ${textInput.length}`);
  } // when empty, length is equal to 2

  // --- update the articles when getting datas from text input(search bar) or specific search input (specificDepartment) ---//

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      console.log(`${url}`);
      let request = await axios.get(url);
      setIsLoading(false);
      setArticles(request.data.objectIDs);
      return request;
    }
    setArticles((articles) => []);
    //setIsLoading(true);
    fetchData();
  }, [textInput, specificDepartment, specificCategory]);

  return (
    <div className="nav">
      <h2>
        {' '}
        Welcome to Met Museum!<p>scroll right to discover more</p>
      </h2>

      <div className="nav__posters">
        {isLoading ? (
          <img
            className="loading"
            src={
              'https://i.pinimg.com/originals/3e/f0/e6/3ef0e69f3c889c1307330c36a501eb12.gif'
            }
            alt="tableau artistique"
          />
        ) : articles == null || articles.length == 0 ? (
          <p>Sorry, no results found. Try another search!</p>
        ) : (
          // map objects from the API accessed with axios to display them
          articles.map((article) => (
            <Row
              objectId={article}
              specificDepartment1={specificDepartment1}
              specificCategory={specificCategory}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Nav;

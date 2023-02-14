/** @format */

import React, { useEffect, useState } from 'react';
import axios from './axios';
import './Nav.css';
import Row from './Row';
// ---- This page contains the articles to show from API ---- //

// ----------------- à faire ------------------------ //
// nzid try catch l les fonctions
// pour faire les conditons de depart, je peux passer specificDepartment l row component w naamel condition ghadi
function Nav({ textInInput, specificDepartment }) {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const textInput = JSON.stringify(textInInput);
  const specificDepartment1 = JSON.stringify(specificDepartment);
  console.log(
    `specificDepartment1 is ${specificDepartment1} which length is ${specificDepartment1.length} `
  );
  //console.log(`in Nav, text input ${textInput} and articles is ${result.objectId}`); // (result.objectId)
  let url = `https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&isImage=true&q=sun`;
  if (textInput.length == 2) {
    console.log(
      `empty as length = ${textInput.length}, so url=${url} and the textInput is ${textInput}`
    );
  } else {
    url = `https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&isImage=true&q=${textInput}`;
    //console.log(`non empty cause length = ${textInput.length}`);
  } // when empty, length is equal to 2

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
  }, [textInput, specificDepartment]);

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
          // map objects from the API to access them
          // add map filter or reduce to check for speciifc
          articles.map((article) => (
            <Row objectId={article} specificDepartment1={specificDepartment1} />
          ))
        )}
      </div>
    </div>
  );
}

export default Nav;

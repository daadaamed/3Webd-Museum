/** @format */

import React, { useEffect, useState } from 'react';
import axios from './axios';
import requests from './request';
import './Nav.css';
import { getTitles } from './request';
import Row from './Row';
// ---- This page contains the articles to show from API ---- //

// ----------------- à faire ------------------------ //
// apres de mettre les articles au hasard, faire onClick pour que ça mene a la page de l'article sélectionné
// faire les fonctionnalités de la barre de recherche
function Nav() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        'https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&q=sunflowers&isHasImage=true'
      );
      console.log(request.data.objectIDs);
      setArticles(request.data.objectIDs);
      setIsLoading(false);
      return request;
    }
    fetchData();
  }, [
    'https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&q=sunflowers&isHasImage=true',
  ]);
  console.log(articles);
  return (
    <div className="nav">
      <h2> Welcome to Met Museum!</h2>

      <div className="nav__posters">
        {isLoading ? (
          <img
            src={
              'https://i.pinimg.com/originals/3e/f0/e6/3ef0e69f3c889c1307330c36a501eb12.gif'
            }
          />
        ) : (
          // map objects from the API to access them
          articles.map((article) => <Row objectId={JSON.stringify(article)} />)
        )}
      </div>
    </div>
  );
}

export default Nav;

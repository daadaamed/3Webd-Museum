/** @format */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from './components/Header';
import axios from 'axios';
import './ArticlePage.css';

// je pense au lieu d'appeler le component header, fait appel juste à cette partie du code pour ne pas avoir toute la liste
/*
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
            This a gallery museum articles. Enjoy this artifacts and art
            collection. Type anything to learn about it in more details.
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
*/

function ArticlePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [article,  setArticle] = useState("");

  let articleId = useParams().id;
  let url =
    'https://collectionapi.metmuseum.org/public/collection/v1/objects/' +
    articleId;

  var wikipediaDescription = '(no description)';

  useEffect(() => {
    async function fetchData() {
      let request = await axios.get(url);
      setArticle(request.data);
    }
    setIsLoading(true);
    setArticle('');
    fetchData();
    setIsLoading(false);
  }, [url]);

  
  if (!isLoading){
    setTimeout(function (){
      var scrollDiv = document.getElementById("art");
      scrollDiv.scrollIntoView({behavior: "smooth", block: "nearest", inline: "nearest"});
    }, 100);
  }

  return(
    (isLoading)
    ? <img
        className="loading"
        src={
          'https://i.pinimg.com/originals/3e/f0/e6/3ef0e69f3c889c1307330c36a501eb12.gif'
        }
        alt="details de l'article"
      />
    : <div>
        <Header />
        <div id="art">
          <h1>{article.title}</h1>
          <img src={article.primaryImage} alt="img de l'oeuvre" width="50%"/>
          <h4>made in {article.objectDate || "unknown date"} by {article.artistDisplayName || "unknown artist"}</h4>
          <h4>department of {article.department}</h4>
          <br/>
          <p>{wikipediaDescription}</p>
          <a href={article.objectWikidata_URL}>Learn more about this article</a>
        </div>
      </div>
  );
}

export default ArticlePage;

/** @format */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from './components/Header';
import axios from 'axios';
import './ArticlePage.css';


function ArticlePage() {

  const [isLoading, setIsLoading] = useState(true);
  const [article,  setArticle] = useState("");
  const [wikidata,  setWikidata] = useState("");

  let articleId = useParams().id;
  let url = "https://collectionapi.metmuseum.org/public/collection/v1/objects/" + articleId;

  var wikipediaDescription = "(no description)"
  
  useEffect(() => {
    async function fetchData() {
      let request = await axios.get(url);
      setArticle(request.data);
    }
    setIsLoading(true);
    setArticle("");
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

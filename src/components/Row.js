/** @format */

import React, { useEffect, useState } from 'react';
import axios from './axios';
import './Row.css';

// how to pass data to the return in JSX : why image still empty

function Row(result) {
  // objectId devient result
  const objectId = JSON.stringify(result.objectId); // (result.objectId)
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  useEffect(() => {
    //const objectId2 = JSON.parse(objectId); // a degager
    //console.log('resultat', objectId);
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectId}` // objectId
        );
        return response.data;
      } catch (error) {
        console.error(error);
      }
    };
    // à corriger
    getData().then((data) => {
      if (data.primaryImageSmall !== '' && data.title.length > 2) {
        setImage(data.primaryImageSmall);
        setTitle(data.title);
      }
    });
  }, []);
  // console.log(
  // `datas are objectId is: ${objectId} having the title : ${title} and the img :${image}`
  //);

  return (
    <div className="Row">
      <a href={`/article/${objectId}`}>
        <img src={image} />
      </a>
      <h3 className="Row__title">{title}</h3>
    </div>
  );
}

export default Row;

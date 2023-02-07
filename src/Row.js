/** @format */

import React, { useEffect, useState } from 'react';
import axios from './axios';

// how to pass data to the return in JSX : why title still empty

function Row(objectId) {
  objectId = JSON.stringify(objectId);
  const [title, setTitle] = useState('');
  useEffect(() => {
    const objectId2 = JSON.parse(objectId);
    console.log();
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectId2.objectId}`
        );
        console.log(
          `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectId2.objectId}`
        );
        setTitle(objectId2.objectId);
        return response.data.title;
      } catch (error) {
        console.error(error);
      }
    };

    getData().then((data) =>
      console.log(`${data}===${objectId2.objectId} title =${title}`)
    );
  });

  /*
  const [title, setTitle] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectId}`
      );
      setTitle(request.data.title);
      return request;
    }
    fetchData();
  }, [
    `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectId}`,
  ]);
  console.log('title:');
  console.log(title);
  */
  return (
    <div className="Row">
      <img src="https://images.metmuseum.org/CRDImages/ep/web-large/DT1025.jpg" />
    </div>
  );
}

export default Row;

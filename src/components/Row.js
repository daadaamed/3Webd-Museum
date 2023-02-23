/** @format */

import React, { useEffect, useState } from 'react';
import axios from './axios';
import './Row.css';

// the article itself, display the article and the image

function Row(props) {
  const { objectId, specificDepartment1, specificYear } = props;
  // console.log(`dep is ${JSON.parse(JSON.stringify(specificDepartment1))}`);
  // console.log(`specificDepartment1 sec is ${specificDepartment1}`);
  //const objectId = JSON.stringify(objectId.objectId); // (objectId.objectId)
  //const objectId = objectId; // (objectId.objectId)
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [shouldHide, setShouldHide] = useState(false);
  // console.log(`objectId is ${JSON.parse(JSON.stringify(objectId))}`);

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
      if (specificDepartment1.length > 3 && specificYear.length > 3) {
        if (
          specificDepartment1.includes(data.department) &&
          specificYear == data.objectEndDate &&
          data.primaryImageSmall !== '' &&
          data.title.length > 2
        ) {
          setShouldHide(false);
          console.log('cond1 &&');
          setImage(data.primaryImageSmall);
          setTitle(data.title);
        } else {
          setShouldHide(true);
          console.log('cond2 && else');
        }
      } else if (specificDepartment1.length > 3 || specificYear.length > 3) {
        if (
          (specificDepartment1.includes(data.department) ||
            specificDepartment1.length < 3) &&
          (specificYear == data.objectEndDate || specificYear.length < 3) &&
          data.primaryImageSmall !== '' &&
          data.title.length > 2
        ) {
          setShouldHide(false);
          console.log('cond3 ||');
          setImage(data.primaryImageSmall);
          setTitle(data.title);
        } else {
          setShouldHide(true);
          console.log('cond4 || else');
        }
      } else {
        if (data.primaryImageSmall !== '' && data.title.length > 2) {
          setShouldHide(false);
          console.log('cond5');
          setImage(data.primaryImageSmall);
          setTitle(data.title);
        }
      }
    });
  }, []);
  // console.log(
  //   `datas are objectId is: ${objectId} having the title : ${title} and the img :${image}`
  // );

  return (
    <div className={shouldHide ? 'Row__hidden' : 'Row'}>
      <a href={`/article/${objectId}`}>
        <img src={image} />
      </a>
      <h3 className="Row__title">{title}</h3>
    </div>
  );
}

export default Row;

/** @format */

import React, { useEffect, useState } from 'react';
import axios from './axios';
import './Nav.css';

// ---- This page contains the articles to show from API ---- //

function Nav() {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        'https://collectionapi.metmuseum.org/public/collection/v1/departments'
      );
      console.log(request.data.departments);
      setDepartments(request.data.departments);
      return request;
    }
    fetchData();
  }, ['https://collectionapi.metmuseum.org/public/collection/v1/departments']);
  return (
    <div className="nav">
      <h2> Take a look at this articles.</h2>

      <div className="nav__posters">
        {
          // map objects from the API to access them
          departments.map((department) => (
            <h3>{department.displayName}</h3>
          ))
        }
      </div>
    </div>
  );
}

export default Nav;

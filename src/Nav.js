/** @format */

import React, { useEffect, useState } from 'react';
import axios from './axios';
import './Nav.css';

// ---- This page contains the articles to show from API ---- //

function Nav() {
  return (
    <div className="nav">
      <h2> Take a look at this articles</h2>
      <div className="nav__posters">
        {
          // map objects from the API to access them
        }
      </div>
    </div>
  );
}

export default Nav;

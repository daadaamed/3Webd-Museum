/** @format */
import * as React from 'react';
import Nav from './Nav';
import Header from './Header';
import SpecificSearchBars from './SpecificSearchBars';
import './App.css';

// ----- This page will keep all page navigation within the website ----- //

function App() {
  return (
    <div className="App">
      <Header />
      <SpecificSearchBars
        title="Search By Department"
        placeholder="Department"
      />
      <SpecificSearchBars
        title="Search By Category   "
        placeholder="Category"
      />
      <SpecificSearchBars title="Search By Date       " placeholder="Date" />
      <Nav />
    </div>
  );
}

export default App;

/** @format */
import * as React from 'react';
import HomeScreen from './components/HomeScreen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ArticlePage from './ArticlePage';
import './App.css';

// ----- This page will keep all page navigation within the website ----- //

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomeScreen />}></Route>
          <Route path="/article/111" element={<ArticlePage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

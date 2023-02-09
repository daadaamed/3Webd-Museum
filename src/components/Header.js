/** @format */

import React, { useEffect, useState, useRef } from 'react';
import SpecificSearchBars from './SpecificSearchBars';
import Nav from './Nav';
import './Header.css';

// ---- The header component which contains a background image and the search bar and the button search ---- //
// ---------------------- It is displayed in all website pages -------------------- //

// the background image can be changed to gif
function Header() {
  const [onClickSpecfic, setOnClickSpecific] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [textInInput, setTextInInput] = useState('');
  // when click on specific search bar, 3 bars appear
  const handleSpecificSearchClick = () => {
    setOnClickSpecific(true);
  };
  // get text from input when click on search
  const handleSearchBarClick = () => {
    console.log('clicked on search');
    setTextInInput(searchInput);
    //event.preventDefault();
  };
  return (
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
              Specific Search
            </button>
          </div>
        </div>
      </header>

      <div className="header--fadeBottom" />
      {onClickSpecfic ? (
        <div>
          {' '}
          <SpecificSearchBars
            title="Search By Department"
            placeholder="Department"
          />
          <SpecificSearchBars
            title="Search By Category   "
            placeholder="Category"
          />
          <SpecificSearchBars
            title="Search By Date       "
            placeholder="Date"
          />{' '}
        </div>
      ) : (
        <div> </div>
      )}
      <Nav textInInput={textInInput} />
    </div>
  );
}
/* 
import * as React from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Museum</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex ">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
*/
export default Header;

/** @format */

import React, { useEffect, useState } from 'react';
import './Header.css';

// ---- The header component which contains a background image and the search bar and the button search ---- //
// ---------------------- It is displayed in all website pages -------------------- //

function Header() {
  return (
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
          collection. Type anything to learn about it in more details
        </h3>
        <div className="header__buttons">
          <input
            type="text"
            name="search-bar"
            id="search-bar"
            placeholder="Search anything"
            className="header__input"
          />
          <button className="header__button">Search</button>
        </div>
      </div>
      <div className="header--fadeBottom" />
    </header>
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

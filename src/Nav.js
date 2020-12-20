import React from "react";
import { Link } from "react-router-dom";
import {Nav, Navbar } from 'react-bootstrap';
import Logo from "./components/Logo.js";

export default class Navigation extends React.Component {
  render() {
    return (
      <Navbar style={{backgroundColor: "#FFAF6D"}} expand="lg">
        <Logo />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navContainer mr-auto">
            <Nav.Link className= "mr-sm-2 navText" style={{color: "white", fontSize: "1.5rem", fontWeight: "bold"}} href="/search">Home</Nav.Link>
            <Nav.Link className="navText" style={{color: "white", fontSize: "1.5rem", fontWeight: "bold"}} href="/login">Login</Nav.Link>
            <Nav.Link className="navText" style={{color: "white", fontSize: "1.5rem", fontWeight: "bold"}} href="/profile">Edit Profile</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

import React from "react";
import { Navbar as NavBarBootstarp, Nav } from "react-bootstrap";
import SearchBox from "./SearchBox";
import {
Link
} from "react-router-dom";

export default function Navbar() {
  return (
    <NavBarBootstarp bg="dark" expand="lg" className="flex-shrink-1">
      <Link to="/" >
      <NavBarBootstarp.Brand style={{ color: "white" }}>

        React Movies App
      </NavBarBootstarp.Brand>
      </Link>
      <NavBarBootstarp.Toggle aria-controls="basic-Navbar-nav" />
      <NavBarBootstarp.Collapse id="basic-Navbar-nav">
        <Nav className="mr-auto">
        <Link to="/" style={{ color: "white" }}>
            Home
          </Link>
        </Nav>
        <SearchBox />
      </NavBarBootstarp.Collapse>
    </NavBarBootstarp>
  );
}

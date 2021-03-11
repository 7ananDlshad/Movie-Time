import React from 'react';
import { Navbar as NavBarBootstarp, Nav } from 'react-bootstrap';
import SearchBox from './SearchBox';
import { Link } from 'react-router-dom';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Navbar() {
  return (
    <NavBarBootstarp expand="lg" className="flex-shrink-1 navbar-style">
      <Link to="/">
        <NavBarBootstarp.Brand className="white-color">
          <FontAwesomeIcon
            icon={faFilm}
            style={{ fontSize: '25px' }}
            className="orange-color"
          />
        </NavBarBootstarp.Brand>
      </Link>
      <NavBarBootstarp.Toggle aria-controls="basic-Navbar-nav" />
      <NavBarBootstarp.Collapse id="basic-Navbar-nav">
        <Nav className="mr-auto">
          <Link to="/" className="white-color links titles">
            Home &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
          </Link>
          <Link to="/arabic_movies" className="white-color links titles">
            Arabic Movie &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
          </Link>
          <Link to="/upcoming" className="white-color links titles">
            Upcoming &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
          </Link>
          <Link to="/top_rated" className="white-color links titles">
            Top Rated &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
          </Link>
          <Link to="/now_playing" className="white-color links titles">
            Now Playing &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
          </Link>
        </Nav>

        <SearchBox />
      </NavBarBootstarp.Collapse>
    </NavBarBootstarp>
  );
}

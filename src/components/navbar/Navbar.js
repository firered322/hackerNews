import React from "react";
import {NavLink} from 'react-router-dom'
import './Navbar.css'

function Navbar(props) {
  return (
    <nav>
      <ul id="navbar">
        <li id="brand"><NavLink exact to="/">Hacker News</NavLink></li>
        <li><NavLink to="/about">new</NavLink></li>|
        <li><NavLink to="/past">past</NavLink></li>|
        <li><NavLink to="/comments">comments</NavLink></li>|
        <li><NavLink to="/show">show</NavLink></li>|
        <li><NavLink to="/jobs">jobs</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;

import React from "react";
import {NavLink} from 'react-router-dom'
import './Navbar.css'

function Navbar(props) {
  return (
    <nav>
      <ul id="navbar">
        <li id="brand"><NavLink exact to="/hackernews">Hacker News</NavLink></li>
        <li id="nav-item"><NavLink to="/about">new</NavLink></li>|
        <li id="nav-item"><NavLink to="/past">past</NavLink></li>|
        <li id="nav-item"><NavLink to="/comments">comments</NavLink></li>|
        <li id="nav-item"><NavLink to="/show">show</NavLink></li>|
        <li id="nav-item"><NavLink to="/jobs">jobs</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;

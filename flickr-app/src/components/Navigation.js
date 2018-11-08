import React from 'react';
import { NavLink } from 'react-router-dom';

//Display navigation links
const Navigation = () => (
  <nav className="main-nav">
    <ul>
      <li><NavLink to="/search/cat">Cats</NavLink></li>
      <li><NavLink to="/search/dog">Dogs</NavLink></li>
      <li><NavLink to="/search/computer">Computers</NavLink></li>
    </ul>
  </nav>
)

export default Navigation;
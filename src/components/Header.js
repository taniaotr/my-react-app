import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Main</NavLink>
      <NavLink to="/news" className={({ isActive }) => (isActive ? 'active' : '')}>News</NavLink>
      <NavLink to="/profile" className={({ isActive }) => (isActive ? 'active' : '')}>Profile</NavLink>
    </nav>
  </header>
);

export default Header;

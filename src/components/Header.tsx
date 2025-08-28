import React from 'react';
import logo from '../assets/logo.svg';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <img src={logo} alt="Company Logo" className="logo" />
      <nav className="navigation">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/projects">Projects</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
import React from 'react';
import '../styles.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1>Dictionary Master</h1>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

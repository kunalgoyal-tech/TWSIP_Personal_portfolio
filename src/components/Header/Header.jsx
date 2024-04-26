import React, { useEffect, useState } from 'react';
import './Header.css';

function Header() {
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const toggleNavbar = () => {
      setIsActive(!isActive); 
    };

    const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
    navToggleBtn.addEventListener("click", toggleNavbar);

    return () => {
      navToggleBtn.removeEventListener("click", toggleNavbar);
    };
  }, [isActive]); 

  return (
    <header className="header" data-header>
      <div className="container">
        <h1 className="h1 logo">
          <a href="#home"><span>Kunal Goyal</span></a>
        </h1>
        <button className={`nav-toggle-btn ${isActive ? 'active' : ''}`} aria-label="Toggle Menu" title="Toggle Menu" data-nav-toggle-btn>
          <span className="one"></span>
          <span className="two"></span>
          <span className="three"></span>
        </button>

        <nav className={`navbar ${isActive ? 'active' : ''}`} data-navbar>
          <ul className="navbar-list">
            <li>
              <a href="#home" className="navbar-link">Home</a>
            </li>
            <li>
              <a href="#about" className="navbar-link">About</a>
            </li>
            <li>
              <a href="#education" className="navbar-link">Education</a>
            </li>
            <li>
              <a href="#skills" className="navbar-link">Skills</a>
            </li>
            <li>
              <a href="#project" className="navbar-link">Project</a>
            </li>
            <li>
              <a href="#contact" className="navbar-link">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

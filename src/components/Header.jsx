import React, { useEffect, useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom'; // For routing (install with: npm install react-router-dom)

const Header = () => {
    const [darkMode, setDarkMode] = React.useState(false);

    useEffect(()=>{
        document.documentElement.classList.toggle('dark', darkMode);}, [darkMode]);

  return (
        <header className={`header ${darkMode ? 'dark' : ''}`}>      
        <div className="header-container">
        <h1 className="logo">bhakti.build</h1>
        
        <nav className="nav-menu">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/projects" className="nav-link">Projects</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>
        <button
            onClick={()=> setDarkMode(!darkMode)}
            className='dark-mode-toggle'
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >{darkMode ? '☀️' : '🌙'}</button>
      </div>
    </header>
  );
};

export default Header;
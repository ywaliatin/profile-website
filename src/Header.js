import React from 'react';
import './Header.css'; // Import your CSS styles for the header
import About from './About';
import Projects from './Projects';


function Header() {
  return (
    <header className="header">
      {/* Header Image */}
      <div className="header-image">
        <img
          src="./project2.jpg"
          alt="Header"
          className="header-image"
        />
      </div>

       {/* Position the About and Projects components */}
       <div className="About">
        <About />
      </div>
      <div className="Projects">
        <Projects />
      </div>

      {/* Navigation Menu */}
      <nav className="nav-menu">

        
     

        <ul className="nav-list">
       
          <li className="nav-item"><a href="#home">Yeni Waliatin</a></li>
              
        </ul>
        <p>Back developer</p>

        
      </nav>
      
    </header>
  );
}

export default Header;

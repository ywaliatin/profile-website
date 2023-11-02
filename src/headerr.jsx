import React, { useEffect } from 'react';
import './headerr.css';

function Header() {
  useEffect(() => {
    // Function to handle smooth scrolling
    function scrollToSection(e) {
      e.preventDefault();

      const targetId = e.target.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: 'smooth', // Enable smooth scrolling
        });
      }
    }

    // Attach event listeners to navigation links
    const navLinks = document.querySelectorAll('.nav-item a');
    navLinks.forEach((link) => {
      link.addEventListener('click', scrollToSection);
    });

    // Clean up event listeners when the component unmounts
    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener('click', scrollToSection);
      });
    };
  }, []);

  return (
    <header className="header">
      <div className="logo">
        <p>Yeni Waliatin</p>
        <p className='jobtittle'> </p>
      </div>
      <nav className="nav-menu">
        <ul className="nav-list">
          <li className="nav-item"><a href="#home">Home</a></li>
          <li className="nav-item"><a href="#about">Project</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

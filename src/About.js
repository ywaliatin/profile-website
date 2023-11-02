import React from 'react';
import './About.css';

function About() {
  const linkedinUrl = 'https://www.linkedin.com/in/yeniwaliatin/';
  const emailUrl = 'mailto:waliatin.yeni@gmail.com/';

  return (
    <div id="About">
      <div className="profile">
        <div className="profile-image">
          <img src="yeni.png" alt="Profile Photo" />
        </div>
        <div className="profile-text">
          
          <p className="job-role">I am a full-stack web developer, based in Melbourne, AustraliaI am a full-stack web developer, based in Melbourne, Australia</p>
        
          <p className="contact-links">
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
              <img src="/link.png" alt="LinkedIn Profile" />
            </a>
            <a href={emailUrl}>
              <img src="/email.png" alt="Email" />
            </a>
          
        </p>
        </div>
        
         
      </div>
      <hr className="short-line" />
    </div>
  );
}

export default About;

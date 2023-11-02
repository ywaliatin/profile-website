
import './Aboutt.css';
import React, { useEffect } from 'react';

function About() {
    const linkedinUrl = 'https://www.linkedin.com/in/yeniwaliatin/'
  const emailUrl = 'mailto:waliatin.yeni@gmail.com'

  useEffect(() => {
    // Function to randomize ball colors and animation properties
    function randomizeBalls() {
      const balls = document.querySelectorAll('.falling-ball');
      balls.forEach((ball) => {
        const randomColor = getRandomColor();
        const animationDuration = getRandomDuration();
        const animationDelay = getRandomDelay();

        ball.style.backgroundColor = randomColor;
        ball.style.animationDuration = animationDuration;
        ball.style.animationDelay = animationDelay;
      });
    }

    // Function to generate a random color
    function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    // Function to generate a random animation duration
    function getRandomDuration() {
      return `${Math.random() * 12 + 1}s`; // Random duration between 1s and 3s
    }

    // Function to generate a random animation delay
    function getRandomDelay() {
      return `${Math.random() * 2}s`; // Random delay between 0s and 2s
    }

    // Call the function to randomize the balls
    randomizeBalls();

    const snowballs = document.querySelectorAll('.falling-ball');

    snowballs.forEach((snowball) => {
      // Calculate a random delay between 0 and 5 seconds (adjust as needed)
      const randomDelay = Math.random() * 5000; // Milliseconds

      // Set the animation-delay property with the random delay
      snowball.style.animationDelay = `${randomDelay}ms`;
    });
  }, []);


  return (
    <div>
      <section id="about" className="about-section" style={{ backgroundColor: '#333' }}>
        <div className="container">
          <div className="about-content">
            <h2>
              <div className="profile-image">
                <img src="yeni.png" alt="Profile Photo" />
              </div>
            </h2>
            <p>
              Recent IT graduate with a strong foundation in information technology. Proficient in troubleshooting, programming, data management, and digital marketing. Pursuing a Bachelor of Information Technology from Deakin University and relevant certifications. Committed to ongoing learning and eager to apply skills to the IT field.
            </p>
            <p>
              Experienced in education support and digital marketing, with a focus on problem-solving, time management, and communication.
            </p>

            <p className="contact-links">
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                <img src="/link.png" alt="LinkedIn Profile" />
              </a>
              <a href={emailUrl}>
                <img src="/email.png" alt="Email" />
              </a>
            </p>
            <div className="download-cv-container">
              <a href="/YENI CV.pdf" target="_blank" rel="noopener noreferrer" className="download-cv">
                Download my CV
              </a>
            </div>

            <div className="falling-balls-container">
            <div className="falling-ball2" style={{ top: '10px', left: '20px' }}></div>
            <div className="falling-ball3" style={{ top: '50px', left: '100px' }}></div>
            <div className="falling-ball" style={{ top: '30px', left: '200px' }}></div>
            <div className="falling-ball2" style={{ top: '20px', left: '150px' }}></div>
            <div className="falling-ball3" style={{ top: '50px', left: '500px' }}></div>
            <div className="falling-ball" style={{ top: '30px', left: '400px' }}></div>
            <div className="falling-ball2" style={{ top: '10px', left: '400px' }}></div>
            <div className="falling-ball3" style={{ top: '50px', left: '300px' }}></div>
            <div className="falling-ball" style={{ top: '30px', left: '600px' }}></div>
            <div className="falling-ball2" style={{ top: '10px', left: '800px' }}></div>
            <div className="falling-ball3" style={{ top: '50px', left: '1000px' }}></div>
            <div className="falling-ball" style={{ top: '30px', left: '900px' }}></div>
            <div className="falling-ball2" style={{ top: '10px', left: '700px' }}></div>
            <div className="falling-ball3" style={{ top: '20px', left: '1100px' }}></div>
            <div className="falling-ball" style={{ top: '100px', left: '1200px' }}></div>
            <div className="falling-ball" style={{ top: '30px', left: '1300px' }}></div>
            <div className="falling-ball2" style={{ top: '10px', left: '1400px' }}></div>
            <div className="falling-ball3" style={{ top: '20px', left: '970px' }}></div>
            <div className="falling-ball" style={{ top: '100px', left: '1150px' }}></div>
        
          
            {/* Add more balls with different starting positions as needed */}
</div>

  

          </div>
        </div>
      </section>

        
        <section id="project" className="about-section" style={{ backgroundColor: '#333' }}>
     
          <h3>Academic Project:</h3>
          <div className="table-container"></div>
          <table>
            <thead>
              <tr>
              <th></th>
               
                
                
              </tr>
            </thead>
            <tbody>
            <tr>
  <td className="project-image-cell" >
    <img className="project-image" src="bub.png" alt="Project 1" />
  </td>
  <td>
    <div className="project-details">
      <h4 >Responsive Web and App Development</h4>
      <p >
        Planned, designed, and created a responsive website using Vue.js. The project, known as the ‘BubsPlayDate’ website, aimed to connect parents and caregivers with babies to facilitate playdate arrangements.
      </p>
    </div>
  </td>
  
</tr>

<tr>
  <td className="project-image-cell" >
    <img className="project-image" src="devlink.png" alt="Project 1" />
  </td>
  <td>
    <div className="project-details">
      <h4 >Full Stack Development: Secure Fronted Application</h4>
      <p >
      Crafted a personal profile using HTML, CSS, and JavaScript.
Developed a marketplace website named ‘DevLink Marketplace’ using React.js.
Established connectivity between the frontend and backend.
Successfully deployed the website using Netlify.

      </p>
    </div>
  </td>
  
</tr>

<tr>
  <td className="project-image-cell" >
    <img className="project-image" src="connectme.jpg" alt="Project 1" />
  </td>
  <td>
    <div className="project-details">
      <h4 >User Centred Design</h4>
      <p >
      Spearheaded the planning and design of the ‘ConnectMe’ app as part of a group project using Figma.
Designed the app with a strong focus one ensuring ease of access and readability for users.
      </p>
    </div>
  </td>
  
</tr>

<tr>
  <td className="project-image-cell" >
    <img className="project-image" src="sql.png" alt="Project 1" />
  </td>
  <td>
    <div className="project-details">
      <h4 >Data Information and Management</h4>
      <p >
      Designed a database schema and implemented SQL queries for data retrieval.      </p>
    </div>
  </td>
  
</tr>

<tr>
  <td className="project-image-cell" >
    <img className="project-image" src="data.png" alt="Project 1" />
  </td>
  <td>
    <div className="project-details">
      <h4 >Data Wrangling</h4>
      <p >
      Prepared, cleaned, and visualised data for analysis report using Phyton, Power BI and Tableau.      </p>
    </div>
  </td>
  
</tr>

<tr>
  <td className="project-image-cell" >
    <img className="project-image" src="interactive.png" alt="Project 1" />
  </td>
  <td>
    <div className="project-details">
      <h4 >2.	Web Design and Interactivity</h4>
      <p >
      Planned, designed, and developed an interactive and visually appealing website.   </p>
    </div>
  </td>
  
</tr>

              {/* Add more rows as needed */}
            </tbody>
          </table>
         </section>
         </div>
         
  );
}

export default About;

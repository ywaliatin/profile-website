import React from 'react';
import './Projects.css';


function Projects() {
  return (
    
    <div className="projects backgroundcolor" id="Work">
      <p className="job-title">These are projects that I created during my studies</p>
    
      <h3>Academic Project:</h3>
          <div className="table-container"></div>
          <table>
            <thead>
              <tr>
                <th>Project Name</th>
                <th>Description</th>
                
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1.	Responsive Web and App Development</td>
                <td>Planned, designed, and created a responsive website using Vue.js. The project, known as the ‘BubsPlayDate’ website, aimed to connect parents and caregivers with babies to facilitate playdate arrangements.</td>
                
              </tr>
              <tr>
                <td>2.	Web Design and Interactivity</td>
                <td>Planned, designed, and developed an interactive and visually appealing website.</td>
                
              </tr>
              <tr>
                <td>3.	Data Information and Management</td>
                <td>Designed a database schema and implemented SQL queries for data retrieval.</td>
                
              </tr>
              <tr>
                <td>4.	Full Stack Development: Secure Fronted Application</td>
                <td>Crafted a personal profile using HTML, CSS, and JavaScript.
Developed a marketplace website named ‘DevLink Marketplace’ using React.js.
Established connectivity between the frontend and backend.
Successfully deployed the website using Netlify.
</td>
                
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
          
      </div>
    
  );
}

export default Projects;

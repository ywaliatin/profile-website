import React from 'react';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import Resume from './Resume';
import Skills from './Skills';
// Import other components as needed

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      {/* Add other sections/components as needed */}
    </div>
  );
}


export default App;

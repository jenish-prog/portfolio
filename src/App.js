import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import About from './About';
import Resume from './Resume';
import Stats from './Stats';
import HireMe from './HireMe';
import Blog from './Blog';
import Contact from './Contact';
import Footer from './Footer';
import './assets/css/animations.css';

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <About />
      <Resume />
      <Stats />
      <HireMe />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
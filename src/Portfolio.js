
import React from 'react';
import useScrollAnimation from './useScrollAnimation';

function Portfolio() {
  const sectionRef = useScrollAnimation();

  return (
    <section className="section fade-in-section" id="portfolio" ref={sectionRef}>
      <div className="container">
        <h2 className="mb-5">My <span className="text-danger">Portfolio</span></h2>
        {/* Portfolio content will go here */}
      </div>
    </section>
  );
}

export default Portfolio;


import React from 'react';
import useScrollAnimation from './useScrollAnimation';

function HireMe() {
  const sectionRef = useScrollAnimation();

  return (
    <section className="section bg-dark py-5 fade-in-section" ref={sectionRef}>
      <div className="container text-center">
        <h2 className="text-light mb-5 font-weight-normal">I am open to work opportunities.</h2>
        <button className="btn bg-primary w-lg" >Hire me</button>
      </div>
    </section>
  );
}

export default HireMe;

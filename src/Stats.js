
import React, { useRef } from 'react';
import useValueAnimation from './useValueAnimation';
import useScrollAnimation from './useScrollAnimation';

function Stats() {
  const sectionRef = useScrollAnimation();
  const hoursWorked = useValueAnimation(sectionRef, 500, 2000);
  const projectFinished = useValueAnimation(sectionRef, 50, 2000);
  const happyClients = useValueAnimation(sectionRef, 2, 2000);
  const coffeeDrinked = useValueAnimation(sectionRef, 2, 2000);

  return (
    <section className="section bg-dark text-center fade-in-section" ref={sectionRef}>
      <div className="container">
        <div className="row text-center">
          <div className="col-md-6 col-lg-3">
            <div className="row ">
              <div className="col-5 text-right text-light border-right py-3">
                <div className="m-auto"><i className="ti-alarm-clock icon-xl"></i></div>
              </div>
              <div className="col-7 text-left py-3">
                <h1 className="text-danger font-weight-bold font40">{hoursWorked}</h1>
                <p className="text-light mb-1">Hours Worked</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="row">
              <div className="col-5 text-right text-light border-right py-3">
                <div className="m-auto"><i className="ti-layers-alt icon-xl"></i></div>
              </div>
              <div className="col-7 text-left py-3">
                <h1 className="text-danger font-weight-bold font40">{projectFinished}</h1>
                <p className="text-light mb-1">Project Finished</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="row">
              <div className="col-5 text-right text-light border-right py-3">
                <div className="m-auto"><i className="ti-face-smile icon-xl"></i></div>
              </div>
              <div className="col-7 text-left py-3">
                <h1 className="text-danger font-weight-bold font40">{happyClients}</h1>
                <p className="text-light mb-1">Happy Clients</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="row">
              <div className="col-5 text-right text-light border-right py-3">
                <div className="m-auto"><i className="ti-heart-broken icon-xl"></i></div>
              </div>
              <div className="col-7 text-left py-3">
                <h1 className="text-danger font-weight-bold font40">{coffeeDrinked}k</h1>
                <p className="text-light mb-1">Coffee Drinked</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;


import React from 'react';
import useScrollAnimation from './useScrollAnimation';

function About() {
  const sectionRef = useScrollAnimation();

  return (
    <div className="container-fluid fade-in-section" ref={sectionRef}>
      <div id="about" className="row about-section">
        <div className="col-lg-4 about-card">
          <h3 className="font-weight-light">Who am I ?</h3>
          <span className="line mb-5"></span>
          <h5 className="mb-3">A Web Developer | AI/ML Located In Our Lovely Earth</h5>
          <p className="mt-20">A Web Developer and AI/ML practitioner passionate about creating interactive applications, analyzing data, building predictive models, and turning insights into impactful solutions.</p>
          <button className="btn btn-outline-danger"><i className="icon-down-circled2 "></i>Download My CV</button>
        </div>
        <div className="col-lg-4 about-card">
          <h3 className="font-weight-light">Personal Info</h3>
          <span className="line mb-5"></span>
          <ul className="mt40 info list-unstyled">
            <li><span>Birthdate</span> : 21/11/2005</li>
            <li><span>Email</span> : jenish112005@gmail.com</li>
            <li><span>Phone</span> : + (91) 7845742951</li>
            <li><span>Address</span> :  Kariyavilai,mondaikadu(post)</li>
          </ul>
          <ul className="social-icons pt-3">
            <li className="social-item"><a className="social-link" href="#"><i className="ti-linkedin" aria-hidden="true"></i></a></li>
            <li className="social-item"><a className="social-link" href="#"><i className="ti-youtube" aria-hidden="true"></i></a></li>
            <li className="social-item"><a className="social-link" href="#"><i className="ti-instagram" aria-hidden="true"></i></a></li>
            <li className="social-item"><a className="social-link" href="#"><i className="ti-github" aria-hidden="true"></i></a></li>
          </ul>
        </div>
        <div className="col-lg-4 about-card">
          <h3 className="font-weight-light">My Expertise</h3>
          <span className="line mb-5"></span>
          <div className="row">
            <div className="col-1 text-danger pt-1"><i className="ti-widget icon-lg"></i></div>
            <div className="col-10 ml-auto mr-3">
              <h6>Web Development</h6>
              <p className="subtitle"> Building modern, responsive, and user-friendly web applications.</p>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-1 text-danger pt-1"><i className="ti-paint-bucket icon-lg"></i></div>
            <div className="col-10 ml-auto mr-3">
              <h6>AI & Machine Learning</h6>
              <p className="subtitle">Developing intelligent systems, applying advanced models, and extracting actionable insights from data.</p>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-1 text-danger pt-1"><i className="ti-stats-up icon-lg"></i></div>
            <div className="col-10 ml-auto mr-3">
              <h6>Data Analytics</h6>
              <p className="subtitle">Leveraging data analysis techniques to inform decision-making and optimize solutions.</p>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

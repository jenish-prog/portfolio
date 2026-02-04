import React from 'react';
import useScrollAnimation from './useScrollAnimation';

function Contact() {
  const sectionRef = useScrollAnimation();

  return (
    <div className="section contact contact-with-bg fade-in-section" id="contact" ref={sectionRef}>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="contact-form-card">
              <h4 className="contact-title">Send a message</h4>
              <form>
                <div className="form-group">
                  <input className="form-control" type="text" placeholder="Name *" name="name" required />
                </div>
                <div className="form-group">
                  <input className="form-control" type="email" placeholder="Email *" name="email" required />
                </div>
                <div className="form-group">
                  <textarea className="form-control" placeholder="Message *" rows="7" name="message" required></textarea>
                </div>
                <div className="form-group ">
                  <button type="submit" className="form-control btn btn-primary">Send Message</button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="contact-info-card">
              <h4 className="contact-title">Get in touch</h4>
              <div className="row mb-2">
                <div className="col-1 pt-1 mr-1">
                  <i className="ti-mobile icon-md"></i>
                </div>
                <div className="col-10 ">
                  <h6 className="d-inline">Phone : <br /> <span className="text-muted">+ (91) 7845742951</span></h6>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-1 pt-1 mr-1">
                  <i className="ti-map-alt icon-md"></i>
                </div>
                <div className="col-10">
                  <h6 className="d-inline">Address :<br /> <span className="text-muted">Kariyavilai,Mondaikade(post)</span></h6>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-1 pt-1 mr-1">
                  <i className="ti-envelope icon-md"></i>
                </div>
                <div className="col-10">
                  <h6 className="d-inline">Email :<br /> <span className="text-muted">jenish112005@gmail.com</span></h6>
                </div>
              </div>
              <ul className="social-icons pt-4">
                <li className="social-item"><a className="social-link text-dark" href="https://www.instagram.com/jen_is_h_/" aria-label="Instagram"><i className="ti-instagram" aria-hidden="true"></i></a></li>
                <li className="social-item"><a className="social-link text-dark" href="https://www.linkedin.com/in/jenish-s-4aa3692b5/" aria-label="LinkedIn"><i className="ti-linkedin" aria-hidden="true"></i></a></li>
                <li className="social-item"><a className="social-link text-dark" href="https://github.com/jenish-prog" aria-label="GitHub"><i className="ti-github" aria-hidden="true"></i></a></li>
                <li className="social-item"><a className="social-link text-dark" href="https://www.youtube.com/@WhatHappen_jp" aria-label="YouTube"><i className="ti-youtube" aria-hidden="true"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

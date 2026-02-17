
import React from 'react';

function Header() {
  return (
    <header className="header" id="home">
      <div className="container">
        <ul className="social-icons pt-3">
          <li className="social-item"><a className="social-link text-light" href="https://www.linkedin.com/in/jenish-s-4aa3692b5/" aria-label="LinkedIn"><i className="ti-linkedin" aria-hidden="true"></i></a></li>
          <li className="social-item"><a className="social-link text-light" href="https://www.instagram.com/jen_is_h_/" aria-label="Instagram"><i className="ti-instagram" aria-hidden="true"></i></a></li>
          <li className="social-item"><a className="social-link text-light" href="https://github.com/jenish-prog" aria-label="GitHub"><i className="ti-github" aria-hidden="true"></i></a></li>
          <li className="social-item"><a className="social-link text-light" href="https://www.youtube.com/@WhatHappen_jp" aria-label="YouTube"><i className="ti-youtube" aria-hidden="true"></i></a></li>
        </ul>
        <div className="header-content">
          <h4 className="header-subtitle">Hello, I am</h4>
          <h1 className="header-title">Jenish</h1>
          <h6 className="header-mono">Web Developer | AI/ML</h6>
          <a href="/jenish_resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-rounded"><i className="ti-printer pr-2"></i>Print Resume</a>
        </div>
      </div>
    </header>
  );
}

export default Header;

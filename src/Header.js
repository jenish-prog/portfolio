
import React from 'react';

function Header() {
  return (
    <header className="header" id="home">
      <div className="container">
        <ul className="social-icons pt-3">
          <li className="social-item"><a className="social-link text-light" href="https://www.linkedin.com/in/jenish-s-4aa3692b5/"><i className="ti-linkedin" aria-hidden="true"></i></a></li>
          <li className="social-item"><a className="social-link text-light" href="https://www.instagram.com/jen_is_h_/"><i className="ti-instagram" aria-hidden="true"></i></a></li>
          <li className="social-item"><a className="social-link text-light" href="https://github.com/jenish-prog"><i className="ti-github" aria-hidden="true"></i></a></li>
          <li className="social-item"><a className="social-link text-light" href="https://www.youtube.com/@WhatHappen_jp"><i className="ti-youtube" aria-hidden="true"></i></a></li>
        </ul>
        <div className="header-content">
          <h4 className="header-subtitle">Hello, I am</h4>
          <h1 className="header-title">Jenish</h1>
          <h6 className="header-mono">Data Analyst | Data Scientist</h6>
          <button className="btn btn-primary btn-rounded"><i className="ti-printer pr-2"></i>Print Resume</button>
        </div>
      </div>
    </header>
  );
}

export default Header;

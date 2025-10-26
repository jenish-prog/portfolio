import React from 'react';
import avatar from './assets/imgs/avatar.jpeg';

function Navbar() {
  const handleClick = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-white" data-spy="affix" data-offset-top="510">
      <div className="container">
        <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse mt-sm-20 navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href="#home" onClick={handleClick} className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="#about" onClick={handleClick} className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a href="#resume" onClick={handleClick} className="nav-link">Resume</a>
            </li>
          </ul>
          <ul className="navbar-nav brand">
            <img src={avatar} alt="" className="brand-img" />
            <li className="brand-txt">
              <h5 className="brand-title">Jenish</h5>
              <div className="brand-subtitle">Data Analyst | Data Scientist</div>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a href="#blog" onClick={handleClick} className="nav-link">Blog</a>
            </li>
            <li className="nav-item last-item">
              <a href="#contact" onClick={handleClick} className="nav-link">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

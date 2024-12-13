import React from 'react';
import './hero.css';
import linkdin from '../../assets/linkedin.png';
import github from '../../assets/github.png';
import profile from "../../assets/profile-pic.png";

const Hero = () => {
 

  const navigateToContact = () => {
    window.location.href = './#contact';
  };

  return (
    <section id="profile">
      <div className="section__pic-container">
        <img src={profile} alt="John Doe profile picture" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Pranabesh Pratihar</h1>
        <p className="section__text__p2">Frontend Developer</p>
        <div className="btn-container">
          <a href='./assets/PRANABESH PRATIHAR_RESUME.pdf' download="PRANABESH PRATIHAR_RESUME.pdf">
            <button className="btn btn-color-2">
              Download CV
            </button>
          </a>
          <button className="btn btn-color-1" onClick={navigateToContact}>
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
            src={linkdin}
            alt="My LinkedIn profile"
            className="icon"
            onClick={() => window.location.href = 'https://linkedin.com/'}
          />
          <img
            src={github}
            alt="My Github profile"
            className="icon"
            onClick={() => window.open('https://github.com/pranabesh11','_blank').focus()}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

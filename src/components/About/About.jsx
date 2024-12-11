import React from 'react';
import './about.css';
import about_pic from "../../assets/about-pic.png";
import experience from "../../assets/experience.png";
import education from "../../assets/education.png";
import arrowpic from '../../assets/arrow.png';

const About = () => {
  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img
            src={about_pic}
            alt="Profile picture"
            className="about-pic"
          />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img
                src={experience}
                alt="Experience icon"
                className="icon"
              />
              <h3>Experience</h3>
              <p>1.2 years <br />Frontend Development</p>
            </div>
            <div className="details-container">
              <img
                src={education}
                alt="Education icon"
                className="icon"
              />
              <h3>Education</h3>
              <p>B.Sc. Physics<br />M.Sc. Electronics <br/> Self Taught Programmar</p>
            </div>
          </div>
          <div className="text-container">
            <p>
              I’m a web developer with 1.2 years of experience in building responsive, user-friendly web applications. Skilled in front-end and back-end technologies like React, JavaScript, HTML, CSS, and Node.js, I strive to create efficient and seamless digital experiences. I’m passionate about problem-solving and always eager to learn new tools and techniques to improve my craft. I enjoy collaborating on projects and constantly seek to grow in the ever-evolving world of web development.
            </p>
          </div>
        </div>
      </div>
      <img
        src={arrowpic}
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => window.location.href = './#experience'}
      />
    </section>
  );
};

export default About;

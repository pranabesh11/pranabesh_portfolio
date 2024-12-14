import React, { useEffect } from 'react';
import './experience.css';
import checkmark from "../../assets/checkmark.png";
import arrowpic from '../../assets/arrow.png';
import html_img from "../../assets/skills_Icons/html.png"
import css_img from "../../assets/skills_Icons/css-3.png";
import data from "../../assets/data.json";

const Experience = () => {
  useEffect(()=>{
    console.log("front end data",data['Frontend Development'][0]);
  },[]);
  
  function getImagePath(path){
    return new URL(`../../assets/skills_Icons/${path}`, import.meta.url).href;
  }
  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Experience</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          {/* Frontend Development Experience */}
          <div className="details-container">
            <h2 className="experience-sub-title">Programming Languages</h2>
            <div className="article-container">
              {
                data['Frontend Development'].map((skill,index)=>{
                  return(
                    <article key={index}>
                      <img
                        src={getImagePath(skill.image_link)}
                        alt="Experience icon"
                        className="icon"
                      />
                      <div>
                        <h3>{skill.Name}</h3>
                        <p>{skill.Status}</p>
                      </div>
                    </article>
                  );
                })
              }
            </div>
          </div>

          {/* Library Development Experience */}
          <div className="details-container">
            <h2 className="experience-sub-title">Popular Libraries......</h2>
            <div className="article-container">
              {
                data['Libraries'].map((skill,index)=>{
                  return(
                    <article key={index}>
                      <img
                        src={getImagePath(skill.image_link)}
                        alt="Experience icon"
                        className="icon"
                      />
                      <div>
                        <h3>{skill.Name}</h3>
                        <p>{skill.Status}</p>
                      </div>
                    </article>
                  );
                })
              }
            </div>
          </div>

          {/* Database Experience */}
          <div className="details-container">
            <h2 className="experience-sub-title">Most Popular Database.............. </h2>
            <div className="article-container">
              {
                data['Database'].map((skill,index)=>{
                  return(
                    <article key={index}>
                      <img
                        src={getImagePath(skill.image_link)}
                        alt="Experience icon"
                        className="icon"
                      />
                      <div>
                        <h3>{skill.Name}</h3>
                        <p>{skill.Status}</p>
                      </div>
                    </article>
                  );
                })
              }
            </div>
          </div>

          {/* Mobile Experience */}
          <div className="details-container">
            <h2 className="experience-sub-title">Programming Languages</h2>
            <div className="article-container">
              {
                data['Mobile'].map((skill,index)=>{
                  return(
                    <article key={index}>
                      <img
                        src={getImagePath(skill.image_link)}
                        alt="Experience icon"
                        className="icon"
                      />
                      <div>
                        <h3>{skill.Name}</h3>
                        <p>{skill.Status}</p>
                      </div>
                    </article>
                  );
                })
              }
            </div>
          </div>
          {/* Frontend Development Experience */}
          <div className="details-container">
            <h2 className="experience-sub-title">Programming Languages</h2>
            <div className="article-container">
              {
                data['tools'].map((skill,index)=>{
                  return(
                    <article key={index}>
                      <img
                        src={getImagePath(skill.image_link)}
                        alt="Experience icon"
                        className="icon"
                      />
                      <div>
                        <h3>{skill.Name}</h3>
                        <p>{skill.Status}</p>
                      </div>
                    </article>
                  );
                })
              }
            </div>
          </div>

          {/* Framework Experience */}
          <div className="details-container">
            <h2 className="experience-sub-title">Frameworks</h2>
            <div className="article-container">
              {
                data['Frameworks'].map((skill,index)=>{
                  return(
                    <article key={index}>
                      <img
                        src={getImagePath(skill.image_link)}
                        alt="Experience icon"
                        className="icon"
                      />
                      <div>
                        <h3>{skill.Name}</h3>
                        <p>{skill.Status}</p>
                      </div>
                    </article>
                  );
                })
              }
            </div>
          </div>          
        </div>
      </div>
      <img
        src={arrowpic}
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => window.location.href = './#projects'}
      />
    </section>
  );
};

export default Experience;

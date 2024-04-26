
import React from 'react';
import Portfolio_pic from '../../assets/images/kunal_pic.jpg';
import kunal_resume from '../../assets/images/Resume_Kunal_goyal.pdf';
import { SocialIcon } from "react-social-icons";
import './Homesection.css';
function HomeSection() {
  return (
    <section className="hero" id="home">
      <div className="hero-banner">
          <img className="pic" src={Portfolio_pic} alt='Kunal Goyal'/>
      </div>

      <div className="hero-content">
        <h2 className="h2 hero-title">Web Developer</h2>
        <div className="btn-group">
          <a href={kunal_resume} download="kunal_resume.pdf">
            <button className="btn btn-primary">Download cv</button>
          </a>
        </div>
      </div>

      <ul className="hero-social-list">
      <li>
                <SocialIcon url="https://instagram.com/myself_kunalgoyal?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D " />
              </li>
              <li>
             
                <SocialIcon url="https://instagram.com/myself_kunalgoyal?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D " />
              </li>
              <li>
                <SocialIcon url="https://www.linkedin.com/in/kunal-goyal-jec" />
              </li>
      </ul>
    </section>
  );
}

export default HomeSection;

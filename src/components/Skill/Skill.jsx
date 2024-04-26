import React, { useState } from 'react';
import bootstrap from '../../assets/images/bootstrap.png';
// import clickup from '../../assets/images/clickup.png';
import command from '../../assets/images/command.png';
import css3 from '../../assets/images/css3.png';
// import firebase from '../../assets/images/firebase.png';
import git from '../../assets/images/git.png';
import Vue from '../../assets/images/vue.png';
import html5 from '../../assets/images/html5.png';
import javascript from '../../assets/images/javascript.png';
import gulp from '../../assets/images/gulp.png';
import mysql from '../../assets/images/mysql.png';
import npm from '../../assets/images/npm.png';
import photoshop from '../../assets/images/photoshop.png';
import react from '../../assets/images/react.png';
// import trello from '../../assets/images/trello.png';
import vscode from '../../assets/images/vs-code.png';
import './Skill.css';
function Skills() {
  const [isSkillsVisible, setSkillsVisible] = useState(true);

  const toggleSkills = () => {
    setSkillsVisible(!isSkillsVisible);
  };

  return (
    <section className="skills" id="skills">
      <div className="skills-content section-content">
        <p className="section-subtitle">My skills</p>
        <h2 className="h3 section-title">What My Programming Skills Included?</h2>
        <p className="section-text">
          Trying to raise the bar in the field of web development!
        </p>
        <div className="skills-toggle" data-toggle-box>
          <button
            className={`toggle-btn ${isSkillsVisible ? 'active' : ''}`}
            data-toggle-btn
            onClick={toggleSkills}
          >
           Tools
          </button>
          <button
            className={`toggle-btn ${!isSkillsVisible ? 'active' : ''}`}
            data-toggle-btn
            onClick={toggleSkills}
          >
            Skills
          </button>
        </div>
      </div>
      <div className={`skills-box ${isSkillsVisible ? 'active' : ''}`} data-skills-box>
        <ul className="skills-list">
          <li>
            <div className="skill-card">
              <div className="tooltip">HTML5</div>
              <div className="card-icon">
                <img src={html5} alt="HTML5 logo" />
              </div>
            </div>
          </li>
          <li>
            <div className="skill-card">
              <div className="tooltip">CSS3</div>
              <div className="card-icon">
                <img src={css3} alt="CSS3 logo" />
              </div>
            </div>
          </li>
          <li>
            <div className="skill-card">
              <div className="tooltip">JavaScript</div>
              <div className="card-icon">
                <img src={javascript} alt="JavaScript logo" />
              </div>
            </div>
          </li>
          <li>
            <div className="skill-card">
              <div className="tooltip">React</div>
              <div className="card-icon">
                <img src={react} alt="React logo" />
              </div>
            </div>
          </li>
          <li>
            <div className="skill-card">
              <div className="tooltip">Vue</div>
              <div className="card-icon">
                <img src={Vue} alt="Vue" />
              </div>
            </div>
          </li>
          <li>
            <div className="skill-card">
              <div className="tooltip">MySQL</div>
              <div className="card-icon">
                <img src={mysql} alt="MySQL logo" />
              </div>
            </div>
          </li>
          <li>
            <div className="skill-card">
              <div className="tooltip">Bootstrap</div>
              <div className="card-icon">
                <img src={bootstrap} alt="Bootstrap logo" />
              </div>
            </div>
          </li>
          
          {/* Add more skill cards as needed */}
        </ul>
        <ul className="tools-list">
          <li>
            <div className="skill-card">
              <div className="tooltip">Vue</div>
              <div className="card-icon">
                <img src={Vue} alt="Vue logo" />
              </div>
            </div>
          </li>
          <li>
            <div className="skill-card">
              <div className="tooltip">Git</div>
              <div className="card-icon">
                <img src={git} alt="Git logo" />
              </div>
            </div>
          </li>
          <li>
            <div className="skill-card">
              <div className="tooltip">Npm</div>
              <div className="card-icon">
                <img src={npm} alt="Npm logo" />
              </div>
            </div>
          </li>
          <li>
            <div className="skill-card">
              <div className="tooltip">Command Line</div>
              <div className="card-icon">
                <img src={command} alt="Command Line logo" />
              </div>
            </div>
          </li>
          <li>
            <div className="skill-card">
              <div className="tooltip">VS Code</div>
              <div className="card-icon">
                <img src={vscode} alt="VS Code logo" />
              </div>
            </div>
          </li>
          <li>
            <div className="skill-card">
              <div className="tooltip">Photoshop</div>
              <div className="card-icon">
                <img src={photoshop} alt="Photoshop logo" />
              </div>
            </div>
          </li>
          <li>
            <div className="skill-card">
              <div className="tooltip">Adobe XD</div>
              <div className="card-icon">
                <img src={gulp} alt="Adobe XD logo" />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;

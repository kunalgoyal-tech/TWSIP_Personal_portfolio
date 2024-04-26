// About.js
import React from 'react';
import Portfolio_pic from '../../assets/images/kg lap.jpg';
import './About.css'

function About() {
  return (
    <section className="about" id="about">
      <figure className="about-banner">
        <img src={Portfolio_pic} alt="A man with laptop" className="w-100" />
      </figure>

      <div className="about-content section-content">
        <p className="section-subtitle">About me</p>
        <h2 className="h3 section-title">👋 Hello, I'm Kunal</h2>
        <p className="section-text">
          🌐 Aspiring Web Developer | Passionate About Creating Digital Experiences.
          <br />
          🎓 I recently graduated with a degree in Computer Science Engineering, and I am thrilled to embark on my journey as a web developer. My fascination with technology and design has led me to specialize in crafting interactive and user-friendly websites.
          <br />
          🌱 I'm a firm believer in lifelong learning. In this rapidly evolving industry, I am committed to staying up-to-date with the latest web development trends and techniques. I'm excited to dive into backend technologies like Node.js and databases to create full-stack applications.
          <br />
          💡 Creativity fuels my work. I enjoy translating ideas into code, problem-solving, and collaborating with designers to bring concepts to life. My attention to detail and dedication to writing clean, efficient code ensure that I create websites that not only look great but also perform seamlessly.
          <br />
          🚀 I'm actively seeking opportunities to contribute my skills and learn from experienced professionals in the field. Whether it's a personal project or collaborating with a team, I'm ready to make a positive impact and grow as a web developer.
          <br />
          📫 Feel free to reach out for collaborations, discussions, or just to connect. Let's build the future of the web together!
        </p>
      </div>
    </section>
  );
}

export default About;

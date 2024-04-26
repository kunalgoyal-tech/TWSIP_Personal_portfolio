// Education.js
import React from 'react';
import './Education.css';
import marksheet from '../../assets/images/10th Marksheet.jpg';
import result from '../../assets/images/12th Marksheet.pdf';
import degree from '../../assets/images/RTU final sem result.pdf';
import training from '../../assets/images/Web Development Training - Certificate of Completion.pdf';
import EasyShiksha from '../../assets/images/c easy shiksha.jpg';
import topperworld_internship from '../../assets/images/topperworld_internship.jpg';
function Education() {
  return (
    <section className="education" id="education">
      <div className="card-container">
        <div className="card">
          <h2>Class X</h2>
          <p>
            "I am proud to announce that I achieved a perfect CGPA of 10 in my class 10 board examinations. This remarkable accomplishment reflects my dedication to academic excellence, strong work ethic, and commitment to learning. I am grateful for the support of my teachers, family, and peers who have contributed to my success. This achievement is a significant milestone in my educational journey, and it motivates me to continue striving for excellence in my future endeavors."
          </p>
          <a href={marksheet} className="download-button">View 10th MarkSheet</a>
        </div>
        <div className="card">
          <h2>Class XII</h2>
          <p>
            "My journey through the 12th grade was marked by both academic excellence and commitment to personal growth. As a student in the science stream, I navigated a challenging curriculum that included subjects like Physics, Chemistry and Mathematics. This demanding academic environment not only sharpened my problem-solving skills but also fueled my passion for the sciences. I participated in extracurricular activities. My 12th-grade journey was a period of personal and academic growth."
          </p>
          <a href={result} className="download-button">View 12th MarkSheet</a>
        </div>
        <div className="card">
          <h2>B.tech</h2>
          <p>
            "My B.Tech journey in Computer Science has been an enriching and transformative experience. From the very beginning, I was captivated by the ever-evolving world of technology, and this program has provided me with a comprehensive understanding of computer science concepts, programming languages, and real-world applications. During my course, I dived into a wide range of subjects, including DSA, Software engineering, and AI. This academic foundation equipped me with the technical skills and problem-solving abilities essential for success in the field of computer science."
          </p>
          <a href={degree} className="download-button">View result</a>
        </div>
        <div className="card">
          <h2>Web development Training</h2>
          <p>
            "My web development training experience with Internshala was a pivotal and rewarding journey that significantly enhanced my skills and knowledge in the field. Throughout the program, I had the opportunity to immerse myself in various aspects of web development, gaining valuable insights and hands-on experience. The training curriculum was designed to cover a wide range of topics, including HTML, CSS, JavaScript, responsive design, and back-end development technologies. I learned to create dynamic and interactive web applications, develop user-friendly interfaces, and optimize websites for performance and user experience."
          </p>
          <a href={training}className="download-button">View Certificate</a>
        </div>
        <div className="card">
          <h2>C and C++</h2>
          <p>
            "My experience with the C and C++ course on EasyShiksha was a valuable and enriching learning journey. The course provided me with a solid foundation in two fundamental programming languages, C and C++, and equipped me with essential programming skills. Throughout the course, I had the opportunity to delve into the world of programming, starting with the basics and gradually progressing to more advanced topics. The curriculum was well-structured, covering key concepts such as data types, variables, control structures, functions, object-oriented programming (in the case of C++), and memory management"
          </p>
          <a href={EasyShiksha} className="download-button">View Certificate</a>
        </div>
        <div className="card">
          <h2>TopperWorld Internship</h2>
          <p>
            "I completed the three projects like landing page, portfolio using react and clone website. This internship equipped me with the skills and knowledge necessary to create fully functional, responsive, and visually appealing websites from scratch. Completing this internship has empowered me to create professional, user-centric websites tailored to various needs, whether it's a personal blog or a  portfolio. I'm excited to leverage these skills in real-world projects and contribute to the world of web development."
          </p>
          <a href={topperworld_internship} className="download-button">View offer letter</a>
        </div>
      </div>
    </section>
  );
}

export default Education;

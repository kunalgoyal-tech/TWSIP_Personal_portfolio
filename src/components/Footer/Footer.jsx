import React from "react";
import "./Footer.css";
import { MdAddCall, MdEmail, MdLocationPin } from "react-icons/md";
import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    <section className="contact" id="contact">
      <div className="contact-content section-content">
        <p className="section-subtitle">Contact</p>
        <h2 className="h3 section-title">
          Want to share ideas? Please Drop a Message
        </h2>
        <p className="section-text">
          Get in touch and let me know how we can progress together. Fill out
          the form and i’ll be in touch as soon as possible.
        </p>
        <ul className="contact-list">
          <li className="contact-list-item">
            <div className="contact-item-icon">
              <MdLocationPin />
            </div>

            <h4 className=" contact-item-title">Dhanbad, Jharkhand</h4>
          </li>
          <li className="contact-list-item">
            <div className="contact-item-icon">
              <MdAddCall />
            </div>
            <div className="wrapper">
              <h3 className="h4 contact-item-title">Phone:</h3>
              <a href="tel:9693889610" className="contact-info">
                +91 9693 889 610
              </a>
              <br></br>
              <a href="tel:7050264936" className="contact-info">
                +91 8810 455 020
              </a>
            </div>
          </li>
          <li className="contact-list-item">
            <div className="contact-item-icon">
              <MdEmail />
            </div>

            <h3 className="h4 contact-item-title">Email:</h3>
            <a
              href="mailto:engineerkunalgoyal@gmail.com"
              className="contact-info"
            >
              engineerkunalgoyal@gmail.com
            </a>
          </li>
          <li>
            <div className="contact-social-list">
              <li>
                <SocialIcon url="https://instagram.com/myself_kunalgoyal?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D " />
              </li>
              <li>
             
                <SocialIcon url="https://instagram.com/myself_kunalgoyal?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D " />
              </li>
              <li>
                <SocialIcon url="https://www.linkedin.com/in/kunal-goyal-jec" />
              </li>
            </div>
          </li>
        </ul>
      </div>
      <form action="" className="contact-form">
        <div className="form-wrapper">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <div className="input-wrapper">
            <input
              type="text"
              name="name"
              id="name"
              required=""
              placeholder="e.g kunal goyal"
              className="input-field"
            />

          </div>
        </div>
        <div className="form-wrapper">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <div className="input-wrapper">
            <input
              type="email"
              name="email"
              id="email"
              required=""
              placeholder="e.g kunal@mail.com"
              className="input-field"
            />
          </div>
        </div>
        <div className="form-wrapper">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <div className="input-wrapper">
            <input
              type="tel"
              name="phone"
              id="phone"
              required=""
              placeholder="Phone Number"
              className="input-field"
            />
          </div>
        </div>
        <div className="form-wrapper">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <div className="input-wrapper">
            <textarea
              name="message"
              id="message"
              required=""
              placeholder="Write message..."
              className="input-field"
              defaultValue={""}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
  
     </section>
     
    
  );
}

export default Footer;

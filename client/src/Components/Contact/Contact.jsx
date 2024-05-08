import React from "react";
import "./Contact.css";
import ContactImage from "../../assets/contact1.svg";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-container">
        <div className="left">
          <h1>Contact Us</h1>
          <div className="contact-form">
            <input name="name" type="text" placeholder="Name" />
            <input name="email" type="text" placeholder="Email" />
            <textarea rows="10" required placeholder="Message" />
          </div>
          <button className="btn">Sumbmit</button>
        </div>
        <div className="right">
          <img src={ContactImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;

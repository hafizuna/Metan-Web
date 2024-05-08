import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import Instagram from "../../assets/instagram.svg";
import Facebook from "../../assets/facebook.svg";
import Telegram from "../../assets/telegram.svg";
import Linkedin from "../../assets/linkedin.svg";
import X from "../../assets/x.svg";
import Playstore from "../../assets/playstore.jpg";
import Appstore from "../../assets/appstore.jpg";

const Footer = () => {
  return (
    <div className="footer">
      <h1>Metan</h1>
      <div className="footer-container">
        <div className="left">
          <h2>Contact</h2>
          <p>
            <b>Address: </b>Addis Ababa, Ethiopia
          </p>
          <p>
            <b>Phone: </b>092 909 9597
          </p>
          <p>
            <b>Hours: </b> 09:00 AM - 05:00 PM, Mon - Sat
          </p>
        </div>
        <div className="middle">
          <h2>About</h2>
          <ul>
            <li>
              <Link to="/">About Us</Link>
            </li>
            <li>
              <Link to="/">Terms of Service</Link>
            </li>
            <li>
              <Link to="/">Privacy Policy</Link>
            </li>

            <li>
              <Link to="/">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="right">
          <h2>Install Our App</h2>
          <p>From app Store or Google Play</p>
          <img src={Playstore} alt="" />
          <img src={Appstore} alt="" />
        </div>
      </div>
      <div className="social">
        <h4>Follow Us</h4>
        <div>
          <img src={Instagram} alt="" />
          <img src={Linkedin} alt="" />
          <img src={X} alt="" />
          <img src={Facebook} alt="" />
          <img src={Telegram} alt="" />
        </div>
      </div>
      <p className="copyright"> &copy; 2024 Metan. All rights reserved.</p>
    </div>
  );
};

export default Footer;

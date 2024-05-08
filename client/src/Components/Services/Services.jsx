import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";
import Tow from "../../assets/tow.svg";
import Ev from "../../assets/ev.svg";
import Repair from "../../assets/repair.svg";
import Tire from "../../assets/tire.png";

const Services = () => {
  return (
    <div className="services">
      <div className="services-container">
        <div className="inner-container">
          <div className="left">
            <h1>Tire Change</h1>
            <p>
              Never stress over a flat tire again. With our app, you can request
              a tire change wherever you are, whenever you need it. Whether
              you're on your way to work or heading out for a weekend getaway,
              our reliable tire change service will have you back on the road
              safely and swiftly.
            </p>
          </div>
          <div className="right"></div>
          <img className="right-image" src={Repair} alt="" />
        </div>
        <button className="btn learn-more">
          <Link to="/">Learn more</Link>
        </button>
      </div>

      <div className="services-container">
        <div className="inner-container">
          <div className="left">
            <h1>Minor Repairs</h1>
            <p>
              Get quick solutions for minor car issues through our app. Whether
              it's a flat tire or a dead battery, our reliable technicians are
              just a tap away, ready to assist you whenever you need it.
            </p>
          </div>
          <div className="right"></div>
          <img className="right-image" src={Repair} alt="" />
        </div>
        <button className="btn learn-more">
          <Link to="/">Learn more</Link>
        </button>
      </div>

      <div className="services-container">
        <div className="inner-container">
          <div className="left">
            <h1>Tow Truck Service</h1>
            <p>
              Use our convenient app to request a tow truck anytime, day or
              night, and get back on the road quickly.
            </p>
          </div>
          <div className="right"></div>
          <img className="right-image" src={Tow} alt="" />
        </div>
        <button className="btn learn-more">
          <Link to="/">Learn more</Link>
        </button>
      </div>

      <div className="services-container">
        <div className="inner-container">
          <div className="left">
            <h1>EV Charge</h1>
            <p>
              Never worry about running out of charge again. With our app, you
              can easily request electric vehicle charging at any location.
              Whether you're on a road trip or just need a quick top-up, our
              network of charging stations has you covered. Stay powered up and
              on the move with our convenient and reliable service. dignissimos
              maxime error vel?
            </p>
          </div>
          <div className="right"></div>
          <img className="right-image" src={Ev} alt="" />
        </div>
        <button className="btn learn-more">
          <Link to="/">Learn more</Link>
        </button>
      </div>
    </div>
  );
};

export default Services;

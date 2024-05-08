import React, { useEffect, useState } from "react";
import "./Hero.css";
import Tow from "../../assets/tow.svg";
import LocationSvg from "../../assets/location.svg";
import axios from "axios";

// const API_endpoint = `https://api.openweathermap.org/data/2.5/weather?`;
// const API_key = "8a96bfea156ebfbeabf1de85c4e8f692";

const Hero = () => {
  // const [latitude, setLatitude] = useState("");
  // const [longitude, setLongitude] = useState("");
  // const [responseData, setResponseData] = useState({});

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     setLatitude(position.coords.latitude);
  //     setLongitude(position.coords.longitude);
  //   });
  //   let finalAPIEndPoint = `${API_endpoint}lat=${latitude}&lon=${longitude}&exclude=hourly,daily&appid=${API_key}`;
  //   axios.get(finalAPIEndPoint).then((response) => {
  //     console.log(response);
  //     setResponseData(response.data);
  //   });
  // }, []);

  const [location, setLocation] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const locationHandler = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          let input = `Latitude: ${latitude}, Longitude: ${longitude}`;
          setInputValue(input);
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [plate, setPlate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/home", {
        name,
        phone,
        inputValue,
        service,
        plate,
      })
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => console.log(err.response.data));
  };

  return (
    <div className="hero">
      <div className="request-container">
        <form onSubmit={handleSubmit} className="left-container">
          <h1 className="text">Wherever you are, We've got your back.</h1>

          <div className="request-form">
            <input
              name="name"
              type="text"
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              onChange={(e) => setPhone(e.target.value)}
            />
            <div className="location-container">
              <input
                className="location-input"
                type="text"
                name="location"
                placeholder="Location"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <img
                className="location-icon"
                src={LocationSvg}
                alt=""
                onClick={locationHandler}
              />
            </div>
            <input
              name="service"
              type="text"
              placeholder="Service Type"
              onChange={(e) => setService(e.target.value)}
            />
            <input
              name="plate"
              type="text"
              placeholder="Plate Number"
              onChange={(e) => setPlate(e.target.value)}
            />
            <button type="submit" className=" btn request-btn">
              Request
            </button>
          </div>
        </form>
        <div className="right-container">
          <img className="tow-image" src={Tow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

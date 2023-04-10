import React from "react";
import "./index.css";
import country from "../../assets/mining.png";
import farmer from "../../assets/house.png";
const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <div className="about-img">
          <img className="about-illus" src={farmer} alt="farmer-bro" />
        </div>
        <div className="about-text">
          <h5 className="subtitle">About Us</h5>
          <h2 className="title">
            We provide high quality investments products
          </h2>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            adipisci numquam sed culpa quaerat error ipsam id quo, dolor modi?
            Doloremque rerum nostrum ducimus minima aliquam quidem laboriosam
            eaque tenetur!
          </p>
          <div className="">
            <button className="about-cta">More about us</button>
          </div>
        </div>
      </div>
      <div className="whychoose-container">
        <div className="whychoose-text">
          <h5 className="subtitle">Why Choose Us ?</h5>
          <h2 className="title">
            We provide high quality investments products
          </h2>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            adipisci numquam sed culpa quaerat error ipsam id quo, dolor modi?
            Doloremque rerum nostrum ducimus minima aliquam quidem laboriosam
            eaque tenetur!
          </p>
          <div className="">
            <button className="about-cta">More info</button>
          </div>
        </div>
        <div className="whychoose-img">
          <img className="about-illus" src={country} alt="country-farm" />
        </div>
      </div>
    </div>
  );
};

export default About;
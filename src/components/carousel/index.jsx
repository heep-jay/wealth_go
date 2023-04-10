import React from "react";
import Carousel from "react-bootstrap/Carousel";
import hero from "../../assets/tomato.png";
import mine from "../../assets/mine.png";
import realestate from "../../assets/realestate.png";
import "./index.css";

const HomeCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100 caro-img" src={hero} alt="First slide" />
        <Carousel.Caption>
          <h3 className="hero-title ">
            Investment in <span className="hero-color">Agriculture</span>
          </h3>
          <p className="hero-description">
            Wealth Go is the easiest way to Invest, Manage and Grow your capital
            in agriculture. Sign up and start growing your profit today!.
          </p>
          <button className="hero-btn">Get Started</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 caro-img" src={mine} alt="Second slide" />

        <Carousel.Caption>
          <h3 className="hero-title ">
            Investment in{" "}
            <span className="hero-color">Gold Mining & Minerals</span>
          </h3>
          <p className="hero-description">
            Wealth Go is the easiest way to Invest, Manage and Grow your capital
            in agriculture. Sign up and start growing your profit today!.
          </p>
          <button className="hero-btn">Get Started</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 caro-img"
          src={realestate}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className="hero-title ">
            Investment in <span className="hero-color">Real Estate</span>
          </h3>
          <p className="hero-description">
            Wealth Go is the easiest way to Invest, Manage and Grow your capital
            in agriculture. Sign up and start growing your profit today!.
          </p>
          <button className="hero-btn">Get Started</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HomeCarousel;

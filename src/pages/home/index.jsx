import React from "react";
import Hero from "../../components/herosection";
import Banner from "../../components/banner";
import About from "../../components/about";
import Plans from "../../components/plans";
import "./index.css";
import LoginBanner from "../../components/loginbanner";
import Contact from "../../components/contact";
import HomeCarousel from "../../components/carousel";
import Testimonials from "../../components/testimonials";
import Works from "../../components/works";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { Element } from "react-scroll";

const Home = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="home">
      <coingecko-coin-price-marquee-widget
        coin-ids="bitcoin,eos,ethereum,litecoin,ripple,usdt-yvault,binancecoin"
        currency="usd"
        background-color="#ffffff"
        locale="en"
      ></coingecko-coin-price-marquee-widget>
      {/* <Hero /> */}
      <HomeCarousel />
      <Banner />
      <Works />
      <Element id="abouts" name="about">
        <About />
      </Element>
      <Element id="plans" name="plans">
        <Plans />
      </Element>
      <LoginBanner />
      <Testimonials />
      <Element id="contact" name="contact">
        <Contact />
      </Element>
    </div>
  );
};

export default Home;

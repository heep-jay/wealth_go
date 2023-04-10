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

const Home = () => {
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
      <About />
      <Plans />
      <LoginBanner />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;

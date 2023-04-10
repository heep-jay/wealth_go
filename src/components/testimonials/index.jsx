import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import avatar from "../../assets/avatar.jpg";
import avatar2 from "../../assets/avatar2.jpg";
import avatar3 from "../../assets/avatar3.jpg";
import "./index.css";
const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="title">What Our customers have to say about us</h2>
        </div>
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={6100}
        >
          <div>
            <img src={avatar} alt="customer" />
            <div className="myCarousel">
              <h3>Shirley Fultz</h3>
              <h4>Designer</h4>
              <p>
                It's freeing to be able to catch up on customized news and not
                be distracted by a social media element on the same site
              </p>
            </div>
          </div>

          <div>
            <img src={avatar2} alt="customer" />
            <div className="myCarousel">
              <h3>Daniel Keystone</h3>
              <h4>Designer</h4>
              <p>
                The simple and intuitive design makes it easy for me use. I
                highly recommend Fetch to my peers.
              </p>
            </div>
          </div>

          <div>
            <img src={avatar3} alt="customer" />
            <div className="myCarousel">
              <h3>Theo Sorel</h3>
              <h4>Designer</h4>
              <p>
                I enjoy catching up with Fetch on my laptop, or on my phone when
                I'm on the go!
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;

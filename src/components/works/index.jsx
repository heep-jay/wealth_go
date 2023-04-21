import React from "react";
import "./index.css";
import bank from "../../assets/bank.svg";
import create from "../../assets/create.svg";
import invest from "../../assets/invest.svg";
import investment from "../../assets/investment.svg";

const Works = () => {
  return (
    <div className="works">
      <div className="works-container">
        <div className="works-header">
          <h2 className="title">How WealthGo works</h2>
          <p className="description">
            Cribstock lets you earn rent from tenants in Lagos even if you don’t
            own a house. If you co-own a property by buying its stock, you’ll
            earn a share of the net monthly rental income which varies per
            month.
          </p>
        </div>
        <div className="works-steps">
          <div className="works-step">
            <div className="img-div orange">
              <img src={create} alt="sign up" className="work-img" />
            </div>
            <div className="work-text">
              <p className="work-desc">Create a free account</p>
            </div>
          </div>
          <div className="works-step">
            <div className="img-div blue">
              <img src={bank} alt="sign up" className="work-img" />
            </div>
            <div className="work-text">
              <p className="work-desc">Choose a plan and invest</p>
            </div>
          </div>
          <div className="works-step">
            <div className="img-div green">
              <img src={invest} alt="sign up" className="work-img" />
            </div>
            <div className="work-text">
              <p className="work-desc">Make deposit & start earning</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;

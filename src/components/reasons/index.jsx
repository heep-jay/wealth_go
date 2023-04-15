import React from "react";
import "./index.css";
import best from "../../assets/best.png";
import securecloud from "../../assets/securecloud.png";
import insurance from "../../assets/insurance.png";

const Reasons = () => {
  return (
    <div className="reasons">
      <div className="reasons-container">
        <div className="reasons-header">
          <h2 className="title">Why Choose Us ?</h2>
        </div>
        <div className="reasons-cards">
          <div className="reasons-card">
            <img src={securecloud} alt="" />
            <div className="reason-text">
              <h4 className="rs-title">Secure Storage</h4>
              <p className="rs-desc">
                WEALTHGO has secured cloud storage, which is highly encryped
                with end to end encrypting technologies
              </p>
            </div>
          </div>
          <div className="reasons-card">
            <img src={insurance} alt="" />
            <div className="reason-text">
              <h4 className="rs-title">Protected by insurance</h4>
              <p className="rs-desc">
                We are registered under many insurance company, which means the
                risk of loosing your capital investment is almost zero
              </p>
            </div>
          </div>
          <div className="reasons-card">
            <img src={best} alt="" />
            <div className="reason-text">
              <h4 className="rs-title">Industry best practices</h4>
              <p className="rs-desc">
                Our platform utilizes industry best practices to facilitate
                investment and is supported by a team of qualified advisors to
                offer guidance on the same.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reasons;

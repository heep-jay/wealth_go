import React from "react";
import "./index.css";
import fx from "../../assets/fx.svg";
import barchart from "../../assets/barchart.svg";
import bargraph from "../../assets/bargraph.svg";
import gold from "../../assets/gold.svg";
import cfd from "../../assets/cfd.svg";
import energy from "../../assets/energy.svg";

const Invest = () => {
  return (
    <div className="invest">
      <div className="invest-container">
        <div className="invest-header">
          <h2 className="title">How we trade your capital</h2>
        </div>
        <div className="invest-cards">
          <div className="invest-card">
            <img src={fx} alt="" />
            <div className="invest-text">
              <h4 className="in-title">Forex Trading</h4>
              <p className="in-desc">55+ Global currency pairs</p>
            </div>
          </div>
          <div className="invest-card">
            <img src={barchart} alt="" />
            <div className="invest-text">
              <h4 className="in-title">Forex Trading</h4>
              <p className="in-desc">55+ Global currency pairs</p>
            </div>
          </div>
          <div className="invest-card">
            <img src={cfd} alt="" />
            <div className="invest-text">
              <h4 className="in-title">Forex Trading</h4>
              <p className="in-desc">55+ Global currency pairs</p>
            </div>
          </div>
          <div className="invest-card">
            <img src={gold} alt="" />
            <div className="invest-text">
              <h4 className="in-title">Forex Trading</h4>
              <p className="in-desc">55+ Global currency pairs</p>
            </div>
          </div>
          <div className="invest-card">
            <img src={bargraph} alt="" />
            <div className="invest-text">
              <h4 className="in-title">Forex Trading</h4>
              <p className="in-desc">55+ Global currency pairs</p>
            </div>
          </div>
          <div className="invest-card">
            <img src={energy} alt="" />
            <div className="invest-text">
              <h4 className="in-title">Forex Trading</h4>
              <p className="in-desc">55+ Global currency pairs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invest;

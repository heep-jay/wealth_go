import React from "react";
import "./index.css";
import Header from "../../components/header";
import usdt from "../../assets/usdt.png";
import eth from "../../assets/eth.png";
import btc from "../../assets/btc.png";

const Deposits = () => {
  return (
    <div className="deposits">
      <div className="deposits-container">
        <Header dashtitle="Deposits" dashsub="Make deposits" />
        <div className="deposits-cards">
          <div className="deposit-card">
            <img src={usdt} alt="usdt" />
            <h5>PAY USDT</h5>
            <div className="deposit-btn">
              <button>Pay Now</button>
            </div>
          </div>
          <div className="deposit-card">
            <img src={eth} alt="usdt" />
            <h5>PAY USDT</h5>
            <div className="deposit-btn">
              <button>Pay Now</button>
            </div>
          </div>
          <div className="deposit-card">
            <img src={btc} alt="usdt" />
            <h5>PAY USDT</h5>
            <div className="deposit-btn">
              <button>Pay Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deposits;

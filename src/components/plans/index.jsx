import React from "react";
import farmer from "../../assets/Farmer-bro.png";
import plan1 from "../../assets/plan1.png";
import plan2 from "../../assets/plan2.png";
import plan3 from "../../assets/plan3.png";
import plan4 from "../../assets/plan4.png";
import "./index.css";

const Plans = () => {
  return (
    <div className="plans">
      <div className="plans-container">
        <div className="plans-header">
          <h2 className="title">Check out our amazing plans</h2>
          <p className="description" style={{ width: "60%", margin: "0 auto" }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
            ducimus, nulla error veritatis eius dignissimos rem praesentium
            quisquam dolorum aut maiores exercitationem nisi non quo ipsa a id,
            expedita autem.
          </p>
        </div>
        <div className="plan-cards">
          <div className="plan-card">
            <div className="card-header">
              <h4 className="subtitle">Plan 1</h4>
              <h2 className="title"> 20%</h2>
            </div>
            <img src={plan1} alt="" className="card-img" />
            <div className="card-body">
              <p className="description">AFTER 24 HOURS</p>
              <p className="description">Min : $35</p>
              <p className="description">Max : $499</p>
              <p className="description">PRINCIPAL RETURN</p>
            </div>
            <button className="card-btn">Invest</button>
          </div>
          <div className="plan-card">
            <div className="card-header">
              <h4 className="subtitle">Plan 2</h4>
              <h2 className="title"> 35%</h2>
            </div>
            <img src={plan2} alt="" className="card-img" />
            <div className="card-body">
              <p className="description">AFTER 24 HOURS</p>
              <p className="description">Min : $500</p>
              <p className="description">Max : $999</p>
              <p className="description">PRINCIPAL RETURN</p>
            </div>
            <button className="card-btn">Invest</button>
          </div>
          <div className="plan-card">
            <div className="card-header">
              <h4 className="subtitle">Plan 3</h4>
              <h2 className="title"> 65%</h2>
            </div>
            <img src={plan3} alt="" className="card-img" />
            <div className="card-body">
              <p className="description">AFTER 48 HOURS</p>
              <p className="description">Min : $1000</p>
              <p className="description">Max : $4999</p>
              <p className="description">PRINCIPAL RETURN</p>
            </div>
            <button className="card-btn">Invest</button>
          </div>
          <div className="plan-card">
            <div className="card-header">
              <h4 className="subtitle">Plan 4</h4>
              <h2 className="title"> 100%</h2>
            </div>
            <img src={plan4} alt="" className="card-img" />
            <div className="card-body">
              <p className="description">AFTER 72 HOURS</p>
              <p className="description">Min : $5000</p>
              <p className="description">Max : $UNLIMITED</p>
              <p className="description">PRINCIPAL RETURN</p>
            </div>
            <button className="card-btn">Invest</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;

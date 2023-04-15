import React from "react";
import "./index.css";
const Tags = () => {
  return (
    <div className="tags">
      <div className="tags-container">
        <div className="ind-tag">
          <h3 className="amount">3948+</h3>
          <p className="ind-text"> Total Users</p>
        </div>
        <div className="ind-tag">
          {" "}
          <h3 className="amount">$3405301+</h3>
          <p className="ind-text"> Total Deposits</p>
        </div>
        <div className="ind-tag">
          {" "}
          <h3 className="amount">$6096551.82+</h3>
          <p className="ind-text"> Total Withdrawals</p>
        </div>
        <div className="ind-tag">
          {" "}
          <h3 className="amount">100%</h3>
          <p className="ind-text">Client Satisfaction</p>
        </div>
      </div>
    </div>
  );
};

export default Tags;

import React from "react";
import "./index.css";

const LoginBanner = () => {
  return (
    <div className="loginbanner">
      <div className="loginbanner-container">
        <div className="loginbanner-header">
          <h1 className="title">Don't have an account?</h1>
        </div>
        <div className="">
          <button className="loginbanner-btn">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default LoginBanner;

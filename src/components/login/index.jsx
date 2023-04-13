import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="login">
      <div className="login-header">
        <h5 className="login-title">Login in to your account</h5>
        <p className="description">Enter your credentials below to continue</p>
      </div>
      <div className="login-form">
        <div className="form_input">
          <label htmlFor="email">Email address</label>
          <input type="email" name="email" />
        </div>
        <div className="form_input">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
        </div>
        <div className="forgot-btn">
          <button>Forgot passowrd ?</button>
        </div>
        <div className="login-btn">
          <button>Log In</button>
        </div>
        <p className="description">
          Dont have an account?{" "}
          <span className="register">
            <Link to="/register">Register here</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;

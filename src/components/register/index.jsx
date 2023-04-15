import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="register">
      <div className="register-header">
        <h5 className="login-title">Create your account</h5>
        <p className="description">Fill in your information</p>
      </div>
      <div className="register-form">
        <div className="form_input">
          <label htmlFor="name">Full Name</label>
          <input type="text" name="name" />
        </div>
        <div className="form_input">
          <label htmlFor="email">Email address</label>
          <input type="email" name="email" />
        </div>
        <div className="form_input">
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" name="phone" />
        </div>
        <div className="form_input">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
        </div>
        <div className="form_input">
          <label htmlFor="cpassword">Confirm Password</label>
          <input type="password" name="cpassword" />
        </div>
        <div className="form-check">
          <input type="checkbox" name="terms" id="" />
          <p className="description">
            i agree to WealthGO's{" "}
            <span style={{ fontWeight: 600 }}>
              {" "}
              &nbsp; T & C & Privacy Policy
            </span>
          </p>
        </div>
        <div className="login-btn">
          <button>Sign Up</button>
        </div>
        <p className="description">
          Already have an account?
          <span className="register">
            <Link to="/login">Log in</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;

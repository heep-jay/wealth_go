import React from "react";
import Header from "../../components/header";
import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";
import "./index.css";
import avatar from "../../assets/avatar.jpg";

const Profile = () => {
  return (
    <Box m="1.5rem 2.5rem">
      <Header dashtitle="Profile" dashsub="Welcome to your profile." />
      <div className="profile-container">
        <div className="profile-left">
          <div className="profile-avatar">
            <img src={avatar} alt="profile" />
          </div>
          <div className="profile-change">
            <Link to="/profile/changepassword">Change Password</Link>
          </div>
        </div>
        <div className="profile-form">
          <h3 className="small-title">Personal Information</h3>
          <form className="p-form">
            <div className="form_input">
              <label htmlFor="">Username</label>
              <input type="text" disabled />
            </div>
            <div className="form_input">
              <label htmlFor="">Email</label>
              <input type="email" value={"abc@gmail.com"} disabled />
            </div>
            <div className="form_input">
              <label htmlFor="">Full Name</label>
              <input type="text" />
            </div>
            <div className="form_input">
              <label htmlFor=""> Address</label>
              <input type="text" />
            </div>
            <div className="form_input">
              <label htmlFor=""> City</label>
              <input type="text" />
            </div>
            <div className="form_input">
              <label htmlFor=""> State</label>
              <input type="text" />
            </div>
            <div className="form_input">
              <label htmlFor=""> Country</label>
              <input type="text" />
            </div>
            <Button
              sx={{
                width: "100px",
                backgroundColor: "#165e3b",
              }}
              variant="contained"
            >
              Update
            </Button>
          </form>
        </div>
      </div>
    </Box>
  );
};

export default Profile;

import React from "react";
import Header from "../../components/header";
import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";
import "./index.css";
import avatar from "../../assets/avatar.jpg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const ChangePassword = () => {
  return (
    <Box m="1.5rem 2.5rem" className="changepass">
      <Header dashtitle="Update Password" dashsub="Change your passsword" />
      <Link to="/profile">
        <ArrowBackIcon sx={{ mt: "1rem" }} />
      </Link>
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
          <h3 className="small-title">Update Password</h3>
          <form className="p-form">
            <div className="form_input">
              <label htmlFor="">New Password</label>
              <input type="password" />
            </div>
            <div className="form_input">
              <label htmlFor="">Update Password</label>
              <input type="password" />
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

export default ChangePassword;

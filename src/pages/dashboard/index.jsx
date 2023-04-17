import React from "react";
import Header from "../../components/header";
import "./index.css";
import {
  AccountBalance,
  WalletOutlined,
  AddCardOutlined,
} from "@mui/icons-material";
import FlexBetween from "../../components/FlexBetween";
const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-container">
        <div className="dashboard-top-cards">
          <div className="dashboard-top-card">
            <FlexBetween>
              <AccountBalance
                sx={{
                  color: "#165e3b",
                  fontSize: "45px",
                }}
              />
              <p className="card-text">Account Balance</p>
            </FlexBetween>
            <div className="card-mid-left">
              <p className="title">$16,900,000</p>
            </div>
          </div>

          <div className="dashboard-top-card">
            <FlexBetween>
              <WalletOutlined
                sx={{
                  color: "#165e3b",
                  fontSize: "45px",
                }}
              />
              <p className="card-text">Total Deposits</p>
            </FlexBetween>

            <div className="card-mid-left">
              <p className="title">$16,900,000</p>
            </div>
          </div>
          <div className="dashboard-top-card">
            <FlexBetween>
              <AddCardOutlined
                sx={{
                  color: "#165e3b",
                  fontSize: "45px",
                }}
              />
              <p className="card-text">Total Withdrawals</p>
            </FlexBetween>
            <div className="card-mid-left">
              <p className="title">$16,900,000</p>
            </div>
          </div>
        </div>
        <div className="dashboard-mid-cards">
          <div className="dashboard-mid-card">
            <div className="arrow-right"></div>
            <div className="mid-text">
              <h6 className="mid-title">$25,000</h6>
              <p className="s">Total Earnings</p>
            </div>
          </div>
          <div className="dashboard-mid-card">
            <div className="arrow-right"></div>
            <div className="mid-text">
              <h6 className="mid-title">$25,000</h6>
              <p className="s">Current Investment</p>
            </div>
          </div>
          <div className="dashboard-mid-card">
            <div className="arrow-right"></div>
            <div className="mid-text">
              <h6 className="mid-title">Plan 4</h6>
              <p className="s">Current Plan</p>
            </div>
          </div>
        </div>
        <div className="dashboard-mid-cards">
          <div className="dashboard-mid-card">
            <div className="arrow-right"></div>
            <div className="mid-text">
              <h6 className="mid-title">$25,000</h6>
              <p className="s">Total Earnings</p>
            </div>
          </div>
          <div className="dashboard-mid-card">
            <div className="arrow-right"></div>
            <div className="mid-text">
              <h6 className="mid-title">$25,000</h6>
              <p className="s">Current Investment</p>
            </div>
          </div>
          <div className="dashboard-mid-card">
            <div className="arrow-right"></div>
            <div className="mid-text">
              <h6 className="mid-title">Plan 4</h6>
              <p className="s">Current Plan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

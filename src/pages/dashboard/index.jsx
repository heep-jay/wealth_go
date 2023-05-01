import React from "react";
import "./index.css";
import {
  AccountBalanceWallet,
  AccountBalance,
  WalletOutlined,
  AddCardOutlined,
} from "@mui/icons-material";
import FlexBetween from "../../components/FlexBetween";
import { useSelector } from "react-redux";
import { useGetDepositsQuery, useGetWithdrawalsQuery } from "state/api";
const Dashboard = () => {
  const id = useSelector((state) => state.global.user?._id);
  const { data, isLoading } = useGetDepositsQuery(id);
  console.log(data);
  // const {
  //   data: { withTotal },
  // } = useGetWithdrawalsQuery(id);
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
              <p className="cards-text">Account Balance</p>
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
              <p className="cards-text">Total Deposits</p>
            </FlexBetween>

            <div className="card-mid-left">
              <p className="title">$16,040</p>
              {/* {data.sumTrans} */}
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
              <p className="cards-text">Total Withdrawals</p>
            </FlexBetween>
            <div className="card-mid-left">
              <p className="title">2341617</p>
            </div>
          </div>
        </div>
        <div className="dashboard-mid-cards">
          <div className="dashboard-mid-card">
            <div className="arrow-right"></div>
            <div className="wallet">
              <div className="mid-text">
                <h6 className="mid-title">$25,000</h6>
                <p className="s">Total Earnings</p>
              </div>
              <div className="">
                <AccountBalanceWallet />
              </div>
            </div>
          </div>
          <div className="dashboard-mid-card">
            <div className="arrow-right"></div>
            <div className="wallet">
              <div className="mid-text">
                <h6 className="mid-title">$25,000</h6>
                <p className="s">Current Investment</p>
              </div>
              <div className="">
                <AccountBalanceWallet />
              </div>
            </div>
          </div>
          <div className="dashboard-mid-card">
            <div className="arrow-right"></div>
            <div className="wallet">
              <div className="mid-text">
                <h6 className="mid-title">Plan 4</h6>
                <p className="s">Current Plan</p>
              </div>
              <div className="">
                <AccountBalanceWallet />
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard-mid-cards">
          <div className="dashboard-mid-card">
            <div className="arrow-right"></div>
            <div className="mid-text">
              <h6 className="mid-title">$25,000</h6>
              <p className="s">Pending Investment</p>
            </div>
          </div>
          <div className="dashboard-mid-card">
            <div className="arrow-right"></div>
            <div className="mid-text">
              <h6 className="mid-title">$25,000</h6>
              <p className="s">Pending Withdrawal</p>
            </div>
          </div>
          <div className="dashboard-mid-card">
            <div className="arrow-right"></div>
            <div className="mid-text">
              <h6 className="mid-title">4</h6>
              <p className="s">No of Referrals</p>
            </div>
          </div>
        </div>

        <div className="referral">
          <h5 className="referral-title">Your Referrals Links</h5>
          <div className="referral-links">
            <input type="text" value="ABCDGRT" onChange={() => {}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

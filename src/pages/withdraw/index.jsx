import React, { useState } from "react";
import "./index.css";

const Withdraw = () => {
  const [form, setForm] = useState("");

  return (
    <div className="withdraw">
      <div className="withdraw-container">
        <div className="withdraw-left">
          <h2 className="small-title"> Current Balance : $35,000</h2>

          <div className="withdrawal-form">
            <div className="withdraw-select">
              <label htmlFor="">Withdrawal Method</label>
              <select
                name=""
                id=""
                onChange={(e) => {
                  setForm(e.target.value);
                  console.log(form);
                }}
              >
                <option value="">Select Method</option>
                <option value="usdt">USDT</option>
                <option value="eth">ETH</option>
                <option value="btc">BTC</option>
              </select>
            </div>

            {form === "btc" ? (
              <form className="withdraw-form">
                <div className="form_input">
                  <label htmlFor="">Withdraw Amount</label>
                  <input type="number" />
                </div>
                <div className="form_input">
                  <label htmlFor=""> Withdraw Charge</label>
                  <input type="number" value={"0.00"} disabled />
                </div>
                <div className="form_input">
                  <label htmlFor="">Final Withdraw Amount</label>
                  <input type="number" />
                </div>
                <div className="form_input">
                  <label htmlFor=""> Account Email/ BTC Wallet Address</label>
                  <input type="text" />
                </div>
              </form>
            ) : form === "usdt" ? (
              <form className="withdraw-form">
                <div className="form_input">
                  <label htmlFor="">Withdraw Amount</label>
                  <input type="number" />
                </div>
                <div className="form_input">
                  <label htmlFor=""> Withdraw Charge</label>
                  <input type="number" value={"0.00"} disabled />
                </div>
                <div className="form_input">
                  <label htmlFor="">Final Withdraw Amount</label>
                  <input type="number" />
                </div>
                <div className="form_input">
                  <label htmlFor=""> Account Email/ USDT Wallet Address</label>
                  <input type="text" />
                </div>
              </form>
            ) : form === "eth" ? (
              <form className="withdraw-form">
                <div className="form_input">
                  <label htmlFor="">Withdraw Amount</label>
                  <input type="number" />
                </div>
                <div className="form_input">
                  <label htmlFor=""> Withdraw Charge</label>
                  <input type="number" value={"0.00"} disabled />
                </div>
                <div className="form_input">
                  <label htmlFor="">Final Withdraw Amount</label>
                  <input type="number" />
                </div>
                <div className="form_input">
                  <label htmlFor=""> Account Email/ ETH Wallet Address</label>
                  <input type="text" />
                </div>
              </form>
            ) : null}
          </div>
        </div>
        <div className="withdraw-right">
          <h5>Withdrawal Instruction</h5>
          <ol>
            <li>Step 1: Do this</li>
            <li>Step 2: Do that</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Withdraw;

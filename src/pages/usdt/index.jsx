import React, { useEffect, useState } from "react";
import "./index.css";
import usdt from "../../assets/qr.png";
import btc from "../../assets/btcqr.png";
import eth from "../../assets/ethqr.png";

const Usdt = () => {
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState("");
  const [qr, setQr] = useState(null);

  useEffect(() => {
    let amount = localStorage.getItem("amount");
    let currency = localStorage.getItem("currency");
    amount = JSON.parse(amount);
    setAmount(amount);
    setCurrency(currency);
    if (currency === "USDT") {
      setQr(usdt);
    } else if (currency === "BTC") {
      setQr(btc);
    } else if (currency === "ETH") {
      setQr(eth);
    } else {
      setQr(null);
    }
  }, []);

  return (
    <div className="usdt">
      <div className="usdt-container">
        <div className="bank-usdt">
          <h4 className="usdt-header">Bank payment information</h4>
          <div className="usdt-method">
            <p>Method</p>
            <p className="curr">{currency}</p>
          </div>
          <div className="usdt-steps">
            <h5>Steps to make a deposit:</h5>
            <ol className="usdt-list">
              <li> Copy the company wallet address below.</li>
              <li> Then go to your wallet app and make a payment.</li>
            </ol>
            <p>
              Wallet address:{" "}
              <span style={{ fontWeight: 600 }}>
                "TAfdUWHHKMWbuTcMhMBkTFqnRY9ULvsV94"
              </span>
            </p>
            <p>
              In a few minutes after payment, your balance would be updated.
            </p>
          </div>
          <div className="usdt-qr">
            <img src={qr} alt="" className="qr" />
          </div>
        </div>
        <div className="pay-usdt">
          <h4 className="usdt-header">Payment information</h4>
          <div className="usdt-method">
            <p>Gateway:</p>
            <p className="curr">{currency}</p>
          </div>
          <div className="usdt-method">
            <p>Amount:</p>
            <p className="curr">{amount} USD</p>
          </div>
          <div className="usdt-method">
            <p>Charge:</p>
            <p className="curr">0.00 USD</p>
          </div>
          <div className="usdt-method">
            <p>Conversion:</p>
            <p className="curr">1 USD = 1.00000000</p>
          </div>
          <div className="usdt-method">
            <p>Total payable amount:</p>
            <p className="curr">5000.00000000 usdt</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usdt;

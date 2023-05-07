import React, { useEffect, useState } from "react";
import "./index.css";
import usdt from "../../assets/qr.png";
import btc from "../../assets/btcqr.png";
import eth from "../../assets/ethqr.png";
import { useSelector } from "react-redux";
import { useDepositMutation } from "state/api";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Usdt = () => {
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState("");
  const [qr, setQr] = useState(null);
  const id = useSelector((state) => state.global.user?._id);
  const [deposit] = useDepositMutation();
  const navigate = useNavigate();

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

  const sendPayment = async () => {
    const response = await fetch(
      `https://wealthgo.onrender.com/transactions/${id}/deposit`,
      {
        method: "POST",
        body: JSON.stringify({
          amount: amount,
          paymentMethod: currency,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );

    const data = await response.json();

    setTimeout(() => {
      toast.success(`deposit of ${amount} has been made`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }, 3000);

    if (data) {
      navigate("/deposits");
      localStorage.removeItem("amount");
    }
  };

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
      <div className="usdt-paybtn">
        <button onClick={sendPayment}>Sent Payment</button>
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Usdt;

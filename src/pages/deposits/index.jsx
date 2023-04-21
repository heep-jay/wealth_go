import React, { useState } from "react";
import "./index.css";
import Header from "../../components/header";
import usdt from "../../assets/usdt.png";
import eth from "../../assets/eth.png";
import btc from "../../assets/btc.png";
import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  Modal,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Deposits = () => {
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState(500);
  const navigate = useNavigate();

  const handleOpen = () => {
    // localStorage.setItem("currency", currency);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#fffff",
    // border: "1px solid #000",
    borderRadius: "15px",
    boxShadow: 24,
    padding: "2rem 1.5rem",
  };

  return (
    <div className="deposits">
      <Header dashtitle="Deposits" dashsub="Make deposits" />
      <div className="deposits-container">
        <div className="deposits-cards">
          <div className="deposit-card">
            <img src={usdt} alt="usdt" />
            <h5>PAY USDT</h5>
            <div className="deposit-btn">
              <button
                onClick={() => {
                  setOpen(true);
                  localStorage.setItem("currency", "USDT");
                }}
              >
                Pay Now
              </button>
            </div>
          </div>
          <div className="deposit-card">
            <img src={eth} alt="usdt" />
            <h5>PAY USDT</h5>
            <div className="deposit-btn">
              <button
                onClick={() => {
                  setOpen(true);
                  localStorage.setItem("currency", "ETH");
                }}
              >
                Pay Now
              </button>
            </div>
          </div>
          <div className="deposit-card">
            <img src={btc} alt="usdt" />
            <h5>PAY USDT</h5>
            <div className="deposit-btn">
              <button
                onClick={() => {
                  setOpen(true);
                  localStorage.setItem("currency", "BTC");
                }}
              >
                Pay Now
              </button>
            </div>
          </div>
        </div>
        {/* <Button>Open modal</Button> */}
        <Modal open={open} onClose={handleClose}>
          <Box style={style} bgcolor="#ffffff">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Deposit Amount
            </Typography>
            <FormControl fullWidth sx={{ mt: 2.5, ml: 0 }}>
              <InputLabel htmlFor="outlined-adornment-amount">
                Amount
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
                label="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </FormControl>
            <Box
              display="flex"
              alignItems="center"
              gap="1rem"
              justifyContent="flex-end"
              m="1rem"
            >
              <Button onClick={handleClose} variant="outlined" color="error">
                Cancel
              </Button>
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  localStorage.setItem("amount", amount);
                  //   localStorage.setItem("currency", currency);
                  navigate("/deposits/payment");
                }}
                variant="contained"
                color="success"
              >
                Deposit
              </Button>
            </Box>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default Deposits;

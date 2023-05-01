import React, { useState } from "react";
import "./index.css";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import { useGetWithdrawalsQuery } from "state/api";
import { Box } from "@mui/material";

const Withdraw = () => {
  const [form, setForm] = useState("");
  const id = useSelector((state) => state.global.user?._id);

  const { data, isLoading } = useGetWithdrawalsQuery(id);
  console.log(data);

  const columns = [
    {
      field: "_id",
      headerName: "Transaction ID",
      minWidth: 200,
      flex: 0.5,
    },
    {
      field: "customerId",
      headerName: "Customer ID",
      minWidth: 200,
      flex: 0.5,
    },
    {
      field: "transactionType",
      headerName: "Transaction Type",
      width: 150,
      minWidth: 200,
      flex: 0.5,
    },

    {
      field: "amount",
      headerName: "Amount",
      minWidth: 100,
      flex: 0.3,
    },
    {
      field: "verification",
      headerName: "Verification",
      minWidth: 100,
      flex: 0.5,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      minWidth: 100,
      flex: 0.5,
    },
  ];
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
      <Box
        mt="40px"
        height="55vh"
        // maxWidth={"1200px"}
        // m="0 auto"
        width="98%"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#165e3b",
            color: "#fffff",
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: "#f5f5f5",
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: "#165e3b",
            color: "#165e3b",
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${"#165e3b"} !important`,
          },
        }}
      >
        <DataGrid
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          // rows={data.withdrawals || []}
          rows={data.withdrawals || []}
          columns={columns}
        />
      </Box>
    </div>
  );
};

export default Withdraw;

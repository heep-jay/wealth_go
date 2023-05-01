import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./pages/home";
import Layout from "./pages/layout";
import Faqs from "./pages/faq";
import AuthLayout from "./pages/AuthLayout";
import Login from "./components/login";
import Register from "./components/register";
import DashboardLayout from "./pages/DashboardLayout";
import Profile from "./pages/profile";
import Transactions from "./pages/transactions";
import Dashboard from "./pages/dashboard";
import Deposits from "./pages/deposits";
import Usdt from "./pages/usdt";
import Withdraw from "./pages/withdraw";
import Plan from "./pages/plans";
import ChangePassword from "./pages/changepassword";
import VerifyEmail from "./components/verifyEmail";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/faq" element={<Faqs />} />
          </Route>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<VerifyEmail />} />
            <Route path="/register/verify" element={<Register />} />
          </Route>
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/deposits" element={<Deposits />} />
            <Route path="/deposits/payment" element={<Usdt />} />
            <Route path="/withdraw" element={<Withdraw />} />
            <Route path="/profile" element={<Profile />} />
            <Route
              path="/profile/changepassword"
              element={<ChangePassword />}
            />
            <Route path="/plans" element={<Plan />} />

            <Route path="/transactions" element={<Transactions />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

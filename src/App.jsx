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
            <Route path="/register" element={<Register />} />
          </Route>
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/transactions" element={<Transactions />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

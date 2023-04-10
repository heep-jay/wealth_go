import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./pages/home";
import Layout from "./pages/layout";
import Faqs from "./pages/faq";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/faq" element={<Faqs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

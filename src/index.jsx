import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.scss";

import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
import Home from "./pages/home";
import Error from "./pages/error";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <div className="layout">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Navigate to="/user/12" />} />
            <Route path="/user/:id" element={<Home />} />
            <Route path="/error" element={<Error />} />
            <Route path="*" element={<Navigate to="/error" replace />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
);

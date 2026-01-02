import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.scss";
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Sidebar />
    </Router>
  </React.StrictMode>
);

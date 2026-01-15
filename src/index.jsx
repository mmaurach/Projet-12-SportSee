import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";

import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
import Home from "./pages/home";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <div className="layout">
          <Sidebar />
          <Home /> 
        </div>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

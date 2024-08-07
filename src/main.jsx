import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import { AuthWrapper } from "../auth/Private.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  
    <AuthWrapper>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthWrapper>
);

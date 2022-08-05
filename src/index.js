import React from "react";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import ReactDOM from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import reportsReducer from "./features/reports/Reports";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(document.getElementById("root"));

const store = configureStore({
  reducer: {
    reports: reportsReducer,
  },
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

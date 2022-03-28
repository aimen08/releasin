import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import MainRoute from "./routes/MainRoute";
import { StoreProvider } from "easy-peasy";
import store from "./store";

const rootElement = document.getElementById("root");
render(
  <StoreProvider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainRoute />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </StoreProvider>,
  rootElement
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
